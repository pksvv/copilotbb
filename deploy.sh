#!/bin/bash

# Finance GenAI Portal - GitHub Pages Deployment Script
set -e

echo "🚀 Starting Finance GenAI Portal deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages dependency..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed successfully!"
echo "🌐 Your Finance GenAI Portal will be available at: https://yourusername.github.io/copilotbb"
echo ""
echo "📋 Next steps:"
echo "1. Update the repository URL in package.json"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Wait a few minutes for deployment to complete"