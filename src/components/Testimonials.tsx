"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The LLM Router Biroca built changed how we think about AI infrastructure. Instead of one model doing everything poorly, we now have specialized models handling each task brilliantly — and the self-reflection loops catch mistakes before we ever see them. Genuinely impressive engineering.",
    name: "Arjun Desai",
    role: "Smart Local LLM Router — AI System",
  },
  {
    quote:
      "We were drowning in paper ledgers and spreadsheet errors. Biroca delivered a system that tracks every single sheet of paper from arrival to consumption, with zero discrepancies. The bulk import alone saves us 15 hours a week. Our entire team refused to go back to the old way after day one.",
    name: "Mahesh Patel",
    role: "Radhe Offset — Manufacturing",
  },
  {
    quote:
      "RemindHer eliminated the chaos in our household. No more forgotten groceries, no more wasted food sitting in the back of the fridge. The AI reminders feel genuinely helpful — like having a thoughtful assistant who actually knows our routines. Our food waste dropped by nearly half.",
    name: "Sneha Kapoor",
    role: "RemindHer — Smart Home",
  },
  {
    quote:
      "Before GeoFace Sentinel, we had no way to verify if attendance logs were genuine. Now, with geofencing and live face verification, proxy attendance is physically impossible. The 3-second authentication means no queues, no complaints. It just works — every single time.",
    name: "Vikram Rao",
    role: "GeoFace Sentinel — Workforce Security",
  },
  {
    quote:
      "Merkleon gave us something no other vendor could — cryptographic proof that our AI agents are behaving correctly. The audit trail is tamper-evident, the anomaly detection catches issues in real-time, and the compliance reports satisfied our legal team on the first review. This is enterprise-grade work.",
    name: "Rohan Iyer",
    role: "Merkleon — AI Security Platform",
  },
  {
    quote:
      "The Voice AI system replaced our entire outbound calling team — and it performs better. Every new lead gets a personalized call within minutes, insights are extracted automatically, and everything syncs to Airtable without anyone lifting a finger. Our conversion rate doubled in the first month.",
    name: "Neel Joshi",
    role: "Voice AI Lead Engine — Sales Automation",
  },
  {
    quote:
      "Biroca turned our outdated catalog into a luxury digital experience that our customers actually enjoy browsing. The scroll animations, the product interactions, the sheer speed — everything feels intentional and premium. Engagement jumped 150% and we finally have a website that matches the quality of our brand.",
    name: "Aarav Malhotra",
    role: "CONCOS — Luxury Fashion E-Commerce",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="py-32 md:py-44 bg-[#111] text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Large decorative quote */}
      <div className="absolute top-16 right-16 text-[300px] font-[var(--font-playfair)] text-white/[0.03] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-[1px] bg-white/30" />
            <span className="text-[12px] font-medium tracking-[0.2em] text-white/40 uppercase">
              Client voices
            </span>
          </div>

          {/* Quote */}
          <div className="min-h-[320px] md:min-h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="text-[clamp(1.3rem,2.5vw,2.2rem)] font-[var(--font-playfair)] font-normal leading-[1.4] tracking-[-0.01em] text-white/90 max-w-4xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-10">
                  <p className="text-[15px] font-medium text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[13px] text-white/40 mt-1">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center gap-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#111] transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#111] transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
            <span className="text-[13px] text-white/30 ml-4">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
