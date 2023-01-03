import eel
import database



def test():
  print(database.select_news_within("2330", ["2020-01-01", "2020-01-01"]))
  print(database.select_news_within("2330", ["2021-01-01", "2021-01-01"]))

def close_callback(route, websockets):
  if not websockets:
    database.conn.close()
    exit()

def main():
  # test()
  eel.init("./dist")
  eel.start("./index.html", size=(1080, 720), position=(0, 0), port=8080, close_callback=close_callback)



if __name__ == "__main__":
  main()
