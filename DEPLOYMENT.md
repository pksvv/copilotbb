# Finance GenAI Portal - Deployment Guide

## 🚀 Quick Deployment

### Method 1: Automated Script
```bash
./deploy.sh
```

### Method 2: Manual Commands
```bash
npm run build
npm run deploy
```

### Method 3: GitHub Actions (Recommended)
Push to `main` branch - automatic deployment via GitHub Actions.

## 📋 Prerequisites

1. **Git Repository Setup**
   ```bash
   git init
   git remote add origin https://github.com/yourusername/finance-genai-portal.git
   ```

2. **Update package.json**
   - Change `yourusername` to your GitHub username
   - Update repository URL and homepage

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

## 🔧 Configuration

### Vite Configuration
The project is configured for GitHub Pages deployment:
- Base path: `/copilotbb/`
- Static asset optimization
- Jekyll bypass (`.nojekyll`)

### Environment Variables
No environment variables required for basic deployment.

## 🌐 Access Your Portal

After deployment, your Finance GenAI Portal will be available at:
```
https://yourusername.github.io/copilotbb
```

## 🛠 Troubleshooting

### Common Issues

1. **404 Error on Deployed Site**
   - Check that GitHub Pages is enabled
   - Verify the base path in `vite.config.js`
   - Ensure `.nojekyll` file exists

2. **Build Failures**
   ```bash
   npm run lint:fix  # Fix linting issues
   npm ci            # Clean install dependencies
   ```

3. **Permission Issues**
   ```bash
   chmod +x deploy.sh  # Make script executable
   ```

### GitHub Actions Deployment

The repository includes automatic deployment via GitHub Actions:
- Triggers on push to `main` branch
- Builds and deploys automatically
- No manual intervention required

## 📊 Performance Optimization

The deployment includes:
- ✅ Bundle splitting for faster loading
- ✅ Asset optimization for GitHub Pages
- ✅ Tailwind CSS purging for smaller bundles
- ✅ Service worker caching strategies

## 🔄 Updates

To update your deployed portal:
1. Make changes to your code
2. Commit and push to `main` branch
3. GitHub Actions will automatically redeploy

Or run manually:
```bash
./deploy.sh
```

## 📞 Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify repository settings
3. Review build output for errors