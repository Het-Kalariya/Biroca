"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Design\n& Development",
    description:
      "Stunning, high-performance websites built to convert. Every design decision is informed by user behavior, brand strategy, and business goals — not trends.",
    tags: ["Custom Design", "Responsive", "SEO-Optimized", "CMS Integration"],
  },
  {
    num: "02",
    title: "Custom\nSoftware",
    description:
      "Tailored applications that fit your workflow like a glove. We build tools your team actually wants to use — eliminating workarounds and unlocking efficiency.",
    tags: ["SaaS Products", "Internal Tools", "API Development", "Dashboards"],
  },
  {
    num: "03",
    title: "Business\nAutomation",
    description:
      "Intelligent systems that handle the repetitive work so your team can focus on growth. From invoicing to client onboarding — automated, reliable, and fast.",
    tags: ["Workflow Automation", "CRM Integration", "Reporting", "Scheduling"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="services"
      className="py-32 md:py-44 bg-[#fafafa] relative"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-20"
        >
          <div className="w-12 h-[1px] bg-[#111]" />
          <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
            What we do
          </span>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-t border-[#e5e5e5] py-12 md:py-16 cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-[13px] font-medium text-[#bbb] tracking-wide">
                    {service.num}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[var(--font-playfair)] font-normal leading-[1.1] tracking-[-0.02em] text-[#111] whitespace-pre-line group-hover:text-[#666] transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description + Tags */}
                <div className="md:col-span-5 md:col-start-6">
                  <p className="text-[15px] text-[#666] leading-[1.8] mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-[11px] font-medium tracking-[0.05em] text-[#999] border border-[#e5e5e5] rounded-full uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 hidden md:flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] group-hover:text-white text-[#ccc] transition-all duration-500">
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-[#e5e5e5]" />
        </div>
      </div>
    </section>
  );
}
