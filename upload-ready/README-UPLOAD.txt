HOSTINGER UPLOAD INSTRUCTIONS
=============================

IMPORTANT: You must upload FOLDERS, not just files!

The Hostinger file manager flattens folders if you select individual files.
You need to upload the ENTIRE FOLDER STRUCTURE.

OPTION 1: Upload via FTP (RECOMMENDED - preserves folders automatically)
1. Get FTP credentials from Hostinger
2. Use Cyberduck or FileZilla
3. Connect and drag this entire folder's contents to public_html

OPTION 2: Upload via File Manager
1. In Hostinger File Manager, go to public_html
2. Delete everything currently there
3. Upload the ENTIRE contents of this folder
   - Make sure you're uploading FOLDERS, not just files
   - The _next, images, videos, and services folders MUST be uploaded as folders

After upload, verify:
- public_html/_next/static/css/ba4ce3e76e3f4b42.css exists
- public_html/images/Staxxd.png exists
- public_html/videos/hero-staxxd.mov exists

If files are still flat in the root, the file manager didn't preserve folders.
Use FTP instead.
