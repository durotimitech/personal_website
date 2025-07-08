"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Sample Video 1",
    className: "col-span-2 row-span-2",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Sample Video 2",
    className: "col-span-2 row-span-2",
  },
  {
    id: "L_jWHffIx5E",
    title: "Sample Video 3",
    className: "col-span-3 row-span-2",
  },
  {
    id: "e-ORhEE9VVg",
    title: "Sample Video 4",
    className: "col-span-3 row-span-2",
  },
  {
    id: "M7lc1UVf-VE",
    title: "Sample Video 5",
    className: "col-span-2 row-span-2",
  },
  {
    id: "kXYiU_JCYtU",
    title: "Sample Video 6",
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
  const [selected, setSelected] = useState<null | { id: string; title: string }>(null);
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
          {videos.map((video, i) => (
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
                  <svg className="w-16 h-16 text-[var(--background)] opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
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
                onClick={e => e.stopPropagation()}
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
    </motion.main>
  );
}
