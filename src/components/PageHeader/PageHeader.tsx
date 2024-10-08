import React from 'react';
import { Bell } from 'lucide-react';
import { RealmClientBranding } from '@/config';
import { HeaderProps } from './IPageHeader';

const RealmPageHeader: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
            <button onClick={toggleSidebar} className="text-gray-600 w-10 h-10 flex items-center justify-center">
				<img
					className="max-w-full max-h-full object-contain" 
					src={RealmClientBranding.logoUrl} 
					alt="" 
				/>
			</button>
            <div className="flex items-center space-x-4">
                <Bell className="text-gray-600" />
                <div className="flex items-center">
                    <span className="mr-2">Renee McKelvey</span>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </header>
    );
};

export default RealmPageHeader;
