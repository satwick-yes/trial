import React from "react";
import Link from "next/link";
import { RefreshCw, ChevronRight } from "lucide-react";

export default function RefundReturnsPage() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Refund &amp; Return Policy</span>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Customer Satisfaction</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">Refund &amp; Return Policy</h1>
          <p className="text-xs text-muted-foreground">Effective Date: January 2025</p>
        </div>

        <div className="bg-white dark:bg-[#182420] p-6 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Perishable Goods Policy</h2>
            <p>
              Because our roasted makhana products are perishable food and consumable items, we cannot accept general returns once a packet has been opened or delivered, in accordance with FSSAI hygiene guidelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Eligibility for Replacements &amp; Refunds</h2>
            <p>
              We are pleased to offer a free replacement or complete refund in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You received the wrong flavor or incorrect item quantity.</li>
              <li>The outer packaging or inner nitrogen-sealed pouch was torn or damaged upon arrival.</li>
              <li>The delivered product was past its expiration date or suffered quality defects.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. How to Request a Return or Refund</h2>
            <p>
              To initiate a claim, please notify us within <strong>48 hours of delivery</strong> by emailing <strong>hello@gustosafoods.com</strong> with your Order ID and clear photographic evidence of the damaged or incorrect item.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Refund Processing</h2>
            <p>
              Once your claim is validated by our customer care team, the refund will be credited back to your original payment method (Credit/Debit Card, UPI, or Net Banking) within <strong>5 to 7 business days</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
