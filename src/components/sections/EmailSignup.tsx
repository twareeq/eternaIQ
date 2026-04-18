"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function EmailSignup() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[4rem] text-center border border-white/5 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-accent/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Optimize your <span className="text-accent">longevity inbox.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-lg mb-10"
            >
              Join 15,000+ high performers getting weekly insights on biomarker 
              optimization, advanced recovery, and biohacking news.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="submit"
                className="px-10 py-5 rounded-full bg-accent text-accent-foreground font-black flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg overflow-hidden relative group"
              >
                <span className="relative z-10">Join Now</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xs text-white/20 uppercase tracking-widest font-bold"
            >
              No spam. Just science.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
