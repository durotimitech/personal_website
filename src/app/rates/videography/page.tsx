"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const weddingPlans = [
    {
        name: "Highlights Package",
        price: "€950",
        features: [
            "4 hours coverage",
            "3–5 min cinematic highlights film",
            "Professional audio + licensed music",
            "Online delivery",
        ],
        cta: "Book Highlights",
    },
    {
        name: "Classic Package",
        price: "€1,500",
        features: [
            "8 hours coverage",
            "5–7 min cinematic film",
            "30–60 sec teaser for social media",
            "Professional audio + drone footage (where possible)",
        ],
        cta: "Book Classic",
    },
    {
        name: "Full Story Package",
        price: "€2,200",
        features: [
            "Full-day (up to 12 hours)",
            "7–10 min story-driven film",
            "Separate ceremony & speeches video",
            "Drone footage + teaser + custom USB",
        ],
        cta: "Book Full Story",
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
const eventPlans = [
    {
        name: "Half-Day Event",
        price: "€500",
        features: [
            "3 hours coverage",
            "2–4 min edited recap video",
            "Basic color grading & licensed music",
        ],
        cta: "Book Half-Day",
    },
    {
        name: "Full-Day Event",
        price: "€850",
        features: [
            "6–8 hours coverage",
            "4–6 min highlight video",
            "Client branding included (if applicable)",
        ],
        cta: "Book Full-Day",
    },
    {
        name: "Additional Hours",
        price: "+€100/hr",
        features: ["Pre-agreed extension"],
        cta: "Add Extra Hour",
    },
];
const lifestylePlans = [
    {
        name: "Content Starter",
        price: "€400",
        features: [
            "1-hour shoot",
            "1–2 short edits (30–60 sec each)",
            "1 location",
        ],
        cta: "Book Starter",
    },
    {
        name: "Story Builder",
        price: "€700",
        features: [
            "2-hour session",
            "2–3 short edits + 1 full-length (2–3 mins)",
            "Includes interviews/audio",
        ],
        cta: "Book Story Builder",
    },
    {
        name: "Custom Package",
        price: "Varies",
        features: [
            "Ideal for influencers, creatives & coaches",
            "Includes scripting, planning, shoot, edit",
        ],
        cta: "Enquire",
    },
];
const commercialPlans = [
    {
        name: "Promo Video",
        price: "from €800",
        features: [
            "Planning + 3–5 hour shoot",
            "1–2 min commercial-style edit",
            "Licensed music & logo animation",
        ],
        cta: "Book Promo",
    },
    {
        name: "Product / Brand Story",
        price: "from €1,200",
        features: [
            "Multi-day shoot",
            "Voiceover, motion graphics, scripting",
            "Multiple formats for web/social",
        ],
        cta: "Book Brand Story",
    },
    {
        name: "Monthly Content Plan",
        price: "from €1,500",
        features: [
            "Ongoing content creation",
            "Monthly shoot + batch editing for Reels, YouTube, or ads",
        ],
        cta: "Enquire",
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
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-center text-[var(--text)]">
                    Videography Pricing
                </h1>
                <p className="text-sm text-[var(--divider)] mb-8 text-center">
                    Valid as of <span className="font-semibold">June, 2024</span> — All
                    prices in EUR (€)
                </p>
                {/* Billing Toggle */}
                <div className="relative flex items-center justify-center gap-2 mb-12 bg-[var(--card)] rounded-full p-1 shadow-inner w-full max-w-md">
                    {[
                        { label: "Wedding", value: "wedding" },
                        { label: "Event", value: "event" },
                        { label: "Lifestyle", value: "lifestyle" },
                        { label: "Commercial", value: "commercial" },
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            className={`relative flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base z-10 ${billing === tab.value ? "text-[var(--text)] font-bold" : "text-[var(--divider)]"}`}
                            onClick={() => setBilling(tab.value)}
                            aria-pressed={billing === tab.value}
                        >
                            {billing === tab.value && (
                                <motion.div
                                    layoutId="tabHighlight"
                                    className="absolute inset-0 bg-[var(--background)] shadow rounded-full z-0"
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
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">
                                    {plan.cta}
                                </button>
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
                                    className="bg-[var(--background)] rounded-xl p-4 border border-[var(--divider)] flex flex-col items-center text-center"
                                >
                                    <span className="font-semibold text-[var(--text)]">
                                        {add.name}
                                    </span>
                                    <span className="text-[var(--divider)] text-sm mb-1">
                                        {add.price}
                                    </span>
                                    <span className="text-xs text-[var(--divider)]">
                                        {add.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {billing === "event" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {eventPlans.map((plan, i) => (
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
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">
                                    {plan.cta}
                                </button>
                            </motion.div>
                        ))}
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
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">
                                    {plan.cta}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}
                {billing === "commercial" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {commercialPlans.map((plan, i) => (
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
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">
                                    {plan.cta}
                                </button>
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
                        <li>Turnaround: 2–3 weeks (weddings: 4–5 weeks)</li>
                        <li>Drone footage included where legal & weather permits</li>
                        <li>Revisions: 2 rounds included per project</li>
                        <li>Travel within Limerick is free; mileage applies outside</li>
                        <li>25% deposit to secure booking</li>
                    </ul>
                </section>
            </motion.div>
        </main>
    );
}
