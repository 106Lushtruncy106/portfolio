# Portfolio - Custom Website Builder Portfolio

A modern, high-performance portfolio website built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion + Three.js (@react-three/fiber)
- **CMS**: Sanity.io (headless CMS)
- **Fonts**: Inter + JetBrains Mono

## Development

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment: Hostinger Managed Node.js Hosting

This project is designed for Hostinger Business/Cloud hosting with Managed Node.js support.

### Step 1: Push to GitHub

Create a GitHub repository and push the code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Set Up Sanity CMS

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project, note down the **Project ID**
3. In your Hostinger app settings, add these environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = production

### Step 3: Deploy on Hostinger

1. Log in to Hostinger **hPanel**
2. Go to **Websites** -> **Add Website**
3. Select **Node.js Web App**
4. Choose **Import Git Repository**
5. Authorize GitHub and select your portfolio repository
6. Hostinger will auto-detect Next.js and configure:
   - **Install command**: `npm ci`
   - **Build command**: `npm run build`
   - **Start command**: `npm run start -- -p $PORT`
   - **Node.js version**: 20 LTS
7. Add environment variables (Sanity project ID/dataset)
8. Click **Deploy**

### Step 4: Connect Domain

Once deployed, go to your domain settings in hPanel and point your domain to this app. SSL is auto-managed.

### Step 5: Deploy Sanity Studio (Optional)

If you want to manage content from a custom subdomain:

```bash
npx sanity deploy
```

## Sanity Content Models

- **Profile** - Personal info, stats, skills, social links
- **Case Study** - Project portfolio entries
- **Post** - Blog articles
- **Tag** - Blog post tags

## Project Structure

```
src/
  app/              # Next.js App Router pages
    about/          # About page
    blog/           # Blog list & detail pages
    cases/          # Case studies list & detail pages
    contact/        # Contact page
    services/       # Services page
    admin/          # Sanity Studio
    sitemap.ts      # Auto-generated sitemap
    robots.ts       # Robots.txt
    rss.xml/        # RSS feed
  components/
    animations/     # 3D scene, cursor, scroll animations
    layout/         # Header, Footer, ClientLayout
    ui/             # Button, Card, Badge, SanityImage
  lib/              # Sanity client, queries, utils
  types/            # TypeScript type definitions
sanity/
  schemaTypes/      # Sanity content schemas
```
