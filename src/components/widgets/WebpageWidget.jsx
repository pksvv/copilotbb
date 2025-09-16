import React from 'react';
import BaseWidget from './base/BaseWidget';

const WebpageWidget = ({ title = "OECD DST Tracker" }) => {
  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">🌐</span>
          <span className="text-xs text-gray-300 truncate">oecd.org/tax/dst-tracker</span>
        </div>
        <div className="min-h-[120px] bg-gray-800 rounded flex items-center justify-center w-full">
          <div className="text-center text-gray-500 p-4">
            <div className="text-2xl mb-1">🌍</div>
            <p className="text-xs mb-1">DST Tracker Preview</p>
            <p className="text-xs break-words">France, Italy, Spain active</p>
          </div>
        </div>
      </div>
    </BaseWidget>
  );
};

export default WebpageWidget;