import React, { useState } from 'react';

const Header = ({ currentView, onNavigateHome, onSelectCopilot }) => {
  const [selectedCopilot, setSelectedCopilot] = useState('Global Tax Copilot');
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [comingSoonCopilot, setComingSoonCopilot] = useState('');

  const copilotOptions = [
    { id: 'global-tax', name: 'Global Tax Copilot', comingSoon: false },
    { id: 'recon', name: 'Recon Copilot (Coming Soon)', comingSoon: true },
    { id: 'accounting', name: 'Accounting Copilot (Coming Soon)', comingSoon: true },
    { id: 'gsm', name: 'GSM Copilot (Coming Soon)', comingSoon: true }
  ];

  const handleCopilotChange = (e) => {
    const selectedId = e.target.value;
    const selectedOption = copilotOptions.find(opt => opt.id === selectedId);

    if (selectedOption.comingSoon) {
      setComingSoonCopilot(selectedOption.name);
      setShowComingSoonModal(true);
    } else {
      setSelectedCopilot(selectedOption.name);
      onSelectCopilot(selectedId);
    }
  };

  const closeModal = () => {
    setShowComingSoonModal(false);
    setComingSoonCopilot('');
  };

  return (
    <>
      <header className="bg-[#151518] border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onNavigateHome}
              className="text-xl font-semibold text-white hover:text-[#FF8000] transition-colors"
            >
              Finance Copilot Studio
            </button>

            {currentView !== 'home' && (
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">|</span>
                <select
                  value={selectedCopilot === 'Global Tax Copilot' ? 'global-tax' : selectedCopilot}
                  onChange={handleCopilotChange}
                  className="text-sm bg-gray-800 text-gray-200 border border-gray-600 rounded-md px-3 py-1 focus:outline-none focus:border-[#FF8000] transition-colors"
                >
                  {copilotOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {currentView !== 'home' && (
              <button
                onClick={onNavigateHome}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">Home</span>
              </button>
            )}
            <button className="text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">Admin Panel</span>
            </button>
            <div className="w-8 h-8 bg-[#FF8000] rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-600">
            <div className="text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {comingSoonCopilot}
              </h3>
              <p className="text-gray-300 mb-6">
                This copilot will be available in future releases.
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
    </>
  );
};

export default Header;