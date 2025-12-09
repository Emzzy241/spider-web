// src/components/DashboardScreen.jsx (UPDATED FOR INLINE LAYOUT)
import React from 'react';
// Assuming Sidebar is in the same directory or one level up
import Sidebar from './Shared/SideBar'; 

// --- Reusable Component: StatCard (Remains the same) ---
const StatCard = ({ title, value, change, icon }) => (
  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <span className={`text-xs font-semibold ${change.includes('+') ? 'text-green-600' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
    <div className="flex items-end justify-between">
      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
      <span className="text-2xl text-red-500">{icon}</span>
    </div>
  </div>
);
// --------------------------------------------------------

const DashboardScreen = () => {
  return (
    // ⬅️ TOP LEVEL: Flex Container for Sidebar and Main Content
    // Removed unnecessary 'p-10' from this div, it is now on the content wrapper
    <div className="flex h-screen bg-gray-100"> 
      
      {/* 1. Sidebar (Fixed Width) */}
      <Sidebar /> 

      {/* 2. Main Content Area (Takes up remaining space, is scrollable) */}
      <div className="flex-1 overflow-y-auto p-10">
        
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, Adegoke!</h1>
        <p className="text-gray-500 mb-8">Your aggregated freelance hiring overview.</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatCard title="Active Job Posts" value="4" change="+1 since last week" icon="💼" />
          <StatCard title="Candidates Sourced" value="128" change="+15%" icon="👤" />
          <StatCard title="Total Hiring Budget" value="$4,500" change="-5%" icon="💰" />
          <StatCard title="Hires (30 Days)" value="2" change="0" icon="✅" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Recent Candidate Activity</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-3 text-lg">🔔</span>
                  <p className="text-sm">**Sarah J.** connected her Upwork profile.</p>
                </div>
                <span className="text-xs text-gray-500">2 min ago</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-3 text-lg">💡</span>
                  <p className="text-sm">**New lead** for UI/UX Design job from **Dribbble**.</p>
                </div>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-3 text-lg">🚀</span>
                  <p className="text-sm">Your 'Full Stack Dev' post was published on **Fiverr**.</p>
                </div>
                <span className="text-xs text-gray-500">Yesterday</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
                + Post New Job
              </button>
              <button className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                🔍 Discover Talent Now
              </button>
              <button className="w-full py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Review Wallet & Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;