import React from 'react';
import { LoginOptionsProps } from "./Interfaces/ILogin";
import { Button } from "../UI/button";

const LoginOptions: React.FC<LoginOptionsProps> = ({ options, isDarkMode, onLogin }) => {
    if (!options || options.length === 0) {
        return (
            <p className={`text-center font-medium text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No login options available. Please contact the administrator.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-3">
            {options.map((option, index) => {
                const IconComponent = option.icon;
                return (
                    <Button 
                        key={index}
                        className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} border-gray-300 transition-colors duration-200`}
                        onClick={() => onLogin(option.name)}
                    >
                        <IconComponent className="h-5 w-5 mr-2" />
                        <span className="font-light">{option.name}</span>
                    </Button>
                );
            })}
        </div>
    );
};

export default LoginOptions;