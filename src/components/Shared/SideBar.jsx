// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  // Defined once here
  { name: 'Onboarding', icon: '👥', path: '/onboarding' }, 
  { name: 'Discover', icon: '🔍', path: '/discover' },
  { name: 'Top platforms', icon: '🔝', path: '/platforms' },
  { name: 'Dashboard', icon: '📊', path: '/dashboard' },
  { name: 'Wallet', icon: '💰', path: '/wallet' },
  { name: 'Settings', icon: '⚙️', path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between p-4 flex-shrink-0">
      <div className="flex flex-col">
        <div className="text-3xl font-bold mb-8 text-violet-700">🕷️</div>
        
        <nav className="space-y-1">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full text-left flex items-center p-3 rounded-lg transition-colors 
                ${location.pathname.startsWith(item.path) 
                  ? 'bg-red-500 text-white font-semibold' 
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
          <span className="mr-3 text-lg">💡</span>
          Support
        </div>
        <div className="flex items-center p-2 rounded-lg bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-xs font-semibold">AM</div>
          <div>
            <p className="text-sm font-semibold">Adegoke Moses</p>
            <p className="text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">0x0dbg...7E81571</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;