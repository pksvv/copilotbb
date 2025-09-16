import React, { useState } from 'react';

const Dropdown = ({ options, value, onChange, placeholder = "Select option" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg
                   text-white text-left focus:outline-none focus:border-[#FF8000]
                   flex items-center justify-between"
      >
        <span>{value?.label || placeholder}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600
                        rounded-lg shadow-lg z-50 max-h-40 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className="w-full px-3 py-2 text-left text-white hover:bg-gray-700
                         transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;