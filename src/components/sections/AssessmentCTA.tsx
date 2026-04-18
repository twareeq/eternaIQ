'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const symptoms = [
  'Fatigue',
  'Weight Gain',
  'Brain Fog',
  'Low Libido',
  'Muscle Loss',
  'Poor Sleep',
  'Slow Recovery',
  'Hormone Imbalance',
  'Burnout',
  'Inflammation',
];

export default function AssessmentCTA() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background Image - Face/Pill Closeup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/assessment-cta-bg.png"
          alt="Assessment Background"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/40 font-title font-medium tracking-wide text-sm mb-6"
        >
          Personalized To You
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-title font-medium text-white mb-8 tracking-tight"
        >
          Not sure where to start?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-body font-normal"
        >
          Tell us what you're experiencing, and we'll match you with
          the right clinically guided optimization pathway.
        </motion.p>

        {/* Symptom Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl"
        >
          {symptoms.map((symptom, i) => (
            <div
              key={symptom}
              className="px-6 py-3 rounded-full border border-white/20 text-white/80 text-sm font-body font-normal hover:bg-white/10 transition-colors cursor-pointer"
            >
              {symptom}
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="px-10 py-5 rounded-full bg-accent text-black font-title font-medium text-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all"
        >
          Find Your Protocol
        </motion.button>
      </div>
    </section>
  );
}
