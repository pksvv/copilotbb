import React from 'react';

const Loader = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-600
                    border-t-[#FF8000] ${sizes[size]} ${className}`}
    />
  );
};

export default Loader;