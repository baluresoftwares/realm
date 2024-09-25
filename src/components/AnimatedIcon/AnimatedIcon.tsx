import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedIconProps } from './Interfaces/IAnimatedIcon';

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ paths, className }) => (
    <svg className={className || "w-16 h-16"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths.map((d, index) => (
            <motion.path
                key={index}
                d={d}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.3 }}
            />
        ))}
    </svg>
);