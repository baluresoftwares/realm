import { ReactNode } from "react"

export interface User {
	id: string,
	username: string
}

export interface AuthState {
	stateToken: string | null,
	isAuthenticated: boolean
}

export interface AuthContextType {
	user: User | null,
	authState: AuthState,
	login: (username: string, password: string) => Promise<void>,
	logout: () => void
}

export interface ContextProps {
	children: ReactNode
}