"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="py-32 md:py-44 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-16">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-[#111]" />
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
                Get in touch
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-[var(--font-playfair)] font-normal leading-[1.1] tracking-[-0.03em] text-[#111] mb-8">
              Let&apos;s build
              <br />
              something{" "}
              <span className="italic text-[#999]">remarkable.</span>
            </h2>
            <p className="text-[16px] text-[#666] leading-[1.8] max-w-md mb-10">
              Book a free consultation. We&apos;ll discuss your vision,
              explore possibilities, and outline a clear path forward.
              No pressure, no obligations.
            </p>

            {/* Contact info */}
            <div className="space-y-4 pt-8 border-t border-[#e5e5e5]">
              <a
                href="mailto:hello@biroca.in"
                className="block text-[18px] md:text-[20px] text-[#111] hover:text-[#666] transition-colors duration-300 tracking-[-0.01em]"
              >
                hello@biroca.in
              </a>
              <a
                href="tel:+919876543210"
                className="block text-[18px] md:text-[20px] text-[#111] hover:text-[#666] transition-colors duration-300 tracking-[-0.01em]"
              >
                +91 98765 43210
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] text-[#999] uppercase mb-3">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-0 py-4 bg-transparent border-b border-[#e5e5e5] text-[#111] text-[16px] placeholder:text-[#ccc] focus:outline-none focus:border-[#111] transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] text-[#999] uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  suppressHydrationWarning
                  className="w-full px-0 py-4 bg-transparent border-b border-[#e5e5e5] text-[#111] text-[16px] placeholder:text-[#ccc] focus:outline-none focus:border-[#111] transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] text-[#999] uppercase mb-3">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-0 py-4 bg-transparent border-b border-[#e5e5e5] text-[#111] text-[16px] placeholder:text-[#ccc] focus:outline-none focus:border-[#111] transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] text-[#999] uppercase mb-3">
                  Tell us about your project
                </label>
                <textarea
                  placeholder="What are you looking to build?"
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b border-[#e5e5e5] text-[#111] text-[16px] placeholder:text-[#ccc] focus:outline-none focus:border-[#111] transition-colors duration-300 resize-none"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-[#111] text-white text-[14px] font-medium tracking-wide rounded-full hover:bg-[#333] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                >
                  Send Message
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
