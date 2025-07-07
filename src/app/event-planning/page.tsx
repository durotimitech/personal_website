'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EventPlanningPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900"
                        >
                            Wedding & <span className="text-pink-600">Event Planning</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Making your special occasions unforgettable with comprehensive event planning that brings your vision to life.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Event Planning Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive event planning services for weddings, corporate events, and special celebrations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Wedding Planning',
                                description: 'Complete wedding planning from engagement to honeymoon.',
                                icon: '💒'
                            },
                            {
                                title: 'Corporate Events',
                                description: 'Professional corporate event planning for conferences and meetings.',
                                icon: '🏢'
                            },
                            {
                                title: 'Birthday Parties',
                                description: 'Memorable birthday celebrations with creative themes.',
                                icon: '🎂'
                            },
                            {
                                title: 'Anniversary Celebrations',
                                description: 'Romantic anniversary celebrations that honor your love story.',
                                icon: '💕'
                            },
                            {
                                title: 'Holiday Parties',
                                description: 'Festive holiday gatherings that bring friends and family together.',
                                icon: '🎄'
                            },
                            {
                                title: 'Special Occasions',
                                description: 'Custom event planning for graduations and milestones.',
                                icon: '🎊'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 text-center"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-pink-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Plan Your Event?
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            Let&apos;s discuss your event vision and create an unforgettable celebration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact" className="bg-white text-pink-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Start Planning
                            </Link>
                            <Link href="/" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
} 