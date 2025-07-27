# Getting Started with Create React App

# Hitanshu Dhawan - Portfolio Website

A modern, professional portfolio website for **Hitanshu Dhawan**, Senior Android Engineer at PhonePe. This is a fully static website built with React and designed to showcase Android development expertise, projects, and professional experience.

## 🌟 Features

- **7 Complete Pages**: Home, About, Projects, Portfolio, Blog, Open Source, Contact
- **Fully Responsive**: Mobile-first design that works on all devices
- **Professional Design**: Clean, modern aesthetic with developer-focused branding
- **Static Site**: No backend required - perfect for GitHub Pages deployment
- **SEO Optimized**: Semantic HTML and optimized for search engines
- **Fast Loading**: Optimized images and efficient code structure

## 🏗️ Project Structure

```
├── public/                 # Static assets
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components (buttons, cards, etc.)
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About page
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Portfolio.jsx  # Other work
│   │   ├── Blog.jsx       # Blog listings
│   │   ├── BlogPost.jsx   # Individual blog posts
│   │   ├── OpenSource.jsx # Open source contributions
│   │   └── Contact.jsx    # Contact page
│   ├── mock/              # Static data
│   │   └── data.js        # All website content
│   ├── hooks/             # Custom React hooks
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── tailwind.config.js     # Tailwind CSS configuration
├── craco.config.js        # CRACO configuration
├── package.json           # Dependencies and scripts
└── Dockerfile             # Docker configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **Yarn** (recommended) or npm

### Local Development

1. **Clone and setup:**
   ```bash
   git clone <repository-url>
   cd hitanshu-dhawan-portfolio
   yarn install
   ```

2. **Start development server:**
   ```bash
   yarn start
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view in browser.

3. **Build for production:**
   ```bash
   yarn build
   ```
   
   Creates optimized build in `build/` directory.

### Using Docker

1. **Build Docker image:**
   ```bash
   docker build -t hitanshu-portfolio .
   ```

2. **Run container:**
   ```bash
   docker run -p 3000:3000 hitanshu-portfolio
   ```
   
   Access at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests
- `yarn serve` - Serve production build locally

## 🌐 GitHub Pages Deployment

This site is optimized for GitHub Pages deployment:

1. **Build the site:**
   ```bash
   yarn build
   ```

2. **Deploy to GitHub Pages:**
   - Push your code to a GitHub repository
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/build" folder
   - Or use GitHub Actions for automated deployment

### GitHub Actions Deployment (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'yarn'
    
    - name: Install dependencies
      run: yarn install --frozen-lockfile
    
    - name: Build
      run: yarn build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 🎨 Customization

### Updating Content

All website content is stored in `src/mock/data.js`. Update the following sections:

- **personalInfo**: Basic information and contact details
- **experience**: Work experience and achievements  
- **projects**: Portfolio projects with descriptions
- **blogPosts**: Blog articles and technical posts
- **skills**: Technical skills and expertise areas

### Styling

The site uses **Tailwind CSS** for styling:

- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes
- Custom components: `src/components/ui/`

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.js`
3. Update navigation in `src/components/Navbar.jsx`

## 🧪 Technologies Used

- **React 19** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **CRACO** - Create React App Configuration Override

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Optimized Images**: All images are properly sized and compressed
- **Code Splitting**: React lazy loading for optimal bundle size
- **SEO Ready**: Meta tags, semantic HTML, and proper heading structure
- **Fast Loading**: Minimal JavaScript and efficient CSS

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Hitanshu Dhawan**
- Email: hitanshudhawan1996@gmail.com
- LinkedIn: [linkedin.com/in/hitanshu-dhawan](https://linkedin.com/in/hitanshu-dhawan)
- GitHub: [github.com/hitanshu-dhawan](https://github.com/hitanshu-dhawan)

---

Built with ❤️ by Hitanshu Dhawan | © 2025 All Rights Reserved
