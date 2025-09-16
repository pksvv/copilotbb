import React, { createContext, useState } from 'react';
import { generateMockResponse } from '../utils/mockResponses';
import { getAllWidgetQueries } from '../../content/config/widgetMetadata';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'system',
      content: 'Welcome to the Tax Copilot! Add widgets to your workspace to get started.',
      timestamp: new Date()
    }
  ]);

  const [availableWidgets, setAvailableWidgets] = useState([]);
  const [suggestedQueries, setSuggestedQueries] = useState([]);

  const addMessage = (message) => {
    const newMessage = {
      ...message,
      id: Date.now()
    };

    if (message.type === 'user') {
      setMessages(prev => [...prev, newMessage]);
    } else if (message.type === 'copilot') {
      const mockResult = generateMockResponse(message.content, availableWidgets);
      const copilotMessage = {
        ...newMessage,
        content: mockResult.response,
        citations: mockResult.citations
      };
      setMessages(prev => [...prev, copilotMessage]);
    } else {
      setMessages(prev => [...prev, newMessage]);
    }
  };

  const updateSuggestedQueries = (widgets) => {
    const queries = getAllWidgetQueries(widgets);
    setSuggestedQueries(queries);
  };

  const addWidget = (widget) => {
    setAvailableWidgets(prev => {
      const exists = prev.find(w => w.id === widget.id);
      if (exists) return prev;
      const newWidgets = [...prev, widget];
      updateSuggestedQueries(newWidgets);
      return newWidgets;
    });
  };

  const removeWidget = (widgetId) => {
    setAvailableWidgets(prev => {
      const newWidgets = prev.filter(w => w.id !== widgetId);
      updateSuggestedQueries(newWidgets);
      return newWidgets;
    });
  };

  return (
    <ChatContext.Provider value={{
      messages,
      addMessage,
      availableWidgets,
      suggestedQueries,
      addWidget,
      removeWidget
    }}>
      {children}
    </ChatContext.Provider>
  );
};