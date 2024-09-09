#!/bin/bash

# Define the project directory as the directory of the script
PROJECT_DIR="$(dirname "$0")"

echo ".:: Crypto Signal Robot - Shell Script ::."

# Remove and recreate the static directory
rm -rf "$PROJECT_DIR/app/static"
mkdir -p "$PROJECT_DIR/app/static"

# Remove the build directory if it exists
rm -rf "$PROJECT_DIR/app/frontend/build"

# Change to the frontend directory
cd "$PROJECT_DIR/app/frontend" || exit

# Check if node_modules directory exists
if [ -d "node_modules" ]; then
    echo "[Status] Building program..."
    npm run build > /dev/null 2>&1
else
    echo "[Status] Creating React scripts..."
    npm install react-scripts --save > /dev/null 2>&1
    echo "[Status] Building program..."
    npm run build > /dev/null 2>&1
fi

echo "[Status] Returning to initial directory..."
cd "$PROJECT_DIR/../.."

echo "[Status] Running Python server..."
# Adjust the Python command based on your Python installation
python3 "$PROJECT_DIR/run.py"