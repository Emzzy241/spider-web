// src/components/SettingsScreen.jsx (UPDATED WITH SIDEBAR)
import React from 'react';
import Sidebar from './Shared/SideBar';

// --- Reusable Component: SettingGroup (Remains the same) ---
const SettingGroup = ({ title, children }) => (
  <div className="mb-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);
// --------------------------------------------------------

const SettingsScreen = () => {
  return (
    // ⬅️ TOP LEVEL: Flex Container for Sidebar and Main Content
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar />
      
      {/* 2. Main Content Area (Takes up remaining space, is scrollable) */}
      <div className="flex-1 overflow-y-auto p-10">
        
        <h1 className="text-3xl font-bold mb-2">⚙️ Settings</h1>
        <p className="text-gray-500 mb-8">Manage your account preferences and connected services.</p>

        <div className="max-w-4xl">
          <SettingGroup title="Profile Information">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" defaultValue="Adegoke Moses" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" defaultValue="adegoke.moses@employer.com" className="w-full p-2 border border-gray-300 rounded-lg" disabled />
              <p className="text-xs text-gray-500 mt-1">Contact support to change your primary email.</p>
            </div>
          </SettingGroup>

          <SettingGroup title="Platform Connections">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <p className="font-medium">Upwork Profile</p>
              <span className="text-sm text-green-600 font-semibold">Connected (Active)</span>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <p className="font-medium">LinkedIn Recruiter</p>
              <button className="text-red-500 text-sm hover:underline">Disconnect</button>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
              <p className="font-medium">Fiverr Business</p>
              <button className="text-blue-500 text-sm hover:underline">Connect Now</button>
            </div>
          </SettingGroup>

          <SettingGroup title="Security">
            <button className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Change Password
            </button>
            <div className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-red-500" />
              <label className="text-sm">Enable Two-Factor Authentication</label>
            </div>
          </SettingGroup>
          
          <button className="py-3 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;