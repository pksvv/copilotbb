import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = `
    w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg
    text-white placeholder-gray-400 transition-colors
    focus:outline-none focus:border-[#FF8000]
    disabled:bg-gray-900 disabled:cursor-not-allowed
  `;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;