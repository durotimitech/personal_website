"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RatesPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-10 flex items-center justify-center">
      <motion.div
        className="max-w-2xl w-full flex flex-col items-center justify-center bg-[var(--card)] rounded-2xl shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
          Rates
        </h1>
        <p className="text-base md:text-lg text-[var(--text)] max-w-2xl mx-auto mb-6">
          Explore my current rates for photography, videography, and event
          services. Select a category below to view detailed pricing.
        </p>
        <div className="flex flex-col gap-4 w-full items-center">
          <Link
            href="/rates/photography"
            className="text-lg font-semibold text-[var(--text)] hover:underline"
          >
            Photography Rates
          </Link>
          <Link
            href="/rates/videography"
            className="text-lg font-semibold text-[var(--text)] hover:underline"
          >
            Videography Rates
          </Link>
          <Link
            href="/rates/event-planning"
            className="text-lg font-semibold text-[var(--text)] hover:underline"
          >
            Event Planning Rates
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
