import React from 'react';

const InvoicesSent = () => {
  const invoices = [
    { id: 1, name: 'Apple Store', date: '5n ago', amount: '$450' },
    { id: 2, name: 'Michael', date: '2 days ago', amount: '$180' },
    { id: 3, name: 'Playstation', date: '5 days ago', amount: '$1085' },
    { id: 4, name: 'William', date: '10 days ago', amount: '$90' },
  ];

  const getInitial = (name) => name.charAt(0);
  
  const colors = ['bg-teal-100 text-teal-700', 'bg-amber-100 text-amber-700', 'bg-pink-100 text-pink-700', 'bg-blue-100 text-blue-700'];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-5">Invoices Sent</h3>
      <div className="space-y-4">
        {invoices.map((inv, i) => (
          <div key={inv.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${colors[i]}`}>
                {getInitial(inv.name)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{inv.name}</p>
                <p className="text-xs text-gray-500">{inv.date}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-800">{inv.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesSent;
