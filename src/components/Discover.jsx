// src/components/DiscoverScreen.jsx (UPDATED WITH SIDEBAR)
import React, { useState } from 'react';
import Sidebar from './Shared/SideBar'; 

// --- Reusable Component: FreelancerCard (Remains the same) ---
const FreelancerCard = ({ name, skill, platforms, rating, hireStatus }) => (
  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-start space-x-4">
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700 flex-shrink-0">
      {name.charAt(0)}
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-red-500 font-medium mb-2">{skill}</p>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <span className="mr-1 text-yellow-500">⭐ {rating}</span>
        <span className="ml-3 font-semibold">{hireStatus}</span>
      </div>
      <p className="text-xs text-gray-500">Profiles: {platforms.join(', ')}</p>
    </div>
    <button className="py-1 px-3 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex-shrink-0">
      View Profile
    </button>
  </div>
);
// --------------------------------------------------------

const DiscoverScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const freelancers = [
    { name: 'Alice Ray', skill: 'UI/UX Designer', platforms: ['Dribbble', 'LinkedIn'], rating: '4.9', hireStatus: 'Available' },
    { name: 'Ben Carson', skill: 'Full Stack Developer', platforms: ['Upwork', 'GitHub'], rating: '4.7', hireStatus: 'Engaged' },
    { name: 'Cara Lee', skill: 'UX Writer', platforms: ['Fiverr', 'LinkedIn'], rating: '4.8', hireStatus: 'Available' },
  ];

  return (
    // ⬅️ TOP LEVEL: Flex Container for Sidebar and Main Content
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar /> 
      
      {/* 2. Main Content Area (Takes up remaining space, is scrollable) */}
      <div className="flex-1 overflow-y-auto p-10">
        
        <h1 className="text-3xl font-bold mb-2">🔍 Discover Talent</h1>
        <p className="text-gray-500 mb-8">Search freelancer profiles aggregated from across the web.</p>

        {/* Search and Filters */}
        <div className="flex space-x-4 mb-8">
          <input
            type="text"
            placeholder="Search by name, skill, or platform..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
          />
          <select className="p-3 border border-gray-300 rounded-lg">
            <option>Skill (All)</option>
            <option>UI/UX Design</option>
            <option>Web Development</option>
          </select>
          <select className="p-3 border border-gray-300 rounded-lg">
            <option>Platform (All)</option>
            <option>Upwork</option>
            <option>Fiverr</option>
          </select>
          <button className="py-3 px-5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Search
          </button>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelancers.map(f => <FreelancerCard key={f.name} {...f} />)}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          Displaying 1-3 of 85 available talents.
        </div>
      </div>
    </div>
  );
};

export default DiscoverScreen;