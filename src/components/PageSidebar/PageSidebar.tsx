import React from 'react';
import { Home, Search, Flag, PieChart, Mail, Image, Calendar, Users, Settings } from 'lucide-react';
import { SidebarProps } from './IPageSidebar';

const RealmPageSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <div className={`fixed ${isOpen ? 'w-16 lg:w-64' : 'w-0'} bg-gray-800 text-white h-full transition-all duration-300`}>
            {isOpen && (
                <nav className="flex items-center flex-col space-y-6 py-4">
                    <div className="flex items-center space-x-4 mx-auto lg:mx-0">
						<Home className="text-white" />
						<span className="text-sm lg:inline-block hidden">Home</span>
					</div>
                </nav>
            )}
        </div>
    );
};

export default RealmPageSidebar;
