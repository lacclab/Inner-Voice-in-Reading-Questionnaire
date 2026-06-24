#!/usr/bin/env python3
"""Local dev server that disables caching, so every browser refresh shows the
latest edits. Run from the project root:  python3 tools/serve.py [port]"""
import http.server, socketserver, sys, os

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        super().end_headers()


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), NoCache) as httpd:
    print(f"Serving (no-cache) on http://localhost:{PORT}/")
    httpd.serve_forever()
