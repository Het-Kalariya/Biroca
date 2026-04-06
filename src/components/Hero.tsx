"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

const headlineWords = [
  { text: "We", italic: false },
  { text: "craft", italic: false },
  { text: "digital", italic: true },
  { text: "experiences", italic: true },
  { text: "that", italic: false },
  { text: "move", italic: false },
  { text: "businesses", italic: false },
  { text: "forward.", italic: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32">
      {/* Subtle geometric accent */}
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] border border-[#e5e5e5] rounded-full opacity-40" />
      <div className="absolute top-[25%] right-[-2%] w-[400px] h-[400px] border border-[#ebebeb] rounded-full opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Image src="/logo.svg" alt="Biroca" width={280} height={60} className="h-[50px] md:h-[65px] w-auto" priority />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-12 h-[1px] bg-[#111]" />
          <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
            Web &middot; Software &middot; Automation
          </span>
        </motion.div>

        {/* Headline — words that don't clip */}
        <h1>
          <span className="block text-[clamp(2.5rem,7vw,7rem)] font-[var(--font-playfair)] font-normal leading-[1.15] tracking-[-0.03em] text-[#111]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-[0.25em] ${word.italic ? "italic text-[#999]" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                {word.text}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Bottom row */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] md:text-[18px] text-[#666] leading-relaxed max-w-md"
          >
            We partner with ambitious businesses to design and build
            websites, software, and automation systems that create
            measurable impact.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-center gap-4"
          >
            <span className="text-[14px] font-medium tracking-wide uppercase text-[#111]">
              Start a project
            </span>
            <span className="w-14 h-14 rounded-full border-2 border-[#111] flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-all duration-500">
              <ArrowDownRight size={20} className="group-hover:rotate-[-45deg] transition-transform duration-500" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#ccc] to-transparent"
        />
      </motion.div>
    </section>
  );
}
