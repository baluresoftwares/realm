import React from 'react';
import { Button } from "@/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/UI/card";

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
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-emerald-700">
            <div className="max-w-7xl mx-auto">
                
            </div>
        </div>
    );
}