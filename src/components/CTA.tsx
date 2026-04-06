"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function CTA() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      // Send notification to Biroca
      await emailjs.sendForm(
        "service_derw7cr",
        "template_f029m2q",
        formRef.current,
        "7kSuqLDLX2ajYkCmq"
      );

      // Send thank-you email to the customer
      const formData = new FormData(formRef.current);
      await emailjs.send(
        "service_derw7cr",
        "template_bmzoomr",
        {
          user_name: formData.get("user_name"),
          user_email: formData.get("user_email"),
          user_company: formData.get("user_company"),
          user_phone: formData.get("user_phone"),
          message: formData.get("message"),
        },
        "7kSuqLDLX2ajYkCmq"
      );

      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

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
                href="mailto:biroca.in@gmail.com"
                className="block text-[18px] md:text-[20px] text-[#111] hover:text-[#666] transition-colors duration-300 tracking-[-0.01em]"
              >
                biroca.in@gmail.com
              </a>
              <a
                href="tel:+917046880662"
                className="block text-[18px] md:text-[20px] text-[#111] hover:text-[#666] transition-colors duration-300 tracking-[-0.01em]"
              >
                +91 70468 80662
              </a>
              <p className="text-[16px] text-[#666]">
                Ahmedabad, Gujarat, India
              </p>
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
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <CheckCircle2 size={48} className="text-green-600 mb-6" />
                <h3 className="text-[28px] font-[var(--font-playfair)] font-normal text-[#111] mb-3">
                  Message sent!
                </h3>
                <p className="text-[16px] text-[#666] max-w-sm">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[14px] font-medium text-[#111] underline underline-offset-4 hover:text-[#666] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] text-[#666] uppercase mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your full name"
                    className="w-full px-0 py-4 bg-transparent border-b border-[#d4d4d4] text-[#111] text-[16px] placeholder:text-[#aaa] focus:outline-none focus:border-[#111] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] text-[#666] uppercase mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="you@company.com"
                    suppressHydrationWarning
                    className="w-full px-0 py-4 bg-transparent border-b border-[#d4d4d4] text-[#111] text-[16px] placeholder:text-[#aaa] focus:outline-none focus:border-[#111] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] text-[#666] uppercase mb-3">
                    Phone <span className="text-[#bbb] normal-case tracking-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="+91 00000 00000"
                    className="w-full px-0 py-4 bg-transparent border-b border-[#d4d4d4] text-[#111] text-[16px] placeholder:text-[#aaa] focus:outline-none focus:border-[#111] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] text-[#666] uppercase mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    name="user_company"
                    placeholder="Your company name"
                    className="w-full px-0 py-4 bg-transparent border-b border-[#d4d4d4] text-[#111] text-[16px] placeholder:text-[#aaa] focus:outline-none focus:border-[#111] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.15em] text-[#666] uppercase mb-3">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="What are you looking to build?"
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-b border-[#d4d4d4] text-[#111] text-[16px] placeholder:text-[#aaa] focus:outline-none focus:border-[#111] transition-colors duration-300 resize-none"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-4 px-10 py-5 bg-[#111] text-white text-[14px] font-medium tracking-wide rounded-full hover:bg-[#333] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        Sending...
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight
                          size={16}
                          className="group-hover:rotate-45 transition-transform duration-500"
                        />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="mt-4 text-[14px] text-red-600">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
