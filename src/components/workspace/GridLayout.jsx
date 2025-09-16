import React, { useState, useContext } from 'react';
import WidgetContainer from './WidgetContainer';
import { ChatContext } from '../../shared/context/ChatContext';

const GridLayout = () => {
  const [widgets, setWidgets] = useState([]);
  const { addWidget, removeWidget: removeChatWidget } = useContext(ChatContext);

  const handleDrop = (e) => {
    e.preventDefault();
    const widgetData = JSON.parse(e.dataTransfer.getData('text/plain'));

    const newWidget = {
      id: `${widgetData.type}-${Date.now()}`,
      type: widgetData.type,
      title: widgetData.title,
      icon: widgetData.icon,
      originalId: widgetData.id,
      isLoaded: true
    };

    setWidgets([...widgets, newWidget]);
    addWidget(newWidget);
  };

  const removeWidget = (widgetId) => {
    setWidgets(widgets.filter(w => w.id !== widgetId));
    removeChatWidget(widgetId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative w-full h-full min-h-96 bg-gray-900/20 rounded-lg
                 border-2 border-dashed border-gray-600 overflow-hidden"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {widgets.length === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-sm px-4">Drop widgets here to create your dashboard</p>
          </div>
        </div>
      ) : (
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 auto-rows-min w-full">
            {widgets.map((widget) => (
              <div key={widget.id} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <WidgetContainer
                  widget={widget}
                  onRemove={() => removeWidget(widget.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GridLayout;