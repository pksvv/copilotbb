import React from 'react';

const Sidebar = () => {
  const widgetCategories = [
    {
      name: 'Tax Widgets',
      widgets: [
        { id: 'webpage', title: 'OECD DST Tracker', type: 'webpage', icon: '🌍' },
        { id: 'file', title: 'Trial Balance FY24', type: 'file', icon: '📂' },
        { id: 'faq', title: 'Tax FAQ', type: 'faq', icon: '❓' }
      ]
    },
    {
      name: 'Integration Widgets',
      widgets: [
        { id: 'api', title: 'RSS Exchange Rates', type: 'api', icon: '🔌' },
        { id: 'dataProduct', title: 'DST Dataset', type: 'dataProduct', icon: '📊' },
        { id: 'documents', title: 'Audit Documents', type: 'documents', icon: '🗂️' }
      ]
    }
  ];

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
        {widgetCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-medium text-gray-300 mb-3">
              {category.name}
            </h3>
            <div className="space-y-2">
              {category.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-600
                             hover:border-[#FF8000] hover:bg-gray-800/70
                             cursor-grab active:cursor-grabbing transition-all"
                  draggable
                  onDragStart={(e) => handleDragStart(e, widget)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#FF8000]/20 rounded flex items-center justify-center">
                      <span className="text-[#FF8000] text-xs">{widget.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {widget.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {widget.type}
                      </div>
                    </div>
                  </div>
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