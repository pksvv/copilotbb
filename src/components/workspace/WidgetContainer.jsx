import React from 'react';
import WebpageWidget from '../widgets/WebpageWidget';
import FileContentWidget from '../widgets/FileContentWidget';
import FaqWidget from '../widgets/FaqWidget';
import ApiIntegrationWidget from '../widgets/ApiIntegrationWidget';
import DataProductWidget from '../widgets/DataProductWidget';
import DocumentStorageWidget from '../widgets/DocumentStorageWidget';
import SalesUseTaxDataWidget from '../widgets/SalesUseTaxDataWidget';

const WidgetContainer = ({ widget, onRemove }) => {
  const getWidgetComponent = () => {
    switch (widget.type) {
      case 'webpage':
        return <WebpageWidget {...widget} />;
      case 'file':
        return <FileContentWidget {...widget} />;
      case 'faq':
        return <FaqWidget {...widget} />;
      case 'api':
        return <ApiIntegrationWidget {...widget} />;
      case 'dataProduct':
        return <DataProductWidget {...widget} />;
      case 'documents':
        return <DocumentStorageWidget {...widget} />;
      case 'salesUseTaxData':
        return <SalesUseTaxDataWidget {...widget} />;
      default:
        return <div>Unknown widget type</div>;
    }
  };

  return (
    <div className="flex flex-col w-full h-auto min-w-[280px] max-w-full
                    bg-gray-800/50 rounded-lg border border-gray-600 p-4
                    hover:border-[#FF8000] transition-all">
      <div className="flex items-center justify-between mb-3 min-h-[24px]">
        <div className="flex items-center space-x-2 flex-1 min-w-0">
          <span className="text-sm flex-shrink-0">{widget.icon}</span>
          <h3 className="text-sm font-medium text-white truncate">{widget.title}</h3>
        </div>
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-white text-xs transition-colors flex-shrink-0 ml-2"
        >
          ✕
        </button>
      </div>
      <div className="bg-gray-900/30 rounded p-2 mb-3 flex-shrink-0">
        <span className="text-xs text-green-400">✓ {widget.type} loaded</span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        {getWidgetComponent()}
      </div>
    </div>
  );
};

export default WidgetContainer;