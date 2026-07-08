import React from 'react';

const DebitCreditOverview = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const debit = [100, 80, 60, 120, 90, 70, 110];
  const credit = [80, 100, 70, 90, 110, 60, 100];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Debit & Credit Overview</h3>
      <p className="text-xs text-gray-500 mb-5">$7,360 Debited & $5,420 Credited in this Week</p>
      
      <div className="flex justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <span className="text-xs text-gray-500">Debit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <span className="text-xs text-gray-500">Credit</span>
        </div>
      </div>

      <div className="h-40 flex items-end justify-around gap-1 px-1">
        {days.map((day, i) => (
          <div key={day} className="flex flex-col items-center gap-2 flex-1">
            <div className="flex gap-1 items-end">
              <div 
                className="w-4 bg-blue-600 rounded-t"
                style={{ height: `${debit[i]}px` }}
              ></div>
              <div 
                className="w-4 bg-amber-400 rounded-t"
                style={{ height: `${credit[i]}px` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebitCreditOverview;
