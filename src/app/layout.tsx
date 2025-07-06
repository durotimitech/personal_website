import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className + " bg-[#f5f4f0] text-[#181818] min-h-screen"}>
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
