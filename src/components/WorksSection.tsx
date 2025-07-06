'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const works = [
    {
        title: 'Creative Studio Website',
        href: '#',
        thumbnail: '/works/studio.png',
        accent: false,
    },
    {
        title: 'Course App',
        href: '#',
        thumbnail: '/works/course.png',
        accent: true,
    },
    {
        title: 'Money Management App',
        href: '#',
        thumbnail: '/works/money.png',
        accent: false,
    },
    {
        title: 'Real Estate App',
        href: '#',
        thumbnail: '/works/realestate.png',
        accent: false,
    },
];

export default function WorksSection() {
    return (
        <section className="section-padding bg-transparent">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 ml-2 md:ml-0">
                        Selected Works
                    </h2>
                </motion.div>
                <div className="flex flex-col gap-4">
                    {works.map((work, i) => (
                        <motion.div
                            key={work.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative flex items-center bg-[#181622] rounded-2xl px-6 py-4 shadow group hover:ring-2 hover:ring-[#ff00ff]/40 transition-all"
                        >
                            {work.thumbnail && (
                                <div className="w-12 h-12 rounded-xl overflow-hidden mr-4 flex-shrink-0 bg-[#222] flex items-center justify-center">
                                    <Image src={work.thumbnail} alt={work.title} width={48} height={48} className="object-cover w-full h-full" />
                                </div>
                            )}
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{work.title}</h3>
                            </div>
                            {work.accent ? (
                                <Link href={work.href} className="ml-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#ff00ff] text-white text-xs font-semibold shadow hover:scale-105 transition-all">
                                    View Works
                                </Link>
                            ) : (
                                <Link href={work.href} className="ml-4 text-white/60 hover:text-[#ff00ff] transition-all">
                                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 