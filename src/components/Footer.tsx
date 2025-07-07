"use client";
// import { useState } from 'react';
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-50 rounded-2xl mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[8vw] md:text-[6vw] font-extrabold text-neutral-200 opacity-60 tracking-tight leading-none uppercase whitespace-nowrap z-0">
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
              <div className="text-sm text-neutral-700 mb-4 max-w-xs">
                Whether you want to build a new software project or plan your
                wedding or capture your best moments, I&apos;m here to turn your
                ideas into impactful, tangible products.
              </div>
            </div>
          </div>
          {/* Center: Let's Discuss button */}
          <div className="hidden md:flex flex-col items-center justify-center col-span-1">
            <Button
              href="mailto:mejabidurotimi@gmail.com"
              className="px-8 py-3 rounded-full bg-black text-black font-medium text-base flex items-center gap-2 shadow-lg"
            >
              Let&apos;s Discuss
              <span className="w-7 h-7 rounded-full bg-[#00FF57] flex items-center justify-center ml-2 text-black text-lg">
                →
              </span>
            </Button>
          </div>
        </div>
        {/* Bottom row */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-neutral-200 text-xs text-neutral-500">
          <div className="mb-4 md:mb-0">
            © Copyright 2025 Mejabi Oluwadurotimi. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/mejabidurotimi/"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/oluwadurotimi-mejabi-86046117a/"
              className="hover:underline"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/durotimitech"
              className="hover:underline"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
