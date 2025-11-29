import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="py-24 sm:py-32" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSZ372LIhDq3ggDq5dyEHvixqM8ZoDS0SGMIViriptfGK-ycY6CsHFTC-Wbh3lD3YhUH5LBiYUn_cynWXDTNKbAheQb9pgol9qseYtZSKqrHQrcvuBxpzB5IcVkTfln36xguSrYCdMc3rfsejzkiWllm19MUWNdTXn17ZnFYCjaZxg4lX5NeY4WyyVvVzT99PYII_EpgFOFpFfmJPotCbYnNczE3g_J70hn3e7UN-FIwK0BR3ExADlZg67rw7usFcxrF5-b3UcH4g"
                alt="Stylized, professional portrait of Luqman Sadiq in a modern office setting."
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest font-display">
                About Me
              </h2>
              <h3 className="text-white text-4xl font-bold leading-tight tracking-tight font-display">
                Bridging technology and tangible assets.
              </h3>
              <p className="text-[#E2E8F0] text-lg font-normal leading-relaxed font-display">
                With a visionary approach to capital formation, I specialize in 
                <span className="text-primary font-semibold"> Strategic Fund Pooling</span> and 
                <span className="text-primary font-semibold"> Financial Architecture</span>. 
                My expertise lies in unlocking value within complex infrastructure projects, 
                particularly in the educational and luxury real estate sectors. 
                By bridging the gap between institutional investment and tangible assets, 
                I create sustainable, high-growth financial ecosystems that redefine market standards.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
