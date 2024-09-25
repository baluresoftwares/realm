import { Google, Microsoft, Apple, GitHub } from "@mui/icons-material";
import { BrandingProps } from "@/components/Login/Interfaces/IBranding";

export const clientBranding: BrandingProps = {
    companyName: "Your Company",
    logoUrl: "placeholder.webp",
    primaryColor: "#dadada",
    secondaryColor: "#969696",
    theme: {
		type: 'light'
	},
    login: {
        label: "Please verify your identity",
        options: [
            { name: "Google", icon: Google },
            { name: "Microsoft", icon: Microsoft },
			{ name: "Apple", icon: Apple },
			{ name: "GitHub", icon: GitHub }
        ]
    }
};