"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import Image from "next/image";

const menu = [
  { label: "Home", href: "/", dropdown: false },
  { label: "Services", href: "/#services", dropdown: false },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[40vh] flex flex-col justify-between bg-[var(--background)] overflow-hidden rounded-2xl shadow-xl">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-10 pt-8 pb-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-extrabold text-[var(--text)] text-xl tracking-tight">
          CREATED BY TIMMY
          <span className="text-[var(--text)] text-2xl align-super">*</span>

        </div>
        {/* Menu */}
        <div className="hidden md:flex gap-8 text-[var(--text)] font-medium text-base">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 hover:text-[var(--divider)] transition"
            >
              {item.label}
              {item.dropdown && (
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
        {/* Right icons */}
        <div className="flex items-center gap-6">
          {/* Contact button */}
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
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 w-full px-10 pb-16 pt-8 gap-8">
        {/* Headline */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-[3rem] md:text-[5rem] font-extrabold text-[var(--text)] leading-none tracking-tight relative">
            Created By Timmy
          </h1>
        </div>
        {/* Avatar in the middle */}
        <div className="my-6 md:my-0 md:mx-8 flex-shrink-0 flex justify-center items-center">
          <Image
            src="/images/avatar.jpg"
            alt="Timmy Mejabi portrait"
            width={96}
            height={96}
            className="w-64 h-64 rounded-full border-4 border-[var(--divider)] shadow-lg object-cover"
            style={{ background: 'var(--card)' }}
            priority
          />
        </div>
        {/* Right Side Intro */}
        <div className="flex-1 flex flex-col items-end justify-center max-w-md">
          <div className="text-[var(--text)] text-right text-lg md:text-xl font-normal mb-8">
            <span className="font-bold">Hi, I&apos;m Timmy</span>{' '}
            <span className="text-[var(--text)]">
              a photographer, videographer, web developer and event planner based in Ireland with over 5 years of experience turning stories into stunning visuals.
            </span>
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
              className="mt-2"
            >
              Let&apos;s Discuss
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
