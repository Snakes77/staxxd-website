#!/bin/bash
# Package the out folder for Hostinger upload

cd "$(dirname "$0")"

# Create upload-ready folder
rm -rf upload-ready
mkdir -p upload-ready

# Copy everything from out, preserving structure
cp -R out/* upload-ready/

# Create a zip file that preserves folder structure
cd upload-ready
zip -r ../staxxd-upload.zip . -x "*.DS_Store"
cd ..

echo "✅ Created upload-ready folder and staxxd-upload.zip"
echo "📁 Upload the ENTIRE 'upload-ready' folder contents to Hostinger public_html"
echo "   OR upload and extract staxxd-upload.zip on Hostinger"
