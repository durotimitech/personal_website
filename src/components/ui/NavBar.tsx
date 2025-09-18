import React from 'react'
import { motion } from 'framer-motion';
import Button from './Button';

const menu = [
    { label: "Home", href: "/", dropdown: false },
    { label: "Services", href: "/#services", dropdown: false },
  ];

export default function NavBar() {
  return (
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
  )
}