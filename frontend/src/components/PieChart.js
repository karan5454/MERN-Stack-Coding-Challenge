import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import axios from 'axios';

const PieChartComponent = ({ selectedMonth }) => {
    const [data, setData] = useState([]);  // Initialize data as an empty array

    useEffect(() => {
        fetchPieChartData();
    }, [selectedMonth]);

    const fetchPieChartData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/piechart?month=${selectedMonth}`);
            if (Array.isArray(res.data)) {
                setData(res.data);  // Ensure res.data is an array before setting state
            } else {
                setData([]);  // If res.data is not an array, set to an empty array
            }
        } catch (error) {
            console.error("Error fetching pie chart data:", error);
            setData([]);  // Set to an empty array in case of error
        }
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <h2>Category Distribution for {selectedMonth}</h2>
            {data.length > 0 ? (  // Only render the PieChart if data is not empty
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={150} fill="#8884d8" label>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            ) : (
                <p>No data available for the selected month.</p>
            )}
        </div>
    );
};

export default PieChartComponent;
