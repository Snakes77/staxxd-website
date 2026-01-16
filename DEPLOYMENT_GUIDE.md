# Hostinger Deployment Guide for Staxxd Website

## Pre-Deployment Checklist

✅ Project is configured for static export (`output: 'export'` in next.config.js)
✅ Images are set to unoptimized (required for static export)
✅ Formspree integration is set up for contact form

## Step 1: Build the Site Locally

Run these commands in your terminal:

```bash
# Make sure you're in the project directory
cd /Users/paulmeakin/Desktop/staxxd-website-template

# Install dependencies (if needed)
npm install

# Build the static site
npm run build
```

This will create an `out/` folder with all the static files ready for deployment.

## Step 2: Upload to Hostinger

1. **Log into your Hostinger control panel**
2. **Navigate to File Manager** (or use FTP)
3. **Go to your domain's public_html folder** (or the folder where your site should be)
4. **Upload all contents from the `out/` folder** to the root of your domain

**Important:** Upload the CONTENTS of the `out/` folder, not the folder itself.

## Step 3: File Structure on Hostinger

Your Hostinger file structure should look like:
```
public_html/
  ├── _next/
  ├── about/
  ├── contact/
  ├── services/
  ├── images/
  ├── videos/
  ├── index.html
  ├── favicon.ico
  └── ... (other static files)
```

## Step 4: Verify Formspree

- Make sure your Formspree form (ID: `xojjqarb`) is configured to send emails to `paul@staxxd.co.uk`
- Test the contact form after deployment

## Step 5: Test Your Site

After uploading:
1. Visit `https://staxxd.co.uk` (or your domain)
2. Test all pages (Home, About, Services, Contact)
3. Test the contact form
4. Check that all images and videos load correctly

## Troubleshooting

### If fonts don't load:
- Google Fonts should work automatically, but if there are issues, check your browser console

### If images don't load:
- Make sure the `public/` folder contents are in the root
- Check file paths are correct

### If the contact form doesn't work:
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure Formspree form is activated in your Formspree dashboard

## Quick Deploy Commands

```bash
# Build
npm run build

# The out/ folder is ready to upload!
```
