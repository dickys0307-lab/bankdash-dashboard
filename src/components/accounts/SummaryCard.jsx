import React from 'react';

const SummaryCard = ({ icon, label, value, bgColor, textColor }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className={`text-lg font-bold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
