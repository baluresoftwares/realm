import React from 'react';
import { CardHeader, CardTitle, CardDescription } from "@/components/UI/card";
import { RealmClientBranding } from '@/config';
import { RealmCardHeaderProps } from './Interfaces/ICardHeader';

const RealmCardHeader: React.FC<RealmCardHeaderProps> = ({
    title,
    subtitle,
    description,
    className = '',
}) => {
    const { companyName, logoUrl, theme } = RealmClientBranding;
    const isDarkMode = theme.type === 'dark';

    const textColorClass = isDarkMode ? 'text-gray-100' : 'text-gray-800';
    const subTextColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
    const descriptionColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';

    return (
        <CardHeader className={`flex flex-col items-center text-center ${className}`}>
            {logoUrl && (
                <div className="w-40 h-28 flex items-center justify-center">
                    <img 
                        className="max-w-full max-h-full object-contain" 
                        src={logoUrl} 
                        alt={`${companyName || 'Company'} logo`}
                    />
                </div>
            )}
            {title && (
                <CardTitle className={`text-2xl font-medium ${textColorClass}`}>
                    {title}
                </CardTitle>
            )}
            {subtitle && (
                <CardTitle className={`text-base font-normal ${subTextColorClass}`}>
                    {subtitle}
                </CardTitle>
            )}
            {description && (
                <CardDescription className={descriptionColorClass}>
                    {description}
                </CardDescription>
            )}
        </CardHeader>
    );
};

export default RealmCardHeader;