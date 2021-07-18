import logging
import os
import sys
from argparse import ArgumentParser
from time import time

import webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import requests


sys.path.append("TwitterAPI")
sys.path.append("LDA")
sys.path.append("V2A")
sys.path.append("A2T")
sys.path.append("GraphicalRepresentation")


import base_tweet_parser as BaseParser
import threaded_tweet_parser as ThreadedParser
import get_handlers as GetHandlers

import topicModelling as topic_modeler

import videotoAudio as video_audio
import audiotoText as audio_text
import to_googleBucket as upload_audio_cloud
import ProjectOutput as outputGraph


import pandas as pd

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

url = 'http://localhost:8080/'

def main():
    topic = "Health"
    limitOfTweet = 10

    parser = BaseParser.BaseTweetParser()

    twitter_handlers = GetHandlers.GetHandlers().get_twitter_handlers(topic)

    for tweeter_handle in twitter_handlers:

        path_to_video = os.path.join("Data\\Fetched", tweeter_handle, "videos")
        path_to_tweet = os.path.join("Data\\Fetched", tweeter_handle, "tweets")
        try:
            os.makedirs(path_to_video, exist_ok=False)
            os.makedirs(path_to_tweet, exist_ok=False)
        except Exception:
            logging.error("Twitter handler already extracted")
            continue

        parser.fetch(tweeter_handle, limit=limitOfTweet)

        start = time()
        parser.download(parser.video_urls_textid, "videos", os.path.join(path_to_video))
        end = time()
        logging.info("Spent {} seconds downloading".format(end - start))
        logging.info("Fetched {} video files".format(len(parser.video_urls_textid)))

        logging.info("Saving tweets and video links to file")
        data_frame = pd.DataFrame(parser.tweet_text, columns=["Tweets"])
        data_frame.to_csv(path_to_tweet + "\\" + tweeter_handle + ".csv", index=False)
    

    video_audio.convert_to_audio(topic)
    upload_audio_cloud.upload_all_audios(topic)
    audio_text.transcribe_file(topic)
    topic_modeler.topicModel(topic)
    outputGraph.parse_data_to_output(topic)

class Serv(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = "./GraphicalRepresentation/ProjectOutputWebpage.html"
        try:
            file_to_open = open(self.path[:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, "utf-8"))

    def do_POST(self):
        if self.path == "/":
            self.path = "./GraphicalRepresentation/project_output_result.html"
        try:
            file_to_open = open(self.path[:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, "utf-8"))
        main()


if __name__ == "__main__":
    print("SERVER STARTED")
    httpd = HTTPServer(("localhost", 8080), Serv)
    httpd.serve_forever()
    
