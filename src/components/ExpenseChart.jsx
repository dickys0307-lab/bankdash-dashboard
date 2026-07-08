import React from 'react';

const ExpenseChart = () => {
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  const heights = [45, 85, 60, 120, 50, 70];
  const activeMonth = 3; // Nov

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">My Expense</h3>
        <div className="text-sm font-bold text-gray-800">$12,500</div>
      </div>
      
      <div className="h-44 flex items-end justify-around gap-1 px-1">
        {months.map((month, index) => (
          <div key={month} className="flex flex-col items-center gap-2 flex-1">
            <div 
              className={`w-full max-w-[28px] rounded-t-[6px] transition-all ${
                index === activeMonth ? 'bg-teal-400' : 'bg-gray-200'
              }`}
              style={{ height: `${heights[index]}px` }}
            ></div>
            <span className="text-xs text-gray-500 font-medium">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseChart;
