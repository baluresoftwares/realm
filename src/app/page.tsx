import IndexPage from "@/pages/Index/Index";
import { Google, Microsoft, Apple } from "@mui/icons-material";

const customBranding = {
    companyName: "Glendowie College",
    logoUrl: "gdc_logo.webp",
    primaryColor: "#59d990",
    secondaryColor: "#41a36d",
	theme: "light" as const,
    login: {
        label: "Please verify your identity",
        options: [
            { name: "Google", icon: Google },
            { name: "Microsoft", icon: Microsoft }
        ]
    }
};

export default function Home() {
    return <IndexPage branding={customBranding} />;
}