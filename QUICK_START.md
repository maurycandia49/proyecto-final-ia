# 🚀 Quick Start Guide - Premium Portfolio Website

## ⚡ First 5 Minutes

### Step 1: Install Node.js
If not already installed:
1. Visit https://nodejs.org/
2. Download LTS version
3. Run installer and follow steps
4. Verify: `node --version` and `npm --version` in terminal

### Step 2: Install Dependencies
```bash
cd "c:\Users\maury\OneDrive\Escritorio\proyecto final ia"
npm install
```
*This downloads all required packages (takes 1-2 minutes)*

### Step 3: Start Development Server
```bash
npm run dev
```
*Your portfolio opens at http://localhost:3000*

### Step 4: Start Customizing!
- Edit files in `src/components/`
- Changes update automatically (hot reload)
- Open browser DevTools (F12) for mobile view

---

## 📋 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production locally |
| `npm run lint` | Check code quality |

---

## 🎨 Customization Priority Order

### 1st: Update Your Hero Section (5 min)
📝 **File**: `src/components/Hero.tsx`
```tsx
// Change these lines:
"Full Stack Developer & Digital Marketing Specialist"  // Your title
"I create beautiful, responsive web experiences..."  // Your tagline
```

### 2nd: Update About Section (5 min)
📝 **File**: `src/components/About.tsx`
```tsx
// Update your bio, achievements, and highlights
```

### 3rd: Add Your Skills (3 min)
📝 **File**: `src/components/Skills.tsx`
```tsx
// Replace skill arrays with your actual skills
```

### 4th: Add Your Projects (10 min)
📝 **File**: `src/components/Projects.tsx`
```tsx
// Replace projects array with your work
```

### 5th: Update Contact Info (2 min)
📝 **File**: `src/components/Contact.tsx`
```tsx
// Update email, phone, location
```

### 6th: Customize Colors (2 min)
📝 **File**: `tailwind.config.js`
```js
colors: {
  'accent': '#00d4ff',      // Change to your brand color
  // ... other colors
}
```

---

## 🌍 Real-World Workflow

```
Day 1: Setup
  └─ Install Node.js → npm install → npm run dev

Day 2: Customize
  └─ Update Hero → About → Skills → Projects → Contact

Day 3: Polish
  └─ Add images → Test on mobile → Fix colors → Add analytics

Day 4: Deploy
  └─ Build → Push to GitHub → Deploy to Vercel
```

---

## 📱 Testing on Mobile

While running `npm run dev`:

**In Chrome DevTools:**
1. Press F12
2. Click device icon (mobile view)
3. Test responsiveness
4. Check all sections

**On actual phone:**
1. Find your machine's IP: `ipconfig` (Windows)
2. Visit: `http://YOUR_IP:3000`
3. Test on different orientations

---

## 🎯 File Reference Quick Map

```
Your Portfolio Project/
│
├── 📄 README.md .................. Documentation
├── 📄 SETUP_GUIDE.md ........... Detailed setup help
├── 📄 PROJECT_SUMMARY.md ........ What's included
├── 📄 package.json .............. Dependencies (don't edit)
│
├── 🌐 index.html ................. HTML template
│
├── 📁 src/
│   ├── 📄 main.tsx ............... Entry point
│   ├── 📄 App.tsx ................ Main component
│   ├── 📄 index.css .............. Global styles
│   └── 📁 components/
│       ├── 📄 Navbar.tsx ......... TOP MENU
│       ├── 📄 Hero.tsx ........... YOUR INTRO ⭐
│       ├── 📄 About.tsx .......... ABOUT YOU ⭐
│       ├── 📄 Skills.tsx ......... YOUR SKILLS ⭐
│       ├── 📄 Projects.tsx ....... YOUR WORK ⭐
│       ├── 📄 Contact.tsx ........ CONTACT FORM ⭐
│       └── 📄 Footer.tsx ......... BOTTOM LINKS
│
├── 🛠 vite.config.ts ............ Build config
├── 🛠 tailwind.config.js ........ Colors & theme ⭐
├── 🛠 tsconfig.json ............ TypeScript config
└── .github/
    └── 📄 copilot-instructions.md .. AI instructions

⭐ = Files you'll edit most
```

---

## 🐛 Troubleshooting

### Issue: Port 3000 is already in use
```bash
npm run dev -- --port 3001
```

### Issue: Styles not updating
```bash
# Clear browser cache
Ctrl + Shift + Delete (Windows)
Cmd + Shift + Delete (Mac)
```

### Issue: "npm: command not found"
```bash
# Node.js not installed. Visit https://nodejs.org/
# Download and install, then restart terminal
```

### Issue: Build errors
```bash
rm -rf node_modules
npm install
npm run build
```

---

## ✨ Pro Tips

1. **Use browser DevTools** (F12) to inspect and test
2. **Use VS Code Extensions**:
   - Prettier (code formatter)
   - Tailwind IntelliSense
   - ES7+ React Snippets

3. **Test colors** before building:
   - Use: https://chir.mn/projects/TailwindCSS
   - Find hex codes matching your brand

4. **Performance**:
   - Compress images before uploading
   - Test with Lighthouse (DevTools)
   - Monitor bundle size

5. **Keep backup**:
   - Push to GitHub regularly
   - Commit after major changes

---

## 🚀 Deployment Checklist

- [ ] Test on mobile (F12 device toolbar)
- [ ] Test form submission
- [ ] Check all links work
- [ ] Add analytics code
- [ ] Optimize images
- [ ] Run build: `npm run build`
- [ ] No console errors (F12)
- [ ] Ready for deployment!

### Deploy in 2 Minutes (Vercel)
```bash
npm install -g vercel
vercel
# Follow prompts - done!
```

---

## 📚 Learning Path

**Day 1-2**: Customization
- Edit components with your info
- See changes in real-time

**Day 3**: Styling
- Learn Tailwind CSS basics
- Customize colors and fonts

**Day 4**: Deployment
- Build project
- Deploy to Vercel/Netlify

**Day 5+**: Advanced
- Add features
- Connect backends
- Deploy APIs

---

## 🎓 Key Concepts

### Components
Building blocks of your UI (Navbar, Hero, etc.)

### Tailwind CSS
Utility classes for styling (quick styling without CSS files)

### TypeScript
JavaScript with types (catches errors early)

### Vite
Super-fast build tool (10x faster than old tools)

### Framer Motion
Animation library (smooth, performant animations)

---

## 💡 Remember

✅ **It's already production-ready!**
- Just customize with your info
- Test on mobile
- Deploy

❌ **Don't worry about:**
- Build configuration (already set)
- TypeScript errors initially (IDE will help)
- Performance (Vite handles it)

---

## 🆘 Need Help?

1. **Check**: README.md (10-min read)
2. **Check**: SETUP_GUIDE.md (detailed steps)
3. **Check**: Inline code comments
4. **Google**: "Tailwind CSS [what you want to change]"
5. **Docs**: https://react.dev, https://tailwindcss.com

---

## 🎉 Ready?

```bash
# Copy entire folder path
cd "c:\Users\maury\OneDrive\Escritorio\proyecto final ia"

# Install once
npm install

# Run always for development
npm run dev

# Build when ready to deploy
npm run build
```

**That's it! Your portfolio is now live at http://localhost:3000** 🎊

---

*Need more help? See README.md and SETUP_GUIDE.md*
