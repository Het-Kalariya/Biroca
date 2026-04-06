"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    num: "01",
    title: "Design-First Thinking",
    desc: "We don't start with code. We start with how it looks and feels — because your users decide in seconds whether they trust you. Every interface we craft is built for clarity, credibility, and conversion. First impressions don't get second chances.",
  },
  {
    num: "02",
    title: "Engineering Depth",
    desc: "Pretty means nothing if it breaks under pressure. We write clean architecture, scalable code, and test obsessively — so your product performs on day one and still holds up three years later as your business evolves.",
  },
  {
    num: "03",
    title: "Obsessive Attention",
    desc: "The spacing between elements. The animation timing. The loading states. The micro-interactions no one consciously notices but everyone unconsciously feels. We sweat the details that separate good from exceptional.",
  },
  {
    num: "04",
    title: "Partnership Mindset",
    desc: "We don't disappear after launch. Your growth is our metric. We stay involved, iterate based on real data, and help you make smarter decisions quarter after quarter. You're not hiring a vendor — you're gaining a technical partner.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="why-us" className="py-32 md:py-44 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left — heading */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-[#111]" />
                <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
                  Why us
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[var(--font-playfair)] font-normal leading-[1.15] tracking-[-0.02em] text-[#111]">
                What makes
                <br />
                Biroca{" "}
                <span className="italic text-[#999]">different.</span>
              </h2>
            </motion.div>
          </div>

          {/* Right — list */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-0">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-t border-[#e5e5e5] py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex gap-6 md:gap-10">
                  <span className="text-[60px] md:text-[80px] font-[var(--font-playfair)] font-normal leading-none text-[#f0f0f0] group-hover:text-[#e0e0e0] transition-colors duration-500 select-none shrink-0">
                    {r.num}
                  </span>
                  <div className="pt-3">
                    <h3 className="text-[20px] md:text-[24px] font-medium text-[#111] tracking-[-0.01em] mb-3">
                      {r.title}
                    </h3>
                    <p className="text-[15px] text-[#666] leading-[1.8] max-w-lg">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
