import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex gap-6 border-b border-gray-100 pb-3 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`text-sm font-medium transition-all ${
            activeTab === tab.id
              ? 'text-blue-700 border-b-2 border-blue-700 pb-3 -mb-3'
              : 'text-gray-500 pb-3 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
