import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import GSAPProvider from "./components/GSAPProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Mohammad Emami | Front-End Developer",
  description:
    "A modern Front-End Developer skilled in React, Next.js, TypeScript, Tailwind CSS, and GSAP. I design and develop various UI experiences—from clean minimal interfaces to complex animated layouts—created for speed, scalability, and exceptional user experience. Explore my projects, components, and contact details.",
  keywords: [
    "front-end developer",
    "react developer",
    "next.js",
    "portfolio",
    "web design",
    "محمد امامی",
    "tailwind css",
    "gsap animations",
    "modern websites",
    "mui , shadcn",
    "web developer",
  ],
  openGraph: {
    title: "Mohammad Emami | Front-End Developer",
    description:
      "Explore my portfolio, projects, and modern web development skills.",
    url: "https://www.mohammademamiproject.ir/",
    images: ["/og-image.png"],
    type: "website",
  },
 icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  antialiased`}>
        <LenisProvider />
        <GSAPProvider>{children}</GSAPProvider>
        <Analytics />
      </body>
    </html>
  );
}
