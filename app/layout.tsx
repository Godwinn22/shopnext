import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export const metadata: Metadata = {
    title: "ShopNext",
    description:
        "Welcome to ShopNext, your one-stop destination for all your shopping needs. Explore our wide range of products and enjoy a seamless shopping experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
            <body className="font-plus-jakarta">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
