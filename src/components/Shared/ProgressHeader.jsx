// src/components/Shared/ProgressHeader.jsx
import React from 'react';

const ProgressHeader = ({ currentStep, totalSteps = 3, onBack }) => {
  const progress = (currentStep / totalSteps) * 100;
  const isFirstStep = currentStep === 1;

  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <button
          onClick={onBack}
          disabled={isFirstStep}
          className={`
            flex items-center text-sm font-medium transition-colors
            ${isFirstStep 
                ? 'text-gray-400 cursor-default' 
                : 'text-gray-700 hover:text-blue-600'
            }
          `}
        >
          {/* Back Arrow Icon */}
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="sr-only">Go back</span>
        </button>
        <span className="ml-2 text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div 
          className="bg-blue-600 h-1.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressHeader;