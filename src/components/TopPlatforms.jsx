// src/components/TopPlatformsScreen.jsx (UPDATED WITH INLINE LAYOUT)
import React from 'react';
// Assuming Sidebar is in the correct path relative to this file
import Sidebar from './Shared/SideBar'; 

// --- Reusable Component: PlatformRow (Remains the same) ---
const PlatformRow = ({ rank, name, skill, engagement, rating }) => (
  <div className="flex items-center p-4 border-b hover:bg-gray-50 transition-colors">
    <div className="w-10 text-lg font-bold text-gray-600">{rank}</div>
    <div className="flex-1 font-semibold">{name}</div>
    <div className="w-1/4 text-sm text-gray-700">{skill}</div>
    <div className="w-1/4 text-sm text-gray-700">{engagement}</div>
    <div className="w-20 text-sm text-yellow-500">⭐ {rating}</div>
  </div>
);
// --------------------------------------------------------

const TopPlatformsScreen = () => {
  const platforms = [
    { rank: 1, name: 'Upwork', skill: 'Web Development', engagement: 'High (78%)', rating: '4.7' },
    { rank: 2, name: 'LinkedIn', skill: 'B2B Sales', engagement: 'Medium (62%)', rating: '4.6' },
    { rank: 3, name: 'Fiverr', skill: 'Graphic Design', engagement: 'Very High (85%)', rating: '4.5' },
    { rank: 4, name: 'Contra', skill: 'No-Code/SaaS', engagement: 'Low (45%)', rating: '4.3' },
    { rank: 5, name: 'Dribbble', skill: 'UI/UX Design', engagement: 'Medium (55%)', rating: '4.8' },
  ];

  return (
    // ⬅️ TOP LEVEL: Flex Container for Sidebar and Main Content
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar /> 
      
      {/* 2. Main Content Area (Takes up remaining space, is scrollable) */}
      <div className="flex-1 overflow-y-auto p-10">
        
        {/* Header Section */}
        <h1 className="text-3xl font-bold mb-2">🔝 Top Platforms Insights</h1>
        <p className="text-gray-500 mb-8">Aggregated metrics on freelancer distribution, skill trends, and engagement across the web.</p>
        
        {/* Main Table/Content Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Current Platform Ranking by Freelancer Volume</h3>

          {/* Table Header */}
          <div className="flex items-center p-4 font-semibold text-sm text-gray-500 border-b-2 border-gray-200">
            <div className="w-10">Rank</div>
            <div className="flex-1">Platform Name</div>
            <div className="w-1/4">Top Skill Focus</div>
            <div className="w-1/4">Hiring Engagement</div>
            <div className="w-20">Avg. Rating</div>
          </div>

          {/* Table Rows */}
          <div>
            {platforms.map(p => (
              <PlatformRow key={p.rank} {...p} />
            ))}
          </div>
        </div>
        
        {/* Footer/Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Data is aggregated from the SpiderWeb network connections (updated hourly).
        </div>
      </div>
    </div>
  );
};

export default TopPlatformsScreen;