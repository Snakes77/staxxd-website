# Get Started with Staxxd Website

## 🚀 Quick Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```
   
   This creates a static site in the `out/` folder.

## 📝 Next Steps

### Add Your Logo
- Place your logo file in `public/images/staxxd-logo.png`
- Update the Header component to use your logo image

### Customize Content
- Edit `lib/constants.ts` to update company info, services, and stats
- Update pages in `app/` directory with your specific content

### Setup Contact Form
- Create a Formspree account at https://formspree.io
- Create a new form and get the endpoint
- Update `components/forms/ContactForm.tsx` with your Formspree endpoint

### Deploy
- The `out/` folder contains all static files
- Deploy to Vercel, Netlify, or any static hosting service

## 🎨 Brand Colors

Current colors are set in `tailwind.config.ts`:
- Primary: `#1a1a1a` (dark)
- Accent: `#f59e0b` (amber/orange)
- Secondary: `#4a5568` (gray)

Update these to match your brand.

## 📧 Contact

For questions or support, email: hello@staxxd.co.uk

---

**Staxxd NOT Stacked!** 🚀
