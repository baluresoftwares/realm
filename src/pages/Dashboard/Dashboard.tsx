"use client";

import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import RealmPageSidebar from '@/components/PageSidebar/PageSidebar';
import RealmPageHeader from '@/components/PageHeader/PageHeader';
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
            <div className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'ml-16 lg:ml-48' : 'ml-0'} transition-all duration-300`}>
                {/* Header */}
                <RealmPageHeader toggleSidebar={toggleSidebar} />
            </div>
        </div>
    );
};

export default Dashboard;
