@echo off
cd /d "%~dp0"

echo ============================================
echo   Portfolio Preview Server (no-cache)
echo ============================================
echo.
echo  This always serves the LATEST files.
echo  A browser tab opens automatically.
echo  To STOP: close this window or press Ctrl+C.
echo.

REM --- Stop any preview server already using port 8000 ---
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8000.*LISTENING"') do taskkill /F /PID %%a >nul 2>&1

REM --- Open the browser shortly AFTER the server starts (waits ~2s) ---
start "" cmd /c "ping -n 3 127.0.0.1 >nul & start http://localhost:8000/index.html?v=%RANDOM%"

REM --- Start the no-cache server (this window keeps it running) ---
python serve.py

echo.
echo [!] Server stopped. If there is an error above, copy it to me.
pause
