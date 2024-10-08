import React from 'react';
import { Button } from '../UI/button';
import { Home, Search, Flag, PieChart, Mail, Image, Calendar, Users, Settings, GripIcon } from 'lucide-react';
import { SidebarProps } from './IPageSidebar';

const RealmPageSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <div className={`fixed ${isOpen ? 'w-16 lg:w-48' : 'w-0'} bg-gray-800 text-white h-full transition-all duration-300`}>
            {isOpen && (
               <nav className="flex flex-col space-y-4 p-2 py-6">
					<div className="flex items-center space-x-3 mx-auto lg:mx-0">
						<Home className="text-white" />
						<span className="text-sm lg:inline-block hidden">Home</span>
					</div>
					<div className="flex items-center space-x-3 mx-auto lg:mx-0">
						<Users className="text-white" />
						<span className="text-sm lg:inline-block hidden">Users</span>
					</div>
					<div className="flex items-center space-x-3 mx-auto lg:mx-0">
						<GripIcon className="text-white"/>
						<span className="text-sm lg:inline-block hidden">Apps</span>
					</div>
					<div className="flex items-center space-x-3 mx-auto lg:mx-0">
						<Settings className="text-white"/>
						<span className="text-sm lg:inline-block hidden">Settings</span>
					</div>
				</nav>
            )}
        </div>
    );
};

export default RealmPageSidebar;
