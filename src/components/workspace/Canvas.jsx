import React from 'react';
import GridLayout from './GridLayout';

const Canvas = () => {
  return (
    <div className="min-h-screen bg-[#151518] rounded-lg border border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700 flex-shrink-0">
        <h2 className="text-lg font-semibold text-white">Workspace Canvas</h2>
        <p className="text-sm text-gray-400">
          Drag widgets from the sidebar to start building your dashboard
        </p>
      </div>
      <div className="flex-1">
        <GridLayout />
      </div>
    </div>
  );
};

export default Canvas;