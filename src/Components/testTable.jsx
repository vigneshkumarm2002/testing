import React from "react";

const TransactionDetails = ({ transaction }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div><strong>Date:</strong> {transaction.transactionDate}</div>
            <div><strong>Challan No:</strong> {transaction.challanNumber}</div>
            <div><strong>File No:</strong> {transaction.fileNumber}</div>
            <div><strong>Transaction id:</strong> {transaction.cmdaOrderId}</div>
            <div><strong>Amount (INR):</strong> {transaction.transactionAmount}</div>
            <div><strong>Payment Status:</strong> {transaction.status === 2 ? 'Paid' : 'Unpaid'}</div>
            <div><strong>Payment Mode:</strong> {transaction.paymentMode}</div>
        </div>
    );
};

const Table = ({ data, onViewClick }) => {
    return (
        <div className="w-full overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Challan No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            File No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction id
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount (INR)
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Payment Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Payment Mode
                        </th>

                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((transaction) => (
                        <tr key={transaction.transactionId}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.cmdaOrderId}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.transactionAmount}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{transaction.status === 2 ? 'Paid' : 'Unpaid'}</td>
                            <td className="px-6 py-4 whitespace-nowrap"></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { Table, TransactionDetails };
