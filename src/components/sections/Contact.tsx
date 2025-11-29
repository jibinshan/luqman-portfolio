"use client";

import { Mail, Phone, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center h-full">
            <motion.div variants={itemVariants}>
              <h2 className="text-primary font-medium tracking-wider uppercase mb-4 font-display">
                Contact Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                Let's Work <br />
                Together.
              </h3>
            </motion.div>

            <div className="space-y-8">
              <ContactItem
                icon={Mail}
                label="Email"
                value="contact@luqmansadiq.com"
                href="mailto:contact@luqmansadiq.com"
                variants={itemVariants}
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value="+1 (234) 567-890"
                href="tel:+1234567890"
                variants={itemVariants}
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value="Dubai, UAE"
                variants={itemVariants}
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl -z-10" />
            <form
              action="#"
              method="POST"
              className="glassmorphism p-8 md:p-10 rounded-3xl space-y-6 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1 font-display">Name</label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 focus-visible:border-primary/50 h-12 rounded-xl transition-all duration-300"
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1 font-display">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 focus-visible:border-primary/50 h-12 rounded-xl transition-all duration-300"
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1 font-display">Subject</label>
                <Input
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 focus-visible:border-primary/50 h-12 rounded-xl transition-all duration-300"
                  onFocus={() => setFocusedInput('subject')}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1 font-display">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 focus-visible:border-primary/50 resize-none rounded-xl transition-all duration-300"
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-base font-bold tracking-wide bg-primary text-[#0A192F] hover:bg-primary/90 font-display rounded-xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href, variants }: any) {
  const content = (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
        <Icon className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" />
      </div>
      <div>
        <p className="text-sm text-white/50 font-display mb-1">{label}</p>
        <p className="text-lg text-white font-medium font-display group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div variants={variants}>
      {href ? (
        <Link href={href} className="block w-fit">
          {content}
        </Link>
      ) : (
        <div className="w-fit">{content}</div>
      )}
    </motion.div>
  );
}
