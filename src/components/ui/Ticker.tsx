"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Building2, Package, Search } from "lucide-react";

const tickerItems = [
  { text: "HIPAA COMPLIANT", icon: <Shield size={14} /> },
  { text: "BOARD-CERTIFIED PROVIDERS", icon: <Users size={14} /> },
  { text: "FDA-REGISTERED PHARMACIES", icon: <Building2 size={14} /> },
  { text: "AT-HOME DELIVERY", icon: <Package size={14} /> },
  { text: "2-MIN ASSESSMENT", icon: <Search size={14} /> },
];

export default function Ticker() {
  return (
    <div className="w-full bg-[#0a1215]/80 backdrop-blur-md border-y border-white/5 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 px-6"
        >
          {/* Duplicate items for seamless loop */}
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-white/40">{item.icon}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
