import webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import requests

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


if __name__ == "__main__":
    print("SERVER STARTED")
    httpd = HTTPServer(("localhost", 8082), Serv)
    httpd.serve_forever()
    