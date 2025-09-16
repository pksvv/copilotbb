import React from 'react';
import CitationDisplay from './CitationDisplay';

const MessageList = ({ messages = [] }) => {
  const getMessageIcon = (type) => {
    switch (type) {
      case 'user': return '👤';
      case 'copilot': return '🤖';
      case 'system': return '💡';
      default: return '💬';
    }
  };

  const getMessageStyle = (type) => {
    switch (type) {
      case 'user': return 'bg-blue-800/50 border-blue-600 ml-8';
      case 'copilot': return 'bg-gray-800/50 border-gray-600 mr-8';
      case 'system': return 'bg-orange-800/30 border-orange-600 mx-4';
      default: return 'bg-gray-800/50 border-gray-600';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-[#FF8000] rounded-full flex items-center justify-center">
              <span className="text-xs text-white">{getMessageIcon(message.type)}</span>
            </div>
            <span className="text-xs text-gray-400 capitalize">
              {message.type} • {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
          <div className={`p-3 rounded-lg border ${getMessageStyle(message.type)}`}>
            <div className="text-sm text-white whitespace-pre-wrap"
                 dangerouslySetInnerHTML={{ __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#FF8000]">$1</strong>') }} />
            {message.citations && <CitationDisplay citations={message.citations} />}
          </div>
        </div>
      ))}

      {messages.length === 1 && (
        <div className="text-center text-gray-500 text-xs mt-8">
          Start a conversation by typing a question or clicking a suggested query
        </div>
      )}
    </div>
  );
};

export default MessageList;