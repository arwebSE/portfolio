import "./css/style.css";

import Header from "@/components/ui/header";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "arweb",
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
                    <div className="antialiased tracking-tight">
                        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                            <Header />
                            {children}
                        </div>
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
