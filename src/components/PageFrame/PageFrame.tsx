"use client";

import React from "react";
import { ContextProps } from "@/context/AuthContext/IAuthContext";
import { PageFrameProps } from "./Interfaces/IPageFrame";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const RealmPageFrame: React.FC<PageFrameProps> = ({ children, requireAuth = false }) => {
	return (
		<AuthGuard requireAuth={requireAuth}>
			{children}
		</AuthGuard>
	);
};

export default RealmPageFrame;