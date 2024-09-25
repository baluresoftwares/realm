import { LoginOption } from "./ILogin";

export interface BrandingProps {
    companyName: string;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    theme: {
		type: 'light' | 'dark';
	}
    login: {
        label: string;
        options: LoginOption[];
    };
}