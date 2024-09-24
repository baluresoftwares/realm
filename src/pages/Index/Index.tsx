"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { EyeIcon, EyeOffIcon } from 'lucide-react';

interface BrandingProps {
    companyName: string;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
}

const defaultBranding: BrandingProps = {
    companyName: "YourCompany",
    logoUrl: "/logo.svg",
    primaryColor: "#3b82f6",
    secondaryColor: "#10b981"
};

export default function LoginPage({ branding = defaultBranding }: { branding?: BrandingProps }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            <motion.div 
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card className="bg-gray-800/80 border-0 shadow-2xl backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg" />
                    <CardHeader className="relative z-10 space-y-1 pb-8">
                        <motion.div 
                            className="flex justify-center mb-6"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <img src={branding.logoUrl} alt={`${branding.companyName} logo`} className="h-16 w-auto" />
                        </motion.div>
                        <CardTitle className="text-3xl font-bold text-center text-white">{branding.companyName}</CardTitle>
                        <CardDescription className="text-center text-gray-300">Access your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                        <motion.div 
                            className="space-y-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            <Label htmlFor="email" className="text-gray-200">Email</Label>
                            <Input id="email" type="email" placeholder="10000@gdc.school.nz" 
                                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                        </motion.div>
                        <motion.div 
                            className="space-y-2"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <Label htmlFor="password" className="text-gray-200">Password</Label>
                            <div className="relative">
                                <Input 
                                    id="password" 
                                    type={showPassword ? "text" : "password"} 
                                    className="bg-gray-700/50 border-gray-600 text-white pr-10 focus:ring-2 focus:ring-blue-500 transition-all duration-300" 
                                />
                                <button 
                                    type="button" 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                            </div>
                        </motion.div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 relative z-10">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <Button 
                                className="w-full text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                                style={{
                                    background: `linear-gradient(135deg, ${branding.primaryColor}, ${branding.secondaryColor})`,
                                }}
                            >
                                Sign In
                            </Button>
                        </motion.div>
                        <motion.div 
                            className="text-sm text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <a href="#" className="font-medium hover:underline text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                Forgot your password?
                            </a>
                        </motion.div>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}