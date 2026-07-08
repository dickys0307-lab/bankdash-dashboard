import React from 'react';

const CreditCard = ({ variant = 'primary' }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className={`relative rounded-2xl p-6 overflow-hidden shadow-sm ${
      isPrimary 
        ? 'bg-gradient-to-br from-indigo-600 to-blue-700 text-white' 
        : 'bg-white border-2 border-gray-100 text-gray-800'
    }`}>
      {/* Top Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className={`text-xs ${isPrimary ? 'opacity-70' : 'text-gray-500'}`}>Balance</p>
          <p className="text-2xl font-bold mt-1">$5,756</p>
        </div>
        <div className={`w-12 h-8 rounded-lg ${
          isPrimary ? 'bg-white/20' : 'bg-gray-200'
        }`}></div>
      </div>

      {/* Card Number */}
      <div className="mb-6">
        <p className="font-medium tracking-[0.2em] text-lg">3778 **** **** 1234</p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end">
        <div>
          <p className={`text-xs uppercase tracking-wider ${isPrimary ? 'opacity-70' : 'text-gray-400'}`}>Card Holder</p>
          <p className="font-medium mt-1">Eddy Cusuma</p>
        </div>
        <div>
          <p className={`text-xs uppercase tracking-wider ${isPrimary ? 'opacity-70' : 'text-gray-400'}`}>Valid Thru</p>
          <p className="font-medium mt-1">12/22</p>
        </div>
        <div className="flex gap-1">
          <div className={`w-9 h-9 rounded-full ${isPrimary ? 'bg-white/30' : 'bg-gray-300'}`}></div>
          <div className={`w-9 h-9 rounded-full -ml-4 ${isPrimary ? 'bg-white/20' : 'bg-gray-200'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
