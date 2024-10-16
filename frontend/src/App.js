import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';

const App = () => {
    const [selectedMonth, setSelectedMonth] = useState('March');

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div>
            <h1>MERN Stack Coding Challenge</h1>
            <div>
                <label>Select Month: </label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>

            <TransactionTable selectedMonth={selectedMonth} />
            <Statistics selectedMonth={selectedMonth} />
            <BarChartComponent selectedMonth={selectedMonth} />
            <PieChartComponent selectedMonth={selectedMonth} />
        </div>
    );
};

export default App;
