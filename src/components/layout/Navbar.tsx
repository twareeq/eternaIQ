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
            className="fixed inset-0 z-[100] bg-background p-8 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-title font-medium tracking-tight text-white">ETERNA IQ</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-title font-medium text-white/50 hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-8 px-8 py-4 rounded-full bg-accent text-black font-title font-medium text-xl">
                Find Your Protocol
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
