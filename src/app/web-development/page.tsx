'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        number: '001.',
        title: 'RAVEN CLAW',
        year: '2025',
        type: 'E-COMMERCE',
        image: '/images/project-raven.jpg',
        link: '#',
        large: false,
    },
    {
        number: '002.',
        title: 'WILLOW STUDIO',
        year: '2024',
        type: 'STUDIO',
        image: '/images/project-willow.jpg',
        link: '#',
        large: false,
    },
    {
        number: '003.',
        title: 'MAISON LAW',
        year: '2024',
        type: 'BRANDING',
        image: '/images/project-maison.jpg',
        link: '#',
        large: true,
    },
    {
        number: '004.',
        title: 'MYSTIC MEADOWS',
        year: '2023',
        type: 'AGENCY',
        image: '/images/project-mystic.jpg',
        link: '#',
        large: false,
    },
    {
        number: '005.',
        title: 'SYNLAB',
        year: '2023',
        type: 'WEBSITE',
        image: '/images/project-synclab.jpg',
        link: '#',
        large: false,
    },
];

type Project = {
    number: string;
    title: string;
    year: string;
    type: string;
    image: string;
    link: string;
    large?: boolean;
};

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen w-full bg-white py-16 px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
                {/* Label */}
                <div className="flex items-center gap-2 text-sm font-semibold mb-8">
                    <span className="w-3 h-3 rounded-full bg-[#00FF57] inline-block" />
                    PROJECT
                </div>
                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* First row: 2 projects */}
                    <div className="flex flex-col gap-10">
                        <ProjectCard {...projects[0]} />
                        <ProjectCard {...projects[3]} />
                    </div>
                    {/* Second column: 3 projects stacked */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col md:flex-row gap-10">
                            <ProjectCard {...projects[1]} />
                            <ProjectCard {...projects[2]} large />
                        </div>
                        <ProjectCard {...projects[4]} />
                    </div>
                </div>
            </div>
        </main>
    );
}

function ProjectCard({ number, title, year, type, image, link, large }: Project) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`group relative rounded-2xl overflow-hidden bg-neutral-100 ${large ? 'md:w-[420px] md:h-[260px]' : 'md:w-[320px] md:h-[200px]'} w-full h-full shadow`}
        >
            <Link href={link} className="block w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    width={large ? 420 : 320}
                    height={large ? 260 : 200}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay Button */}
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                    <span className="bg-black text-white px-6 py-2 rounded-md font-semibold text-sm tracking-wider">VIEW</span>
                </span>
            </Link>
            {/* Project Info */}
            <div className="flex items-center justify-between mt-4 px-1">
                <span className="text-xs text-neutral-400 font-mono">{number}</span>
                <span className="font-bold text-base md:text-lg tracking-tight">{title}</span>
                <span className="text-xs text-neutral-400 uppercase">{type}</span>
            </div>
            <div className="flex items-center justify-between px-1 mt-1">
                <span className="text-xs text-neutral-400">{year}</span>
            </div>
        </motion.div>
    );
} 