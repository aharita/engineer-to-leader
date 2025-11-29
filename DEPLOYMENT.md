# 🚀 Deployment Guide

Your site is **fully configured** and ready to deploy to GitHub Pages!

## ✅ Configuration Complete

All GitHub Pages settings are already configured in `website/docusaurus.config.js`:

```javascript
url: 'https://aharita.github.io',
baseUrl: '/engineer-to-leader/',
organizationName: 'aharita',
projectName: 'engineer-to-leader',
```

## 🤖 Automatic Deployment (Recommended)

GitHub Actions will **automatically deploy** your site whenever you push to the `main` branch.

### Steps:

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Add Docusaurus site with Tokyo Night theme"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo: https://github.com/aharita/engineer-to-leader
   - Click **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - Save

4. **Done!** 
   - The workflow will run automatically
   - Your site will be live at: **https://aharita.github.io/engineer-to-leader/**
   - Check the **Actions** tab to see deployment progress

## 🔧 Manual Deployment (Alternative)

If you prefer manual control:

```bash
cd website
npm run build
GIT_USER=aharita npm run deploy
```

This will:
- Build the production bundle
- Deploy to `gh-pages` branch
- Site goes live automatically

## 📝 Files Created

- ✅ `.github/workflows/deploy.yml` - Automated deployment workflow
- ✅ `website/docusaurus.config.js` - GitHub Pages configuration
- ✅ `website/build/` - Production build (created when you run `npm run build`)

## 🎉 Next Steps

1. Push your code to GitHub
2. Enable GitHub Actions as the Pages source
3. Wait ~2 minutes for deployment
4. Visit https://aharita.github.io/engineer-to-leader/

Your Tokyo Night themed site will be live! 🌙
