"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Floating island navbar — always centered */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{
          padding: scrolled ? "12px 16px 0" : "0",
          transition: "padding 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav
          className="flex items-center justify-between w-full gap-6 md:gap-10 backdrop-blur-md border"
          style={{
            maxWidth: scrolled ? 640 : "100%",
            padding: scrolled ? "8px 8px 8px 20px" : "14px 40px",
            borderRadius: scrolled ? 9999 : 0,
            backgroundColor: scrolled
              ? "rgba(250,250,250,0.92)"
              : "rgba(255,255,255,0.95)",
            borderColor: scrolled
              ? "rgba(0,0,0,0.06)"
              : "transparent",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.03)"
              : "0 1px 0 rgba(0,0,0,0.04)",
            transition: "all 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0 group">
            <Image
              src="/biroca-logo.png"
              alt="Biroca"
              width={140}
              height={40}
              className="w-auto group-hover:opacity-80"
              style={{
                height: scrolled ? 20 : 28,
                transition: "all 800ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              priority
            />
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex items-center text-sm"
            style={{
              gap: scrolled ? 2 : 8,
              transition: "all 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-full text-[#888] hover:text-[#111] hover:bg-black/[0.04] uppercase tracking-wide font-medium"
                style={{
                  fontSize: scrolled ? 11 : 12,
                  transition: "all 800ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-[#111] text-white font-medium rounded-full hover:bg-[#333] relative z-10 group overflow-hidden"
            style={{
              fontSize: scrolled ? 11 : 13,
              padding: scrolled ? "8px 20px" : "12px 28px",
              transition: "all 800ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
              Let&apos;s Talk
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors"
            aria-label="Menu"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

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
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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
