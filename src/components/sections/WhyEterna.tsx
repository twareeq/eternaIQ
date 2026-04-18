'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Hourglass,
  ShieldCheck,
  Droplet,
  FlaskConical,
  Users,
  Building2,
  Thermometer,
  Rocket,
} from 'lucide-react';

export default function WhyEterna() {
  return (
    <section className="relative min-h-screen py-25 lg:py-35 bg-black overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/lab-analysis.png"
          alt="Why Eterna Background"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-40 mix-blend-luminosity"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" /> */}
        {/* Fine-tuned teal tint overlay */}
        {/* <div className="absolute inset-0 bg-[#2dd4bf]/2 mix-blend-color" /> */}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-[1400px]">
        {/* Header Section */}
        <div className="mb-24 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 font-title font-medium tracking-[0.2em] text-[10px] uppercase mb-6 block"
          >
            Why Eterna IQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-title font-medium text-white italic tracking-tighter leading-[1] max-w-5xl"
          >
            Most healthcare waits for something to go wrong
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          {/* Left Column - Intro & QA Card */}
          <div className="flex flex-col gap-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl font-body font-normal"
            >
              We built a platform that doesn't. Accessible, clinically
              guided optimization from home — designed to meet you
              where you are, not where the system wants you to be.
            </motion.p>

            {/* Quality Assurance Card (White) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-8 md:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] max-w-xl"
            >
              <h3 className="text-2xl font-title font-medium text-[#b0b9bd] mb-10 md:mb-14 uppercase tracking-[0.15em]">
                Quality Assurance
              </h3>

              <div className="space-y-12">
                {[
                  {
                    icon: (
                      <Hourglass
                        size={22}
                        className="text-[#324a52]"
                      />
                    ),
                    title: 'Potency Verified',
                    text: 'Every treatment tested for correct active ingredient concentration.',
                  },
                  {
                    icon: (
                      <ShieldCheck
                        size={22}
                        className="text-[#324a52]"
                      />
                    ),
                    title: 'Sterility Tested',
                    text: 'Confirmed free of foreign organisms and pathogens.',
                  },
                  {
                    icon: (
                      <Droplet size={22} className="text-[#324a52]" />
                    ),
                    title: 'pH Level Tested',
                    text: 'Optimal acid-to-base ratio for comfort and efficacy.',
                  },
                  {
                    icon: (
                      <FlaskConical
                        size={22}
                        className="text-[#324a52]"
                      />
                    ),
                    title: 'Endotoxicity Tested',
                    text: 'Adheres to all endotoxin safety recommendations.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="pt-1.5 transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-2xl font-title font-medium text-[#1a2b32] tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[#1a2b32]/50 text-base leading-relaxed font-body font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Muted Teal Glass Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Users className="text-[#2dd4bf]" size={20} />,
                title: 'Provider + Coaching in One Ecosystem',
                text: 'Licensed clinicians design your protocol. Coaches help you execute it. One seamless system.',
              },
              {
                icon: (
                  <Building2 className="text-[#2dd4bf]" size={20} />
                ),
                title: 'Concierge Care, Not Commodity Telehealth',
                text: 'Guided onboarding, communication continuity, and ongoing protocol refinement — not rushed Rx refills.',
              },
              {
                icon: (
                  <Thermometer className="text-[#2dd4bf]" size={20} />
                ),
                title: 'At-Home Testing + Precision Diagnostics',
                text: 'Premium functional testing delivered to your door. No lab visits, no waiting rooms.',
              },
              {
                icon: <Rocket className="text-[#2dd4bf]" size={20} />,
                title: 'High-Velocity, Premium Delivery',
                text: 'Fast intake, fast consults, fast shipping — without sacrificing medical credibility or care quality.',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="bg-[#546a75]/30 backdrop-blur-md p-8 md:p-10 lg:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 group"
              >
                <div className="flex gap-6 md:gap-8 items-start">
                  <div className="mt-1 transition-transform group-hover:scale-110 duration-500">
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-title font-medium text-white leading-tight tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed font-body font-normal">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
