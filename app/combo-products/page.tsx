"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Package,
  Gift,
  Flame,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { PRODUCTS, Product } from "@/lib/gustosa-data";
import { useCart } from "@/lib/cart-context";

export default function ComboProductsPage() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Extract combo products + value packs
  const comboProducts = PRODUCTS.filter((p) => p.isCombo || p.categorySlug === "combos");

  return (
    <div className="bg-[#fbfdfc] dark:bg-[#0b1410] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Value Combo Packs</span>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden text-white p-8 sm:p-14 shadow-xl border border-[#2d6a4f]/40 min-h-[320px] flex items-center">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 bg-[#000000]">
            <video
              src="/assets/videos/combo_gift_box.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 scale-[1.3] pointer-events-none"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/90 to-transparent z-0" />
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#52b788] text-[#081c15] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <Gift className="w-3.5 h-3.5" />
              <span>Huge Savings • Save Up to 25%</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md">
              Curated Combo Packs &amp; <br />
              <span className="text-[#52b788] drop-shadow-md">Multi-Flavor Variety Boxes</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed drop-shadow-sm font-medium">
              Why stick to one flavor when you can taste them all? Experience our handcrafted assortment bundles featuring Peri Peri, Pudina, Cream &amp; Onion, and Himalayan Salt at unbeatable combo prices.
            </p>
          </div>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white dark:bg-[#112019] rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] overflow-hidden card-hover-shadow flex flex-col relative"
              >
                {/* Save Tag */}
                <div className="absolute top-4 left-4 z-10 bg-[#1b4332] dark:bg-[#52b788] text-white dark:text-[#081c15] text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                  {product.badge || "Value Pack"}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-[#112019]/90 backdrop-blur-md border border-[#d8e6df] dark:border-[#1f3d30] flex items-center justify-center text-foreground hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors shadow-sm"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted ? "fill-[#1b4332] dark:fill-[#52b788] text-[#1b4332] dark:text-[#52b788]" : ""
                    }`}
                  />
                </button>

                {/* Image */}
                <Link
                  href={`/shop/${product.slug}`}
                  className="relative aspect-square w-full bg-[#e8f5e9]/20 dark:bg-[#14261e] p-8 flex items-center justify-center overflow-hidden border-b border-[#d8e6df]/50 dark:border-[#1f3d30]/50"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={360}
                    height={360}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-bold text-[#1b4332] dark:text-[#52b788] uppercase tracking-wider">{product.category}</span>
                      <span>{product.weight}</span>
                    </div>

                    <Link href={`/shop/${product.slug}`} className="block">
                      <h3 className="font-extrabold text-foreground group-hover:text-[#1b4332] dark:group-hover:text-[#52b788] transition-colors text-lg">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Flavors Included Pill List */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-foreground block mb-1.5">
                        Assorted Flavors Included:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] px-2.5 py-0.5 rounded-full font-bold border border-[#d8e6df] dark:border-[#1f3d30]">
                          Spicy Peri Peri
                        </span>
                        <span className="text-[10px] bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] px-2.5 py-0.5 rounded-full font-bold border border-[#d8e6df] dark:border-[#1f3d30]">
                          Pudina Fresh
                        </span>
                        <span className="text-[10px] bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] px-2.5 py-0.5 rounded-full font-bold border border-[#d8e6df] dark:border-[#1f3d30]">
                          Cream & Onion
                        </span>
                        <span className="text-[10px] bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] px-2.5 py-0.5 rounded-full font-bold border border-[#d8e6df] dark:border-[#1f3d30]">
                          Pink Salt
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Add to Cart */}
                  <div className="pt-4 border-t border-[#d8e6df] dark:border-[#1f3d30] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-extrabold text-[#1b4332] dark:text-[#52b788]">
                          ₹{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-muted-foreground line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-black text-[#1b4332] dark:text-[#52b788] bg-[#e8f5e9] dark:bg-[#183126] px-2 py-0.5 rounded-md border border-[#d8e6df] dark:border-[#1f3d30]">
                        Save ₹{product.originalPrice - product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add Combo to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Gifting & Custom Combos Banner */}
        <div className="bg-white dark:bg-[#112019] rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-[#1b4332] dark:text-[#52b788] font-bold text-xs uppercase tracking-wider">
              <Gift className="w-4 h-4" />
              <span>Festive &amp; Corporate Gifting</span>
            </div>
            <h3 className="text-2xl font-extrabold text-foreground">
              Looking for Custom Gift Hampers for Weddings or Festivals?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We create customized branded gift boxes with personalized greetings, satin ribbon packaging, and your choice of gourmet roasted fox nut jars.
            </p>
          </div>

          <Link
            href="/bulk-order"
            className="bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] px-6 py-3.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 shadow-md"
          >
            <span>Inquire Bulk Gifting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
