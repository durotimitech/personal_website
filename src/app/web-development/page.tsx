'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WebDevelopmentPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
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
                            Web <span className="text-blue-600">Development</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Creating modern, responsive, and user-friendly websites that drive results and deliver exceptional user experiences.
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
                            What I Offer
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive web development solutions tailored to your specific needs and goals.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Custom Websites',
                                description: 'Tailored websites built from scratch to perfectly match your brand and requirements.',
                                icon: '🌐'
                            },
                            {
                                title: 'E-commerce Solutions',
                                description: 'Full-featured online stores with secure payment processing and inventory management.',
                                icon: '🛒'
                            },
                            {
                                title: 'Web Applications',
                                description: 'Complex web applications with advanced functionality and user management.',
                                icon: '⚙️'
                            },
                            {
                                title: 'Responsive Design',
                                description: 'Websites that look and work perfectly on all devices and screen sizes.',
                                icon: '📱'
                            },
                            {
                                title: 'SEO Optimization',
                                description: 'Search engine optimized websites to improve visibility and drive organic traffic.',
                                icon: '🔍'
                            },
                            {
                                title: 'Maintenance & Support',
                                description: 'Ongoing maintenance, updates, and technical support to keep your site running smoothly.',
                                icon: '🔧'
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

            {/* Technologies */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Technologies I Use
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern, reliable technologies to build fast, secure, and scalable web solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[
                            'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP',
                            'WordPress', 'Shopify', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'
                        ].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <p className="font-semibold text-gray-900">{tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-blue-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Build Your Website?
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            Let's discuss your project and create a website that perfectly represents your brand and achieves your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Get Started
                            </Link>
                            <Link href="/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
} 