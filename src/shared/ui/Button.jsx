import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all focus:outline-none';

  const variants = {
    primary: 'bg-[#FF8000] text-white hover:bg-[#FF8000]/80 disabled:bg-gray-600',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 disabled:bg-gray-800',
    outline: 'border border-gray-600 text-gray-300 hover:border-[#FF8000] hover:text-white'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;