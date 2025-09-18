"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Button from "./Button";

interface Package {
  name: string;
  price: string;
  features: string[];
  description?: string;
  highlight?: boolean;
}

interface RatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  packages: Package[];
  sections?: {
    title: string;
    packages: Package[];
  }[];
  addOns?: {
    name: string;
    price: string;
    desc: string;
  }[];
}

export default function RatesModal({ isOpen, onClose, title, packages, sections, addOns }: RatesModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="bg-[var(--background)] rounded-2xl shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-[var(--background)] border-b border-[var(--divider)] p-6 flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{title}</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-[var(--card)] hover:bg-[var(--divider)] transition-colors flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <span className="text-2xl text-[var(--text)]">×</span>
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-88px)] p-6">
                {/* If sections are provided, render them with headers */}
                {sections && sections.length > 0 ? (
                  <div className="space-y-12">
                    {sections.map((section, sectionIdx) => (
                      <div key={section.title}>
                        <h3 className="text-xl font-bold mb-6 text-[var(--text)]">
                          {section.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {section.packages.map((plan, i) => (
                            <motion.div
                              key={plan.name}
                              className={`flex flex-col rounded-2xl p-6 shadow-lg bg-[var(--card)] border border-[var(--divider)] ${
                                plan.highlight ? "ring-2 ring-[var(--text)] relative" : ""
                              }`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: sectionIdx * 0.2 + i * 0.1 }}
                            >
                              {plan.highlight && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--text)] text-[var(--background)] px-4 py-1 rounded-full text-xs font-bold">
                                  MOST POPULAR
                                </span>
                              )}
                              <div className="mb-4">
                                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 ${
                                  plan.highlight
                                    ? "bg-[var(--text)] text-[var(--background)]"
                                    : "bg-[var(--divider)] text-[var(--text)]"
                                }`}>
                                  {plan.name}
                                </span>
                                {plan.description && (
                                  <p className="text-sm text-[var(--text)]/70 mt-2">
                                    {plan.description}
                                  </p>
                                )}
                              </div>
                              <div className="mb-6">
                                <span className="text-3xl md:text-4xl font-extrabold text-[var(--text)]">
                                  {plan.price}
                                </span>
                              </div>
                              <ul className="flex-1 flex flex-col gap-2 mb-6 text-[var(--text)]">
                                {plan.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <span className="text-base mt-0.5">✔️</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                href="mailto:mejabidurotimi@gmail.com"
                                variant="primary"
                                className="w-full justify-center"
                              >
                                Contact Me
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Otherwise render packages directly */
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {packages.map((plan, i) => (
                      <motion.div
                        key={plan.name}
                        className={`flex flex-col rounded-2xl p-6 shadow-lg bg-[var(--card)] border border-[var(--divider)] ${
                          plan.highlight ? "ring-2 ring-[var(--text)] relative" : ""
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {plan.highlight && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--text)] text-[var(--background)] px-4 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                          </span>
                        )}
                        <div className="mb-4">
                          <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 ${
                            plan.highlight
                              ? "bg-[var(--text)] text-[var(--background)]"
                              : "bg-[var(--divider)] text-[var(--text)]"
                          }`}>
                            {plan.name}
                          </span>
                          {plan.description && (
                            <p className="text-sm text-[var(--text)]/70 mt-2">
                              {plan.description}
                            </p>
                          )}
                        </div>
                        <div className="mb-6">
                          <span className="text-3xl md:text-4xl font-extrabold text-[var(--text)]">
                            {plan.price}
                          </span>
                        </div>
                        <ul className="flex-1 flex flex-col gap-2 mb-6 text-[var(--text)]">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-base mt-0.5">✔️</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          href="mailto:mejabidurotimi@gmail.com"
                          variant="primary"
                          className="w-full justify-center"
                        >
                          Contact Me
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Add-ons Section */}
                {addOns && addOns.length > 0 && (
                  <div className="border-t border-[var(--divider)] pt-8">
                    <h3 className="text-xl font-bold mb-6 text-[var(--text)]">
                      Add-On Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {addOns.map((add, i) => (
                        <motion.div
                          key={add.name}
                          className="bg-[var(--card)] rounded-xl p-4 border border-[var(--divider)] text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <h4 className="font-semibold text-[var(--text)] mb-1">
                            {add.name}
                          </h4>
                          <p className="text-lg font-bold text-[var(--text)] mb-1">
                            {add.price}
                          </p>
                          <p className="text-sm text-[var(--text)]/70">
                            {add.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}