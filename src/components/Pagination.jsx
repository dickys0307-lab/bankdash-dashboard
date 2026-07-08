import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-end items-center gap-2 mt-4">
      <button className="px-2.5 py-1 text-blue-700 text-xs font-bold hover:bg-blue-50 rounded-lg transition-colors">
        &lt; Previous
      </button>
      <button className="w-7 h-7 bg-blue-700 text-white text-xs font-bold rounded-lg">
        1
      </button>
      <button className="w-7 h-7 text-gray-700 text-xs font-bold hover:bg-gray-100 rounded-lg transition-colors">
        2
      </button>
      <button className="w-7 h-7 text-gray-700 text-xs font-bold hover:bg-gray-100 rounded-lg transition-colors">
        3
      </button>
      <button className="w-7 h-7 text-gray-700 text-xs font-bold hover:bg-gray-100 rounded-lg transition-colors">
        4
      </button>
      <button className="px-2.5 py-1 text-blue-700 text-xs font-bold hover:bg-blue-50 rounded-lg transition-colors">
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
