'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div
                className={`
                    w-full max-w-4xl
                    flex items-center justify-between
                    rounded-xl
                    border border-white/10
                    px-4 py-2
                    transition-all duration-300
                    backdrop-blur-xl

                    ${scrolled
                        ? 'bg-[#11181C]/90 shadow-2xl'
                        : 'bg-[#2F2F2FB2]/70'
                    }
                `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="
                        text-2xl
                        font-semibold
                        tracking-tight
                    "
                >
                    N7
                </Link>

                {/* Nav Links */}
                <div
                    className="
                        hidden md:flex
                        items-center gap-10
                        text-xs
                        text-white/80
                        font-mono
                    "
                >
                    <Link
                        href="/solutions"
                        className="
                            flex items-center gap-1.5
                            hover:text-white
                            transition-colors
                        "
                    >
                        SOLUTIONS

                        <span
                            className="
            inline-block
            text-2xl
            opacity-70
            leading-none
            rotate-90
        "
                        >
                            ›
                        </span>
                    </Link>

                    <Link
                        href="/resources"
                        className="
                            flex items-center gap-1.5
                            hover:text-white
                            transition-colors
                        "
                    >
                        RESOURCES

                        <span
                            className="
            inline-block
            text-2xl
            opacity-70
            leading-none
            rotate-90
        "
                        >
                            ›
                        </span>
                    </Link>

                    <Link
                        href="/about"
                        className="
                            hover:text-white
                            transition-colors
                        "
                    >
                        ABOUT US
                    </Link>
                </div>

                {/* CTA */}
                <Link
                    href="/demo"
                    className="
                        border border-white/30
                        px-6 py-2
                        rounded-md
                        text-xs
                        font-mono
                        hover:bg-white
                        hover:text-black
                        transition-all duration-300
                    "
                >
                    REQUEST DEMO
                </Link>
            </div>
        </nav>
    );
}
