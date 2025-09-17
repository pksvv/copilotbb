import React from 'react';
import BaseWidget from './base/BaseWidget';

const SalesUseTaxDataWidget = ({ title = "Sales & Use Tax Dataset" }) => {
  return (
    <BaseWidget title={title}>
      <div className="bg-gray-900/50 rounded border border-gray-600 p-3 w-full">
        <div className="flex items-center space-x-2 mb-3 min-w-0">
          <span className="text-xs text-gray-400 flex-shrink-0">🏪</span>
          <span className="text-xs text-gray-300 truncate">Sales & Use Tax Data Product</span>
        </div>
        <div className="space-y-2 w-full">
          <div className="text-xs text-gray-400 mb-2">SNUT Quarterly Collections:</div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">Q1 2024:</span>
            <span className="text-white font-medium flex-shrink-0">$12M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">Q2 2024:</span>
            <span className="text-white font-medium flex-shrink-0">$14M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">Q3 2024:</span>
            <span className="text-white font-medium flex-shrink-0">$11M</span>
          </div>
          <div className="flex justify-between items-center text-xs min-w-0">
            <span className="text-white truncate flex-1 mr-2">Q4 2024:</span>
            <span className="text-white font-medium flex-shrink-0">$15M</span>
          </div>
          <div className="border-t border-gray-600 pt-2 mt-3">
            <div className="flex justify-between items-center text-xs min-w-0">
              <span className="text-[#FF8000] truncate flex-1 mr-2 font-medium">Total:</span>
              <span className="text-[#FF8000] font-bold flex-shrink-0">$52M</span>
            </div>
          </div>
        </div>
      </div>
    </BaseWidget>
  );
};

export default SalesUseTaxDataWidget;