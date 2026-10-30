@echo off
title ODomoFit - Servidor Local
echo =========================================================
echo             ODomoFit - Servidor Web Local
echo =========================================================
echo.
echo Iniciando o servidor web da ODomoFit...
echo O site abrira automaticamente no seu navegador em:
echo http://localhost:5174/
echo.
start http://localhost:5174/
call npm.cmd run dev
if %errorlevel% neq 0 (
    echo.
    echo Tentando iniciar via npx vite...
    call npx.cmd vite --open
)
pause
