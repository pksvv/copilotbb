import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Canvas from '../workspace/Canvas';
import ChatInterface from '../chat/ChatInterface';
import HeroLanding from './HeroLanding';
import ErrorBoundary from './ErrorBoundary';
import { ChatProvider } from '../../shared/context/ChatContext';

const MainApplication = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'global-tax', 'coming-soon'
  const [selectedCopilot, setSelectedCopilot] = useState('');

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedCopilot('');
  };

  const handleSelectCopilot = (copilotId) => {
    if (copilotId === 'global-tax') {
      setCurrentView('global-tax');
      setSelectedCopilot('Global Tax Copilot');
    } else {
      // For coming soon copilots
      setCurrentView('coming-soon');
      setSelectedCopilot(copilotId);
    }
  };

  const renderComingSoonPage = () => {
    const copilotNames = {
      'recon': 'Recon Copilot',
      'accounting': 'Accounting Copilot',
      'gsm': 'GSM Copilot'
    };

    return (
      <div className="min-h-screen bg-[#151518] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {copilotNames[selectedCopilot]} – Coming Soon
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This copilot will be available in future releases.
          </p>
          <button
            onClick={handleNavigateHome}
            className="px-6 py-3 bg-[#FF8000] text-white rounded-lg hover:bg-[#FF8000]/80 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  };

  const renderGlobalTaxCopilot = () => (
    <ErrorBoundary>
      <ChatProvider>
        <div className="min-h-screen bg-[#151518] text-white flex flex-col">
          <Header
            currentView={currentView}
            onNavigateHome={handleNavigateHome}
            onSelectCopilot={handleSelectCopilot}
          />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 flex min-h-screen">
              <div className="flex-1 p-4">
                <Canvas />
              </div>
              <div className="w-96 border-l border-gray-700 min-h-screen">
                <ChatInterface copilotName="Global Tax Copilot" />
              </div>
            </main>
          </div>
        </div>
      </ChatProvider>
    </ErrorBoundary>
  );

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-[#151518] text-white flex flex-col">
        <Header
          currentView={currentView}
          onNavigateHome={handleNavigateHome}
          onSelectCopilot={handleSelectCopilot}
        />
        <HeroLanding onSelectCopilot={handleSelectCopilot} />
      </div>
    );
  }

  if (currentView === 'global-tax') {
    return renderGlobalTaxCopilot();
  }

  if (currentView === 'coming-soon') {
    return (
      <div className="min-h-screen bg-[#151518] text-white flex flex-col">
        <Header
          currentView={currentView}
          onNavigateHome={handleNavigateHome}
          onSelectCopilot={handleSelectCopilot}
        />
        {renderComingSoonPage()}
      </div>
    );
  }

  return null;
};

export default MainApplication;