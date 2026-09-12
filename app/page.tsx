"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Heart,
  Star,
  ShieldCheck,
  Leaf,
  Flame,
  Award,
  ChevronRight,
  Plus,
  Check,
  TrendingUp,
  Zap,
  Package,
  Clock,
  Sparkle
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import {
  BRAND_INFO,
  PRODUCTS,
  CATEGORIES,
  FAQS,
  TESTIMONIALS,
  BLOG_POSTS
} from "@/lib/gustosa-data";

export default function HomePage() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [activeFaq, setActiveFaq] = useState<string | null>(FAQS[0]?.id || null);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>("all");

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);
  const comboPacks = PRODUCTS.filter((p) => p.isCombo);
  const filteredProducts =
    selectedCategoryTab === "all"
      ? PRODUCTS.slice(0, 8)
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategoryTab);

  const marqueeFlavors = [
    { name: "PUDINA CRUNCH", tag: "FRESH HERB", color: "bg-[#1b4332] text-white" },
    { name: "PERI PERI SPICE", tag: "HEAT PICK", color: "bg-[#2d6a4f] text-white" },
    { name: "CHEESY JUMBO", tag: "CROWD FAV", color: "bg-[#52b788] text-[#081c15]" },
    { name: "CREAM & ONION", tag: "GOURMET", color: "bg-[#1b4332] text-white" },
    { name: "SALT & PEPPER", tag: "CLASSIC", color: "bg-[#2d6a4f] text-white" },
    { name: "TANGY TOMATO", tag: "ZESTY HIT", color: "bg-[#52b788] text-[#081c15]" },
    { name: "SMOKY BBQ", tag: "SIGNATURE", color: "bg-[#1b4332] text-white" },
    { name: "ROASTED RAW", tag: "ZERO OIL", color: "bg-[#2d6a4f] text-white" },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION (High-Energy D2C Presentation with Floating Parallax Badges) */}
      <section className="relative pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl sm:rounded-[2.75rem] bg-gradient-to-br from-[#e8f5e9]/70 via-[#ffffff] to-[#d8f3dc]/50 dark:from-[#112019] dark:via-[#0b1410] dark:to-[#183126] border border-[#d8e6df] dark:border-[#1f3d30] p-6 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-10 w-96 h-96 bg-[#52b788]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#1b4332]/10 dark:bg-[#52b788]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
              {/* Left Column: Punchy Typography & Fast Action */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                {/* Micro Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4332]/10 dark:bg-[#52b788]/15 border border-[#1b4332]/20 dark:border-[#52b788]/30 text-[#1b4332] dark:text-[#52b788] text-xs font-black uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>100% Roasted Bihar Fox Nuts • Olive Oil Tossed</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f241d] dark:text-[#e8f5e9] leading-[1.08]">
                  CRUNCHY. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#52b788] dark:from-[#52b788] dark:via-[#74c69d] dark:to-[#b7e4c7]">
                    GUILT-FREE.
                  </span> <br />
                  OBSESSIVELY TASTY.
                </h1>

                <p className="text-base sm:text-lg text-[#406356] dark:text-[#749c8c] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  Directly harvested from the nutrient-dense wetlands of Mithila, Bihar. Slow-roasted in golden olive oil and dusted with gourmet botanical spices. Zero palm oil, high plant protein, 100% natural.
                </p>

                {/* Nutrition Highlights Chips */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs font-bold text-[#0f241d] dark:text-[#e8f5e9]">
                  <span className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#183126] border border-[#d8e6df] dark:border-[#1f3d30] flex items-center gap-2 shadow-xs transition-transform hover:-translate-y-0.5">
                    <Leaf className="w-4 h-4 text-[#2d6a4f] dark:text-[#52b788]" /> 9.7g Plant Protein
                  </span>
                  <span className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#183126] border border-[#d8e6df] dark:border-[#1f3d30] flex items-center gap-2 shadow-xs transition-transform hover:-translate-y-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#2d6a4f] dark:text-[#52b788]" /> 0% Cholesterol &amp; Gluten-Free
                  </span>
                  <span className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#183126] border border-[#d8e6df] dark:border-[#1f3d30] flex items-center gap-2 shadow-xs transition-transform hover:-translate-y-0.5">
                    <Flame className="w-4 h-4 text-[#1b4332] dark:text-[#52b788]" /> Slow Roasted, Never Fried
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/shop"
                    className="w-full sm:w-auto bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] px-8 py-4 rounded-2xl font-black text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group active:scale-95"
                  >
                    <span>Shop The Lineup</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>

                  <Link
                    href="/combo-products"
                    className="w-full sm:w-auto bg-white dark:bg-[#183126] hover:bg-[#e8f5e9] text-[#1b4332] dark:text-[#e8f5e9] border border-[#1b4332]/20 dark:border-[#52b788]/30 px-8 py-4 rounded-2xl font-black text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2.5 active:scale-95"
                  >
                    <span>Combo Saver Boxes</span>
                    <span className="bg-[#1b4332] text-white dark:bg-[#52b788] dark:text-[#081c15] text-[10px] font-black px-2 py-0.5 rounded-full">
                      SAVE 30%
                    </span>
                  </Link>
                </div>

                {/* Social Proof Live Counter */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-[#d8e6df] dark:border-[#1f3d30]">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white dark:border-[#112019] bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-xs"
                      >
                        <Image
                          src={`/assets/banners/banner${i}.jpg`}
                          alt="Customer avatar"
                          width={36}
                          height={36}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-left text-xs">
                    <div className="flex items-center gap-1 text-[#1b4332] dark:text-[#52b788]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                      <span className="font-extrabold text-[#0f241d] dark:text-[#e8f5e9] ml-1">4.9/5 RATED</span>
                    </div>
                    <span className="text-[#406356] dark:text-[#749c8c] font-medium">Over 2,500,000+ Bags Munched</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Product with Floating Interactive Badges */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-6">
                {/* Floating Parallax Badges */}
                <div className="absolute -top-4 left-4 z-20 animate-float bg-white/95 dark:bg-[#183126]/95 backdrop-blur-md border border-[#1b4332]/20 dark:border-[#52b788]/30 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#e8f5e9] dark:bg-[#112019] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#406356] dark:text-[#749c8c] block">
                      Origin Certified
                    </span>
                    <span className="text-xs font-black text-[#0f241d] dark:text-[#e8f5e9]">
                      Mithila, Bihar 🌾
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-4 z-20 animate-float-reverse bg-white/95 dark:bg-[#183126]/95 backdrop-blur-md border border-[#1b4332]/20 dark:border-[#52b788]/30 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#e8f5e9] dark:bg-[#112019] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#406356] dark:text-[#749c8c] block">
                      Oil Standard
                    </span>
                    <span className="text-xs font-black text-[#0f241d] dark:text-[#e8f5e9]">
                      100% Olive Oil Roasted
                    </span>
                  </div>
                </div>

                {/* Hero Showcase Center Card */}
                <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1f3d30] group bg-[#f0f7f4] dark:bg-[#183126] flex items-center justify-center p-6">
                  <div className="absolute inset-0 overflow-hidden">
                    <video
                      src="/assets/videos/eating.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-[1.3] pointer-events-none"
                    />
                  </div>

                  {/* Floating Action Strip */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-[#112019]/90 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#1b4332] dark:text-[#52b788] block">
                        THE PERFECT CRUNCH
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-[#0f241d] dark:text-[#e8f5e9]">
                        Taste The Premium Difference
                      </h4>
                    </div>
                    <Link
                      href="/shop"
                      className="bg-[#1b4332] dark:bg-[#52b788] text-white dark:text-[#081c15] p-2.5 rounded-xl hover:bg-[#2d6a4f] transition-all active:scale-95 shadow-sm"
                      aria-label="Shop Now"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE TICKER MARQUEE (Zesty Snackz Inspired High-Energy Flavor Loop) */}
      <section className="bg-[#1b4332] text-white py-3.5 overflow-hidden shadow-md border-y border-[#2d6a4f]/50">
        <div className="animate-marquee flex items-center gap-8">
          {[...marqueeFlavors, ...marqueeFlavors, ...marqueeFlavors].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-black tracking-widest uppercase">
                {item.name}
              </span>
              <span className="text-[10px] font-extrabold bg-[#52b788] text-[#081c15] px-2 py-0.5 rounded-full shadow-xs">
                {item.tag}
              </span>
              <span className="text-xs text-[#52b788]">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CATEGORIES EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-black text-[#1b4332] dark:text-[#52b788] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <span>CRUNCH VARIETY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f241d] dark:text-[#e8f5e9] tracking-tight">
              Explore The Snack Lineup
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1b4332] dark:text-[#52b788] hover:underline group"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group p-5 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] hover:border-[#1b4332]/50 hover:shadow-xl card-hover-shadow flex flex-col items-center text-center space-y-3"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#e8f5e9]/60 dark:bg-[#183126] flex items-center justify-center group-hover:scale-108 transition-transform duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-[#0f241d] dark:text-[#e8f5e9] group-hover:text-[#1b4332] dark:group-hover:text-[#52b788] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[11px] font-semibold text-[#406356] dark:text-[#749c8c] mt-0.5">
                  {category.itemCount} Varieties
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. BESTSELLERS & POPULAR FLAVORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-black text-[#1b4332] dark:text-[#52b788] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#52b788]" />
              <span>THE FAN FAVORITES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f241d] dark:text-[#e8f5e9] tracking-tight">
              Most Craved Fox Nut Blends
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#e8f5e9]/70 dark:bg-[#183126] p-1.5 rounded-2xl border border-[#d8e6df] dark:border-[#1f3d30]">
            <button
              onClick={() => setSelectedCategoryTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                selectedCategoryTab === "all"
                  ? "bg-[#1b4332] text-white shadow-sm"
                  : "text-[#406356] dark:text-[#749c8c] hover:text-[#0f241d]"
              }`}
            >
              All Snacks
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryTab(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedCategoryTab === cat.slug
                    ? "bg-[#1b4332] text-white shadow-sm"
                    : "text-[#406356] dark:text-[#749c8c] hover:text-[#0f241d]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inWish = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] hover:border-[#1b4332]/40 hover:shadow-xl card-hover-shadow flex flex-col justify-between overflow-hidden relative"
              >
                {/* Product Status Badge */}
                {product.badge && (
                  <span className="absolute top-3.5 left-3.5 z-10 bg-[#1b4332] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full backdrop-blur-md transition-all shadow-sm ${
                    inWish
                      ? "bg-[#1b4332] text-white"
                      : "bg-white/90 dark:bg-[#183126]/90 text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332]"
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWish ? "fill-white" : ""}`} />
                </button>

                {/* Product Image Click */}
                <Link
                  href={`/shop/${product.slug}`}
                  className="relative aspect-square w-full overflow-hidden bg-[#f0f7f4] dark:bg-[#14261e] p-6 flex items-center justify-center block"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="object-contain group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black text-[#406356] dark:text-[#749c8c] uppercase tracking-widest">
                      {product.category} • {product.weight}
                    </span>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="text-base font-black text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors block leading-snug line-clamp-1"
                    >
                      {product.name}
                    </Link>

                    {/* Star Ratings */}
                    <div className="flex items-center gap-1.5 text-xs text-[#406356] dark:text-[#749c8c] pt-0.5">
                      <div className="flex items-center text-[#1b4332] dark:text-[#52b788]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-extrabold text-[#0f241d] dark:text-[#e8f5e9] ml-1">{product.rating}</span>
                      </div>
                      <span className="text-[11px] font-semibold">({product.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#d8e6df] dark:border-[#1f3d30]">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-[#1b4332] dark:text-[#52b788]">
                          ₹{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-[#406356] line-through font-semibold">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-[#406356] block">
                        Free delivery above ₹499
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="flex items-center gap-1.5 bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] text-xs font-black px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-95 uppercase tracking-wider"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. WHY GUSTOSA BENTO GRID (Pure White & Emerald Green Quality Promise) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-black text-[#1b4332] dark:text-[#52b788] uppercase tracking-widest">
            FARM TO CRUNCH INTEGRITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f241d] dark:text-[#e8f5e9] tracking-tight">
            Why Gustosa Fox Nuts Are Built Different
          </h2>
          <p className="text-sm text-[#406356] dark:text-[#749c8c] font-medium leading-relaxed">
            From the sacred wetland ponds of Mithila, Bihar to your snack bowl, we preserve heritage roasting with zero compromise on healthy fats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 */}
          <div className="rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] bg-gradient-to-br from-[#e8f5e9]/50 to-white dark:from-[#183126] dark:to-[#112019] p-8 flex flex-col justify-between space-y-6 shadow-sm card-hover-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#1b4332] text-white flex items-center justify-center shadow-md">
              <Leaf className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#0f241d] dark:text-[#e8f5e9]">
                Direct From Mithila Generational Farmers
              </h3>
              <p className="text-xs sm:text-sm text-[#406356] dark:text-[#749c8c] leading-relaxed font-medium">
                Over 90% of the world&apos;s finest lotus seeds originate in Bihar. We partner directly with local farming cooperatives to harvest the purest Grade-A jumbo seeds.
              </p>
            </div>
            <div className="text-xs font-black text-[#1b4332] dark:text-[#52b788] flex items-center gap-1.5">
              <span>Fair Trade &amp; Direct Sourcing</span>
              <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="relative rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] p-8 flex flex-col justify-between space-y-6 shadow-sm card-hover-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-[#000000]">
              <video
                src="/assets/videos/roasting.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.3] opacity-40 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/90 to-transparent z-0" />
            
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md">
              <Flame className="w-7 h-7" />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl font-black text-white drop-shadow-md">
                Slow-Roasted in Pure Olive Oil
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium drop-shadow-sm">
                Never fried in cheap palm oil or refined cottonseed blends. We gently roast our makhana in heart-healthy olive oil to preserve vital micronutrients.
              </p>
            </div>
            <div className="relative z-10 text-xs font-black text-[#52b788] flex items-center gap-1.5 drop-shadow-md">
              <span>0% Trans Fat &amp; Zero Cholesterol</span>
              <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Bento Card 3 */}
          <div className="rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] bg-gradient-to-br from-[#e8f5e9]/50 to-white dark:from-[#183126] dark:to-[#112019] p-8 flex flex-col justify-between space-y-6 shadow-sm card-hover-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#1b4332] text-[#52b788] flex items-center justify-center shadow-md">
              <Award className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#0f241d] dark:text-[#e8f5e9]">
                Artisan Botanical Spice Blends
              </h3>
              <p className="text-xs sm:text-sm text-[#406356] dark:text-[#749c8c] leading-relaxed font-medium">
                Crafted with Himalayan rock salt, sun-dried mint, farm-crushed black pepper, and real herbs. Completely free of synthetic MSG or artificial flavors.
              </p>
            </div>
            <div className="text-xs font-black text-[#1b4332] dark:text-[#52b788] flex items-center gap-1.5">
              <span>Clean Label &amp; 100% Vegetarian</span>
              <Check className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMBO VALUE PACKS PROMOTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#1b4332] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#2d6a4f]/60 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#52b788]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white text-[#1b4332] text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SUPER SAVER BUNDLE BOXES</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                Try Every Flavor &amp; Save Up To 35% On Bundles
              </h2>

              <p className="text-white/80 text-base leading-relaxed max-w-lg font-medium">
                Can&apos;t pick just one? Our combo variety packs bundle our top savory, spicy, and tangy flavors in family-sized value sets with free doorstep delivery across India.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/combo-products"
                  className="bg-[#52b788] hover:bg-[#40916c] text-[#081c15] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 active:scale-95"
                >
                  <span>Claim Combo Savings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bulk-order"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/25 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all"
                >
                  Corporate &amp; Bulk Orders
                </Link>
              </div>
            </div>

            {/* Right Combo Product Previews */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {comboPacks.slice(0, 2).map((combo) => (
                <div
                  key={combo.id}
                  className="bg-white/10 dark:bg-[#112019]/90 border border-white/20 p-4 rounded-2xl flex flex-col justify-between space-y-3 backdrop-blur-md"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white/20 flex items-center justify-center p-3">
                    <Image
                      src={combo.image}
                      alt={combo.name}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white line-clamp-1">
                      {combo.name}
                    </h4>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-sm font-black text-[#52b788]">
                        ₹{combo.price}
                      </span>
                      <button
                        onClick={() => addToCart(combo, 1)}
                        className="bg-[#52b788] hover:bg-white text-[#081c15] p-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
                        aria-label="Add Combo to Cart"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-black text-[#1b4332] dark:text-[#52b788] uppercase tracking-widest">
            AUTHENTIC COMMUNITY LOVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f241d] dark:text-[#e8f5e9] tracking-tight">
            Loved By Healthy Snackers Across India
          </h2>
          <p className="text-sm text-[#406356] dark:text-[#749c8c] font-medium">
            Over 25,000+ verified customer reviews celebrating our crunch, spice balance, and healthy energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] hover:shadow-xl card-hover-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#1b4332] dark:text-[#52b788]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#0f241d]/90 dark:text-[#e8f5e9]/90 italic leading-relaxed font-medium">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#d8e6df] dark:border-[#1f3d30]">
                <div>
                  <h4 className="text-sm font-black text-[#0f241d] dark:text-[#e8f5e9]">{review.name}</h4>
                  <span className="text-xs text-[#406356] dark:text-[#749c8c]">{review.location}</span>
                </div>
                <span className="text-[10px] bg-[#e8f5e9] text-[#1b4332] dark:bg-[#183126] dark:text-[#52b788] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LATEST HEALTH BLOGS & NUTRITION TIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-black text-[#1b4332] dark:text-[#52b788] uppercase tracking-widest mb-1">
              CLEAN EATING SCIENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f241d] dark:text-[#e8f5e9] tracking-tight">
              Makhana Nutrition &amp; Guides
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1b4332] dark:text-[#52b788] hover:underline group"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] overflow-hidden hover:shadow-xl card-hover-shadow flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-[#e8f5e9]/60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#1b4332] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-[#406356] dark:text-[#749c8c] flex items-center gap-2 font-medium">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-base font-black text-[#0f241d] dark:text-[#e8f5e9] group-hover:text-[#1b4332] dark:group-hover:text-[#52b788] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-[#406356] dark:text-[#749c8c] line-clamp-2 leading-relaxed font-medium">
                    {blog.summary}
                  </p>
                </div>

                <div className="text-xs font-black uppercase tracking-wider text-[#1b4332] dark:text-[#52b788] flex items-center gap-1 pt-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. FAQS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-black text-[#1b4332] dark:text-[#52b788] uppercase tracking-widest">
            SNACK CLARITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0f241d] dark:text-[#e8f5e9]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#406356] dark:text-[#749c8c] font-medium">
            Everything you need to know about our Bihar farm harvest, roasting process, shelf-life, and delivery.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#406356] dark:text-[#749c8c] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-90 text-[#1b4332] dark:text-[#52b788]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#406356] dark:text-[#749c8c] leading-relaxed border-t border-[#d8e6df]/50 dark:border-[#1f3d30]/50 pt-3 animate-in fade-in duration-200 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
