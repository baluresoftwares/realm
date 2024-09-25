import { SvgIconProps } from '@mui/material';
import { BrandingProps } from './IBranding';
import { realmEnums } from '@/config';

export type LoginState = typeof realmEnums.loginStates[keyof typeof realmEnums.loginStates];

export interface LoginOption {
    name: string;
    icon: React.ComponentType<SvgIconProps>;
}

export interface LoginHeaderProps {
    companyName: string;
    logoUrl: string;
    label: string;
    isDarkMode: boolean;
}

export interface LoginOptionsProps {
    options: LoginOption[];
    isDarkMode: boolean;
    onLogin: (provider: string) => void;
}