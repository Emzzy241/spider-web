// src/components/Shared/MainLayout.jsx (NEW)
import React from 'react';
import Sidebar from './SideBar';

const MainLayout = ({ children, activePage, onNavigate }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;