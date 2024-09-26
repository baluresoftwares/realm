export interface FooterLink {
    text: string;
    href?: string;
	onClick?: () => void
}

export interface FooterProps {
    isDarkMode: boolean;
    companyName: string;
    links?: FooterLink[];
}