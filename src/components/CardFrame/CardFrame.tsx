import React from "react";
import { motion } from 'framer-motion';
import { Card } from "../UI/card";
import { LayoutProps } from "./Interfaces/ICardFrame";
import { DarkenColor } from "@/utils/Colors";
import { realmClientBranding } from "@/config";

export const CardFrame: React.FC<LayoutProps> = ({ children }) => {
    const isDarkMode = realmClientBranding.theme.type === 'dark';
    const darkenedPrimary = isDarkMode ? 
								DarkenColor(realmClientBranding.primaryColor, 175) : 
								DarkenColor(realmClientBranding.primaryColor, 50);
    const darkenedSecondary = isDarkMode ? 
								DarkenColor(realmClientBranding.secondaryColor, 175) : 
								DarkenColor(realmClientBranding.secondaryColor, 50);

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}
             style={{
                 background: `linear-gradient(135deg, ${darkenedPrimary}, ${darkenedSecondary})`
             }}>
            <div className="absolute inset-0 w-full h-full">
                <div className={`absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br ${isDarkMode ? 'from-black/20 to-black/10' : 'from-white/10 to-white/5'} blur-3xl`}></div>
            </div>
            
            <motion.div 
                className="w-full max-w-md relative z-10"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className={`${isDarkMode ? 'bg-gray-900/80' : 'bg-white/70'} ${isDarkMode ? 'border-gray-500/50' : 'border-gray-200/50'} shadow-xl backdrop-blur-[2px] relative rounded-2xl`}>
                    {children}
                </Card>
            </motion.div>
        </div>
    );
};

export default CardFrame;