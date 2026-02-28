# Hostinger DNS & Cloudflare Setup Guide

## The Error
You're seeing a Cloudflare DNS resolution error. This means Cloudflare can't find your domain's DNS records.

## Solution Options

### Option 1: Use Hostinger DNS (Recommended for simplicity)

1. **Log into Hostinger control panel**
2. **Go to Domain settings** → DNS Zone Editor
3. **Make sure your domain is pointing to Hostinger's nameservers:**
   - Check what nameservers Hostinger provided (usually something like `ns1.dns-parking.com` or `ns1.hostinger.com`)
4. **Remove Cloudflare** (if you added it):
   - If you added Cloudflare, you need to either:
     - Remove Cloudflare and use Hostinger DNS directly, OR
     - Configure Cloudflare properly (see Option 2)

### Option 2: Configure Cloudflare Properly

If you want to use Cloudflare:

1. **Log into Cloudflare dashboard**
2. **Check your DNS records:**
   - Make sure you have an A record pointing to your Hostinger server IP
   - Make sure you have CNAME records if needed
3. **Update nameservers:**
   - Cloudflare will give you nameservers (like `ns1.cloudflare.com`)
   - Update these in your domain registrar (where you bought staxxd.co.uk)
4. **Wait for DNS propagation** (can take up to 48 hours, usually 1-2 hours)

### Option 3: Quick Fix - Use Hostinger Directly

**Simplest approach:**

1. **Remove Cloudflare** from your domain
2. **Use Hostinger's DNS directly**
3. **Point your domain to Hostinger's nameservers** (check Hostinger for the exact nameservers)
4. **Upload your site files** to Hostinger's `public_html` folder

## Steps to Fix Right Now

1. **Check where you bought the domain** (GoDaddy, Namecheap, etc.)
2. **Log into that registrar**
3. **Check the nameservers:**
   - If they point to Cloudflare → Either configure Cloudflare properly OR change to Hostinger nameservers
   - If they point to Hostinger → The issue might be DNS propagation (wait 1-2 hours)
4. **In Hostinger:**
   - Make sure your domain is added to your account
   - Check the DNS Zone Editor
   - Make sure there's an A record pointing to your hosting IP

## After DNS is Fixed

Once DNS resolves correctly:
1. Upload your `out/` folder contents to Hostinger's `public_html`
2. Your site should be live at `staxxd.co.uk`

## Need Help?

- Check Hostinger's documentation for DNS setup
- Contact Hostinger support if domain isn't resolving
- If using Cloudflare, make sure DNS records are correct in Cloudflare dashboard
