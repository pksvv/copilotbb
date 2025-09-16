# Finance GenAI Strategy Portal

A modern, OpenBB-style widget dashboard for financial copilots built with React and TailwindCSS.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Deployment
```bash
npm run deploy
```

## 📋 Features

- **Widget-Based Dashboard**: Drag-and-drop financial widgets
- **Tax Copilot Chat**: AI-powered tax assistance with contextual responses
- **Multi-Session Chat**: Create and manage multiple chat sessions
- **Responsive Design**: Mobile-first, OpenBB-inspired dark theme
- **Real-time Suggestions**: Dynamic query suggestions based on active widgets

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS with custom financial theme
- **Deployment**: GitHub Pages with automated CI/CD

### Widget Types
1. **OECD DST Tracker** - Digital services tax regulations
2. **Trial Balance FY24** - Tax provision data analysis
3. **Tax FAQ** - Transfer pricing and GST guidance
4. **RSS Exchange Rates** - Live currency exchange rates
5. **DST Dataset** - Digital tax collection data
6. **Audit Documents** - Document analysis and summaries

## 🎨 Design System

### OpenBB-Inspired Theme
- **Dark Background**: `#151518`
- **Primary Accent**: `#FF8000` (orange)
- **Glassmorphism**: Semi-transparent panels with backdrop blur
- **Typography**: System fonts with professional spacing

## 📊 Widget System

### Adding Widgets
1. Hover over widgets in sidebar to see descriptions
2. Drag widgets to workspace canvas
3. Widgets automatically generate contextual chat suggestions
4. Remove widgets using the X button

### Chat Features
- **Multiple Sessions**: Create unlimited chat tabs
- **Clear Chat**: Reset conversation history
- **Dynamic Suggestions**: Queries update based on active widgets
- **Citations**: Source references for all responses

## 🚀 Deployment

### Automatic (Recommended)
Push to `main` branch - GitHub Actions handles deployment automatically.

### Manual Deployment
```bash
# Quick deployment
./deploy.sh

# Or step by step
npm run build
npm run deploy
```

### Configuration
1. Update `package.json` repository URLs
2. Enable GitHub Pages in repository settings
3. Set source to `gh-pages` branch

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, ErrorBoundary
│   ├── workspace/       # Canvas, GridLayout, WidgetContainer
│   ├── chat/           # ChatInterface, MessageList, QuerySuggestions
│   ├── widgets/        # Individual widget components
│   └── admin/          # Admin-specific components
├── shared/
│   ├── ui/             # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React context providers
│   └── utils/          # Utility functions
├── content/
│   ├── mockData/       # JSON mock data files
│   └── config/         # Configuration and metadata
└── assets/
    ├── icons/          # Widget and UI icons
    └── styles/         # Global CSS and themes
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality
- `npm run lint:fix` - Fix linting issues
- `npm run deploy` - Deploy to GitHub Pages

### Code Standards
- **React JSX Only**: No TypeScript complexity
- **TailwindCSS**: Utility-first styling approach
- **Component Limits**: Single responsibility, readable code
- **Error Boundaries**: Comprehensive error handling

## 🎯 Business Use Cases

### Global Tax Copilot MVP
- **Digital Services Tax**: OECD tracker and dataset analysis
- **Financial Data**: Trial balance and tax provision analysis
- **Compliance**: Transfer pricing and GST guidance
- **Exchange Rates**: Real-time currency data
- **Audit Support**: Document analysis and variance reporting

## 🔧 Customization

### Adding New Widgets
1. Create component in `src/components/widgets/`
2. Add metadata to `src/content/config/widgetMetadata.js`
3. Include in widget library sidebar
4. Define example queries for copilot integration

### Theming
- Update colors in `tailwind.config.js`
- Modify theme configuration in `src/content/config/themes.js`
- Customize OpenBB-style gradients and effects

## 📞 Support

- **Issues**: GitHub Issues
- **Documentation**: See `/docs` folder
- **Deployment**: `DEPLOYMENT.md`

---

Built with ❤️ by the Finance GenAI Strategy Team