'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string; // emoji or image src
    href: string;
    color: string;
    delay: number;
    index?: number;
}

export default function ServiceCard({ title, description, icon, href, delay, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #ff00ff33' }}
            className="group relative bg-[#181622] rounded-3xl p-8 flex flex-col justify-between min-h-[320px] shadow-lg overflow-hidden hover:ring-2 hover:ring-[#ff00ff]/40 transition-all duration-300"
        >
            {/* Gradient accent at bottom */}
            <div className="absolute left-0 bottom-0 w-full h-2/5 bg-gradient-to-t from-[#ff00ff22] to-transparent z-0" />
            {/* Icon/Image */}
            <div className="relative z-10 mb-6 flex items-center">
                <div className="w-16 h-16 rounded-full bg-[#222] flex items-center justify-center shadow-lg overflow-hidden">
                    <span className="text-3xl">{icon}</span>
                </div>
            </div>
            {/* Title & Description */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                    {title}
                </h3>
                <p className="text-white/70 text-base mb-4 flex-1">
                    {description}
                </p>
            </div>
            {/* Card number */}
            {typeof index === 'number' && (
                <span className="absolute bottom-6 right-8 text-2xl font-bold text-white/20 select-none">
                    {String(index + 1).padStart(2, '0')}
                </span>
            )}
            {/* Overlay for hover effect */}
            <Link href={href} className="absolute inset-0 z-20" tabIndex={-1} aria-label={title} />
        </motion.div>
    );
} 