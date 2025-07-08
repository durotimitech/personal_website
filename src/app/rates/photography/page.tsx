"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Essentials",
        description:
            "Perfect for intimate weddings or elopements. Get the key moments beautifully captured.",
        price: "€850",
        period: "",
        features: [
            "4 hours coverage",
            "150+ edited photos",
            "Online gallery",
        ],
        cta: "Book Essentials",
        highlight: false,
    },
    {
        name: "Classic",
        description:
            "Our most popular package for full wedding day coverage and extra keepsakes.",
        price: "€1,400",
        period: "",
        features: [
            "8 hours coverage",
            "300+ edited photos",
            "Pre-wedding consultation",
            "Online gallery + USB delivery",
        ],
        cta: "Book Classic",
        highlight: true,
    },
    {
        name: "Full Day",
        description:
            "For couples who want every moment, from prep to party, captured in detail.",
        price: "€1,900",
        period: "",
        features: [
            "12 hours coverage",
            "All-day story (prep to party)",
            "500+ edited photos",
            "Pre-wedding consultation",
            "Custom USB box + prints",
        ],
        cta: "Book Full Day",
        highlight: false,
    },
];

const addOns = [
    { name: "Second Photographer", price: "+€300", desc: "For full-day events" },
    { name: "Wedding Album", price: "from €150", desc: "Custom-designed 20-page hardcover" },
    { name: "Engagement Shoot", price: "€250", desc: "1-hour session, 30+ images" },
];

const portraitPlans = [
    {
        name: "Mini Session",
        price: "€150",
        features: [
            "30 minutes",
            "10 high-res edited images",
            "Online gallery",
        ],
        cta: "Book Mini Session",
    },
    {
        name: "Standard Portrait",
        price: "€250",
        features: [
            "1 hour",
            "30+ images",
            "1 location",
        ],
        cta: "Book Standard",
    },
    {
        name: "Family Session",
        price: "€300",
        features: [
            "1.5 hours",
            "40+ images",
            "Group & individual shots",
        ],
        cta: "Book Family Session",
    },
];

const eventPlans = [
    {
        name: "Half-Day Coverage",
        price: "€400",
        features: [
            "3 hours",
            "150+ images",
            "Online delivery",
        ],
        cta: "Book Half-Day",
    },
    {
        name: "Full-Day Coverage",
        price: "€700",
        features: [
            "6 hours",
            "300+ images",
            "Online gallery",
        ],
        cta: "Book Full-Day",
    },
    {
        name: "Add Extra Hour",
        price: "+€100/hr",
        features: [
            "Based on availability",
        ],
        cta: "Add Extra Hour",
    },
];

export default function PhotographyRatesPage() {
    const [billing, setBilling] = useState("wedding");
    return (
        <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-0 flex flex-col items-center">
            <motion.div
                className="w-full max-w-5xl mx-auto flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-center text-[var(--text)]">Photography Pricing</h1>
                <p className="text-sm text-[var(--divider)] mb-8 text-center">Valid as of <span className="font-semibold">June, 2024</span> — All prices in EUR (€)</p>
                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-2 mb-12 bg-[var(--card)] rounded-full p-1 shadow-inner w-full max-w-md">
                    <button
                        className={`flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${billing === "wedding" ? "bg-[var(--background)] text-[var(--text)] shadow" : "text-[var(--divider)] hover:text-[var(--text)]"}`}
                        onClick={() => setBilling("wedding")}
                        aria-pressed={billing === "wedding"}
                    >
                        Wedding
                    </button>
                    <button
                        className={`flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${billing === "portrait" ? "bg-[var(--background)] text-[var(--text)] shadow" : "text-[var(--divider)] hover:text-[var(--text)]"}`}
                        onClick={() => setBilling("portrait")}
                        aria-pressed={billing === "portrait"}
                    >
                        Portrait & Lifestyle
                    </button>
                    <button
                        className={`flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${billing === "event" ? "bg-[var(--background)] text-[var(--text)] shadow" : "text-[var(--divider)] hover:text-[var(--text)]"}`}
                        onClick={() => setBilling("event")}
                        aria-pressed={billing === "event"}
                    >
                        Event
                    </button>
                </div>
                {/* Plans Grid */}
                {billing === "wedding" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                className={`flex flex-col rounded-2xl p-8 shadow-lg bg-[var(--card)] border border-[var(--divider)] ${plan.highlight ? "ring-2 ring-[var(--text)]" : ""}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 * i, ease: 'easeOut' }}
                            >
                                <div className={`mb-4`}>
                                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 ${plan.highlight ? "bg-[var(--text)] text-[var(--background)]" : "bg-[var(--divider)] text-[var(--text)]"}`}>{plan.name}</span>
                                    <p className={`text-sm mb-4 text-[var(--divider)]`}>{plan.description}</p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl md:text-5xl font-extrabold text-[var(--text)]">{plan.price}</span>
                                    <span className="text-base text-[var(--divider)] ml-1">{plan.period}</span>
                                </div>
                                <ul className="flex-1 flex flex-col gap-2 mb-8 text-[var(--text)]">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-base">
                                            <span className="text-lg">✔️</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">{plan.cta}</button>
                            </motion.div>
                        ))}
                    </div>
                )}
                {billing === "wedding" && (
                    <div className="w-full max-w-3xl mb-10">
                        <h2 className="text-xl font-bold mb-2 text-[var(--text)]">Add-Ons</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {addOns.map((add) => (
                                <li key={add.name} className="bg-[var(--background)] rounded-xl p-4 border border-[var(--divider)] flex flex-col items-center text-center">
                                    <span className="font-semibold text-[var(--text)]">{add.name}</span>
                                    <span className="text-[var(--divider)] text-sm mb-1">{add.price}</span>
                                    <span className="text-xs text-[var(--divider)]">{add.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {billing === "portrait" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {portraitPlans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                className="flex flex-col rounded-2xl p-8 shadow-lg bg-[var(--card)] border border-[var(--divider)]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 * i, ease: 'easeOut' }}
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 bg-[var(--divider)] text-[var(--text)]">{plan.name}</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl md:text-5xl font-extrabold text-[var(--text)]">{plan.price}</span>
                                </div>
                                <ul className="flex-1 flex flex-col gap-2 mb-8 text-[var(--text)]">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-base">
                                            <span className="text-lg">✔️</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">{plan.cta}</button>
                            </motion.div>
                        ))}
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
                                transition={{ duration: 0.7, delay: 0.1 * i, ease: 'easeOut' }}
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 bg-[var(--divider)] text-[var(--text)]">{plan.name}</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl md:text-5xl font-extrabold text-[var(--text)]">{plan.price}</span>
                                </div>
                                <ul className="flex-1 flex flex-col gap-2 mb-8 text-[var(--text)]">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-base">
                                            <span className="text-lg">✔️</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-[var(--background)] text-[var(--text)] font-semibold py-3 rounded-full border border-[var(--divider)] hover:bg-[var(--divider)]/30 transition">{plan.cta}</button>
                            </motion.div>
                        ))}
                    </div>
                )}
                <section className="mb-8 w-full max-w-3xl">
                    <h2 className="text-2xl font-bold mb-2 text-[var(--text)]">Delivery & Additional Info</h2>
                    <ul className="list-disc pl-6 text-[var(--text)] text-base space-y-2">
                        <li>All sessions include professional editing &amp; color grading</li>
                        <li>Images delivered via secure online gallery (downloadable)</li>
                        <li>Delivery time: 2–3 weeks (weddings: 4 weeks)</li>
                        <li>Travel within Limerick is included — travel outside incurs a mileage fee</li>
                        <li>20% booking deposit required to confirm your date</li>
                    </ul>
                </section>
            </motion.div>
        </main>
    );
} 