import React from "react";
import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Terms &amp; Conditions</span>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">Terms &amp; Conditions</h1>
          <p className="text-xs text-muted-foreground">Effective Date: January 1, 2025</p>
        </div>

        <div className="bg-white dark:bg-[#182420] p-6 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or purchasing from Gustosa Foods Pvt. Ltd. through gustosafoods.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Products, Pricing &amp; Availability</h2>
            <p>
              All product descriptions, weights, ingredients, and prices displayed on our website are subject to change without prior notice. While we strive for absolute accuracy in images and flavor representations, slight packaging variations may occur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. Orders, Payments &amp; Invoicing</h2>
            <p>
              When you place an order, you agree to provide true, accurate, and current payment and delivery details. We reserve the right to cancel or refuse any order in cases of suspected fraud, pricing errors, or unauthorized bulk purchases.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Intellectual Property</h2>
            <p>
              All trademarks, logos, visual identities, packaging graphics, and website copy belong exclusively to Gustosa Foods Pvt. Ltd. Unauthorized reproduction, modification, or commercial exploitation is strictly prohibited under Indian copyright and trademark law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any legal disputes arising out of your purchase or website usage shall be subject exclusively to the courts of Purnia / Patna, Bihar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
