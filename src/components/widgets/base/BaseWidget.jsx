import React from 'react';
import WidgetControls from './WidgetControls';

const BaseWidget = ({ title, children, showControls = true }) => {
  return (
    <div className="w-full h-full">
      {showControls && <WidgetControls title={title} />}
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};

export default BaseWidget;