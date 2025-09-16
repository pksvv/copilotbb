import React from 'react';

const CitationDisplay = ({ citations = [] }) => {
  if (!citations.length) return null;

  return (
    <div className="mt-3 p-2 bg-gray-900/50 rounded border-l-2 border-[#FF8000]">
      <h5 className="text-xs font-medium text-gray-400 mb-1">Sources:</h5>
      <div className="space-y-1">
        {citations.map((citation, index) => (
          <div key={index} className="text-xs text-gray-300">
            <span className="text-[#FF8000]">[{index + 1}]</span>
            <span className="ml-1">{citation.source}</span>
            {citation.page && (
              <span className="text-gray-500"> - Page {citation.page}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitationDisplay;