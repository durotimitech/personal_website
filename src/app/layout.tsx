import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Mejabi Oluwadurotimi - Photographer, Videographer, Web Developer and Event Planner",
  description: "Transforming ideas into stunning visuals and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Replace with actual website URL
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={
          montserrat.className +
          " bg-[var(--background)] text-[var(--text)] min-h-screen"
        }
      >
        <div className="max-w-7xl mx-auto w-full min-h-screen flex flex-col">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script>
          <Script
            id="ld-json"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Mejabi Oluwadurotimi Photography & Web",
                image: "https://yourwebsite.com/logo.png",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "[Your Street]",
                  addressLocality: "Limerick",
                  addressRegion: "Munster",
                  postalCode: "V94",
                  addressCountry: "IE",
                },
                url: "https://yourwebsite.com",
                telephone: "+353...",
                priceRange: "$$",
                openingHours: "Mo-Su 08:00-20:00",
              }),
            }}
          />
          <Hero />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
