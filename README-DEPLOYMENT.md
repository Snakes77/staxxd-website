# Staxxd Website - Deployment Guide

## Quick Start

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Verify build output:**
   ```bash
   ./verify-deployment.sh
   ```

3. **Deploy:**
   - Automatic: Push to `main` → GitHub Actions deploys to `deploy` branch
   - Manual: See `HOSTINGER-DEPLOYMENT-GUIDE.md`

---

## Project Structure

- **Source code**: `main` branch
- **Static output**: `deploy` branch (auto-generated)
- **Build output**: `out/` folder (local only, not in Git)

---

## Important Notes

⚠️ **Large Video File**: `staxxd-footer.mov` (107MB) exceeds GitHub's limit
- File is in build output (`out/videos/`)
- Must be uploaded manually via FTP to Hostinger
- Or compress before committing

✅ **Build Output**: Complete and correct
- All HTML files present
- All assets (CSS, JS, fonts, images) present
- All paths are root-relative and correct

---

## Documentation

- `HOSTINGER-DEPLOYMENT-GUIDE.md` - Complete deployment instructions
- `DEPLOYMENT-READY-CHECKLIST.md` - Pre-deployment verification
- `FINAL-DEPLOYMENT-SUMMARY.md` - Full status report

---

## Support

If deployment fails:
1. Run `./verify-deployment.sh` to check build output
2. Check browser console for 404 errors
3. Verify folder structure on Hostinger matches `out/` folder
4. See troubleshooting in `HOSTINGER-DEPLOYMENT-GUIDE.md`
