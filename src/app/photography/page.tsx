'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PhotographyPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
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
                            <span className="text-green-600">Photography</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Capturing moments that tell your story through professional photography that preserves memories for a lifetime.
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
                            Photography Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional photography services for all your special moments and business needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Wedding Photography',
                                description: 'Beautiful wedding photography that captures every precious moment of your special day.',
                                icon: '💒'
                            },
                            {
                                title: 'Portrait Photography',
                                description: 'Professional portraits for individuals, families, and corporate headshots.',
                                icon: '👤'
                            },
                            {
                                title: 'Event Photography',
                                description: 'Comprehensive coverage of corporate events, parties, and special celebrations.',
                                icon: '🎉'
                            },
                            {
                                title: 'Product Photography',
                                description: 'High-quality product photography for e-commerce and marketing materials.',
                                icon: '📦'
                            },
                            {
                                title: 'Real Estate Photography',
                                description: 'Stunning property photography that showcases homes and commercial spaces.',
                                icon: '🏠'
                            },
                            {
                                title: 'Photo Editing',
                                description: 'Professional photo editing and retouching to enhance your images.',
                                icon: '🎨'
                            }
                        ].map((service) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
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

            {/* Equipment & Style */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            My Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional equipment and a unique style that brings out the best in every subject.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Equipment</h3>
                            <div className="space-y-4">
                                {[
                                    'Canon EOS R5 & R6',
                                    'Professional L-series lenses',
                                    'Studio lighting equipment',
                                    'High-quality editing software',
                                    'Backup equipment for reliability'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Photography Style</h3>
                            <div className="space-y-4">
                                {[
                                    'Natural and candid moments',
                                    'Creative composition and angles',
                                    'Attention to lighting and detail',
                                    'Timeless and elegant aesthetic',
                                    'Storytelling through images'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Capture Your Moments?
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            Let&apos;s discuss your photography needs and create beautiful images that you&apos;ll treasure forever.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact" className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Book a Session
                            </Link>
                            <Link href="/" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
} 