"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Heart,
  ShieldCheck,
  Leaf,
  Users,
  Building2,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { BRAND_INFO } from "@/lib/gustosa-data";

export default function AboutUsPage() {
  return (
    <div className="bg-[#fbfdfc] dark:bg-[#0b1410] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">About Gustosa Foods</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-[#d8e6df] dark:border-[#1f3d30]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Roots &amp; Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Revitalizing Ancient Nutrition with <br />
            <span className="text-[#1b4332] dark:text-[#52b788]">Gourmet Artisan Flavors</span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            From the tranquil lotus wetlands of Mithila, Bihar, straight to your daily snack break. We are dedicated to creating healthy, clean-label snacks that empower your wellbeing without sacrificing taste.
          </p>
        </div>

        {/* Story Section with Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-[#d8e6df] dark:border-[#1f3d30]">
            <div className="absolute inset-0 overflow-hidden">
              <video
                src="/assets/videos/harvesting.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.3] pointer-events-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1b4332] dark:text-[#52b788] uppercase tracking-wider">
                Farm to Home Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Hand-Harvested in Bihar, Slow-Roasted with Love
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Over 85% of the world’s fox nuts grow naturally in the pristine wetlands of Bihar. At Gustosa Foods, we work closely with local farming collectives in Mithila and Purnia to hand-harvest only the largest, purest Grade A+ lotus seeds.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Instead of deep-frying in palm oil, our seeds are slow-roasted in natural olive oil and tossed with authentic Indian spice blends. Every crunchy bite is packed with plant protein, calcium, and antioxidants.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow">
                <span className="text-2xl font-extrabold text-[#1b4332] dark:text-[#52b788]">100%</span>
                <span className="text-xs text-muted-foreground font-semibold block mt-0.5">
                  Natural, No Preservatives
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow">
                <span className="text-2xl font-extrabold text-[#1b4332] dark:text-[#52b788]">0g</span>
                <span className="text-xs text-muted-foreground font-semibold block mt-0.5">
                  Trans Fats &amp; Cholesterol
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Values Bento */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-foreground">Our Core Commitments</h3>
            <p className="text-xs text-muted-foreground">
              What sets Gustosa Foods apart in modern gourmet snacking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#112019] p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">Clean Label Promise</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No hidden chemicals, no artificial food colorings, and no palm oil. Only genuine spices, cold-pressed oils, and farm-fresh ingredients.
              </p>
            </div>

            <div className="bg-white dark:bg-[#112019] p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">Farmer First Sourcing</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By purchasing directly from traditional harvesting families in Bihar, we ensure fair wages, sustainable wetland ecology, and community growth.
              </p>
            </div>

            <div className="bg-white dark:bg-[#112019] p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] card-hover-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">Highest Hygiene Standards</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our modern processing and packaging facility in Purnia operates with automated grading, air classification, and nitrogen flush sealing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2d6a4f]/40 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold">Ready to Experience Pure Snacking?</h3>
            <p className="text-xs sm:text-sm text-white/85">
              Browse our complete catalog of crunch-packed roasted makhana flavors.
            </p>
          </div>

          <Link
            href="/shop"
            className="bg-[#52b788] hover:bg-[#40916c] text-[#081c15] font-black px-6 py-3.5 rounded-2xl text-xs transition-all flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Explore All Flavors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
