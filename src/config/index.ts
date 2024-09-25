import { Google, Microsoft, Apple, GitHub } from "@mui/icons-material";
import { BrandingProps } from "@/components/Login/Interfaces/IBranding";

export const clientBranding: BrandingProps = {
    companyName: "Grey Hat",
    logoUrl: "blackhat.png",
    primaryColor: "#b6b6b6",
    secondaryColor: "#747474",
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