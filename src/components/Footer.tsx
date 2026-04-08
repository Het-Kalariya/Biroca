import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image src="/biroca-logo.png" alt="Biroca" width={140} height={36} className="h-[24px] w-auto mb-4" />
            <p className="mt-4 text-[14px] text-[#999] leading-[1.8] max-w-sm">
              Design-led technology studio for businesses
              that demand excellence in their digital presence.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#999] uppercase mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Work", href: "/#portfolio" },
                { label: "Services", href: "/#services" },
                { label: "Process", href: "/#process" },
                { label: "About", href: "/#about" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-[#666] hover:text-[#111] transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#999] uppercase mb-5">
              Get in touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:biroca.in@gmail.com"
                className="text-[14px] text-[#666] hover:text-[#111] transition-colors duration-300"
              >
                biroca.in@gmail.com
              </a>
              <a
                href="tel:+917046880662"
                className="text-[14px] text-[#666] hover:text-[#111] transition-colors duration-300"
              >
                +91 70468 80662
              </a>
              <a
                href="tel:+919313217600"
                className="text-[14px] text-[#666] hover:text-[#111] transition-colors duration-300"
              >
                +91 93132 17600
              </a>
              <a
                href="tel:+919909709992"
                className="text-[14px] text-[#666] hover:text-[#111] transition-colors duration-300"
              >
                +91 99097 09992
              </a>
              <span className="text-[14px] text-[#666]">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#f0f0f0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#bbb]">
            &copy; {new Date().getFullYear()} Biroca. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[12px] text-[#bbb] hover:text-[#111] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-[#bbb] hover:text-[#111] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
