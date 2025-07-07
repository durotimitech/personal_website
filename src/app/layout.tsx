import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mejabi Oluwadurotimi – Creative Designer",
  description: "Transforming ideas into stunning visuals and brand experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-[#f5f4f0] text-[#181818] min-h-screen"}>
        <div className="max-w-7xl mx-auto w-full min-h-screen flex flex-col">
          <Hero />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
