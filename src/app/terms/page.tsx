import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-[14px] text-[#999]">Last updated: April 6, 2026</p>
        </div>

        <div className="space-y-10 text-[15px] text-[#444] leading-[1.9]">
          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Biroca website (biroca.in) and our services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our website
              or services.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">2. Services</h2>
            <p>
              Biroca provides web design and development, custom software solutions, and business automation
              services. The specific scope, deliverables, timeline, and pricing of any project will be
              outlined in a separate project agreement or proposal provided to each client.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Provide accurate and complete information necessary for the execution of your project.</li>
              <li>Respond to requests for feedback, approvals, and content in a timely manner.</li>
              <li>Ensure that any materials you provide (text, images, logos) do not infringe upon third-party rights.</li>
              <li>Make payments according to the agreed schedule outlined in your project agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">4. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Client Materials:</strong> You retain ownership of all content, data, and materials you provide to us.</li>
              <li><strong>Deliverables:</strong> Upon full payment, ownership of the final deliverables transfers to you, unless otherwise specified in the project agreement.</li>
              <li><strong>Pre-existing Work:</strong> Biroca retains ownership of any proprietary tools, frameworks, or code libraries developed prior to or independently of your project.</li>
              <li><strong>Portfolio Rights:</strong> Unless explicitly agreed otherwise, Biroca reserves the right to showcase completed work in our portfolio and marketing materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment terms will be detailed in your individual project agreement.</li>
              <li>A deposit is typically required before work commences.</li>
              <li>Late payments may result in project delays or suspension of services.</li>
              <li>All fees are non-refundable once work has commenced, unless otherwise agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">6. Project Timeline & Delivery</h2>
            <p>
              Project timelines are estimates and may be affected by factors including client response times,
              scope changes, and technical requirements. We will communicate any significant delays promptly.
              Delays caused by late client feedback or approvals will not constitute a breach of our obligations.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">7. Warranties & Disclaimers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We warrant that our services will be performed in a professional and workmanlike manner.</li>
              <li>We provide a 30-day warranty period after project delivery for bug fixes related to the delivered scope.</li>
              <li>We do not guarantee specific business outcomes, search engine rankings, or revenue increases.</li>
              <li>Our website and content are provided &ldquo;as is&rdquo; without warranties of any kind regarding availability or accuracy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Biroca shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or related to our services. Our total
              liability shall not exceed the fees paid by you for the specific project giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">9. Termination</h2>
            <p>
              Either party may terminate a project agreement with 15 days written notice. Upon termination,
              the client is responsible for payment for all work completed up to the date of termination.
              We will provide all completed deliverables upon receipt of outstanding payments.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India.
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the
              courts of Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting on our website. Your continued use of our services after any changes
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">12. Contact Us</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us:
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
