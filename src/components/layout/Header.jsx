import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#151518] border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white">
            Finance GenAI Strategy Portal
          </h1>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
            Global Tax Copilot
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">Admin Panel</span>
          </button>
          <div className="w-8 h-8 bg-[#FF8000] rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;