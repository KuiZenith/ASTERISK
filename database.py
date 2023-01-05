import datetime

import eel
import psycopg2
import psycopg2.extras as pe



host = "database-1.cm1fm2c2qdtv.us-east-1.rds.amazonaws.com"
dbname = "finalProject" # "finalProject" or "postgres"
user = "postgres"
password = "beef1243"
sslmode = "allow"

conn = psycopg2.connect(f"host={host} user={user} dbname={dbname} password={password} sslmode={sslmode}")
conn.autocommit = True
cursor = conn.cursor(cursor_factory=pe.RealDictCursor)



@eel.expose
def select_company():
  cursor.execute(f"SELECT * FROM company")
  return [dict(record) for record in cursor.fetchall()]

@eel.expose
def select_price_within(company_id: str, date_range: list):
  cursor.execute(f"SELECT * FROM price WHERE price.company_id = '{company_id}' and price.date BETWEEN '{date_range[0]}' AND '{date_range[1]}'")
  results = [dict(record) for record in cursor.fetchall()]
  for result in results: result["date"] = result["date"].strftime("%Y-%m-%d")
  return results

@eel.expose
def select_news_within(company_id: str, date_range: list):
  cursor.execute(f"SELECT * FROM report JOIN article ON report.link = article.link WHERE report.company_id = '{company_id}' and report.date BETWEEN '{date_range[0]}' AND '{date_range[1]}'")
  results = [dict(record) for record in cursor.fetchall()]
  for result in results: result["date"] = result["date"].strftime("%Y-%m-%d")
  return results
