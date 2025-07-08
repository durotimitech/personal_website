"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from 'next-seo';

const projects = [
  {
    number: "001.",
    title: "Wedding Website",
    image: "/images/wedding-website-landing-page.png",
    link: "https://kaitoxtimmywedding-hpoi.vercel.app/",
    large: true,
  },
];

type Project = {
  number: string;
  title: string;
  image: string;
  link: string;
  large?: boolean;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WebDevelopmentPage() {
  return (
    <motion.main
      className="w-full bg-[var(--background)] py-16 px-4 md:px-10 text-[var(--text)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-[var(--text)] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        Web Development
      </motion.h1>
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        {/* Label */}
        <div className="flex items-center gap-2 text-sm font-semibold mb-8">
          <span className="w-3 h-3 rounded-full bg-[var(--text)] inline-block" />
          PROJECTS
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* First row: 2 projects */}
          <div className="flex flex-col gap-10">
            {projects.map((project, i) => (
              <ProjectCard {...project} key={project.number} index={i} />
            ))}
            {/* <ProjectCard {...projects[3]} /> */}
          </div>
        </div>
      </motion.div>
      {/* TODO: Replace with actual website URL */}
      <NextSeo
        title="Web Development Portfolio in Limerick, Ireland | Mejabi Oluwadurotimi"
        description="Browse the web development portfolio of Mejabi Oluwadurotimi, a creative engineer and web developer based in Limerick, Ireland. Building beautiful, functional websites for businesses and creatives."
        canonical="https://yourwebsite.com/web-development"
        openGraph={{
          url: 'https://yourwebsite.com/web-development',
          title: 'Web Development Portfolio in Limerick, Ireland | Mejabi Oluwadurotimi',
          description: 'Browse the web development portfolio of Mejabi Oluwadurotimi, a creative engineer and web developer based in Limerick, Ireland. Building beautiful, functional websites for businesses and creatives.',
          images: [
            {
              url: 'https://yourwebsite.com/logo.png',
              width: 500,
              height: 500,
              alt: 'Mejabi Oluwadurotimi Logo',
            },
          ],
          site_name: 'Mejabi Oluwadurotimi',
        }}
        twitter={{
          handle: '@yourhandle',
          site: '@yourhandle',
          cardType: 'summary_large_image',
        }}
      />
    </motion.main>
  );
}

function ProjectCard({
  number,
  title,
  image,
  link,
  large,
  index,
}: Project & { index: number }) {
  const isExternalLink = typeof link === "string" && link.startsWith("http");

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative rounded-2xl overflow-hidden bg-[var(--card)] ${large ? "md:w-[420px]" : "md:w-[320px]"} w-full shadow transition-all duration-300 cursor-pointer flex flex-col text-[var(--text)]`}
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 shadow-[0_0_48px_0_rgba(0,255,87,0.22)] group-hover:shadow-[0_0_120px_24px_rgba(0,255,87,0.35)]" />
      {link && (
        <Link
          href={link}
          className="block w-full"
          target={isExternalLink ? "_blank" : "_self"}
          rel={isExternalLink ? "noopener noreferrer" : ""}
        >
          <Image
            src={image}
            alt={title}
            width={large ? 420 : 320}
            height={large ? 260 : 200}
            className="object-cover w-full transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
          />
        </Link>
      )}
      {!link && (
        <Image
          src={image}
          alt={title}
          width={large ? 420 : 320}
          height={large ? 260 : 200}
          className="object-cover w-full transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
        />
      )}
      {/* Info section at the bottom */}
      <div className="flex flex-col gap-1 px-4 py-4 bg-[var(--card)] rounded-b-2xl border-t border-[var(--divider)] mt-0">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--divider)] font-mono font-bold">
            {number}
          </span>
          <span className="text-xs text-[var(--divider)] font-mono font-bold">
            {title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
