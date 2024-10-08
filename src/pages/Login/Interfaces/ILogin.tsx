import { SvgIconProps } from '@mui/material';
import { BrandingProps } from './IBranding';
import { RealmEnums } from '@/config';

export type LoginState = typeof RealmEnums.loginStates[keyof typeof RealmEnums.loginStates];

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