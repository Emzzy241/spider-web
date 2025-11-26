import React from 'react';
import imageSrc from "../../assets/images/step-1.jpg"

const Layout = ({ children, imageSrc, imageQuote, imageSubtext }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column (Form) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12">
        {children}
      </div>
      
      {/* Right Column (Image/Quote) */}
      <div className="hidden lg:w-1/2 lg:flex lg:flex-col lg:justify-end bg-cover bg-center p-12 text-white" 
           style={{ backgroundImage: `url(${imageSrc})` }}>
        <div className="bg-black bg-opacity-40 p-6 rounded-lg">
          <blockquote className="text-2xl font-semibold leading-relaxed mb-4">
            {imageQuote}
          </blockquote>
          <p className="text-sm font-light italic">
            {imageSubtext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;