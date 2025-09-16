import React, { useState } from 'react';
import BaseWidget from './base/BaseWidget';

const ApiIntegrationWidget = ({ title = "RSS Exchange Rates" }) => {
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(null);

  const fetchRate = () => {
    setLoading(true);
    setTimeout(() => {
      setRate("EUR/INR = 89.40");
      setLoading(false);
    }, 1500);
  };

  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">🔌</span>
          <span className="text-xs text-gray-300 truncate">RSS API Connection</span>
        </div>
        <div className="space-y-3 w-full">
          <button
            onClick={fetchRate}
            disabled={loading}
            className="w-full py-2 px-3 bg-[#FF8000] text-white text-xs rounded
                       hover:bg-[#FF8000]/80 disabled:bg-gray-600 transition-all"
          >
            {loading ? "Fetching Rate..." : "Get Exchange Rate"}
          </button>
          {rate && (
            <div className="text-center text-white text-sm font-medium break-words p-2 bg-gray-800/50 rounded">
              {rate}
            </div>
          )}
        </div>
      </div>
    </BaseWidget>
  );
};

export default ApiIntegrationWidget;