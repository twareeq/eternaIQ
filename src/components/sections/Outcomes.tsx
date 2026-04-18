"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reels = [
  {
    username: "@mytechceo",
    bio: "254k followers",
    image: "/outcome_reel_hazmat_1776465119201.png", // Generated
    avatar: "/assets/hero-dna-bg.png",
  },
  {
    username: "@avnibarman_",
    bio: "254k followers",
    image: "/assets/hero-dna-bg.png", // Placeholder
    avatar: "/assets/assessment-cta-bg.png",
  },
  {
    username: "@QuentinJohnston",
    bio: "NFL player",
    image: "/assets/dr-james-harlow.jpg", // EXACT MATCH (Money/Books)
    avatar: "/assets/marcus-webb.jpg",
  },
  {
    username: "@emmyxtech",
    bio: "386k followers",
    image: "/assets/clinical-outcomes.jpg", // Lab/Clinical match
    avatar: "/assets/lab-analysis.png",
  },
  {
    username: "@stefarmstead",
    bio: "90.2k Alo wellness club coach",
    image: "/assets/athlete-performance.jpeg", // Silhouette athlete match
    avatar: "/assets/dr-priya-nair.jpg",
  },
  {
    username: "@themegmalloy",
    bio: "Instructor @soulcycle",
    image: "/assets/clinic-video-poster.jpg", // Recording/Clinic content match
    avatar: "/assets/supplements-macro-bg.png",
  },
];

export default function Outcomes() {
  return (
    <section className="py-24 lg:py-32 bg-[#2a4b5d] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 font-title font-medium tracking-widest text-xs uppercase"
          >
            Client Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-title font-medium text-white tracking-tighter"
          >
            Real people, real outcomes
          </motion.h2>
        </div>

        {/* Reels Ticker */}
        <div className="relative overflow-hidden -mx-6 px-6">
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [0, -1920], // Adjusted based on card widths (approx 6 * 320px)
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...reels, ...reels].map((reel, idx) => (
              <div
                key={idx}
                className="relative min-w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden group flex-shrink-0"
              >
                {/* Card Image */}
                <Image
                  src={reel.image}
                  alt={reel.username}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Social Overlay */}
                <div className="absolute top-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={reel.avatar}
                        alt={reel.username}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-white font-title font-medium text-sm tracking-tight">{reel.username}</span>
                        <div className="w-4 h-4 rounded-full bg-[#2dd4bd] flex items-center justify-center">
                          <Check size={10} className="text-[#081a24] stroke-[4]" />
                        </div>
                      </div>
                      <span className="text-white/60 text-[10px] font-body font-normal leading-tight">{reel.bio}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm font-body font-normal tracking-tight">
            Eterna IQ is changing thousands of lives
          </p>
        </motion.div>
      </div>
    </section>
  );
}
