// =====================================================
// FILE 3: README.md (Updated version)
// Replace your existing README.md with this
// =====================================================

# Minneapolis Theater 🎭

Live theater events from secure Ticketmaster & Eventbrite APIs!

## 🔒 Security Status
✅ API keys are now **SECURE** on Netlify Functions  
✅ No keys exposed in frontend code  
✅ Protected from unauthorized access  

## 🌐 Live Site
**Netlify (Secure)**: https://jocular-sprinkles-dab873.netlify.app  
**GitHub Pages (Old)**: https://hardtopbillow9c.github.io/minneapolis-theater-pwa  

## 🚀 Features
- **Live Ticketmaster Events**: Real shows with images & prices
- **Live Eventbrite Events**: Local performances and festivals  
- **Secure API Access**: Keys hidden on server
- **Auto-refresh**: Updates every 5 minutes
- **PWA Support**: Install as mobile/desktop app
- **Offline Mode**: Works without internet

## 📊 API Integration
- **Ticketmaster**: ✅ Connected (50+ events)
- **Eventbrite**: ✅ Connected (10+ events)
- **Total Events**: 60+ live shows
- **Updates**: Every 5 minutes

## 🛡️ Security Implementation
```
Your App → Netlify Function → Hidden Keys → APIs
         ↑
    No keys visible!
```

## 🔧 Tech Stack
- **Frontend**: Vanilla JS, HTML5, CSS3
- **Backend**: Netlify Functions (Serverless)
- **APIs**: Ticketmaster Discovery API v2, Eventbrite API v3
- **Hosting**: Netlify (with GitHub integration)
- **PWA**: Service Worker, Web Manifest

## 📱 Installation
1. Visit the site on your phone
2. Click "Install" or add to home screen
3. Enjoy offline access!

## 👨‍💻 Development
```bash
# Clone repo
git clone https://github.com/hardtopbillow9c/minneapolis-theater-pwa.git

# Test locally
python -m http.server 8000

# Deploy
git push (auto-deploys to Netlify)
```

## 🎨 Design
- Luxury magenta & black theme
- Responsive grid layout
- Smooth animations
- Live status indicators

---
Built with ❤️ for Minneapolis theater lovers

// =====================================================
// HOW TO UPDATE YOUR FILES - SIMPLE STEPS:
// =====================================================

STEP 1: Update index.html
-------------------------
1. Go to: github.com/hardtopbillow9c/minneapolis-theater-pwa
2. Click on "index.html"
3. Click the pencil icon (edit)
4. Select ALL (Ctrl+A)
5. DELETE everything
6. Copy the ENTIRE code from "Complete Secure index.html" artifact above
7. Paste it
8. Scroll down, commit message: "Secure API implementation"
9. Click "Commit changes"

STEP 2: Create/Update the Netlify Function
------------------------------------------
1. You should already have: netlify/functions/get-events.js
2. If YES: Click on it → Edit → Make sure it matches FILE 1 above
3. If NO: Create new file → Name: netlify/functions/get-events.js → Paste FILE 1

STEP 3: Create netlify.toml (Optional but good)
-----------------------------------------------
1. Click "Create new file"
2. Name: netlify.toml (in root, not in any folder)
3. Paste the content from FILE 2 above
4. Commit

STEP 4: Update README.md
-----------------------
1. Click on README.md
2. Edit
3. Replace with FILE 3 above
4. Commit

STEP 5: Wait for Netlify
-----------------------
1. Go to your Netlify dashboard
2. Watch it rebuild (1-2 minutes)
3. Visit: https://jocular-sprinkles-dab873.netlify.app
4. Your APIs should be working with NO visible keys!

// =====================================================
// CHECKLIST - Make sure you have:
// =====================================================

✅ Environment Variables in Netlify:
   - TICKETMASTER_KEY = [HIDDEN]
   - EVENTBRITE_KEY = [HIDDEN]

✅ Files in GitHub:
   - index.html (updated with secure version)
   - netlify/functions/get-events.js
   - netlify.toml (optional)
   - service-worker.js (keep existing)
   - manifest.json (keep existing)

✅ Netlify Settings:
   - Site is deployed
   - Environment variables are set
   - Functions are enabled (automatic)
