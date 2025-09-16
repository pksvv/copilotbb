import React from 'react';

const WidgetControls = ({ title }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-600">
      <span className="text-xs font-medium text-gray-300">{title}</span>
      <div className="flex items-center space-x-1">
        <button className="text-gray-400 hover:text-white text-xs px-1">📊</button>
        <button className="text-gray-400 hover:text-white text-xs px-1">📋</button>
        <button className="text-gray-400 hover:text-white text-xs px-1">⚙️</button>
      </div>
    </div>
  );
};

export default WidgetControls;