import React from 'react';
import BaseWidget from './base/BaseWidget';

const FaqWidget = ({ title = "Tax FAQ" }) => {
  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">❓</span>
          <span className="text-xs text-gray-300 truncate">Transfer Pricing + GST Rules</span>
        </div>
        <div className="space-y-2 w-full">
          <div className="text-xs text-gray-400 mb-2">Recent Q&As:</div>
          <div className="text-xs text-white break-words">• GST threshold: INR 40L (goods)</div>
          <div className="text-xs text-white break-words">• TP documentation required</div>
          <div className="text-xs text-white break-words">• Service threshold: INR 20L</div>
          <button className="text-xs text-[#FF8000] hover:underline mt-2 truncate w-full text-left">
            Browse all FAQs →
          </button>
        </div>
      </div>
    </BaseWidget>
  );
};

export default FaqWidget;