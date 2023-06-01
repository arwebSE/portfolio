import "./css/style.css";

import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "ARWeb",
    description: "Shaping Your Online Presence",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip antialiased tracking-tight">
                        <Header />
                        {children}
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
