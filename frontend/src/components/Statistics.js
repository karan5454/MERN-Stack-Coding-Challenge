import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ selectedMonth }) => {
    const [statistics, setStatistics] = useState({
        totalSales: 0,
        soldItems: 0,
        notSoldItems: 0
    });

    useEffect(() => {
        fetchStatistics();
    }, [selectedMonth]);

    const fetchStatistics = async () => {
        const res = await axios.get(`http://localhost:5000/api/statistics?month=${selectedMonth}`);
        setStatistics(res.data); // Assuming the API returns { totalSales, soldItems, notSoldItems }
    };

    return (
        <div>
            <h2>Transaction Statistics for {selectedMonth}</h2>
            <p>Total Sales: {statistics.totalSales}</p>
            <p>Total Sold Items: {statistics.soldItems}</p>
            <p>Total Not Sold Items: {statistics.notSoldItems}</p>
        </div>
    );
};

export default Statistics;
