import React, { useState } from 'react';

const Tooltip = ({ content, children, position = 'top' }) => {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`absolute z-50 ${positions[position]}`}>
          <div className="px-2 py-1 text-xs text-white bg-gray-900 border border-gray-600
                          rounded shadow-lg whitespace-nowrap">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;