# Client Website Setup Checklist

**Use this checklist for every new client website**

---

## 📋 PRE-BUILD CHECKLIST

### Client Information Gathering
- [ ] Company name
- [ ] Brand colors (hex codes)
- [ ] Logo files (PNG, SVG)
- [ ] Company description/vision
- [ ] Services/products list
- [ ] Service descriptions
- [ ] Contact information (phone, email, address)
- [ ] Social media handles
- [ ] Key stats/metrics to highlight
- [ ] Content for About page
- [ ] Homepage hero message
- [ ] Images for services/products

---

## 🔧 CUSTOMIZATION STEPS

### Step 1: Brand Colors
- [ ] Open `tailwind.config.ts`
- [ ] Replace `vc-red` with client primary color
- [ ] Replace `vc-blue` with client secondary color
- [ ] Update all color references in codebase
- [ ] Test color changes

### Step 2: Company Info
- [ ] Open `lib/constants.ts`
- [ ] Update `COMPANY_INFO` object
- [ ] Update company name
- [ ] Update contact details
- [ ] Update social media
- [ ] Update stats/metrics

### Step 3: Services
- [ ] Open `lib/constants.ts`
- [ ] Replace `SERVICES` array
- [ ] Add all client services/products
- [ ] Add service descriptions
- [ ] Verify service slugs are correct

### Step 4: Logo & Images
- [ ] Replace `public/images/vanquish-logo-colour.png`
- [ ] Replace `public/images/vanquish-banner.png`
- [ ] Add service/product images
- [ ] Update `components/ui/Logo.tsx` if needed
- [ ] Replace favicon (`app/icon.svg`)

### Step 5: Content Pages
- [ ] Update homepage (`app/page.tsx`)
- [ ] Update About page (`app/about/page.tsx`)
- [ ] Create/update service pages
- [ ] Update Contact page
- [ ] Update hero sections with client messaging

### Step 6: Form Setup
- [ ] Create Formspree form for client
- [ ] Update Formspree endpoint in `ContactForm.tsx`
- [ ] Test form submission

### Step 7: SEO
- [ ] Update site title in `app/layout.tsx`
- [ ] Update meta description
- [ ] Update keywords
- [ ] Update OG images
- [ ] Update domain URLs

### Step 8: Footer
- [ ] Update "Built by Staxxd" credit (if needed)
- [ ] Verify all links work

---

## 🏗️ BUILD & TEST

- [ ] Run `npm install` (if needed)
- [ ] Run `npm run build`
- [ ] Verify `out/` folder created
- [ ] Check `out/index.html` exists
- [ ] Test all pages locally
- [ ] Test contact form
- [ ] Test mobile responsiveness
- [ ] Check all images load
- [ ] Verify all links work

---

## 🚀 DEPLOYMENT

- [ ] Upload `out/` folder contents to hosting
- [ ] Verify site loads correctly
- [ ] Test contact form on live site
- [ ] Check mobile view
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if needed)

---

## ✅ FINAL CHECKLIST

- [ ] All pages working
- [ ] Contact form working
- [ ] Mobile responsive
- [ ] All images optimized
- [ ] SEO metadata correct
- [ ] Social media links working
- [ ] Client approved
- [ ] Site live and accessible

---

## 📝 NOTES

**Client Name:** _______________  
**Project Start:** _______________  
**Project Complete:** _______________  
**Total Time:** _______________  
**Special Notes:** _______________

---

**Template:** Vanquish Capital Base  
**Built By:** Staxxd

