import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionTable = () => {
    const [transactions, setTransactions] = useState([]);  // Initialize with an empty array
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [perPage] = useState(10); // Number of records per page

    useEffect(() => {
        fetchTransactions();
    }, [page, search]);

    const fetchTransactions = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/transactions?page=${page}&perPage=${perPage}&search=${search}`);
            setTransactions(res.data.transactions || []);  // Safeguard if res.data.transactions is undefined
        } catch (error) {
            console.error("Error fetching transactions:", error);
            setTransactions([]);  // Set to empty array if error occurs
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleNextPage = () => {
        setPage(prev => prev + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(prev => prev - 1);
    };

    return (
        <div>
            <h2>Transaction Table</h2>
            <input type="text" value={search} onChange={handleSearch} placeholder="Search..." />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Date of Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map(transaction => (
                            <tr key={transaction._id}>
                                <td>{transaction.title}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.price}</td>
                                <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No transactions available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default TransactionTable;
