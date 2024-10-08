import { Google, Microsoft, Apple, GitHub } from "@mui/icons-material";
import { BrandingProps } from "@/pages/Login/Interfaces/IBranding";
import { RealmEnumsProps } from "@/interfaces/IEnums";

export const RealmEnums: RealmEnumsProps = {
	loginStates: {
		initial: "initial",
		redirecting: "redirecting",
		verified: "verified",
		denied: "denied"
	}
}

export const RealmClientBranding: BrandingProps = {
    companyName: "Your Company",
    logoUrl: "placeholder.webp",
    primaryColor: "#bbbbbb",
    secondaryColor: "#8a8a8a",
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