# Deployment Audit Report - Staxxd Website

## Executive Summary

**Status**: ✅ All files and paths are correct  
**Issue**: Folder structure is being flattened during upload to Hostinger  
**Solution**: Upload method must preserve nested folder structure

---

## 1. Entry Point Analysis

**Location**: `out/index.html` ✅  
**Status**: Correctly placed at root of build output

---

## 2. Asset Reference Audit

### CSS Files
- **HTML Reference**: `/_next/static/css/ba4ce3e76e3f4b42.css`
- **Actual File**: `out/_next/static/css/ba4ce3e76e3f4b42.css` ✅
- **Path Type**: Root-relative (correct)
- **Status**: ✅ MATCH

### JavaScript Files
All JS files reference `/_next/static/chunks/...` and exist in `out/_next/static/chunks/`:
- `webpack-41a9ee0a1d65a3d2.js` ✅
- `fd9d1056-87da80e0c187477b.js` ✅
- `main-app-cd86a907ec347334.js` ✅
- `layout-154bf2577debd3db.js` ✅
- `page-87fee9eeec448d7d.js` ✅
- `polyfills-42372ed130431b0a.js` ✅
- All other chunk files ✅

**Path Type**: Root-relative (correct)  
**Status**: ✅ ALL MATCH

### Font Files
- **HTML Reference**: `/_next/static/media/e4af272ccee01ff0-s.p.woff2`
- **Actual File**: `out/_next/static/media/e4af272ccee01ff0-s.p.woff2` ✅
- **Path Type**: Root-relative (correct)
- **Status**: ✅ MATCH

### Image Files
- **HTML Reference**: `/images/staxxd-chameleon.web.png`
- **Actual File**: `out/images/staxxd-chameleon.web.png` ✅
- **HTML Reference**: `/images/Staxxd.png` (in video poster)
- **Actual File**: `out/images/Staxxd.png` ✅
- **Path Type**: Root-relative (correct)
- **Status**: ✅ ALL MATCH

### Video Files
- **HTML Reference**: `/videos/hero-staxxd.mov`
- **Actual File**: `out/videos/hero-staxxd.mov` ✅
- **HTML Reference**: `/videos/staxxd-footer.mov`
- **Actual File**: `out/videos/staxxd-footer.mov` ✅
- **Path Type**: Root-relative (correct)
- **Status**: ✅ ALL MATCH

### Icon Files
- **HTML Reference**: `/icon.svg`
- **Actual File**: `out/icon.svg` ✅
- **Path Type**: Root-relative (correct)
- **Status**: ✅ MATCH

---

## 3. Case Sensitivity Check

**Hostinger runs on Linux (case-sensitive)**

All file references checked:
- ✅ CSS: `ba4ce3e76e3f4b42.css` matches exactly
- ✅ Font: `e4af272ccee01ff0-s.p.woff2` matches exactly
- ✅ Images: `Staxxd.png` and `staxxd-chameleon.web.png` match exactly
- ✅ Videos: `hero-staxxd.mov` and `staxxd-footer.mov` match exactly
- ✅ Icon: `icon.svg` matches exactly

**Status**: ✅ NO CASE MISMATCHES

---

## 4. Folder Structure Analysis

**Required Structure on Hostinger**:
```
public_html/
├── _next/
│   └── static/
│       ├── css/
│       │   └── ba4ce3e76e3f4b42.css
│       ├── chunks/
│       │   ├── webpack-41a9ee0a1d65a3d2.js
│       │   ├── fd9d1056-87da80e0c187477b.js
│       │   ├── main-app-cd86a907ec347334.js
│       │   ├── app/
│       │   │   ├── layout-154bf2577debd3db.js
│       │   │   └── page-87fee9eeec448d7d.js
│       │   └── [other chunk files]
│       └── media/
│           └── e4af272ccee01ff0-s.p.woff2
├── images/
│   ├── Staxxd.png
│   └── staxxd-chameleon.web.png
├── videos/
│   ├── hero-staxxd.mov
│   └── staxxd-footer.mov
├── services/
│   └── [service HTML files]
├── index.html
├── about.html
├── contact.html
├── services.html
├── privacy.html
├── cookies.html
├── 404.html
├── icon.svg
├── sitemap.xml
└── robots.txt
```

**Critical**: The `_next/static/css/` nested structure MUST be preserved.

---

## 5. Root Cause Analysis

**Problem**: Hostinger File Manager flattens folder structure when uploading multiple files.

**Why it fails**:
1. When you select multiple files from `_next/static/css/` and upload, they end up in `public_html/` root
2. The nested `_next/static/css/` path doesn't exist
3. Browser requests `/_next/static/css/ba4ce3e76e3f4b42.css` → 404 error

**Why your other sites worked**:
- They likely weren't Next.js sites (no `_next` folder required)
- Or they had simpler folder structures that didn't get flattened
- Or you used FTP which preserves structure automatically

---

## 6. Files Changed

**No code changes needed** ✅

All paths are correct. The issue is purely with the upload method.

---

## 7. Deployment Checklist

### Pre-Upload Verification

1. **Build the site**:
   ```bash
   cd /Users/paulmeakin/Desktop/staxxd-website-template
   npm run build
   ```

2. **Verify build output**:
   - Check `out/` folder exists
   - Verify `out/_next/static/css/ba4ce3e76e3f4b42.css` exists
   - Verify `out/images/Staxxd.png` exists
   - Verify `out/videos/hero-staxxd.mov` exists

### Upload Method (Choose ONE)

#### Option A: Hostinger File Manager (Manual Folder Creation)

**IMPORTANT**: You must create folders FIRST, then upload files INTO them.

1. **Delete everything in `public_html`** (if updating)

2. **Create folder structure** (in this order):
   - Create `_next` folder
   - Open `_next`, create `static` folder
   - Open `static`, create `css` folder
   - Open `static`, create `chunks` folder
   - Open `static`, create `media` folder
   - Open `chunks`, create `app` folder
   - Create `images` folder
   - Create `videos` folder
   - Create `services` folder

3. **Upload files into correct folders**:
   - Upload `ba4ce3e76e3f4b42.css` → `_next/static/css/`
   - Upload all JS files from `out/_next/static/chunks/` → `_next/static/chunks/`
   - Upload all JS files from `out/_next/static/chunks/app/` → `_next/static/chunks/app/`
   - Upload `e4af272ccee01ff0-s.p.woff2` → `_next/static/media/`
   - Upload all images from `out/images/` → `images/`
   - Upload all videos from `out/videos/` → `videos/`
   - Upload all HTML files from `out/services/` → `services/`
   - Upload root files (`index.html`, `about.html`, etc.) → `public_html/` root

#### Option B: FTP Upload (Recommended - Preserves Structure Automatically)

1. **Get FTP credentials from Hostinger**:
   - Log into Hostinger → hPanel → Files → FTP Accounts
   - Note: FTP Host, Username, Password

2. **Use Cyberduck or FileZilla**:
   - Connect to Hostinger via FTP
   - Navigate to `public_html`
   - Delete all existing files
   - Drag entire `out/` folder contents to `public_html`
   - FTP automatically preserves folder structure

3. **Verify upload**:
   - Check `public_html/_next/static/css/ba4ce3e76e3f4b42.css` exists
   - Check `public_html/images/Staxxd.png` exists

### Post-Upload Verification

1. **Clear browser cache**:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Or use incognito/private window

2. **Test the site**:
   - Visit `https://staxxd.co.uk`
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab - all files should load (status 200)

3. **Smoke test**:
   - CSS should load (page should be styled)
   - Images should display
   - Videos should play
   - JavaScript should work (accordions, counters, etc.)

---

## 8. Quick Verification Test

After upload, visit: `https://staxxd.co.uk/check-structure.html`

This page will test if critical files are in the correct locations.

---

## Summary

**What's Wrong**: Nothing in the code. The folder structure is being flattened during upload.

**What's Right**: 
- ✅ All file paths are correct
- ✅ All files exist in correct locations
- ✅ No case sensitivity issues
- ✅ All references are root-relative (correct for Hostinger)

**Solution**: Use FTP to upload (preserves structure automatically) OR manually create folders in Hostinger File Manager before uploading files.

**Next Steps**: Follow the deployment checklist above, using Option B (FTP) for easiest deployment.
