import React from 'react';
import { UnauthorizedContentProps } from './Interfaces/IUnauthorized';
import { RealmAnimatedIcon } from '@/components/AnimatedIcon/AnimatedIcon';

const Content: React.FC<UnauthorizedContentProps> = ({ isDarkMode, lockPaths }) => {
    return (
        <div className="flex flex-col items-center justify-center py-3">
			<div className={`${isDarkMode ? 'text-white-400' : 'text-gray-600'}`}>
				<RealmAnimatedIcon paths={lockPaths} />
			</div>
			<h2 className={`mt-4 text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
				Unauthorized Access
			</h2>
			<p className={`mt-2 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
				If you believe this is an error, please contact your system administrator or try logging in again.
			</p>
		</div>
    );
};

export default Content;