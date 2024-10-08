import React from 'react';
import { CardHeader, CardTitle, CardDescription } from "@/components/UI/card";
import { UnauthorizedHeaderProps } from './Interfaces/IUnauthorized';

const Header: React.FC<UnauthorizedHeaderProps> = ({ companyName, logoUrl, label, isDarkMode }) => (
    <CardHeader className="flex items-center space-y-1 text-center">
        <div className="w-40 h-28 flex items-center justify-center">
            <img 
                className="max-w-full max-h-full object-contain" 
                src={logoUrl} 
                alt={`${companyName} logo`}
            />
        </div>
        <CardTitle className={`text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            <span className="font-normal">Welcome to </span>
            <span className="font-semibold">{companyName}</span>
        </CardTitle>
        <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{label}</CardDescription>
    </CardHeader>
);

export default Header;