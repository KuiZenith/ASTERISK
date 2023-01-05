import random
import re
import time
import requests
import logging

from datetime import datetime, timedelta
from tqdm import tqdm

import eel
import pygooglenews

from bs4 import BeautifulSoup

import database



urllib3_logger = logging.getLogger('urllib3')
urllib3_logger.setLevel(logging.CRITICAL)



MAX_NEWS_LEN = 100

gn = pygooglenews.GoogleNews(lang="zh", country="TW")

companies_keywords = {
  "2330": {
    "target": "台積電",
    "keywords": ["台積電"]
  },
  "2603": {
    "target": "長榮海運",
    "keywords": ["長榮", "海運", "長榮海運"]
  }
}



@eel.expose
def crawl_data(company_id: str):
  records = database.select_news_after(company_id, "2018-01-01")
  records.sort(key=lambda record: record["date"])
  start = datetime.strptime(records[-1]["date"], "%Y-%m-%d") + timedelta(days=1)
  end = datetime.now()
  delta = timedelta(days=30)
  cache = { record["link"]: (record["title"], record["content"]) for record in records }
  for day in tqdm(range((end - start).days + 1)):
    num_news = 0
    rules = dict.fromkeys((ord(char) for char in u"\t\n\r\xa0\u3000"))
    date_from = (start + timedelta(days=day) - delta).strftime("%Y-%m-%d")
    date_to = (start + timedelta(days=day)).strftime("%Y-%m-%d")
    results = gn.search(companies_keywords[company_id]["target"], from_=date_from, to_=date_to)
    in_cache = True
    for entry in results["entries"][:MAX_NEWS_LEN]:
      title = ""
      content = ""
      if not "link" in entry: continue
      if entry["link"] in cache: title, content = cache[entry["link"]]
      else:
        try: response = requests.get(f"{entry['link']}", timeout=5)
        except: continue
        if response.status_code == 503: continue
        response.encoding = "utf-8"
        soup = BeautifulSoup(response.text, "html.parser")
        title = entry["title"]
        content = "\n".join([re.sub(r"\s\s+", " ", p.text.strip().translate(rules)) for p in soup.select("p:not(a p)") if len([char for char in p.text if ord(char) >= 128]) > 20])
        cache[entry["link"]] = (title, content)
        in_cache = False
      do_skip = True
      for keyword in companies_keywords[company_id]["keywords"]:
        if keyword in content: do_skip = False
      if do_skip: continue
      record = {
        "company_id": company_id,
        "date": date_to,
        "link": entry["link"],
        "title": title,
        "content": content
      }
      try: database.insert_article(record)
      except: print("Already in!")
      database.insert_report(record)
      num_news += 1
    if in_cache: time.sleep(random.random() + 0.3)
    if not num_news: time.sleep(random.random() + 0.3)
