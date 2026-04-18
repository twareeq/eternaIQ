"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-[#2a4b5d] text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 font-title font-medium tracking-widest text-xs uppercase"
          >
            About EternalIQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-title font-medium tracking-tighter leading-[1.1] max-w-5xl"
          >
            Built by clinicians who believe medicine could do more
          </motion.h2>
        </div>

        {/* Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Interactive Eye Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden group shadow-2xl"
          >
            <Image
              src="/assets/about-premium-care.png"
              alt="EternaIQ Medical Vision"
              width={800}
              height={600}
              className="object-cover w-full scale-105 group-hover:scale-110 transition-transform duration-[2s]"
            />
            
            {/* Callouts */}
            <div className="absolute inset-0 z-10">
              {/* FOCUS */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-[48%] left-[10%] flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  <span className="text-[10px] font-title font-medium tracking-[0.2em] uppercase text-white drop-shadow-md">
                    Focus
                  </span>
                </div>
              </motion.div>

              {/* MEMORY */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-[25%] left-[18%] flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  <span className="text-[10px] font-title font-medium tracking-[0.2em] uppercase text-white drop-shadow-md">
                    Memory
                  </span>
                </div>
              </motion.div>

              {/* STRESS */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-[12%] right-[25%] flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  <span className="text-[10px] font-title font-medium tracking-[0.2em] uppercase text-white drop-shadow-md">
                    Lower Stress & Cortisol
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Subtle Eye Gradient Overlay */}
            <div className="absolute inset-0 bg-[#2a4b5d]/10 mix-blend-overlay" />
          </motion.div>

          {/* Right: Vision Text */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-body font-normal">
                EternalIQ was founded on a simple frustration: the healthcare system 
                is designed to treat disease, not prevent it. Our founders — physicians, 
                researchers, and performance coaches — set out to build something different.
              </p>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-body font-normal">
                A platform where optimization is accessible, evidence-based, and guided 
                by people who genuinely care about your long-term health — not just 
                your next appointment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button className="group relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 pr-8 transition-all hover:bg-white/15">
                <div className="bg-white text-[#2a4b5d] py-3.5 px-10 rounded-full font-title font-medium text-lg shadow-sm">
                  Our Full Story
                </div>
                <div className="ml-6 text-white">
                  <ArrowRight size={24} className="transition-transform group-hover:translate-x-1.5" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
