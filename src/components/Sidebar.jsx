import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaCreditCard, 
  FaUser, 
  FaChartLine, 
  FaCreditCard as FaCard, 
  FaHandHoldingUsd, 
  FaCog,
  FaBriefcase,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const menuItems = [
  { icon: FaHome, label: 'Dashboard', path: '/dashboard' },
  { icon: FaCreditCard, label: 'Transactions', path: '/transactions' },
  { icon: FaUser, label: 'Accounts', path: '/accounts' },
  { icon: FaChartLine, label: 'Investments', path: '/investments' },
  { icon: FaCard, label: 'Credit Cards', path: '/credit-cards' },
  { icon: FaHandHoldingUsd, label: 'Loans', path: '/loans' },
  { icon: FaBriefcase, label: 'Services', path: '/services' },
  { icon: FaUser, label: 'My Privileges', path: '/privileges' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button - Only visible on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[100] w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center"
      >
        {isOpen ? <FaTimes className="text-gray-600" /> : <FaBars className="text-gray-600" />}
      </button>

      {/* Sidebar */}
      <div className={`w-[260px] bg-white border-r border-gray-100 h-screen fixed top-0 left-0 flex flex-col p-6 z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-700">Bank</span>Dash.
          </h1>
        </div>

        <nav className="space-y-1 flex-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={index}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all no-underline ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700 font-semibold -ml-6 pl-10' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                <Icon className={`text-lg ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          to="/settings"
          onClick={closeSidebar}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all no-underline ${
            location.pathname === '/settings'
              ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700 font-semibold -ml-6 pl-10'
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
          }`}
        >
          <FaCog className={`text-lg ${location.pathname === '/settings' ? 'text-blue-700' : 'text-gray-400'}`} />
          <span className="text-sm">Setting</span>
        </Link>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
