"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    title: "Discovery",
    desc: "We shut up and listen. Before a single pixel moves, we dig deep into your business, your audience, and what success actually looks like for you. No assumptions. Just sharp questions and honest answers.",
  },
  {
    title: "Strategy",
    desc: "Ideas without structure are just noise. We turn everything from discovery into a clear roadmap — defined milestones, realistic timelines, and success metrics you can actually measure.",
  },
  {
    title: "Design",
    desc: "High-fidelity prototypes you can click through and feel before a single line of code is written. Nothing moves forward without your sign-off. No surprises. No \"trust us, it'll look good.\"",
  },
  {
    title: "Build",
    desc: "Clean, scalable code with rigorous QA at every stage. We test obsessively — across devices, edge cases, and real-world scenarios — so you never have to worry about what happens after launch.",
  },
  {
    title: "Launch",
    desc: "Zero-downtime deployment. Full documentation. Team onboarding included. You go live with confidence, not crossed fingers.",
  },
  {
    title: "Evolve",
    desc: "Launch is the beginning, not the finish line. We monitor, optimize, and iterate based on real usage data — making sure your product gets sharper as your business grows.",
  },
];

function StepItem({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr] gap-6 md:gap-10">
      {/* Timeline dot + line segment */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className="relative z-10 w-[12px] h-[12px] rounded-full border-[3px] border-white mt-1 transition-all duration-600"
          style={{
            backgroundColor: visible ? "#111" : "#ddd",
            boxShadow: visible
              ? "0 0 0 2px #111"
              : "0 0 0 2px #e5e5e5",
            transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
          }}
        />
        {/* Line segment */}
        {index < steps.length - 1 && (
          <div className="w-[2px] flex-1 relative">
            <div className="absolute inset-0 bg-[#e5e5e5]" />
            <div
              className="absolute top-0 left-0 w-full bg-[#111] origin-top"
              style={{
                height: visible ? "100%" : "0%",
                transition: "height 0.8s cubic-bezier(.4,0,.2,1) 0.3s",
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className="pb-12 md:pb-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <span
          className="block text-[11px] font-mono font-medium tracking-[0.2em] uppercase mb-3"
          style={{
            color: visible ? "#999" : "#ccc",
            transition: "color 0.6s cubic-bezier(.4,0,.2,1)",
          }}
        >
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111] tracking-[-0.01em] mb-3">
          {step.title}
        </h3>
        <p className="text-[13px] md:text-[14px] text-[#666] leading-[1.8] max-w-[520px]">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-32 md:py-44 relative" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className="mb-20 text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#111]" />
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#999] uppercase">
              How we work
            </span>
            <div className="w-12 h-[1px] bg-[#111]" />
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[var(--font-playfair)] font-normal leading-[1.15] tracking-[-0.02em] text-[#111] text-center">
            A process built on{" "}
            <span className="italic text-[#999]">clarity and craft.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <StepItem key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
