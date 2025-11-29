"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Bitcoin, Building2, LineChart, Landmark, Layers, Globe, Briefcase, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const competencies = [
  {
    icon: Layers,
    title: "Strategic Capital Aggregation",
    description: "Architecting multi-tiered financial ecosystems to consolidate vast capital resources for high-impact ventures.",
  },
  {
    icon: Building2,
    title: "High-Yield Real Estate",
    description: "Identifying and securing prime assets in global markets, maximizing ROI through data-driven valuation.",
  },
  {
    icon: TrendingUp,
    title: "Diversified Asset Allocation",
    description: "Engineering resilient investment portfolios optimized for long-term compounding and volatility mitigation.",
  },
  {
    icon: Landmark,
    title: "Advanced Financial Engineering",
    description: "Designing sophisticated capital frameworks and liquidity solutions for landmark developments.",
  },
];

export function Competencies() {
  return (
    <section className="py-24 sm:py-32 bg-[#081426] relative overflow-hidden" id="competencies">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase mb-4 font-display text-sm"
          >
            Expertise & Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white font-display"
          >
            Core Competencies
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-white/60 text-lg leading-relaxed"
          >
            Specialized expertise at the intersection of high-finance, technology, and global real estate development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((item, index) => (
            <SpotlightCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ item, index }: { item: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative border border-white/10 bg-white/5 overflow-hidden rounded-2xl"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-8 flex flex-col items-center text-center">
        {/* Icon Container with Glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-16 h-16 rounded-2xl bg-[#0A192F] border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500">
            <item.icon className="w-8 h-8 text-white/80 group-hover:text-primary transition-colors duration-500" />
          </div>
        </div>

        <h4 className="text-xl font-bold text-white font-display mb-4 min-h-[3.5rem] flex items-center justify-center group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h4>
        
        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
