"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import RatesModal from "@/components/ui/RatesModal";
import NavBar from "@/components/ui/NavBar";
import Button from "@/components/ui/Button";

// Lifestyle Photography Packages
const lifestylePackages = {
  studio: [
    {
      name: "Mini Package",
      price: "€200",
      features: [
        "Access to studio",
        "Pre-Shoot Consultation",
        "1 - 2 Hours",
        "2 Looks",
        "10 Edited Images",
      ],
    },
    {
      name: "Basic Package",
      price: "€300",
      features: [
        "Access to studio",
        "Pre-Shoot Consultation",
        "2 - 4 Hours",
        "4 Looks",
        "25 Edited Images",
      ],
    },
    {
      name: "Premium Package",
      price: "€500",
      features: [
        "Access to studio",
        "Pre-Shoot Consultation",
        "Full Day",
        "8 Looks",
        "40 Edited Images",
      ],
    },
  ],
  outdoor: [
    {
      name: "Mini Package",
      price: "€150",
      features: [
        "Pre-Shoot Consultation",
        "1 - 2 Hours",
        "2 Looks",
        "10 Edited Images",
      ],
    },
    {
      name: "Basic Package",
      price: "€250",
      features: [
        "Pre-Shoot Consultation",
        "2 - 4 Hours",
        "4 Looks",
        "25 Edited Images",
      ],
    },
    {
      name: "Premium Package",
      price: "€400",
      features: [
        "Pre-Shoot Consultation",
        "Full Day",
        "8 Looks",
        "40 Edited Images",
      ],
    },
  ],
};

// Wedding Photography Packages
const weddingPackages = [
  {
    name: "Essentials",
    description:
      "Perfect for intimate weddings or elopements. Get the key moments beautifully captured.",
    price: "€250",
    features: ["4 hours coverage", "150+ edited photos", "Pre-Wedding Consultation"],
    highlight: false,
  },
  {
    name: "Classic",
    description:
      "Our most popular package for full wedding day coverage and extra keepsakes.",
    price: "€400",
    features: [
      "8 hours coverage",
      "250+ edited photos",
      "Pre-wedding consultation",
      "Pre-wedding Consultation",
    ],
    highlight: true,
  },
  {
    name: "Full Day",
    description:
      "For couples who want every moment, from prep to party, captured in detail.",
    price: "€700",
    features: [
      "Full Day Coverage",
      "All-day story (prep to party)",
      "500+ edited photos",
      "Free Pre-Wedding/Engagement Shoot",
      "Pre-wedding consultation",
    ],
    highlight: false,
  },
];

const weddingAddOns = [
  // { name: "Second Photographer", price: "+€150", desc: "For full-day events" },
  // {
  //   name: "Wedding Album",
  //   price: "from €150",
  //   desc: "Custom-designed 20-page hardcover",
  // },
  {
    name: "Engagement Shoot",
    price: "€250",
    desc: "1-hour session, 30+ images",
  },
];

interface Package {
  name: string;
  price: string;
  features: string[];
  description?: string;
  highlight?: boolean;
}

interface AddOn {
  name: string;
  price: string;
  desc: string;
}

const photographyTypes: Array<{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  highlights: string[];
  packages: Package[];
  sections?: { title: string; packages: Package[] }[];
  addOns?: AddOn[];
  reverse?: boolean;
}> = [
  {
    id: "lifestyle",
    title: "Lifestyle Photography",
    subtitle: "Capturing Authentic Moments",
    description: "Professional studio and outdoor portrait sessions for individuals, families, and personal branding. Our lifestyle photography captures your genuine personality and connections in natural, relaxed settings.",
    images: [
      "/images/photography/lady-smiling-while-holding-a-flower-in-limerick.jpg",
      "/images/photography/man-with-star-wars-helmet-ireland.jpg",
      "/images/photography/lifestyle-photography-limerick.jpg",
      "/images/photography/lady-kneeling-in-bed-of-flowers-limerick.jpg",
      "/images/photography/studio-portrait-ireland.jpg",
    ],
    highlights: [
      "Studio & Outdoor Sessions",
      "Personal Branding",
      "Family Portraits",
      "Individual Portraits"
    ],
    packages: [...lifestylePackages.studio, ...lifestylePackages.outdoor],
    sections: [
      {
        title: "Studio Shoot Packages",
        packages: lifestylePackages.studio
      },
      {
        title: "Outdoor Shoot Packages", 
        packages: lifestylePackages.outdoor
      }
    ],
  },
  {
    id: "wedding",
    title: "Wedding Photography",
    subtitle: "Your Love Story, Beautifully Told",
    description: "From intimate ceremonies to grand celebrations, our wedding photography preserves every precious moment of your special day. We blend photojournalistic and artistic styles to create timeless images you'll treasure forever.",
    images: [
      "/images/photography/outdoor-wedding-ireland.jpg",
      "/images/photography/engagement-proposal-shoot-ireland.jpg",
      "/images/photography/couple-in-love-ireland.jpg",
      "/images/photography/pre-wedding-shoot-limerick.jpg",
    ],
    highlights: [
      "Full Day Coverage",
      "Pre-Wedding Consultation",
      "Professional Editing",
      "Multiple Package Options"
    ],
    packages: weddingPackages,
    addOns: weddingAddOns,
    reverse: true,
  }
];

export default function PhotographyRatesPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen w-full bg-[var(--background)] py-8 px-4 md:px-8">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
              Photography Services
            </h1>
          </div>

          {/* Photography Type Sections */}
          <div className="space-y-24">
            {photographyTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  type.reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Carousel Section */}
                <div className={`${type.reverse ? "lg:col-start-2" : ""}`}>
                  <PhotoCarousel images={type.images} alt={type.title} />
                </div>

                {/* Content Section */}
                <div className={`${type.reverse ? "lg:col-start-1" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: type.reverse ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Title Section */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
                        {type.title}
                      </h2>
                      <p className="text-xl text-[var(--text)]/70 italic">
                        {type.subtitle}
                      </p>
                    </div>

                    {/* View Product Button */}
                    <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <Button
                onClick={() => handleOpenModal(type.id)}
                className="px-8 py-3 rounded-full font-medium text-base flex items-center gap-2 shadow-lg cursor-pointer"
              >
                See Rates
                <span className="w-7 h-7 rounded-full bg-[var(--divider)] flex items-center justify-center ml-2 text-[var(--text)] text-lg">
                  →
                </span>
              </Button>
            </motion.div>

                    {/* Description */}
                    <div className="pt-4">
                      <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">
                        {type.reverse ? "Why Choose Our Wedding Photography" : "What Makes Us Different"}
                      </h3>
                      <p className="text-[var(--text)]/80 leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    {/* Highlights Section */}
                    {type.highlights && (
                      <div className="pt-4">
                        <h4 className="text-lg font-semibold text-[var(--text)] mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {type.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[var(--text)]/70">
                              <span className="text-green-500">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Modals */}
      {photographyTypes.map((type) => (
        <RatesModal
          key={type.id}
          isOpen={openModal === type.id}
          onClose={handleCloseModal}
          title={`${type.title} - Price List`}
          packages={type.packages}
          sections={type.sections}
          addOns={type.addOns}
        />
      ))}
    </>
  );
}