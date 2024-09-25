"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/UI/card";
import { Google, Microsoft } from "@mui/icons-material";
import { AlertMessage, AlertType } from '../AlertMessage';
import { BrandingProps } from './Interfaces/IBranding';
import { clientBranding } from '@/config';
import LoginHeader from './Header';
import LoginOptions from './LoginOptions';
import SupportLink from './SupportLink';

const darkenColor = (color: string, amount: number): string => {
    const hex = color.replace('#', '');
    const rgb = parseInt(hex, 16);
    const r = Math.max(0, (rgb >> 16) - amount);
    const g = Math.max(0, ((rgb >> 8) & 0x00FF) - amount);
    const b = Math.max(0, (rgb & 0x0000FF) - amount);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export default function Login(): JSX.Element {
    const [alertState, setAlertState] = useState<{ type: AlertType; message: string } | null>(null);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
    const [showManualRedirect, setShowManualRedirect] = useState(false);

    const isDarkMode = clientBranding.theme.type === 'dark';
    const darkenedPrimary = isDarkMode ? darkenColor(clientBranding.primaryColor, 175) : darkenColor(clientBranding.primaryColor, 50);
    const darkenedSecondary = isDarkMode ? darkenColor(clientBranding.secondaryColor, 175) : darkenColor(clientBranding.secondaryColor, 50);

    const handleLogin = (provider: string): void => {
        setSelectedProvider(provider);
        setIsRedirecting(true);
		
        // Simulating a redirect delay
        setTimeout(() => {
            // Implement your actual redirect logic here
            console.log(`Redirecting to ${provider} login...`);

            // If the redirect doesn't happen, show the manual redirect option
            setShowManualRedirect(true);
        }, 3000);
    };

    const handleManualRedirect = () => {
        // Implement your manual redirect logic here
        console.log(`Manually redirecting to ${selectedProvider} login...`);
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
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card className={`${isDarkMode ? 'bg-gray-900/80' : 'bg-white/70'} ${isDarkMode ? 'border-gray-500/50' : 'border-gray-200/50'} shadow-xl backdrop-blur-[2px] relative`}>
                    <LoginHeader 
                        companyName={clientBranding.companyName}
                        logoUrl={clientBranding.logoUrl}
                        label={clientBranding.login.label}
                        isDarkMode={isDarkMode}
                    />
                    <CardContent className="space-y-4">
                        {alertState && <AlertMessage type={alertState.type} message={alertState.message} />}
                        <div className="relative">
                            <LoginOptions 
                                options={clientBranding.login.options}
                                isDarkMode={isDarkMode}
                                onLogin={handleLogin}
                            />
                            <AnimatePresence>
                                {isRedirecting && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/50'} backdrop-blur-lg rounded-lg`}
                                    >
                                        <div className="text-center">
                                            <h1 className={`font-medium text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Redirecting to {selectedProvider}
                                            </h1>
                                            <p className={`font-light text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                You will be automatically logged in upon completing verification
                                            </p>
                                            <AnimatePresence>
                                                {showManualRedirect && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.3 }}
                                                        className={`mt-4 font-extralight cursor-pointer text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                                                        onClick={handleManualRedirect}
                                                    >
                                                        Click here to manually redirect
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <SupportLink isDarkMode={isDarkMode} />
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}

export const DefaultBranding: BrandingProps = {
    companyName: "Your Company",
    logoUrl: "placeholder.webp",
    primaryColor: "#3b82f6",
    secondaryColor: "#10b981",
    theme: {
        type: 'light',
    },
    login: {
        label: "Sign in to your account",
        options: [
            { name: "Google", icon: Google },
            { name: "Microsoft", icon: Microsoft }
        ]
    }
};