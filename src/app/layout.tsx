import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Praca",
    description: "Remote job listing",
};

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {/* child wrapper */}
                <div className="p-5 max-w-screen-2xl m-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
