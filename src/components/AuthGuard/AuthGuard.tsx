import React from 'react';
import { useAuth } from '@/context/AuthContext/AuthContext';
import Unauthorized from '@/components/Unauthorized/Unauthorized';
import { AuthGuardProps } from './IAuthGuard';

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requireAuth }) => {
	const { authState } = useAuth();

	if (requireAuth && !authState.isAuthenticated) {
		return <Unauthorized />;
	}

	return <>{children}</>;
};

export default AuthGuard;