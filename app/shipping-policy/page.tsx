import React from "react";
import Link from "next/link";
import { Truck, ChevronRight } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Shipping Policy</span>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
            <Truck className="w-3.5 h-3.5" />
            <span>Delivery Information</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">Shipping Policy</h1>
          <p className="text-xs text-muted-foreground">Last revised: January 2025</p>
        </div>

        <div className="bg-white dark:bg-[#182420] p-6 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Order Processing Time</h2>
            <p>
              All orders are processed and packed at our automated facility in Purnia, Bihar within 24 to 48 business hours of receipt. Orders placed on Sundays or public holidays are processed the next operational business day.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Domestic Shipping &amp; Delivery Timelines</h2>
            <p>
              We deliver across 20,000+ pin codes across India through premier courier partners (Blue Dart, Delhivery, Expressbees).
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Metro Cities (Delhi NCR, Mumbai, Bengaluru, Kolkata, etc.):</strong> 3 - 5 business days.</li>
              <li><strong>Tier 2 &amp; Tier 3 Cities / Non-Metro Regions:</strong> 5 - 7 business days.</li>
              <li><strong>Eastern India &amp; Bihar Local Hubs:</strong> 2 - 4 business days.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. Shipping Charges &amp; Free Shipping Threshold</h2>
            <p>
              We offer <strong className="text-primary font-bold">FREE standard shipping on all orders above ₹499</strong> anywhere in India. For orders below ₹499, a nominal flat delivery charge of ₹49 is applied during checkout.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Real-Time Order Tracking</h2>
            <p>
              Once your shipment is dispatched, an automated tracking link along with the AWB number will be sent via SMS and Email so you can monitor your makhana snacks in transit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">5. Damaged or Tampered Packaging</h2>
            <p>
              If your parcel arrives visibly damaged or tampered with, please do not accept the package or immediately take a photo and reach out to us at <strong>hello@gustosafoods.com</strong> or call <strong>+91 93081 72152</strong> within 24 hours of delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
