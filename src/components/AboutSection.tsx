"use client";

import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      role="region"
      aria-label="About Section"
      className="w-full bg-[var(--card)] py-16 px-4 md:px-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 border-t border-[var(--divider)]" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-[var(--divider)]" />
          <div className="absolute top-0 left-0 h-full w-0.5 border-l border-[var(--divider)]" />
          <div className="absolute top-0 right-0 h-full w-0.5 border-r border-[var(--divider)]" />
        </div>
        <div className="relative grid md:grid-cols-3 gap-8 items-center p-8">
          {/* Left: Label and button */}
          <motion.div
            className="flex flex-col items-start gap-8 md:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold mb-2">
              <span className="w-3 h-3 rounded-full bg-[var(--text)] inline-block" />
              WHAT I DO
            </div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <Button
                href="mailto:mejabidurotimi@gmail.com"
                variant="primary"
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                }
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          {/* Right: Heading and description */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-extrabold leading-snug">
              I help people preserve emotions, moments, and visions that matter. With over 5 years in photography, videography, and web development, I’ve worked with couples, creators, and small businesses to tell stories that feel honest and human. From the quiet moments between lovers to the launch of a long-dreamt project, my work is about connection. Every shoot, every project is deeply personal, and I treat it that way. I believe creativity begins with empathy. I see what you see. I feel what you feel. And then, I help you bring it to life, beautifully.
            </h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
