import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function CaseStudy() {
  return (
    <section className="py-24 sm:py-32 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest font-display">
                Case Study
              </h2>
              <h3 className="text-white text-4xl font-bold leading-tight tracking-tight font-display">
                Aimer Business School
              </h3>
              <p className="text-[#E2E8F0] text-base font-normal leading-relaxed font-display">
                I architected a revolutionary fund pooling model for Aimer Business School, 
                transforming a traditional educational infrastructure project into a high-yield 
                investment vehicle. By structuring a multi-tiered capital injection strategy, 
                I secured necessary funding while optimizing liquidity for stakeholders, 
                proving that educational ventures can deliver premium financial returns.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary font-display">
                    35%
                  </p>
                  <p className="text-[#E2E8F0] font-display">ROI for Investors</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary font-display">
                    $50M+
                  </p>
                  <p className="text-[#E2E8F0] font-display">Capital Structured</p>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc7oCYWP6thfmn5peK2CAi3v12bgiiWeQ6wp_yGXIMHI5z8OtGLbg4LQEmm1xnLjyZgTXZxW2YeXx2mEW1O6qLsu45d0zE5md0EplXePnguGD2N-DJIavKrBtVZUDsuPKjbMp6SvDVCnRuPIQ1cEwo9pBLDCxvAawdrBZ5ZU5PLqrRlDjkO8F8KDWCkSSAIaFUdGQmGz4HX21J77N0IxsjQxE-xZPiCo0R0gsfUly7hTCLrruiMHlWhrIB_YG7A_JB3i0EpUPlUbZr"
                alt="Abstract 3D data visualization with glowing lines and charts representing financial growth."
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
