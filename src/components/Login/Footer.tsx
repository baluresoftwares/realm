import { SupportLinkProps } from "./Interfaces/IFooter";
import CopyrightDisclaimer from "../CopyrightDisclaimer/CopyrightDisclaimer";

const Footer: React.FC<SupportLinkProps> = ({ isDarkMode }) => (
    <div className="text-sm text-center">
        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
            Can't log in?{" "}
            <a href="#" className={`font-medium ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
                Contact support
            </a>
        </p>
		<CopyrightDisclaimer 
			companyName="Balure Softwares"
			isDarkMode
		/>
    </div>
);

export default Footer;