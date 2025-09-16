import React from 'react';
import BaseWidget from './base/BaseWidget';

const DocumentStorageWidget = ({ title = "Audit Documents" }) => {
  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">🗂️</span>
          <span className="text-xs text-gray-300 truncate">Sales & Use Tax + Docs</span>
        </div>
        <div className="space-y-2 w-full">
          <div className="text-xs text-gray-400 mb-2">Recent Documents:</div>
          <div className="text-xs text-white break-words">• SNUT-23 Audit Trail</div>
          <div className="text-xs text-white break-words">• Variance Report ($1.2M)</div>
          <div className="text-xs text-white break-words">• FY23 Returns Filing</div>
          <div className="text-xs text-gray-400 mt-2 break-words">
            Structured + Unstructured Data
          </div>
        </div>
      </div>
    </BaseWidget>
  );
};

export default DocumentStorageWidget;