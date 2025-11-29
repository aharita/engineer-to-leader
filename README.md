# Engineer to Leader

Transform from Individual Contributor to Engineering Leader.

## 🚀 Live Site

- **Local Development**: http://localhost:3000/engineer-to-leader/
- **Production**: https://aharita.github.io/engineer-to-leader/ (after deployment)

## 📚 Content

### Module 1: The Rewire (Identity Shift)

Learn the fundamental identity shift from Senior Engineer to Engineering Manager:

1. **The Maker vs. Multiplier Metric** - Andy Grove's output equation
2. **The "Empty Calendar" Panic** - Why conversation is your work
3. **The 85% Rule** - Learning to delegate and let go
4. **The Heat Shield** - Filtering organizational chaos

## 🛠 Development

### Prerequisites

- Node.js 18+ and npm

### Local Setup

```bash
# Navigate to website directory
cd website

# Install dependencies (first time only)
npm install

# Start development server
npm start

# Open http://localhost:3000/engineer-to-leader/
```

### Build for Production

```bash
cd website
npm run build
```

This creates a `build/` directory with optimized static files.

## 🚢 Deployment to GitHub Pages

### Option 1: Automated Deploy Command

```bash
cd website
GIT_USER=aharita npm run deploy
```

This will:
- Build the production bundle
- Deploy to `gh-pages` branch
- Make the site live at https://aharita.github.io/engineer-to-leader/

### Option 2: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
          cache-dependency-path: website/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: website
        
      - name: Build website
        run: npm run build
        working-directory: website

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./website/build
```

2. Push to GitHub:

```bash
git add .
git commit -m "Add Docusaurus site with Module 1"
git push origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Set source to `gh-pages` branch
   - Save

Your site will be live at: `https://aharita.github.io/engineer-to-leader/`

## 📁 Project Structure

```
engineer-to-leader/
├── _archive_html_version/    # Original HTML version (backup)
│   ├── index.html
│   ├── style.css
│   └── script.js
└── website/                   # Docusaurus site
    ├── docs/                  # Documentation
    │   └── module-1/         # Module 1 content
    │       ├── index.md
    │       ├── maker-vs-multiplier.md
    │       ├── empty-calendar.md
    │       ├── 85-percent-rule.md
    │       └── heat-shield.md
    ├── src/
    │   ├── css/
    │   │   └── custom.css    # Custom theme
    │   └── pages/
    │       └── index.js      # Landing page
    ├── docusaurus.config.js  # Site configuration
    ├── sidebars.js           # Sidebar configuration
    └── package.json
```

## 🎨 Customization

### Colors

Edit `website/src/css/custom.css` to change the color scheme:

```css
[data-theme='dark'] {
  --ifm-color-primary: #a78bfa;  /* Purple */
  --ifm-background-color: hsl(230, 25%, 8%);  /* Dark blue */
}
```

### Adding More Modules

1. Create new directory: `website/docs/module-2/`
2. Add markdown files
3. Sidebar updates automatically

## 📖 Documentation

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown/MDX Guide](https://docusaurus.io/docs/markdown-features)

## ✅ Ready to Deploy

- ✅ Custom branding applied
- ✅ All Module 1 content converted
- ✅ Production build tested and working
- ✅ GitHub Pages configuration complete
- ✅ SEO meta tags configured
- ✅ Responsive design verified

## 🚀 Next Steps

Run the deploy command when ready:

```bash
cd website
GIT_USER=aharita npm run deploy
```

Your site will be live in a few minutes!
