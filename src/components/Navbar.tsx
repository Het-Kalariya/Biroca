"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Normal navbar — visible when not scrolled */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="relative z-10">
              <Image src="/logo.svg" alt="Biroca" width={140} height={36} className="h-[28px] w-auto" priority />
            </a>

            <div className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[13px] font-medium text-[#666] hover:text-[#111] transition-colors duration-300 tracking-wide uppercase"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-6 px-7 py-3 bg-[#111] text-white text-[13px] font-medium tracking-wide rounded-full hover:bg-[#333] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Island navbar — appears on scroll */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="bg-[#111]/90 backdrop-blur-xl rounded-full px-3 py-2 flex items-center gap-1 shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
          <a href="#" className="px-4 py-2">
            <Image src="/logo.svg" alt="Biroca" width={80} height={20} className="h-[16px] w-auto brightness-0 invert" />
          </a>

          <div className="hidden md:flex items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[12px] font-medium text-white/70 hover:text-white transition-colors duration-300 tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="ml-1 px-6 py-2.5 bg-white text-[#111] text-[12px] font-semibold tracking-wide rounded-full hover:bg-white/90 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-1 w-9 h-9 flex items-center justify-center text-white"
            aria-label="Menu"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-light text-[#111] tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 px-10 py-4 bg-[#111] text-white text-lg rounded-full"
              >
                Let&apos;s Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
