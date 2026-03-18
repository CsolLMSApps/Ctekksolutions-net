# CTekk Solutions Website - Deployment Guide

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Fonts:** Inter (Google Fonts CDN)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO, schema.org, OpenGraph
│   ├── globals.css         # Global styles, animations, utilities
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── platforms/page.tsx  # Platforms page
│   ├── education/page.tsx  # AI Education page
│   ├── jobs/page.tsx       # Internal careers page
│   ├── insights/page.tsx   # Blog/insights page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Header.tsx          # Navigation with mobile menu + dark mode
│   ├── Footer.tsx          # Footer with newsletter signup
│   ├── SectionHeading.tsx  # Reusable section titles
│   ├── ServiceCard.tsx     # Service card component
│   ├── PlatformCard.tsx    # Platform card component
│   ├── TestimonialCard.tsx # Testimonial card component
│   ├── CTASection.tsx      # Call-to-action section
│   └── AnimatedCounter.tsx # Animated number counter
└── ...
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CTekk Solutions corporate website"

# Create repo on GitHub (using GitHub CLI)
gh repo create ctekksolutions-net --public --source=. --push

# Or manually add remote and push
git remote add origin https://github.com/YOUR_USERNAME/ctekksolutions-net.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click "Deploy"

### Custom Domain
1. In Vercel dashboard, go to your project Settings → Domains
2. Add `ctekksolutions.net` (or your domain)
3. Update your DNS records as instructed by Vercel

## Environment Variables (Optional)

If you add a contact form backend or analytics:

```env
NEXT_PUBLIC_SITE_URL=https://ctekksolutions.net
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## SEO Features Included
- Meta tags (title, description, keywords)
- OpenGraph tags for social sharing
- Twitter Card meta tags
- Schema.org JSON-LD structured data (Organization)
- Semantic HTML structure
- Proper heading hierarchy

## Customization Notes
- **Logo:** Replace the text logo in `Header.tsx` with your actual logo image
- **OG Image:** Add `/public/og-image.png` (1200x630px) for social sharing
- **Favicon:** Replace `/public/favicon.ico` with your brand favicon
- **Colors:** Primary colors defined in `globals.css` (blue-600 based)
- **Testimonials:** Update placeholder testimonials in `page.tsx`
- **Jobs:** Update placeholder job listings in `jobs/page.tsx`
- **Blog posts:** Update placeholder articles in `insights/page.tsx`
- **Contact form:** Connect to your form backend (e.g., Formspree, SendGrid)
