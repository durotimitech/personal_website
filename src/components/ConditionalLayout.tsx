"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <>
            {!isHomePage && <Hero />}
            <main className="flex-1">{children}</main>
            {!isHomePage && <Footer />}
        </>
    );
}

