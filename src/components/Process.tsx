"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discovery",
    desc: "Deep dive into your business, audience, and goals. We listen before we build.",
  },
  {
    title: "Strategy",
    desc: "A clear roadmap with defined milestones, timelines, and success metrics.",
  },
  {
    title: "Design",
    desc: "High-fidelity prototypes crafted for conversion. Nothing moves without your sign-off.",
  },
  {
    title: "Build",
    desc: "Clean, scalable code with rigorous QA. We test obsessively so you don't have to worry.",
  },
  {
    title: "Launch",
    desc: "Zero-downtime deployment with documentation and team onboarding included.",
  },
  {
    title: "Evolve",
    desc: "Ongoing optimization, maintenance, and strategic guidance as your business grows.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" className="py-32 md:py-44 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#111]" />
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
              How we work
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[var(--font-playfair)] font-normal leading-[1.15] tracking-[-0.02em] text-[#111] max-w-2xl">
            A process built on{" "}
            <span className="italic text-[#999]">clarity and craft.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 md:left-[140px] top-0 bottom-0 w-[1px] bg-[#e5e5e5] origin-top hidden md:block"
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group grid md:grid-cols-[140px_1fr] gap-6 md:gap-16 py-10 border-b border-[#f0f0f0] last:border-b-0"
              >
                {/* Step indicator */}
                <div className="relative flex items-start gap-4 md:gap-0 md:flex-col">
                  <span className="text-[11px] font-medium tracking-[0.15em] text-[#bbb] uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Dot on timeline */}
                  <div className="hidden md:block absolute right-[-33px] top-[4px] w-[7px] h-[7px] rounded-full bg-[#d4d4d4] group-hover:bg-[#111] transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="max-w-lg">
                  <h3 className="text-[24px] md:text-[28px] font-[var(--font-playfair)] font-normal tracking-[-0.01em] text-[#111] mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#666] leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
