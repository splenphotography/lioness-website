# Lioness Website - Deployment & Setup Checklist

## ✅ PRE-DEPLOYMENT CHECKLIST

### Content Updates
- [ ] Update WhatsApp phone numbers in all files
  - Search for `wa.me/248` in codebase
  - Replace with actual business numbers
  - Test links before deploying

- [ ] Update footer information
  - [ ] Business hours (grooming: Tue-Sun, closed Mon)
  - [ ] Delivery info for Palette
  - [ ] Service area details
  - [ ] Contact email addresses

- [ ] Review all copy for accuracy
  - [ ] Spelling and grammar
  - [ ] Service descriptions
  - [ ] Pricing mentions
  - [ ] Special offers

- [ ] Add images (optional but recommended)
  - [ ] Homepage business cards background images
  - [ ] Palette page product images
  - [ ] Grooming page pet images

### Technical Setup
- [ ] Install Node.js (if not already installed)
- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Build project: `npm run build`
- [ ] Verify build output in `dist/index.html`

### SEO & Meta Tags
- [ ] Title: "Lioness - Luxury Charcuterie & Pet Grooming in Seychelles" ✅ (Done)
- [ ] Add meta description in `index.html`
- [ ] Add Open Graph tags for social sharing
- [ ] Add favicon
- [ ] Add canonical URLs

### Branding
- [ ] Logo/favicon ready
- [ ] Color scheme verified
- [ ] Font licensing (Tailwind default included)
- [ ] Brand guidelines document

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: Vercel (Recommended - Easiest)

#### Setup Steps:
1. Create account at https://vercel.com
2. Connect GitHub repository
3. Import project
4. Deploy (automatic)
5. Add custom domain

#### Environment Variables (if needed):
```
VITE_WHATSAPP_NUMBER=248XXXXXXXX
```

#### Pro Tips:
- Free tier includes SSL
- Automatic deployments on push
- Fast CDN
- Analytics included

#### Estimated Time: 10 minutes

---

### Option 2: Netlify

#### Setup Steps:
1. Create account at https://netlify.com
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy (automatic)

#### Configuration File (netlify.toml):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Pro Tips:
- Free SSL certificate
- Form handling available
- Analytics included

#### Estimated Time: 15 minutes

---

### Option 3: AWS Amplify

#### Setup Steps:
1. Create AWS account
2. Go to AWS Amplify Console
3. Connect GitHub
4. Select repository & branch
5. Configure build settings
6. Deploy

#### Build Settings:
- Build command: `npm run build`
- Base directory: `dist`

#### Pro Tips:
- Scalable
- Custom domains
- More advanced features
- May incur costs

#### Estimated Time: 20 minutes

---

### Option 4: Manual Hosting (Any Web Server)

#### Files to Deploy:
- Only the contents of `dist/` folder
- This is a single `index.html` file with all CSS/JS embedded
- No backend required
- No database needed

#### Steps:
1. Build: `npm run build`
2. Copy `dist/index.html` to your server
3. Point domain to server
4. Done!

#### Hosting Options:
- Shared hosting (GoDaddy, Bluehost, etc.)
- VPS (DigitalOcean, Linode)
- cPanel hosting
- Any static file server

---

## 🌐 DOMAIN SETUP

### Recommended Domain Names
1. `lionessseychelles.com` - Best all-around
2. `lionessluxury.sc` - Local (Seychelles TLD)
3. `thelionessbrands.com` - Alternative
4. `lionessexperience.sc` - Lifestyle focus
5. `lionesscurated.com` - Curated focus

### Domain Registrars
- **Namecheap** - Affordable, easy
- **GoDaddy** - Most popular
- **Google Domains** - Clean interface
- **Domain.com** - Competitive pricing
- **.sc Domain Registry** - Local Seychelles TLD

### Domain Setup Steps
1. Purchase domain
2. Go to DNS settings
3. Point to hosting provider's nameservers
4. Wait 24-48 hours for propagation
5. Test with `https://yourdomain.com`

### SSL Certificate
- **Vercel/Netlify/Amplify**: Automatic (free)
- **Manual hosting**: Use Let's Encrypt (free)
- All modern hosting includes free HTTPS

---

## 📱 POST-DEPLOYMENT VERIFICATION

### Test Checklist
- [ ] Homepage loads correctly
  - [ ] Navigation works
  - [ ] Business cards clickable
  - [ ] Page layout responsive

- [ ] Palette page loads
  - [ ] All sections display
  - [ ] Book button opens modal
  - [ ] WhatsApp button works (test with `+248-XXXX-XXXX`)
  - [ ] Form validation works
  - [ ] Mobile responsive

- [ ] Grooming page loads
  - [ ] All sections display
  - [ ] Book button opens modal
  - [ ] WhatsApp button works
  - [ ] Form validation works
  - [ ] Mobile responsive

- [ ] Back navigation works
  - [ ] Can navigate between pages
  - [ ] URLs update correctly
  - [ ] Browser back button works

- [ ] Modal functionality
  - [ ] Can open booking modal
  - [ ] Form fills correctly
  - [ ] Can submit (sends to WhatsApp)
  - [ ] Validation prevents empty submission
  - [ ] Modal closes after submission

- [ ] WhatsApp Integration
  - [ ] WhatsApp links open in new tab
  - [ ] Message preview shown correctly
  - [ ] Links work on mobile and desktop

- [ ] Performance
  - [ ] Page loads in <3 seconds
  - [ ] Smooth scrolling
  - [ ] Hover effects responsive
  - [ ] No console errors

- [ ] Mobile Responsiveness
  - [ ] Test on iPhone (Safari)
  - [ ] Test on Android (Chrome)
  - [ ] Test on tablet
  - [ ] Layout adapts properly
  - [ ] Touch targets are adequate

- [ ] Browser Compatibility
  - [ ] Chrome ✅
  - [ ] Firefox ✅
  - [ ] Safari ✅
  - [ ] Edge ✅

---

## 📊 ANALYTICS & TRACKING

### Google Analytics Setup
1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Key Metrics to Track
- Homepage views
- Palette page clicks
- Grooming page clicks
- Booking modal opens
- WhatsApp clicks
- Conversion rate

### Optional Tracking
- Form submissions (Google Form integration)
- Page load time
- Bounce rate
- User location (Seychelles focus)

---

## 🔒 SECURITY CHECKLIST

- [ ] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] No sensitive data in code
- [ ] WhatsApp links use `wa.me` (safe)
- [ ] Form submissions go to WhatsApp (no backend needed)
- [ ] No authentication required
- [ ] No database connections needed

### For Future Enhancements
- [ ] When adding payments: Use Stripe/Square
- [ ] When adding email: Use email service (SendGrid, Mailgun)
- [ ] Never store customer data in frontend
- [ ] Use environment variables for sensitive info

---

## 🔄 MAINTENANCE & UPDATES

### Regular Tasks
- [ ] Monitor analytics monthly
- [ ] Update content as needed
- [ ] Check broken links monthly
- [ ] Review WhatsApp number for changes
- [ ] Update special offers seasonally

### Backup Strategy
- [ ] Keep source code in Git
- [ ] Regular GitHub commits
- [ ] Tag releases: `v1.0.0`, `v1.1.0`, etc.
- [ ] Keep deployment notes

### Update Process
1. Make code changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit to GitHub
5. Push to main branch
6. Vercel/Netlify auto-deploys
7. Verify live site

### Adding New Features
- [ ] Create feature branch
- [ ] Test locally
- [ ] Create pull request
- [ ] Merge to main
- [ ] Deploy

---

## 💬 SOCIAL MEDIA INTEGRATION (Optional)

### Add to Footer or Header
```html
<a href="https://facebook.com/lionessseychelles" target="_blank">
  Facebook
</a>
<a href="https://instagram.com/lionessseychelles" target="_blank">
  Instagram
</a>
```

### Social Links to Create
- [ ] Facebook Business Page
- [ ] Instagram Business Account
- [ ] WhatsApp Business (optional)
- [ ] LinkedIn (optional)

---

## 📞 BUSINESS CONFIGURATION

### Before Going Live

#### Lioness Palette
- [ ] Confirm WhatsApp number
- [ ] Set business hours
- [ ] Determine delivery areas
- [ ] Set minimum order amount
- [ ] Decide on pricing
- [ ] Confirm which cuisines/allergens
- [ ] Get high-quality food photos (optional)

#### Lioness Pet's Grooming
- [ ] Confirm WhatsApp number
- [ ] Set business hours
- [ ] Determine service areas
- [ ] Set appointment duration
- [ ] Confirm pricing
- [ ] List pet type specialties
- [ ] Get pet photos (optional)

---

## 🚨 TROUBLESHOOTING

### White Blank Page?
- Check browser console (F12)
- Clear browser cache
- Verify build completed successfully

### WhatsApp Links Not Working?
- Check phone numbers format (`+248...`)
- Test on desktop and mobile
- Ensure spaces in message encoded properly

### Modal Not Opening?
- Check browser console for errors
- Verify Lucide React icons loading
- Test with browser DevTools

### Styling Issues?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Check Tailwind build

### Mobile Layout Broken?
- Test with DevTools mobile emulator
- Check viewport meta tag
- Verify responsive classes applied

---

## 📞 SUPPORT RESOURCES

### Documentation
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- Lucide Icons: https://lucide.dev

### Hosting Support
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **AWS Amplify**: https://aws.amazon.com/amplify/

### Deployment Issues?
Check `.env` variables (if using)
Verify build command in provider settings
Review build logs for errors

---

## ✨ LAUNCH CHECKLIST

- [ ] All content updated
- [ ] WhatsApp numbers configured
- [ ] Domain purchased
- [ ] Domain pointed to hosting
- [ ] SSL certificate active
- [ ] Site tested on mobile/desktop
- [ ] Analytics set up
- [ ] All links working
- [ ] Images optimized (if added)
- [ ] Performance verified
- [ ] Meta tags added
- [ ] Favicon added
- [ ] Social media accounts ready
- [ ] Team trained on how to make updates
- [ ] Backup created
- [ ] Documentation saved

---

## 🎉 LAUNCH DAY

1. Verify live site loads
2. Test all features one final time
3. Share with team
4. Announce on social media
5. Send to contacts/WhatsApp list
6. Monitor for 24 hours
7. Check analytics

---

## 📈 POST-LAUNCH (First Month)

- Week 1: Monitor for bugs, gather feedback
- Week 2: Fix any issues, optimize performance
- Week 3: Analyze analytics, user behavior
- Week 4: Plan improvements, gather testimonials

---

**Last Updated**: February 2024
**Status**: Ready for Deployment
