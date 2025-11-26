import IMAGES from '../../public/assets/images/Images';
import React from 'react';
import Layout from './Shared/Layout';
import ProgressHeader from './Shared/ProgressHeader';

const platforms = [
  'Glassdoor', 'Facebook', 'X.com', 'Contra', 'Linkedin', 
  'Upwork', 'Fiverr', 'Indeed', 'Dribbble', 'Behance', 'Andela'
];

const Step2 = ({ onNext, userData, setUserData, headerProps }) => { // Accept headerProps
  const quote = "You're the same professional everywhere";
  const subtext = "Your Identity Hub";
  const imgSrc = IMAGES.stepImage2;
  
  // ... (togglePlatform and PlatformButton logic remains the same) ...

  const togglePlatform = (platform) => {
    setUserData(prev => {
      const current = prev.platforms || [];
      const isSelected = current.includes(platform);
      let newPlatforms;

      if (isSelected) {
        newPlatforms = current.filter(p => p !== platform);
      } else if (current.length < 3) {
        newPlatforms = [...current, platform];
      } else {
        newPlatforms = [...current.slice(1), platform];
      }
      return { ...prev, platforms: newPlatforms };
    });
  };

  const selectedPlatforms = userData.platforms || [];
  const isNextEnabled = selectedPlatforms.length > 0;

  const PlatformButton = ({ platform }) => {
    const isSelected = selectedPlatforms.includes(platform);
    return (
      <button
        onClick={() => togglePlatform(platform)}
        className={`px-4 py-2 border rounded-full text-sm font-medium transition duration-200 
          ${isSelected 
            ? 'bg-blue-600 text-white border-blue-600' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
          }`}
      >
        {platform}
      </button>
    );
  };

  return (
    <Layout imageSrc={imgSrc} imageQuote={quote} imageSubtext={subtext}>
      {/* Pass headerProps to ProgressHeader */}
      <ProgressHeader {...headerProps} /> 
      
      <div className="max-w-md mx-auto">
        {/* ... (Rest of Step 2 UI remains the same) ... */}
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <span className="text-4xl mr-2">👨‍💻</span> Your Profile Is Everywhere. 
          <br /> Let's Bring It All Together.
        </h1>
        
        <p className="text-gray-500 mb-6 text-sm">
          <strong>Pick your 3 most active platforms</strong>
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {platforms.map(p => <PlatformButton key={p} platform={p} />)}
          <button className="px-4 py-2 border rounded-full text-sm font-medium bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50">
            Others +
          </button>
        </div>
        
        <button
          onClick={onNext}
          disabled={!isNextEnabled}
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 
            ${isNextEnabled 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          Next
        </button>
        <p className='text-xs text-center text-gray-500 mt-2'>Selected: {selectedPlatforms.length} / 3</p>
      </div>
    </Layout>
  );
};

export default Step2;