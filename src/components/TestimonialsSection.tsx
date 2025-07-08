"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Kaitochi Igbokwe",
    content:
      "It was such a pleasure working with Timmy. He was professional, creative, and easy to work with. I would highly recommend him to anyone looking for a photographer or videographer.",
    avatar: "/images/testimonials/kaitochi_igbokwe.png",
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section className="w-full bg-[var(--card)] py-16 px-4 md:px-0 relative">
      <div className="max-w-5xl mx-auto relative">
        {/* Borders */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 border-t border-[var(--divider)]" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-[var(--divider)]" />
          <div className="absolute top-0 left-0 h-full w-0.5 border-l border-[var(--divider)]" />
          <div className="absolute top-0 right-0 h-full w-0.5 border-r border-[var(--divider)]" />
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 py-12 md:py-20">
          {/* Left: Avatar, label, socials */}
          <div className="flex flex-col items-center md:items-start gap-6 col-span-1">
            <div className="flex items-center gap-2 text-sm font-semibold mb-2">
              <span className="w-3 h-3 rounded-full bg-[var(--text)] inline-block" />
              TESTIMONIALS
            </div>
            <div className="rounded-full overflow-hidden w-64 h-64 border border-[var(--divider)]">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Right: Testimonial */}
          <div className="md:col-span-2 flex flex-col justify-center h-full">
            <motion.p
              key={testimonial.content}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold leading-snug text-[var(--text)] mb-8"
            >
              “{testimonial.content}”
            </motion.p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-semibold text-lg text-[var(--text)]">
                  {testimonial.name}
                </div>
              </div>
              {/* Navigation */}
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <button
                  className="w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--divider)] flex items-center justify-center text-xl text-[var(--divider)] hover:text-[var(--text)] transition"
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <span className="text-sm font-medium text-[var(--divider)]">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <button
                  className="w-8 h-8 rounded-full bg-[var(--text)] flex items-center justify-center text-xl text-[var(--background)] hover:bg-black/90 transition"
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
