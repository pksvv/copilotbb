import React from 'react';
import BaseWidget from './base/BaseWidget';

const FileContentWidget = ({ title = "Trial Balance FY24" }) => {
  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">📂</span>
          <span className="text-xs text-gray-300 truncate">trial_balance_fy24.json</span>
        </div>
        <div className="space-y-2 w-full">
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-gray-400 truncate flex-1 mr-2">Deferred Tax Expense:</span>
            <span className="text-white font-medium flex-shrink-0">$2.3M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-gray-400 truncate flex-1 mr-2">Current Tax Provision:</span>
            <span className="text-white font-medium flex-shrink-0">$14.2M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-gray-400 truncate flex-1 mr-2">Total Provisions:</span>
            <span className="text-white font-medium flex-shrink-0">$16.5M</span>
          </div>
        </div>
      </div>
    </BaseWidget>
  );
};

export default FileContentWidget;