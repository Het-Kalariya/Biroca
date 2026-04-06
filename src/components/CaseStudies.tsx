"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "The Urban Plate",
    category: "Restaurant",
    tagline: "From phone bookings to 140% more online reservations",
    description:
      "Complete digital overhaul — modern website with integrated table reservations, menu browsing, and automated confirmation emails. Built a real-time dashboard for staff.",
    results: ["140% more reservations", "8 hrs/week saved", "2x web traffic"],
    color: "#f5f0eb",
  },
  {
    client: "PureGlow Clinic",
    category: "Healthcare",
    tagline: "Eliminated double-bookings and cut no-shows by 85%",
    description:
      "Professional clinic website with online scheduling, SMS reminders, and digital patient intake. Seamless CRM integration for zero manual data entry.",
    results: ["85% fewer no-shows", "15 hrs/week saved", "60% more inquiries"],
    color: "#f0f0f5",
  },
  {
    client: "Metro Furnishings",
    category: "E-Commerce",
    tagline: "From zero online sales to a thriving digital storefront",
    description:
      "Full e-commerce platform with real-time inventory sync, automated reorder alerts, and a loyalty program. Custom admin panel for complete business control.",
    results: ["220% revenue growth", "90% fewer stock errors", "3,200+ customers"],
    color: "#f0f5f0",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

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

        {/* Scrollable cards */}
        <div className="horizontal-scroll pb-6 -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 1 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-[85vw] md:w-[550px] lg:w-[480px]"
            >
              <div
                className="rounded-2xl p-8 md:p-10 h-full flex flex-col transition-transform duration-700 group-hover:-translate-y-2"
                style={{ backgroundColor: c.color }}
              >
                {/* Category */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-medium tracking-[0.15em] text-[#999] uppercase">
                    {c.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#d4d4d4] flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] group-hover:text-white text-[#ccc] transition-all duration-500">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Client */}
                <h3 className="text-[28px] md:text-[32px] font-[var(--font-playfair)] font-normal tracking-[-0.02em] text-[#111] mb-3">
                  {c.client}
                </h3>
                <p className="text-[15px] font-medium text-[#111] mb-4">
                  {c.tagline}
                </p>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-8 flex-1">
                  {c.description}
                </p>

                {/* Results */}
                <div className="pt-6 border-t border-black/[0.08] flex flex-wrap gap-3">
                  {c.results.map((r) => (
                    <span
                      key={r}
                      className="px-4 py-2 bg-white/70 rounded-full text-[12px] font-medium text-[#444] tracking-wide"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
