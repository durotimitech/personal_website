"use client";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const weddingPlans = [
  {
    name: "Highlights Package",
    price: "€350",
    features: [
      "4 hours coverage",
      "3–5 min cinematic highlights film",
      "Professional audio + licensed music",
      "Online delivery",
    ],
  },
  {
    name: "Classic Package",
    price: "€700",
    features: [
      "8 hours coverage",
      "5–7 min cinematic film",
      "30–60 sec teaser for social media",
      "1 hour recap film",
      "Professional audio + drone footage (where possible)",
    ],
  },
  {
    name: "Full Story Package",
    price: "€1,300",
    features: [
      "Full-day (up to 12 hours)",
      "7–10 min story-driven film",
      "1 hour+ recap film",
      "Separate ceremony & speeches video",
      "Drone footage + teaser + custom USB",
    ],
  },
];

const weddingAddOns = [
  { name: "Second Shooter", price: "+€300", desc: "For multi-angle coverage" },
  { name: "Instagram Teaser", price: "+€100", desc: "60-second vertical cut" },
  {
    name: "Raw Footage",
    price: "+€200",
    desc: "Delivered via drive or download",
  },
  {
    name: "Engagement Session (Video)",
    price: "€300",
    desc: "1.5 hours + 1–2 min love story edit",
  },
];

const lifestylePlans = [
  {
    name: "Content Starter",
    price: "€250",
    features: [
      "1-hour shoot",
      "1–2 short edits (30–60 sec each)",
      "1 location",
    ],
  },
  {
    name: "Story Builder",
    price: "€400",
    features: [
      "2-hour session",
      "2–3 short edits + 1 full-length (2–3 mins)",
      "Includes interviews/audio",
    ],
  },
  {
    name: "Custom Package",
    price: "Varies",
    features: [
      "Ideal for influencers, creatives & coaches",
      "Includes scripting, planning, shoot, edit",
    ],
  },
];

export default function VideographyRatesPage() {
  const [billing, setBilling] = useState("wedding");
  return (
    <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-0 flex flex-col items-center">
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-center text-[var(--text)] mb-10">
          Videography Pricing
        </h1>
        {/* Billing Toggle */}
        <div className="relative flex items-center justify-center gap-2 mb-12 bg-[var(--card)] rounded-full p-[6px] shadow-inner w-full max-w-2xl h-14">
          {[
            { label: "Wedding", value: "wedding" },
            { label: "Lifestyle", value: "lifestyle" },
          ].map((tab) => (
            <button
              key={tab.value}
              className={`relative flex-1 h-full px-8 py-2 rounded-full font-semibold transition text-base z-10 flex items-center justify-center ${billing === tab.value ? "text-white font-bold" : "text-[var(--text)]/70"}`}
              onClick={() => setBilling(tab.value)}
              aria-pressed={billing === tab.value}
              style={{ minWidth: 0 }}
            >
              {billing === tab.value && (
                <motion.div
                  layoutId="tabHighlight"
                  className="absolute inset-0 rounded-full z-0"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--text) 0%, var(--divider) 100%)",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
        {/* Plans Grid */}
        {billing === "wedding" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
            {weddingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="flex flex-col rounded-2xl p-8 shadow-lg bg-[var(--card)] border border-[var(--divider)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 bg-[var(--divider)] text-[var(--text)]">
                    {plan.name}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-[var(--text)]">
                    {plan.price}
                  </span>
                </div>
                <ul className="flex-1 flex flex-col gap-2 mb-8 text-[var(--text)]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base">
                      <span className="text-lg">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  >
                    <Button
                      href="mailto:mejabidurotimi@gmail.com"
                      variant="primary"
                      className="w-auto px-6"
                    >
                      Contact Me
                      <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                        →
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {billing === "wedding" && (
          <div className="w-full max-w-3xl mb-10">
            <h2 className="text-xl font-bold mb-2 text-[var(--text)]">
              Add-Ons
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {weddingAddOns.map((add) => (
                <li
                  key={add.name}
                  className="bg-[var(--card)] rounded-xl p-8 border border-[var(--divider)] flex flex-col items-center text-center"
                >
                  <span className="font-bold text-2xl text-[var(--text)] mb-2">
                    {add.name}
                  </span>
                  <span className="text-[var(--divider)] text-lg mb-1 text-[var(--text)] font-semibold">
                    {add.price}
                  </span>
                  <span className="text-base text-[var(--divider)] text-[var(--text)] ">
                    {add.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {billing === "lifestyle" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
            {lifestylePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="flex flex-col rounded-2xl p-8 shadow-lg bg-[var(--card)] border border-[var(--divider)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 bg-[var(--divider)] text-[var(--text)]">
                    {plan.name}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-[var(--text)]">
                    {plan.price}
                  </span>
                </div>
                <ul className="flex-1 flex flex-col gap-2 mb-8 text-[var(--text)]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base">
                      <span className="text-lg">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  >
                    <Button
                      href="mailto:mejabidurotimi@gmail.com"
                      variant="primary"
                      className="w-auto px-6"
                    >
                      Contact Me
                      <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                        →
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <section className="mb-8 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-2 text-[var(--text)]">
            Delivery & Info
          </h2>
          <ul className="list-disc pl-6 text-[var(--text)] text-base space-y-2">
            <li>
              All videos delivered in HD or 4K via online gallery, USB on
              request
            </li>
            <li>Turnaround: 1–4 weeks (depending on the package)</li>
            <li>Drone footage included where legal & weather permits</li>
            <li>Revisions: 2 rounds included per project</li>
            <li>Travel within Limerick is free; mileage applies outside</li>
            <li>20% deposit to secure booking</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
