import requests
from bs4 import BeautifulSoup
import json


def main():
    load_url = 'https://qiita.com/t_nakayama0714/items/478a8ed3a9ae143ad854'
    response = requests.get(load_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    # title = soup.find('title').get_text()
    # table = soup.find('table').text


    category = []
    for c in soup.find_all('h1'):
        category.append(c.text.replace('\n',''))
    category = category[2:]
    # print(category)


    table = []
    for element in soup.find_all('table'):
        table.append(element)
        print(element.text)


    objdirc = {}
    for i in range(len(category)):
        tb = table[i].text
        objdirc.update(createJsonData(tb,category[i]))


    with open('./seword.json', 'w') as f:
        json.dump(objdirc, f, ensure_ascii=False, indent=4)



def createJsonData(tb, category):
    objdirc = {}
    tdlist = list(filter(None, tb.splitlines()))
    for i in range(int(len(tdlist)/4)):    
        obj = {}
        if i == 0: continue
        word = tdlist[4*i+0]
        pro = tdlist[4*i+1]
        mean = tdlist[4*i+2]
        example = tdlist[4*i+3]
        obj[word] = {
            "pronunce" : pro,
            "mean" : mean,
            "example" : example,
            "category" : category
        }
        objdirc.update(obj)
    return objdirc


if __name__ == "__main__":
    main()