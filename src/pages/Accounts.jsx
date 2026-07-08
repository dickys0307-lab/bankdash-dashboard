import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaCalendarAlt, FaWallet, FaDollarSign, FaCreditCard, FaPiggyBank } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import SummaryCard from '../components/accounts/SummaryCard';
import LastTransaction from '../components/accounts/LastTransaction';
import MyCard from '../components/accounts/MyCard';
import DebitCreditOverview from '../components/accounts/DebitCreditOverview';
import InvoicesSent from '../components/accounts/InvoicesSent';

const Accounts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => {
    // Load search query from localStorage on mount
    const saved = localStorage.getItem('accountsSearch');
    return saved || '';
  });
  const [summaryData, setSummaryData] = useState([
    { icon: <FaWallet className="text-amber-600" />, label: 'My Balance', value: '$12,750', bgColor: 'bg-amber-100', textColor: 'text-gray-800' },
    { icon: <FaDollarSign className="text-blue-600" />, label: 'Income', value: '$5,600', bgColor: 'bg-blue-100', textColor: 'text-gray-800' },
    { icon: <FaCreditCard className="text-red-500" />, label: 'Expense', value: '$3,460', bgColor: 'bg-red-100', textColor: 'text-gray-800' },
    { icon: <FaPiggyBank className="text-teal-600" />, label: 'Total Saving', value: '$7,920', bgColor: 'bg-teal-100', textColor: 'text-gray-800' },
  ]);

  // Save search query to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('accountsSearch', searchQuery);
  }, [searchQuery]);

  const handleCardClick = (label) => {
    console.log(`Card clicked: ${label}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - EXACTLY the same as Transactions */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content - EXACT padding and layout as Transactions */}
      <div className="md:ml-[260px] p-4 md:p-8 pt-16 md:pt-8">
        {/* Header - EXACTLY the same as Transactions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Accounts</h2>
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="flex items-center bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 flex-1 md:flex-none">
              <FaSearch className="text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search for something"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  console.log('Accounts search updated:', e.target.value);
                }}
                className="ml-3 border-none outline-none text-sm text-gray-600 w-full bg-transparent"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
              <FaCalendarAlt className="text-gray-600 text-sm" />
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
              <FaBell className="text-gray-600 text-sm" />
            </div>
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20woman%20avatar%20portrait%20business%20headshot&image_size=square"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Summary Cards - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {summaryData.map((item, i) => (
            <button
              key={i}
              onClick={() => handleCardClick(item.label)}
              className="text-left"
            >
              <SummaryCard
                icon={item.icon}
                label={item.label}
                value={item.value}
                bgColor={item.bgColor}
                textColor={item.textColor}
              />
            </button>
          ))}
        </div>

        {/* Last Transaction and My Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="col-span-1 lg:col-span-8">
            <LastTransaction />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <MyCard />
          </div>
        </div>

        {/* Debit & Credit Overview and Invoices Sent Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-8">
            <DebitCreditOverview />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <InvoicesSent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
