"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  Leaf,
  Flame,
  Scale,
  Award,
  Share2,
  Check
} from "lucide-react";
import { PRODUCTS, Product } from "@/lib/gustosa-data";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#fbfdfc] dark:bg-[#0b1410]">
        <h2 className="text-2xl font-bold text-foreground">Snack Not Found</h2>
        <p className="text-sm text-muted-foreground mt-2">
          The requested gourmet snack could not be located.
        </p>
        <Link
          href="/shop"
          className="mt-4 bg-[#1b4332] dark:bg-[#52b788] text-white dark:text-[#081c15] px-6 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#2d6a4f]"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState<"nutritional" | "ingredients" | "benefits">("nutritional");
  const [copied, setCopied] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isWishlisted = isInWishlist(product.id);

  // Gallery items (primary + secondaries)
  const gallery = [product.image, ...(product.secondaryImages || [])];

  // Related products from same category or random
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#fbfdfc] dark:bg-[#0b1410] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/shop?category=${product.categorySlug}`}
            className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Gallery View */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full rounded-3xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] overflow-hidden p-8 flex items-center justify-center shadow-sm">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-[#1b4332] dark:bg-[#52b788] text-white dark:text-[#081c15] text-xs font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                  {product.badge}
                </div>
              )}

              <button
                onClick={handleShare}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-[#183126]/90 backdrop-blur-md border border-[#d8e6df] dark:border-[#1f3d30] flex items-center justify-center text-[#406356] hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors shadow-sm"
                aria-label="Share product link"
                title="Share link"
              >
                {copied ? <Check className="w-4 h-4 text-[#52b788]" /> : <Share2 className="w-4 h-4" />}
              </button>

              <Image
                src={selectedImage}
                alt={product.name}
                width={500}
                height={500}
                priority
                className="object-contain w-full h-full max-h-[420px] transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnail selector if multiple images */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-2xl bg-white dark:bg-[#112019] border p-2 overflow-hidden shrink-0 transition-all ${
                      selectedImage === img
                        ? "border-[#1b4332] dark:border-[#52b788] ring-2 ring-[#1b4332]/20 dark:ring-[#52b788]/20"
                        : "border-[#d8e6df] dark:border-[#1f3d30] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#1b4332] dark:text-[#52b788] bg-[#e8f5e9] dark:bg-[#183126] px-3 py-1 rounded-full border border-[#d8e6df] dark:border-[#1f3d30]">
                  {product.category}
                </span>
                {product.flavorProfile && (
                  <span className="text-xs font-semibold text-[#406356] dark:text-[#749c8c]">
                    Flavor: <strong className="text-foreground">{product.flavorProfile}</strong>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f241d] dark:text-[#e8f5e9] tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Rating & reviews */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-1 text-[#52b788]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#52b788]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewsCount} verified customer ratings)
                </span>
              </div>
            </div>

            {/* Pricing Strip */}
            <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] shadow-sm">
              <span className="text-3xl font-extrabold text-[#1b4332] dark:text-[#52b788]">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-xs font-black text-[#1b4332] dark:text-[#52b788] ml-auto bg-[#e8f5e9] dark:bg-[#183126] px-3 py-1 rounded-lg border border-[#d8e6df] dark:border-[#1f3d30]">
                Save ₹{product.originalPrice - product.price} (
                {Math.round(
                  ((product.originalPrice - product.price) / product.originalPrice) * 100
                )}
                % OFF)
              </span>
            </div>

            {/* Weight & Description */}
            <div className="space-y-3">
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#1b4332] dark:text-[#52b788]" />
                <span>
                  Net Weight: <strong className="text-foreground">{product.weight}</strong>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Quality Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] text-xs font-medium">
                <Leaf className="w-4 h-4 text-[#52b788]" />
                <span>100% Plant Protein</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] text-xs font-medium">
                <Flame className="w-4 h-4 text-[#1b4332] dark:text-[#52b788]" />
                <span>Slow Olive Roasted</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-[#112019] border border-[#d8e6df] dark:border-[#1f3d30] text-xs font-medium">
                <Award className="w-4 h-4 text-[#52b788]" />
                <span>Zero Cholesterol</span>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Action */}
            <div className="space-y-4 pt-4 border-t border-[#d8e6df] dark:border-[#1f3d30]">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#d8e6df] dark:border-[#1f3d30] rounded-2xl bg-white dark:bg-[#112019] p-1 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl hover:bg-[#e8f5e9] dark:hover:bg-[#183126] flex items-center justify-center text-foreground transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-sm text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl hover:bg-[#e8f5e9] dark:hover:bg-[#183126] flex items-center justify-center text-foreground transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart • ₹{product.price * quantity}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${
                    isWishlisted
                      ? "border-[#1b4332] dark:border-[#52b788] bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788]"
                      : "border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-[#1b4332] dark:fill-[#52b788]" : ""}`} />
                </button>
              </div>

              {/* Guarantees Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5 justify-center text-center p-2 rounded-xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30]">
                  <Truck className="w-3.5 h-3.5 text-[#1b4332] dark:text-[#52b788]" />
                  <span>Free shipping &gt; ₹499</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center text-center p-2 rounded-xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1b4332] dark:text-[#52b788]" />
                  <span>FSSAI Certified</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center text-center p-2 rounded-xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30]">
                  <RotateCcw className="w-3.5 h-3.5 text-[#1b4332] dark:text-[#52b788]" />
                  <span>Freshness Packed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Breakdown & Ingredients Tabs */}
        <div className="bg-white dark:bg-[#112019] rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex border-b border-[#d8e6df] dark:border-[#1f3d30] gap-6">
            <button
              onClick={() => setActiveTab("nutritional")}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === "nutritional"
                  ? "text-[#1b4332] dark:text-[#52b788] border-b-2 border-[#1b4332] dark:border-[#52b788]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Nutritional Facts
            </button>
            <button
              onClick={() => setActiveTab("ingredients")}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === "ingredients"
                  ? "text-[#1b4332] dark:text-[#52b788] border-b-2 border-[#1b4332] dark:border-[#52b788]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ingredients & Spice Blend
            </button>
            <button
              onClick={() => setActiveTab("benefits")}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === "benefits"
                  ? "text-[#1b4332] dark:text-[#52b788] border-b-2 border-[#1b4332] dark:border-[#52b788]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Health Benefits
            </button>
          </div>

          {/* Tab 1: Nutritional Info */}
          {activeTab === "nutritional" && (
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground">
                Approximate values per 100g serving of slow-roasted Bihar fox nuts:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Calories</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.calories}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Plant Protein</span>
                  <span className="text-lg font-extrabold text-[#1b4332] dark:text-[#52b788]">
                    {product.nutritionalInfo.protein}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Dietary Fiber</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.dietaryFiber}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Fats (Olive Oil)</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.fats}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Carbohydrates</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.carbohydrates}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Calcium</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.calcium}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Potassium</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.potassium}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#e8f5e9]/50 dark:bg-[#183126]/50 border border-[#d8e6df] dark:border-[#1f3d30] text-center">
                  <span className="text-xs text-muted-foreground block">Sodium</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {product.nutritionalInfo.sodium}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Ingredients */}
          {activeTab === "ingredients" && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-foreground">100% Honest Natural Ingredients</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.ingredients.map((ing, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#e8f5e9]/30 dark:bg-[#183126]/30 border border-[#d8e6df] dark:border-[#1f3d30] text-xs text-foreground font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab 3: Benefits */}
          {activeTab === "benefits" && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-foreground">Why Nutritionists Love Bihar Makhana</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#e8f5e9]/30 dark:bg-[#183126]/30 border border-[#d8e6df] dark:border-[#1f3d30]"
                  >
                    <Sparkles className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* You May Also Like Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              Other Popular Flavors You&apos;ll Love
            </h2>
            <Link
              href="/shop"
              className="text-xs font-bold text-[#1b4332] dark:text-[#52b788] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="bg-white dark:bg-[#112019] rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] p-5 flex flex-col justify-between card-hover-shadow"
              >
                <Link
                  href={`/shop/${rel.slug}`}
                  className="relative aspect-square w-full rounded-2xl bg-[#e8f5e9]/20 dark:bg-[#14261e] p-4 flex items-center justify-center overflow-hidden mb-4 border border-[#d8e6df]/50 dark:border-[#1f3d30]/50"
                >
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    width={220}
                    height={220}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                </Link>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#1b4332] dark:text-[#52b788] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <Link href={`/shop/${rel.slug}`}>
                    <h3 className="text-sm font-bold text-foreground hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors line-clamp-1">
                      {rel.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-extrabold text-foreground">₹{rel.price}</span>
                    <button
                      onClick={() => addToCart(rel, 1)}
                      className="bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
