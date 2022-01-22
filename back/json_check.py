import json

def search_word(word):
    json_file = open("seword.json", 'r',encoding="utf-8_sig")
    json_load = json.load(json_file)
    try:
        print(json_load[word])
        return json_load[word]
    except:
        return "None"
def insert_word(word,mean,category==none):
    json_file = open("seword.json", 'w',encoding="utf-8_sig")
    json.dump(json_file,word)
    json.dump(json_file,mean)
    json.dump(json_file,category)

if __name__ == "__main__":
    search_word('投げる')