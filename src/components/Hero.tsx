'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TrustedBy from './TrustedBy';
import Button from './ui/Button';

    
    {
        title: 'User-Centered Design',
        description: 'Intuitive and engaging experiences, tailored for your audience.',
    },
    {
        title: 'Brand Identity & Strategy',
        description: 'Strong visual storytelling that makes your brand unforgettable.',
    },
    {
        title: 'Responsive & Modern UI',
        description: 'Pixel-perfect, design optimized for all devices.',
    },
    {
        title: 'Seamless Prototyping',
        description: 'Rapid design, prototyping, and iteration for efficiency.',
    },
];

const stats = [
    { value: '5+', label: 'Years of experience' },
    { value: '200+', label: 'Successful project' },
    { value: '98%', label: 'Satisfied clients' },
];

const menu = [
    { label: 'Home', href: '#', dropdown: false },
    // { label: 'About', href: '#' },
    // { label: 'Pages', href: '#', dropdown: true },
    // { label: 'Project', href: '#' },
    // { label: 'Service', href: '#' },
];

export default function Hero() {
    return (
        <section className="relative w-full min-h-[40vh] flex flex-col justify-between bg-gradient-to-br from-black via-[#0a2e1a] to-black overflow-hidden rounded-2xl shadow-xl">
            {/* Top Nav */}
            <nav className="flex items-center justify-between px-10 pt-8 pb-4">
                {/* Logo */}
                <div className="flex items-center gap-2 font-extrabold text-white text-xl tracking-tight">
                    CREATED BY TIMMY
                    <span className="text-[#00FF57] text-2xl align-super">*</span>
                </div>
                {/* Menu */}
                <div className="hidden md:flex gap-8 text-white font-medium text-base">
                    {menu.map((item) => (
                        <a key={item.label} href={item.href} className="flex items-center gap-1 hover:text-[#00FF57] transition">
                            {item.label}
                            {item.dropdown && (
                                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                            )}
                        </a>
                    ))}
                </div>
                {/* Right icons */}
                <div className="flex items-center gap-6">
                    {/* Contact button */}
                    <Button
                        href="mailto:mejabidurotimi@gmail.com"
                        variant="primary"
                        icon={
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                        }
                    >
                        Contact Me
                    </Button>
                </div>
            </nav>
            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between flex-1 w-full px-10 pb-16 pt-8 gap-8">
                {/* Headline */}
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-[3rem] md:text-[5rem] font-extrabold text-white leading-none tracking-tight relative">
                        Created By Timmy
                        <span className="text-[#00FF57] text-[4rem] md:text-[6rem] align-super absolute -right-1 top-0">*</span>
                    </h1>
                </div>
                {/* Right Side Intro */}
                <div className="flex-1 flex flex-col items-end justify-center max-w-md">
                    <div className="text-white text-right text-lg md:text-xl font-normal mb-8">
                        <span className="font-bold">Hi, I'm Timmy</span> <span className="text-neutral-300">I am a creative engineer with a passion for creating beautiful and functional digital experiences.</span>
                    </div>
                    <Button
                        href="mailto:mejabidurotimi@gmail.com"
                        variant="primary"
                        icon={
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                        }
                        className="mt-2"
                    >
                        Let&apos;s Discuss
                    </Button>
                </div>
            </div>
        </section>
    );
} 