@echo off
echo Starting VisionLux PWA local server...
echo Open Chrome and go to: http://localhost:3737
echo Press Ctrl+C to stop the server.
echo.
cd /d "%~dp0"
where python >nul 2>nul && python -m http.server 3737 || (
  where py >nul 2>nul && py -m http.server 3737 || (
    echo Python not found. Trying Node.js...
    where npx >nul 2>nul && npx -y serve . --listen 3737 --no-clipboard || (
      echo.
      echo ERROR: Could not start server. Please install Python or Node.js.
      echo Alternatively, open the index.html file in Chrome and use the Live Server VS Code extension.
      pause
    )
  )
)
pause
