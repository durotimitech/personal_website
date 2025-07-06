'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-40 bg-[#181622]/80 backdrop-blur border-b border-[#222]"
        >
            <div className="container-custom flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="font-bold text-lg tracking-widest text-white uppercase">
                    Sanches
                </Link>
                {/* Nav Links */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
                    <Link href="/">Home</Link>
                    <Link href="#services">Service</Link>
                    <Link href="#about">About</Link>
                </div>
                {/* Email */}
                <a
                    href="mailto:sancheshovny@gmail.com"
                    className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ff00ff] hover:underline hover:opacity-80 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Say hi · sancheshovny@gmail.com ↗
                </a>
            </div>
        </motion.nav>
    );
} 