import React from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Privacy Policy</span>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Customer Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="bg-white dark:bg-[#182420] p-6 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Introduction</h2>
            <p>
              Gustosa Foods Pvt. Ltd. (&ldquo;Gustosa&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to respecting and protecting the privacy of our website visitors and online shoppers. This Privacy Policy details how we collect, handle, store, and safeguard your personal data when you visit our website or purchase our makhana snack products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Information We Collect</h2>
            <p>
              When you interact with our platform, we may collect the following personal and transactional details:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Full name, shipping address, billing address, email address, and telephone number.</li>
              <li><strong>Payment Data:</strong> Payment card details, UPI identifiers, or net banking information processed securely via authorized third-party payment gateways. Gustosa does not store your raw card numbers or CVV.</li>
              <li><strong>Order History:</strong> Details regarding snack products purchased, quantities, invoices, and delivery tracking.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and interaction metrics gathered via standard cookies.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. How We Use Your Information</h2>
            <p>We utilize the collected information strictly for legitimate business objectives, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Processing, packing, and dispatching your orders.</li>
              <li>Providing real-time shipment updates via SMS, WhatsApp, or email.</li>
              <li>Assisting with customer support queries, refunds, or replacement requests.</li>
              <li>Improving our snack catalog, website performance, and checkout experience.</li>
              <li>Sending exclusive promotional offers or newsletters if you have explicitly opted in.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Information Sharing &amp; Third Parties</h2>
            <p>
              Gustosa Foods never sells, rents, or trades your personal information to third-party advertisers. We only share relevant data with trusted partners required to fulfill your orders, such as logistics/courier carriers (e.g., Delhivery, BlueDart), SMS service providers, and secure payment processors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">5. Data Security &amp; Retention</h2>
            <p>
              We implement industry-standard SSL encryption protocols to protect your personal data during transmission. Your information is retained only as long as necessary to provide services and comply with statutory legal requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">6. Contact Our Grievance Officer</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:
            </p>
            <p className="text-foreground font-semibold pt-1">
              Email: hello@gustosafoods.com <br />
              Address: Station Club Road, Near Navratan Durga Asthan, NH 31, Purnia - 854301, Bihar, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
