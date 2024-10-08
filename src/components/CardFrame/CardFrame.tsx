import React from "react";
import { motion } from 'framer-motion';
import { Card } from "../UI/card";
import { LayoutProps } from "./Interfaces/ICardFrame";
import { DarkenColor } from "@/utils/Colors";
import { RealmClientBranding } from "@/config";

export const RealmCardFrame: React.FC<LayoutProps> = ({ children }) => {
    const isDarkMode = RealmClientBranding.theme.type === 'dark';
    const darkenedPrimary = isDarkMode ? 
        DarkenColor(RealmClientBranding.primaryColor, 175) : 
        DarkenColor(RealmClientBranding.primaryColor, 50);
    const darkenedSecondary = isDarkMode ? 
        DarkenColor(RealmClientBranding.secondaryColor, 175) : 
        DarkenColor(RealmClientBranding.secondaryColor, 50);

    return (
        <div 
            className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}
            style={{
                background: `linear-gradient(135deg, ${darkenedPrimary}, ${darkenedSecondary})`
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                <div 
                    className={`absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br ${isDarkMode ? 'from-black/30 to-black/20' : 'from-white/20 to-white/10'}`}
                    style={{ filter: 'blur(24px)' }}
                ></div>
            </div>
            
            <div className="w-full max-w-md relative z-10">
                <Card className={`
                    ${isDarkMode ? 'bg-gray-900/60' : 'bg-white/65'} 
                    ${isDarkMode ? 'border-gray-500/50' : 'border-gray-200/50'} 
                    shadow-xl relative rounded-2xl overflow-hidden
                `}>
                    <div className="absolute inset-0 backdrop-blur-md z-0"></div>
                    <div className="relative z-10">
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default RealmCardFrame;