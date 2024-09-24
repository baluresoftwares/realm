import IndexPage from "@/pages/Index/Index";

const customBranding = {
	companyName: "Glendowie College",
	primaryColor: "#4a5568",
	secondaryColor: "#ed8936",
	logoUrl: "/glendowie-logo.svg",
};

export default function Home() {
	return <IndexPage branding={customBranding} />
}
