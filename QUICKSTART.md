# 🎯 QUICK START GUIDE

## 📥 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd hitanshu-dhawan-portfolio

# Install dependencies
yarn install

# Start development server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build & Deploy

### Local Production Build
```bash
# Build for production
yarn build

# Serve locally to test
yarn serve
```

### Docker Development
```bash
# Build and run with Docker
docker build -t hitanshu-portfolio .
docker run -p 3000:3000 hitanshu-portfolio
```

### GitHub Pages Deployment
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. Automatic deployment on every push to main branch

## 📝 Content Updates

All website content is in `src/mock/data.js`:

- **personalInfo**: Contact details and bio
- **experience**: Work history and achievements
- **projects**: Portfolio projects
- **blogPosts**: Technical articles
- **skills**: Technology expertise

## 🛠️ Key Features

✅ **Fully Static** - No backend required  
✅ **GitHub Pages Ready** - Automatic deployment  
✅ **Mobile Responsive** - Works on all devices  
✅ **SEO Optimized** - Ready for search engines  
✅ **Professional Design** - Modern developer portfolio  
✅ **Fast Loading** - Optimized performance  

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components  
│   ├── mock/          # Static data
│   └── hooks/         # Custom hooks
├── public/            # Static assets
├── build/             # Production build (after yarn build)
└── Dockerfile         # Docker configuration
```

## 🔧 Available Commands

- `yarn start` - Development server
- `yarn build` - Production build
- `yarn serve` - Serve production build
- `yarn test` - Run tests
- `yarn preview` - Build and serve

---

**🎉 Your portfolio website is ready for deployment!**