import eel

import database
import model
import update



def test():
  # print(model.model_predict("2330", ["2019-01-01", "2019-02-11"]))
  update.crawl_data("2603")

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
