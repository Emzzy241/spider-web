import IMAGES from '../../public/assets/images/Images';
import React from 'react';
import Layout from './Shared/Layout';
import ProgressHeader from './Shared/ProgressHeader';

const Step1 = ({ onNext, headerProps }) => { // Accept headerProps
  const quote = "Keep your reputation, clients, and momentum forever, no matter what happens to any freelance platform.";
  const subtext = "Giving You A Stable Career";
  const imgSrc = IMAGES.stepImage1;

  // ... (SocialButton component remains the same) ...

  const SocialButton = ({ icon, text, color }) => (
    <button className={`w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 px-4 mb-4 text-sm font-semibold transition duration-200 ${color === 'google' ? 'hover:bg-gray-50' : 'hover:bg-gray-100'}`}>
      <img src={icon} alt={`${text} icon`} className="w-5 h-5 mr-3" />
      {text}
    </button>
  );

  return (
    <Layout imageSrc={imgSrc} imageQuote={quote} imageSubtext={subtext}>
      {/* Pass headerProps to ProgressHeader */}
      <ProgressHeader {...headerProps} /> 
      
      <div className="max-w-md mx-auto">
        {/* ... (Rest of Step 1 UI remains the same) ... */}
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <span className="text-xl mr-2 text-center">👋 Hi, Welcome to the freelancing web</span>
        </h1>
        <p className="text-gray-500 mb-8 text-sm text-center">
          All Freelancers. All Platforms. One Web.
        </p>

        <div className="space-y-4">
          <SocialButton 
            icon="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
            text="Sign up with facebook" 
          />
          <SocialButton 
            icon="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            text="Sign up with google" 
            color="google"
          />
          <SocialButton 
            icon="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
            text="Sign up with apple" 
          />
        </div>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <p className="text-center text-sm">
          Already have an account? 
          <button 
            onClick={onNext} 
            className="text-blue-600 hover:text-blue-700 font-semibold ml-1"
          >
            sign in
          </button>
        </p>
      </div>
    </Layout>
  );
};

export default Step1;