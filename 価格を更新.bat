@echo off
chcp 65001 > nul
cd /d "%~dp0"
node tools\fetch-prices.mjs %*
echo.
pause
