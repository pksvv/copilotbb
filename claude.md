# Finance Copilot Studio - Development Guide

## Project Overview

**Project Name**: finance-genai-portal  
**Stack**: React (JSX only) + TailwindCSS  
**Deployment**: GitHub Pages with Static Site Generation (SSG)  
**Architecture**: Widget-based financial dashboard inspired by OpenBB Terminal Pro UI/UX patterns

## Design System Foundation

### Visual Language & Theme

The application follows OpenBB's professional financial interface design principles:

**Dark Theme (Default)**:
- Background: `#151518`
- Text: `#FFFFFF` 
- Primary Accent: `#FF8000` (orange)
- Grid Lines: `rgba(51, 51, 51, 0.3)`

**Light Theme**:
- Background: `#ffffff`
- Primary Accent: `#3366CC` (blue)
- Maintains WCAG-compliant contrast ratios

**Styling Approach**:
- Glassmorphism-inspired patterns with semi-transparent backgrounds
- Subtle backdrop effects in modal dialogs
- Layered interface design with floating panels
- OpenBB-inspired gradients: indigo-to-purple, green-to-emerald, red-to-orange

### Component Architecture

**Core UI Components Required**:
- Avatar, Button, Checkbox, CopyButton, Dropdown, Tag
- Background, Tooltip, Popover, Loader, Input, Textarea
- Menu items, Select, Color picker, Sidebar, Chips
- Dialog/Modal, Calendar, Toast/Alert components

**Widget Organization**:
- Category-based structure (Tax, Recon, Accounting, etc.)
- Metadata-rich components supporting multiple presentation formats
- Visual layers: PDF, table, chart, and feed formats

## Application Structure

### Main Application Architecture

**Core Components**:
- `MainApplication.jsx` - Root component with sidebar + header navigation
- `ErrorBoundary` wrapper for comprehensive error handling
- Modular page system for scalability
- Parametrized portal structure for multiple copilot types

### Widget Registration & Approval Flow

**Setup Workflow**:
1. Widget Registration (with metadata)
2. Admin Approval Process
3. Library Availability
4. Workspace Integration

**Required Widget Metadata**:
- `id`, `title`, `description`, `category`
- `source` (webpage/file/api/data product)
- `schema` (if structured data)
- `unstructured` flag for document types

## Widget Types (MVP Implementation)

### 1. Webpage Widget
- **Purpose**: Preloaded OECD DST regulations tracker
- **Implementation**: Hardcoded URL with drag-and-drop functionality
- **Use Case**: Copilot answers using webpage content

### 2. File Content Widget
- **Purpose**: Trial Balance analysis
- **Data**: Dummy tax provision data (FY24)
- **Queries**: "What are tax provisions for FY24?"
- **Format**: JSON-based structured data

### 3. FAQ Widget
- **Content**: Transfer Pricing + India GST Q&As
- **Technology**: RAG (Retrieval Augmented Generation) + summarization
- **Features**: Citation support and source references

### 4. API Integration Widget
- **System**: Rate Selection System (RSS) API stub
- **Flow**: Authentication check → authorization → mock response
- **Interface**: Button-driven simulation with LLM-style responses

### 5. Trusted Data Product Widget
- **Source**: Mock Data Marketplace datasets
- **Example**: DST dataset with interactive query functionality
- **Integration**: Direct marketplace connectivity

### 6. Digital Document Storage + Data Product Widget
- **Combination**: Structured Sales & Use Tax data + unstructured audit documents
- **Capability**: Blended answer retrieval from multiple sources
- **Output**: Comprehensive responses with mixed data types

## User Interface Layout

### Sidebar - Widget Library
- **Organization**: Category-based widget grouping
- **Functionality**: Drag-and-drop source for workspace
- **Categories**: Tax, Recon, Accounting (expandable)

### Central Canvas - Workspace
- **Technology**: React Grid Layout for widget management
- **Features**: Draggable and resizable widgets
- **Grid System**: 12-column layout with 30px row height
- **Responsive**: Breakpoints from 480px to 1200px+

### Right Panel - Copilot Chat Interface
- **Features**: 
  - Citations and source references
  - Step-by-step reasoning display
  - Suggested queries based on active widgets
  - Context-aware responses

### Widget Controls
- **Display Options**: Chart/Table toggle functionality
- **Data Management**: Filter, sort, refresh capabilities
- **Export**: CSV/JSON format support
- **Metadata**: Schema view and data lineage when available

## Query Context Hierarchy

### Context Levels
1. **Explicit Context**: Selected widget-specific queries
2. **Dashboard Context**: All widgets currently in workspace
3. **Global Context**: All registered and approved widgets

### Suggested Queries
- **Dynamic Generation**: Based on dragged widgets
- **Context-Aware**: Tailored to available data sources
- **Interactive**: Clickable query suggestions

## Role-Based Access Control

### User Roles
- **Admins**: Widget approval and system management
- **Analysts**: Widget registration and full usage rights
- **Guests**: Limited to approved widget interactions only

### Permission Implementation
- **Component-Level**: Access control at UI component level
- **Dynamic Routing**: Route generation based on user permissions
- **Field-Level**: Data access restrictions
- **Audit Trail**: Comprehensive logging for compliance

## Static Site Generation for GitHub Pages

### Configuration Requirements
- **Next.js**: Static export configuration with `output: "export"`
- **Base Path**: Proper GitHub Pages path settings
- **Jekyll Bypass**: `.nojekyll` file placement
- **Custom 404**: Single-page application support

### Performance Optimization
- **Bundle Splitting**: Vendor chunks separation
- **Image Optimization**: Custom loader implementation
- **Service Workers**: Caching strategies for financial data
- **Tailwind CSS**: Content configuration for proper purging

### Deployment Metrics Targets
- **First Contentful Paint**: Under 1.8 seconds
- **Largest Contentful Paint**: Under 2.5 seconds
- **Bundle Size**: Under 200KB gzipped

## Data Integration Architecture

### Real-Time Data Handling
- **WebSockets**: Live financial data streams
- **Connection Monitoring**: Automatic reconnection capabilities
- **Batched Updates**: Performance optimization (60fps or less)
- **Server-Sent Events**: Continuous update streams

### Data Processing Patterns
- **Structured Data**: React Query/SWR for REST API management
- **Unstructured Data**: AI-powered document processing pipelines
- **ETL/ELT**: Extract-load-transform patterns with data warehouse integration
- **Quality Management**: Completeness, accuracy, and consistency checks

## Error Handling & Reliability

### Error Boundary Implementation
- **Granular Placement**: Around critical financial components
- **Specialized Fallbacks**: Trading errors, data feed interruptions
- **Financial-Specific**: Insufficient funds, market closure, price staleness

### Retry Mechanisms
- **Exponential Backoff**: Configurable maximum attempts
- **Rate Limiting**: HTTP 429 specialized handling
- **Timeout Management**: Progressive delay strategies

### Monitoring & Compliance
- **Sentry Integration**: Financial operation tracking with data sanitization
- **Audit Trails**: Comprehensive logging for regulatory compliance
- **Recovery Patterns**: Automatic retry with circuit breakers

## Production Considerations

### Security Implementation
- **End-to-End Encryption**: Sensitive financial data protection
- **API Gateways**: Comprehensive rate limiting
- **Data Masking**: Non-production environment safety

### Scalability Patterns
- **Microservices**: Separation of structured vs unstructured data processing
- **Event-Driven**: Communication pattern implementation
- **Horizontal Scaling**: Component service distribution
- **Caching Layers**: Browser, CDN, application, and database levels

## AMEX Environment Deployment Notes

### Firewall Considerations
- **Internal Libraries**: Use only approved packages available within corporate firewall
- **External Dependencies**: Avoid CDN-dependent resources that may be blocked
- **Security Compliance**: Adhere to AMEX security standards and protocols
- **Network Restrictions**: Account for limited external API access

### Approved Technologies
- **React**: Standard corporate JavaScript framework
- **TailwindCSS**: Approved CSS framework for internal use
- **GitHub Pages**: Approved static hosting within corporate environment
- **Internal APIs**: Utilize only pre-approved internal data sources

## Development Workflow

### Testing Strategy
- **Error Scenarios**: Automated testing for financial error conditions
- **Financial Data Validation**: Continuous integration with data accuracy checks
- **Staged Deployments**: Rollback capabilities for production safety

### Performance Monitoring
- **Error Boundary Frequency**: Render frequency tracking
- **Recovery Time**: Error recovery performance metrics
- **User Experience**: Abandonment rate monitoring
- **Regulatory Compliance**: Audit requirement fulfillment

## File Structure Requirements

### Core Application Files
- `MainApplication.jsx` - Primary application container
- Component modules for each major UI section
- Widget-specific components with modular architecture
- Error handling and boundary components

### Data Files
- `trial_balance.json` - Dummy tax provision data for testing
- `faq.json` - Transfer Pricing and GST question-answer pairs
- `rss_stub.json` - Mock API response data
- Configuration files for widget metadata

### Documentation
- `README.md` with comprehensive setup instructions
- GitHub Pages deployment guide
- AMEX environment-specific configuration notes
- Widget development and registration guidelines

This architecture provides a robust foundation for building a professional financial dashboard application that meets enterprise requirements while maintaining the performance and user experience standards expected in financial technology environments.