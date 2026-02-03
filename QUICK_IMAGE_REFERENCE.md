# 🖼️ **QUICK IMAGE REPLACEMENT GUIDE**

## **EASIEST WAY: Replace Image URLs**

### **Step 1: Choose Your Image**

Get free images from:
- https://unsplash.com (best quality)
- https://www.pexels.com (good variety)
- https://pixabay.com (large library)
- https://imgur.com (upload your own!)

### **Step 2: Get Image URL**

1. Right-click image
2. Copy image link
3. Should look like: `https://images.unsplash.com/photo-XXXXX?w=800&q=90`

### **Step 3: Find-Replace in Code**

Use your code editor's Find & Replace (Ctrl+H or Cmd+H):

---

## 🔄 **Replace Images by Location**

### **HOMEPAGE IMAGES** 
**File**: `src/pages/HomePage.tsx`

**Image 1 - Palette Card Background**
- **Find**: `https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~65

**Image 2 - Grooming Card Background**
- **Find**: `https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~91

---

### **PALETTE PAGE IMAGES**
**File**: `src/pages/PalettePage.tsx`

**Image 1 - Hero (main top image)**
- **Find**: `https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~45

**Image 2 - Gallery photo 1 (left)**
- **Find**: `https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~56

**Image 3 - Gallery photo 2 (middle)**
- **Find**: `https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~63

**Image 4 - Gallery photo 3 (right)**
- **Find**: `https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~70

---

### **GROOMING PAGE IMAGES**
**File**: `src/pages/GroomingPage.tsx`

**Image 1 - Hero (main top image)**
- **Find**: `https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~45

**Image 2 - Gallery photo 1 (left)**
- **Find**: `https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~56

**Image 3 - Gallery photo 2 (middle)**
- **Find**: `https://images.unsplash.com/photo-1576754459f1-b4202c59c1df?w=600&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~63

**Image 4 - Gallery photo 3 (right)**
- **Find**: `https://images.unsplash.com/photo-1611003228941-98852ba62227?w=600&q=90`
- **Replace with**: `YOUR_NEW_IMAGE_URL`
- **Line**: ~70

---

## 🎬 **Visual Example**

### **Before** (Text only)
```
HomePage
├── Palette Card (text only)
└── Grooming Card (text only)

PalettePage
├── Hero (text only)
└── Services (text only)
```

### **After** (With images!)
```
HomePage
├── Palette Card ✨ BACKGROUND IMAGE
└── Grooming Card ✨ BACKGROUND IMAGE

PalettePage
├── Hero ✨ LARGE IMAGE
├── Gallery ✨ 3 IMAGES
└── Services (text only)

GroomingPage
├── Hero ✨ LARGE IMAGE
├── Gallery ✨ 3 IMAGES
└── Services (text only)
```

---

## 📸 **RECOMMENDED FREE IMAGES**

### **For Charcuterie (Palette)**

**Search terms on Unsplash.com:**
- "charcuterie board"
- "cheese platter"
- "gourmet food"
- "charcuterie styling"
- "luxury food photography"

**Example URLs:**
```
https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=90
https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&q=90
https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1200&q=90
https://images.unsplash.com/photo-1504674900967-ca0dca9b4d0e?w=1200&q=90
https://images.unsplash.com/photo-1574894372554-f1a4dee432b5?w=1200&q=90
```

### **For Pet Grooming**

**Search terms on Unsplash.com:**
- "dog grooming"
- "pet spa"
- "dog groomer"
- "professional grooming"
- "happy dog after bath"

**Example URLs:**
```
https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=90
https://images.unsplash.com/photo-1576754459f1-b4202c59c1df?w=1200&q=90
https://images.unsplash.com/photo-1611003228941-98852ba62227?w=1200&q=90
https://images.unsplash.com/photo-1450684526542-96b73cf72b12?w=1200&q=90
https://images.unsplash.com/photo-1523639033227-6f81ee514308?w=1200&q=90
```

---

## ⚡ **3-STEP REPLACEMENT PROCESS**

### **Step 1: Find Image**
- Go to Unsplash.com
- Search for image
- Copy the Unsplash URL

### **Step 2: Open Code**
- Open file in VS Code
- Press Ctrl+H (Find Replace)
- Paste old URL in "Find"
- Paste new URL in "Replace"
- Click "Replace All" (or "Replace" to do one)

### **Step 3: Test**
```bash
npm run dev
# Visit localhost:5173
# Check images appear
```

---

## 🎯 **Image Specifications**

| Type | Size | Format | Quality |
|------|------|--------|---------|
| Homepage Cards | 800px wide | JPG | q=80 |
| Hero/Large | 1200px wide | JPG | q=90 |
| Gallery/Small | 600px wide | JPG | q=90 |

**Just use these in URL:**
- `?w=800&q=80` - Homepage cards
- `?w=1200&q=90` - Hero/large
- `?w=600&q=90` - Gallery/small

---

## 🔗 **How to Get Unsplash Image URL**

1. Go to https://unsplash.com
2. Search your term (e.g., "charcuterie")
3. Click on image
4. Right-click → **Copy image address**
5. URL looks like: `https://images.unsplash.com/photo-XXXXX?w=...`

**That's your URL to use!**

---

## 💡 **PRO TIP: Use Your Own Photos**

**Best approach for authenticity:**

1. Take photos of your:
   - Charcuterie platters
   - Pet grooming results
   - Your salon/workspace
   - Team members

2. Upload to https://imgur.com (free, no account needed)

3. Copy the image URL

4. Use in your website!

**Your photos will be UNIQUE and show REAL results** 📸✨

---

## ❌ **AVOID Common Mistakes**

| Mistake | Fix |
|--------|-----|
| URL without `http://` | Add: `https://` to start |
| Broken URL | Test URL in browser first |
| Wrong quote marks | Use straight quotes: `"..."` |
| Missing `w=` parameter | Add: `?w=1200&q=90` to end |
| Spaces in code | No spaces around `=` or `?` |

---

## ✅ **Verify Images Work**

After replacing:

1. Save file (Ctrl+S)
2. Run: `npm run dev`
3. Open: `http://localhost:5173`
4. Check:
   - Images appear ✓
   - Images not broken ✓
   - Mobile looks good ✓
5. Deploy: `git push`

---

## 📝 **All Image Locations Quick Reference**

```
Homepage (src/pages/HomePage.tsx)
├── Line ~65: Palette card background
└── Line ~91: Grooming card background

Palette Page (src/pages/PalettePage.tsx)
├── Line ~45: Hero image
├── Line ~56: Gallery image 1
├── Line ~63: Gallery image 2
└── Line ~70: Gallery image 3

Grooming Page (src/pages/GroomingPage.tsx)
├── Line ~45: Hero image
├── Line ~56: Gallery image 1
├── Line ~63: Gallery image 2
└── Line ~70: Gallery image 3
```

---

## 🎁 **BONUS: Test Image URLs**

Before using in website, test URL works:

1. Copy image URL: `https://images.unsplash.com/...`
2. Paste in browser address bar
3. Should show image
4. If shows 404 or broken → URL is wrong

---

**That's it!** 🎉

Quick summary:
1. Find image → Get URL
2. Find old URL in code
3. Replace with new URL
4. Save & test
5. Deploy!

---

**See ADD_IMAGES_GUIDE.md for detailed explanations** 📖

