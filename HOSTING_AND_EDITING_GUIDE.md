# 🦁 Lioness Website - Hosting & Manual Editing Guide

**Complete guide to host your website and make changes manually without coding**

---

## 📊 Table of Contents

1. **Hosting Options** (Pick one)
2. **Deployment Steps** (Follow for your choice)
3. **Making Changes Manually** (Edit content easily)
4. **Managing Your Website** (Daily tasks)
5. **Troubleshooting** (Common issues)

---

## 🌐 HOSTING OPTIONS

### Option 1: Vercel (EASIEST - Recommended) ⭐

**Best For**: Beginners, automatic deployments, free SSL, fast performance

**Pros:**
- ✅ Completely free tier
- ✅ Automatic deployments (push to GitHub → site updates)
- ✅ Free SSL certificate
- ✅ Fast global CDN
- ✅ Perfect for React/Vite
- ✅ One-click domain connection
- ✅ Easy environment variables
- ✅ Auto-scaling

**Cons:**
- Requires GitHub account
- Serverless (but that's fine for this)

**Cost**: FREE tier is plenty

**Setup Time**: ~15 minutes total (including GitHub)

---

### Option 2: Netlify (EASY - Alternative)

**Best For**: Beginners wanting simplicity, form handling

**Pros:**
- ✅ Free tier available
- ✅ Easy GitHub integration
- ✅ Form submissions support
- ✅ Free SSL
- ✅ Good performance

**Cons:**
- Slightly slower than Vercel
- Less extensive free tier features

**Cost**: FREE tier works

**Setup Time**: ~15 minutes

---

### Option 3: AWS Amplify (ADVANCED)

**Best For**: Enterprise, scaling, custom requirements

**Pros:**
- ✅ AWS infrastructure
- ✅ Very scalable
- ✅ Advanced features

**Cons:**
- More complex
- Can be expensive
- Overkill for this project

**Cost**: $0-50/month depending on usage

**Setup Time**: ~30 minutes

---

### Option 4: Standard Web Hosting (ANY PROVIDER)

**Best For**: Simple, traditional hosting, no Git needed

**Providers:**
- GoDaddy
- Bluehost
- Hostinger
- DreamHost
- Any cPanel host

**Pros:**
- ✅ No GitHub required
- ✅ Simple FTP upload
- ✅ Affordable
- ✅ Works everywhere

**Cons:**
- Manual updates
- Slower than Vercel
- Need FTP knowledge

**Cost**: $3-10/month

**Setup Time**: ~20 minutes

---

## 🚀 STEP-BY-STEP DEPLOYMENT GUIDES

### ⭐ OPTION 1: VERCEL (EASIEST)

#### Step 1: Create GitHub Account (If you don't have one)
1. Go to https://github.com/signup
2. Enter email, password, username
3. Verify your email
4. Click "Create account"

#### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `lioness-website`
3. Description: "Lioness - Luxury Charcuterie & Pet Grooming Website"
4. Select "Public"
5. Skip adding files
6. Click "Create repository"

#### Step 3: Upload Your Code to GitHub
1. Open Terminal/Command Prompt in your project folder
2. Run these commands:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial Lioness website"

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/lioness-website.git

# Change to main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

#### Step 4: Connect to Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "GitHub" option
4. Authorize Vercel
5. Click "Import Project"
6. Select `lioness-website` repository
7. Click "Import"

#### Step 5: Configure & Deploy
1. Keep default settings
2. Click "Deploy"
3. Wait 1-2 minutes
4. Get your live URL! (e.g., `https://lioness-website.vercel.app`)

#### Step 6: Add Custom Domain (Optional)
1. In Vercel dashboard
2. Go to "Domains"
3. Add your domain (e.g., `lionessseychelles.com`)
4. Update DNS at domain registrar (instructions provided)
5. Wait 24-48 hours for propagation

**That's it! Your site is LIVE!** 🎉

---

### OPTION 2: NETLIFY (EASY)

#### Step 1: Create Netlify Account
1. Go to https://app.netlify.com/signup
2. Click "GitHub"
3. Authorize Netlify
4. (You need GitHub code first - see Vercel Step 3)

#### Step 2: Deploy
1. Click "New site from Git"
2. Choose "GitHub"
3. Select `lioness-website` repository
4. Click "Deploy site"

#### Step 3: Wait for Build
- Netlify auto-builds and deploys
- You get a URL like `lioness-website-abc123.netlify.app`

#### Step 4: Connect Domain
1. Go to Site settings → Domain settings
2. Add your custom domain
3. Update DNS records
4. Done!

---

### OPTION 3: TRADITIONAL HOSTING (GoDaddy, Bluehost, etc.)

#### Step 1: Prepare Your Website
```bash
npm run build
```
This creates a `dist/index.html` file - that's your complete website!

#### Step 2: Upload to Hosting
1. Log into your hosting control panel (cPanel usually)
2. Open File Manager
3. Navigate to `public_html` folder
4. Upload `dist/index.html` from your computer
5. Rename to `index.html` (might already be named correctly)

#### Step 3: Test
1. Go to your domain
2. Your website appears!

#### Step 4: Update DNS (If using new domain)
1. Update nameservers at domain registrar
2. Point to your hosting provider
3. Wait 24-48 hours

---

## 📝 HOW TO MAKE CHANGES MANUALLY

### Understanding the File Structure

```
Your Computer:
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx        ← Homepage content
│   │   ├── PalettePage.tsx     ← Palette service page
│   │   └── GroomingPage.tsx    ← Grooming service page
│   ├── components/
│   │   └── BookingModal.tsx    ← Booking form
│   └── ...
├── index.html                   ← Main HTML file
└── package.json                 ← Dependencies
```

**Key Files You'll Edit:**
1. `src/pages/PalettePage.tsx` - Food service content
2. `src/pages/GroomingPage.tsx` - Pet grooming content
3. `src/pages/HomePage.tsx` - Homepage content
4. `src/components/BookingModal.tsx` - Booking form

---

### Making Content Changes (No Coding!)

#### To Edit Business Description

**File**: `src/pages/PalettePage.tsx`

**Find This** (around line 45):
```tsx
<p className="text-gray-400 max-w-2xl mx-auto mb-8">
  Experience curated selections of premium charcuterie...
</p>
```

**Change To**:
```tsx
<p className="text-gray-400 max-w-2xl mx-auto mb-8">
  Your new description here! Make it as long as you want.
</p>
```

**Save file** (Ctrl+S)

**See changes**: Refresh browser at `http://localhost:5173`

---

#### To Edit Service Name or Description

**File**: `src/pages/PalettePage.tsx` or `src/pages/GroomingPage.tsx`

**Find This** (around line 75):
```tsx
<h3 className="text-2xl font-bold text-white mb-3">Classic Elegance</h3>
<p className="text-gray-300 mb-4">
  A timeless selection featuring...
</p>
<p className="text-amber-400 font-semibold">Perfect for 4-6 guests</p>
```

**Change To**:
```tsx
<h3 className="text-2xl font-bold text-white mb-3">NEW SERVICE NAME</h3>
<p className="text-gray-300 mb-4">
  YOUR NEW DESCRIPTION HERE
</p>
<p className="text-amber-400 font-semibold">YOUR NEW DETAILS HERE</p>
```

---

#### To Edit WhatsApp Numbers

**File 1**: `src/pages/PalettePage.tsx` (around line 8)

**Find This**:
```tsx
window.open('https://wa.me/248?text=...', '_blank');
```

**Change To**:
```tsx
window.open('https://wa.me/248XXXXXXXX?text=...', '_blank');
```

**Replace `248XXXXXXXX` with your ACTUAL WhatsApp number!**

Example:
```tsx
window.open('https://wa.me/248XXXX1234?text=...', '_blank');
```

**File 2**: `src/pages/GroomingPage.tsx` (around line 8)

Do the same for the grooming page

---

#### To Edit Business Hours

**File**: `src/pages/GroomingPage.tsx` (around line 170)

**Find This**:
```tsx
<p>Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability</p>
```

**Change To**:
```tsx
<p>Available Monday - Friday 9am-5pm | Saturday 10am-4pm | Closed Sundays</p>
```

---

#### To Edit Footer

**File**: `src/pages/PalettePage.tsx` or `GroomingPage.tsx` (around line 185)

**Find This**:
```tsx
<p>© 2024 Lioness. All rights reserved. | Seychelles</p>
```

**Change To**:
```tsx
<p>© 2024 Lioness. All rights reserved. | Seychelles</p>
```

Or update year/location as needed.

---

#### To Add Email to Footer

**File**: `src/pages/PalettePage.tsx` (around line 185)

**Find This Section**:
```tsx
<footer>
  <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
    <p className="mb-2">Lioness Palette | Premium Charcuterie & Snacks</p>
    <p>© 2024 Lioness. All rights reserved. | Seychelles</p>
  </div>
</footer>
```

**Add Email**:
```tsx
<footer>
  <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
    <p className="mb-2">Lioness Palette | Premium Charcuterie & Snacks</p>
    <p className="mb-2">
      📧 <a href="mailto:palette@lionessseychelles.com" className="text-amber-400 hover:text-amber-300">
        palette@lionessseychelles.com
      </a>
    </p>
    <p>© 2024 Lioness. All rights reserved. | Seychelles</p>
  </div>
</footer>
```

---

### Workflow for Making Changes

1. **Edit File**
   - Open file in VS Code
   - Find text you want to change
   - Change it

2. **Save**
   - Press Ctrl+S (or Cmd+S on Mac)

3. **See Changes**
   - Website at `http://localhost:5173` auto-refreshes
   - If not, press F5 to refresh

4. **Test**
   - Check everything looks good

5. **Commit to Git** (if using GitHub)
   ```bash
   git add .
   git commit -m "Updated service descriptions"
   git push
   ```

6. **Website Updates Automatically**
   - Vercel/Netlify see the push
   - Auto-rebuild and deploy
   - Live in ~2 minutes!

---

## 💾 UPDATING YOUR LIVE WEBSITE

### Method 1: GitHub + Vercel (Automatic)

**Best**: Make changes, push to GitHub, site updates automatically

```bash
# Edit files locally
# Save changes
# Then:

git add .
git commit -m "Updated content"
git push

# Wait 1-2 minutes → Website updates! 🎉
```

### Method 2: Manual Upload (Any Hosting)

**Procedure**:
1. Make changes locally
2. Run `npm run build`
3. Get the file: `dist/index.html`
4. Upload to hosting via FTP or control panel
5. Website updates!

---

## 🔧 EDITING CHECKLISTS

### Quick Edit: Update WhatsApp Numbers

- [ ] Open `src/pages/PalettePage.tsx`
- [ ] Find line 8 (search for `wa.me`)
- [ ] Replace `248` with your number
- [ ] Open `src/pages/GroomingPage.tsx`
- [ ] Find line 8
- [ ] Replace `248` with your number
- [ ] Save both files
- [ ] Test in browser
- [ ] Commit: `git add . && git commit -m "Update WhatsApp numbers" && git push`

### Quick Edit: Change Service Descriptions

- [ ] Open `src/pages/PalettePage.tsx` or `GroomingPage.tsx`
- [ ] Find service card section
- [ ] Edit service name: `<h3>New Name</h3>`
- [ ] Edit description: `<p>New description</p>`
- [ ] Edit details: `<p>New details</p>`
- [ ] Save file
- [ ] Refresh browser to see changes
- [ ] Repeat for other services
- [ ] Commit and push

### Quick Edit: Update Hours

- [ ] Open `src/pages/GroomingPage.tsx`
- [ ] Search for "Tuesday - Sunday"
- [ ] Replace with your hours
- [ ] Save
- [ ] Test and commit

---

## 🎨 CHANGING COLORS

### Change Gold to Different Color

**Easy Method: Find & Replace**

1. Press `Ctrl+H` in VS Code
2. Find: `amber`
3. Replace with: `yellow`, `orange`, `purple`, etc.
4. Click "Replace All"
5. Save

**Example Changes**:
- `amber` → `yellow` (for yellow theme)
- `amber` → `orange` (for orange theme)
- `amber` → `purple` (for purple theme)

**Available Colors**:
- red, orange, yellow, green, blue, indigo, purple, pink, rose, cyan, lime, emerald, teal

---

## 📱 TESTING AFTER CHANGES

### Local Testing (Before Going Live)

```bash
# Start local server
npm run dev

# Opens at: http://localhost:5173
# Make changes
# Page auto-updates
# Test everything works
```

### After Pushing to GitHub

1. Push changes: `git push`
2. Check Vercel/Netlify dashboard
3. Wait for "Deployed" status (1-2 min)
4. Test live site

### Mobile Testing

1. Get local IP: `ipconfig` (Windows) or `ifconfig` (Mac)
2. Open on phone: `http://YOUR_IP:5173`
3. Test all features

---

## 🐛 COMMON EDITING MISTAKES

### ❌ Mistake: Forgot to Save File
**Fix**: Press Ctrl+S

### ❌ Mistake: Changes Not Appearing
**Fix**: 
- Hard refresh: Ctrl+Shift+R
- Check file was saved
- Restart dev server: Stop `npm run dev`, then start again

### ❌ Mistake: Broke Something
**Fix**:
- Press Ctrl+Z to undo
- Or revert Git: `git checkout src/pages/PalettePage.tsx`

### ❌ Mistake: Syntax Error (Red squiggly lines)
**Fix**:
- Check for missing quotes
- Check for matching brackets
- Look at error in VS Code

### ❌ Mistake: Can't Push to GitHub
**Fix**:
```bash
git config user.name "Your Name"
git config user.email "your@email.com"
git add .
git commit -m "Your message"
git push
```

---

## 📊 MANAGING YOUR WEBSITE

### Daily Tasks (Minimal)

- Monitor WhatsApp for booking inquiries
- Respond to customers quickly
- Update if hours change

### Weekly Tasks

- Check website analytics (if set up)
- Review customer feedback
- Make small content updates

### Monthly Tasks

- Update testimonials (once you have them)
- Review analytics trends
- Plan promotions/seasonal updates
- Check for broken links

### When You Need Changes

**Small Update** (service descriptions):
1. Edit file
2. Test locally
3. Push to GitHub
4. Live in 2 minutes

**Major Update** (layout change):
1. Edit file
2. Test locally multiple times
3. Push to GitHub
4. Monitor for issues

---

## 🔒 SECURITY & BACKUPS

### GitHub = Automatic Backup

Every push to GitHub is a backup!

```bash
# To see history:
git log

# To revert to old version:
git revert COMMIT_ID
```

### Local Backup

Keep folder on multiple drives/cloud:
- Google Drive
- Dropbox
- OneDrive
- External hard drive

---

## 🚨 EMERGENCY PROCEDURES

### Website Down?

1. Check Vercel/Netlify dashboard for errors
2. Check deployment logs
3. Revert last commit: `git revert HEAD`
4. Push revert: `git push`

### Forgot Changes?

1. Use `git log` to see history
2. Find commit ID
3. Revert: `git revert COMMIT_ID`
4. Push: `git push`

### WhatsApp Number Wrong?

1. Edit both files (Palette & Grooming)
2. Push changes
3. Site updates in 2 minutes
4. Test immediately

---

## 📞 WHEN TO CALL FOR HELP

### You Can Handle:
- ✅ Changing text content
- ✅ Updating phone numbers
- ✅ Editing service names
- ✅ Changing colors (find & replace)
- ✅ Adding email addresses

### Might Need Help With:
- ⚠️ Adding new services (requires duplicating cards)
- ⚠️ Adding images
- ⚠️ More complex design changes
- ⚠️ Setting up email notifications

### Definitely Get Help:
- ❌ Changing structure/layout significantly
- ❌ Adding new functionality
- ❌ Database setup
- ❌ Payment processing

---

## 💡 PRO TIPS FOR MANAGING

### Using VS Code Efficiently

**Keyboard Shortcuts**:
- `Ctrl+P` → Find file quickly
- `Ctrl+F` → Find text in file
- `Ctrl+H` → Find & Replace
- `Ctrl+G` → Go to line number
- `Ctrl+/` → Comment/uncomment lines
- `Alt+Up/Down` → Move line up/down

### Git Commands You'll Use Most

```bash
# See what you changed
git status

# Add changes
git add .

# Save changes
git commit -m "What you changed"

# Send to GitHub
git push

# See history
git log
```

### Testing Tips

1. **Mobile test**: Resize browser small, or use phone
2. **WhatsApp test**: Actually click the WhatsApp buttons
3. **Form test**: Try booking to make sure it works
4. **Link test**: Click all links to check they work
5. **Cross-browser**: Test in Chrome, Firefox, Safari

---

## 📈 NEXT STEPS AFTER LAUNCH

### Week 1
- Monitor bookings
- Respond quickly to WhatsApp
- Test everything works
- Fix any urgent issues

### Week 2-4
- Gather testimonials from customers
- Add analytics (Google Analytics)
- Make small content improvements
- Create social media content

### Month 2+
- Consider adding email notifications
- Plan image gallery
- Add more testimonials
- Create seasonal promotions

---

## 🎯 FINAL CHECKLIST

### Before First Deploy
- [ ] WhatsApp numbers updated
- [ ] All content reviewed for typos
- [ ] Hours correct
- [ ] GitHub account created
- [ ] Code pushed to GitHub

### After Deploy
- [ ] Website loads at custom domain
- [ ] All pages accessible
- [ ] WhatsApp links tested
- [ ] Mobile view tested
- [ ] Forms working

### First Week Live
- [ ] Monitor WhatsApp daily
- [ ] Check analytics
- [ ] Fix any issues immediately
- [ ] Gather early feedback

---

## 🆘 QUICK TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Changes not showing | Hard refresh (Ctrl+Shift+R), check file saved |
| WhatsApp link broken | Verify phone number format (248XXXXXXXX) |
| Site won't deploy | Check GitHub push worked, check Vercel logs |
| Form not working | Test WhatsApp link manually |
| Mobile looks bad | Refresh, clear cache, check responsive classes |

---

## 📞 SUPPORT

If you get stuck:

1. Check QUICK_START.md
2. Check PERSONALIZATION_GUIDE.md
3. Google the error
4. Ask in developer communities (Reddit: r/reactjs, r/webdev)
5. Consider hiring a freelancer on Upwork for complex changes

---

## 🎉 YOU'RE READY!

You now know how to:
- ✅ Host your website
- ✅ Make content changes
- ✅ Deploy updates
- ✅ Manage your site

**Everything is set for success!** 🦁

---

**Last Updated**: February 2024
**Status**: Complete & Ready to Host
**Your Next Step**: Choose a hosting option and deploy!
