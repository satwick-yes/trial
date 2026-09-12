"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  Truck,
  ShieldCheck,
  Award,
  Sparkles,
  Package,
  CheckCircle2,
  ChevronRight,
  Send
} from "lucide-react";
import { BRAND_INFO } from "@/lib/gustosa-data";

export default function BulkOrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    estimatedQuantity: "50-100 kg",
    purpose: "Corporate Gifting",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fbfdfc] dark:bg-[#0b1410] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Bulk &amp; Wholesale Orders</span>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] text-white p-8 sm:p-14 shadow-xl border border-[#2d6a4f]/40">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#52b788] text-[#081c15] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B, Institutional &amp; Export Inquiries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Direct-from-Farm <br />
              <span className="text-[#52b788]">Wholesale Makhana Supply</span>
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
              Partner directly with Gustosa Foods for premium Bihar raw fox nuts, slow-roasted kernels, flavored retail packaging, and customized corporate gift hampers at direct factory rates.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#112019] p-6 sm:p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-foreground">Custom Packaging &amp; Private Label</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Available in bulk 10kg bags, jars (60g, 100g, 250g), pouches, or customized white-label packaging for retail chains and export buyers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#112019] p-6 sm:p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-foreground">Export Grade &amp; FSSAI Certified</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Grade 4+, 5+, and 6+ Jumbo fox nuts hand-graded with rigorous moisture testing, nitrogen flush packing, and complete sanitary documentation.
            </p>
          </div>

          <div className="bg-white dark:bg-[#112019] p-6 sm:p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-foreground">Pan-India &amp; Global Logistics</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Seamless logistics support from Purnia, Bihar to any domestic metro city or international sea/air port with guaranteed lead times.
            </p>
          </div>
        </div>

        {/* Inquiry Form & Direct Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#112019] p-6 sm:p-10 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">Inquiry Received!</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Gustosa Foods. Our B2B sales representative will contact you via email and phone within 24 business hours with custom pricing.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-xl font-extrabold text-foreground">Request a Wholesale Quote</h2>
                  <p className="text-xs text-muted-foreground">
                    Please provide your estimated requirements for best tier pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gourmet Retail Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Estimated Order Volume</label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    >
                      <option>25 - 50 kg (Sample / Small Batch)</option>
                      <option>50 - 100 kg</option>
                      <option>100 - 500 kg</option>
                      <option>500 kg - 2 Metric Tons</option>
                      <option>Full Container Load (Export)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Primary Purpose</label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    >
                      <option>Corporate Gifting</option>
                      <option>Retail Supermarket Distribution</option>
                      <option>HoReCa / Hotel / Restaurant Supply</option>
                      <option>White Label / Private Label</option>
                      <option>Raw Makhana Export</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">Specific Flavor &amp; Packing Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your required flavors, packaging sizes, target delivery timeline, and delivery pin code..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Wholesale Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact & Sales Team Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#112019] p-6 sm:p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] space-y-6">
              <h3 className="font-extrabold text-lg text-foreground">Direct Sales Hotline</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Call or WhatsApp</span>
                    <a
                      href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[#1b4332] dark:text-[#52b788] font-bold hover:underline"
                    >
                      {BRAND_INFO.contact.phone}
                    </a>
                    <p className="text-muted-foreground text-[11px] mt-0.5">
                      Alt: {BRAND_INFO.contact.altPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Direct Sales Inquiries</span>
                    <a
                      href={`mailto:${BRAND_INFO.contact.salesEmail}`}
                      className="text-[#1b4332] dark:text-[#52b788] font-bold hover:underline"
                    >
                      {BRAND_INFO.contact.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Factory &amp; Processing Unit</span>
                    <span className="text-muted-foreground leading-relaxed">
                      {BRAND_INFO.contact.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Certifications */}
            <div className="bg-[#e8f5e9]/70 dark:bg-[#183126]/70 p-6 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] space-y-3">
              <div className="flex items-center gap-2 text-[#1b4332] dark:text-[#52b788] font-bold text-xs uppercase">
                <Award className="w-4 h-4" />
                <span>Certified Processing Standards</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                FSSAI licensed, APEDA recognized, and compliant with ISO food safety handling protocols. Clean room sorting and automatic nitrogen-flush sealing guarantee an extended shelf life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
