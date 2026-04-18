import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const objectivity = localFont({
  src: [
    {
      path: "../fonts/Objectivity-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Objectivity-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Objectivity-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-objectivity",
});

const ppObjectSans = localFont({
  src: [
    {
      path: "../fonts/PPObjectSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPObjectSans-Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pp-object-sans",
});

export const metadata: Metadata = {
  title: "Eterna IQ | Optimize Your Biology",
  description: "Advanced longevity science and performance engineering for human excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${objectivity.variable} ${ppObjectSans.variable} font-body antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
