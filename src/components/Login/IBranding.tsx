import { SvgIconProps } from '@mui/material';

export interface BrandingProps {
    companyName: string;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
	theme: "dark" | "light";
    login: {
        label: string;
        options: Array<{
            name: string;
            icon: React.ComponentType<SvgIconProps>;
        }>;
    };
}