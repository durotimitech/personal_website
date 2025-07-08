"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";

const weddingPlans = [
  {
    name: "Month-Of Coordination",
    price: "€400",
    features: [
      "For couples who planned their wedding but need help finalizing & coordinating",
      "Timeline creation",
      "Vendor management",
      "Day-of coordination",
    ],
  },
  {
    name: "Partial Planning",
    price: "€700",
    features: [
      "Vendor referrals + booking",
      "Style & design input",
      "Budget guidance",
      "Timeline creation",
      "Day-of coordination",
    ],
  },
  {
    name: "Full-Service Planning",
    price: "€1,200+",
    features: [
      "From vision to execution",
      "Venue sourcing",
      "Budget creation",
      "Wedding website creation",
      "Vendor booking & management",
      "Styling, design, timelines",
      "On-site coordination & post-event follow-up",
    ],
  },
];

const addOnServices = [
  {
    name: "On-the-Day Coordinator Only",
    price: "€250/day",
    desc: "Day-of coordination services",
  },
  {
    name: "Vendor Sourcing Only (No Planning)",
    price: "from €200",
    desc: "Vendor recommendations only",
  },
  {
    name: "Wedding Website (Mini site or RSVP portal)",
    price: "from €200",
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
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-center text-[var(--text)] mb-10">
          Event Planning Pricing
        </h1>
        {/* Billing Toggle */}
        <div className="relative flex items-center justify-center gap-2 mb-12 bg-[var(--card)] rounded-full p-[6px] shadow-inner w-full max-w-2xl h-14">
          {[
            { label: "Wedding", value: "wedding" },
            { label: "Extras", value: "addons" },
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
        {billing === "addons" && (
          <div className="w-full max-w-4xl mb-10">
            <h2 className="text-xl font-bold mb-4 text-[var(--text)] text-center">
              Standalone Services
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOnServices.map((add) => (
                <li
                  key={add.name}
                  className="bg-[var(--card)] rounded-xl p-8 border border-[var(--divider)] flex flex-col items-center text-center"
                >
                  <span className="font-bold text-xl text-[var(--text)] mb-2">
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
