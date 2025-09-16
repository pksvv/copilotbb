import React, { useState } from 'react';
import { getWidgetsByCategory, getWidgetMetadata } from '../../content/config/widgetMetadata';

const Sidebar = () => {
  const [hoveredWidget, setHoveredWidget] = useState(null);
  const widgetCategories = getWidgetsByCategory();

  const handleDragStart = (e, widget) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(widget));
  };

  return (
    <aside className="w-80 bg-[#1a1a1d] border-r border-gray-700 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Widget Library</h2>
        <p className="text-sm text-gray-400">Drag widgets to workspace</p>
      </div>

      <div className="space-y-6">
        {Object.entries(widgetCategories).map(([categoryName, widgets]) => (
          <div key={categoryName}>
            <h3 className="text-sm font-medium text-gray-300 mb-3">
              {categoryName}
            </h3>
            <div className="space-y-2">
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="relative p-3 bg-gray-800/50 rounded-lg border border-gray-600
                             hover:border-[#FF8000] hover:bg-gray-800/70
                             cursor-grab active:cursor-grabbing transition-all"
                  draggable
                  onDragStart={(e) => handleDragStart(e, widget)}
                  onMouseEnter={() => setHoveredWidget(widget.id)}
                  onMouseLeave={() => setHoveredWidget(null)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#FF8000]/20 rounded flex items-center justify-center">
                      <span className="text-[#FF8000] text-xs">{widget.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {widget.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {widget.type}
                      </div>
                    </div>
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredWidget === widget.id && (
                    <div className="absolute left-full top-0 ml-2 w-72 z-50
                                    bg-slate-800 text-slate-200 p-3 rounded shadow-lg
                                    border border-gray-600">
                      <div className="text-sm font-medium text-white mb-2">
                        {widget.name}
                      </div>
                      <div className="text-xs text-gray-300 mb-3">
                        {widget.description}
                      </div>
                      <div className="text-xs text-gray-400 mb-1">Example queries:</div>
                      <div className="space-y-1">
                        {widget.exampleQueries.map((query, index) => (
                          <div key={index} className="text-xs text-[#FF8000]">
                            • {query}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;