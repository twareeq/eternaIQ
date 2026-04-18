"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "What is Eterna IQ Health?",
    answer: "Eterna IQ Health is a personalized longevity and vitality clinic that combines advanced diagnostics with expert-led protocols to optimize your biological age and performance.",
  },
  {
    question: "How does the process work?",
    answer: "Our process begins with an in-depth blood assessment and metabolic scan, followed by a consultation with our medical team to build your precision protocol.",
  },
  {
    question: "Do real doctors oversee my protocol?",
    answer: "Yes, every Eterna IQ protocol is reviewed and managed by our board-certified medical team, led by specialists in hormone health and longevity medicine.",
  },
  {
    question: "Does Eterna IQ require insurance?",
    answer: "We represent a personalized care model and do not directly bill insurance, allowing us to prioritize the highest quality diagnostics and treatments without restrictive network limitations.",
  },
  {
    question: "Are medications from FDA-registered pharmacies?",
    answer: "Absolutely. All medications and supplements prescribed through Eterna IQ are fulfilled by strictly vetted, FDA-registered compounding and retail pharmacies.",
  },
  {
    question: "What makes Eterna IQ different from other telehealth?",
    answer: "Unlike general telehealth, we focus exclusively on high-performance longevity, using proprietary diagnostic depth and premium clinical oversight not found in standard clinics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-[#2a4b5d] text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start pt-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/40 font-title font-medium uppercase tracking-[0.2em] text-sm mb-6"
            >
              Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-title font-medium tracking-tighter leading-[0.95] mb-10"
            >
              Frequently asked questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-white/60 font-body font-normal max-w-sm mb-12 leading-relaxed"
            >
              Everything you need to know about getting started with Eterna IQ Health.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 bg-white text-[#2a4b5d] rounded-full font-title font-medium text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Find Your Protocol
            </motion.button>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/10 border-t border-white/10">
              {faqData.map((item, idx) => (
                <div key={idx} className="group">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full py-8 flex items-center justify-between text-left transition-colors hover:text-white/80"
                  >
                    <span className="text-xl md:text-2xl font-title font-medium tracking-tight pr-8">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-6 h-6 stroke-[1.5]" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-white/50 text-lg leading-relaxed max-w-2xl font-body font-normal">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {/* Bottom border for the last item */}
              <div className="border-b border-white/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
