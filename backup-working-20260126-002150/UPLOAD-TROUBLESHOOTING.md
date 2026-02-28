# 🚨 TROUBLESHOOTING - Files Not Showing on Hostinger

## ✅ VERIFICATION CHECKLIST

### Step 1: Check File Locations on Hostinger

Log into Hostinger File Manager and verify these exact paths exist:

**In `public_html/` (root):**
- [ ] `index.html` exists
- [ ] `about.html` exists
- [ ] `contact.html` exists
- [ ] `services.html` exists
- [ ] `privacy.html` exists
- [ ] `cookies.html` exists
- [ ] `style.css` exists
- [ ] `script.js` exists
- [ ] `icon.svg` exists

**In `public_html/images/` folder:**
- [ ] `staxxd-chameleon.web.png` exists
- [ ] `Staxxd.png` exists
- [ ] `CHM.Staxxd (1).png` exists (note the space and parentheses!)

**In `public_html/videos/` folder:**
- [ ] `staxxd-hero-dino.mov` exists
- [ ] `staxxd-footer.mov` exists

**In `public_html/services/` folder:**
- [ ] `web-development.html` exists
- [ ] `web-applications.html` exists
- [ ] `google-apps-scripts.html` exists
- [ ] `business-solutions.html` exists
- [ ] `ai-powered-solutions.html` exists
- [ ] `process-automation.html` exists

---

## 🔍 COMMON ISSUES & FIXES

### Issue 1: 404 Error on Service Pages
**Problem:** `https://staxxd.co.uk/services/web-development.html` returns 404

**Possible Causes:**
1. ❌ Files uploaded to wrong location (e.g., `public_html/hostinger-upload/services/` instead of `public_html/services/`)
2. ❌ `services/` folder not created
3. ❌ Files uploaded but folder structure broken

**Fix:**
1. Go to Hostinger File Manager
2. Navigate to `public_html/`
3. Check if `services/` folder exists
4. If NOT, create it: Click "New Folder" → Name it `services`
5. Upload all 6 service HTML files INTO the `services/` folder
6. Verify the path is: `public_html/services/web-development.html`

---

### Issue 2: Images Not Showing
**Problem:** Images are broken/missing

**Possible Causes:**
1. ❌ Images uploaded to wrong location
2. ❌ `images/` folder not created
3. ❌ File names don't match exactly (case-sensitive!)

**Fix:**
1. Check if `public_html/images/` folder exists
2. If NOT, create it: Click "New Folder" → Name it `images`
3. Upload all 3 image files INTO the `images/` folder
4. Verify file names match EXACTLY:
   - `staxxd-chameleon.web.png` (lowercase)
   - `Staxxd.png` (capital S)
   - `CHM.Staxxd (1).png` (with space and parentheses)

---

### Issue 3: Videos Not Playing
**Problem:** Videos don't load or play

**Possible Causes:**
1. ❌ Videos uploaded to wrong location
2. ❌ `videos/` folder not created
3. ❌ File size too large (may need to wait for upload to complete)

**Fix:**
1. Check if `public_html/videos/` folder exists
2. If NOT, create it: Click "New Folder" → Name it `videos`
3. Upload both video files INTO the `videos/` folder
4. Wait for upload to complete (videos are large files)
5. Verify file names:
   - `staxxd-hero-dino.mov`
   - `staxxd-footer.mov`

---

## 📋 CORRECT FOLDER STRUCTURE ON HOSTINGER

Your `public_html` folder should look EXACTLY like this:

```
public_html/
├── index.html
├── about.html
├── contact.html
├── services.html
├── privacy.html
├── cookies.html
├── style.css
├── script.js
├── icon.svg
├── images/                    ← FOLDER
│   ├── staxxd-chameleon.web.png
│   ├── Staxxd.png
│   └── CHM.Staxxd (1).png
├── videos/                    ← FOLDER
│   ├── staxxd-hero-dino.mov
│   └── staxxd-footer.mov
└── services/                   ← FOLDER
    ├── web-development.html
    ├── web-applications.html
    ├── google-apps-scripts.html
    ├── business-solutions.html
    ├── ai-powered-solutions.html
    └── process-automation.html
```

---

## 🎯 STEP-BY-STEP RE-UPLOAD INSTRUCTIONS

### Option A: Upload via Hostinger File Manager

1. **Delete everything** in `public_html/` (or move to backup folder)
2. **Create 3 folders:**
   - Click "New Folder" → Name: `images`
   - Click "New Folder" → Name: `videos`
   - Click "New Folder" → Name: `services`
3. **Upload root files:**
   - Select all 9 files from `hostinger-upload/` root (index.html, about.html, etc.)
   - Upload to `public_html/`
4. **Upload images:**
   - Select all 3 files from `hostinger-upload/images/`
   - Upload to `public_html/images/`
5. **Upload videos:**
   - Select both files from `hostinger-upload/videos/`
   - Upload to `public_html/videos/`
6. **Upload service pages:**
   - Select all 6 files from `hostinger-upload/services/`
   - Upload to `public_html/services/`

### Option B: Upload via FTP

1. Connect via FTP to your Hostinger account
2. Navigate to `public_html/`
3. Upload the entire `hostinger-upload/` folder contents
4. Make sure folder structure is preserved

---

## ✅ FINAL VERIFICATION

After uploading, test these URLs:

- ✅ `https://staxxd.co.uk/` - Homepage should load
- ✅ `https://staxxd.co.uk/services/web-development.html` - Service page should load
- ✅ `https://staxxd.co.uk/images/staxxd-chameleon.web.png` - Image should load
- ✅ `https://staxxd.co.uk/videos/staxxd-hero-dino.mov` - Video should load

If any of these return 404, the file is in the wrong location!

---

## 🆘 STILL NOT WORKING?

If files are in the correct location but still not working:

1. **Check file permissions:** Files should be `644`, folders should be `755`
2. **Clear browser cache:** Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. **Check for typos:** File names must match EXACTLY (case-sensitive)
4. **Wait a few minutes:** Sometimes Hostinger needs time to process uploads

---

## 📞 NEED HELP?

If you've verified everything above and it's still not working, the issue is likely:
- Files uploaded to wrong directory
- Folder structure not maintained
- File names don't match exactly

Double-check the exact paths in Hostinger File Manager!
