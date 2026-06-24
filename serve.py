# 로컬 미리보기 서버 (캐시 끔)
# 브라우저가 js/css/html을 캐시해서 수정이 안 보이는 문제를 막기 위해,
# 모든 응답에 no-cache 헤더를 붙여 항상 최신 파일을 받게 합니다.
#
# ThreadingHTTPServer를 쓰는 이유:
#   싱글스레드 서버는 요청을 하나씩만 처리하므로, 히어로 영상 스트리밍이
#   연결을 붙잡으면 그 뒤의 썸네일 요청들이 줄서서 기다리다 끊깁니다
#   (콘솔의 WinError 10054). 멀티스레드로 영상과 썸네일을 동시에 처리합니다.
import http.server

PORT = 8000


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def handle_one_request(self):
        # 브라우저가 영상/이미지 로딩을 중간에 취소하면 ConnectionReset이
        # 발생하는데, 이는 정상 동작이므로 콘솔에 에러를 찍지 않고 넘어갑니다.
        try:
            super().handle_one_request()
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
            self.close_connection = True

    def log_message(self, fmt, *args):
        # 404(파일 없음)는 보이게 남기고, 나머지 잡다한 로그는 줄입니다.
        status = args[1] if len(args) > 1 else ""
        if status.startswith("4") or status.startswith("5"):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    http.server.ThreadingHTTPServer.allow_reuse_address = True
    with http.server.ThreadingHTTPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Serving (no-cache, threaded) on http://localhost:{PORT}")
        print("종료하려면 Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n서버 종료")
