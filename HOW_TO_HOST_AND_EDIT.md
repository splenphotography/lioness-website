# 🦁 HOW TO HOST AND EDIT YOUR LIONESS WEBSITE

**Complete step-by-step guide for beginners - No coding knowledge required!**

---

## 🎯 WHAT THIS GUIDE COVERS

✅ How to **upload** your website online  
✅ How to **make changes** to your website  
✅ How to **manage** your website daily  
✅ How to **update** content anytime  

---

# 📝 PART 1: HOSTING YOUR WEBSITE

## STEP 1: CHOOSE YOUR HOSTING OPTION

You have **3 easy choices**:

### Option A: VERCEL (Easiest) ⭐ RECOMMENDED
- **Best for**: Beginners who want automatic updates
- **Cost**: FREE
- **Time**: 15-20 minutes
- **Features**: Auto-updates when you push code, free SSL, fast CDN

### Option B: NETLIFY (Simple)
- **Best for**: Simple, reliable hosting
- **Cost**: FREE
- **Time**: 15 minutes
- **Features**: GitHub integration, easy setup

### Option C: YOUR EXISTING HOSTING
- **Best for**: Already have GoDaddy, Bluehost, etc.
- **Cost**: Your current monthly fee
- **Time**: 10 minutes
- **Features**: Simple FTP upload

---

## 🚀 HOSTING OPTION A: VERCEL (EASIEST)

### Step 1: Get the Required Accounts

**Create GitHub Account** (free):
1. Go to https://github.com/signup
2. Enter email, password, username
3. Verify your email
4. Done!

**Create Vercel Account** (free):
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "GitHub"
4. Authorize Vercel
5. Done!

### Step 2: Upload Your Code to GitHub

1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Navigate to your project folder:
```bash
cd path/to/your/lioness-website
```

3. Run these commands (copy/paste one at a time):
```bash
git init
git add .
git commit -m "Initial Lioness website"
git remote add origin https://github.com/YOUR_USERNAME/lioness-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

Example:
```bash
git remote add origin https://github.com/john-doe/lioness-website.git
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Click "GitHub"
4. Find and select `lioness-website`
5. Click "Import"
6. Keep default settings
7. Click "Deploy"

**Wait 2-3 minutes...**

### ✅ Your Website is LIVE!

You get a free URL like: `https://lioness-website.vercel.app`

### Step 4: Add Custom Domain (Optional)

If you bought a domain (like `lionessseychelles.com`):

1. In Vercel dashboard → "Domains"
2. Click "Add Domain"
3. Enter your domain
4. Vercel shows DNS instructions
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Update DNS settings
7. Wait 24-48 hours
8. Done!

---

## 🚀 HOSTING OPTION B: NETLIFY (SIMPLE)

### Step 1: Prerequisites

- GitHub account with code uploaded (see Vercel Step 2 above)
- Netlify account (create at https://netlify.com)

### Step 2: Deploy

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Choose "GitHub"
4. Find your `lioness-website` repo
5. Click "Deploy site"

**Wait 2-3 minutes...**

### ✅ Your Website is LIVE!

URL: `https://lioness-website-random123.netlify.app`

### Step 3: Add Domain (Optional)

1. Site settings → Domain settings
2. Add your custom domain
3. Update DNS at domain registrar
4. Wait 24-48 hours

---

## 🚀 HOSTING OPTION C: MANUAL HOSTING (Your Current Provider)

### Step 1: Build Your Website

1. Open Terminal/Command Prompt
2. Run:
```bash
npm run build
```

This creates a `dist/index.html` file - that's your complete website!

### Step 2: Upload to Your Hosting

**If using cPanel (most hosting providers)**:

1. Log into your hosting control panel
2. Click "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload"
5. Select `dist/index.html` from your computer
6. Upload it
7. Done!

**If using FTP**:

1. Open FileZilla or WinSCP (FTP software)
2. Connect to your hosting
3. Drag `dist/index.html` to `public_html` folder
4. Done!

### ✅ Your Website is LIVE!

Go to your domain and see your website!

---

# 📝 PART 2: HOW TO EDIT YOUR WEBSITE

## THE EASIEST WAY TO EDIT

**You only need to know:**
- Find text in a file
- Change the text
- Save the file

**That's it! No coding needed.**

---

## 📝 EDITING EXAMPLE 1: Update WhatsApp Numbers

**This is CRITICAL - Don't skip!**

### Step 1: Open File in VS Code

1. Open VS Code
2. Click "File" → "Open Folder"
3. Select your project folder
4. Wait for it to load

### Step 2: Find WhatsApp Number

1. In the left panel, find: `src/pages/PalettePage.tsx`
2. Click to open it
3. Press `Ctrl+F` (or `Cmd+F` on Mac)
4. Search: `wa.me/248`
5. You should find it around line 8

### Step 3: Change the Number

**Find this**:
```
wa.me/248?text=
```

**Change to**:
```
wa.me/248XXXXXXXX?text=
```

Replace `XXXXXXXX` with your WhatsApp number (no spaces, no + sign)

**Example**:
```
wa.me/248XXXX1234?text=
```

### Step 4: Do the Same for Grooming

1. Open: `src/pages/GroomingPage.tsx`
2. Find line 8 (same `wa.me/248`)
3. Replace with your WhatsApp number
4. Save

### Step 5: Save All Changes

1. Press `Ctrl+S` (or `Cmd+S`)
2. Your changes are saved

### Step 6: Test

1. Run: `npm run dev`
2. Open: `http://localhost:5173`
3. Click WhatsApp button
4. Should open WhatsApp with your number!

---

## 📝 EDITING EXAMPLE 2: Update Business Description

### Step 1: Open File

1. Open: `src/pages/PalettePage.tsx`
2. Look around line 25-35
3. Find this section:
```
Experience curated selections of premium charcuterie...
```

### Step 2: Change the Text

Replace the old description with your new one:

**Old**:
```
Experience curated selections of premium charcuterie, artisanal cheeses, and exquisite accompaniments—handcrafted for your most refined celebrations and intimate gatherings.
```

**New**:
```
Your new description here! Make it as long as you want.
```

### Step 3: Save

Press `Ctrl+S`

### Step 4: See Changes

1. Refresh browser at `http://localhost:5173`
2. Changes appear instantly!

---

## 📝 EDITING EXAMPLE 3: Change Service Description

### Step 1: Open File

1. Open: `src/pages/PalettePage.tsx`
2. Look around line 75 for service cards

### Step 2: Find Service Section

You'll see sections like this:
```
<h3>Classic Elegance</h3>
<p>A timeless selection...</p>
<p>Perfect for 4-6 guests</p>
```

### Step 3: Change the Text

Change any of these lines to your new text:

**Service Name**:
```
<h3>Classic Elegance</h3>
```
Change to:
```
<h3>YOUR NEW SERVICE NAME</h3>
```

**Description**:
```
<p>A timeless selection...</p>
```
Change to:
```
<p>Your new description</p>
```

**Details**:
```
<p>Perfect for 4-6 guests</p>
```
Change to:
```
<p>Perfect for YOUR GUEST COUNT</p>
```

### Step 4: Save and Test

1. Save: `Ctrl+S`
2. Refresh browser
3. See your changes!

---

## 📝 EDITING EXAMPLE 4: Update Business Hours

### Step 1: Open File

1. Open: `src/pages/GroomingPage.tsx`
2. Look around line 170
3. Find: `Available Tuesday - Sunday | Closed Mondays`

### Step 2: Change Hours

**Old**:
```
Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability
```

**New**:
```
Available Monday - Friday 9am-5pm | Saturday 10am-4pm | Closed Sundays
```

Just change to YOUR actual hours!

### Step 3: Save

Press `Ctrl+S`

### Step 4: Test

Refresh browser and check!

---

## 📝 EDITING EXAMPLE 5: Add Your Email

### Step 1: Open File

1. Open: `src/pages/PalettePage.tsx`
2. Look around line 185 in the footer section

### Step 2: Find Footer

You'll see:
```
<p>Lioness Palette | Premium Charcuterie & Snacks</p>
<p>© 2024 Lioness. All rights reserved. | Seychelles</p>
```

### Step 3: Add Email Line

Add this line after the first line:
```
<p>
  📧 <a href="mailto:palette@youremail.com" className="text-amber-400">
    palette@youremail.com
  </a>
</p>
```

Replace `palette@youremail.com` with YOUR email!

### Step 4: Save and Test

1. Save: `Ctrl+S`
2. Refresh browser
3. Email should appear in footer!

---

## 🎨 CHANGING COLORS

### Change Gold/Amber to Different Color

**Easy Method (Find & Replace)**:

1. Press `Ctrl+H` (or `Cmd+H`)
2. Find: `amber`
3. Replace with: Your color
4. Click "Replace All"

**Available colors**:
- `yellow` - Yellow
- `orange` - Orange
- `purple` - Purple
- `green` - Green
- `blue` - Blue
- `pink` - Pink
- `red` - Red

**Example**: Change gold to orange
1. Find: `amber`
2. Replace: `orange`
3. All colors change!

---

# 🔄 KEEPING YOUR WEBSITE UPDATED

## After Making Changes

### If Using Vercel or Netlify:

```bash
git add .
git commit -m "Updated content"
git push
```

**That's it!** Website updates automatically in 2 minutes! ✨

### If Using Manual Hosting:

```bash
npm run build
# Upload dist/index.html to your hosting via FTP or cPanel
```

Website updates immediately!

---

## DAILY MANAGEMENT

### Monitor WhatsApp
- Check for new booking inquiries
- Respond quickly to customers
- No code changes needed

### Weekly Tasks
- Review any feedback
- Check if hours/info needs updating
- Make small edits if needed

### Monthly Tasks
- Update testimonials (once you have them)
- Refresh content if needed
- Check analytics

---

# 🎯 COMMON EDITING TASKS

## Task: Add Email Address

**Files to edit**:
- `src/pages/PalettePage.tsx` (footer)
- `src/pages/GroomingPage.tsx` (footer)

**Add this line in footer**:
```
<p>
  📧 <a href="mailto:yourteam@lionessseychelles.com" className="text-amber-400">
    yourteam@lionessseychelles.com
  </a>
</p>
```

## Task: Change Service Names

**Files to edit**:
- `src/pages/PalettePage.tsx` (service cards)
- `src/pages/GroomingPage.tsx` (service cards)

**Find and change**:
```
<h3>Classic Elegance</h3>
```
to your new service name.

## Task: Update Pricing

**Just add price in the detail line**:

**Old**:
```
<p>Perfect for 4-6 guests</p>
```

**New**:
```
<p>Perfect for 4-6 guests | Starting at $45</p>
```

## Task: Add Delivery/Service Area Info

**In footer**, add:
```
<p>Delivery available across Seychelles</p>
```

or

```
<p>Mobile grooming available for greater Victoria area</p>
```

---

# 🚨 TROUBLESHOOTING

## Changes Not Showing?

1. Did you save the file? → `Ctrl+S`
2. Hard refresh browser → `Ctrl+Shift+R`
3. If using Vercel, wait 2 minutes for auto-deploy
4. Restart dev server → Stop, run `npm run dev`

## WhatsApp Button Doesn't Work?

1. Check phone number format: `248XXXXXXXX`
2. No spaces or special characters
3. Test manually: Click WhatsApp button
4. If it opens WhatsApp, it works!

## Website Looks Broken?

1. Check you didn't accidentally delete important code
2. Use `git checkout filename` to revert changes
3. Example: `git checkout src/pages/PalettePage.tsx`

## Forgot What You Changed?

```bash
git log  # See history
git diff  # See current changes
git checkout filename  # Undo changes to file
```

---

# 📱 TESTING YOUR CHANGES

### Test Locally First

```bash
npm run dev
# Opens http://localhost:5173
```

1. Make changes
2. Changes appear automatically
3. Test all buttons work
4. Check mobile view (F12 → toggle device)
5. When satisfied, deploy!

### Test on Mobile

1. Get your computer's IP address
2. On phone, visit: `http://YOUR_IP:5173`
3. Test everything works
4. Check layout looks good

### Test in Different Browsers

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓

All should work!

---

# 📝 EDITING CHECKLIST

### Before Deploying Changes

- [ ] Edited the file in VS Code
- [ ] Saved the file (`Ctrl+S`)
- [ ] Tested locally (`npm run dev`)
- [ ] Refreshed browser
- [ ] Tested on mobile
- [ ] Checked all buttons still work
- [ ] Committed to Git (if using Vercel)
- [ ] Pushed changes (`git push`)

### Verify After Deploying

- [ ] Changes appear on live site
- [ ] No broken links
- [ ] WhatsApp buttons work
- [ ] Buttons clickable
- [ ] Text readable
- [ ] Mobile view good

---

# 🎁 BONUS: QUICK EDITS YOU CAN MAKE

### Easy (< 5 minutes)
- Change WhatsApp numbers
- Update business hours
- Add email address
- Change tagline
- Update service names

### Medium (5-15 minutes)
- Rewrite service descriptions
- Add new service
- Change colors
- Add testimonials

### Harder (may need help)
- Change layout/design
- Add new page
- Add images
- Add payment processing

---

# 🆘 GETTING HELP

### Check These First

1. **QUICK_START.md** - Setup help
2. **PERSONALIZATION_GUIDE.md** - Editing help
3. **HOSTING_AND_EDITING_GUIDE.md** - Full reference

### When to Call a Developer

- Need to change layout
- Want to add images
- Need payment processing
- Want email system
- Complex changes

**Estimated costs**: $50-500 depending on task

---

# ✅ SUMMARY

**You now know how to**:
1. ✅ Host your website (Vercel, Netlify, or your hosting)
2. ✅ Edit content (text, phone numbers, descriptions)
3. ✅ Update WhatsApp numbers
4. ✅ Change colors
5. ✅ Deploy changes
6. ✅ Test everything

**You can manage everything yourself!**

---

## 🚀 NEXT STEPS

1. **Pick hosting option** (A, B, or C)
2. **Follow the hosting steps** above
3. **Update WhatsApp numbers**
4. **Make other edits** as needed
5. **Deploy**
6. **Go live!**

---

**🦁 Your Lioness website is ready. Let's launch!** 🚀

Good luck! You've got this! ✨
