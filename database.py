import eel, psycopg2
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
def select_price():
  cursor.execute(f"SELECT * FROM price")
  return [dict(record) for record in cursor.fetchall()]

@eel.expose
def select_news_within(start: str, end: str):
  cursor.execute(f"SELECT * FROM report JOIN article ON report.link = article.link WHERE report.date BETWEEN '{start}' AND '{end}'")
  return [dict(record) for record in cursor.fetchall()]
