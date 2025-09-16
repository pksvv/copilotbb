export const WIDGET_METADATA = {
  webpage: {
    id: 'webpage',
    name: 'OECD DST Tracker',
    type: 'webpage',
    icon: '🌍',
    description: 'Preloaded OECD DST regulations tracker with hardcoded URL for digital services tax compliance.',
    exampleQueries: [
      "Which countries have DST rules?",
      "What is the DST threshold in India?"
    ],
    category: 'Tax Widgets'
  },
  file: {
    id: 'file',
    name: 'Trial Balance FY24',
    type: 'file',
    icon: '📂',
    description: 'Preloaded Trial Balance file containing dummy tax provision data for fiscal year 2024.',
    exampleQueries: [
      "What are the tax provisions for FY24?",
      "Break down deferred vs current tax expense."
    ],
    category: 'Tax Widgets'
  },
  faq: {
    id: 'faq',
    name: 'Tax FAQ',
    type: 'faq',
    icon: '❓',
    description: 'Pre-seeded Q&A database covering Transfer Pricing and India GST regulations.',
    exampleQueries: [
      "Explain India GST input tax credit rules.",
      "Summarize OECD transfer pricing guidelines."
    ],
    category: 'Tax Widgets'
  },
  api: {
    id: 'api',
    name: 'RSS Exchange Rates',
    type: 'api',
    icon: '🔌',
    description: 'Stub Rate Selection System API connection that returns mock exchange rates for testing.',
    exampleQueries: [
      "Show EUR/INR exchange rate.",
      "Get USD/GBP exchange rate."
    ],
    category: 'Integration Widgets'
  },
  dataProduct: {
    id: 'dataProduct',
    name: 'DST Dataset',
    type: 'dataProduct',
    icon: '📊',
    description: 'Pulls mock DST dataset from Tax Data Marketplace with country-wise digital services tax data.',
    exampleQueries: [
      "Show digital revenues dataset by country.",
      "Filter DST dataset for EU-only markets."
    ],
    category: 'Integration Widgets'
  },
  documents: {
    id: 'documents',
    name: 'Audit Documents',
    type: 'documents',
    icon: '🗂️',
    description: 'Combines structured Sales & Use Tax data with unstructured audit documents for comprehensive analysis.',
    exampleQueries: [
      "List recent audit trail documents for SNUT-23.",
      "Summarize FY23 audit variance report."
    ],
    category: 'Integration Widgets'
  }
};

export const getWidgetMetadata = (widgetId) => {
  return WIDGET_METADATA[widgetId] || null;
};

export const getAllWidgetQueries = (activeWidgets) => {
  const queries = [];
  activeWidgets.forEach(widget => {
    const metadata = getWidgetMetadata(widget.originalId || widget.type);
    if (metadata && metadata.exampleQueries) {
      queries.push(...metadata.exampleQueries);
    }
  });
  return [...new Set(queries)]; // Remove duplicates
};

export const getWidgetsByCategory = () => {
  const categories = {};
  Object.values(WIDGET_METADATA).forEach(widget => {
    if (!categories[widget.category]) {
      categories[widget.category] = [];
    }
    categories[widget.category].push(widget);
  });
  return categories;
};