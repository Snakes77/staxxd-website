# ✅ Deployment Ready Checklist

## Pre-Deployment Verification

Run this before deploying:

```bash
npm run build
./verify-deployment.sh
```

---

## ✅ What MUST Exist in Deployment

### Required Files (at root):
- [ ] `index.html`
- [ ] `about.html`
- [ ] `contact.html`
- [ ] `services.html`
- [ ] `privacy.html`
- [ ] `cookies.html`
- [ ] `404.html`
- [ ] `icon.svg`
- [ ] `sitemap.xml`
- [ ] `robots.txt`

### Required Directories:
- [ ] `_next/static/css/` (contains CSS file)
- [ ] `_next/static/chunks/` (contains JS files)
- [ ] `_next/static/media/` (contains font files)
- [ ] `images/` (contains all images)
- [ ] `videos/` (contains video files - may need manual upload)
- [ ] `services/` (contains service HTML files)

---

## ❌ What MUST NOT Exist

- [ ] `app/` directory (source code)
- [ ] `components/` directory (source code)
- [ ] `lib/` directory (source code)
- [ ] `node_modules/` directory
- [ ] `package.json` (source file)
- [ ] `tsconfig.json` (source file)
- [ ] `next.config.js` (source file)
- [ ] Any `.tsx` or `.ts` files (source code)

---

## 🔍 Local Verification

After building, test locally:

```bash
# Serve the static files locally
cd out
python3 -m http.server 8000
# Or: npx serve .

# Visit http://localhost:8000
# Check:
# - Page loads with styles
# - Images display
# - JavaScript works (accordions, counters)
# - No console errors
```

---

## 📋 Deployment Steps

### Option 1: Automatic (GitHub Actions)

1. Push to `main` branch
2. GitHub Actions builds and deploys to `deploy` branch
3. Hostinger pulls from `deploy` branch automatically

### Option 2: Manual

1. Build: `npm run build`
2. Verify: `./verify-deployment.sh`
3. Create deploy branch (see HOSTINGER-DEPLOYMENT-GUIDE.md)
4. Push to `deploy` branch

---

## ⚠️ Large Video Files

**Files that may need manual upload:**
- `out/videos/staxxd-footer.mov` (107MB - exceeds GitHub limit)

**Solution:**
1. Upload via FTP to `public_html/videos/` on Hostinger
2. Or compress the video first (see HOSTINGER-DEPLOYMENT-GUIDE.md)

---

## ✅ Final Verification on Hostinger

After deployment, check:

1. **File Structure:**
   ```bash
   # Via Hostinger File Manager or FTP
   public_html/
   ├── index.html ✅
   ├── _next/static/css/ba4ce3e76e3f4b42.css ✅
   ├── images/Staxxd.png ✅
   └── videos/hero-staxxd.mov ✅
   ```

2. **Website Functionality:**
   - [ ] Homepage loads with styles
   - [ ] All images display
   - [ ] Videos play (if uploaded)
   - [ ] Accordions work
   - [ ] Counters animate
   - [ ] Navigation works
   - [ ] Contact form submits

3. **Browser Console:**
   - [ ] No 404 errors for CSS/JS
   - [ ] No 404 errors for images
   - [ ] No JavaScript errors

---

## 🚨 Common Issues

**Unstyled content:**
- Check `_next/static/css/` folder exists
- Verify folder structure wasn't flattened
- Clear browser cache

**Missing images:**
- Check `images/` folder exists
- Verify case sensitivity (Linux is case-sensitive)

**Missing videos:**
- Large files may not be in Git
- Upload manually via FTP

**404 errors:**
- Verify all referenced files exist
- Check paths are root-relative (start with `/`)

---

## ✅ THIS FOLDER IS SAFE TO DEPLOY

If all checks pass, the `out/` folder is ready to deploy to `/public_html` on Hostinger.
