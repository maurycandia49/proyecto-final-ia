# Premium Portfolio Website - Setup & Deployment Guide

## Quick Start

### Prerequisites
- **Node.js** 16.0 or higher (https://nodejs.org/)
- **npm** 7.0 or higher (comes with Node.js)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The site will open automatically at http://localhost:3000

3. **Start Editing**
   - Edit components in `src/components/`
   - Changes save automatically with hot reload

## 🎨 Customization

### 1. Update Your Information
   
**Hero Section** - `src/components/Hero.tsx`
- Update title and description
- Modify CTA button text and links

**About Section** - `src/components/About.tsx`
- Change personal bio
- Update stats (projects, clients, experience)
- Modify highlights/specialties

**Skills** - `src/components/Skills.tsx`
- Update skill categories
- Add/remove skills
- Adjust proficiency levels

**Projects** - `src/components/Projects.tsx`
- Replace with your actual projects
- Update descriptions, images, and links
- Add GitHub and live demo links

**Contact** - `src/components/Contact.tsx`
- Update email, phone, location
- Configure form submission (see Form Setup below)

**Social Links** - `src/components/Footer.tsx`
- Update your social media URLs

### 2. Customize Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'accent': '#00d4ff',        // Change primary color
      'accent-dark': '#0099cc',
      'dark': '#0a0e27',
      'darker': '#050a1a',
    }
  }
}
```

### 3. Add Your Logo/Profile Picture

Replace the emoji placeholder in `About.tsx` with your image:
```tsx
<img src="/path-to-your-image.jpg" alt="Profile" className="..." />
```

Place images in the `public/` folder.

## 📝 Form Setup

### Option 1: Formspree (Recommended - Free)
1. Go to https://formspree.io/
2. Create new form
3. Copy the form ID
4. No additional setup needed - form works by default!

### Option 2: EmailJS (Free tier available)
1. Install: `npm install @emailjs/browser`
2. Sign up at https://www.emailjs.com/
3. Get service ID, template ID, public key
4. Update `Contact.tsx`:

```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
    .then(() => setIsSubmitted(true))
    .catch(err => console.error(err));
};
```

### Option 3: Firebase (Full backend)
- Set up Firebase project
- Create Cloud Function for email
- Update Contact.tsx to call Cloud Function

## 🚀 Deployment

### Deploy to Vercel (1-Click Deploy)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify dashboard
```

### Deploy to GitHub Pages
```bash
npm run build
# Push to gh-pages branch
```

### Deploy to Any Static Host
```bash
npm run build
# Upload the 'dist' folder contents to your hosting
```

## 📊 Production Build

```bash
npm run build
```

Creates optimized production files in `dist/` folder.

### Optimize Further
- Compress images before adding to project
- Consider using a CDN for assets
- Add analytics (Google Analytics, Vercel Analytics)
- Set up domain and SSL certificate

## 🔍 SEO Optimization

1. **Update meta tags** in `index.html`
2. **Add favicon** in `public/` folder
3. **Create sitemap.xml**
4. **Add robots.txt** in `public/`
5. **Update OpenGraph tags** for social sharing

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use different port
npm run dev -- --port 3001
```

### Style not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Build errors
```bash
# Clear and reinstall dependencies
rm -rf node_modules
npm install
npm run build
```

## 📦 Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── App.tsx          # Main component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript config
├── package.json         # Dependencies
├── index.html           # HTML template
└── README.md            # Project documentation
```

## 💡 Tips & Best Practices

1. **Use placeholder images** - Add real images later
2. **Test mobile view** - Use DevTools device toolbar
3. **Check performance** - Use Lighthouse audit
4. **Update content regularly** - Keep portfolio fresh
5. **Backup your code** - Push to GitHub
6. **Monitor analytics** - Add Google Analytics

## 🎯 Common Next Steps

- [ ] Replace placeholder text with your information
- [ ] Add your profile picture
- [ ] Update projects with real examples
- [ ] Configure form submission
- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Deploy to production
- [ ] Submit to search engines
- [ ] Set up automated deploys

## 📚 Resources

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **Tailwind Docs**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

## 🤔 Questions?

Check:
1. Component comments for inline documentation
2. Tailwind CSS docs for styling
3. React documentation for component patterns
4. GitHub Issues if stuck

---

**Happy building! 🚀**
