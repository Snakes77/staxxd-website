# Quick Start Prompt for New Client Website

**Copy this prompt and fill in client details:**

---

## NEW CLIENT WEBSITE SETUP

**Client:** [Client Company Name]  
**Industry:** [Industry Type]  
**Timeline:** 3-4 weeks (positioned)

### Brand Information
- **Primary Color:** #[HEX CODE]
- **Secondary Color:** #[HEX CODE]
- **Logo:** [Logo file location]
- **Brand Values:** [Key values/vision]

### Company Details
- **Name:** [Full Company Name]
- **Website:** [clientwebsite.com]
- **Phone:** [Phone Number]
- **Email:** [Email Address]
- **Address:** [Full Address]
- **Social Media:**
  - Instagram: [@handle]
  - Facebook: [/page]
  - LinkedIn: [/company]

### Services/Products
1. [Service 1 Name] - [Description]
2. [Service 2 Name] - [Description]
3. [Service 3 Name] - [Description]
[Add all services...]

### Content
- **Hero Message:** [Main homepage message]
- **About Page:** [Key points about company]
- **Key Stats:** [Years in business, clients served, etc.]

### Images
- [ ] Logo files provided
- [ ] Service images provided
- [ ] Banner/OG image provided

---

## CUSTOMIZATION STEPS

1. **Update Colors:** `tailwind.config.ts` → Replace `vc-*` with brand colors
2. **Update Constants:** `lib/constants.ts` → Fill in all client info
3. **Replace Assets:** `public/images/` → Add client logos/images
4. **Customize Content:** Update page files with client content
5. **Setup Form:** Create Formspree form, update endpoint
6. **Build:** `npm run build` → Upload `out/` folder

**Estimated Time:** 4-6 hours customization + client feedback rounds

---

**Template Base:** Vanquish Capital  
**Built By:** Staxxd

