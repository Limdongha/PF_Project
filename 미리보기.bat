@echo off
cd /d "%~dp0"

echo ============================================
echo   Portfolio Preview Server
echo ============================================
echo.
echo  A browser tab will open automatically.
echo  To STOP the server: close this window or press Ctrl+C.
echo.

start "" "http://localhost:8000/index.html"

python -m http.server 8000

echo.
echo [!] Server stopped. If there is an error above, copy it to me.
pause
