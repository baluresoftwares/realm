import { SupportLinkProps } from "./Interfaces/IFooter";
import CopyrightDisclaimer from "@/components/CopyrightDisclaimer/CopyrightDisclaimer";

const Footer: React.FC<SupportLinkProps> = ({ isDarkMode }) => (
    <div className="text-sm text-center">
		<CopyrightDisclaimer 
			companyName="Balure Softwares"
			isDarkMode
		/>
    </div>
);

export default Footer;