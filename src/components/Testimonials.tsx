"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Biroca completely transformed our digital presence. Our online reservations tripled within the first month. They didn't just build a website — they understood our restaurant.",
    name: "Rajesh Mehta",
    role: "The Urban Plate",
  },
  {
    quote:
      "The appointment system they built eliminated our double-booking problem entirely. Patient no-shows dropped 85%. Professional, responsive, and genuinely invested in our success.",
    name: "Dr. Priya Sharma",
    role: "PureGlow Skincare Clinic",
  },
  {
    quote:
      "We went from zero online sales to a thriving e-commerce channel in three months. The inventory automation alone paid for the entire project within weeks.",
    name: "Ankit Patel",
    role: "Metro Home Furnishings",
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
          <div className="min-h-[280px] md:min-h-[220px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="text-[clamp(1.5rem,3vw,2.5rem)] font-[var(--font-playfair)] font-normal leading-[1.4] tracking-[-0.01em] text-white/90 max-w-4xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 font-medium text-sm">
                    {testimonials[current].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-[13px] text-white/40">
                      {testimonials[current].role}
                    </p>
                  </div>
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
