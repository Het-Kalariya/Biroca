"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Smart Local LLM Router",
    category: "AI / Local LLM System",
    tagline:
      "From single-model limitations to intelligent multi-model AI system",
    description:
      "Built a modular AI system using Ollama that dynamically routes tasks to specialized local models (coding, math, writing). Implemented chaining, self-reflection loops, tool calling, memory, and validation layers — all running locally with optimized resource usage and automatic model switching.",
    highlights: ["Multi-model routing", "Self-improving outputs", "Zero API cost"],
    color: "#f0f2f5",
  },
  {
    title: "Radhe Offset",
    category: "Printing / Manufacturing",
    tagline:
      "From manual ledger books to 100% real-time digital stock transparency",
    description:
      "Complete digital transformation of industrial inventory management — a high-performance system for tracking paper stock from intake to consumption. Built specialized modules for automated bundle/packet/sheet calculations, smart CSV/Excel bulk importers, and professional PDF challan generation.",
    highlights: [
      "Unlimited Bulk Imports",
      "Full Stock Traceability",
      "Instant Professional PDFs",
    ],
    color: "#f5f0eb",
  },
  {
    title: "RemindHer",
    category: "Smart Home & Lifestyle",
    tagline: "40% reduction in food waste and missed household tasks",
    description:
      "An AI-integrated inventory and task management system designed for the modern kitchen. It monitors stock levels in real-time and provides proactive, context-aware reminders — ensuring seamless meal preparation and efficient household management.",
    highlights: [
      "Zero Forgotten Tasks",
      "Real-time Stock Tracking",
      "Automated Meal Prep Alerts",
    ],
    color: "#eef5f0",
  },
  {
    title: "GeoFace Sentinel",
    category: "Security & Workforce",
    tagline: "99.9% reduction in fraudulent attendance logs",
    description:
      "Advanced biometric check-in system utilizing GPS geofencing to restrict login zones. Includes dual-layer authentication with AI-driven face scan and randomized active liveness challenges to prevent the use of static photos or videos.",
    highlights: [
      'Zero "Buddy Punching"',
      "100% Location Accuracy",
      "3-Second Authentication",
    ],
    color: "#f5f0f5",
  },
  {
    title: "Merkleon",
    category: "AI Security / Compliance",
    tagline:
      "From observable to provable — cryptographic proof of every AI agent action",
    description:
      "Full-stack AI agent security platform: tamper-evident Ed25519 + Merkle hash chain audit trail, real-time anomaly detection, PII-scrubbing Python SDK on PyPI, 26-page React dashboard, PostgreSQL multi-tenant backend, signed compliance PDF reports, and a public auditor-facing verify portal.",
    highlights: [
      "Court-admissible audit logs",
      "pip install veritasagent-sdk",
      "123 production API endpoints",
    ],
    color: "#f0f0f5",
  },
];

// Duplicate for seamless loop
const loopProjects = [...projects, ...projects];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="portfolio"
      className="py-32 md:py-44 bg-[#fafafa] relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-[#111]" />
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
                Selected work
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[var(--font-playfair)] font-normal leading-[1.15] tracking-[-0.02em] text-[#111]">
              Results that{" "}
              <span className="italic text-[#999]">speak.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Infinite loop scroll — CSS-based for hover pause */}
      <div
        className="overflow-hidden group/scroll"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-8 pl-6 md:pl-10 lg:pl-16 animate-[scroll_40s_linear_infinite]"
          style={{
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {loopProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: Math.min(i, 4) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[440px]"
            >
              <div
                className="rounded-2xl p-8 md:p-10 h-full flex flex-col transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                style={{ backgroundColor: p.color }}
              >
                {/* Category badge */}
                <div className="mb-8">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#888] uppercase">
                    {p.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[26px] md:text-[30px] font-[var(--font-playfair)] font-normal tracking-[-0.02em] text-[#111] mb-3 leading-[1.15]">
                  {p.title}
                </h3>

                {/* Tagline */}
                <p className="text-[14px] font-medium text-[#333] mb-4 leading-[1.5]">
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-[13px] text-[#666] leading-[1.8] mb-8 flex-1">
                  {p.description}
                </p>

                {/* Highlights */}
                <div className="pt-6 border-t border-black/[0.06] flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-4 py-2 bg-white/80 rounded-full text-[11px] font-semibold text-[#444] tracking-wide"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Keyframe for scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
