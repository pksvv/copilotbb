import React, { useState, useContext } from 'react';
import MessageList from './MessageList';
import QuerySuggestions from './QuerySuggestions';
import { ChatContext } from '../../shared/context/ChatContext';

const ChatInterface = () => {
  const [inputValue, setInputValue] = useState('');
  const { availableWidgets } = useContext(ChatContext);

  // Chat session management
  const [chatSessions, setChatSessions] = useState([
    {
      id: 1,
      name: 'Chat 1',
      messages: [
        {
          id: 1,
          type: 'system',
          content: 'Welcome to the Tax Copilot! Add widgets to your workspace to get started.',
          timestamp: new Date()
        }
      ]
    }
  ]);
  const [activeSessionId, setActiveSessionId] = useState(1);

  const getActiveSession = () => chatSessions.find(s => s.id === activeSessionId);

  const handleSendMessage = (query = inputValue) => {
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: query,
      timestamp: new Date()
    };

    // Add user message to active session
    setChatSessions(prev => prev.map(session =>
      session.id === activeSessionId
        ? { ...session, messages: [...session.messages, userMessage] }
        : session
    ));

    setInputValue('');

    // Generate copilot response
    setTimeout(() => {
      import('../../shared/utils/mockResponses').then(({ generateMockResponse }) => {
        const mockResult = generateMockResponse(query, availableWidgets);
        const copilotMessage = {
          id: Date.now() + 1,
          type: 'copilot',
          content: mockResult.response,
          citations: mockResult.citations,
          timestamp: new Date()
        };

        setChatSessions(prev => prev.map(session =>
          session.id === activeSessionId
            ? { ...session, messages: [...session.messages, copilotMessage] }
            : session
        ));
      });
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const createNewSession = () => {
    const newSessionId = Math.max(...chatSessions.map(s => s.id)) + 1;
    const newSession = {
      id: newSessionId,
      name: `Chat ${newSessionId}`,
      messages: [
        {
          id: Date.now(),
          type: 'system',
          content: 'Welcome to the Tax Copilot! Add widgets to your workspace to get started.',
          timestamp: new Date()
        }
      ]
    };

    setChatSessions(prev => [...prev, newSession]);
    setActiveSessionId(newSessionId);
  };

  const closeSession = (sessionId) => {
    if (chatSessions.length === 1) return; // Don't close if it's the last session

    setChatSessions(prev => prev.filter(s => s.id !== sessionId));

    if (activeSessionId === sessionId) {
      const remainingSessions = chatSessions.filter(s => s.id !== sessionId);
      setActiveSessionId(remainingSessions[0].id);
    }
  };

  const clearActiveSession = () => {
    setChatSessions(prev => prev.map(session =>
      session.id === activeSessionId
        ? {
            ...session,
            messages: [
              {
                id: Date.now(),
                type: 'system',
                content: 'Chat cleared. Welcome back to the Tax Copilot!',
                timestamp: new Date()
              }
            ]
          }
        : session
    ));
  };

  const activeSession = getActiveSession();

  return (
    <div className="h-full flex flex-col bg-[#1a1a1d]">
      {/* Chat Header with Sessions */}
      <div className="border-b border-gray-700">
        <div className="flex items-center justify-between p-4 pb-2">
          <h2 className="text-lg font-semibold text-white">Tax Copilot</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearActiveSession}
              className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-all"
              title="Clear Chat"
            >
              🗑️
            </button>
            <button
              onClick={createNewSession}
              className="px-2 py-1 text-xs bg-[#FF8000] text-white rounded hover:bg-[#FF8000]/80 transition-all"
              title="New Chat"
            >
              + New
            </button>
          </div>
        </div>

        {/* Chat Tabs */}
        <div className="flex items-center px-4 pb-2 overflow-x-auto">
          <div className="flex space-x-1 min-w-max">
            {chatSessions.map((session) => (
              <div
                key={session.id}
                className={`flex items-center px-2 py-1 rounded-t text-xs transition-all ${
                  session.id === activeSessionId
                    ? 'bg-gray-700 text-white border-b-2 border-[#FF8000]'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <button
                  onClick={() => setActiveSessionId(session.id)}
                  className="mr-1"
                >
                  {session.name}
                </button>
                {chatSessions.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeSession(session.id);
                    }}
                    className="text-gray-500 hover:text-red-400 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pb-2">
          <p className="text-sm text-gray-400">
            Ask questions about your data ({availableWidgets.length} widgets active)
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <MessageList messages={activeSession?.messages || []} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-700">
        <QuerySuggestions onQuerySelect={handleSendMessage} />
        <div className="p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about tax provisions, DST rules, exchange rates..."
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2
                         text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8000]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="px-4 py-2 bg-[#FF8000] text-white rounded-lg hover:bg-[#FF8000]/80"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;