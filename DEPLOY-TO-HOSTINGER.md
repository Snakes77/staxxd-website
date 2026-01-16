# Deploy to Hostinger - Simple Checklist

## Quick Steps

1. **Build the site**:
   ```bash
   cd /Users/paulmeakin/Desktop/staxxd-website-template
   npm run build
   ```

2. **Upload via FTP** (easiest - preserves folders automatically):
   - Use Cyberduck or FileZilla
   - Connect to Hostinger
   - Go to `public_html`
   - Delete everything
   - Drag ALL contents from `out/` folder to `public_html`
   - Done!

3. **OR Upload via File Manager** (more work):
   - Create folders first: `_next/static/css/`, `_next/static/chunks/`, `images/`, `videos/`
   - Upload files INTO the correct folders
   - See full instructions in `DEPLOYMENT-AUDIT-REPORT.md`

4. **Test**:
   - Visit `https://staxxd.co.uk`
   - Hard refresh: `Cmd+Shift+R`
   - Check browser console for errors

---

## What to Upload

Upload **everything** from the `out/` folder:
- `_next/` folder (entire folder with all subfolders)
- `images/` folder
- `videos/` folder
- `services/` folder
- All HTML files (`index.html`, `about.html`, etc.)
- `icon.svg`
- `sitemap.xml`
- `robots.txt`

**Critical**: The `_next` folder structure must be preserved. Use FTP to ensure this.

---

## Troubleshooting

**If CSS doesn't load**:
- Check `public_html/_next/static/css/ba4ce3e76e3f4b42.css` exists
- If not, folder structure was flattened - use FTP to re-upload

**If images don't load**:
- Check `public_html/images/Staxxd.png` exists
- Verify case matches exactly (Linux is case-sensitive)

**If videos don't load**:
- Check `public_html/videos/hero-staxxd.mov` exists
- Large files may take time to upload

---

## Why FTP?

FTP automatically preserves the nested folder structure (`_next/static/css/`). The Hostinger File Manager can flatten folders when uploading multiple files, which breaks Next.js sites.
