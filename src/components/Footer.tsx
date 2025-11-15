"use client";
import Link from "next/link";
// import { useState } from 'react';
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--background)] rounded-2xl mt-16 overflow-hidden text-[var(--text)]">
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[8vw] md:text-[6vw] font-extrabold text-[var(--divider)] opacity-60 tracking-tight leading-none uppercase whitespace-nowrap z-0">
            CREATED BY TIMMY
          </span>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left: Brand, description, email */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <div>
              <div className="font-extrabold text-lg mb-2">
                Created By Timmy
              </div>
              <div className="text-sm text-[var(--text)] mb-4 max-w-xs">
                Whether you want to build a new software project or plan your
                wedding or capture your best moments, I&apos;m here to turn your
                ideas into impactful, tangible experiences.
              </div>
            </div>
          </div>
          {/* Center: Let's Discuss button */}
          <div className="hidden md:flex flex-col items-center justify-center col-span-1">
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <Button
                href="mailto:mejabidurotimi@gmail.com"
                className="px-8 py-3 rounded-full font-medium text-base flex items-center gap-2 shadow-lg"
              >
                Let&apos;s Discuss
                <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                  →
                </span>
              </Button>
            </motion.div>
          </div>
          {/* Right Section */}
          <div className="hidden md:flex flex-col items-end justify-center col-span-1 pr-2">
            <Link
              href="/"
              className="text-lg font-extrabold text-[var(--text)] hover:underline text-left w-full"
            >
              Home
            </Link>
            <Link
              href="/photography"
              className="text-lg font-extrabold text-[var(--text)] hover:underline text-left w-full"
            >
              Photography
            </Link>
            <Link
              href="/videography"
              className="text-lg font-extrabold text-[var(--text)] hover:underline text-left w-full"
            >
              Videography
            </Link>
            <Link
              href="/event-planning"
              className="text-lg font-extrabold text-[var(--text)] hover:underline text-left w-full"
            >
              Wedding & Event Planning
            </Link>
            <Link
              href="/web-development"
              className="text-lg font-extrabold text-[var(--text)] hover:underline text-left w-full"
            >
              Web Development
            </Link>
          </div>
        </div>
        {/* Bottom row */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between mt-16 pt-8 border-t border-[var(--divider)] text-xs">
          <div className="mb-4 md:mb-0 w-full md:w-auto text-center md:text-left text-[var(--text)] font-bold">
            © Copyright 2025 Mejabi Oluwadurotimi. All rights reserved.
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end gap-6">
            <a
              href="https://www.instagram.com/createdbytimmy/"
              className="hover:underline text-[var(--text)] font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/oluwadurotimi-mejabi-86046117a/"
              className="hover:underline text-[var(--text)] font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/durotimitech"
              className="hover:underline text-[var(--text)] font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
