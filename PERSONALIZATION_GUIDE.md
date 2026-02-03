# Lioness Website - Personalization Guide

## 🎯 Make It Yours: Easy Customizations

This guide shows exactly where to find and update information specific to your business.

---

## 🔔 CRITICAL UPDATES (Must Do Before Launch)

### 1. WhatsApp Phone Numbers

**Palette Service**
- **File**: `src/pages/PalettePage.tsx`
- **Line**: ~8
- **Find**:
```tsx
const handleWhatsApp = () => {
  window.open('https://wa.me/248?text=Hello%20Lioness%20Palette%21...', '_blank');
};
```
- **Change to** (example with number):
```tsx
const handleWhatsApp = () => {
  window.open('https://wa.me/248XXXX1234?text=Hello%20Lioness%20Palette%21...', '_blank');
};
```

**Grooming Service**
- **File**: `src/pages/GroomingPage.tsx`
- **Line**: ~8
- **Update same format**:
```tsx
window.open('https://wa.me/248YYYY5678?text=Hello%20Lioness%20Pet%27s%20Grooming%21...', '_blank');
```

**✅ Check**: Test WhatsApp links before deploying!

---

## 📝 CONTENT UPDATES

### Homepage

**File**: `src/pages/HomePage.tsx`

#### Business Card Descriptions

**Palette Card** (Line ~70):
```tsx
// CURRENT:
<h2 className="text-3xl font-bold text-white mb-3">Lioness Palette</h2>
<p className="text-gray-300 leading-relaxed">
  Artisan charcuterie and gourmet snack platters, meticulously curated for your most refined moments.
</p>

// CUSTOMIZE:
<h2 className="text-3xl font-bold text-white mb-3">Lioness Palette</h2>
<p className="text-gray-300 leading-relaxed">
  Your custom description here
</p>
```

**Grooming Card** (Line ~100):
```tsx
// CURRENT:
<h2 className="text-3xl font-bold text-white mb-3">Lioness Pet's Grooming</h2>
<p className="text-gray-300 leading-relaxed">
  Professional grooming services with luxury care, ensuring your beloved companions feel pampered.
</p>

// CUSTOMIZE:
<h2 className="text-3xl font-bold text-white mb-3">Lioness Pet's Grooming</h2>
<p className="text-gray-300 leading-relaxed">
  Your custom description here
</p>
```

---

### Palette Page

**File**: `src/pages/PalettePage.tsx`

#### Hero Section Copy

**Line ~45**:
```tsx
// CHANGE THESE IF DESIRED:
<h1>Lioness <span>PALETTE</span></h1>  // ← Brand name
<p>Artisan Charcuterie & Gourmet Platters</p>  // ← Tagline
<p>Experience curated selections...</p>  // ← Description
```

#### Service Offerings

**Classic Elegance** (Line ~70):
```tsx
<h3>Classic Elegance</h3>  // ← Service name
<p>A timeless selection featuring premium imported...</p>  // ← Description
<p>Perfect for 4-6 guests</p>  // ← Guest count
```

**Customize each service**:
1. Service name
2. Description
3. Guest count or price

All 4 services follow same pattern.

#### Why Choose Us Section

**Line ~130** - 3 benefits:
```tsx
<h3>Premium Selection</h3>
<p>Only the finest imported and local ingredients</p>
```

Edit the heading and description for each benefit.

#### Footer

**Line ~190**:
```tsx
<p>Lioness Palette | Premium Charcuterie & Snacks</p>
<p>© 2024 Lioness. All rights reserved. | Seychelles</p>
<p>Delivery available across Seychelles | Minimum orders apply</p>
```

Update year, location, and details.

---

### Grooming Page

**File**: `src/pages/GroomingPage.tsx`

#### Hero Section Copy

**Line ~45**:
```tsx
<h1>Lioness <span>PET'S GROOMING</span></h1>
<p>Luxury Care for Your Beloved Companions</p>
<p>Professional grooming services tailored...</p>
```

#### Service Offerings

**Bath & Grooming** (Line ~70):
```tsx
<h3>Bath & Grooming</h3>
<p>Complete grooming experience including...</p>
<p>Small: 60 min | Large: 90 min</p>  // ← Duration
```

**Each service needs**:
1. Service name
2. Description (what's included)
3. Duration or pricing

All 6 services follow same pattern.

#### Business Hours

**Line ~170**:
```tsx
<p>Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability</p>
```

Update with your actual hours.

#### Footer

**Line ~210**:
```tsx
<p>Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability</p>
```

---

## 🎨 STYLING CUSTOMIZATIONS

### Primary Color (Gold → Your Color)

To change from gold/amber to another color:

**Option 1: Find & Replace (Easiest)**
1. Open any file
2. Press `Ctrl+H` (or `Cmd+H`)
3. Find: `amber`
4. Replace: `your-color` (yellow, orange, purple, etc.)
5. Click "Replace All"

**Option 2: Manual Edit**
Search for these patterns and replace:
- `text-amber-400` → `text-yellow-400`
- `bg-amber-500` → `bg-orange-500`
- `border-amber-900` → `border-purple-900`

### Available Tailwind Colors
```
red, orange, yellow, green, blue, indigo,
purple, pink, rose, cyan, lime, emerald, teal
```

Example:
```tsx
// Amber (Gold - Current)
className="text-amber-400 bg-amber-950"

// Purple Alternative
className="text-purple-400 bg-purple-950"

// Orange Alternative  
className="text-orange-400 bg-orange-950"
```

---

## 📸 ADD IMAGES

### Add Hero Image to Homepage

**File**: `src/pages/HomePage.tsx`
**Location**: Inside hero section (around line 30)

Add before the text:
```tsx
<img 
  src="https://your-image-url.jpg" 
  alt="Lioness Brand" 
  className="w-full max-w-4xl rounded-lg mb-8 shadow-2xl shadow-amber-900/50"
/>
```

### Add Service Images

**File**: `src/pages/PalettePage.tsx` or `GroomingPage.tsx`
**In each service card**:

```tsx
<div className="bg-gradient-to-br...">
  {/* ADD HERE */}
  <img 
    src="service-image.jpg" 
    alt="Service name"
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
  
  <h3>Service Name</h3>
  ...
</div>
```

### Image Recommendations
- **Size**: Max 200KB per image
- **Format**: JPG or WebP
- **Tool**: Compress with TinyPNG.com
- **Host**: Use Unsplash, Pexels, or your own CDN

---

## 💬 BOOKING FORM CUSTOMIZATION

**File**: `src/components/BookingModal.tsx`

### Change Form Fields

**For Palette** (around line 90):
```tsx
{isPalette && (
  <div>
    <label>Number of Guests *</label>
    <select name="guests" value={formData.guests}>
      <option value="2">2 guests</option>
      <option value="4">4 guests</option>
      <option value="6">6 guests</option>
      {/* ADD MORE: */}
      <option value="15">15 guests</option>
      <option value="20">20+ guests</option>
    </select>
  </div>
)}
```

**For Grooming** (around line 105):
```tsx
{!isPalette && (
  <>
    <div>
      <label>Pet Name *</label>
      {/* Keep as is */}
    </div>
    
    <div>
      <label>Pet Type *</label>
      <select name="petType">
        <option value="">Select pet type</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        {/* ADD MORE: */}
        <option value="bird">Bird</option>
        <option value="hamster">Hamster</option>
      </select>
    </div>
  </>
)}
```

### Change WhatsApp Message Format

**Around line 30**:
```tsx
let message = `Hello! I'd like to book with ${businessName}\n\n`;
message += `Name: ${formData.name}\n`;
// ← Edit message format here
```

---

## 📧 ADD CONTACT EMAIL

### In Footer (Any Page)

**Palette Footer** - `src/pages/PalettePage.tsx` (line ~180):
```tsx
<footer>
  <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
    <p className="mb-2">Lioness Palette | Premium Charcuterie & Snacks</p>
    {/* ADD THIS: */}
    <p className="mb-2">
      📧 <a href="mailto:palette@lionessseychelles.com" className="text-amber-400 hover:text-amber-300">
        palette@lionessseychelles.com
      </a>
    </p>
    <p className="mb-2">📱 WhatsApp: <a href="https://wa.me/248XXXXXXXX" className="text-amber-400">+248 XXXX XXXX</a></p>
    <p>© 2024 Lioness. All rights reserved. | Seychelles</p>
  </div>
</footer>
```

Same for Grooming page.

---

## 🔗 ADD SOCIAL MEDIA LINKS

### Add to Footer

```tsx
<div className="flex gap-4 justify-center mt-6">
  <a href="https://instagram.com/lionessseychelles" target="_blank" className="text-amber-400 hover:text-amber-300">
    Instagram
  </a>
  <a href="https://facebook.com/lionessseychelles" target="_blank" className="text-amber-400 hover:text-amber-300">
    Facebook
  </a>
  <a href="https://tiktok.com/@lionessseychelles" target="_blank" className="text-amber-400 hover:text-amber-300">
    TikTok
  </a>
</div>
```

Or add to Navigation bar (top of page).

---

## 🏷️ PRICING INFORMATION

### Display Pricing (Optional)

**File**: `src/pages/PalettePage.tsx` (line ~85):

```tsx
<div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8">
  <h3 className="text-2xl font-bold text-white mb-3">Classic Elegance</h3>
  <p className="text-gray-300 mb-4">
    A timeless selection featuring premium imported cheeses...
  </p>
  {/* ADD PRICING: */}
  <p className="text-amber-400 font-semibold">
    From $45 per platter | Perfect for 4-6 guests
  </p>
</div>
```

**Same for Grooming**:
```tsx
<p className="text-amber-400 font-semibold">
  From $60 | Small: 60 min | Large: 90 min
</p>
```

---

## 🕐 BUSINESS HOURS & DETAILS

### Update Hours

**File**: `src/pages/GroomingPage.tsx` (line ~170):

```tsx
// CURRENT:
<p>Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability</p>

// CHANGE TO YOUR HOURS:
<p>Available Monday - Friday 9am-5pm | Saturday 10am-4pm | Closed Sundays</p>
```

### Update Service Area

```tsx
<p>Serving all of Seychelles | Mobile service available for greater Victoria area</p>
```

### Update Minimum Orders

```tsx
<p>Minimum platter order: 4 guests | Delivery available across Seychelles</p>
```

---

## 🎁 SPECIAL OFFERS & PROMOTIONS

### Add to Any Section

**Example: Holiday Special**

```tsx
<div className="bg-gradient-to-r from-amber-950 to-slate-900 border border-amber-900/50 rounded-xl p-8 mb-8">
  <p className="text-amber-400 text-lg font-bold mb-2">✨ Limited Time Offer</p>
  <p className="text-white">
    Book any platter in December and receive a complimentary bottle of wine!
  </p>
</div>
```

**Example: Loyalty Program**

```tsx
<p className="text-amber-200 font-semibold mb-4">
  🌟 Book 5 services, get the 6th at 20% off!
</p>
```

---

## ♿ ACCESSIBILITY IMPROVEMENTS

### Add to Images
```tsx
<img 
  src="image.jpg" 
  alt="Detailed description of what's in image"  // ← Important for screen readers
  className="w-full rounded-lg"
/>
```

### Add to Buttons
```tsx
<button
  onClick={handleBook}
  aria-label="Open booking form for charcuterie platter"  // ← Accessible name
  className="px-8 py-3 bg-amber-600..."
>
  Book Now
</button>
```

---

## 🔍 SEO IMPROVEMENTS

### Update Meta Tags

**File**: `index.html` (line ~5):

```html
<!-- CURRENT: -->
<title>Lioness - Luxury Charcuterie & Pet Grooming in Seychelles</title>

<!-- ALREADY GOOD! But optionally add: -->
<meta name="description" content="Lioness Seychelles: Premium charcuterie platters and professional pet grooming services. Luxury, bespoke, and handcrafted experiences.">
<meta name="keywords" content="luxury charcuterie, pet grooming, Seychelles, fine dining, pet spa">
<meta name="author" content="Lioness">
```

### Open Graph Tags (for social sharing)

Add to `<head>` in `index.html`:

```html
<meta property="og:title" content="Lioness - Luxury Brand in Seychelles">
<meta property="og:description" content="Premium charcuterie and pet grooming">
<meta property="og:image" content="https://your-domain.com/image.jpg">
<meta property="og:url" content="https://your-domain.com">
<meta property="og:type" content="website">
```

---

## 📝 COPY TONE & VOICE GUIDELINES

### Maintain Lioness Brand Voice

Use these principles when editing content:

**DO**:
- ✅ Sound elegant and professional
- ✅ Emphasize craftsmanship
- ✅ Use descriptive adjectives (premium, artisan, luxury, curated)
- ✅ Focus on customer experience
- ✅ Be warm yet refined

**DON'T**:
- ❌ Use casual language (no "super cool" or "amazing")
- ❌ Make unsubstantiated claims
- ❌ Use all caps (except logo)
- ❌ Sound salesy or pushy
- ❌ Minimize the luxury positioning

### Example Edits

**❌ Weak Copy**:
```
"We do pet grooming. It's pretty good and we use nice products."
```

**✅ Strong Copy**:
```
"Professional grooming services featuring premium, hypoallergenic products and expert care tailored to your pet's unique needs."
```

---

## 🔐 SECURITY UPDATES

### Never Put in Code
- ❌ Real phone numbers (partially mask)
- ❌ Email addresses (use forms instead)
- ❌ API keys
- ❌ Payment info
- ❌ Customer data

### Use Environment Variables
```
VITE_WHATSAPP_NUMBER=248XXXXXXXX
VITE_OWNER_EMAIL=info@lionessseychelles.com
```

Then access:
```tsx
const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
```

---

## 🎯 CUSTOMIZATION CHECKLIST

### Before Launch
- [ ] WhatsApp numbers updated
- [ ] All text proofread
- [ ] Hours accurate
- [ ] Services correct
- [ ] Prices accurate (if shown)
- [ ] Social links added
- [ ] Email added
- [ ] Images compressed (if using)
- [ ] Mobile tested
- [ ] Links tested

### During Development
- [ ] Maintain brand voice
- [ ] Keep design consistent
- [ ] Use gold accent color
- [ ] Test on mobile
- [ ] Check spelling

### After Launch  
- [ ] Monitor analytics
- [ ] Update testimonials
- [ ] Add seasonal offers
- [ ] Update hours if changed
- [ ] Add new services
- [ ] Keep content fresh

---

## 🚀 QUICK CUSTOMIZATION SUMMARY

| Item | File | Action |
|------|------|--------|
| WhatsApp Numbers | PalettePage.tsx, GroomingPage.tsx | Update phone numbers |
| Business Hours | GroomingPage.tsx | Update hours, days |
| Service Descriptions | PalettePage.tsx, GroomingPage.tsx | Edit text |
| Pricing | Service cards | Add/update prices |
| Colors | Any file | Find/Replace amber |
| Images | Service cards | Add image URLs |
| Social Links | Footer | Add links |
| Email | Footer | Add email |
| Page Title | index.html | Already good! |
| Meta Tags | index.html | Add description |

---

## 💡 PRO TIPS

1. **Search & Replace**: Use Ctrl+H to change multiple instances at once
2. **Use DevTools**: F12 to test changes in browser instantly
3. **Hot Reload**: Changes auto-update in dev server
4. **Keep Backup**: Save original files before major changes
5. **Test Mobile**: Use phone to test before launching
6. **Git Commits**: Save progress with `git add . && git commit -m "Update content"`

---

**Last Updated**: February 2024
**Status**: Ready to Personalize
