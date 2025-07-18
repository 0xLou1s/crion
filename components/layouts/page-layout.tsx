"use client";

import { HomeHeader } from "@/components/layouts/headers/home-headers";
import FooterSection from "@/components/layouts/footers";
import DynamicBreadcrumb from "@/components/ui/dynamic-breadcrumb";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageLayoutProps {
    children: ReactNode;
    className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    if (isHomePage) {
        // Layout đặc biệt cho trang home - header fixed trên top, không có padding
        return (
            <div className="min-h-screen">
                {/* Header */}
                <HomeHeader />

                {/* Main Content - full height */}
                <main className={className}>
                    {children}
                </main>

                {/* Footer */}
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <HomeHeader />

            {/* Breadcrumb */}
            <DynamicBreadcrumb />

            {/* Main Content - spacing chuẩn, loại bỏ pt-20 vì breadcrumb đã có */}
            <main className={`flex-1 py-8 ${className}`}>
                {children}
            </main>

            {/* Footer - luôn ở cuối */}
            <FooterSection />
        </div>
    );
}
