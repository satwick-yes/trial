"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";
import { BRAND_INFO, CATEGORIES } from "@/lib/gustosa-data";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#111a16] text-[#f4ede4] border-t border-[#2d443b] relative overflow-hidden"
    >
      {/* Decorative Brand Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2d6a4f]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Key Guarantees Strip */}
      <div className="border-b border-[#2d443b]/60 py-8 bg-[#182420]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#2d6a4f]/20 border border-[#2d6a4f]/40 flex items-center justify-center text-[#52b788] shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Free Fast Shipping</h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">Across India on orders above ₹499</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#2d6a4f]/20 border border-[#2d6a4f]/40 flex items-center justify-center text-[#52b788] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">100% Roasted, Never Fried</h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">Zero cholesterol & zero trans fats</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#2d6a4f]/20 border border-[#2d6a4f]/40 flex items-center justify-center text-[#52b788] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">FSSAI Certified</h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">Highest food hygiene & quality standards</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#2d6a4f]/20 border border-[#2d6a4f]/40 flex items-center justify-center text-[#52b788] shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Freshness Guaranteed</h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">Directly sourced from Bihar farms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-12 h-12 rounded-xl bg-[#2d6a4f]/30 border border-[#52b788]/30 p-1.5 flex items-center justify-center">
                <Image
                  src="/assets/brand/logo.png"
                  alt="Gustosa Foods Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-tight">
                  Gustosa<span className="text-[#e76f51]">.</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#52b788]">
                  Premium Fox Nuts
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-sm">
              {BRAND_INFO.tagline}. Hand-harvested directly from the lotus wetlands of Mithila, Bihar, slow-roasted in natural olive oil and sprinkled with aromatic spice blends.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Join our healthy snack club
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Gustosa Foods healthy snack updates!");
                }}
                className="flex gap-2 max-w-sm"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="bg-[#182420] border border-[#2d443b] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none focus:border-[#52b788] flex-1 placeholder:text-[#94a3b8]"
                />
                <button
                  type="submit"
                  className="bg-[#2d6a4f] hover:bg-[#1e4936] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              <span className="text-[11px] text-[#94a3b8] block">
                Get 10% off your first order + healthy diet recipes.
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#2d443b] pb-2">
              Shop Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94a3b8]">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${cat.slug}`}
                    className="hover:text-[#52b788] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] bg-[#182420] px-2 py-0.5 rounded-full group-hover:bg-[#2d6a4f] text-white">
                      {cat.itemCount}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/combo-products"
                  className="text-[#e9c46a] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Combo Value Packs</span>
                  <Sparkles className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#2d443b] pb-2">
              Company & Info
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94a3b8]">
              <li>
                <Link href="/about-us" className="hover:text-[#52b788] transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link href="/bulk-order" className="hover:text-[#52b788] transition-colors">
                  Wholesale & Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#52b788] transition-colors">
                  Makhana Health Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#52b788] transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#52b788] transition-colors">
                  Explore Full Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#2d443b] pb-2">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-[#94a3b8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#52b788] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-[#52b788] transition-colors text-white font-medium"
                >
                  {BRAND_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#52b788] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.contact.email}`}
                  className="hover:text-[#52b788] transition-colors"
                >
                  {BRAND_INFO.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-2">
                  <a
                    href={BRAND_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#182420] border border-[#2d443b] flex items-center justify-center text-white hover:bg-[#2d6a4f] hover:border-[#52b788] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#182420] border border-[#2d443b] flex items-center justify-center text-white hover:bg-[#2d6a4f] hover:border-[#52b788] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#182420] border border-[#2d443b] flex items-center justify-center text-white hover:bg-[#2d6a4f] hover:border-[#52b788] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#182420] border border-[#2d443b] flex items-center justify-center text-white hover:bg-[#2d6a4f] hover:border-[#52b788] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-[#2d443b] py-6 bg-[#0d1411]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Gustosa Foods Pvt. Ltd. All rights reserved. Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#e76f51] fill-[#e76f51] inline mx-0.5" />
            <span>in India.</span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/term-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/shipping-policy" className="hover:text-white transition-colors">
              Shipping Policy
            </Link>
            <Link href="/refund-returns" className="hover:text-white transition-colors">
              Refund & Returns
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
