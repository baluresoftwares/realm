"use client";

import React from 'react';
import { CardContent, CardFooter } from "@/components/UI/card";
import { RealmClientBranding } from '@/config';
import RealmCardHeader from '@/components/CardHeader/CardHeader';
import RealmCardFooter from '@/components/CardFooter/CardFooter';
import RealmCardFrame from '@/components/CardFrame/CardFrame';
import Content from './Content';

export default function Unauthorized(): JSX.Element {
    const isDarkMode = RealmClientBranding.theme.type === 'dark';

    const lockPaths = [
        "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z",
        "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
    ];

    return (
        <RealmCardFrame>
            <RealmCardHeader />
            <CardContent className="space-y-4">
                <Content isDarkMode={isDarkMode} lockPaths={lockPaths} />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <RealmCardFooter 
					isDarkMode={isDarkMode} 
					companyName="Balure Softwares"
					links={[
						{ text: "Return to Login", href: "/" },
					]}
				/>
            </CardFooter>
        </RealmCardFrame>
    );
}