import React from 'react';
import { MetricCardProps } from './Interfaces/IMetricCard';

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, dark = false }) => (
    <div className={`p-4 rounded-lg shadow ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">{title}</h3>
            {icon}
        </div>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change}
        </p>
    </div>
);

export default MetricCard;
