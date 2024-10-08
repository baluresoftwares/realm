import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const salesData = [
    { name: 'Jan', Laptops: 4000, Headsets: 2400, Monitors: 2400, Phones: 1000 },
    { name: 'Feb', Laptops: 3000, Headsets: 1398, Monitors: 2210, Phones: 3000 },
    // More data...
];

const SalesChart: React.FC = () => (
    <div className="col-span-2 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Sales Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="Laptops" stroke="#8884d8" />
                <Line type="monotone" dataKey="Headsets" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Monitors" stroke="#ffc658" />
                <Line type="monotone" dataKey="Phones" stroke="#ff7300" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default SalesChart;
