import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ConditionalLayout from "@/components/ConditionalLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Timmy Mejabi',
    default: 'Timmy Mejabi',
  },
  description: 'Creative and lifestyle wedding photography, videography, and event planning in Limerick and across Ireland. Capturing authentic moments with artistic vision.',
  keywords: [
    'wedding photography Limerick',
    'wedding videography Ireland',
    'event planning Limerick',
    'wedding photographer Limerick',
    'videographer Ireland',
    'documentary wedding photography',
    'creative wedding films',
    'Dublin wedding services',
    'Irish wedding photography',
    'professional event planning'
  ],
  authors: [{ name: 'Mejabi Durotimi' }],
  creator: 'Mejabi Durotimi',
  publisher: 'Mejabi Durotimi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mejabidurotimi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Timmy Mejabi',
    description: 'Creative and lifestyle wedding photography, videography, and event planning in Limerick and across Ireland.',
    url: 'https://mejabidurotimi.com',
    siteName: 'Timmy Mejabi',
    locale: 'en_IE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Timmy Mejabi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timmy Mejabi',
    description: 'Creative and lifestyle wedding photography, videography, and event planning in Limerick and across Ireland.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Add verification codes
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-site-verification-code',
  },
  category: 'Photography & Videography',
  classification: 'Wedding Photography, Event Planning, Limerick, Ireland',
  referrer: 'origin-when-cross-origin',

  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Timmy Mejabi',
  },
  applicationName: 'Timmy Mejabi',
  generator: 'Next.js',
  other: {
    'msapplication-TileColor': '#d6cbb6',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-title': 'Mejabi Durotimi',
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d6cbb6' },
    { media: '(prefers-color-scheme: dark)', color: '#181818' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Replace with actual website URL
  return (
    <html lang="en-IE">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#d6cbb6" />
        <meta name="msapplication-TileColor" content="#d6cbb6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Timmy Mejabi" />
        <meta name="application-name" content="Timmy Mejabi" />
        <meta name="msapplication-tooltip" content="Wedding & Lifestyle Photography & Videography Limerick" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="geo.region" content="IE-D" />
        <meta name="geo.placename" content="Dublin" />
        <meta name="geo.position" content="53.3498;-6.2603" />
        <meta name="ICBM" content="53.3498, -6.2603" />
      </head>
      <body
        className={
          inter.className +
          " bg-[var(--background)] text-[var(--text)] min-h-screen"
        }
      >
        <div className="max-w-7xl mx-auto w-full min-h-screen flex flex-col">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WCVFEFZPTZ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WCVFEFZPTZ', {
                page_title: 'Timmy Mejabi',
                page_location: window.location.href,
                anonymize_ip: true,
                allow_google_signals: true,
                allow_ad_personalization_signals: true
              });
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
                "@id": "https://mejabidurotimi.com",
                name: "Timmy Mejabi",
                alternateName: "Timmy Mejabi",
                description: "Creative and lifestyle wedding photography, videography, and event planning in Limerick and across Ireland.",
                image: "https://mejabidurotimi.com/logo.png",
                logo: "https://mejabidurotimi.com/logo.png",
                url: "https://mejabidurotimi.com",
                telephone: "+353-8-305-81324",
                email: "mejabidurotimi@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Limerick",
                  addressRegion: "Limerick",
                  addressCountry: "IE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 53.3498,
                  longitude: -6.2603,
                },
                areaServed: [
                  {
                    "@type": "Place",
                    name: "Limerick, Ireland",
                  },
                  {
                    "@type": "Place",
                    name: "Ireland",
                  },
                ],
                serviceType: [
                  "Wedding Photography",
                  "Wedding Videography",
                  "Event Planning",
                  "Portrait Photography",
                  "Documentary Photography",
                  "Creative Wedding Films"
                ],
                priceRange: "€€€",
                openingHours: "Mo-Su 09:00-18:00",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Wedding & Event Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Wedding Photography",
                        description: "Creative and lifestyle wedding photography capturing authentic moments"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Wedding Videography",
                        description: "Cinematic wedding films that tell your unique love story"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Event Planning",
                        description: "Full-service event planning for weddings and special occasions"
                      }
                    }
                  ]
                },
                sameAs: [
                  "https://www.instagram.com/mejabidurotimi/",
                  "https://www.linkedin.com/in/oluwadurotimi-mejabi-86046117a/",
                ],
                founder: {
                  "@type": "Person",
                  name: "Mejabi Durotimi",
                  jobTitle: "Wedding & Lifestyle Photographer & Videographer",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Limerick",
                    addressCountry: "IE",
                  },
                  sameAs: [
                    "https://www.instagram.com/mejabidurotimi/",
                    "https://www.linkedin.com/in/oluwadurotimi-mejabi-86046117a/",
                  ],
                },
              }),
            }}
          />
          <ConditionalLayout>{children}</ConditionalLayout>
        </div>
      </body>
    </html>
  );
}
