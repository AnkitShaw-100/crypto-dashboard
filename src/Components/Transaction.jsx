import React from 'react';

const transactions = [
    { id: 1, date: '2023-10-01', description: 'Bought Bitcoin', amount: '-0.5 BTC' },
    { id: 2, date: '2023-10-02', description: 'Sold Ethereum', amount: '+2.0 ETH' },
    { id: 3, date: '2023-10-03', description: 'Bought Dogecoin', amount: '-1000 DOGE' },
    { id: 4, date: '2023-10-04', description: 'Bought Litecoin', amount: '-10 LTC' },
    { id: 5, date: '2023-10-05', description: 'Sold Ripple', amount: '+500 XRP' },
    { id: 6, date: '2023-10-06', description: 'Bought Cardano', amount: '-300 ADA' },
    { id: 7, date: '2023-10-07', description: 'Sold Polkadot', amount: '+50 DOT' },
    { id: 8, date: '2023-10-08', description: 'Bought Stellar', amount: '-2000 XLM' },
];

const Transaction = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-4xl font-bold mb-6 text-center text-white">Transaction History</h1>
                <ul className="divide-y divide-gray-700">
                    {transactions.map(transaction => (
                        <li key={transaction.id} className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-white font-medium">{transaction.description}</p>
                                <p className="text-gray-400 text-sm">{transaction.date}</p>
                            </div>
                            <p className={`text-lg font-semibold ${transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                {transaction.amount}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Transaction;
