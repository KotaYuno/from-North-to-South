from flask import Flask, jsonify, request, render_template, redirect, session
import spacy
import json

from json_check import search_word

async_mode = None
app = Flask(__name__)
app.config.from_object(__name__)

#自動でテンプレートが読み取られるかの確認
app.config["TEMPLATES_AUTO_RELOAD"] = True

#jsonファイルをASCIIでエンコードする為のもの
app.config['JSON_AS_ASCII'] = False


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resive", methods=["POST"])
def resive():
    date = request.get_json()
    literal_date = date["text"]

    tmp = search_word(literal_date)
    return tmp

if __name__ == "__main__":
    app.run()