"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const weddingPlans = [
    {
        name: "Essentials",
        description:
            "Perfect for intimate weddings or elopements. Get the key moments beautifully captured.",
        price: "€300",
        period: "",
        features: ["4 hours coverage", "150+ edited photos", "Online gallery"],
        highlight: false,
    },
    {
        name: "Classic",
        description:
            "Our most popular package for full wedding day coverage and extra keepsakes.",
        price: "€800",
        period: "",
        features: [
            "8 hours coverage",
            "300+ edited photos",
            "Pre-wedding consultation",
            "Online gallery + USB delivery",
        ],
        highlight: true,
    },
    {
        name: "Full Day",
        description:
            "For couples who want every moment, from prep to party, captured in detail.",
        price: "€1,300",
        period: "",
        features: [
            "12 hours coverage",
            "All-day story (prep to party)",
            "500+ edited photos",
            "Pre-wedding consultation",
            "Custom USB box + prints",
        ],
        highlight: false,
    },
];

const addOns = [
    { name: "Second Photographer", price: "+€150", desc: "For full-day events" },
    {
        name: "Wedding Album",
        price: "from €150",
        desc: "Custom-designed 20-page hardcover",
    },
    {
        name: "Engagement Shoot",
        price: "€250",
        desc: "1-hour session, 30+ images",
    },
];

const portraitPlans = [
    {
        name: "Mini Session",
        price: "€100",
        features: ["1 hour", "10 high-res edited images", "Online gallery"],
    },
    {
        name: "Standard Portrait",
        price: "€250",
        features: ["2 hours", "30+ images", "1 location"],
    },
    {
        name: "Family Session",
        price: "€400",
        features: ["2.5 hours", "40+ images", "Group & individual shots"],
    },
];

const eventPlans = [
    {
        name: "Half-Day Coverage",
        price: "€200",
        features: ["2 hours", "30+ images", "Online delivery"],
    },
    {
        name: "Full-Day Coverage",
        price: "€500",
        features: ["6 hours", "300+ images", "Online gallery"],
    }
];

export default function PhotographyRatesPage() {
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
                    Photography Pricing
                </h1>
                {/* Billing Toggle */}
                <div className="relative flex items-center justify-center gap-2 mb-12 bg-[var(--card)] rounded-full p-[6px] shadow-inner w-full max-w-2xl h-14">
                    {[
                        { label: "Wedding", value: "wedding" },
                        { label: "Portrait & Lifestyle", value: "portrait" },
                        { label: "Event", value: "event" },
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
                                className={`flex flex-col rounded-2xl p-8 shadow-lg bg-[var(--card)] border border-[var(--divider)] ${plan.highlight ? "ring-2 ring-[var(--text)]" : ""}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
                            >
                                <div className={`mb-4`}>
                                    <span
                                        className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 ${plan.highlight ? "bg-[var(--text)] text-[var(--background)]" : "bg-[var(--divider)] text-[var(--text)]"}`}
                                    >
                                        {plan.name}
                                    </span>
                                    <p className={`text-sm mb-4 text-[var(--divider)]`}>
                                        {plan.description}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl md:text-5xl font-extrabold text-[var(--text)]">
                                        {plan.price}
                                    </span>
                                    <span className="text-base text-[var(--divider)] ml-1">
                                        {plan.period}
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
                                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 500, damping: 40 }}>

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
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {addOns.map((add) => (
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
                {billing === "portrait" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {portraitPlans.map((plan, i) => (
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
                                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 500, damping: 40 }}>
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
                {billing === "event" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
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
                                <div className="flex justify-center mt-4">
                                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 500, damping: 40 }}>
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
                        Delivery & Additional Info
                    </h2>
                    <ul className="list-disc pl-6 text-[var(--text)] text-base space-y-2">
                        <li>
                            All sessions include professional editing &amp; color grading
                        </li>
                        <li>Images delivered via secure online gallery (downloadable)</li>
                        <li>Delivery time: 1–4 weeks (depending on the package)</li>
                        <li>
                            Travel within Limerick is included — travel outside incurs a
                            mileage fee
                        </li>
                        <li>20% booking deposit required to confirm your date</li>
                    </ul>
                </section>
            </motion.div>
        </main>
    );
}
