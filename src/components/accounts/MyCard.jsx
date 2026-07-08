import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const MyCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-800">My Card</h3>
        <button className="text-blue-700 text-sm font-medium">See All</button>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-3 right-3">
          <FaEllipsisV className="text-white/70" />
        </div>
        <div className="mb-8">
          <p className="text-xs opacity-80">Balance</p>
          <p className="text-xl font-bold">$5,756</p>
        </div>
        <div className="mb-5">
          <p className="font-medium tracking-widest">3778 **** **** 1234</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs uppercase opacity-70">Card Holder</p>
            <p className="font-medium text-sm">Eddy Cusuma</p>
          </div>
          <div>
            <p className="text-xs uppercase opacity-70">Valid Thru</p>
            <p className="font-medium text-sm">12/22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
