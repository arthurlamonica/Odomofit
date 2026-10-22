@echo off
title ODomoFit - Servidor Local
echo =========================================================
echo             ODomoFit - Servidor Web Local
echo =========================================================
echo.
echo Abrindo o site no navegador em: http://localhost:5174/
echo Aguarde alguns instantes...
echo.
start http://localhost:5174/
npm.cmd run dev
pause
