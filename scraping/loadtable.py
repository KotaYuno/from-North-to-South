import requests
from bs4 import BeautifulSoup


def loaddata():
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


    return table, category


if __name__ == "__main__":
    loaddata()