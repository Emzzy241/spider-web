// src/components/Shared/InputTag.jsx
import React from 'react';

const InputTag = ({ tag, isSelected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1.5 rounded-full text-sm font-medium transition duration-200 
        ${isSelected 
          ? 'bg-red-500 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
      `}
    >
      {tag}
    </button>
  );
};

export default InputTag;