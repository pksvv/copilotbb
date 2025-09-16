import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Canvas from '../workspace/Canvas';
import ChatInterface from '../chat/ChatInterface';
import ErrorBoundary from './ErrorBoundary';
import { ChatProvider } from '../../shared/context/ChatContext';

const MainApplication = () => {
  return (
    <ErrorBoundary>
      <ChatProvider>
        <div className="min-h-screen bg-[#151518] text-white flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 flex">
              <div className="flex-1 p-4">
                <Canvas />
              </div>
              <div className="w-96 border-l border-gray-700">
                <ChatInterface />
              </div>
            </main>
          </div>
        </div>
      </ChatProvider>
    </ErrorBoundary>
  );
};

export default MainApplication;