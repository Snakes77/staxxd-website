# Staxxd Website

**Staxxd NOT Stacked!** - Business Consultancy With a Twist

This is the official website for Staxxd, a business consultancy that works behind the scenes to help clients make money.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
staxxd-website-template/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Service pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer, MobileMenu
│   ├── sections/          # Hero, Services, CTA, etc.
│   └── forms/             # ContactForm
├── lib/
│   └── constants.ts      # Company info, services, navigation
└── public/               # Static assets
```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.ts` to change brand colors.

### Company Information
Edit `lib/constants.ts` to update:
- Company name, tagline, contact info
- Services offered
- Navigation items
- Testimonials
- Stats

### Content
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Services: `app/services/page.tsx` and individual service pages
- Contact: `app/contact/page.tsx`

## 📝 Features

- ✅ SEO-optimized
- ✅ Mobile responsive
- ✅ Fast loading (static export)
- ✅ Accessible
- ✅ Professional design
- ✅ Contact form ready

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Static Export** - Fast, deployable anywhere

## 📧 Contact Form

The contact form is currently set up with a mock submission. To integrate with a real service:

1. Create a Formspree account at https://formspree.io
2. Create a new form
3. Update the form submission in `components/forms/ContactForm.tsx`

Or integrate with your own backend API.

## 🚀 Deployment

This site is configured for static export. After building:

```bash
npm run build
```

The `out/` folder contains all static files ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

© 2025 Staxxd. All rights reserved.

---

**Built by Staxxd, for Staxxd.**
