import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface BrandingProps {
    companyName: string;
    primaryColor: string;
    secondaryColor: string;
    logoUrl: string;
}

// Default branding values
const defaultBranding: BrandingProps = {
    companyName: "YourCompany",
    primaryColor: "#3b82f6", // Blue
    secondaryColor: "#10b981", // Green
    logoUrl: "/logo.svg", // Replace with your default logo path
};

export default function Home({ branding = defaultBranding }: { branding?: BrandingProps }) {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: branding.primaryColor + '10' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <img src={branding.logoUrl} alt={`${branding.companyName} logo`} className="mx-auto h-20 w-auto mb-4" />
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Welcome to {branding.companyName}
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Your go-to platform for seamless access to all your academic resources.
                    </p>
                </div>

                {/* Main content */}
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Single Sign-On</CardTitle>
                                <CardDescription>Access all your applications with one login.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button style={{ backgroundColor: branding.secondaryColor }}>
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Resource Center</CardTitle>
                                <CardDescription>Find all the information you need in one place.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button style={{ backgroundColor: branding.secondaryColor }}>
                                    Explore Resources
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Support</CardTitle>
                                <CardDescription>Get help when you need it.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button style={{ backgroundColor: branding.secondaryColor }}>
                                    Contact Support
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}