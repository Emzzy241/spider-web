import IMAGES from '../../public/assets/images/Images';
import React, { useState } from 'react';
import Layout from './Shared/Layout';
import ProgressHeader from './Shared/ProgressHeader';

const Step3 = ({ onFinish, userData, setUserData, headerProps }) => { // Accept headerProps
  const quote = "Whether they're from Upwork, LinkedIn or Fiverr, everyone connects here as one.";
  const subtext = "Welcome Into SpiderWeb";
  const imgSrc = IMAGES.stepImage3;

  const [skill, setSkill] = useState(userData.skill || '');

  const handleInputChange = (e) => {
    const newSkill = e.target.value;
    setSkill(newSkill);
    setUserData(prev => ({ ...prev, skill: newSkill }));
  };
  
  const policyItems = [
    "Your profiles are never posted without permission.",
    "You control which platforms appear on your identity.",
    "Built for freelancers, not algorithms.",
    "All freelancers. All platforms. One Web.",
  ];

  return (
    <Layout imageSrc={imgSrc} imageQuote={quote} imageSubtext={subtext}>
      {/* Pass headerProps to ProgressHeader */}
      <ProgressHeader {...headerProps} /> 
      
      <div className="max-w-md mx-auto">
        {/* ... (Rest of Step 3 UI remains the same) ... */}
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-4xl mr-2">👨‍👩‍👧‍👦</span> Connect with friends, 
          <br/> build teams and work together.
        </h1>
        
        <label htmlFor="skill" className="block text-gray-700 font-semibold mb-2">
          Tell us what skill you offer:
        </label>
        <input
          id="skill"
          type="text"
          value={skill}
          onChange={handleInputChange}
          placeholder="e.g. UI/UX designer, web developer, cybersecurity _____"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-10"
        />

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Building the freelancing web</h3>
          <ul className="space-y-3">
            {policyItems.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-green-500 mt-1 mr-2 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={onFinish}
          disabled={!skill}
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 
            ${skill 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          Get Started
        </button>
      </div>
    </Layout>
  );
};

export default Step3;