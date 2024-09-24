"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Google, Microsoft } from "@mui/icons-material";
import { BrandingProps } from './IBranding';

export const DefaultBranding: BrandingProps = {
    companyName: "Your Company",
    logoUrl: "placeholder.webp",
    primaryColor: "#3b82f6",
    secondaryColor: "#10b981"
};

export default function Login({ branding = DefaultBranding }: { branding?: BrandingProps }) {
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
					<CardHeader className="flex items-center space-y-1 text-center">
                        <div className="w-40 h-28 flex items-center justify-center">
                            <img 
                                className="max-w-full max-h-full object-contain" 
                                src={branding.logoUrl} 
                                alt={`${branding.companyName} logo`}
                            />
                        </div>
						<CardTitle className="text-xl text-white">
                            <span className="font-normal">Welcome to </span>
                            <span className="font-semibold">{branding.companyName}</span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">Sign in to your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
								<Google className="h-5 w-5 mr-2" />
								<span className="font-light">Google</span>
                            </Button>
							<Button className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
								<Microsoft className="h-5 w-5 mr-2" />
								<span className="font-light">Microsoft</span>
                            </Button>
                        </div>
						<div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-600"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-gray-800 px-2 text-gray-400">Or continue with</span>
                            </div>
                        </div>
						<form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    required
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
						<Button 
							type="submit"
							className="w-full text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:opacity-90"
							style={{
								background: `linear-gradient(135deg, ${branding.primaryColor}, ${branding.secondaryColor})`,
							}}
						>
							Sign in with Email
						</Button>
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