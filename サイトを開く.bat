@echo off
chcp 65001 > nul
cd /d "%~dp0"
title スペック図鑑
node server.mjs --open
pause
