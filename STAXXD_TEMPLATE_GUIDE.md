# Staxxd Website Template Guide

**Template Based On:** Vanquish Capital Website  
**Build Time:** 3-4 weeks (positioned) | Actual: 1-2 days with this template  
**Framework:** Next.js 14 + TypeScript + Tailwind CSS

---

## 🎯 THE SIMPLE PROCESS

### Week 1: Discovery & Setup
1. Get client requirements:
   - Company name, vision, values
   - Brand colors (hex codes)
   - Logo files
   - Services/products list
   - Contact info
   - Content (copy, images)

### Week 2-3: Customization
2. Customize template (see checklist below)
3. Add client content
4. Test and refine

### Week 4: Launch
5. Build static site
6. Deploy to hosting
7. Go live

---

## 📋 CUSTOMIZATION CHECKLIST

### 1. Brand Colors (`tailwind.config.ts`)
**File:** `tailwind.config.ts`  
**What to change:** Replace `vc-*` colors with client brand colors

```typescript
colors: {
  'brand-primary': '#YOUR_HEX_CODE',      // Main brand color
  'brand-secondary': '#YOUR_HEX_CODE',    // Secondary color
  'brand-dark': '#YOUR_HEX_CODE',          // Dark variant
  'brand-light': '#YOUR_HEX_CODE',        // Light variant
  // Keep neutrals (white, gray, black) as-is
}
```

**Find & Replace:** Search entire codebase for `vc-red`, `vc-blue`, etc. and replace with `brand-primary`, `brand-secondary`, etc.

---

### 2. Company Information (`lib/constants.ts`)
**File:** `lib/constants.ts`  
**What to change:** All company details

```typescript
export const COMPANY_INFO = {
  name: 'Client Company Name',
  website: 'clientwebsite.com',
  phone: 'Client Phone',
  email: 'client@email.com',
  address: 'Client Address',
  social: {
    instagram: '@clienthandle',
    facebook: '/clientpage',
    linkedin: '/company/client',
  },
  stats: {
    yearsExperience: 10,
    clientsHelped: 500,
    // Customize based on client
  },
}
```

---

### 3. Services/Products (`lib/constants.ts`)
**File:** `lib/constants.ts`  
**What to change:** Replace SERVICES array with client services/products

```typescript
export const SERVICES = [
  {
    id: 'service-1',
    title: 'Service Name',
    slug: '/services/service-1',
    description: 'Service description...',
  },
  // Add all client services
]
```

**Navigation updates automatically** - no need to change NAVIGATION array.

---

### 4. Logo & Images
**Files to replace:**
- `public/images/vanquish-logo-colour.png` → Client logo
- `public/images/vanquish-banner.png` → Client banner/OG image
- `public/images/` → All service/product images
- `app/icon.svg` → Client favicon

**Keep structure:** Same folder structure, just replace files.

---

### 5. Content Pages
**Files to customize:**
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page
- `app/services/*/page.tsx` - Service pages
- `app/contact/page.tsx` - Contact page

**What to change:**
- Text content
- Images
- Hero sections
- Call-to-action text

---

### 6. Form Integration
**File:** `components/forms/ContactForm.tsx`  
**What to change:** Formspree endpoint

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest stays the same
})
```

**Create Formspree form** for each client and update the endpoint.

---

### 7. Footer Credit
**File:** `components/layout/Footer.tsx`  
**What to change:** Update "Built by Staxxd" section

```typescript
Built and hosted in partnership with{' '}
<a href="https://staxxd.com">Staxxd</a>
```

---

### 8. SEO & Metadata
**File:** `app/layout.tsx`  
**What to change:**
- Site title
- Description
- Keywords
- OG images
- Domain URLs

---

## 🗂️ FILE STRUCTURE (What Stays, What Changes)

### ✅ STAYS THE SAME (Don't Touch)
- `components/ui/` - Reusable UI components
- `components/sections/` - Section templates (Hero, Services, CTA, etc.)
- `components/layout/` - Header, Footer, MobileMenu
- `app/globals.css` - Base styles (just update colors)
- `next.config.js` - Build configuration
- `package.json` - Dependencies

### 🔄 CUSTOMIZE (Client-Specific)
- `lib/constants.ts` - **MAIN CONFIG FILE** (company info, services)
- `tailwind.config.ts` - Brand colors
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About content
- `app/services/*/page.tsx` - Service pages
- `public/images/` - All images/logos
- `components/forms/ContactForm.tsx` - Formspree endpoint

---

## 🚀 QUICK START FOR NEW CLIENT

### Step 1: Copy Template
```bash
cp -r vanquish-capital-template client-name-website
cd client-name-website
```

### Step 2: Update Brand Colors
1. Open `tailwind.config.ts`
2. Replace all `vc-*` colors with client brand colors
3. Find & replace in entire codebase: `vc-red` → `brand-primary`, etc.

### Step 3: Update Company Info
1. Open `lib/constants.ts`
2. Update `COMPANY_INFO` object
3. Update `SERVICES` array

### Step 4: Replace Assets
1. Replace logo files in `public/images/`
2. Replace service images
3. Update favicon (`app/icon.svg`)

### Step 5: Customize Content
1. Update homepage (`app/page.tsx`)
2. Update about page
3. Update service pages
4. Update contact page

### Step 6: Setup Form
1. Create Formspree form
2. Update endpoint in `ContactForm.tsx`

### Step 7: Build & Deploy
```bash
npm run build
# Upload out/ folder to hosting
```

---

## 📝 CLIENT QUESTIONNAIRE (Use This)

**Brand & Identity:**
- Company name: _______________
- Primary brand color (hex): _______________
- Secondary brand color (hex): _______________
- Logo files: [ ] Provided
- Brand values/vision: _______________

**Services/Products:**
- List all services/products: _______________
- Service descriptions: _______________
- Service images: [ ] Provided

**Content:**
- About page content: _______________
- Homepage hero message: _______________
- Key differentiators: _______________

**Contact:**
- Phone: _______________
- Email: _______________
- Address: _______________
- Social media handles: _______________

**Stats/Metrics:**
- Years in business: _______________
- Key metrics to highlight: _______________

---

## ⚡ TIME-SAVING TIPS

1. **Keep component structure** - Don't rebuild, just customize
2. **Use constants file** - All client data in one place
3. **Reuse sections** - Hero, Services, CTA, Testimonials are templates
4. **Formspree for forms** - No backend needed
5. **Static export** - Easy deployment anywhere

---

## 🎨 BRANDING SWAP PROCESS

1. **Colors:** Update `tailwind.config.ts` → Find/replace `vc-*` in codebase
2. **Logo:** Replace `public/images/vanquish-logo-colour.png`
3. **Images:** Replace all images in `public/images/`
4. **Content:** Update text in page files
5. **Build:** `npm run build` → Upload `out/` folder

**Total time:** 4-6 hours for full customization

---

## 📦 DELIVERABLES

After customization, you deliver:
- ✅ Complete static website in `out/` folder
- ✅ All source files
- ✅ Deployment instructions
- ✅ Formspree setup (if needed)

---

## 💡 PRO TIPS

1. **Create a "template" branch** - Keep Vanquish as base template
2. **Document customizations** - Note what you changed for each client
3. **Reuse sections** - Services, Hero, CTA work for any business
4. **Fast iterations** - Client feedback? Update constants, rebuild, done

---

**Template Version:** 1.0  
**Based On:** Vanquish Capital Website  
**Maintained By:** Staxxd

