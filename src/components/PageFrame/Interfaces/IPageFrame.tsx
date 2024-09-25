import { ContextProps } from "@/context/AuthContext/IAuthContext";

export interface PageFrameProps extends ContextProps {
	requireAuth?: boolean;
}