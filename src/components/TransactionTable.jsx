import React from 'react';
import { FaDownload } from 'react-icons/fa';

const transactions = [
  { 
    id: 1, 
    description: 'Spotify Subscription', 
    transactionId: '#12548786', 
    type: 'Shopping', 
    card: '1234 ****', 
    date: '28 Jan, 12:30 AM', 
    amount: '-$2.500', 
    isExpense: true 
  },
  { 
    id: 2, 
    description: 'Freesik Sales', 
    transactionId: '#12548796', 
    type: 'Transfer', 
    card: '1234 ****', 
    date: '25 Jan, 10:40 PM', 
    amount: '+$750', 
    isExpense: false 
  },
  { 
    id: 3, 
    description: 'Mobile Service', 
    transactionId: '#12548796', 
    type: 'Service', 
    card: '1234 ****', 
    date: '20 Jan, 10:40 PM', 
    amount: '-$150', 
    isExpense: true 
  },
  { 
    id: 4, 
    description: 'Wilson', 
    transactionId: '#12548796', 
    type: 'Transfer', 
    card: '1234 ****', 
    date: '15 Jan, 10:40 PM', 
    amount: '+$950', 
    isExpense: false 
  },
  { 
    id: 5, 
    description: 'Emily', 
    transactionId: '#12548796', 
    type: 'Transfer', 
    card: '1234 ****', 
    date: '14 Jan, 10:40 PM', 
    amount: '+$840', 
    isExpense: false 
  },
];

const TransactionTable = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
      
      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-gray-100 pb-4">
        <button className="font-semibold text-blue-700 border-b-2 border-blue-700 pb-2 text-sm">
          All Transactions
        </button>
        <button className="text-gray-500 pb-2 text-sm hover:text-gray-700">
          Income
        </button>
        <button className="text-gray-500 pb-2 text-sm hover:text-gray-700">
          Expense
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-semibold text-gray-500 uppercase">
              <th className="pb-4">Description</th>
              <th className="pb-4">Transaction ID</th>
              <th className="pb-4">Type</th>
              <th className="pb-4">Card</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-50 last:border-b-0">
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{transaction.description}</span>
                  </div>
                </td>
                <td className="py-5 text-gray-500 text-sm">{transaction.transactionId}</td>
                <td className="py-5 text-gray-500 text-sm">{transaction.type}</td>
                <td className="py-5 text-gray-500 text-sm">{transaction.card}</td>
                <td className="py-5 text-gray-500 text-sm">{transaction.date}</td>
                <td className={`py-5 font-bold text-sm ${transaction.isExpense ? 'text-red-500' : 'text-green-500'}`}>
                  {transaction.amount}
                </td>
                <td className="py-5">
                  <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold border border-blue-200 hover:bg-blue-100 transition-colors">
                    <FaDownload className="text-[10px]" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
