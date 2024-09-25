import React from 'react';
import { CopyrightDisclaimerProps } from './ICopyrightDisclaimer';

const CopyrightDisclaimer: React.FC<CopyrightDisclaimerProps> = ({ 
	companyName, 
	year = new Date().getFullYear(),
	isDarkMode = false
}) => {
	return (
		<div className={`text-xs mt-5 text-center text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
			<p>
				&copy; {year} {companyName}. All rights reserved.
			</p>
			<p className="mt-1">
				Unauthorized access or use of this system is prohibited and may be subject to legal action.
			</p>
		</div>
	);
};

export default CopyrightDisclaimer;