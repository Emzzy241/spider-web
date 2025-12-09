// src/components/Shared/RadioCard.jsx
import React from 'react';

const RadioCard = ({ label, icon, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer 
        transition-all duration-200 w-full min-h-[100px]
        ${isSelected 
          ? 'border-red-500 ring-2 ring-red-500 bg-red-50' 
          : 'border-gray-300 hover:border-gray-400'
        }
      `}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <p className="text-sm font-semibold text-gray-800">{label}</p>
    </div>
  );
};

export default RadioCard;