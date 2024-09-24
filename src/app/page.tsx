import IndexPage from "@/pages/Index/Index";

const customBranding = {
    companyName: "Glendowie College",
    logoUrl: "gdc_logo.webp",
    primaryColor: "#59d990",
    secondaryColor: "#41a36d"
};

export default function Home() {
    return <IndexPage branding={customBranding} />;
}