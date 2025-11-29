import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.png"
          alt="Abstract 3D wireframe of a skyscraper, glowing blue on a dark background."
          fill
          priority
          className="object-cover object-[center_top]"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex flex-col gap-6">
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
        </div>
      </div>
    </section>
  );
}
