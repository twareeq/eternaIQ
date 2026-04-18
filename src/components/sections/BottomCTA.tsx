"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BottomCTA() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/supplements-macro-bg.png"
          alt="Optimized Health Supplements"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[#2dd4bd] text-sm md:text-base font-title font-medium tracking-[0.2em] uppercase mb-6"
        >
          Start Today
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-title font-medium text-white mb-8 tracking-tight max-w-4xl mx-auto"
        >
          Your optimization starts here.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-body font-normal"
        >
          Take the 2-minute assessment to see which clinically guided protocol is
          right for you. Premium care, from home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-[#2a4b5d] font-title font-medium text-lg transition-all hover:bg-white/90"
          >
            Find Your Protocol
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/40 text-white font-title font-medium text-lg backdrop-blur-sm transition-all hover:bg-white hover:text-[#2a4b5d]"
          >
            Explore Treatments
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
