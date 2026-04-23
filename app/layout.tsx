import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import localFont from "next/font/local";

const plusJakarta = localFont({
    src: [
        {
            path: "../public/fonts/PlusJakartaSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/PlusJakartaSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/PlusJakartaSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/PlusJakartaSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-plus-jakarta",
});

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
        <html lang="en" className={`${plusJakarta.variable}`}>
            <body className="font-plus-jakarta">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
