"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const weddingPlans = [
    {
        name: "Month-Of Coordination",
        price: "€800",
        features: [
            "For couples who planned their wedding but need help finalizing & coordinating",
            "Timeline creation",
            "Vendor management",
            "Day-of coordination",
        ],
        cta: "Book Month-Of",
    },
    {
        name: "Partial Planning",
        price: "€1,500",
        features: [
            "Vendor referrals + booking",
            "Style & design input",
            "Budget guidance",
            "Timeline creation",
            "Day-of coordination",
        ],
        cta: "Book Partial",
    },
    {
        name: "Full-Service Planning",
        price: "€2,800+",
        features: [
            "From vision to execution",
            "Venue sourcing",
            "Budget creation",
            "Vendor booking & management",
            "Styling, design, timelines",
            "On-site coordination & post-event follow-up",
        ],
        cta: "Book Full-Service",
    },
];

const weddingAddOns = [
    {
        name: "Rehearsal Dinner Coordination",
        price: "+€250",
        desc: "Planning & on-site support",
    },
    {
        name: "Destination Weddings",
        price: "Varies",
        desc: "Available across Europe — custom quote",
    },
];

const privatePartyPlans = [
    {
        name: "Birthday / Anniversary / Baby Shower",
        price: "from €700",
        features: [
            "Theme planning",
            "Venue & vendor coordination",
            "Decor setup",
            "Day-of supervision",
        ],
        cta: "Book Private Party",
    },
    {
        name: "Engagement Party / Proposal Planning",
        price: "from €600",
        features: [
            "Concept creation",
            "Venue sourcing",
            "Timeline + vendor booking",
            "On-site execution",
        ],
        cta: "Book Engagement",
    },
    {
        name: "Milestone Events",
        price: "from €850",
        features: [
            "Sweet 16, 21st, Retirement, etc.",
            "Custom themes, entertainment booking",
            "Detailed coordination",
        ],
        cta: "Book Milestone",
    },
];

const corporatePlans = [
    {
        name: "Small Business Launch / Pop-Up Event",
        price: "from €900",
        features: [
            "Venue selection",
            "Theme + branding elements",
            "Vendor coordination",
            "Guest management",
        ],
        cta: "Book Business Launch",
    },
    {
        name: "Company Retreat / Internal Event",
        price: "from €1,500",
        features: [
            "Full planning and logistics",
            "Activities coordination",
            "Meals & transport support",
        ],
        cta: "Book Company Retreat",
    },
    {
        name: "Conference / Workshop",
        price: "from €2,500",
        features: [
            "End-to-end logistics",
            "Venue + AV setup",
            "Guest registration + speaker management",
            "Vendor and catering coordination",
        ],
        cta: "Book Conference",
    },
];

const addOnServices = [
    {
        name: "On-the-Day Coordinator Only",
        price: "€400/day",
        desc: "Day-of coordination services",
    },
    {
        name: "Event Styling & Décor Sourcing",
        price: "from €300",
        desc: "Styling and decoration services",
    },
    {
        name: "Vendor Sourcing Only (No Planning)",
        price: "from €200",
        desc: "Vendor recommendations only",
    },
    {
        name: "Custom Invitations / Digital RSVP Setup",
        price: "from €150",
        desc: "Invitation design and RSVP management",
    },
    {
        name: "Guest List Management",
        price: "from €100",
        desc: "Guest list organization and tracking",
    },
    {
        name: "Event Website (Mini site or RSVP portal)",
        price: "from €300",
        desc: "Custom event website creation",
    },
];

export default function EventPlanningRatesPage() {
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
                    Event Planning Pricing
                </h1>
                <p className="text-sm text-[var(--divider)] mb-8 text-center">
                    Valid as of <span className="font-semibold">June, 2024</span> — All
                    prices in EUR (€)
                </p>
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
                        className={`flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${billing === "private" ? "bg-[var(--background)] text-[var(--text)] shadow" : "text-[var(--divider)] hover:text-[var(--text)]"}`}
                        onClick={() => setBilling("private")}
                        aria-pressed={billing === "private"}
                    >
                        Private
                    </button>
                    <button
                        className={`flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${billing === "corporate" ? "bg-[var(--background)] text-[var(--text)] shadow" : "text-[var(--divider)] hover:text-[var(--text)]"}`}
                        onClick={() => setBilling("corporate")}
                        aria-pressed={billing === "corporate"}
                    >
                        Corporate
                    </button>
                    <button
                        className={`flex-1 px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${billing === "addons" ? "bg-[var(--background)] text-[var(--text)] shadow" : "text-[var(--divider)] hover:text-[var(--text)]"}`}
                        onClick={() => setBilling("addons")}
                        aria-pressed={billing === "addons"}
                    >
                        Add-Ons
                    </button>
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
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                {billing === "private" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {privatePartyPlans.map((plan, i) => (
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
                {billing === "corporate" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
                        {corporatePlans.map((plan, i) => (
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
                {billing === "addons" && (
                    <div className="w-full max-w-4xl mb-10">
                        <h2 className="text-xl font-bold mb-4 text-[var(--text)] text-center">
                            Add-On Services
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {addOnServices.map((add) => (
                                <li
                                    key={add.name}
                                    className="bg-[var(--background)] rounded-xl p-4 border border-[var(--divider)] flex flex-col items-center text-center"
                                >
                                    <span className="font-semibold text-[var(--text)] text-sm">
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
                <section className="mb-8 w-full max-w-3xl">
                    <h2 className="text-2xl font-bold mb-2 text-[var(--text)]">
                        Additional Info
                    </h2>
                    <ul className="list-disc pl-6 text-[var(--text)] text-base space-y-2">
                        <li>
                            <strong>Free 30-minute consultation</strong> included with all
                            bookings
                        </li>
                        <li>Travel within Limerick included — mileage applies outside</li>
                        <li>25–40% deposit required to secure the date</li>
                        <li>Final balance due 5 days before event</li>
                        <li>Flexible payment plans available for weddings</li>
                    </ul>
                </section>
            </motion.div>
        </main>
    );
}
