"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function EventPlanningPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-10 flex items-center justify-center">
      <motion.div
        className="max-w-2xl w-full flex flex-col items-center justify-center bg-[var(--card)] rounded-2xl shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/images/timmy-mejabi-portrait-limerick.jpg"
          alt="Timmy Mejabi, professional event planner, photographer, videographer and web developer in Limerick"
          width={96}
          height={96}
          className="w-24 h-24 rounded-full border-4 border-[var(--divider)] shadow-lg object-cover mb-4"
          priority
        />
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
          Event Planning
        </h1>
        <p className="text-base md:text-lg text-[var(--text)] max-w-2xl mx-auto mb-4">
          I&apos;m an experienced event planner based in Limerick, Ireland,
          passionate about creating unforgettable experiences for weddings,
          corporate events, and special occasions. My approach is personal and
          detail-oriented. I listen to your vision, anticipate your needs, and
          handle every aspect of planning so you can enjoy your day stress-free.
          Whether it&apos;s an intimate gathering or a grand celebration, I
          bring creativity, organization, and heart to every event. Let&apos;s
          make your next event truly memorable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Button href="mailto:mejabidurotimi@gmail.com" variant="primary">
              Contact Me
              <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                &rarr;
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Button href="/rates/event-planning" variant="secondary">
              See Rates
              <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                &rarr;
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
