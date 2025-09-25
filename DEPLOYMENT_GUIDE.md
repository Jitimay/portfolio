# Deployment Guide - DevOne Hack 2025

## 🚀 Quick Vercel Deployment

### **Step 1: Build & Test Locally**
```bash
npm install
npm run build
npm start
```

### **Step 2: Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### **Step 3: Custom Domain (Optional)**
- Add custom domain in Vercel dashboard
- Update DNS settings
- SSL automatically configured

## 🌐 Alternative Hosting Options

### **Netlify**
```bash
npm run build
# Drag and drop 'out' folder to Netlify
```

### **GitHub Pages**
```bash
npm run export
# Push to gh-pages branch
```

### **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

## ⚡ Performance Optimization

### **Before Deployment**
- [ ] Optimize images (use WebP format)
- [ ] Minify CSS and JavaScript
- [ ] Enable compression
- [ ] Test Core Web Vitals

### **Vercel Optimizations**
- Automatic image optimization
- Edge caching
- Serverless functions ready
- Analytics included

## 🔧 Environment Variables

Create `.env.local` for any API keys:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 📊 Analytics Setup

### **Vercel Analytics**
```bash
npm install @vercel/analytics
```

Add to `pages/_app.js`:
```javascript
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

## 🎯 Final Checklist

- [ ] Site loads in under 3 seconds
- [ ] All animations work smoothly
- [ ] Mobile responsive on all devices
- [ ] Dark/light mode functions properly
- [ ] All links work correctly
- [ ] Contact form submits successfully
- [ ] SEO meta tags are correct
- [ ] No console errors
- [ ] Images load properly
- [ ] Social media links work