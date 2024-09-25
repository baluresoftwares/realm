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
import Footer from './Footer';

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
    const [isVerified, setIsVerified] = useState(false);

    const isDarkMode = clientBranding.theme.type === 'dark';
    const darkenedPrimary = isDarkMode ? darkenColor(clientBranding.primaryColor, 175) : darkenColor(clientBranding.primaryColor, 50);
    const darkenedSecondary = isDarkMode ? darkenColor(clientBranding.secondaryColor, 175) : darkenColor(clientBranding.secondaryColor, 50);

    const handleLogin = (provider: string): void => {
        setSelectedProvider(provider);
        setIsRedirecting(true);
        
        setTimeout(() => {
			setShowManualRedirect(true);
			setTimeout(() => {
				setShowManualRedirect(false);
				setTimeout(() => {
					setIsVerified(true);
				}, 300)
			}, 1000);
		}, 2000);
    };

    const handleManualRedirect = () => {
        console.log(`Manually redirecting to ${selectedProvider} login...`);
    };

    const CheckMarkIcon = () => (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
        </svg>
    );

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
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className={`${isDarkMode ? 'bg-gray-900/80' : 'bg-white/70'} ${isDarkMode ? 'border-gray-500/50' : 'border-gray-200/50'} shadow-xl backdrop-blur-[2px] relative rounded-2xl`}>
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
                                        className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/65'} backdrop-blur-md rounded-lg`}
                                    >
                                        <motion.div 
                                            className="text-center flex flex-col items-center justify-center h-full"
                                            initial={{ y: 0 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <AnimatePresence>
                                                {!isVerified ? (
                                                    <motion.div
                                                        initial={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <h1 className={`font-medium text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                            Redirecting to {selectedProvider}
                                                        </h1>
                                                        <p className={`font-light text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                            You will be automatically logged in upon completing verification
                                                        </p>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                                        className={`flex flex-col items-center ${isDarkMode ? 'text-gray-200' : 'text-green-600'}`}
                                                    >
                                                        <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-full p-2 shadow-lg`}>
                                                            <CheckMarkIcon />
                                                        </div>
                                                        <h1 className="font-semibold text-lg mt-4">Verified</h1>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <AnimatePresence>
                                                {showManualRedirect && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
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
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Footer isDarkMode={isDarkMode} />
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