"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const photographs = [
  {
    src: "/images/photography/8.jpg",
    alt: "Gallery 8",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/9.jpg",
    alt: "Gallery 9",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/10.jpg",
    alt: "Gallery 10",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/1.jpg",
    alt: "Gallery 1",
    className: "col-span-3 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/2.jpg",
    alt: "Gallery 2",
    className: "col-span-3 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/3.jpg",
    alt: "Gallery 3",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/4.jpg",
    alt: "Gallery 4",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/5.jpg",
    alt: "Gallery 5",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/6.jpg",
    alt: "Gallery 6",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/7.jpg",
    alt: "Gallery 7",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/11.jpg",
    alt: "Gallery 11",
    className: "col-span-3 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/12.jpg",
    alt: "Gallery 12",
    className: "col-span-3 row-span-2",
    width: 600,
    height: 600,
  },
];

const photoVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PhotographyPage() {
  const [selected, setSelected] = useState<null | { src: string; alt: string }>(
    null,
  );
  return (
    <motion.main
      className="min-h-screen w-full bg-[#e5dfd6] py-16 px-4 md:px-10 flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl w-full">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10 text-neutral-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Photography
        </motion.h1>
        <div className="grid grid-cols-6 grid-rows-6 gap-4 md:gap-6">
          {photographs.map((photo, i) => (
            <motion.button
              key={i}
              className={`${photo.className} rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#00FF57]`}
              onClick={() => setSelected({ src: photo.src, alt: photo.alt })}
              aria-label={`View ${photo.alt}`}
              custom={i}
              variants={photoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-full object-cover"
              />
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
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  width={1200}
                  height={900}
                  className="rounded-2xl w-auto h-auto max-h-[80vh] max-w-full shadow-2xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black rounded-full w-9 h-9 flex items-center justify-center text-2xl font-bold shadow"
                  aria-label="Close full image"
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
