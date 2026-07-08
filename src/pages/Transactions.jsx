import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaCalendarAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import CreditCard from '../components/CreditCard';
import ExpenseChart from '../components/ExpenseChart';
import TransactionTable from '../components/TransactionTable';
import Pagination from '../components/Pagination';

const Transactions = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => {
    // Load search query from localStorage on mount
    const saved = localStorage.getItem('transactionsSearch');
    return saved || '';
  });
  const [activeTab, setActiveTab] = useState('all');

  // Save search query to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('transactionsSearch', searchQuery);
  }, [searchQuery]);

  const handleAddCardClick = () => {
    console.log('Add Card button clicked!');
    alert('Opening Add Card modal...');
  };

  const handleNotificationClick = () => {
    console.log('Notification bell clicked!');
    alert('Opening notifications...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-[260px] p-4 md:p-8 pt-16 md:pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Transactions</h2>
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="flex items-center bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 flex-1 md:flex-none">
              <FaSearch className="text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search for something"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  console.log('Search query updated:', e.target.value);
                }}
                className="ml-3 border-none outline-none text-sm text-gray-600 w-full bg-transparent"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
              <FaCalendarAlt className="text-gray-600 text-sm" />
            </div>
            <button
              onClick={handleNotificationClick}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50"
            >
              <FaBell className="text-gray-600 text-sm" />
            </button>
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20woman%20avatar%20portrait%20business%20headshot&image_size=square"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards and Expense Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* My Cards */}
          <div className="col-span-1 lg:col-span-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">My Cards</h3>
              <button
                onClick={handleAddCardClick}
                className="text-blue-700 text-sm font-medium hover:underline"
              >
                + Add Card
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CreditCard variant="primary" />
              <CreditCard variant="secondary" />
            </div>
          </div>

          {/* My Expense */}
          <div className="col-span-1 lg:col-span-4">
            <ExpenseChart />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mb-4">
          <TransactionTable />
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default Transactions;
