# Lioness Website - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js installed (https://nodejs.org)
- A code editor (VS Code recommended)
- Terminal/Command prompt access

---

## ⚡ IMMEDIATE SETUP (Now)

### 1. Install Dependencies
```bash
npm install
```
**What this does**: Downloads all required packages (React, Vite, Tailwind, etc.)

### 2. Start Development Server
```bash
npm run dev
```
**What this does**: Launches local website at `http://localhost:5173`

### 3. View Your Website
Open browser → `http://localhost:5173`

**You should see**:
- Dark luxury theme
- Gold accents
- Two business cards (Palette & Grooming)
- Fully functional navigation

---

## 📝 ESSENTIAL UPDATES (Before Launch)

### Step 1: Update WhatsApp Numbers

**Find & Replace These Lines**:

In `src/pages/PalettePage.tsx` (line ~8):
```tsx
// CURRENT:
window.open('https://wa.me/248?text=Hello%20Lioness%20Palette%21...', '_blank');

// CHANGE TO:
window.open('https://wa.me/248XXXXXXXX?text=Hello%20Lioness%20Palette%21...', '_blank');
```

In `src/pages/GroomingPage.tsx` (line ~8):
```tsx
// CHANGE TO:
window.open('https://wa.me/248XXXXXXXX?text=Hello%20Lioness%20Pet%27s%20Grooming%21...', '_blank');
```

**Replace `248XXXXXXXX` with your actual Seychelles phone number** (e.g., `248XXXX1234`)

### Step 2: Update Page Title

In `index.html` (line ~5):
```html
<!-- ALREADY DONE ✓ -->
<title>Lioness - Luxury Charcuterie & Pet Grooming in Seychelles</title>
```

---

## 🧪 TEST LOCALLY

### 1. Test Homepage
- [ ] Can you see the two business cards?
- [ ] Can you click on Palette card?
- [ ] Can you click on Grooming card?
- [ ] Do links have hover effects?

### 2. Test Palette Page
- [ ] Does page load?
- [ ] Can you click "Book Your Platter"?
- [ ] Does booking modal open?
- [ ] Can you fill the form?
- [ ] Can you click "Send to WhatsApp"?

### 3. Test Grooming Page
- [ ] Does page load?
- [ ] Can you click "Book Appointment"?
- [ ] Does booking modal open?
- [ ] Does it show pet fields (Pet Name, Pet Type)?
- [ ] Can you submit form?

### 4. Test Navigation
- [ ] Back button on service pages works?
- [ ] Browser back button works?
- [ ] Logo on service pages returns to home?

---

## 🏗️ BUILD FOR PRODUCTION

### Step 1: Create Production Build
```bash
npm run build
```

**What happens**:
- Optimizes all code
- Minifies CSS/JavaScript
- Creates single HTML file in `dist/` folder
- Size: ~285KB (84KB compressed)

**Expected output**:
```
✓ built in 3.24s
dist/index.html  285.33 kB │ gzip: 84.02 kB
```

### Step 2: Test Production Build
```bash
npm run preview
```
**Launches**: `http://localhost:4173` with production build

Test all features again!

---

## 🌐 DEPLOY TO VERCEL (Easiest)

### 1. Prepare Code
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
- Go to https://github.com/new
- Create repository named `lioness-website`
- Copy commands shown

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/lioness-website.git
git branch -M main
git push -u origin main
```

### 4. Deploy with Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Deploy"

**Wait ~2 minutes** → Your site is live! 🎉

### 5. Add Custom Domain
1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `lionessseychelles.com`)
3. Update DNS settings in domain registrar
4. Wait 24-48 hours for propagation

---

## 🔧 COMMON CUSTOMIZATIONS

### Change Business Hours (Grooming Page)
**File**: `src/pages/GroomingPage.tsx`

Find this section:
```tsx
<p className="mt-4 text-xs text-gray-500">Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability</p>
```

Change to your hours:
```tsx
<p className="mt-4 text-xs text-gray-500">Available Monday - Saturday | Closed Sundays | Appointments subject to availability</p>
```

### Add Your Email Address
Add to any footer:
```tsx
<a href="mailto:info@lionessseychelles.com">info@lionessseychelles.com</a>
```

### Change Service Descriptions
**File**: `src/pages/PalettePage.tsx` or `GroomingPage.tsx`

Find service cards and edit text:
```tsx
<p className="text-gray-300 mb-4">
  YOUR NEW DESCRIPTION HERE
</p>
```

### Change Pricing/Guest Count Options
**File**: `src/components/BookingModal.tsx`

Find this section (around line 90):
```tsx
<select name="guests" value={formData.guests}>
  <option value="2">2 guests</option>
  <option value="4">4 guests</option>
  <!-- Add more options here -->
</select>
```

---

## 🎨 STYLING QUICK REFERENCE

### Colors Used
```
Primary Gold: text-amber-400, bg-amber-500
Dark Background: bg-slate-950
Borders: border-amber-900/50
Text: text-white, text-gray-300, text-gray-400
```

### To Change Primary Color
Replace all `amber` with desired color:
- `gold` → `yellow`
- `orange` → `orange`
- `purple` → `purple`

Example:
```tsx
// Current:
className="text-amber-400"

// Change to:
className="text-yellow-400"  // or gold-400, etc.
```

---

## 🚨 TROUBLESHOOTING

### "npm: command not found"
- Install Node.js: https://nodejs.org
- Restart terminal
- Try again

### "Port 5173 already in use"
```bash
npm run dev -- --port 3000
```

### Styling looks broken
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### WhatsApp links not working
- Check phone number format: `248XXXXXXXX`
- No spaces or special characters
- Test number format on phone first

### Page won't load
- Check browser console (F12)
- Look for error messages
- Verify all imports are correct

---

## 📱 TESTING CHECKLIST

### Desktop (Chrome)
- [ ] HomePage loads
- [ ] Palette page loads
- [ ] Grooming page loads
- [ ] Booking modal opens
- [ ] WhatsApp buttons work
- [ ] Navigation smooth

### Mobile (Phone)
- [ ] Can access on mobile browser
- [ ] Text readable (not too small)
- [ ] Buttons clickable (not too tiny)
- [ ] Form fields accessible
- [ ] Layout doesn't break
- [ ] Scrolling smooth

### Different Browsers
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

---

## 🎯 NEXT 30 DAYS

### Week 1
- [ ] Get WhatsApp business numbers
- [ ] Deploy to Vercel
- [ ] Purchase domain
- [ ] Update all phone numbers

### Week 2
- [ ] Point domain to Vercel
- [ ] Test live website
- [ ] Set up Google Analytics
- [ ] Create social media accounts

### Week 3
- [ ] Add Instagram/Facebook links to footer
- [ ] Create WhatsApp business profiles
- [ ] Set up auto-reply messages
- [ ] Train team on responding to inquiries

### Week 4
- [ ] Gather customer testimonials
- [ ] Add first images (if desired)
- [ ] Optimize booking descriptions
- [ ] Plan next month's marketing

---

## 📚 FILE REFERENCE

### Main Files You'll Edit

| File | Purpose | Edit For |
|------|---------|----------|
| `src/pages/HomePage.tsx` | Main page | Business descriptions, taglines |
| `src/pages/PalettePage.tsx` | Food service | Service offerings, benefits |
| `src/pages/GroomingPage.tsx` | Pet service | Service offerings, hours |
| `src/components/BookingModal.tsx` | Booking form | Form fields, WhatsApp message |
| `index.html` | HTML root | Page title, meta tags |

### Key Component Files

```
src/pages/
├── HomePage.tsx          ← Edit: Main messages
├── PalettePage.tsx       ← Edit: Food services
└── GroomingPage.tsx      ← Edit: Pet services

src/components/
└── BookingModal.tsx      ← Edit: Form fields

src/utils/
└── cn.ts                 ← Don't edit (utility)
```

---

## 💡 QUICK TIPS

### Search & Replace
In VS Code:
- Press `Ctrl+H` (or `Cmd+H` on Mac)
- Search: `248`
- Replace: `248XXXXXXXX`
- Click "Replace All"

### Change Multiple Files at Once
VS Code:
1. Click search icon (Ctrl+Shift+F)
2. Type what you're looking for
3. See all instances across project

### Hot Reload
- Any save to `src/` files auto-updates browser
- No need to manually refresh
- CSS changes appear instantly

### Environment Variables
For sensitive data, create `.env` file:
```
VITE_WHATSAPP_NUMBER=248XXXXXXXX
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXX
```

Then use in code:
```tsx
const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
```

---

## 📞 SUPPORT RESOURCES

### Documentation
- React: https://react.dev
- Tailwind: https://tailwindcss.com/docs
- Vite: https://vitejs.dev/guide
- React Router: https://reactrouter.com

### Hosting Help
- **Vercel Deploy Guide**: https://vercel.com/docs/deployments/overview
- **Custom Domain**: https://vercel.com/docs/concepts/projects/domains
- **Environment Variables**: https://vercel.com/docs/concepts/projects/environment-variables

### Common Issues
- React error? → Check browser console (F12)
- Tailwind not working? → Restart dev server
- Build failing? → Check error message, search online

---

## 🎉 YOU'RE READY!

**Current Status**:
- ✅ Website built and tested
- ✅ Production-ready code
- ✅ Mobile responsive
- ✅ Fast performance
- ✅ Easy to customize
- ✅ WhatsApp integration ready

**Next Step**: Deploy to Vercel and share with the world! 🦁

---

## 📋 FINAL CHECKLIST BEFORE LAUNCH

- [ ] WhatsApp numbers updated
- [ ] Website tested on mobile & desktop
- [ ] Built with `npm run build`
- [ ] Deployed to Vercel
- [ ] Domain pointing to Vercel
- [ ] All links tested
- [ ] Analytics set up (optional)
- [ ] Team trained on updates
- [ ] Backup of code created

---

**Last Updated**: February 2024
**Status**: 🚀 Ready to Launch!
**Questions?** Check LIONESS_WEBSITE_GUIDE.md for detailed docs
