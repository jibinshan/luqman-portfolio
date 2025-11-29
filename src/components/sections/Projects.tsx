"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const allProjects = [
  {
    id: "01",
    title: "The Oracle Tower",
    category: "Luxury Residential",
    description: "A 60-story masterpiece redefining the city skyline with sustainable luxury and smart-home integration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR5efd133jwFB-bdk0Uk4ynDVm4qDIaJT09OvA4ZY1FdC5F17-QT6t--fZlBC23hk5E4DFPPCncuVRRJv8g-UIGDdF_-JeM8KokHJBgWGlwOkGQfZ2rzRZ1rOw3iTkI78DNei-KpRFRxdd7n6W7V-tCgIPD3DOe_4F2-TX1mD68pcZzgsfQSPa4ST2QMZ9VscVM8DfpB6ReN5kck9pN6NVqS-ZLfERq5luzbQZluA2KtyoXODmvvGVpk5Gf2Yy3b0VAXpEyKz5kfXT",
    featured: true
  },
  {
    id: "02",
    title: "Quantum Ledger HQ",
    category: "Fintech Venture",
    description: "Next-gen headquarters designed for the future of decentralized finance, featuring biometric security and holographic displays.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxlOsfKGf4Q24NW3KBmCZndAMKgFYD_ontyNY8yMEKl7xJLM8j0ngr3tOyoqWRA82uXPMTebIVxFHzzOxJTEx-M_sYhnfjDVR-KN2vthWhWy21rSgtUhJjggZooHSigh67kNK6o5oSs2wLlPSPfHzrn5LTR6nh-TFZyIbK5z5_GwDaWrsk1bZjfqmFmbufngX0pHSGCQdXSgZBXLeL06qUGLM9YbNSF7ojkSNoIY7T4WYr1CkjGj6K_lj-paeeJ5PhUGzAqO4pVfzP",
    featured: true
  },
  {
    id: "03",
    title: "Azure Villas",
    category: "Hospitality",
    description: "An exclusive coastal retreat blending minimalism with organic architecture, powered entirely by renewable energy.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEZ9WWOt0G0VZft4kZ2neezZ6PJ72SrRK3vFI6B9MKLY-9-ON3T5gHfeqQnXf20vi9lhiyCunjXuKR2L72FAXytEO5rV5FKY8D_IQHja5X1N556w-DZa2oEiuJ3ttTsHolnoaK3YZ7SQjpyfsmEAXkA5WF2gGij3n2QOYQroatdqHtepWhm8EVeLOp_fVjVG7VFOtr57NSuIsVaWtL3fHYCJKMzPjsWuhFQoojG_wMkIR2ZOqsfZwk_61VsILa_FB2ZygUlp7BiaA1",
    featured: true
  },
  { id: "04", title: "Innovation Hub", category: "Commercial", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbMvJVrAAJVcxhfX1AMjthI9_gyBYfBD9OoyygAUDTU33tHf7Syen5ckzfeOhTbrXHF2HdNV7LQx6OBPrGccnHVFqHEF-xIhWrJxrid71FCno4JWgrNiRntDzxoiXLlT8-OHPqgEGjat65Nnr_F67inrfn7U2rwGs3AI1giSFrQID4VgFNvdLRFVBfoXuk-cViFKlkyySvNTIvSX6JZwwFzvviF58Yrrbj4cN62lHaKo3iy5yagG5e_Yh1UBLXFK5s1NaSN_dhskIc", featured: false },
  { id: "05", title: "Skyline Bridge", category: "Infrastructure", image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1000&auto=format&fit=crop", featured: false },
  { id: "06", title: "Eco District", category: "Urban Planning", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop", featured: false },
  { id: "07", title: "Neo Bank App", category: "Fintech Product", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", featured: false },
  { id: "08", title: "Solar Array Alpha", category: "Energy", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop", featured: false },
  { id: "09", title: "The Void Museum", category: "Cultural", image: "https://images.unsplash.com/photo-1518998053901-5348d3969105?q=80&w=1000&auto=format&fit=crop", featured: false },
  { id: "10", title: "Cyber Loft", category: "Residential", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", featured: false },
];

export function Projects() {
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
  const otherProjects = allProjects.filter(p => !p.featured);

  return (
    <section className="py-24 sm:py-32 bg-[#081426]" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wider uppercase mb-4 font-display"
            >
              Selected Works
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white font-display"
            >
              Featured Projects
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xs text-sm leading-relaxed text-right"
          >
            A collection of pioneering developments in fintech and luxury real estate.
          </motion.p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
              Other Noteworthy Projects
            </h3>
            <div className="h-px flex-1 bg-white/10 mx-8 hidden sm:block" />
          </div>

          <ProjectCarousel projects={otherProjects} />
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-[600px] w-full cursor-pointer"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0A192F]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.category}
            </p>
            <h4 className="text-3xl font-bold text-white font-display mb-4 leading-tight">
              {project.title}
            </h4>
            <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mb-4" />
            <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCarousel({ projects }: { projects: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerScreen(1);
      else if (window.innerWidth < 1024) setItemsPerScreen(2);
      else setItemsPerScreen(3);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const maxIndex = Math.max(0, projects.length - itemsPerScreen);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative group">
      {/* Carousel Track */}
      <div className="overflow-hidden -mx-4">
        <motion.div 
          className="flex"
          animate={{ x: `-${currentIndex * (100 / itemsPerScreen)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className={cn(
                "relative flex-shrink-0 px-4",
                itemsPerScreen === 1 ? "w-full" : itemsPerScreen === 2 ? "w-1/2" : "w-1/3"
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0A192F] border border-white/5 group-hover/card:border-white/10 transition-colors cursor-pointer group/card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors duration-300" />
                
                {/* Minimal Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h5 className="text-lg font-bold text-white font-display">
                    {project.title}
                  </h5>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation - Bottom Right */}
      <div className="flex justify-end mt-8 gap-4">
        <Button
          onClick={prev}
          disabled={currentIndex === 0}
          size="icon"
          className="rounded-full w-12 h-12 bg-primary border border-primary/20 hover:bg-white hover:text-primary text-[#202e42] disabled:opacity-30 disabled:hover:bg-primary disabled:hover:text-[#202e42] transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          onClick={next}
          disabled={currentIndex === maxIndex}
          size="icon"
           className="rounded-full w-12 h-12 bg-primary border border-primary/20 hover:bg-white hover:text-primary text-[#202e42] disabled:opacity-30 disabled:hover:bg-primary disabled:hover:text-[#202e42] transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
