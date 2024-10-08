"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardContent, CardFooter } from "@/components/UI/card";
import { AlertMessage, AlertType } from '@/components/AlertMessage';
import { RealmClientBranding, RealmEnums } from '@/config';
import RealmCardHeader from '@/components/CardHeader/CardHeader';
import Content from './Content';
import RealmCardFooter from '@/components/CardFooter/CardFooter';
import { RealmAnimatedIcon } from '@/components/AnimatedIcon/AnimatedIcon';
import { LoginState } from './Interfaces/ILogin';
import RealmCardFrame from '@/components/CardFrame/CardFrame';
import { CheckMarkPath, CrossPath } from '@/utils/SVG';

export default function Login(): JSX.Element {
    const [alertState, setAlertState] = useState<{ type: AlertType; message: string } | null>(null);
	const [loginState, setLoginState] = useState<LoginState>(RealmEnums.loginStates.initial);
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

    const isDarkMode = RealmClientBranding.theme.type === 'dark';

    const handleLogin = (provider: string): void => {
        setSelectedProvider(provider);
        setLoginState(RealmEnums.loginStates.redirecting);
        
        setTimeout(() => {
            setLoginState(RealmEnums.loginStates.verified);
        }, 2000);
    };

    const renderLoginContent = () => {
		switch (loginState) {
			case (RealmEnums.loginStates.initial):
				return (
					<Content 
						options={RealmClientBranding.login.options}
						isDarkMode={isDarkMode}
						onLogin={handleLogin}
					/>
				);

			{/* show redirecting state and where the user is being redirected towards */}
			case (RealmEnums.loginStates.redirecting):
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
								initial={{ y: 5, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<h2 className={`font-medium text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
									Redirecting to {<span className="font-semibold">{selectedProvider}</span>}
								</h2>
								<p className={`font-light text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
									Please wait while we connect you...
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				);

			{/* person is verified! let's do the funky visual stuff */}
			case (RealmEnums.loginStates.verified):
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
							<div className="text-center flex flex-col items-center justify-center">
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.2, ease: "easeIn" }}
									className={`flex flex-col items-center ${isDarkMode ? 'text-gray-200' : 'text-green-600'}`}
								>
									<div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-full p-3 shadow-lg mb-4`}>
										<RealmAnimatedIcon paths={CheckMarkPath} />
									</div>
									<h2 className="font-semibold text-xl">Verified</h2>
									<p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
										You will be redirected shortly...
									</p>
								</motion.div>
							</div>
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