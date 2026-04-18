"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    image: "/assets/clinic-video-poster.jpg",
    category: "Vitality",
    name: "Longevity Complex",
  },
  {
    image: "/assets/axf0FZqMHgmrMEMymh9B0E4c30.jpeg",
    category: "Focus",
    name: "Neuro-Stack",
  },
  {
    image: "/assets/marcus-webb.jpg",
    category: "Recovery",
    name: "Deep Sleep Protocol",
  },
  {
    image: "/assets/hero-dna-bg.png",
    category: "Metabolic",
    name: "Glucose Balance",
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-24 bg-[#05141c]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-title font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              The Science of Supplementation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-title font-medium text-white tracking-tight"
            >
              Clinical-grade engineering.{" "}
              <span className="text-white/40">Pure results.</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white font-title font-medium inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            Explore Entire Shop <ArrowUpRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/5"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-accent text-xs font-title font-medium uppercase tracking-widest mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-2xl font-title font-medium text-white mb-4">
                  {product.name}
                </h3>
                <button className="flex items-center gap-2 text-white font-title font-medium text-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  Shop Now <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
