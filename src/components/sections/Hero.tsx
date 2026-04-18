"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Activity, FileText } from "lucide-react";
import Ticker from "@/components/ui/Ticker";

const stats = [
  {
    title: "Your Optimization Dashboard",
    description:
      "Real-time biomarker protocol adherence and performance tracking.",
    value: "94%",
    label: "of clients report improvement within 90 days",
    icon: <Clock className="text-accent" size={20} />,
  },
  {
    title: "Biomarker Tracking",
    description: "Monitor progress with precision diagnostics.",
    value: "125+",
    label: "lab tests for comprehensive biomarker assessment.",
    icon: <Activity className="text-accent" size={20} />,
  },
  {
    title: "Protocol Design",
    description:
      "Personalized to your biology. Members report noticeable performance gains in the first.",
    value: "8-12",
    label: "weeks",
    icon: <FileText className="text-accent" size={20} />,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-25 overflow-hidden bg-black">
      {/* Background Image - High Contrast Backlit Athlete */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/athlete-performance.jpeg"
          alt="Eterna IQ Hero"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70"
          priority
        />
        {/* Subtle vignette and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center flex-1 justify-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-title font-medium tracking-[0.2em] uppercase text-white/80">
            Precision Health Optimization
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5rem] font-title font-medium tracking-tight text-white mb-8 max-w-5xl leading-[1.1]"
        >
          Optimize your biology. <br />
          <span className="text-white">Elevate your life.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-white/60 max-w-2xl mb-12 font-body font-normal"
        >
          Clinically guided protocols for metabolic health, hormones, energy,
          and longevity, delivered through a premium concierge platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button className="px-10 py-4 rounded-full bg-accent text-black font-title font-medium text-base hover:scale-105 transition-all shadow-lg hover:shadow-accent/20">
            Find Your Protocol
          </button>
          <button className="px-10 py-4 rounded-full glass border border-white/20 text-white font-title font-medium text-base hover:bg-white/10 transition-all">
            Explore Treatments
          </button>
        </motion.div>

        {/* Hero Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-dark p-8 rounded-[2rem] flex flex-col items-start text-left border border-white/10 group hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <h3 className="text-sm font-title font-medium text-white/90">
                  {stat.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-white/40 mb-8 min-h-[2.5rem]">
                {stat.description}
              </p>
              <div className="mt-auto flex flex-col gap-1">
                <span className="text-4xl font-title font-medium text-accent tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[10px] font-body font-normal uppercase tracking-widest text-white/30">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker at the bottom of the section */}
      <Ticker />
    </section>
  );
}
