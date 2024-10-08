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
        </header>
    );
};

export default RealmPageHeader;
