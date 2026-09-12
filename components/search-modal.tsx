"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Tag, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS, CATEGORIES } from "@/lib/gustosa-data";

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  // Filter products
  const searchResults = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.flavorProfile?.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = [
    "Pudina Makhana",
    "Peri Peri",
    "Cream & Onion",
    "Himalayan Salt",
    "Combo Packs",
    "Jumbo Jar"
  ];

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#182420] rounded-3xl shadow-2xl overflow-hidden z-10 border border-border animate-in zoom-in-95 duration-200">
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-border flex items-center gap-3 bg-muted/20">
          <Search className="w-6 h-6 text-[#2d6a4f] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search healthy snacks, flavors, combos (e.g. Pudina, Peri Peri)..."
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base sm:text-lg font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1.5 rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-bold uppercase tracking-wider bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded-xl transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Body Content */}
        <div className="max-h-[60vh] overflow-y-auto p-5">
          {query.trim() === "" ? (
            <div className="space-y-6 py-2">
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4 text-[#e9c46a]" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3.5 py-1.5 rounded-xl border border-border bg-card text-xs font-medium text-foreground hover:border-[#2d6a4f] hover:text-[#2d6a4f] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Browse Categories */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  <Tag className="w-4 h-4 text-[#2d6a4f]" />
                  <span>Browse by Category</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop?category=${cat.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-3 rounded-2xl border border-border bg-card/60 hover:bg-[#2d6a4f]/10 hover:border-[#2d6a4f]/30 transition-all text-left group"
                    >
                      <span className="text-sm font-bold text-foreground group-hover:text-[#2d6a4f] block">
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {cat.itemCount} items
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
                <Search className="w-8 h-8 opacity-40" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                No matching snacks found for &ldquo;{query}&rdquo;
              </h3>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Try searching for flavor names like Pudina, Cheese, Tangy Tomato, Salted, or explore all snacks.
              </p>
              <Link
                href="/shop"
                onClick={() => setIsSearchOpen(false)}
                className="inline-block mt-2 text-xs font-bold text-[#2d6a4f] hover:underline"
              >
                Browse Full Catalog →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-muted-foreground">
                Found {searchResults.length} {searchResults.length === 1 ? "result" : "results"}
              </div>

              <div className="divide-y divide-border">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-4 py-3 group"
                  >
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-[#2d6a4f] transition-colors truncate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                          <span>{product.weight}</span>
                          <span>•</span>
                          <span className="font-semibold text-[#2d6a4f]">₹{product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="line-through text-[11px]">₹{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </Link>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        setIsSearchOpen(false);
                      }}
                      className="shrink-0 bg-[#2d6a4f]/10 hover:bg-[#2d6a4f] text-[#2d6a4f] hover:text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                    >
                      Add +
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Need help choosing snacks?</span>
          <Link
            href="/contact"
            onClick={() => setIsSearchOpen(false)}
            className="font-bold text-[#2d6a4f] hover:underline flex items-center gap-1"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
