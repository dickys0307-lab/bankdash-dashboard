import React from 'react';
import { FaCreditCard } from 'react-icons/fa';

const LastTransaction = () => {
  const transactions = [
    { id: 1, description: 'Spotify Subscription', type: 'Shopping', date: '25 Jan 2021', status: 'Pending', amount: '-$150' },
    { id: 2, description: 'Mobile Service', type: 'Service', date: '20 Jan 2021', status: 'Completed', amount: '-$340' },
    { id: 3, description: 'Emily Wilson', type: 'Transfer', date: '15 Jan 2021', status: 'Completed', amount: '+$780' },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-5">Last Transaction</h3>
      <div className="space-y-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center">
                <FaCreditCard className="text-gray-500 text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{t.description}</p>
                <p className="text-xs text-gray-500">{t.type} • {t.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold ${t.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{t.amount}</p>
              <p className="text-xs text-gray-500">{t.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastTransaction;
