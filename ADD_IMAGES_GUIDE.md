# 📸 **HOW TO ADD IMAGES TO YOUR LIONESS WEBSITE**

## **Quick Overview**

Your website currently has **NO IMAGES** - just text and icons. You can easily add images in two ways:

1. **URL-based images** (quickest) - Link to images already online
2. **Local images** (best) - Upload images to your project

---

## **OPTION 1: QUICK WAY - Use Online Image URLs** ⚡

This is the **fastest** way to get started. No file uploads needed.

### **Step 1: Find Image URLs**

You need online image links. Get them from:
- **Free images**: Unsplash, Pexels, Pixabay
- **Your own photos**: Upload to Imgur, Cloudinary, or similar
- **AI images**: DALL-E, Midjourney (for luxury charcuterie/pet photos)

### **Step 2: Add Image to HomePage**

**File**: `src/pages/HomePage.tsx`

**Find this section** (around line 59):
```tsx
{/* Palette Card */}
<Link to="/palette" className="group">
  <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-b from-amber-950 to-slate-900 border border-amber-900/50 hover:border-amber-600/80 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-900/50">
```

**Replace with** (add image):
```tsx
{/* Palette Card */}
<Link to="/palette" className="group">
  <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-b from-amber-950 to-slate-900 border border-amber-900/50 hover:border-amber-600/80 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-900/50">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80")'
      }}
    ></div>
```

**For Grooming Card** (around line 80), replace similar section:
```tsx
{/* Grooming Card */}
<Link to="/grooming" className="group">
  <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-b from-amber-950 to-slate-900 border border-amber-900/50 hover:border-amber-600/80 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-900/50">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80")'
      }}
    ></div>
```

### **Step 3: Add Image to Palette Page**

**File**: `src/pages/PalettePage.tsx`

**Add after the opening of the Hero section** (after line 30, before the closing `</div>`):

```tsx
{/* Hero Image Section */}
<div className="mb-12 rounded-xl overflow-hidden border border-amber-900/50 h-96 w-full">
  <img 
    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
    alt="Premium Charcuterie Platter"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
```

**Full section should look like**:
```tsx
<div className="max-w-4xl mx-auto relative z-10">
  <div className="text-center mb-12">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
      Lioness <span className="text-amber-400">Palette</span>
    </h1>
    
    {/* Hero Image Section */}
    <div className="mb-12 rounded-xl overflow-hidden border border-amber-900/50 h-96 w-full">
      <img 
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
        alt="Premium Charcuterie Platter"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <p className="text-xl text-amber-200 mb-4">Artisan Charcuterie & Gourmet Platters</p>
    {/* ... rest of content ... */}
```

### **Step 4: Add Image to Grooming Page**

**File**: `src/pages/GroomingPage.tsx`

**Add the same image block after the h1 (before the description):**

```tsx
{/* Hero Image Section */}
<div className="mb-12 rounded-xl overflow-hidden border border-amber-900/50 h-96 w-full">
  <img 
    src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=80"
    alt="Professional Pet Grooming"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
```

---

## **OPTION 2: LOCAL IMAGES** (Best for Your Own Photos)

### **Step 1: Create Images Folder**

Create a new folder in your project:
```
src/
  assets/
    images/
      palette-hero.jpg
      grooming-hero.jpg
      palette-card.jpg
      grooming-card.jpg
```

### **Step 2: Add Your Images**

1. Take photos of your:
   - Charcuterie platters
   - Pet grooming before/after
   - Your business setup
   - Team photos

2. Optimize them (resize to 800-1200px width)

3. Save to `src/assets/images/`

### **Step 3: Import in Components**

**In HomePage.tsx** (add at top):
```tsx
import paletteCardImage from '../assets/images/palette-card.jpg';
import groomingCardImage from '../assets/images/grooming-card.jpg';
```

**Use in card**:
```tsx
<div 
  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
  style={{
    backgroundImage: `url("${paletteCardImage}")`
  }}
></div>
```

**In PalettePage.tsx** (add at top):
```tsx
import palettePalletteHero from '../assets/images/palette-hero.jpg';
```

**Use in hero**:
```tsx
<img 
  src={paletteHero}
  alt="Premium Charcuterie Platter"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>
```

---

## **RECOMMENDED IMAGE SIZES**

| Location | Size | Format | Optimization |
|----------|------|--------|---------------|
| Card background | 800x600px | JPG | Compressed, blurred |
| Hero image | 1200x800px | JPG | High quality |
| Service showcase | 600x400px | JPG | Mobile optimized |
| Thumbnail | 300x300px | JPG | Square, small |

---

## **FREE LUXURY IMAGE RESOURCES**

### **Charcuterie/Food Images**
- **Unsplash**: Search "charcuterie board" or "cheese platter"
  - https://unsplash.com/search/photos/charcuterie
- **Pexels**: Free food photography
  - https://www.pexels.com/search/charcuterie/
- **Pixabay**: Premium stock photos
  - https://pixabay.com/

### **Pet Grooming Images**
- **Unsplash**: Search "dog grooming" or "pet spa"
  - https://unsplash.com/search/photos/dog-grooming
- **Pexels**: Pet photography
  - https://www.pexels.com/search/dog-grooming/
- **Pixabay**: Animal care photos
  - https://pixabay.com/

### **Luxury Lifestyle**
- **AI Generated**: DALL-E, Midjourney (custom images)
  - Prompts: "luxury charcuterie board Seychelles"
  - Prompts: "premium pet grooming spa elegant"

---

## **EXAMPLE IMAGE LINKS** (Ready to Use)

### **Charcuterie Images**
```
https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80
https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&q=80
https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1200&q=80
```

### **Pet Grooming Images**
```
https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=80
https://images.unsplash.com/photo-1576754459f1-b4202c59c1df?w=1200&q=80
https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80
```

### **Luxury Background**
```
https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80
```

---

## **HOW TO CUSTOMIZE IMAGE STYLING**

### **Make Image Darker** (Better Text Visibility)
```tsx
<div 
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{
    backgroundImage: 'url("YOUR_IMAGE_URL")'
  }}
></div>
```
Lower the `opacity` value (20 = very dark, 50 = visible)

### **Make Image Brighter**
```tsx
opacity-50  // Change to higher number
```

### **Change Image Focus**
```tsx
className="... bg-center ..."  // Options: bg-center, bg-top, bg-bottom
```

---

## **ADDING PRODUCT SHOWCASE IMAGES**

In the **Services Section**, you can add images for each platter type:

**PalettePage.tsx** - After the service cards:

```tsx
{/* Gallery Section */}
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Gallery</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64">
        <img 
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
          alt="Classic Elegance Platter"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64">
        <img 
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80"
          alt="Luxury Collection Platter"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64">
        <img 
          src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80"
          alt="Custom Bespoke Platter"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</section>
```

---

## **STEP-BY-STEP EXAMPLE: Add Palette Hero Image**

### **Current Code** (in PalettePage.tsx, line 35):
```tsx
<div className="max-w-4xl mx-auto relative z-10">
  <div className="text-center mb-12">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
      Lioness <span className="text-amber-400">Palette</span>
    </h1>
    <p className="text-xl text-amber-200 mb-4">Artisan Charcuterie & Gourmet Platters</p>
```

### **Updated Code** (with image):
```tsx
<div className="max-w-4xl mx-auto relative z-10">
  <div className="text-center mb-12">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
      Lioness <span className="text-amber-400">Palette</span>
    </h1>
    
    {/* ADD THIS IMAGE */}
    <div className="mb-12 rounded-xl overflow-hidden border border-amber-900/50 h-96 w-full">
      <img 
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
        alt="Premium Charcuterie Platter"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <p className="text-xl text-amber-200 mb-4">Artisan Charcuterie & Gourmet Platters</p>
```

---

## **TESTING YOUR IMAGES**

After adding images:

1. **Save file** (Ctrl+S or Cmd+S)
2. **Check browser** - Page should auto-refresh
3. **Test mobile** - Check responsiveness
4. **Test hover** - Image should zoom slightly on hover

---

## **TROUBLESHOOTING**

### **Image not showing?**
- ✓ Check URL is correct (copy-paste into browser address bar)
- ✓ Check image file exists
- ✓ Check file permissions
- ✓ Wait 5 seconds for browser refresh

### **Image looks blurry?**
- ✓ Increase image quality URL parameter: `&q=90` instead of `&q=80`
- ✓ Use larger image dimensions

### **Image won't resize?**
- ✓ Check CSS class `object-cover` is applied
- ✓ Check parent `h-96` or `h-64` is set

### **Image breaks on mobile?**
- ✓ Check `max-w-4xl mx-auto` is applied
- ✓ Verify responsive classes are used

---

## **NEXT STEPS**

1. **Choose your approach**:
   - Option 1: Use URLs (quickest)
   - Option 2: Local files (best)

2. **Gather images**:
   - Unsplash for free images
   - Or take your own photos

3. **Add to pages**:
   - HomePage (business cards)
   - PalettePage (hero + gallery)
   - GroomingPage (hero + gallery)

4. **Test everything**:
   - Desktop view
   - Mobile view
   - Hover effects

5. **Deploy**:
   - `npm run build`
   - Push to GitHub
   - Auto-updates on Vercel

---

## **RECOMMENDED: ADD YOUR OWN PHOTOS**

Instead of generic Unsplash images, **take real photos of your**:
- ✨ Your best charcuterie platters
- ✨ Happy pets after grooming
- ✨ Your salon/workspace
- ✨ Team member with pets
- ✨ Customer testimonials with photos

This makes your website **unique and authentic** vs. generic stock photos!

---

**Questions?** Refer back to this guide or check the code examples above!

