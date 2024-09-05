@echo off
set PROJECT_DIR=%~dp0
echo .:: Crypto Signal Robot - Shell Script .::
rmdir /s /q %PROJECT_DIR%\app\static > NUL 2>&1
mkdir %PROJECT_DIR%\app\static
rmdir /s /q %PROJECT_DIR%\app\frontend\build > NUL 2>&1
if exist "%PROJECT_DIR%\app\frontend\node_modules" (
    cd %PROJECT_DIR%\app\frontend
    echo [Status] Building program...
    call npm run build > NUL 2>&1
) else (
    cd %PROJECT_DIR%\app\frontend
    echo [Status] Creating React scripts...
    call npm install react-scripts --save > NUL 2>&1
    echo [Status] Building program...
    call npm run build > NUL 2>&1
)
echo [Status] Returning to initial directory...
cd ..\..
echo [Status] Running Python server...
%PYTHON_PATH%\python.exe %PROJECT_DIR%\run.py