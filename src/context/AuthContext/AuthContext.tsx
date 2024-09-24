"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { User, AuthState, AuthContextType, ContextProps } from "@/context/AuthContext/IAuthContext";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const DefaultState = {
	stateToken: null,
	isAuthenticated: false
};

export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [authState, setAuthState] = useState<AuthState>(DefaultState);

	const login = async (username: string, password: string) => {
		const authenticatedUser: User = { id: '1', username };
		const authenticatedState: AuthState = { stateToken: "test", isAuthenticated: true };

		setUser(authenticatedUser);
		setAuthState(authenticatedState);
	};

	const logout = () => {
		const emptyState: AuthState = { stateToken: null, isAuthenticated: false }

		setUser(null);
		setAuthState(emptyState);
	};

	const value = {
		user,
		authState,
		login,
		logout,
	};

  	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
}