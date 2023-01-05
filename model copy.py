import statistics

from datetime import datetime, timedelta

import numpy as np

import eel
import tensorflow

from tensorflow import keras
from transformers import BertTokenizer

import database



MAX_TITLE_LEN = 64
MAX_CONTENT_LEN = 1024



@eel.expose
def model_predict(company_id: str, date_range: list):
  tokenizer = BertTokenizer.from_pretrained("./models/tokenizer")
  model = keras.models.load_model(f"./models/{company_id}/model.h5")

  start_date = datetime.strptime(date_range[0], "%Y-%m-%d")
  end_date = datetime.strptime(date_range[1], "%Y-%m-%d")
  period = (end_date - start_date).days
  model_range = 30
  prior_range = [(start_date - timedelta(days=15 + model_range)).strftime("%Y-%m-%d"), date_range[1]]

  prices = sorted(database.select_price_within(company_id, prior_range), key=lambda record: record["date"])
  news = sorted(database.select_news_within(company_id, date_range), key=lambda record: record["date"])

  times = [0 for i in range(period)]
  daily_prices = []
  titles = []
  contents = []
  trends = []
  begin = [index for index, record in enumerate(prices) if record["date"] <= (start_date - timedelta(days=model_range)).strftime("%Y-%m-%d")][-1]
  index = 0
  real_prices = []

  print(len(prices), begin, prices[begin]["date"])

  for record in news:
    encoded_title = tokenizer.encode(record["title"])
    encoded_content = tokenizer.encode(record["content"])
    titles.append(encoded_title[:MAX_TITLE_LEN] + [0] * (MAX_TITLE_LEN - len(encoded_title)))
    contents.append(encoded_content[:MAX_CONTENT_LEN] + [0] * (MAX_CONTENT_LEN - len(encoded_content)))
    current_date = datetime.strptime(record["date"], "%Y-%m-%d")
    if current_date < start_date: continue
    times[(current_date - start_date).days] += 1

  for day in range((end_date - start_date).days + model_range):
    current_date = start_date + timedelta(days=day - model_range)
    price_date = datetime.strptime(prices[begin + index]["date"], "%Y-%m-%d")
    while datetime.strptime(prices[begin + index + 1]["date"], "%Y-%m-%d") < current_date: index += 1
    if price_date < current_date:
      if len(daily_prices): daily_prices.append(daily_prices[-1])
      else: daily_prices.append([prices[begin + index - 1]["highest"], prices[begin + index - 1]["lowest"], prices[begin + index - 1]["price"]])
    elif price_date == current_date: daily_prices.append([prices[begin + index]["highest"], prices[begin + index]["lowest"], prices[begin + index]["price"]])
    print(price_date, current_date, price_date > current_date)
    if current_date == prices[begin + index]["date"]: real_prices.append(prices[begin + index]["price"])
    elif price_date < current_date: real_prices.append(real_prices[-1])

  print(real_prices)

  real_prices.append(prices[-1]["price"])

  for day in range((end_date - start_date).days):
    for i in range(times[day]):
      trends.append(daily_prices[day:day + model_range])

  results = []
  predicted = model.predict([np.array(titles), np.array(contents), np.array(trends)]).flatten()

  count_sum = 0
  for count in times:
    results.append(float(statistics.mean(predicted[count_sum:count_sum + count])))
    count_sum += count

  return (np.array(results) - np.array(real_prices)).tolist()
