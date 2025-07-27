# 🚀 Deployment Guide

This guide provides step-by-step instructions for deploying the Hitanshu Dhawan Portfolio Website to various platforms.

## 📋 Prerequisites

- Node.js 18 or higher installed
- Yarn package manager installed
- Git repository set up

## 🌐 GitHub Pages Deployment (Recommended)

### Method 1: Automatic Deployment with GitHub Actions

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to main branch

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/repository-name`

### Method 2: Manual GitHub Pages Deployment

1. **Build the site:**
   ```bash
   yarn build
   ```

2. **Deploy using gh-pages:**
   ```bash
   npm install -g gh-pages
   gh-pages -d build
   ```

## 🐳 Docker Deployment

### Local Docker Development

1. **Build the Docker image:**
   ```bash
   docker build -t hitanshu-portfolio .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 hitanshu-portfolio
   ```

3. **Access the site:**
   - Open http://localhost:3000

### Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    container_name: hitanshu-portfolio
```

Run with:
```bash
docker-compose up -d
```

## ☁️ Netlify Deployment

1. **Build the site:**
   ```bash
   yarn build
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

3. **Configure redirects** (create `public/_redirects`):
   ```
   /*    /index.html   200
   ```

## 🔺 Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Or connect GitHub repository** on Vercel dashboard for automatic deployments

## 🌊 Surge.sh Deployment

1. **Install Surge:**
   ```bash
   npm install -g surge
   ```

2. **Build and deploy:**
   ```bash
   yarn build
   cd build
   surge
   ```

## 📊 Performance Optimization for Production

### Before Deployment Checklist

- [ ] Run `yarn build` successfully
- [ ] Test all routes work correctly
- [ ] Verify responsive design on all devices
- [ ] Check image optimization and loading
- [ ] Validate all links work properly
- [ ] Test contact form functionality
- [ ] Verify SEO meta tags

### Build Optimization

The build process automatically:
- Minifies JavaScript and CSS
- Optimizes images
- Generates unique filenames for caching
- Creates service worker for offline functionality
- Splits code for better loading performance

## 🔧 Custom Domain Setup

### For GitHub Pages

1. **Add CNAME file** in `public/CNAME`:
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`

### For Other Platforms

Follow the respective platform's custom domain documentation.

## 📱 Mobile Optimization

The site is already optimized for mobile with:
- Responsive design breakpoints
- Touch-friendly navigation
- Optimized images for different screen densities
- Fast loading on mobile networks

## 🔍 SEO Optimization

Pre-configured SEO features:
- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data markup
- Optimized page titles

## 🚨 Troubleshooting

### Common Issues

**Build fails:**
- Clear node_modules: `rm -rf node_modules && yarn install`
- Check Node.js version: `node --version` (should be 18+)

**Routes don't work after deployment:**
- Ensure server redirects are configured (see platform-specific guides above)

**Images not loading:**
- Check image paths are relative
- Verify images are in the `public` folder or imported in components

**Styles not applying:**
- Run `yarn build` to generate fresh CSS
- Check Tailwind CSS configuration

## 📞 Support

If you encounter any deployment issues:

1. Check the [GitHub Issues](link-to-issues) for similar problems
2. Create a new issue with deployment logs
3. Contact: hitanshudhawan1996@gmail.com

---

**Happy Deploying! 🎉**