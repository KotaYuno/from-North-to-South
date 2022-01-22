import json

def search_word(word):
    json_file = open("seword.json", 'r',encoding="utf-8_sig")
    json_load = json.load(json_file)
    try:
        print(json_load[word])
        return json_load[word]
    except:
        print("None")
        return "None"

def insert_word(word,pro=None,mean=None,ex=None,cate=None):
    json_file = open("seword.json", 'r',encoding="utf-8_sig")
    json_load = json.load(json_file)
    data = json_load[word]
    new_data = {
        "pronounce": pro,
        "mean": mean,
        "example": ex,
        "category": cate
        }
    data.append(new_data)
    json_load[word] = data
    with open('./seword.json', 'w') as f:
        json.dump(json_load, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    insert_word('投げる')
    search_word('投げる')


