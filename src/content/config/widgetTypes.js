export const WIDGET_CATEGORIES = {
  TAX: {
    name: 'Tax Widgets',
    widgets: [
      {
        id: 'webpage',
        title: 'OECD DST Tracker',
        type: 'webpage',
        description: 'Track Digital Services Tax regulations across OECD countries',
        source: 'oecd.org/tax/dst-tracker',
        schema: null,
        unstructured: false
      },
      {
        id: 'file',
        title: 'Trial Balance FY24',
        type: 'file',
        description: 'Financial trial balance data for fiscal year 2024',
        source: 'trial_balance_fy24.json',
        schema: 'financial_statement',
        unstructured: false
      },
      {
        id: 'faq',
        title: 'Tax FAQ',
        type: 'faq',
        description: 'Transfer Pricing and India GST frequently asked questions',
        source: 'faq.json',
        schema: 'qa_pairs',
        unstructured: true
      }
    ]
  },
  INTEGRATION: {
    name: 'Integration Widgets',
    widgets: [
      {
        id: 'api',
        title: 'RSS Exchange Rates',
        type: 'api',
        description: 'Real-time exchange rates from Rate Selection System',
        source: 'rss-api-endpoint',
        schema: 'exchange_rate',
        unstructured: false
      },
      {
        id: 'dataProduct',
        title: 'DST Dataset',
        type: 'dataProduct',
        description: 'Digital Services Tax collection data from marketplace',
        source: 'dst_dataset.json',
        schema: 'dst_collections',
        unstructured: false
      },
      {
        id: 'documents',
        title: 'Audit Documents',
        type: 'documents',
        description: 'Sales & Use Tax audit documents and structured data',
        source: 'audit_documents',
        schema: 'mixed',
        unstructured: true
      }
    ]
  }
};