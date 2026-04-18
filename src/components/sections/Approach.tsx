"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Box, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Complete Your Assessment",
    description:
      "Quick online intake covering your goals, symptoms, and health history. Takes just 2 minutes.",
    icon: <ClipboardList className="text-[#a5cfd5]" size={24} />,
  },
  {
    number: "02",
    title: "Provider-led Review",
    description:
      "A board-certified clinician reviews your profile and designs a personalized protocol for your optimal health.",
    icon: <UserCheck className="text-[#a5cfd5]" size={24} />,
  },
  {
    number: "03",
    title: "Receive Your Protocol",
    description:
      "Pharmacy-grade treatments shipped directly to your door. Discreet, fast, and seamless.",
    icon: <Box className="text-[#a5cfd5]" size={24} />,
  },
  {
    number: "04",
    title: "Ongoing Optimization",
    description:
      "Coaching support, progress tracking, and protocol refinements to keep you performing at your peak.",
    icon: <TrendingUp className="text-[#a5cfd5]" size={24} />,
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="pb-32 pt-16 bg-[#516b74] relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Quote Section */}
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 font-title font-medium tracking-wide text-sm mb-6"
          >
            Optimization, Not Just Treatment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-title font-medium text-white italic tracking-tight mb-8 leading-tight"
          >
            "We believe health optimization should be personal, <br />
            precise, and premium."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed max-w-2xl font-body font-normal"
          >
            Our platform combines provider-guided protocols, comprehensive
            testing, and concierge coaching to help you perform at your highest
            level.
          </motion.p>
        </div>

        {/* Journey Section */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/60 font-title font-medium tracking-wide text-sm mb-4 block"
          >
            Your Optimization Journey
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-title font-medium text-white tracking-tight"
          >
            Test. Review. Optimize. Perform.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 flex flex-col items-start transition-all duration-500 shadow-xl shadow-black/5"
            >
              <span className="text-7xl font-title font-medium text-[#a5cfd5]/40 mb-8 block">
                {step.number}
              </span>
              <div className="mb-6">{step.icon}</div>
              <h4 className="text-2xl font-title font-medium text-[#3a4d54] mb-4 leading-snug">
                {step.title}
              </h4>
              <p className="text-[#3a4d54]/60 leading-relaxed font-body font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
