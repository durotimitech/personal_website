'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Sam Sulek',
        role: 'CEO, Maison Celeste',
        content: 'The site exceeded our expectations in every way — visually striking and incredibly user-friendly. Their design sense is unmatched, and the process was smooth finish. We\'re constantly getting compliments. Couldn\'t be happier with the outcome.',
        avatar: '/avatar-placeholder.jpg', // Replace with your avatar image path
        socials: [
            { icon: 'camera', href: '#' },
            { icon: 'x', href: '#' },
            { icon: 'linkedin', href: '#' },
            { icon: 'settings', href: '#' },
        ],
    },
    // Add more testimonials as needed
];

const socialIcons = {
    camera: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75V8.25A2.25 2.25 0 014.5 6h2.379a1.5 1.5 0 001.342-.832l.447-.894A1.5 1.5 0 0110.121 4.5h3.758a1.5 1.5 0 011.453 1.024l.447.894A1.5 1.5 0 0017.121 6H19.5a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0119.5 18h-15A2.25 2.25 0 012.25 15.75z" /><circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.5" /></svg>
    ),
    x: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    ),
    linkedin: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a6 6 0 016-6h8z" /><circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.5" /></svg>
    ),
    settings: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 008.5 3.09V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
    ),
};

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const testimonial = testimonials[current];

    return (
        <section className="w-full bg-white py-16 px-4 md:px-0 relative">
            <div className="max-w-5xl mx-auto relative">
                {/* Borders */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 border-t border-neutral-200" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-neutral-200" />
                    <div className="absolute top-0 left-0 h-full w-0.5 border-l border-neutral-200" />
                    <div className="absolute top-0 right-0 h-full w-0.5 border-r border-neutral-200" />
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 py-12 md:py-20">
                    {/* Left: Avatar, label, socials */}
                    <div className="flex flex-col items-center md:items-start gap-6 col-span-1">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                            <span className="w-3 h-3 rounded-full bg-[#00FF57] inline-block" />
                            TESTIMONIALS
                        </div>
                        <div className="rounded-full overflow-hidden w-28 h-28 border border-neutral-200">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={112} height={112} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex gap-4 mt-2">
                            {testimonial.socials.map((s, i) => (
                                <a key={i} href={s.href} className="text-neutral-400 hover:text-black transition" target="_blank" rel="noopener noreferrer">
                                    {socialIcons[s.icon as keyof typeof socialIcons]}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right: Testimonial */}
                    <div className="md:col-span-2 flex flex-col justify-center h-full">
                        <motion.p
                            key={testimonial.content}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl font-semibold leading-snug text-black mb-8"
                        >
                            “{testimonial.content}”
                        </motion.p>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <div className="font-semibold text-lg text-black">{testimonial.name}</div>
                                <div className="text-neutral-500 text-sm">{testimonial.role}</div>
                            </div>
                            {/* Navigation */}
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                <button
                                    className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xl text-neutral-400 hover:text-black transition"
                                    onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                    aria-label="Previous testimonial"
                                >
                                    ←
                                </button>
                                <span className="text-sm font-medium text-neutral-500">
                                    {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                                </span>
                                <button
                                    className="w-8 h-8 rounded-full bg-[#00FF57] flex items-center justify-center text-xl text-white hover:bg-[#00e650] transition"
                                    onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                    aria-label="Next testimonial"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 