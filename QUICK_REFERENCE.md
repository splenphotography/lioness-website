# Lioness Website - Quick Reference Card

**Print this or bookmark it!**

---

## 🚀 THREE-STEP STARTUP

```bash
# 1. Install
npm install

# 2. Start local server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 📱 WHAT YOU HAVE

| Item | Details |
|------|---------|
| **Pages** | 3 (Home, Palette, Grooming) |
| **Size** | 288 KB (84 KB gzipped) |
| **Speed** | <1 second load |
| **Mobile** | Fully responsive |
| **Build** | Single HTML file |

---

## 🔧 FILE LOCATIONS

### Must Update
```
src/pages/PalettePage.tsx      (Line 8)  → WhatsApp number
src/pages/GroomingPage.tsx     (Line 8)  → WhatsApp number
```

### Nice to Update
```
src/pages/PalettePage.tsx      (Line 45) → Tagline & description
src/pages/GroomingPage.tsx     (Line 45) → Tagline & description
Service cards                          → Descriptions, prices
Footers                                → Hours, contact info
```

---

## 🎨 COLOR CODE

| Use | Color | Classes |
|-----|-------|---------|
| Text | Gold | `text-amber-400` |
| Hover | Lighter Gold | `text-amber-300` |
| Background | Dark | `bg-slate-950` |
| Cards | Dark Gold | `bg-amber-950` |
| Borders | Dark Gold | `border-amber-900` |

**To change gold**: Find/Replace `amber` → `your-color`

---

## 💬 CONTENT QUICK EDITS

### Change Business Description
1. Open `src/pages/HomePage.tsx`
2. Find the business card section
3. Edit the `<p>` text

### Change Service List
1. Open `src/pages/PalettePage.tsx` OR `GroomingPage.tsx`
2. Find "Our Services" / "Our Offerings" section
3. Edit each service card

### Change Hours
1. Open `src/pages/GroomingPage.tsx`
2. Search for "Tuesday - Sunday"
3. Update with your hours

### Change Contact
1. Open footer section
2. Add email: `mailto:email@domain.com`
3. Add phone: `wa.me/248XXXXXXXX`

---

## 🔗 WHATSAPP SETUP

### Get Your Numbers Ready
- Palette business WhatsApp: `+248 XXXX XXXX`
- Grooming business WhatsApp: `+248 XXXX XXXX`

### Update Code
```tsx
// File: src/pages/PalettePage.tsx (Line 8)
'https://wa.me/248XXXXXXXX?text=Hello%20Lioness...'
         ^^^^^^^^^^^ ← Replace with your number

// File: src/pages/GroomingPage.tsx (Line 8)
'https://wa.me/248XXXXXXXX?text=Hello%20Lioness...'
         ^^^^^^^^^^^ ← Replace with your number
```

### Test It
1. Update number
2. Click "WhatsApp Inquiry" button
3. Should open WhatsApp with your number

---

## 📱 TESTING CHECKLIST

**Local Testing**:
- [ ] `npm run dev` works
- [ ] No console errors (F12)
- [ ] Can navigate all pages
- [ ] Booking modal opens
- [ ] WhatsApp links work

**Mobile Testing**:
- [ ] Open on phone
- [ ] Layout looks good
- [ ] Text readable
- [ ] Buttons clickable
- [ ] No broken sections

**Desktop Testing**:
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

---

## 🏗️ DEPLOYMENT QUICK

### Build
```bash
npm run build
```
Creates: `dist/index.html` (your complete website)

### Deploy to Vercel (Easiest)
1. Push to GitHub: `git push`
2. Go to vercel.com
3. Import repository
4. Click Deploy
5. **Done!** (auto-deploys on push)

### Deploy Elsewhere
- Upload `dist/index.html` to any web host
- That's it!

---

## 📊 USEFUL LINKS

| Task | Link |
|------|------|
| Buy Domain | https://www.namecheap.com |
| Deploy Website | https://vercel.com |
| Compress Images | https://tinypng.com |
| Analytics | https://analytics.google.com |
| Email Service | https://formspree.io |
| Icons | https://lucide.dev |

---

## 🆘 COMMON ISSUES

| Problem | Solution |
|---------|----------|
| Page blank | Check browser console (F12), look for errors |
| Colors wrong | Check spelling of color names |
| WhatsApp broken | Verify phone number format (248XXXXXXXX) |
| Not responsive | Test with DevTools mobile view (F12) |
| Slow build | Delete `node_modules`, reinstall |
| Can't find file | Use Ctrl+P in VS Code to search files |

---

## 📚 DOCUMENTATION FILES

```
├── README.md                    ← Overview
├── QUICK_START.md              ← Start here!
├── QUICK_REFERENCE.md          ← This file
├── LIONESS_WEBSITE_GUIDE.md     ← Full architecture
├── PERSONALIZATION_GUIDE.md     ← How to customize
├── CONTENT_COPY.md              ← All website text
├── DEPLOYMENT_CHECKLIST.md      ← Launch process
└── ENHANCEMENT_GUIDE.md         ← Future features
```

**Best files for quick answers**:
1. **Quick issues**: QUICK_REFERENCE.md (this!)
2. **Getting started**: QUICK_START.md
3. **Customizing text**: PERSONALIZATION_GUIDE.md
4. **Deploying**: DEPLOYMENT_CHECKLIST.md
5. **Adding features**: ENHANCEMENT_GUIDE.md

---

## 🎯 LAUNCH STEPS

1. Update WhatsApp numbers ✓
2. Run `npm run build` ✓
3. Deploy to Vercel ✓
4. Add custom domain ✓
5. Test everything ✓
6. Share with customers ✓

**Time required**: ~1-2 hours

---

## 💡 BEFORE YOU START

### Have Ready
- [ ] WhatsApp business numbers
- [ ] Business descriptions
- [ ] Service offerings
- [ ] Hours of operation
- [ ] Custom domain name (optional)

### Don't Need (yet)
- ❌ Database
- ❌ Backend server
- ❌ Payment processing
- ❌ Email server
- ❌ Complex hosting

---

## 🚀 NEXT IMMEDIATE ACTIONS

1. **Right Now**:
   - Open terminal
   - Run `npm install`
   - Run `npm run dev`

2. **Next 5 Minutes**:
   - Visit `http://localhost:5173`
   - Click around
   - Test mobile view (F12 → toggle device)

3. **Next 30 Minutes**:
   - Update WhatsApp numbers
   - Update business descriptions
   - Save changes (Ctrl+S)
   - Refresh browser (see changes live!)

4. **Next Hour**:
   - Test all buttons
   - Try booking form
   - Check WhatsApp links work

5. **End of Day**:
   - Run `npm run build`
   - Deploy to Vercel
   - Share live link!

---

## 🎨 DESIGN CONSTANTS

```css
Dark Background:    #030712 (slate-950)
Gold Accent:        #FBBF24 (amber-400)
Dark Gold:          #78350F (amber-950)
Text Color:         #FFFFFF (white)
Secondary Text:     #D1D5DB (gray-300)
Border Color:       #92400E opacity 30%
```

---

## 🔐 SECURITY BASICS

**Safe to put in code**:
- ✅ WhatsApp numbers (masked)
- ✅ Public content
- ✅ Business info
- ✅ Service descriptions

**Never put in code**:
- ❌ API keys
- ❌ Passwords
- ❌ Credit card numbers
- ❌ Real email addresses (use forms)
- ❌ Private data

---

## 📞 SUPPORT QUICK ANSWERS

**Q: Where do I change the gold color?**
A: Any component → Find `amber` → Replace with color name

**Q: How do I add images?**
A: See ENHANCEMENT_GUIDE.md, section "Add Images"

**Q: Can I change the layout?**
A: Yes, edit `className` attributes (Tailwind CSS)

**Q: How do I add more services?**
A: Copy a service card, paste, change text

**Q: Can I add testimonials?**
A: Yes, see ENHANCEMENT_GUIDE.md, section "Add Testimonials"

**Q: What about payments?**
A: See ENHANCEMENT_GUIDE.md, section "Payment Processing"

**Q: How do I get help?**
A: Check QUICK_START.md troubleshooting section

---

## 🎁 BONUS COMMANDS

```bash
# Check for issues
npm run build

# View production version locally
npm run preview

# Clean and reinstall if stuck
rm -rf node_modules && npm install

# Update all packages
npm update
```

---

## 📈 QUICK WIN IMPROVEMENTS

**Easy wins in 30 minutes**:
- [ ] Add your business hours
- [ ] Update business descriptions
- [ ] Add WhatsApp numbers
- [ ] Add email to footer
- [ ] Add social media links

**Medium wins in 1-2 hours**:
- [ ] Add hero images
- [ ] Change color scheme
- [ ] Add testimonials
- [ ] Deploy to Vercel
- [ ] Add Google Analytics

**Advanced wins later**:
- [ ] Live calendar booking
- [ ] Payment processing
- [ ] Email confirmations
- [ ] Customer portal
- [ ] CMS integration

---

## ✅ PRE-LAUNCH CHECKLIST (5 minutes)

- [ ] WhatsApp numbers updated
- [ ] Tested all buttons work
- [ ] Tested on phone
- [ ] Run `npm run build` succeeds
- [ ] No console errors (F12)

**Ready to deploy!** → Follow DEPLOYMENT_CHECKLIST.md

---

## 🎉 YOU'RE READY!

You have a production-ready website.

**Current Status**:
- ✅ Built and tested
- ✅ Fast performance
- ✅ Mobile responsive
- ✅ Easy to customize
- ✅ Professional design
- ✅ Ready to launch

**Next Step**: Follow QUICK_START.md for launch

---

**Last Updated**: February 2024
**Print or Bookmark**: YES! 📌
**Question?**: Check README.md or QUICK_START.md
