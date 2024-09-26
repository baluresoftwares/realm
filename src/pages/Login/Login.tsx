"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardContent, CardFooter } from "@/components/UI/card";
import { AlertMessage, AlertType } from '@/components/AlertMessage';
import { RealmClientBranding, realmEnums } from '@/config';
import RealmCardHeader from '@/components/CardHeader/CardHeader';
import Content from './Content';
import RealmCardFooter from '@/components/CardFooter/CardFooter';
import { RealmAnimatedIcon } from '@/components/AnimatedIcon/AnimatedIcon';
import { LoginState } from './Interfaces/ILogin';
import RealmCardFrame from '@/components/CardFrame/CardFrame';

export default function Login(): JSX.Element {
    const [alertState, setAlertState] = useState<{ type: AlertType; message: string } | null>(null);
	const [loginState, setLoginState] = useState<LoginState>(realmEnums.loginStates.initial);
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

    const isDarkMode = RealmClientBranding.theme.type === 'dark';

    const handleLogin = (provider: string): void => {
        setSelectedProvider(provider);
        setLoginState(realmEnums.loginStates.redirecting);
        
        setTimeout(() => {
            setLoginState(realmEnums.loginStates.verified);
        }, 2000);
    };

    const checkMarkPaths = ["M4 12.6111L8.92308 17.5L20 6.5"];

    const renderLoginContent = () => {
		switch (loginState) {
			case (realmEnums.loginStates.initial):
				return (
					<Content 
						options={RealmClientBranding.login.options}
						isDarkMode={isDarkMode}
						onLogin={handleLogin}
					/>
				);
			case (realmEnums.loginStates.redirecting):
				return (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/65'} backdrop-blur-md rounded-lg`}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="flex items-center justify-center py-8"
						>
							<motion.div 
								className="text-center flex flex-col items-center justify-center"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<h2 className={`font-medium text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
									Redirecting to {selectedProvider}
								</h2>
								<p className={`font-light text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
									Please wait while we connect you...
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				);
			case (realmEnums.loginStates.verified):
				return (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/65'} backdrop-blur-md rounded-lg`}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="flex items-center justify-center py-8"
						>
							<motion.div 
								className="text-center flex flex-col items-center justify-center"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, ease: "easeOut" }}
									className={`flex flex-col items-center ${isDarkMode ? 'text-gray-200' : 'text-green-600'}`}
								>
									<div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-full p-3 shadow-lg mb-4`}>
										<RealmAnimatedIcon paths={checkMarkPaths} />
									</div>
									<h2 className="font-semibold text-xl">Verified</h2>
									<p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
										You will be redirected shortly...
									</p>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				);
		}
	};

    return (
        <RealmCardFrame>
            <RealmCardHeader 
                title={<>Welcome to <span className="font-semibold">{RealmClientBranding.companyName}</span></>}
				description="Choose your preferred method to sign in"
            />
            <CardContent className="space-y-6">
                {alertState && <AlertMessage type={alertState.type} message={alertState.message} />}
                <AnimatePresence mode="wait">
                    {renderLoginContent()}
                </AnimatePresence>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <RealmCardFooter 
					isDarkMode={isDarkMode} 
					companyName="Balure Softwares"
					links={[
						{ text: "Contact Support", href: "/support" },
						{ text: "Privacy Policy", href: "/privacy" },
						{ text: "Terms of Service", href: "/terms" }
					]}
				/>
            </CardFooter>
        </RealmCardFrame>
    );
}