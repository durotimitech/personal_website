"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import Button from "@/components/ui/Button";

const photographs = [
  {
    src: "/images/photography/lady-smiling-while-holding-a-flower-in-limerick.jpg",
    alt: "Outdoors photography in Limerick, Ireland",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/pre-wedding-shoot-limerick.jpg",
    alt: "Pre-wedding shoot in Limerick city",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/outdoor-wedding-ireland.jpg",
    alt: "Outdoor wedding ceremony in Ireland with scenic backdrop",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/lady-kneeling-in-bed-of-flowers-limerick.jpg",
    alt: "Lady kneeling in bed of flowers in Limerick, Ireland",
    className: "col-span-3 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/man-with-star-wars-helmet-ireland.jpg",
    alt: "Man with Star Wars helmet in Ireland",
    className: "col-span-3 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/potrait-of-lady-outdoors-ireland.jpg",
    alt: "Potrait of lady outdoors in Ireland",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/girl-posing-limerick-city.jpeg",
    alt: "Girl posing in Limerick city",
    className: "col-span-2 row-span-3",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/engagement-proposal-shoot-ireland.jpg",
    alt: "Engagement proposal shoot in Ireland",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/couple-in-love-ireland.jpg",
    alt: "Couple in love in Ireland",
    className: "col-span-2 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/studio-portrait-ireland.jpg",
    alt: "Studio portrait in Ireland",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/lifestyle-photography-limerick.jpg",
    alt: "Lifestyle photography session in Limerick city",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/girl-laying-on-floor-limerick.jpg",
    alt: "Girl laying on floor in Limerick, Ireland",
    className: "col-span-3 row-span-2",
    width: 900,
    height: 600,
  },
  {
    src: "/images/photography/man-in-wilderness-ireland.jpg",
    alt: "Man in wilderness in Ireland",
    className: "col-span-3 row-span-2",
    width: 600,
    height: 600,
  },
  {
    src: "/images/photography/girl-jumping-in-limerick-city.jpeg",
    alt: "Girl jumping in Limerick city",
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
          Photography
        </motion.h1>
        <div className="grid grid-cols-6 grid-rows-6 gap-4 md:gap-6">
          {photographs.slice(0, 6).map((photo, i) => (
            <motion.button
              key={i}
              className={`${photo.className} rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--divider)]`}
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
          <motion.div
            className="col-span-6 row-span-2 flex flex-col items-center justify-center bg-[var(--card)] rounded-2xl shadow-lg p-8 my-2 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/images/timmy-mejabi-portrait-limerick.jpg"
              alt="Timmy Mejabi, professional photographer, videographer, web developer and event planner in Limerick"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full border-4 border-[var(--divider)] shadow-lg object-cover mb-4"
              priority
            />
            <p className="text-base md:text-lg text-[var(--text)] max-w-2xl mx-auto">
              I&apos;m a lifestyle and wedding photographer based in Ireland,
              and for me, photography isn&apos;t just about taking pictures.
              It&apos;s about capturing emotion, telling stories, and freezing
              those fleeting moments that make life beautiful. With over 5 years
              of experience behind the lens, I&apos;ve worked with couples,
              families, and creatives to document their most meaningful
              milestones. I believe the best photos come from connection, when
              you feel seen, comfortable, and free to be yourself. Whether
              it&apos;s the quiet glance between newlyweds or the laughter of a
              family in their backyard, I&apos;m here to help you hold onto it,
              not just for today, but forever.
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
                <Button href="/rates/photography" variant="secondary">
                  See Rates
                  <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                    €
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          {photographs.slice(6).map((photo, i) => (
            <motion.button
              key={i + 6}
              className={`${photo.className} rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--divider)]`}
              onClick={() => setSelected({ src: photo.src, alt: photo.alt })}
              aria-label={`View ${photo.alt}`}
              custom={i + 6}
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
                  className="absolute top-2 right-2 bg-[var(--card)] hover:bg-[var(--divider)] text-[var(--text)] rounded-full w-9 h-9 flex items-center justify-center text-2xl font-bold shadow"
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
