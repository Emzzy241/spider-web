// src/components/WalletScreen.jsx (UPDATED WITH SIDEBAR)
import React from 'react';
import Sidebar from './Shared/SideBar';

// --- Reusable Component: TransactionRow (Remains the same) ---
const TransactionRow = ({ date, description, amount, status }) => (
  <div className="flex justify-between items-center p-4 border-b text-sm">
    <div className="w-1/4 text-gray-500">{date}</div>
    <div className="flex-1 font-medium">{description}</div>
    <div className={`w-1/5 font-semibold ${amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>{amount}</div>
    <div className={`w-1/5 text-center ${status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
      {status}
    </div>
  </div>
);
// --------------------------------------------------------

const WalletScreen = () => {
  const transactions = [
    { date: '2025-12-05', description: 'Payment to freelancer Ben Carson (Upwork)', amount: '-$500.00', status: 'Completed' },
    { date: '2025-11-28', description: 'Platform fee for Job Post #456', amount: '-$49.99', status: 'Completed' },
    { date: '2025-11-20', description: 'Wallet top-up via Visa ending 1234', amount: '+$1,000.00', status: 'Completed' },
    { date: '2025-11-15', description: 'Pending Escrow for Alice Ray (Fiverr)', amount: '-$200.00', status: 'Pending' },
  ];

  return (
    // ⬅️ TOP LEVEL: Flex Container for Sidebar and Main Content
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar />
      
      {/* 2. Main Content Area (Takes up remaining space, is scrollable) */}
      <div className="flex-1 overflow-y-auto p-10">
        
        <h1 className="text-3xl font-bold mb-2">💰 Wallet & Payments</h1>
        <p className="text-gray-500 mb-8">Manage funds, view transaction history, and control linked accounts.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Current Balance Card */}
          <div className="lg:col-span-1 bg-red-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-40">
            <p className="text-sm font-medium">Current Balance</p>
            <h2 className="text-4xl font-extrabold">$1,850.01</h2>
            <button className="text-xs font-semibold text-white bg-red-700 py-1 px-3 rounded-full self-start hover:bg-red-800 transition-colors">
              + Top Up Funds
            </button>
          </div>

          {/* Payment Methods */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <span className="text-xl mr-3">💳</span>
                <p className="flex-1 font-medium">Visa ending **1234** (Default)</p>
                <button className="text-blue-500 text-sm hover:underline">Edit</button>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
                <span className="text-xl mr-3">🅿️</span>
                <p className="flex-1 font-medium">PayPal</p>
                <button className="text-red-500 text-sm hover:underline">Add</button>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
          
          <div className="flex justify-between p-4 font-semibold text-sm text-gray-500 border-b-2 border-gray-200">
            <div className="w-1/4">Date</div>
            <div className="flex-1">Description</div>
            <div className="w-1/5">Amount</div>
            <div className="w-1/5 text-center">Status</div>
          </div>
          
          <div>
            {transactions.map((t, index) => (
              <TransactionRow key={index} {...t} />
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <button className="hover:text-red-500">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletScreen;