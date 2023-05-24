import "./css/style.css";

import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

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
            <body
                className={`${inter.variable} font-inter antialiased text-gray-900 tracking-tight`}
            >
                <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                    <Header />
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
