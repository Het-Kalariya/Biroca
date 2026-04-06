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
      {/* Single morphing navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <motion.nav
          animate={{
            width: scrolled ? "auto" : "100%",
            marginTop: scrolled ? 12 : 0,
            borderRadius: scrolled ? 9999 : 0,
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.95)",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)"
              : "0 1px 0 rgba(0,0,0,0.04)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="backdrop-blur-xl"
          style={{ willChange: "width, margin-top, border-radius" }}
        >
          <motion.div
            animate={{
              paddingLeft: scrolled ? 20 : 40,
              paddingRight: scrolled ? 6 : 40,
              paddingTop: scrolled ? 6 : 0,
              paddingBottom: scrolled ? 6 : 0,
              maxWidth: scrolled ? 720 : 1400,
            }}
            transition={{
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="flex items-center justify-between mx-auto h-[72px]"
            style={{
              height: scrolled ? 52 : 72,
              transition: "height 0.6s cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            {/* Logo */}
            <a href="#" className="relative z-10 flex-shrink-0">
              <Image
                src="/biroca-logo.png"
                alt="Biroca"
                width={140}
                height={40}
                className="w-auto transition-all duration-500"
                style={{ height: scrolled ? 22 : 30 }}
                priority
              />
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center">
              <AnimatePresence>
                {links.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    animate={{
                      fontSize: scrolled ? 11 : 13,
                      paddingLeft: scrolled ? 12 : 20,
                      paddingRight: scrolled ? 12 : 20,
                    }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="font-medium text-[#555] hover:text-[#111] transition-colors duration-300 tracking-wide uppercase whitespace-nowrap"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </AnimatePresence>

              <motion.a
                href="#contact"
                animate={{
                  paddingLeft: scrolled ? 20 : 28,
                  paddingRight: scrolled ? 20 : 28,
                  paddingTop: scrolled ? 8 : 12,
                  paddingBottom: scrolled ? 8 : 12,
                  fontSize: scrolled ? 11 : 13,
                  marginLeft: scrolled ? 8 : 24,
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#111] text-white font-medium tracking-wide rounded-full hover:bg-[#333] transition-colors duration-300 whitespace-nowrap"
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              {open ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </motion.div>
        </motion.nav>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{
              clipPath: "circle(150% at calc(100% - 40px) 40px)",
            }}
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
                transition={{
                  delay: 0.35,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
