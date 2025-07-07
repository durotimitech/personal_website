'use client';

import Image from 'next/image';
import Button from './ui/Button';

const services = [
    {
        number: '01',
        title: 'WEB DEVELOPMENT',
        description: 'Crafting beautiful, custom, responsive websites and applications with seamless designs.',
        image: null,
        link: '/web-development',
    },
    {
        number: '02',
        title: 'DESIGN & DEVELOPMENT',
        description: 'Building seamless, high-performing websites that unite strategy and creativity scalable code.',
        image: null,
        link: '/design-development',
    },
    {
        number: null,
        title: null,
        description: null,
        image: '/images/service-phone.jpg',
        link: null,
    },
    {
        number: null,
        title: null,
        description: null,
        image: '/images/service-jacket.jpg',
        link: null,
    },
    {
        number: '03',
        title: 'PHOTOGRAPHY & STYLING',
        description: 'Capturing brand stories with striking visuals, curated styling, and intentional creative direction.',
        image: null,
        link: '/photography',
    },
    {
        number: '04',
        title: 'MOTION & INTERACTION',
        description: 'Bringing interfaces to life through thoughtful motion and engaging user interactions.',
        image: null,
        link: '/motion-interaction',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="w-full bg-white py-16 px-4 md:px-0">
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl p-8">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 border-t border-neutral-200" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-neutral-200" />
                    <div className="absolute top-0 left-0 h-full w-0.5 border-l border-neutral-200" />
                    <div className="absolute top-0 right-0 h-full w-0.5 border-r border-neutral-200" />
                </div>
                <div className="relative">
                    {/* Label */}
                    <div className="flex items-center gap-2 text-sm font-semibold mb-8">
                        <span className="w-3 h-3 rounded-full bg-[#00FF57] inline-block" />
                        SERVICES
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            service.image ? (
                                <div key={i} className="rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center min-h-[260px]">
                                    <Image src={service.image} alt="Service" width={340} height={260} className="object-cover w-full h-full" />
                                </div>
                            ) : (
                                <div key={i} className="rounded-2xl bg-neutral-100 p-8 flex flex-col h-full shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-lg font-bold text-neutral-400">{service.number}</span>
                                        <span className="text-xl font-extrabold tracking-tight">{service.title}</span>
                                    </div>
                                    <div className="border-t border-neutral-200 my-4" />
                                    <div className="text-base text-neutral-700 mb-6 flex-1">
                                        {service.description}
                                    </div>
                                    <Button
                                        className="self-start"
                                        variant="primary"
                                        href={service.link || '#'}
                                        icon={<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>}
                                    >
                                        Read more
                                    </Button>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 