"use client";

import React from 'react';
import { CardContent, CardFooter } from "@/components/UI/card";
import { realmClientBranding } from '@/config';
import LoginHeader from './Header';
import Footer from './Footer';
import CardFrame from '@/components/CardFrame/CardFrame';
import { AnimatedIcon } from '@/components/AnimatedIcon/AnimatedIcon';

export default function Unauthorized(): JSX.Element {
    const isDarkMode = realmClientBranding.theme.type === 'dark';

    const lockPaths = [
        "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z",
        "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
    ];

    return (
        <CardFrame>
            <LoginHeader 
                companyName={realmClientBranding.companyName}
                logoUrl={realmClientBranding.logoUrl}
                label=""
                isDarkMode={isDarkMode}
            />
            <CardContent className="space-y-4">
                <div className="flex flex-col items-center justify-center py-3">
                    <div className={`${isDarkMode ? 'text-white-400' : 'text-gray-600'}`}>
                        <AnimatedIcon paths={lockPaths} />
                    </div>
                    <h2 className={`mt-4 text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        Unauthorized Access
                    </h2>
                    <p className={`mt-2 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        If you believe this is an error, please contact your system administrator or try logging in again.
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <Footer isDarkMode={isDarkMode} />
            </CardFooter>
        </CardFrame>
    );
}