"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Metabolic Health", href: "#" },
  { name: "Hormone Health", href: "#" },
  { name: "Energy & Recovery", href: "#" },
  { name: "Longevity & Performance", href: "#" },
  { name: "All Treatments", href: "#" },
];

const mobileNavLinksTop = [
  { name: "Metabolic Health", href: "#" },
  { name: "Hormone Health", href: "#" },
  { name: "Energy & Recovery", href: "#" },
  { name: "Aesthetics", href: "#" },
];

const mobileNavLinksBottom = [
  { name: "FAQs", href: "#" },
  { name: "All Treatments", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-6xl",
          isScrolled ? "scale-95" : "scale-100"
        )}
      >
        <div className="glass-dark rounded-full px-6 py-3 flex items-center justify-between border border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/eterna-iq-logo.png"
              alt="Eterna IQ Logo"
              width={140}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-title font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 rounded-full bg-accent text-black font-title font-medium text-sm hover:scale-105 transition-all">
              Find Your Protocol
            </button>
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-black p-6 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center mb-16 mt-2 border-b border-transparent">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/assets/eterna-iq-logo.png"
                    alt="Eterna IQ Logo"
                    width={140}
                    height={32}
                    className="h-6 w-auto object-contain"
                    priority
                  />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-white/70 transition-colors p-2 -mr-2">
                  <X size={32} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links List */}
              <div className="flex flex-col gap-6 text-center mt-10">
                {mobileNavLinksTop.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[22px] font-title font-normal text-white hover:text-accent transition-colors tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="w-12 h-px bg-white/20 mx-auto my-1" />

                {mobileNavLinksBottom.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[22px] font-title font-normal text-white hover:text-accent transition-colors tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <button className="w-full mb-6 px-8 py-[18px] rounded-full bg-accent text-black font-title font-medium text-[17px] tracking-wide hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all">
              Find Your Protocol
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
