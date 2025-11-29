"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Global Scroll for Parallax Content
  const { scrollY } = useScroll();
  
  // Fade out and move down as user scrolls (0 to 800px)
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const contentY = useTransform(scrollY, [0, 600], [0, 100]);

  // Mouse Parallax for Background
  const springConfig = { damping: 25, stiffness: 150 };
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX / width) - 0.5;
    const yPct = (clientY / height) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  return (
    <section 
      className="relative h-screen flex items-center justify-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-[-20px] z-0"
        style={{ x: bgX, y: bgY }}
      >
        <Image
          src="/hero1.png"
          alt="Abstract 3D wireframe of a skyscraper, glowing blue on a dark background."
          fill
          priority
          className="object-cover object-[center_top] scale-105"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent" />
      </motion.div>

      {/* Content with Scroll Parallax */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-5xl font-black leading-tight tracking-tighter md:text-7xl font-display">
            Pioneering Finance, Redefining Skylines
          </h1>
          <h2 className="text-[#E2E8F0] text-lg font-normal leading-normal md:text-xl font-display max-w-2xl mx-auto">
            Architecting high-yield financial ecosystems through Strategic Fund Pooling and innovative capital structures.
          </h2>
          <div className="mt-4 flex justify-center">
            <Link
              href="#projects"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#0A192F] text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity font-display"
            >
              Explore My Work
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
