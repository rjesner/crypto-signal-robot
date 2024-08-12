@echo off
echo .:: Crypto Signal Robot - Shell Script .::
rmdir /s /q app\static > NUL 2>&1
mkdir app\static
rmdir /s /q app\frontend\build > NUL 2>&1
if exist "app\frontend\node_modules" (
    cd app\frontend
    echo [Status] Building program...
    call npm run build > NUL 2>&1
) else (
    cd app\frontend
    echo [Status] Creating React scripts...
    call npm install react-scripts --save > NUL 2>&1
    echo [Status] Building program...
    call npm run build > NUL 2>&1
)
echo [Status] Returning to initial directory...
cd ..\..
echo [Status] Running Python server...
%PYTHON_PATH%\python.exe run.py