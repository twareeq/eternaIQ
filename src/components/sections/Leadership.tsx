"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. James Harlow",
    role: "Chief Medical Officer",
    image: "/assets/dr-james-harlow.jpg",
  },
  {
    name: "Dr. Priya Nair",
    role: "Head of Hormone Health",
    image: "/assets/dr-priya-nair.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Head of Performance Coaching",
    image: "/assets/marcus-webb.jpg",
  },
];

export default function Leadership() {
  return (
    <section className="py-24 lg:py-32 bg-[#2a4b5d] text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-title font-medium tracking-tighter"
          >
            Leadership Team
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
                </div>

                {/* Timeline Indicator: Teal Square + White Circle */}
                <div className="relative h-10 mb-6 flex items-center hidden lg:flex">
                  {/* Continuous Timeline Line - Fixed Alignment */}
                  {idx === 0 && (
                    <div className="absolute left-0 right-[-1000px] h-[1px] z-0 pointer-events-none">
                      <div className="w-full h-full bg-gradient-to-r from-[#2dd4bd] via-[#2dd4bd] to-white/20" />
                    </div>
                  )}
                  
                  <div className="w-10 h-10 bg-[#2dd4bd] flex items-center justify-center relative z-20 shadow-lg">
                    <div className="w-5 h-5 rounded-full border-2 border-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-title font-medium tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-white/40 font-title font-medium text-sm tracking-wide uppercase">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
