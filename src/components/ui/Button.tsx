"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "black";
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-base shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<string, string> = {
    primary: "bg-[var(--text)] text-[var(--background)] hover:bg-black/90",
    secondary:
      "bg-[var(--card)] text-[var(--text)] border border-[var(--divider)] hover:bg-[var(--background)]",
    black: "bg-[var(--text)] text-[var(--background)] hover:bg-black/90",
  };
  const content = (
    <motion.span
      initial={{ scale: 0.95 }}
      whileTap={{ scale: 0.92 }}
      className="flex items-center gap-2"
    >
      {children}
      {icon && (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--divider)] text-[var(--text)]">
          {icon}
        </span>
      )}
    </motion.span>
  );
  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
