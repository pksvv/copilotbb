import React from 'react';

const QuerySuggestions = ({ onQuerySelect }) => {
  const suggestions = [
    "What are tax provisions for FY24?",
    "Which countries have DST rules?",
    "Show EUR/INR exchange rate",
    "GST threshold in India?"
  ];

  return (
    <div className="p-4 border-b border-gray-700">
      <h4 className="text-xs font-medium text-gray-400 mb-2">
        Suggested Queries
      </h4>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
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