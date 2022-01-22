from loadtable import loaddata
import csv


def main():
    table, category = loaddata()


    objlist = []
    for i in range(len(category)):
        tb = table[i].text
        objlist.extend(createCsvData(tb,category[i]))

    print(len(objlist))

    with open('./seword.csv', 'w') as f:
        writer = csv.writer(f)
        writer.writerow(["word", "pronounce", "mean", "example", "category"])
        for obj in objlist:
            writer.writerow(obj)


def createCsvData(tb, category):
    objlist = []
    tdlist = list(filter(None, tb.splitlines()))
    for i in range(int(len(tdlist)/4)):    
        if i == 0: continue
        word = tdlist[4*i+0]
        pro = tdlist[4*i+1]
        mean = tdlist[4*i+2]
        example = tdlist[4*i+3]
        obj = [word, pro, mean, example, category]
        objlist.append(obj)
    return objlist


if __name__ == "__main__":
    main()