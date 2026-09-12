"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";
import { BRAND_INFO } from "@/lib/gustosa-data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Order Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fbfdfc] dark:bg-[#0b1410] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Contact Customer Support</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-[#d8e6df] dark:border-[#1f3d30]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>We&apos;re Here to Help</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Get in Touch with Gustosa
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Have questions about an order, our flavors, wholesale partnerships, or distribution? Our dedicated customer care team in Bihar is at your service.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#112019] p-6 sm:p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] shadow-sm space-y-6">
              <h3 className="font-extrabold text-xl text-foreground">Direct Contact Channels</h3>

              <div className="space-y-5 text-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Customer Support Phone</span>
                    <a
                      href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[#1b4332] dark:text-[#52b788] font-bold hover:underline text-sm mt-0.5 block"
                    >
                      {BRAND_INFO.contact.phone}
                    </a>
                    <span className="text-[11px] text-muted-foreground block mt-0.5">
                      Hotlines: {BRAND_INFO.contact.altPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Email Inquiries</span>
                    <a
                      href={`mailto:${BRAND_INFO.contact.email}`}
                      className="text-[#1b4332] dark:text-[#52b788] font-bold hover:underline block mt-0.5"
                    >
                      {BRAND_INFO.contact.email}
                    </a>
                    <a
                      href={`mailto:${BRAND_INFO.contact.salesEmail}`}
                      className="text-muted-foreground hover:text-foreground text-[11px] block mt-0.5"
                    >
                      Sales: {BRAND_INFO.contact.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Headquarters &amp; Processing Unit</span>
                    <p className="text-muted-foreground leading-relaxed mt-0.5">
                      {BRAND_INFO.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Operational Hours</span>
                    <p className="text-muted-foreground mt-0.5">{BRAND_INFO.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#d8e6df] dark:border-[#1f3d30] space-y-3">
                <span className="text-xs font-bold text-foreground block">Connect on Social Media</span>
                <div className="flex gap-2.5">
                  <a
                    href={BRAND_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] hover:bg-[#1b4332] hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] hover:bg-[#1b4332] hover:text-white transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] hover:bg-[#1b4332] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788] hover:bg-[#1b4332] hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#112019] p-6 sm:p-10 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">Message Dispatched!</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you for messaging Gustosa Foods. Our support staff will review your request and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-xl font-extrabold text-foreground">Send a Direct Message</h2>
                  <p className="text-xs text-muted-foreground">
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Phone (Optional)</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#fbfdfc] dark:bg-[#0b1410] border border-[#d8e6df] dark:border-[#1f3d30] text-foreground text-xs p-3 rounded-xl outline-none focus:border-[#1b4332]"
                    >
                      <option>Order &amp; Delivery Tracking</option>
                      <option>Product &amp; Flavor Inquiries</option>
                      <option>Feedback or Suggestion</option>
                      <option>Retail Store Distribution</option>
                      <option>Other Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can our customer team assist you today?"
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
                  <span>Send Message to Support</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
