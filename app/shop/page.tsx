"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Filter,
  SlidersHorizontal,
  Star,
  ShoppingBag,
  Heart,
  Sparkles,
  ArrowUpDown,
  Check,
  Package,
  Flame,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/gustosa-data";
import { useCart } from "@/lib/cart-context";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedFlavor, setSelectedFlavor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Extract unique flavor profiles
  const flavorProfiles = useMemo(() => {
    const flavors = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (p.flavorProfile) flavors.add(p.flavorProfile);
    });
    return Array.from(flavors);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Flavor filter
      if (selectedFlavor !== "all" && product.flavorProfile !== selectedFlavor) {
        return false;
      }
      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // featured / default
    });
  }, [selectedCategory, selectedFlavor, sortBy, inStockOnly]);

  return (
    <div className="bg-[#fbfdfc] dark:bg-[#0b1410] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Shop All Snacks</span>
        </div>

        {/* Hero Banner Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] text-white p-8 sm:p-12 mb-10 shadow-xl border border-[#2d6a4f]/40">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none hidden md:block">
            <Image
              src="/assets/banners/banner1.jpg"
              alt="Gustosa Fox Nuts Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#52b788] border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Roasted Bihar Makhana</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Gourmet Healthy Snacking, <br className="hidden sm:inline" />
              <span className="text-[#52b788]">Zero Compromise.</span>
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
              Explore our complete selection of slow-roasted fox nuts infused with authentic olive oil and natural spices. Zero trans fats, high plant protein, and gluten-free.
            </p>
          </div>
        </div>

        {/* Filter & Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filter */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-[#112019] p-6 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] shadow-sm sticky top-28 space-y-6">
              <div className="flex items-center justify-between border-b border-[#d8e6df] dark:border-[#1f3d30] pb-4">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <SlidersHorizontal className="w-4 h-4 text-[#1b4332] dark:text-[#52b788]" />
                  <span>Filter Snacks</span>
                </div>
                {(selectedCategory !== "all" || selectedFlavor !== "all" || inStockOnly) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedFlavor("all");
                      setInStockOnly(false);
                    }}
                    className="text-xs text-[#1b4332] dark:text-[#52b788] hover:underline font-semibold"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Categories
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === "all"
                        ? "bg-[#1b4332] text-white shadow-sm"
                        : "text-muted-foreground hover:bg-[#e8f5e9] dark:hover:bg-[#183126]"
                    }`}
                  >
                    <span>All Snacks</span>
                    <span className="text-[11px] opacity-80">{PRODUCTS.length}</span>
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        selectedCategory === cat.slug
                          ? "bg-[#1b4332] text-white shadow-sm"
                          : "text-muted-foreground hover:bg-[#e8f5e9] dark:hover:bg-[#183126]"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[11px] opacity-80">{cat.itemCount}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavor Profile */}
              <div className="space-y-3 border-t border-[#d8e6df] dark:border-[#1f3d30] pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Flavor Profile
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedFlavor("all")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      selectedFlavor === "all"
                        ? "bg-[#1b4332] text-white"
                        : "bg-[#e8f5e9] dark:bg-[#183126] text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All Flavors
                  </button>
                  {flavorProfiles.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        selectedFlavor === flavor
                          ? "bg-[#1b4332] text-white"
                          : "bg-[#e8f5e9] dark:bg-[#183126] text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="space-y-3 border-t border-[#d8e6df] dark:border-[#1f3d30] pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Availability
                </h4>
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-foreground font-medium">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1b4332] focus:ring-[#1b4332] accent-[#1b4332]"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

              {/* Quality Guarantee Box */}
              <div className="p-4 rounded-2xl bg-[#e8f5e9]/60 dark:bg-[#183126]/60 border border-[#d8e6df] dark:border-[#1f3d30] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#1b4332] dark:text-[#52b788] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Gustosa Quality Promise</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Slow-roasted in natural olive oil. No preservatives, no MSG, no artificial colors.
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sorting & Filter Header Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-[#112019] p-4 rounded-2xl border border-[#d8e6df] dark:border-[#1f3d30]">
              <div className="text-xs text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredProducts.length}</span>{" "}
                flavor variations
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden flex items-center gap-2 bg-[#e8f5e9] dark:bg-[#183126] text-foreground px-3.5 py-2 rounded-xl text-xs font-bold"
                >
                  <Filter className="w-3.5 h-3.5 text-[#1b4332] dark:text-[#52b788]" />
                  <span>Filter</span>
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground hidden sm:block" />
                  <span className="text-xs text-muted-foreground hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#e8f5e9] dark:bg-[#183126] text-foreground text-xs font-semibold px-3 py-2 rounded-xl outline-none border border-[#d8e6df] dark:border-[#1f3d30] focus:border-[#1b4332] cursor-pointer"
                  >
                    <option value="featured">Featured & Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filter Dropdown */}
            {mobileFilterOpen && (
              <div className="lg:hidden bg-white dark:bg-[#112019] p-5 rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] shadow-lg space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-[#d8e6df] dark:border-[#1f3d30] pb-3">
                  <span className="font-bold text-sm text-foreground">Select Category</span>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-xs font-bold text-[#1b4332] dark:text-[#52b788]"
                  >
                    Done
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                      selectedCategory === "all" ? "bg-[#1b4332] text-white" : "bg-[#e8f5e9] dark:bg-[#183126]"
                    }`}
                  >
                    All Snacks
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                        selectedCategory === cat.slug ? "bg-[#1b4332] text-white" : "bg-[#e8f5e9] dark:bg-[#183126]"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white dark:bg-[#112019] rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center mx-auto text-muted-foreground">
                  <Package className="w-8 h-8 opacity-40 text-[#1b4332] dark:text-[#52b788]" />
                </div>
                <h3 className="text-lg font-bold text-foreground">No snacks match your filters</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Try adjusting or clearing your active filters to see all delicious roasted fox nuts.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedFlavor("all");
                    setInStockOnly(false);
                  }}
                  className="bg-[#1b4332] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#2d6a4f] transition-all inline-block"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = isInWishlist(product.id);
                  return (
                    <div
                      key={product.id}
                      className="group bg-white dark:bg-[#112019] rounded-3xl border border-[#d8e6df] dark:border-[#1f3d30] overflow-hidden card-hover-shadow flex flex-col relative"
                    >
                      {/* Badge Top Left */}
                      {product.badge && (
                        <div className="absolute top-3.5 left-3.5 z-10 bg-[#1b4332] dark:bg-[#52b788] text-white dark:text-[#081c15] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md tracking-wider">
                          {product.badge}
                        </div>
                      )}

                      {/* Wishlist Button Top Right */}
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-[#112019]/90 backdrop-blur-md border border-[#d8e6df] dark:border-[#1f3d30] flex items-center justify-center text-foreground hover:text-[#1b4332] dark:hover:text-[#52b788] transition-colors shadow-sm"
                        aria-label="Add to wishlist"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isWishlisted ? "fill-[#1b4332] dark:fill-[#52b788] text-[#1b4332] dark:text-[#52b788]" : ""
                          }`}
                        />
                      </button>

                      {/* Product Image Link */}
                      <Link
                        href={`/shop/${product.slug}`}
                        className="relative w-full aspect-square bg-[#e8f5e9]/20 dark:bg-[#14261e] overflow-hidden flex items-center justify-center p-6 border-b border-[#d8e6df]/50 dark:border-[#1f3d30]/50"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={320}
                          height={320}
                          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      {/* Card Content Details */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                            <span className="font-bold uppercase tracking-wider text-[#1b4332] dark:text-[#52b788]">
                              {product.category}
                            </span>
                            <span>{product.weight}</span>
                          </div>

                          <Link href={`/shop/${product.slug}`} className="block">
                            <h3 className="font-bold text-foreground group-hover:text-[#1b4332] dark:group-hover:text-[#52b788] transition-colors text-base line-clamp-1">
                              {product.name}
                            </h3>
                          </Link>

                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Rating & Flavor Profile */}
                        <div className="flex items-center justify-between text-xs pt-1">
                          <div className="flex items-center gap-1 text-[#52b788]">
                            <Star className="w-3.5 h-3.5 fill-[#52b788]" />
                            <span className="font-bold text-foreground text-xs">{product.rating}</span>
                            <span className="text-[10px] text-muted-foreground">
                              ({product.reviewsCount})
                            </span>
                          </div>
                          {product.flavorProfile && (
                            <span className="text-[10px] bg-[#e8f5e9] dark:bg-[#183126] text-[#1b4332] dark:text-[#52b788] font-bold px-2.5 py-0.5 rounded-full border border-[#d8e6df] dark:border-[#1f3d30]">
                              {product.flavorProfile}
                            </span>
                          )}
                        </div>

                        {/* Price & Action */}
                        <div className="flex items-center justify-between pt-2 border-t border-[#d8e6df] dark:border-[#1f3d30]">
                          <div>
                            <div className="text-base font-extrabold text-[#1b4332] dark:text-[#52b788]">
                              ₹{product.price}
                            </div>
                            {product.originalPrice > product.price && (
                              <div className="text-[11px] text-muted-foreground line-through">
                                ₹{product.originalPrice}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => addToCart(product, 1)}
                            className="bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fbfdfc] dark:bg-[#0b1410] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#1b4332] dark:border-[#52b788] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
