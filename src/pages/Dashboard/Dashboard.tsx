"use client";

import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import RealmPageSidebar from '@/components/PageSidebar/PageSidebar';
import RealmPageHeader from '@/components/PageHeader/PageHeader';
import MetricCard from './MetricCard';
import SalesChart from './SalesChart';
import RecentCustomers from './RecentCustomers';
import { RealmClientBranding } from '@/config';

// Dashboard main layout
const Dashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className={`flex h-screen ${RealmClientBranding.theme.type === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Sidebar */}
            <RealmPageSidebar isOpen={isSidebarOpen} />
            
            {/* Main Content */}
            <div className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'ml-16 lg:ml-64' : 'ml-0'} transition-all duration-300`}>
                {/* Header */}
                <RealmPageHeader toggleSidebar={toggleSidebar} />

                {/* Dashboard Content */}
                <main className="p-6">
                    {/* Metrics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <MetricCard title="Total Sales" value="21,324" change="+2,031" icon={<Bell />} dark={RealmClientBranding.theme.type === 'dark'} />
                        <MetricCard title="Total Income" value="$221,324.50" change="-$2,201" icon={<Bell />} />
                        <MetricCard title="Total Sessions" value="16,703" change="+3,392" icon={<Bell />} />
                        <MetricCard title="Conversion Rate" value="12.8%" change="-1.22%" icon={<Bell />} />
                    </div>

                    {/* Chart and Popular Categories */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                        <SalesChart />
                    </div>

                    {/* Recent Customers */}
                    <RecentCustomers />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
