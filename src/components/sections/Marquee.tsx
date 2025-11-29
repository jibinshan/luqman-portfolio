"use client";

import { motion } from "framer-motion";

const items = [
  "Forbes",
  "Wall Street Journal",
  "Bloomberg",
  "Financial Times",
  "TechCrunch",
];

export function Marquee() {
  return (
    <section className="py-8 border-y border-white/10 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...items, ...items, ...items, ...items].map((item, index) => (
              <div key={index} className="flex items-center">
                {/* {index % items.length === 0 && (
                  <span className="text-sm text-[#E2E8F0]/60 mx-8">
                    As featured in:
                  </span>
                )} */}
                <span className="text-lg font-semibold text-[#E2E8F0]/80 mx-8 font-display">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
