import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ProgressHeader from './components/Shared/ProgressHeader'; // Import needed for conditional rendering

const SignupFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleFinish = () => {
    console.log('Signup Complete! Final Data:', userData);
    alert('Signup Complete! Check the console for collected data.');
  };

  const renderStep = () => {
    // Pass handleBack and currentStep to the Layout/Header structure
    const headerProps = {
      currentStep: currentStep,
      onBack: handleBack,
    };

    switch (currentStep) {
      case 1:
        // Note: Step 1 doesn't need to use the ProgressHeader's onBack,
        // as the header logic disables it. But we pass it for consistency.
        return <Step1 onNext={handleNext} headerProps={headerProps} />;
      case 2:
        return <Step2 onNext={handleNext} userData={userData} setUserData={setUserData} headerProps={headerProps} />;
      case 3:
        return <Step3 onFinish={handleFinish} userData={userData} setUserData={setUserData} headerProps={headerProps} />;
      default:
        return <div>Something went wrong.</div>;
    }
  };

  return (
    <div className="SignupFlow">
      {renderStep()}
    </div>
  );
};

export default SignupFlow;