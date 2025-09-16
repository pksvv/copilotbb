import trialBalanceData from '../../content/mockData/trial_balance.json';
import faqData from '../../content/mockData/faq.json';
import rssData from '../../content/mockData/rss_stub.json';
import dstData from '../../content/mockData/dst_dataset.json';

export const generateMockResponse = (query, availableWidgets = []) => {
  const widgetTypes = availableWidgets.map(w => w.type);
  const queryLower = query.toLowerCase();

  if (queryLower.includes('tax provision') || queryLower.includes('fy24')) {
    if (widgetTypes.includes('file')) {
      return {
        response: `Based on Trial Balance FY24 data: **Deferred Tax Expense: $${(trialBalanceData.tax_provisions.deferred_tax_expense.amount / 1000000).toFixed(1)}M**, Current Tax Provision: $${(trialBalanceData.tax_provisions.current_tax_provision.amount / 1000000).toFixed(1)}M. Total provisions: **$${(trialBalanceData.tax_provisions.total_provisions.amount / 1000000).toFixed(1)}M**.`,
        citations: [{ source: 'Trial Balance FY24', page: 'Tax Provisions Section' }]
      };
    }
    return {
      response: "To get tax provision data, please add the Trial Balance FY24 widget to your workspace.",
      citations: []
    };
  }

  if (queryLower.includes('dst') || queryLower.includes('digital services')) {
    if (widgetTypes.includes('webpage')) {
      return {
        response: `**DST applies to digital revenues > €750M** globally. Active countries: 🇫🇷 France (3%), 🇮🇹 Italy (3%), 🇪🇸 Spain (3%), 🇬🇧 UK (2%). Revenue threshold varies by jurisdiction.`,
        citations: [{ source: 'OECD DST Tracker', page: 'oecd.org/tax/dst-tracker' }]
      };
    }
    if (widgetTypes.includes('dataProduct')) {
      const topCountry = dstData.summary.highest_collection;
      return {
        response: `**FY23 DST Collections**: 🇫🇷 France: $120M, 🇮🇹 Italy: $95M, 🇪🇸 Spain: $88M, 🇬🇧 UK: $156M. **Highest collection**: ${topCountry.country} ($${topCountry.amount_usd / 1000000}M).`,
        citations: [{ source: 'DST Dataset', page: 'Tax Data Marketplace' }]
      };
    }
    return {
      response: "Add the OECD DST Tracker or DST Dataset widget to get Digital Services Tax information.",
      citations: []
    };
  }

  if (queryLower.includes('exchange rate') || queryLower.includes('eur/inr')) {
    if (widgetTypes.includes('api')) {
      return {
        response: `**EUR/INR = ${rssData.derived_rates.EUR_INR.rate}** (from RSS API, ${new Date(rssData.exchange_rates.rates.EUR.timestamp).toLocaleDateString()}). Base rates: EUR/USD = ${rssData.exchange_rates.rates.EUR.rate}, USD/INR = ${rssData.exchange_rates.rates.INR.rate}.`,
        citations: [{ source: 'RSS Exchange Rate System', page: 'Live API Feed' }]
      };
    }
    return {
      response: "Add the RSS Exchange Rates widget to get live currency data.",
      citations: []
    };
  }

  if (queryLower.includes('gst') || queryLower.includes('threshold') || queryLower.includes('india')) {
    if (widgetTypes.includes('faq')) {
      const gstFaq = faqData.faq_categories.find(cat => cat.category === 'India GST');
      const thresholdQuestion = gstFaq?.questions.find(q => q.question.toLowerCase().includes('threshold'));
      if (thresholdQuestion) {
        return {
          response: `**${thresholdQuestion.answer}**`,
          citations: [{ source: thresholdQuestion.source, page: 'FAQ Database' }]
        };
      }
    }
    return {
      response: "Add the Tax FAQ widget to access India GST and Transfer Pricing information.",
      citations: []
    };
  }

  return {
    response: "I can help you analyze data from your workspace widgets. Try adding some widgets first, or ask about tax provisions, DST rules, exchange rates, or GST thresholds.",
    citations: []
  };
};