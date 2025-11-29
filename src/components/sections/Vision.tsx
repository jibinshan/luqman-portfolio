"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081426] via-transparent to-[#081426] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Futuristic architectural vision" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A192F]/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          {/* Futuristic Label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] font-display">
              The Vision
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Vision Statement */}
          <h3 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight mb-8">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
              Future of Value
            </span>
          </h3>

          {/* Detailed Paragraph */}
          <p className="text-white/70 text-lg leading-relaxed font-light">
            My vision is to redefine the landscape of modern finance by bridging the gap between institutional capital and transformative real-world assets. I aim to architect sustainable, high-growth financial ecosystems that not only generate superior returns but also drive tangible economic progress. By integrating <span className="text-white font-medium">advanced financial engineering</span> with deep market intelligence, I strive to create a legacy of innovation, stability, and long-term value for stakeholders across the globe.
          </p>

        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </section>
  );
}
