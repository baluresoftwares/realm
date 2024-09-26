import React from 'react';
import CopyrightDisclaimer from '../CopyrightDisclaimer/CopyrightDisclaimer';
import { FooterLink, FooterProps } from './Interfaces/ICardFooter';

const RealmCardFooter: React.FC<FooterProps> = ({ isDarkMode, companyName, links = [] }) => {
    const textColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
    const linkColorClass = isDarkMode 
        ? 'text-blue-300 hover:text-blue-200' 
        : 'text-blue-600 hover:text-blue-500';

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: FooterLink) => {
        if (link.onClick) {
            e.preventDefault();
            link.onClick();
        }
    };

    return (
        <div className="text-sm text-center">
            {links.length > 0 && (
                <p className={textColorClass}>
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && " | "}
                            <a 
                                href={link.href || "#"}
                                onClick={(e) => handleClick(e, link)}
                                className={`font-medium ${linkColorClass} transition-colors cursor-pointer`}
                            >
                                {link.text}
                            </a>
                        </React.Fragment>
                    ))}
                </p>
            )}
            <CopyrightDisclaimer
                companyName={companyName}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};

export default RealmCardFooter;