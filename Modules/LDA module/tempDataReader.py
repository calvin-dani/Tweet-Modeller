import pandas as pd

def readTempCSV():

    print("...STARTING TO FETCH DATA......")

    # Read Sample CSV file
    pathOfHT = "./Sample Readme Files/npr.csv"
    df = pd.read_csv(pathOfHT)

    print("...FINISHED FETCHING DATA......")

    return df
