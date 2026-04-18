"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const NavigationData = [
  {
    title: "Treatments",
    links: [
      { name: "Metabolic Health", href: "#" },
      { name: "Hormone Health", href: "#" },
      { name: "Energy & Recovery", href: "#" },
      { name: "Longevity & Performance", href: "#" },
      { name: "Find My Protocol", href: "#" },
    ],
  },
  {
    title: "Aesthetics",
    links: [
      { name: "Skin Rejuvenation", href: "#" },
      { name: "Hair Restoration", href: "#" },
      { name: "Body Contouring", href: "#" },
      { name: "Anti-Aging Protocols", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Eterna IQ", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Our Providers", href: "#" },
      { name: "Labs & Testing", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Patient Portal", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

// High-fidelity social SVGs to match design exactly
const SocialIcons = [
  {
    name: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
  },
  {
    name: "X",
    icon: <X size={20} />,
  },
  {
    name: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] pt-16 md:pt-24 pb-8 md:pb-12 text-[#1a1a1a]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Branding Section */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-title font-light md:font-medium tracking-tight mb-4">
            Eterna IQ
          </h2>
          <p className="text-xl md:text-2xl text-black/60 font-light pr-4 md:pr-0">
            Unlock the Future of Health<br className="md:hidden" /> Optimization.
          </p>
        </div>

        <div className="w-full h-px bg-black/10 mb-10 md:mb-16" />

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 mb-12 md:mb-20 pt-4 md:pt-0">
          {NavigationData.map((column) => (
            <div key={column.title} className="flex flex-col">
              <div className="group flex items-center gap-3 text-black/90 hover:text-[#2dd4bd] transition-colors md:cursor-default cursor-pointer mb-2 md:mb-8">
                <span className="text-[#2dd4bd] opacity-60 md:hidden font-light text-xl">
                  &gt;
                </span>
                <h3 className="text-2xl font-light tracking-tight">
                  {column.title}
                </h3>
              </div>
              <ul className="hidden md:block space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-black/60 hover:text-[#2dd4bd] transition-colors text-lg"
                    >
                      <span className="text-[#2dd4bd] opacity-60 group-hover:opacity-100 transition-opacity">
                        &gt;
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-black/10 mb-10 md:mb-16" />

        {/* Brand & Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="flex flex-col gap-6 flex-1">
            {/* Dark Logo Badge */}
            <div className="bg-[#1a1a1a] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl w-fit flex items-center justify-center">
              <span className="text-xl md:text-2xl tracking-[0.2em] font-title font-medium">
                ETERNA <span className="text-white/40 ml-1 italic font-body font-light tracking-normal">IQ</span>
              </span>
            </div>
            <p className="text-black/50 text-base md:text-lg max-w-md leading-relaxed font-light">
              Premium telehealth optimization for metabolic health, hormones,
              energy, and longevity. Clinically guided. Concierge delivered.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 mt-2 md:mt-0">
            <span className="text-black/60 text-lg font-light md:uppercase md:tracking-widest md:font-medium">
              Connect
            </span>
            <div className="flex gap-4">
              {SocialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
                  className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-black/80 hover:text-black hover:shadow-sm transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-black/10 mb-8 md:mb-12" />

        {/* Medical Disclaimer */}
        <div className="mb-8 md:mb-12">
          <p className="text-black/40 text-left md:text-center text-xs md:text-sm leading-loose max-w-5xl mx-auto font-light">
            Eterna IQ Health is a telehealth platform. All protocols are designed and
            supervised by licensed, board-certified clinicians. Medications are
            sourced from FDA-registered U.S.-based compounding pharmacies. Results
            may vary. This website is for informational purposes only and does not
            constitute medical advice.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-black/10 flex justify-center text-black/40 text-xs md:text-sm tracking-wide">
          <p>© 2026 Eterna IQ Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
