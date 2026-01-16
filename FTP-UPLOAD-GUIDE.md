# Simple FTP Upload Guide for Hostinger

## Step 1: Get Your FTP Credentials from Hostinger

1. Log into your Hostinger account
2. Go to **hPanel** (or your control panel)
3. Click on **Files** → **FTP Accounts**
4. You'll see your FTP details:
   - **FTP Host** (something like: `ftp.yourdomain.com` or an IP address)
   - **FTP Username** (usually your cPanel username)
   - **FTP Password** (your FTP password)

**Write these down - you'll need them in Step 3**

---

## Step 2: Download Cyberduck (Free FTP Software)

1. Go to: https://cyberduck.io/download
2. Click **Download Cyberduck**
3. Open the downloaded file
4. Drag Cyberduck to your Applications folder
5. Open Cyberduck from Applications

---

## Step 3: Connect to Hostinger

1. In Cyberduck, click **Open Connection** (top left)
2. At the top, select **FTP (File Transfer Protocol)** from the dropdown
3. Enter your details:
   - **Server:** Your FTP Host from Step 1
   - **Username:** Your FTP Username from Step 1
   - **Password:** Your FTP Password from Step 1
   - **Port:** Leave as 21 (default)
4. Click **Connect**

You should now see your Hostinger files!

---

## Step 4: Navigate to public_html

1. In Cyberduck, you'll see folders
2. Double-click on **public_html** folder
3. This is where your website files go

---

## Step 5: Delete Old Files (if any)

1. In Cyberduck, select all files in `public_html`
2. Right-click → **Move to Trash** (or press Delete)
3. Empty the folder

---

## Step 6: Upload Your Website

1. On your Mac, open Finder
2. Go to: `/Users/paulmeakin/Desktop/staxxd-website-template/upload-ready/`
3. Select ALL files and folders inside `upload-ready`
4. Drag them into Cyberduck's `public_html` window
5. Wait for upload to complete (this may take a few minutes)

**That's it!** Your website should now be live.

---

## Troubleshooting

**Can't connect?**
- Double-check your FTP credentials
- Make sure you're using FTP (not SFTP) unless Hostinger says otherwise

**Upload is slow?**
- Large video files take time - be patient
- The footer video is 107MB, so it will take a while

**Files not showing?**
- Make sure you dragged the CONTENTS of `upload-ready` folder, not the folder itself
- You should see `_next`, `images`, `videos`, `services` folders in Cyberduck
