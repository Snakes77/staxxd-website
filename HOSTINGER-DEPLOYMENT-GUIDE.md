# Hostinger Git Deployment Guide

## Overview

This project is configured for automatic deployment to Hostinger via Git.

**Repository Structure:**
- `main` branch: Source code (for development)
- `deploy` branch: Static output (for Hostinger)

---

## How It Works

1. **You push code to `main` branch**
2. **GitHub Actions automatically:**
   - Builds the Next.js static site
   - Deploys to `deploy` branch
3. **Hostinger pulls from `deploy` branch**
4. **Website updates automatically**

---

## Initial Setup on Hostinger

### Step 1: Enable Git Deployment

1. Log into Hostinger hPanel
2. Go to **Advanced** → **Git Version Control**
3. Click **Create Repository**
4. Repository name: `staxxd-website`
5. Click **Create**

### Step 2: Connect to GitHub

1. In Hostinger Git settings, click **Connect Repository**
2. Select **GitHub**
3. Authorize Hostinger to access your GitHub account
4. Select repository: `Snakes77/staxxd-website`
5. Select branch: **`deploy`** (NOT `main`)
6. Click **Connect**

### Step 3: Configure Deployment

1. Set **Deployment Path**: `/public_html`
2. Enable **Auto Deploy**: ON
3. Click **Save**

---

## What Gets Deployed

The `deploy` branch contains ONLY:
- `index.html` (and all other HTML files)
- `_next/` directory (CSS, JS, fonts)
- `images/` directory
- `videos/` directory
- `services/` directory
- `icon.svg`, `sitemap.xml`, `robots.txt`

**NO source code** (no `app/`, `components/`, `package.json`, etc.)

---

## Large Video Files

**Issue**: `staxxd-footer.mov` (107MB) exceeds GitHub's 100MB limit

**Current Status**: Videos are in build output but excluded from Git

**Solution Options**:

### Option 1: Compress Videos (Recommended)
```bash
# Compress footer video to under 50MB
ffmpeg -i public/videos/staxxd-footer.mov -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k public/videos/staxxd-footer-compressed.mov
```

### Option 2: Upload Videos Directly to Hostinger
- Videos are already in `out/videos/`
- Upload them manually via FTP to `public_html/videos/`
- They'll work even if not in Git

### Option 3: Use Git LFS (Large File Storage)
```bash
git lfs install
git lfs track "*.mov"
git add .gitattributes
git add public/videos/*.mov
git commit -m "Add videos with Git LFS"
```

---

## Manual Deployment (If Needed)

If GitHub Actions fails, you can manually create the deploy branch:

```bash
# Build the site
npm run build

# Create and switch to deploy branch
git checkout --orphan deploy
git rm -rf .

# Copy build output to root
cp -r out/* .
cp -r out/.* . 2>/dev/null || true

# Commit and push
git add .
git commit -m "Deploy static site"
git push origin deploy --force
```

---

## Verification Checklist

After deployment, verify on Hostinger:

- [ ] `public_html/index.html` exists
- [ ] `public_html/_next/static/css/ba4ce3e76e3f4b42.css` exists
- [ ] `public_html/images/Staxxd.png` exists
- [ ] `public_html/videos/hero-staxxd.mov` exists (if uploaded)
- [ ] No `app/`, `components/`, or `node_modules` folders
- [ ] Website loads with styles
- [ ] All images display
- [ ] JavaScript works (accordions, counters)

---

## Troubleshooting

**If website shows unstyled content:**
- Check `_next/static/css/` folder exists on Hostinger
- Verify folder structure wasn't flattened
- Clear browser cache (Cmd+Shift+R)

**If videos don't load:**
- Check `public_html/videos/` folder exists
- Verify video files were uploaded (they may not be in Git due to size)
- Upload videos manually via FTP if needed

**If GitHub Actions fails:**
- Check Actions tab in GitHub for error messages
- Verify `deploy` branch was created
- Manually create deploy branch using instructions above

---

## File Structure on Hostinger

After successful deployment, `public_html` should contain:

```
public_html/
├── index.html
├── about.html
├── contact.html
├── services.html
├── privacy.html
├── cookies.html
├── 404.html
├── _next/
│   └── static/
│       ├── css/
│       ├── chunks/
│       └── media/
├── images/
│   ├── Staxxd.png
│   └── staxxd-chameleon.web.png
├── videos/
│   ├── hero-staxxd.mov
│   └── staxxd-footer.mov (if uploaded)
├── services/
│   └── [service HTML files]
├── icon.svg
├── sitemap.xml
└── robots.txt
```

**Critical**: The `_next/static/` nested structure MUST be preserved.
