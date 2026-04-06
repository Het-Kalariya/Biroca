import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Simple nav */}
      <nav className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link href="/">
          <Image src="/logo.svg" alt="Biroca" width={120} height={30} className="h-[22px] w-auto" />
        </Link>
      </nav>

      <main className="max-w-[900px] mx-auto px-6 md:px-10 pb-24">
        <div className="mb-12">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-[var(--font-playfair)] font-normal tracking-[-0.02em] text-[#111] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-[#999]">Last updated: April 6, 2026</p>
        </div>

        <div className="space-y-10 text-[15px] text-[#444] leading-[1.9]">
          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">1. Information We Collect</h2>
            <p>
              When you interact with Biroca through our website, contact forms, or services, we may collect
              the following categories of information:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and any details you voluntarily provide through our contact form.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
              <li><strong>Cookies & Tracking:</strong> We use essential cookies to ensure our website functions properly. We do not use advertising or third-party tracking cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>To respond to your inquiries and provide the services you request.</li>
              <li>To send you a confirmation email when you submit our contact form.</li>
              <li>To improve our website, services, and overall user experience.</li>
              <li>To communicate with you about projects, updates, and service-related matters.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">3. Data Sharing & Disclosure</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Service Providers:</strong> We use EmailJS for form submissions. Your contact form data is processed through their secure infrastructure.</li>
              <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this policy, or as required by law. Contact form submissions are retained for
              a maximum of 24 months unless an ongoing business relationship exists.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access, correct, or delete your personal information.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Request a copy of the data we hold about you.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:biroca.in@gmail.com" className="text-[#111] underline underline-offset-4">
                biroca.in@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices or content of these external sites. We encourage you to read the privacy policies
              of any third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p><strong>Biroca</strong></p>
              <p>Ahmedabad, Gujarat, India</p>
              <p>Email: <a href="mailto:biroca.in@gmail.com" className="text-[#111] underline underline-offset-4">biroca.in@gmail.com</a></p>
              <p>Phone: <a href="tel:+917046880662" className="text-[#111] underline underline-offset-4">+91 70468 80662</a></p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e5e5e5]">
          <Link href="/" className="text-[14px] text-[#999] hover:text-[#111] transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
