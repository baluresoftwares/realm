"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/UI/card";
import { Google, Microsoft } from "@mui/icons-material";
import { BrandingProps } from './IBranding';
import { AlertMessage, AlertType } from '../AlertMessage';

export const DefaultBranding: BrandingProps = {
    companyName: "Your Company",
    logoUrl: "placeholder.webp",
    primaryColor: "#3b82f6",
    secondaryColor: "#10b981",
    theme: 'light',
    login: {
        label: "Sign in to your account",
        options: [
            { name: "Google", icon: Google },
            { name: "Microsoft", icon: Microsoft }
        ]
    }
};

const darkenColor = (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const rgb = parseInt(hex, 16);
    const r = Math.max(0, (rgb >> 16) - amount);
    const g = Math.max(0, ((rgb >> 8) & 0x00FF) - amount);
    const b = Math.max(0, (rgb & 0x0000FF) - amount);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export default function Login({ branding = DefaultBranding }: { branding?: BrandingProps }) {
    const [alertState, setAlertState] = useState<{ type: AlertType; message: string } | null>(null);

    const isDarkMode = branding.theme === 'dark';
    const darkenedPrimary = isDarkMode ? darkenColor(branding.primaryColor, 180) : darkenColor(branding.primaryColor, 50);
    const darkenedSecondary = isDarkMode ? darkenColor(branding.secondaryColor, 180) : darkenColor(branding.secondaryColor, 50);

    const handleLogin = (provider: string) => {
        // Simulate different alert types for demonstration purposes
        const alertTypes: AlertType[] = ['error', 'success', 'info', 'warning'];
        const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        setAlertState({
            type: randomType,
            message: `Login with ${provider} ${randomType === 'success' ? 'successful' : randomType === 'error' ? 'failed' : 'in progress'}. ${randomType === 'info' ? 'Please wait...' : randomType === 'error' ? 'Please try again.' : ''}`
        });
        // In a real application, you would handle the login logic here
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}
             style={{
                 background: `linear-gradient(135deg, ${darkenedPrimary}, ${darkenedSecondary})`
             }}>
            <div className="absolute inset-0 w-full h-full">
                <div className={`absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br ${isDarkMode ? 'from-black/20 to-black/10' : 'from-white/10 to-white/5'} blur-3xl`}></div>
            </div>
            
            <motion.div 
                className="w-full max-w-md relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className={`${isDarkMode ? 'bg-gray-900/80' : 'bg-white/70'} border-gray-200/50 shadow-xl backdrop-blur-[2px]`}>
                    <CardHeader className="flex items-center space-y-1 text-center">
                        <div className="w-40 h-28 flex items-center justify-center">
                            <img 
                                className="max-w-full max-h-full object-contain" 
                                src={branding.logoUrl} 
                                alt={`${branding.companyName} logo`}
                            />
                        </div>
                        <CardTitle className={`text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                            <span className="font-normal">Welcome to </span>
                            <span className="font-semibold">{branding.companyName}</span>
                        </CardTitle>
                        <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{branding.login.label}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {alertState && <AlertMessage type={alertState.type} message={alertState.message} />}
                        {branding.login.options && branding.login.options.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4">
                                {branding.login.options.map((option, index) => {
                                    const IconComponent = option.icon;
                                    return (
                                        <Button 
                                            key={index}
                                            className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} border-gray-300 transition-colors duration-200`}
                                            onClick={() => handleLogin(option.name)}
                                        >
                                            <IconComponent className="h-5 w-5 mr-2" />
                                            <span className="font-light">{option.name}</span>
                                        </Button>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No login options available. Please contact the administrator.</p>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="text-sm text-center">
                            <p className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>
                                Can't log in?{" "}
                                <a href="#" className={`font-medium ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
                                    Contact support
                                </a>
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}