import React, { useState } from 'react';

const HeroLanding = ({ onSelectCopilot }) => {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [selectedComingSoonCopilot, setSelectedComingSoonCopilot] = useState('');
  const [selectedCopilotForContext, setSelectedCopilotForContext] = useState('global-tax');

  const copilots = [
    {
      id: 'global-tax',
      title: 'Global Tax Copilot',
      icon: '🌍',
      description: 'Analyze tax provisions, DST rules, audit variances, and international regulation compliance in one place.',
      isActive: true,
      comingSoon: false
    },
    {
      id: 'recon',
      title: 'Recon Copilot',
      icon: '📊',
      description: 'Automate reconciliations across ledgers, bank statements, and supplier data—detect anomalies and speed up close-processes.',
      isActive: false,
      comingSoon: true
    },
    {
      id: 'accounting',
      title: 'Accounting Copilot',
      icon: '📋',
      description: 'Streamline financial reporting, month-end close, journal entries, and ledger housekeeping tasks with smart AI assistance.',
      isActive: false,
      comingSoon: true
    },
    {
      id: 'gsm',
      title: 'GSM Copilot',
      icon: '⚙️',
      description: 'Gain strategic market insights: forecast trends, monitor macroeconomic signals, and align your finance strategy globally.',
      isActive: false,
      comingSoon: true
    }
  ];

  const copilotContexts = {
    'global-tax': {
      header: '🌍 Global Tax Copilot',
      intro: 'AI copilots embedded into finance and tax workflows let business users interact with complex data in plain language.',
      features: [
        'Auto-generate variance commentary on provision & reconciliation files.',
        'Draft compliance narratives for OECD DST, Pillar-2, Transfer Pricing.',
        'Answer policy & data queries (GST thresholds, DST collections, etc.).',
        'Blend structured data (trial balances, reconciliations) with unstructured docs (audit trails, variance reports).'
      ],
      outcome: 'Tax and finance teams spend less time reconciling and extracting data—and more time driving global compliance, planning, and strategy.'
    },
    'recon': {
      header: '📊 Recon Copilot (Coming Soon)',
      intro: 'Reconciliation copilots will automate high-volume matching and exception handling.',
      features: [
        'Match ledgers, sub-ledgers, and external feeds.',
        'Detect breaks early with AI-driven variance narratives.',
        'Auto-generate exception workflows with traceability.',
        'Provide real-time reconciliation dashboards.'
      ],
      outcome: 'Cut cycle time by 70% and free controllers from manual matching.'
    },
    'accounting': {
      header: '📋 Accounting Copilot (Coming Soon)',
      intro: 'Accounting copilots will streamline controllership and close cycle processes.',
      features: [
        'Draft journal entries with contextual explanations.',
        'Generate close cycle variance narratives.',
        'Automate accounting policy checks on adjustments.',
        'Support proactive insight delivery instead of manual reporting.'
      ],
      outcome: 'Controllers shift from reactive reconciliations to proactive decision support.'
    },
    'gsm': {
      header: '⚙️ GSM Copilot (Coming Soon)',
      intro: 'Procurement copilots simplify supplier management and compliance.',
      features: [
        'Review contracts with AI-driven summaries.',
        'Validate supplier rates against policy.',
        'Flag exceptions in procurement workflows.',
        'Assist GSM teams in navigating payment terms & compliance checks.'
      ],
      outcome: 'Faster supplier decisions and improved contract compliance with less manual effort.'
    }
  };

  const handleCopilotClick = (copilot) => {
    setSelectedCopilotForContext(copilot.id);

    if (copilot.comingSoon) {
      setSelectedComingSoonCopilot(copilot.title);
      setShowComingSoonModal(true);
    } else if (copilot.id === 'global-tax') {
      // Show context first, then navigate after a brief delay to allow context to display
      setTimeout(() => {
        onSelectCopilot('global-tax');
      }, 100);
    }
  };

  const renderCopilotContext = () => {
    if (!selectedCopilotForContext || !copilotContexts[selectedCopilotForContext]) {
      return null;
    }

    const context = copilotContexts[selectedCopilotForContext];

    return (
      <div className="mt-12 max-w-4xl mx-auto transition-all duration-500 ease-in-out">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 text-center">
            {context.header}
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
            {context.intro}
          </p>

          <div className="space-y-3 mb-6">
            {context.features.map((feature, index) => (
              <p key={index} className="text-gray-300 flex items-start">
                <span className="text-[#FF8000] mr-2 flex-shrink-0">•</span>
                <span>{feature}</span>
              </p>
            ))}
          </div>

          <div className="p-4 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20">
            <p className="text-lg text-center">
              <span className="text-2xl mr-2">💡</span>
              <strong className="text-yellow-300">Outcome:</strong>{' '}
              <span className="text-gray-200">{context.outcome}</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setShowComingSoonModal(false);
    setSelectedComingSoonCopilot('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-8 relative">
      {/* Contact Info - Top Right */}
      <div className="absolute top-6 right-6 text-right">
        <div className="text-sm font-medium bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Vipul Gaur
        </div>
        <div className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
          vipul.gaur@aexp.com
        </div>
      </div>

      <div className="max-w-6xl w-full text-center">
        {/* Hero Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Finance Copilot Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Select your copilot type to get started
          </p>
        </div>

        {/* Copilot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copilots.map((copilot) => (
            <div
              key={copilot.id}
              onClick={() => handleCopilotClick(copilot)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                ${selectedCopilotForContext === copilot.id
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 border-purple-400 shadow-xl transform scale-105'
                  : copilot.isActive && selectedCopilotForContext !== copilot.id
                  ? 'bg-gradient-to-br from-indigo-600/70 to-purple-600/70 border-purple-400/70 hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 shadow-lg'
                  : copilot.comingSoon
                  ? 'bg-gray-800/50 border-gray-600 hover:border-gray-500 opacity-75'
                  : 'bg-gray-800/70 border-gray-600 hover:border-gray-500'
                }
              `}
            >
              {/* Coming Soon Badge */}
              {copilot.comingSoon && (
                <div className="absolute top-2 right-2 bg-yellow-600 text-yellow-100 text-xs px-2 py-1 rounded-full font-medium">
                  Coming Soon
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">
                {copilot.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-semibold mb-3 ${
                selectedCopilotForContext === copilot.id || copilot.isActive ? 'text-white' : 'text-gray-300'
              }`}>
                {copilot.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${
                selectedCopilotForContext === copilot.id || copilot.isActive ? 'text-gray-200' : 'text-gray-400'
              }`}>
                {copilot.description}
              </p>

              {/* Active Indicator */}
              {selectedCopilotForContext === copilot.id && (
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Copilot Context */}
        {renderCopilotContext()}
      </div>

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-600">
            <div className="text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {selectedComingSoonCopilot}
              </h3>
              <p className="text-gray-300 mb-6">
                {selectedComingSoonCopilot} will be available in future releases.
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-[#FF8000] text-white rounded-lg hover:bg-[#FF8000]/80 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroLanding;