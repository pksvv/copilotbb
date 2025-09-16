import React from 'react';
import BaseWidget from './base/BaseWidget';

const DataProductWidget = ({ title = "DST Dataset" }) => {
  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">📊</span>
          <span className="text-xs text-gray-300 truncate">Tax Data Marketplace</span>
        </div>
        <div className="space-y-2 w-full">
          <div className="text-xs text-gray-400 mb-2">FY23 Collections:</div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">🇫🇷 France:</span>
            <span className="text-white font-medium flex-shrink-0">$120M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">🇮🇹 Italy:</span>
            <span className="text-white font-medium flex-shrink-0">$95M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">🇪🇸 Spain:</span>
            <span className="text-white font-medium flex-shrink-0">$88M</span>
          </div>
        </div>
      </div>
    </BaseWidget>
  );
};

export default DataProductWidget;