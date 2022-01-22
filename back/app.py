from flask import Flask, jsonify, request, render_template, redirect, session
import spacy
import json

async_mode = None
app = Flask(__name__)
app.config.from_object(__name__)

#自動でテンプレートが読み取られるかの確認
app.config["TEMPLATES_AUTO_RELOAD"] = True



@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resive", methods=["POST"])
def resive():
    print("access")
    date = request.get_json()
    print(date)
    print(date["text"])
    literal_date = date["text"]

    res = {"mean":literal_date}
    return jsonify(res)

if __name__ == "__main__":
    app.run()