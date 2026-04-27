<!-- Use this file to provide workspace-specific custom instructions to Copilot -->

# Premium Portfolio Website - Development Instructions

## Project Overview
A production-ready personal portfolio website for Full Stack Developers and Digital Marketing specialists built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Key Features
- Dark modern design with smooth animations
- Fully responsive and mobile-optimized
- Production-ready code with TypeScript
- Vite for ultra-fast development and building
- Tailwind CSS for styling
- Framer Motion for animations

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx       - Navigation with mobile menu
│   ├── Hero.tsx         - Hero section with CTA
│   ├── About.tsx        - About section with stats
│   ├── Skills.tsx       - Skills showcase with proficiency
│   ├── Projects.tsx     - Portfolio projects display
│   ├── Contact.tsx      - Contact form
│   └── Footer.tsx       - Footer with social links
├── App.tsx              - Main app component
├── main.tsx             - Entry point
└── index.css            - Global styles (Tailwind)
```

## Quick Start
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open http://localhost:3000

## Customization Priorities
1. Update personal information in component files
2. Customize colors in `tailwind.config.js`
3. Replace project examples with real work
4. Set up contact form integration
5. Add social media links

## Build & Deployment
- Development: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Deploy to Vercel: `vercel`
- Deploy to Netlify: Build and upload `dist/` folder

## Code Style
- TypeScript for type safety
- React functional components with hooks
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design mobile-first approach

## Important Notes
- All components are fully typed with TypeScript
- Animations use Framer Motion's useInView hook for performance
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Color scheme: Cyan (#00d4ff) accent on dark background
- Mobile-first responsive design

## Contact Form
Currently set up as frontend component. To enable email:
- Option 1: Integrate Formspree
- Option 2: Use EmailJS
- Option 3: Create backend API endpoint

See SETUP_GUIDE.md for detailed form integration instructions.

## Performance Considerations
- Code splitting with dynamic imports
- Lazy loading animations
- GPU-accelerated transforms
- Optimized Tailwind builds
- Minified production bundles

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Additional Resources
- README.md - Comprehensive project documentation
- SETUP_GUIDE.md - Setup and customization guide
- Component files - Inline code comments

---
Last Updated: 2024
