// // src/App.jsx (UPDATED FOR NAVIGATION)
// import React, { useState } from 'react';
// import MainLayout from './components/Shared/MainLayout';
// // Import all screens
// import PostJobScreen from './components/PostJobScreen'; // Renamed from TeamsScreen for simplicity
// import Discover from './components/Discover';
// import TopPlatforms from './components/TopPlatforms';
// import Dashboard from './components/Dashboard';
// import Wallet from './components/Wallet';
// import Settings from './components/Settings';
// import './App.css';

// // Map component names (used in Sidebar) to the actual components
// const SCREEN_MAP = {
//   TeamsScreen: PostJobScreen, // Using the PostJobScreen as the default 'Teams' view
//   Discover: Discover,
//   TopPlatforms: TopPlatforms,
//   Dashboard: Dashboard,
//   Wallet: Wallet,
//   Settings: Settings,
// };

// function App() {
//   const [currentPage, setCurrentPage] = useState('TeamsScreen');
//   const CurrentComponent = SCREEN_MAP[currentPage];

//   return (
//     <MainLayout activePage={currentPage} onNavigate={setCurrentPage}>
//       {/* Render the current active component */}
//       <CurrentComponent />
//     </MainLayout>
//   );
// }

// export default App;





import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import SignupFlow from './SignUpFlow'
import Sidebar from './components/Shared/SideBar'
import PostJobScreen from './components/PostJobScreen'
import Discover from './components/Discover'
import TopPlatforms from './components/TopPlatforms'
import Dashboard from './components/Dashboard'
import Wallet from './components/Wallet'
import Settings from './components/Settings'

function App() {

  return (
    <>
      {/* <h2>Welcome to Spider Web</h2> */}
      {/* <Routes> */}
      {/* <Route path='/' element={<Step1 />} />
        <Route path='/' element={<Step2 />} />
        <Route path='/' element={<Step3 />} /> */}
      {/* <SignupFlow />
        <Route path='/contact' element={<Contact />} />
        </Routes> */}

      <div className='App'>
        <Routes>
          
          <Route path="/" element={<SignupFlow />} />
          <Route path="/onboarding" element={<SignupFlow />} />
          <Route path="/add-job" element={<PostJobScreen />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/platforms" element={<TopPlatforms />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
          {/* <PostJobScreen /> */}
        </Routes>

      </div>
    </>
  )
}

export default App
