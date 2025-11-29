import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="#"
              className="text-2xl font-logo font-bold tracking-wider text-white"
            >
              Luqman <span className="text-primary">Sadiq</span>
            </Link>
            <p className="mt-2 text-sm text-[#E2E8F0]/70 font-display">
              Pioneering Finance, Redefining Skylines.
            </p>
            <div className="flex space-x-3 mt-6">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E2E8F0]/70 hover:text-white hover:bg-primary transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-center sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-display">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                {["About", "Competencies", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-sm text-[#E2E8F0]/70 hover:text-primary transition-colors font-display"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-display">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-slate-400 hover:text-primary transition-colors font-display"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-[#E2E8F0]/50 font-display">
            © 2024 Luqman Sadiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
