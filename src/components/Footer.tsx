'use client';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    return (
        <footer className="w-full bg-neutral-50 rounded-2xl mt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-16 relative">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[8vw] md:text-[6vw] font-extrabold text-neutral-200 opacity-60 tracking-tight leading-none uppercase whitespace-nowrap z-0">
                        ATRALICK
                    </span>
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Left: Brand, description, email */}
                    <div className="flex flex-col gap-6 md:col-span-1">
                        <div>
                            <div className="font-extrabold text-lg mb-2">ATRALICK</div>
                            <div className="text-sm text-neutral-700 mb-4 max-w-xs">
                                Whether you're launching a new brand or refining an existing one, we're here to turn your ideas into impactful.
                            </div>
                            <form className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full max-w-xs">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent outline-none text-sm text-neutral-800 placeholder-neutral-400"
                                />
                                <button type="submit" className="ml-2 w-8 h-8 rounded-full bg-[#00FF57] flex items-center justify-center text-white text-lg shadow hover:bg-[#00e650] transition">
                                    <span className="inline-block">→</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Center: Let's Discuss button */}
                    <div className="hidden md:flex flex-col items-center justify-center col-span-1">
                        <button className="px-8 py-3 rounded-full bg-black text-white font-medium text-base flex items-center gap-2 shadow-lg">
                            Let&apos;s Discuss
                            <span className="w-7 h-7 rounded-full bg-[#00FF57] flex items-center justify-center ml-2 text-black text-lg">→</span>
                        </button>
                    </div>
                    {/* Right: Link columns */}
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <div className="font-semibold text-sm mb-3">Pages</div>
                            <ul className="space-y-2 text-sm text-neutral-700">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">Pages</a></li>
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Work</a></li>
                                <li><a href="#" className="hover:underline">Service</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold text-sm mb-3">Inner Pages</div>
                            <ul className="space-y-2 text-sm text-neutral-700">
                                <li><a href="#" className="hover:underline">Project single</a></li>
                                <li><a href="#" className="hover:underline">Service single</a></li>
                                <li><a href="#" className="hover:underline">Blog single</a></li>
                                <li><a href="#" className="hover:underline">Pricing single</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold text-sm mb-3">Utility Pages</div>
                            <ul className="space-y-2 text-sm text-neutral-700">
                                <li><a href="#" className="hover:underline">Style guide</a></li>
                                <li><a href="#" className="hover:underline">License</a></li>
                                <li><a href="#" className="hover:underline">Changelog</a></li>
                                <li><a href="#" className="hover:underline">404</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom row */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-neutral-200 text-xs text-neutral-500">
                    <div className="mb-4 md:mb-0">© Copyright 2025</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Linkedin</a>
                        <a href="#" className="hover:underline">Dribbble</a>
                        <a href="#" className="hover:underline">Behance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 