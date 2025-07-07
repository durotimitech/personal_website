"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";

const services = [
  {
    number: "01",
    title: "PHOTOGRAPHY",
    description:
      "Capturing stories with striking visuals, curated styling, and intentional creative direction.",
    image: null,
    link: "/photography",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description:
      "Crafting beautiful, custom, responsive websites and applications with seamless designs.",
    image: null,
    link: "/web-development",
  },
  {
    number: null,
    title: null,
    description: null,
    image: "/images/service-phone.jpg",
    link: null,
  },
  {
    number: "03",
    title: "Event Planning",
    description:
      "Planning and executing seamless events that bring your vision to life in the most memorable way.",
    image: null,
    link: "/event-planning",
  },
  {
    number: null,
    title: null,
    description: null,
    image: "/images/service-jacket.jpg",
    link: null,
  },
  {
    number: "04",
    title: "MOTION & INTERACTION",
    description:
      "Bringing interfaces to life through thoughtful motion and engaging user interactions.",
    image: null,
    link: "/motion-interaction",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easeOut },
  }),
};

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="w-full bg-white py-16 px-4 md:px-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
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
            {services.map((service, i) =>
              service.image ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center min-h-[260px]"
                >
                  <Image
                    src={service.image}
                    alt="Service"
                    width={340}
                    height={260}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  className={`relative group rounded-2xl bg-neutral-100 p-8 flex flex-col h-full shadow-sm overflow-hidden transition-transform duration-300${service.link ? " cursor-pointer" : ""}`}
                >
                  {/* Glow effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 shadow-[0_0_48px_0_rgba(0,255,87,0.22)] group-hover:shadow-[0_0_120px_24px_rgba(0,255,87,0.35)]" />
                  {service.link && (
                    <Link href={service.link} className="absolute inset-0 z-20">
                      <span className="sr-only">Go to {service.title}</span>
                    </Link>
                  )}
                  <div className="flex items-center gap-2 mb-2 relative z-10 pointer-events-none">
                    <span className="text-lg font-bold text-neutral-400">
                      {service.number}
                    </span>
                    <span className="text-xl font-extrabold tracking-tight">
                      {service.title}
                    </span>
                  </div>
                  <div className="border-t border-neutral-200 my-4 relative z-10 pointer-events-none" />
                  <div className="text-base text-neutral-700 mb-6 flex-1 relative z-10 pointer-events-none">
                    {service.description}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
