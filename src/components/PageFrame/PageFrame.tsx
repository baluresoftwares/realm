"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { ContextProps } from "@/utils/Interfaces";

import Unauthorized from "../Unauthorized/Unauthorized";

const PageFrame: React.FC<ContextProps> = ({ children }) => {
  	const { authState } = useAuth();

	let pageContent;
	if (authState.isAuthenticated) {
		pageContent = children;
	} else {
		pageContent = <Unauthorized />
	}

	return <>{pageContent}</>;
};

export default PageFrame;