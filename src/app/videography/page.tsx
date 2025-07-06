'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VideographyPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-violet-100">
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
                            <span className="text-purple-600">Videography</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Producing high-quality video content that tells your story, promotes your brand, and captures your most important moments.
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
                            Video Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional videography services for events, businesses, and creative projects.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Wedding Videos',
                                description: 'Cinematic wedding videos that capture the magic and emotion of your special day.',
                                icon: '💒'
                            },
                            {
                                title: 'Corporate Videos',
                                description: 'Professional corporate videos for marketing, training, and company presentations.',
                                icon: '🏢'
                            },
                            {
                                title: 'Event Coverage',
                                description: 'Complete video coverage of events, conferences, and special celebrations.',
                                icon: '🎉'
                            },
                            {
                                title: 'Commercial Videos',
                                description: 'High-impact commercial videos that promote your products and services.',
                                icon: '📺'
                            },
                            {
                                title: 'Music Videos',
                                description: 'Creative music videos that bring your music to life with stunning visuals.',
                                icon: '🎵'
                            },
                            {
                                title: 'Documentary Films',
                                description: 'Compelling documentary content that tells meaningful stories.',
                                icon: '🎬'
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

            {/* Process & Equipment */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            My Process & Equipment
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional workflow and state-of-the-art equipment to deliver exceptional video content.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Process</h3>
                            <div className="space-y-4">
                                {[
                                    'Pre-production planning and storyboarding',
                                    'Professional filming with multiple cameras',
                                    'High-quality audio recording',
                                    'Post-production editing and color grading',
                                    'Final delivery in multiple formats'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Equipment</h3>
                            <div className="space-y-4">
                                {[
                                    '4K/8K cinema cameras',
                                    'Professional lenses and stabilizers',
                                    'High-quality audio equipment',
                                    'Advanced lighting systems',
                                    'Professional editing software'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Video Types */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Video Deliverables
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multiple video formats and styles to meet your specific needs and goals.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Cinematic Films',
                                description: 'Feature-length cinematic videos with professional storytelling and editing.',
                                duration: '5-30 minutes'
                            },
                            {
                                title: 'Highlight Reels',
                                description: 'Short, engaging highlight videos perfect for social media and sharing.',
                                duration: '1-3 minutes'
                            },
                            {
                                title: 'Documentary Style',
                                description: 'In-depth documentary content that tells your complete story.',
                                duration: '10-60 minutes'
                            },
                            {
                                title: 'Commercial Spots',
                                description: 'Short, impactful commercial videos designed for advertising.',
                                duration: '15-60 seconds'
                            }
                        ].map((type) => (
                            <motion.div
                                key={type.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 text-center"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                                <p className="text-gray-600 mb-4">{type.description}</p>
                                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg inline-block">
                                    {type.duration}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-purple-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Create Your Video?
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            Let&apos;s discuss your video project and create compelling content that tells your story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact" className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Start Your Project
                            </Link>
                            <Link href="/" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
} 