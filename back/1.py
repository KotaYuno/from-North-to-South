import json
import os
print(os.getcwd())
json_file = open("data.json", 'r')
json_load = json.load(json_file)

print(json_load)