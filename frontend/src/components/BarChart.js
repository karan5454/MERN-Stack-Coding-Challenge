import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const BarChartComponent = ({ selectedMonth }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchBarChartData();
    }, [selectedMonth]);

    const fetchBarChartData = async () => {
        const res = await axios.get(`http://localhost:5000/api/barchart?month=${selectedMonth}`);
        setData(res.data); // Assuming the API returns the bar chart data
    };

    return (
        <div>
            <h2>Price Range Distribution for {selectedMonth}</h2>
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="priceRange" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="itemCount" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default BarChartComponent;
