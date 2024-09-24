"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";


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

export default function IndexPage({ branding = defaultBranding }: { branding?: BrandingProps }) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePasswordlessLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Implement your passwordless login logic here
        // This could involve sending a magic link or OTP to the user's email
        console.log('Passwordless login initiated for:', email);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    const handleSSOLogin = (provider: string) => {
        // Implement your SSO login logic here
        console.log('SSO login initiated with:', provider);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-emerald-500/30 to-teal-700/30 blur-3xl"></div>
            </div>
            
            <motion.div 
                className="w-full max-w-md relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="bg-gray-800/60 border-gray-700/50 shadow-xl backdrop-blur-md">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-2xl font-bold text-white">{branding.companyName}</CardTitle>
                        <CardDescription className="text-gray-300">Sign in to your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handlePasswordlessLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                />
                            </div>
                            <Button 
                                type="submit"
                                className="w-full text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:opacity-90"
                                style={{
                                    background: `linear-gradient(135deg, ${branding.primaryColor}, ${branding.secondaryColor})`,
                                }}
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending login link..." : "Sign in with Email"}
                            </Button>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-600"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-gray-800 px-2 text-gray-400">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <Button onClick={() => handleSSOLogin('google')} variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                                
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="text-sm text-center">
                            <a href="#" className="font-medium text-cyan-300 hover:text-cyan-100 transition-colors">
                                Can't login?
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}