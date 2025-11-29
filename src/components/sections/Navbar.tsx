"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 25, 47, 0)", "rgba(10, 25, 47, 0.8)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(10px)"]
  );

  const borderBottomColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(226, 232, 240, 0)", "rgba(226, 232, 240, 0.1)"]
  );

  const navItems = ["About", "Competencies", "Projects", "Contact"];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor,
        backdropFilter,
        borderBottom: "1px solid",
        borderBottomColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 z-50">
            <Link
              href="#"
              className="text-2xl font-logo font-bold tracking-wider text-white"
              onClick={() => setIsOpen(false)}
            >
              Luqman <span className="text-primary">Sadiq</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#E2E8F0] hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-primary transition-colors p-2">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-[#0A192F] border-l border-white/10 p-0"
              >
                <div className="flex flex-col h-full justify-start py-5 px-8">
                  <SheetTitle className="text-primary font-bold font-display text-2xl mb-12">Navigation</SheetTitle>
                  <nav className="flex flex-col space-y-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          href={`#${item.toLowerCase()}`}
                          onClick={() => setIsOpen(false)}
                          className="text-3xl font-display font-medium text-white hover:text-primary transition-colors block"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
