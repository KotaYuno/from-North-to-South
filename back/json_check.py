import json

json_file = open("seword.json", 'r',encoding="utf-8_sig")
json_load = json.load(json_file)

print(json_load["渡す"]["mean"])

