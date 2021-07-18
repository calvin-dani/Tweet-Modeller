
import sys
import requests


url = 'http://localhost:8080/'

def main():
    print("starting")
    x = requests.post(url+'2')
    print("??")
    print(x)
    requests.post(url+'3')
    requests.post(url+'4')

main()