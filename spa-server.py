#!/usr/bin/env python3
import http.server
import socketserver
import os
from urllib.parse import unquote

PORT = 8000
DIRECTORY = "dist"

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def do_GET(self):
        # URLをデコード
        path = unquote(self.path.split('?')[0])
        
        # ファイルの実際のパスを取得
        file_path = os.path.join(DIRECTORY, path.lstrip('/'))
        
        # ファイルが存在しない、かつディレクトリでもない場合はindex.htmlを返す
        if not os.path.exists(file_path) or os.path.isdir(file_path):
            if not path.endswith('/') and not os.path.splitext(path)[1]:
                # SPAルート（拡張子なし）の場合はindex.htmlを返す
                self.path = '/index.html'
        
        return super().do_GET()

with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    print(f"Serving SPA at http://localhost:{PORT}")
    print(f"Directory: {DIRECTORY}")
    httpd.serve_forever()
