# Lioness Website - Complete Documentation

## 🦁 Project Overview

A luxury, modern website for **Lioness** - a brand managing two distinct premium businesses in Seychelles:
1. **Lioness Palette** - Artisan charcuterie & gourmet snack platters
2. **Lioness Pet's Grooming** - Professional pet grooming services

---

## 📊 Website Architecture

### Site Structure
```
Lioness (Root)
├── Homepage (Business Selector)
├── Lioness Palette (Charcuterie Service)
├── Lioness Pet's Grooming (Pet Grooming Service)
└── Booking System (Modal-based)
```

### Pages

#### 1. **Homepage** (`/`)
- **Purpose**: Brand introduction & business selector
- **Key Sections**:
  - Navigation bar with Lioness branding
  - Hero section with brand statement
  - Two distinct business cards (Palette & Grooming)
  - Footer with copyright info
- **CTA**: Click to explore either business

#### 2. **Lioness Palette** (`/palette`)
- **Purpose**: Premium charcuterie & snacks service
- **Key Sections**:
  - Hero introduction
  - Service offerings (4 options):
    - Classic Elegance (4-6 guests)
    - Luxury Collection (8-12 guests)
    - Bespoke Experience (custom)
    - Premium Add-ons (à la carte)
  - Why Choose Us (3 benefits)
  - CTA section with booking buttons
  - Footer
- **CTAs**: 
  - Book Your Platter (booking modal)
  - WhatsApp Inquiry (direct messaging)

#### 3. **Lioness Pet's Grooming** (`/grooming`)
- **Purpose**: Professional pet grooming service
- **Key Sections**:
  - Hero introduction
  - Service offerings (6 options):
    - Bath & Grooming (60-90 min)
    - Spa Pampering (2 hours)
    - Express Refresh (30-45 min)
    - Specialized Grooming (custom)
    - Nail & Detail Care (à la carte)
    - Mobile Service (at-home)
  - Why Choose Us (3 benefits)
  - Pricing & Packages info
  - CTA section with booking buttons
  - Footer
- **CTAs**:
  - Book Appointment (booking modal)
  - WhatsApp Inquiry (direct messaging)

---

## 🎨 Design System

### Color Palette
- **Background**: Slate 950 (dark luxury base)
- **Primary Accent**: Amber 400/500 (gold luxury)
- **Secondary**: Slate/Amber grays
- **Borders**: Amber 900 with opacity

### Typography
- **Headlines**: Bold, sans-serif (2-7xl sizes)
- **Body**: Regular weight, gray-400
- **Accents**: Amber-400 gradient text

### Components
- Luxury cards with subtle borders
- Hover effects with border color shifts
- Backdrop blur on navigation
- Gradient accents throughout
- Icons from Lucide React

### Responsive Design
- Mobile-first approach
- Grid layouts (1 col mobile → 2 col desktop)
- Flex layouts for navigation & CTAs
- Padding adjustments per breakpoint

---

## 🔧 Technical Stack

### Built With
- **React 19** - UI framework
- **Vite** - Build tool (lightning fast)
- **Tailwind CSS 4** - Styling
- **React Router DOM** - Navigation
- **Lucide React** - Icons

### File Structure
```
src/
├── App.tsx              # Main routing component
├── pages/
│   ├── HomePage.tsx     # Homepage/selector
│   ├── PalettePage.tsx  # Charcuterie service
│   └── GroomingPage.tsx # Pet grooming service
├── components/
│   └── BookingModal.tsx # Shared booking form
├── utils/
│   └── cn.ts           # Tailwind utility merger
├── main.tsx            # Entry point
└── index.css           # Tailwind imports
```

---

## 📱 Booking System

### How It Works
1. User clicks "Book" button on any service page
2. Modal opens with a form
3. Form fields populate based on business type:
   - **Palette**: Name, email, phone, date, time, guest count, notes
   - **Grooming**: Name, email, phone, pet name, pet type, date, time, notes

4. User submits form
5. Data is formatted and sent via WhatsApp API
6. Modal shows confirmation message

### WhatsApp Integration
- Uses WhatsApp Web API (`wa.me` links)
- Sends pre-formatted booking details
- Client number: +248 (Seychelles code)
- No backend required - client-side only

### WhatsApp Direct Inquiries
- Separate WhatsApp buttons on each service page
- Pre-filled with business greeting
- Instant messaging without form

---

## 📝 Content Strategy

### Lioness Palette
**Messaging**: Premium, artisanal, curated, fresh
- **Service Sizes**: Clearly defined (4-6, 8-12, custom, à la carte)
- **Key Benefits**:
  - Premium Selection (imported & local)
  - Artisan Crafted (handmade care)
  - Fresh & Timely (prepared to order)
- **Occasions**: Celebrations, intimate gatherings, corporate events

### Lioness Pet's Grooming
**Messaging**: Professional, pet-first, luxury care, wellness
- **Service Types**: 6 different options (variety for budgets/needs)
- **Key Benefits**:
  - Pet-First Approach (comfort priority)
  - Premium Products (luxury, hypoallergenic)
  - Expert Team (certified professionals)
- **Target Pets**: Dogs, cats, rabbits, guinea pigs, other
- **Special Offer**: First-time 10% discount + consultation

---

## 🚀 Features

### ✅ Implemented
- Fully responsive design (mobile, tablet, desktop)
- Smooth page transitions
- Luxury dark theme with gold accents
- WhatsApp booking integration
- Modal-based booking forms
- Business separation (food ≠ pets)
- Professional navigation
- Hover animations
- Gradient text & backgrounds
- Backdrop blur effects
- Icon integration

### 🔄 Easy to Add Later
- Live booking calendar (Calendly integration)
- Payment processing (Stripe/PayPal)
- Customer reviews section
- Image gallery
- Blog/content
- Email confirmations
- SMS notifications
- Analytics tracking

---

## 📞 Deployment & Hosting

### Recommended Platforms
1. **Vercel** (optimal for React/Vite)
   - Free tier available
   - Auto-deploys from Git
   - Fast CDN

2. **Netlify**
   - Free tier available
   - Simple deployment
   - Good performance

3. **AWS Amplify**
   - Scalable
   - Custom domain support
   - More advanced features

### Domain Recommendations
**Suggested names** (check availability):
- `lionessseychelles.com`
- `lionessluxury.sc` (Seychelles TLD)
- `thelionessbrands.com`
- `lionessexperience.sc`
- `lionesscurated.com`

---

## 🔐 Environment Setup

### Build Command
```bash
npm run build
```

### Development Server
```bash
npm run dev
```

### Output
- **Production build**: `dist/index.html`
- **Size**: ~285 KB (84 KB gzipped)
- **Format**: Single HTML file (all CSS/JS inlined)

---

## 🎯 Performance Metrics

- **Build Time**: 3.24s
- **File Size**: 285.33 kB
- **Gzipped**: 84.02 kB
- **Load**: Fast (Vite-optimized)
- **Mobile**: Fully responsive
- **SEO**: Title, meta tags, semantic HTML

---

## 🔗 WhatsApp Numbers

Update these in the code with actual business numbers:
- **Palette**: `https://wa.me/248XXXXXXXX` (Replace X's)
- **Grooming**: `https://wa.me/248XXXXXXXX` (Replace X's)

---

## 🛠️ Customization Guide

### Update Colors
Edit in any component file:
```tsx
className="bg-amber-400" // Change to preferred color
```

### Update Text Content
- Edit page component TSX files
- Update hero messages, service descriptions, benefits
- Change footer text

### Add Images
```tsx
<img src="/path/to/image.jpg" alt="description" className="w-full rounded-lg" />
```

### Modify Services
Edit the service grid cards in PalettePage or GroomingPage

### Change Pricing
Update text in pricing sections (currently text-based, add modal for live pricing)

---

## 📧 Contact Information to Add

Update these sections:
- Phone numbers for WhatsApp
- Email addresses for inquiries
- Physical addresses
- Business hours
- Holiday closures

---

## ✨ Next Steps

1. **Deploy**: Push to Vercel/Netlify/AWS
2. **Add WhatsApp Numbers**: Update phone numbers in all files
3. **Domain**: Point custom domain to hosting
4. **Analytics**: Add Google Analytics
5. **SEO**: Add meta descriptions per page
6. **Social Media**: Add links in footer
7. **Payment**: Consider integrating Stripe for advance bookings
8. **Images**: Add hero images for each service
9. **Calendar**: Integrate Calendly for live availability
10. **Legal**: Add Terms, Privacy Policy, Booking Terms

---

## 📄 License

© 2024 Lioness. All rights reserved. Seychelles.

---

**Website Built**: February 2024
**Technology**: React + Vite + Tailwind CSS
**Status**: ✅ Production Ready
