import React, { useContext } from 'react';
import { ChatContext } from '../../shared/context/ChatContext';

const QuerySuggestions = ({ onQuerySelect }) => {
  const { suggestedQueries, availableWidgets } = useContext(ChatContext);

  // Fallback queries when no widgets are active
  const fallbackQueries = [
    "What can this copilot help with?",
    "How do I add widgets to get started?"
  ];

  const displayQueries = suggestedQueries.length > 0 ? suggestedQueries : fallbackQueries;

  return (
    <div className="p-4 border-b border-gray-700">
      <h4 className="text-xs font-medium text-gray-400 mb-2">
        {suggestedQueries.length > 0
          ? `Suggested Queries (${availableWidgets.length} widgets)`
          : 'Suggested Queries'
        }
      </h4>
      <div className="flex flex-wrap gap-2">
        {displayQueries.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onQuerySelect(suggestion)}
            className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded
                       border border-gray-600 hover:border-[#FF8000] hover:text-white
                       hover:bg-gray-700 transition-all"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuerySuggestions;