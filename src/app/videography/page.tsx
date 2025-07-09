"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Button from "@/components/ui/Button";

const videos = [
  {
    id: "Us72WQmTDj4",
    title: "Abiola x Minnat Wedding",
    className: "col-span-2 row-span-2",
  },
  {
    id: "aZmuHWSgubE",
    title: "Lifestyle Shoot",
    className: "col-span-2 row-span-2",
  },
  {
    id: "XrVIYNbLc9c",
    title: "Music Video",
    className: "col-span-2 row-span-2",
  },
  {
    id: "J6zEdSwMV-c",
    title: "Stuck! (Short Film)",
    className: "col-span-3 row-span-2",
  },
  {
    id: "Qe84XavayEI",
    title: "Wedding Video",
    className: "col-span-2 row-span-2",
  },
  {
    id: "NLWwtg2RNr0",
    title: "The Journey: Dawn of a New Era",
    className: "col-span-2 row-span-2",
  },
  {
    id: "Gz4MbcRkXXU",
    title: "Shield Initiative",
    className: "col-span-2 row-span-2",
  },
];

const videoVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function VideographyPage() {
  const [selected, setSelected] = useState<null | {
    id: string;
    title: string;
  }>(null);
  return (
    <motion.main
      className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-10 flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl w-full">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10 text-[var(--text)] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Videography
        </motion.h1>
        <div className="grid grid-cols-6 grid-rows-6 gap-4 md:gap-6">
          {videos.slice(0, 3).map((video, i) => (
            <motion.button
              key={video.id}
              className={`${video.className} rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--divider)] bg-[var(--card)] group`}
              onClick={() => setSelected({ id: video.id, title: video.title })}
              aria-label={`Play ${video.title}`}
              custom={i}
              variants={videoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative w-full h-full aspect-video flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-2xl border-0"
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[var(--background)] opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
          <motion.div
            className="col-span-6 row-span-2 flex flex-col items-center justify-center bg-[var(--card)] rounded-2xl shadow-lg p-8 my-2 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/images/timmy-mejabi-portrait-limerick.jpg"
              alt="Timmy Mejabi, professional videographer, photographer, web developer and event planner in Limerick"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full border-4 border-[var(--divider)] shadow-lg object-cover mb-4"
              priority
            />
            <p className="text-base md:text-lg text-[var(--text)] max-w-2xl mx-auto">
              I&apos;m a passionate videographer based in Limerick, Ireland,
              specializing in cinematic storytelling that captures more than
              just visuals. I capture feeling. I&apos;ve worked on weddings,
              lifestyle shoots, events, and creative projects where emotion,
              detail, and movement matter most. My approach is simple; I listen.
              I empathize. I create. I put myself in your shoes to understand
              what matters most to you, then I turn that vision into a film
              you&apos;ll never forget. Every story is different. Every frame is
              personal. If you&apos;re looking for a video that doesn&apos;t
              just document your day but brings it back to life every time you
              hit play, let&apos;s talk.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  href="mailto:mejabidurotimi@gmail.com"
                  variant="primary"
                >
                  Contact Me
                  <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                    &rarr;
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button href="/rates/videography" variant="secondary">
                  See Rates
                  <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                    €
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          {videos.slice(3).map((video, i) => (
            <motion.button
              key={video.id}
              className={`${video.className} rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--divider)] bg-[var(--card)] group`}
              onClick={() => setSelected({ id: video.id, title: video.title })}
              aria-label={`Play ${video.title}`}
              custom={i + 3}
              variants={videoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative w-full h-full aspect-video flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-2xl border-0"
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[var(--background)] opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selected.id}?autoplay=1`}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl w-full h-[60vw] max-h-[80vh] max-w-full shadow-2xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 bg-[var(--card)] hover:bg-[var(--divider)] text-[var(--text)] rounded-full w-9 h-9 flex items-center justify-center text-2xl font-bold shadow"
                  aria-label="Close video modal"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* TODO: Replace with actual website URL */}
      <NextSeo
        title="Event & Wedding Videography Portfolio in Limerick, Ireland | Mejabi Oluwadurotimi"
        description="Discover the event and wedding videography portfolio of Mejabi Oluwadurotimi, a professional videographer based in Limerick, Ireland. Capturing your special moments in motion."
        canonical="https://yourwebsite.com/videography"
        openGraph={{
          url: "https://yourwebsite.com/videography",
          title:
            "Event & Wedding Videography Portfolio in Limerick, Ireland | Mejabi Oluwadurotimi",
          description:
            "Discover the event and wedding videography portfolio of Mejabi Oluwadurotimi, a professional videographer based in Limerick, Ireland. Capturing your special moments in motion.",
          images: [
            {
              url: "https://yourwebsite.com/logo.png",
              width: 500,
              height: 500,
              alt: "Mejabi Oluwadurotimi Logo",
            },
          ],
          site_name: "Mejabi Oluwadurotimi",
        }}
        twitter={{
          handle: "@yourhandle",
          site: "@yourhandle",
          cardType: "summary_large_image",
        }}
      />
    </motion.main>
  );
}
