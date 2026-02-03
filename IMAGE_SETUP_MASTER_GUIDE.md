# 🖼️ **IMAGE SETUP - COMPLETE MASTER GUIDE**

---

## 🎯 **YOUR SITUATION**

✅ You have a complete Lioness website  
✅ It's been updated with professional images  
✅ You want to know how to change them  
✅ You want it hosted and accessible  

**This guide covers ALL of it!**

---

## 📸 **WHAT'S ALREADY THERE**

Your website now has **10 professional images**:

| Location | Images | Type |
|----------|--------|------|
| Homepage | 2 | Background on cards |
| Palette Page | 4 | 1 hero + 3 gallery |
| Grooming Page | 4 | 1 hero + 3 gallery |

All images:
- ✅ Optimized for web
- ✅ Fast loading
- ✅ Mobile responsive
- ✅ From free Unsplash
- ✅ Easy to replace

---

## 🚀 **DEPLOY FIRST**

Get your website live, THEN customize images:

### **Step 1: Push to GitHub**
```bash
cd your-project-folder

git add .
git commit -m "Add images to Lioness website"
git push
```

### **Step 2: Vercel Auto-Deploys**
- Website updates automatically
- No extra steps needed
- Images go live immediately! 🎉

### **Step 3: Get Your URL**
- Check Vercel dashboard
- Your site URL: `https://your-name.vercel.app`
- Images are visible!

---

## 🔄 **REPLACE IMAGES ANYTIME**

### **3 Simple Steps**

#### **Step 1: Find Image**
- Go: https://unsplash.com
- Search: "charcuterie" or "dog grooming"
- Click image → Copy URL

#### **Step 2: Replace URL**
- Open your code editor
- Press: Ctrl+H (Find Replace)
- **Find**: Old URL
- **Replace**: New URL
- Save file

#### **Step 3: Deploy**
```bash
git add .
git commit -m "Update images"
git push
# Done! ✅
```

---

## 📍 **IMAGE LOCATIONS IN CODE**

### **Homepage** - `src/pages/HomePage.tsx`

**Palette Card Background** (Line ~65):
```tsx
backgroundImage: 'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80")'
```
Replace: `1559827260-dc66d52bef19`

**Grooming Card Background** (Line ~91):
```tsx
backgroundImage: 'url("https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80")'
```
Replace: `1558788353-f76d92427f16`

---

### **Palette Page** - `src/pages/PalettePage.tsx`

**Hero Image** (Line ~45):
```tsx
src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=90"
```

**Gallery Image 1** (Line ~56):
```tsx
src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=90"
```

**Gallery Image 2** (Line ~63):
```tsx
src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=90"
```

**Gallery Image 3** (Line ~70):
```tsx
src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=90"
```

---

### **Grooming Page** - `src/pages/GroomingPage.tsx`

**Hero Image** (Line ~45):
```tsx
src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=90"
```

**Gallery Image 1** (Line ~56):
```tsx
src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=90"
```

**Gallery Image 2** (Line ~63):
```tsx
src="https://images.unsplash.com/photo-1576754459f1-b4202c59c1df?w=600&q=90"
```

**Gallery Image 3** (Line ~70):
```tsx
src="https://images.unsplash.com/photo-1611003228941-98852ba62227?w=600&q=90"
```

---

## 🎨 **QUICK IMAGE REPLACEMENT**

### **Method 1: Find & Replace (Fastest)**

1. Open VS Code
2. Press: **Ctrl+H** (Windows) or **Cmd+H** (Mac)
3. **Find**: `1559827260-dc66d52bef19` (old image ID)
4. **Replace**: `YOUR_NEW_IMAGE_ID` (from Unsplash URL)
5. Click "Replace All"
6. Save & deploy

### **Method 2: Manual Edit**

1. Open file in code editor
2. Find the image line
3. Change the URL
4. Save
5. Deploy

### **Method 3: Using Your Own Photos**

1. Take photo
2. Upload to Imgur: https://imgur.com
3. Copy Imgur URL
4. Paste in code
5. Deploy

---

## 📸 **HOW TO GET IMAGE URLS**

### **From Unsplash** (Free, High Quality)
1. Go: https://unsplash.com
2. Search: Your image
3. Click on image
4. Right-click → Copy image address
5. URL looks like: `https://images.unsplash.com/photo-XXXXX...`

### **From Your Photos** (Best!)
1. Take photo of your work
2. Go: https://imgur.com
3. Drag & drop photo
4. Wait for upload
5. Right-click image → Copy image link
6. URL looks like: `https://i.imgur.com/XXXXX.jpg`

---

## ✨ **RECOMMENDED IMAGES FOR YOUR BUSINESS**

### **For Palette (Charcuterie)**

**Search Unsplash for:**
- "charcuterie board"
- "cheese platter"
- "gourmet food"
- "artisan charcuterie"
- "luxury food"

**Example good searches:**
```
site:unsplash.com charcuterie
site:unsplash.com cheese board
site:unsplash.com food styling
```

### **For Grooming (Pet Care)**

**Search Unsplash for:**
- "dog grooming"
- "pet spa"
- "professional groomer"
- "happy dog"
- "pet care"

**Example good searches:**
```
site:unsplash.com dog grooming
site:unsplash.com pet spa
site:unsplash.com puppy
```

---

## 📊 **IMAGE SPECIFICATIONS**

### **Homepage Cards**
- Size: 800px wide
- Quality: q=80
- Use: `?w=800&q=80`

### **Hero Images**
- Size: 1200px wide
- Quality: q=90
- Use: `?w=1200&q=90`

### **Gallery Images**
- Size: 600px wide
- Quality: q=90
- Use: `?w=600&q=90`

---

## 🎬 **COMPLETE EXAMPLE: Replace One Image**

### **Goal**: Replace homepage Palette card background

### **Step 1: Find New Image**
1. Go to https://unsplash.com
2. Search: "charcuterie"
3. Click on image you like
4. Right-click → Copy image address
5. You get: `https://images.unsplash.com/photo-1234567890?...`

### **Step 2: Open Code Editor**
1. Open VS Code
2. File → Open Folder → Your project
3. Open: `src/pages/HomePage.tsx`

### **Step 3: Find Old Image**
1. Press: Ctrl+F (Find)
2. Type: `1559827260-dc66d52bef19`
3. First match = Palette card background
4. Press Escape to close Find

### **Step 4: Replace Image**
1. Press: Ctrl+H (Find & Replace)
2. Find: `https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80`
3. Replace: `https://images.unsplash.com/photo-XXXXX-YOUR-NEW-ID?w=800&q=80`
4. Click "Replace" (not Replace All, just the first one)

### **Step 5: Save**
1. Press: Ctrl+S
2. File is saved

### **Step 6: Test Locally**
```bash
npm run dev
# Open http://localhost:5173
# Check image changed ✓
```

### **Step 7: Deploy**
```bash
git add .
git commit -m "Update palette card image"
git push
# Vercel auto-deploys ✓
```

### **Done!** ✨ New image is live!

---

## 🏆 **BEST PRACTICE: USE YOUR PHOTOS**

**Why?**
- ✅ Shows REAL products/services
- ✅ More professional
- ✅ Builds trust
- ✅ Stand out from competitors
- ✅ Free & easy!

**How:**
1. Take photos of your work
2. Upload to Imgur (5 minutes)
3. Copy URL
4. Replace in code
5. Deploy
6. Done! 🚀

---

## ⚡ **QUICK REFERENCE TABLE**

| What | Where | How | Time |
|------|-------|-----|------|
| Replace palette card BG | HomePage.tsx line 65 | Find & Replace | 2 min |
| Replace grooming card BG | HomePage.tsx line 91 | Find & Replace | 2 min |
| Replace palette hero | PalettePage.tsx line 45 | Find & Replace | 2 min |
| Replace palette gallery | PalettePage.tsx lines 56,63,70 | Find & Replace | 5 min |
| Replace grooming hero | GroomingPage.tsx line 45 | Find & Replace | 2 min |
| Replace grooming gallery | GroomingPage.tsx lines 56,63,70 | Find & Replace | 5 min |
| Deploy changes | Terminal | git push | 2 min |
| **Total to replace all** | **All 10 images** | **Find & Replace** | **~20 min** |

---

## 🔐 **Image Licensing**

### **Unsplash**
- ✅ Free commercial use
- ✅ No credit required
- ✅ No permission needed
- ✅ Unlimited downloads

### **Your Own Photos**
- ✅ 100% yours
- ✅ No licensing issues
- ✅ Full control
- ✅ Most authentic

---

## 🎯 **ACTION PLAN**

### **Right Now** (5 minutes)
1. Deploy website to Vercel
2. Test it works
3. Get your live URL

### **This Week** (When ready)
1. Take photos of your work
2. Upload to Imgur
3. Copy URLs
4. Replace in code
5. Deploy again

### **Going Forward** (Anytime)
1. Better photos? Update easily
2. New products? Add gallery images
3. Customer testimonials? Add their photos
4. Always just update URLs = simple!

---

## ❓ **FAQ**

### **Q: Can I change images without coding?**
A: Yes! Just find URLs and use Find & Replace.

### **Q: Will changing images break anything?**
A: No! Just replacing URLs, code structure stays same.

### **Q: How often can I change images?**
A: Anytime! Deploy takes 2 minutes.

### **Q: Can I add MORE than 10 images?**
A: Yes! Copy gallery section code and paste again.

### **Q: Will images slow my website?**
A: No! Optimized URLs make them fast.

### **Q: Can I use images from social media?**
A: Check copyright first. Better to use Unsplash or your own.

### **Q: What if image URL is broken?**
A: Test URL in browser first. If broken, find new image.

### **Q: Can I schedule image changes?**
A: Not automatically, but you can change anytime you want.

---

## 🚀 **DEPLOYMENT CHECKLIST**

Before deploying:
- [ ] Images replaced (or keep defaults)
- [ ] Tested locally with `npm run dev`
- [ ] All image URLs working
- [ ] No broken links
- [ ] Website looks good on mobile
- [ ] Ready to git push

---

## 📚 **DOCUMENTATION FILES**

For more details, see:

1. **ADD_IMAGES_GUIDE.md** - Complete comprehensive guide
2. **QUICK_IMAGE_REFERENCE.md** - Fast lookup table
3. **IMAGES_ADDED_SUMMARY.md** - Summary of changes
4. **WHAT_CHANGED.md** - Before & after comparison
5. **IMAGES_COMPLETE.md** - Status & next steps

---

## 🎁 **BONUS: Image Ideas for Your Business**

### **Palette Ideas**
- 📸 Your signature platter
- 📸 Close-up of meats & cheeses
- 📸 Finished order ready to deliver
- 📸 Custom bespoke arrangement
- 📸 Event setup with your platters
- 📸 Premium ingredients showcase

### **Grooming Ideas**
- 📸 Happy pet after grooming
- 📸 Before/after comparison
- 📸 Your grooming salon
- 📸 Staff with pets
- 📸 Spa treatment setup
- 📸 Customer testimonial photos

**Use these and your website becomes UNIQUE!** ✨

---

## ✅ **YOU'RE ALL SET!**

**You now know:**
- ✅ Where images are in your code
- ✅ How to replace them easily
- ✅ How to get new images
- ✅ How to deploy changes
- ✅ Best practices for images
- ✅ Everything about image management!

---

## 🦁 **NEXT STEP: DEPLOY!**

```bash
# Make sure you're in project folder
cd your-lioness-website

# Add all changes
git add .

# Commit
git commit -m "Add professional images to website"

# Push to GitHub (Vercel auto-deploys!)
git push

# ✅ DONE! Check your Vercel URL
```

---

**Your Lioness website with images is ready to wow your customers!** 🎉✨

**Questions?** Re-read this guide or check the other documentation files.

**Ready?** Deploy it now! 🚀

