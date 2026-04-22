"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full border-b border-neutral bg-white px-6 py-4">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                {/* Brand */}
                <Link href="/" className="text-xl font-bold text-navy">
                    ShopNext
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${
                                pathname === link.href
                                    ? "text-primary font-semibold"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-gray-600 hover:text-black"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-400 ease-in-out hover:bg-navy"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex flex-col gap-1 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block h-0.5 w-6 bg-gray-900" />
                    <span className="block h-0.5 w-6 bg-gray-900" />
                    <span className="block h-0.5 w-6 bg-gray-900" />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mt-4 flex flex-col gap-4 border-t border-gray-100 pt-4 md:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm font-medium ${
                                pathname === link.href
                                    ? "text-black font-semibold"
                                    : "text-gray-500"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
                        <Link
                            href="/login"
                            className="text-sm font-medium text-gray-600"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
