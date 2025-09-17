export const WIDGET_METADATA = {
  webpage: {
    id: 'webpage',
    name: 'OECD DST Tracker',
    type: 'webpage',
    icon: '🌍',
    description: 'Preloaded OECD DST regulations tracker (hardcoded URL). Copilot answers using webpage content.',
    subheading: 'Webpage Interaction',
    exampleQueries: [
      "Which countries have DST rules?",
      "Summarize OECD DST policy highlights."
    ],
    detailedAnswers: {
      "Which countries have DST rules?": {
        response: "The OECD DST tracker shows that countries such as **France, Italy, Spain, the UK, and India** have implemented Digital Services Taxes. France introduced a 3% levy on digital advertising and marketplace revenues; Italy and Spain followed similar models, while India applied an equalization levy. These rules primarily target multinational digital platforms with high revenues.",
        citations: [{ source: "OECD DST PDF", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/09/digital-services_9184a6f5/7bd95d83-en.pdf" }]
      },
      "Summarize OECD DST policy highlights.": {
        response: "OECD guidance highlights **thresholds of €750M+ global revenues**, ensuring only large multinationals are in scope. It also emphasizes **focus on digital advertising, marketplace platforms, and user data monetization**. The report also warns of risks of double taxation unless harmonized frameworks are agreed globally.",
        citations: [{ source: "OECD DST PDF", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/09/digital-services_9184a6f5/7bd95d83-en.pdf" }]
      }
    },
    category: 'Tax Widgets'
  },
  file: {
    id: 'file',
    name: 'Trial Balance FY24',
    type: 'file',
    icon: '📂',
    description: 'Preloaded Trial Balance file with dummy FY24 tax provision data.',
    subheading: 'File Interaction',
    exampleQueries: [
      "What are tax provisions for FY24?",
      "Break down deferred vs current tax expense."
    ],
    detailedAnswers: {
      "What are tax provisions for FY24?": {
        response: "The FY24 Trial Balance shows **Deferred Tax = $2.3M**, **Current Tax = $14.2M**, bringing total provisions to **$16.5M**. This indicates that most of the tax expense (about 86%) is expected to be settled in the current fiscal year, while a smaller portion relates to timing differences to be settled in future periods.",
        citations: [{ source: "Trial Balance FY24", page: "Tax Provisions Section" }]
      },
      "Break down deferred vs current tax expense.": {
        response: "Deferred Tax Expense represents about **14% of the total provisions**, mainly from temporary differences on depreciation and carry-forward losses. Current Tax makes up **86%**, reflecting actual payable obligations. This balance suggests a relatively stable tax profile with limited deferrals.",
        citations: [{ source: "Trial Balance FY24", page: "Tax Provisions Section" }]
      }
    },
    category: 'Tax Widgets'
  },
  faq: {
    id: 'faq',
    name: 'Tax FAQ',
    type: 'faq',
    icon: '❓',
    description: 'Pre-seeded FAQ with Transfer Pricing + India GST. Copilot answers with RAG + citations.',
    subheading: 'FAQ Question Answering (like Ask-GSM, Ask-Finance)',
    exampleQueries: [
      "Summarize OECD transfer pricing guidelines.",
      "What is India's GST threshold?"
    ],
    detailedAnswers: {
      "Summarize OECD transfer pricing guidelines.": {
        response: "OECD Transfer Pricing Guidelines are built around the **arm's length principle**, requiring related parties to transact as if they were independent. They define accepted profit allocation methods (CUP, TNMM, Resale Minus, etc.), emphasize country-by-country reporting, and set documentation standards. The guidelines are globally referenced and form the foundation of BEPS (Base Erosion & Profit Shifting) actions.",
        citations: [{ source: "OECD Transfer Pricing Guidelines", page: "FAQ Database" }]
      },
      "What is India's GST threshold?": {
        response: "India applies a GST registration threshold of **₹40 lakh for goods** and **₹20 lakh for services**. This threshold reduces compliance burden on small enterprises while ensuring medium and large businesses enter the GST regime. Some states with \"special category\" status have lower limits (₹20 lakh for goods).",
        citations: [{ source: "India GST Regulations", page: "FAQ Database" }]
      }
    },
    category: 'Tax Widgets'
  },
  api: {
    id: 'api',
    name: 'RSS Exchange Rates',
    type: 'api',
    icon: '🔌',
    description: 'Stub "Rate Selection System (RSS API)" for exchange rates. Simulates auth → call → mock response.',
    subheading: 'API Integration (like Ask-GSM, Ask-Finance)',
    exampleQueries: [
      "Show EUR/INR exchange rate.",
      "Get USD/GBP exchange rate."
    ],
    detailedAnswers: {
      "Show EUR/INR exchange rate.": {
        response: "RSS API Simulation: **EUR/INR = 89.4 (01/12/2024)**. Supporting base rates were **EUR/USD = 0.9234**, **USD/INR = 83.25**. This implies INR weakening slightly against both USD and EUR compared to the prior quarter.",
        citations: [{ source: "RSS Exchange Rate System", page: "Live API Feed" }]
      },
      "Get USD/GBP exchange rate.": {
        response: "RSS API Simulation: **USD/GBP = 0.79 (01/12/2024)**. Indicates that 1 US Dollar converts to 0.79 British Pounds. Trendline suggests mild USD strength against GBP since Q3 2024.",
        citations: [{ source: "RSS Exchange Rate System", page: "Live API Feed" }]
      }
    },
    category: 'Integration Widgets'
  },
  dataProduct: {
    id: 'dataProduct',
    name: 'DST Dataset',
    type: 'dataProduct',
    icon: '📊',
    description: 'Mock DST dataset from Data Marketplace. Queries return country-level digital tax revenues.',
    subheading: 'Tax Data Product from Data Marketplace – DST (Digital Services Tax)',
    exampleQueries: [
      "Show digital revenues dataset by country.",
      "Filter DST dataset for EU-only markets."
    ],
    detailedAnswers: {
      "Show digital revenues dataset by country.": {
        response: "FY23 DST Collections:\n- 🇫🇷 France: $120M\n- 🇮🇹 Italy: $95M\n- 🇪🇸 Spain: $88M\n- 🇬🇧 UK: $110M\n- 🇮🇳 India: $130M\n\nThese figures show significant contributions from both EU and non-EU markets, with India being the largest single DST contributor.",
        citations: [{ source: "DST Dataset", page: "Tax Data Marketplace" }]
      },
      "Filter DST dataset for EU-only markets.": {
        response: "EU-Only (FY23): France $120M, Italy $95M, Spain $88M. Together these account for **~43% of total DST revenues**. This split helps in comparing EU policy impact vs. global measures.",
        citations: [{ source: "DST Dataset", page: "Tax Data Marketplace" }]
      }
    },
    category: 'Integration Widgets'
  },
  documents: {
    id: 'documents',
    name: 'Tax Digital Document Storage',
    type: 'documents',
    icon: '🗂️',
    description: 'Stores structured + unstructured audit docs (e.g., SNUT-23 audit trail, variance reports, FY filings).',
    subheading: 'Digital Document Storage',
    exampleQueries: [
      "List all Sales & Use Tax variance reports for FY23.",
      "Summarize key findings from SNUT-23 audit trail."
    ],
    detailedAnswers: {
      "List all Sales & Use Tax variance reports for FY23.": {
        response: "Variance reports archived in the Tax Digital Document Storage for FY23 include:\n\n• **Q1 FY23** – Identified timing misclassification (~$250K) in SNUT online service revenues.\n• **Q2 FY23** – Flagged under-reporting of $400K due to incomplete subsidiary disclosures.\n• **Q3 FY23** – Documented a $600K overstatement; corrective entries traced and validated.\n• **Q4 FY23** – Captured year-end reconciliation adjustments linked to downstream filings.\n\n✅ **Audit Note**: Pattern of control gaps, logged under remediation log FY23-R05.",
        citations: [{ source: "Tax Digital Document Storage", page: "FY23 Variance Reports Collection" }]
      },
      "Summarize key findings from SNUT-23 audit trail.": {
        response: "**SNUT-23 Audit Trail highlights:**\n\n1. ~$1.2M revenue misclassification under exempt category.\n2. 2 subsidiaries with delayed filings, flagged in compliance exceptions.\n3. Corrective entries posted to FY23 Returns Filing, validated via variance reports.\n\n⚠️ **Audit Note**: Indicates systemic weaknesses in entity-level reporting. Recommended: strengthen pre-close reconciliations + attestations.",
        citations: [{ source: "SNUT-23 Audit Trail", page: "Tax Digital Document Storage" }]
      }
    },
    category: 'Integration Widgets'
  },
  salesUseTaxData: {
    id: 'salesUseTaxData',
    name: 'Sales & Use Tax Dataset',
    type: 'salesUseTaxData',
    icon: '🏪',
    description: 'Contains quarterly and annual Sales & Use Tax collections, structured tabular data from Data Marketplace.',
    subheading: 'Sales & Use Tax Data Product',
    exampleQueries: [
      "Show quarterly SNUT sales tax collections.",
      "Compare SNUT collections vs other states."
    ],
    detailedAnswers: {
      "Show quarterly SNUT sales tax collections.": {
        response: "**SNUT Quarterly Collections (FY24):**\n\n• Q1: $12M\n• Q2: $14M\n• Q3: $11M (variance flagged)\n• Q4: $15M\n\n**Total: $52M**\n\n📊 **Audit Note**: Q3 dip aligns with FY23 variance audit adjustments.",
        citations: [{ source: "SNUT Sales Tax Data", page: "Sales & Use Tax Dataset" }]
      },
      "Compare SNUT collections vs other states.": {
        response: "**FY24 Benchmark:**\n\n• SNUT: $52M\n• California: $68M\n• Texas: $61M\n• New York: $57M\n\n🔎 **Audit Insight**: SNUT stable overall, but Q3 volatility = red flag tied to audit variance.",
        citations: [{ source: "Sales & Use Tax Dataset", page: "State Comparison Analysis" }]
      }
    },
    category: 'Integration Widgets'
  }
};

export const getWidgetMetadata = (widgetId) => {
  return WIDGET_METADATA[widgetId] || null;
};

export const getAllWidgetQueries = (activeWidgets) => {
  const queries = [];
  const activeWidgetTypes = activeWidgets.map(w => w.originalId || w.type);

  activeWidgets.forEach(widget => {
    const metadata = getWidgetMetadata(widget.originalId || widget.type);
    if (metadata && metadata.exampleQueries) {
      queries.push(...metadata.exampleQueries);
    }
  });

  // Add cross-widget queries when both documents and salesUseTaxData are active
  if (activeWidgetTypes.includes('documents') && activeWidgetTypes.includes('salesUseTaxData')) {
    queries.push(
      "Link variance adjustments to SNUT documentation.",
      "Explain how audit findings impacted reported collections.",
      "Map quarterly collection dips to audit variance reports."
    );
  }

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

export const getDetailedAnswerForQuery = (query, activeWidgets) => {
  const activeWidgetTypes = activeWidgets.map(w => w.originalId || w.type);

  // Handle cross-widget queries first
  if (activeWidgetTypes.includes('documents') && activeWidgetTypes.includes('salesUseTaxData')) {
    const crossWidgetAnswers = {
      "Link variance adjustments to SNUT documentation.": {
        response: "**$1.2M adjustment referenced in:**\n\n• **Variance Report FY23** – Misclassification flagged.\n• **SNUT-23 Audit Trail** – Source entries identified.\n• **FY23 Returns Filing** – Adjustment posted.\n\n📉 **Dataset shows Q3 collections dip ($11M) = exact match to adjustment.**\n\n✅ **Audit Note**: Strong document-to-dataset linkage; ensures traceability for compliance.",
        citations: [
          { source: "Tax Digital Document Storage", page: "FY23 Variance Reports" },
          { source: "Sales & Use Tax Dataset", page: "Quarterly Collections" }
        ]
      },
      "Explain how audit findings impacted reported collections.": {
        response: "**Audit Impact Analysis:**\n\n• Q2 under-reporting ($400K) → upward revision.\n• Q3 overstatement ($600K) → downward revision.\n• Net correction $1.2M → updated in FY23 Returns.\n\n📊 **Dataset reconciles audit logs with reported filings.**\n\n🔒 **Audit Note**: Validates end-to-end data lineage (findings → remediation → filings).",
        citations: [
          { source: "SNUT-23 Audit Trail", page: "Tax Digital Document Storage" },
          { source: "SNUT Sales Tax Data", page: "Sales & Use Tax Dataset" }
        ]
      },
      "Map quarterly collection dips to audit variance reports.": {
        response: "**Quarterly Correlation:**\n\n• **Q2 Dip**: tied to \"Late e-filings\" (Audit Trail).\n• **Q3 Dip**: tied to \"Overstatement corrections\" (Variance Report).\n\n📑 **Audit Note**: Each dip traceable to audit exceptions, improves transparency for external auditor walkthroughs.",
        citations: [
          { source: "FY23 Variance Reports Collection", page: "Tax Digital Document Storage" },
          { source: "SNUT Quarterly Collections", page: "Sales & Use Tax Dataset" }
        ]
      }
    };

    if (crossWidgetAnswers[query]) {
      return crossWidgetAnswers[query];
    }
  }

  // Search through each active widget's detailed answers
  for (const widget of activeWidgets) {
    const metadata = getWidgetMetadata(widget.originalId || widget.type);
    if (metadata && metadata.detailedAnswers && metadata.detailedAnswers[query]) {
      return metadata.detailedAnswers[query];
    }
  }
  return null;
};

export const getWidgetForQuery = (query, activeWidgets) => {
  // Find which widget can answer this query
  for (const widget of activeWidgets) {
    const metadata = getWidgetMetadata(widget.originalId || widget.type);
    if (metadata) {
      // Check main example queries
      if (metadata.exampleQueries && metadata.exampleQueries.includes(query)) {
        return metadata;
      }
      // Check extended queries if applicable
      if (metadata.extendedQueries && metadata.extendedQueries.includes(query)) {
        const activeWidgetTypes = activeWidgets.map(w => w.originalId || w.type);
        if (metadata.requiresCrossWidget && metadata.crossWidgetRequirements) {
          const hasRequiredWidgets = metadata.crossWidgetRequirements.every(
            reqType => activeWidgetTypes.includes(reqType)
          );
          if (hasRequiredWidgets) {
            return metadata;
          }
        }
      }
    }
  }
  return null;
};