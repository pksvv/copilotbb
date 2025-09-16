import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const types = {
    success: 'bg-green-600 border-green-500',
    error: 'bg-red-600 border-red-500',
    warning: 'bg-yellow-600 border-yellow-500',
    info: 'bg-blue-600 border-blue-500'
  };

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg border text-white
                    shadow-lg z-50 max-w-sm ${types[type]}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white hover:opacity-70"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;