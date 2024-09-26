import { Google, Microsoft, Apple, GitHub } from "@mui/icons-material";
import { BrandingProps } from "@/pages/Login/Interfaces/IBranding";
import { RealmEnumsProps } from "@/interfaces/IEnums";

export const realmEnums: RealmEnumsProps = {
	loginStates: {
		initial: "initial",
		redirecting: "redirecting",
		verified: "verified"
	}
}

export const RealmClientBranding: BrandingProps = {
    companyName: "Your Company",
    logoUrl: "placeholder.webp",
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