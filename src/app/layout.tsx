import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICMBSD-2026 | International Conference on Microbial Biotechnology",
  description: "International Conference on Microbial Biotechnology for Sustainable Development in Environment and Agriculture. February 6-7, 2026 at Sathyabama Institute of Science & Technology, Chennai.",
  keywords: [
    "microbial biotechnology",
    "sustainable development",
    "bioremediation",
    "biofertilizers",
    "biofuels",
    "genomics",
    "proteomics",
    "agriculture",
    "environment",
    "conference 2026",
    "Sathyabama Institute",
    "ICMBSD-2026"
  ],
  authors: [{ name: "Sathyabama Institute of Science & Technology" }],
  openGraph: {
    title: "ICMBSD-2026 | International Conference on Microbial Biotechnology",
    description: "Join us for ICMBSD-2026 on February 6-7, 2026. Exploring microbial solutions for sustainable development.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICMBSD-2026 Conference",
    description: "International Conference on Microbial Biotechnology for Sustainable Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
