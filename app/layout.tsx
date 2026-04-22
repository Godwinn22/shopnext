import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
