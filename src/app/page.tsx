import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Vision } from "@/components/sections/Vision";
import { Competencies } from "@/components/sections/Competencies";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center bg-[#0A192F]">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Marquee />
        <About />
        <div className="relative w-full">
          <Vision />
          <Competencies />
        </div>
        <CaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
