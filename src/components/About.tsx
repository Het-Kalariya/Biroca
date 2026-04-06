"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="py-32 md:py-44 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left column — large pull quote */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-[#111]" />
                <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
                  About us
                </span>
              </div>

              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[var(--font-playfair)] font-normal leading-[1.15] tracking-[-0.02em] text-[#111]">
                We don&apos;t just build
                <br />
                technology.
                <br />
                <span className="italic text-[#999]">
                  We build trust.
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Right column — body text */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            style={{ y }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <p className="text-[18px] md:text-[20px] text-[#444] leading-[1.7]">
                Biroca is a design-led technology studio for businesses
                that take their digital presence seriously. We exist at the
                intersection of sharp aesthetics and deep engineering — where
                every pixel serves a purpose and every line of code
                drives a result.
              </p>
              <p className="text-[16px] text-[#666] leading-[1.8]">
                We work exclusively with businesses that are ready to invest
                in quality. Not templates. Not quick fixes. We build systems
                that last, brands that resonate, and partnerships that
                compound over years.
              </p>
              <p className="text-[16px] text-[#666] leading-[1.8]">
                Our team brings together designers who think in systems
                and developers who care about craft. The result? Digital
                products that feel intentional at every level — from the
                first interaction to the last line of documentation.
              </p>

              {/* Stats — inline, not boxy */}
              <div className="pt-10 border-t border-[#e5e5e5] grid grid-cols-3 gap-8">
                {[
                  { num: "8+", label: "Projects shipped" },
                  { num: "100%", label: "Client retention" },
                  { num: "4.6/5", label: "Avg. rating" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-[32px] md:text-[40px] font-[var(--font-playfair)] font-normal tracking-[-0.02em] text-[#111]">
                      {s.num}
                    </div>
                    <div className="text-[12px] tracking-[0.1em] text-[#999] uppercase mt-1">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
