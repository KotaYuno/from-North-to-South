from loadtable import loaddata
import json


# id_global = 1

def main():
    table, category = loaddata()


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
        obj[word] = [{
            # "id" : id_global,
            # "word" : word,
            "pronounce" : pro,
            "mean" : mean,
            "example" : example,
            "category" : category
        }]
        objdirc.update(obj)
        # id_global = id_global+1
    return objdirc


if __name__ == "__main__":
    main()