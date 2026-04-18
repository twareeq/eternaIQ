"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "metabolic",
    title: "Metabolic Health",
    description: "Provider-led weight management, body composition improvement, and metabolic optimization. Not crash diets — sustainable, clinically guided transformation through biomarker-informed protocols.",
    image: "/assets/marcus-webb.jpg",
    link: "Explore Metabolic Health",
  },
  {
    id: "hormone",
    title: "Hormone Health",
    description: "Clinically guided hormonal optimization for men and women. Testosterone, estrogen, progesterone, and vitality restoration through provider-supervised protocols — not a cookie-cutter TRT clinic.",
    image: "/assets/lab-analysis.png",
    link: "Explore Hormone Health",
  },
  {
    id: "energy",
    title: "Energy & Recovery",
    description: "Address fatigue, burnout, and poor resilience at the cellular level. NAD+, glutathione, and targeted recovery protocols to help you feel better and perform better — every day.",
    image: "/assets/clinical-outcomes.jpg",
    link: "Explore Energy & Recovery",
  },
  {
    id: "longevity",
    title: "Longevity & Performance",
    description: "Extend your healthspan and preserve peak performance. Diagnostics, protocol design, and ongoing optimization cycles — because aging well and performing now aren't mutually exclusive.",
    image: "/assets/supplements-macro-bg.png",
    link: "Explore Longevity",
  },
];

export default function OptimizationPillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % pillars.length);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 font-title font-medium tracking-wide text-sm mb-4 block"
          >
            Core Optimization Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-title font-medium text-white tracking-tight"
          >
            Built for how you want to feel
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {pillars.slice(activeIndex, activeIndex + 3).concat(
                pillars.slice(0, Math.max(0, (activeIndex + 3) - pillars.length))
              ).map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  layout
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="flex flex-col group"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 bg-white/5 border border-white/10 group-hover:border-accent/30 transition-all duration-500">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-2xl font-title font-medium text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-4 font-body font-normal">
                    {pillar.description}
                  </p>
                  <Link
                    href="#"
                    className="mt-auto inline-flex items-center gap-2 text-accent/80 font-title font-medium text-xs uppercase tracking-widest hover:text-accent transition-colors group/link"
                  >
                    {pillar.link} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-16 flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    i === activeIndex ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
