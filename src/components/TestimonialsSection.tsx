"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sam Sulek",
    role: "CEO, Maison Celeste",
    content:
      "The site exceeded our expectations in every way — visually striking and incredibly user-friendly. Their design sense is unmatched, and the process was smooth finish. We're constantly getting compliments. Couldn't be happier with the outcome.",
    avatar: "/avatar-placeholder.jpg", // Replace with your avatar image path
    socials: [
      { icon: "camera", href: "#" },
      { icon: "x", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "settings", href: "#" },
    ],
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-0 relative">
      <div className="max-w-5xl mx-auto relative">
        {/* Borders */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 border-t border-neutral-200" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-neutral-200" />
          <div className="absolute top-0 left-0 h-full w-0.5 border-l border-neutral-200" />
          <div className="absolute top-0 right-0 h-full w-0.5 border-r border-neutral-200" />
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 py-12 md:py-20">
          {/* Left: Avatar, label, socials */}
          <div className="flex flex-col items-center md:items-start gap-6 col-span-1">
            <div className="flex items-center gap-2 text-sm font-semibold mb-2">
              <span className="w-3 h-3 rounded-full bg-[#00FF57] inline-block" />
              TESTIMONIALS
            </div>
            <div className="rounded-full overflow-hidden w-28 h-28 border border-neutral-200">
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
              className="text-2xl md:text-3xl font-semibold leading-snug text-black mb-8"
            >
              “{testimonial.content}”
            </motion.p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-semibold text-lg text-black">
                  {testimonial.name}
                </div>
                <div className="text-neutral-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
              {/* Navigation */}
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <button
                  className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xl text-neutral-400 hover:text-black transition"
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <span className="text-sm font-medium text-neutral-500">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <button
                  className="w-8 h-8 rounded-full bg-[#00FF57] flex items-center justify-center text-xl text-white hover:bg-[#00e650] transition"
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
