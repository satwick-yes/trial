"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#182420] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#e76f51] fill-[#e76f51]" />
            <h2 className="text-lg font-bold text-foreground">
              Your Wishlist ({wishlist.length})
            </h2>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <Heart className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Your wishlist is empty</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                  Save your favorite crunchy makhana snack packs and combos to buy anytime!
                </p>
              </div>
              <Link
                href="/shop"
                onClick={() => setIsWishlistOpen(false)}
                className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1e4936] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm"
              >
                Browse Snacks
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="flex gap-3.5 p-3 rounded-2xl border border-border bg-card hover:border-[#2d6a4f]/30 transition-all"
              >
                {/* Product Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-foreground leading-snug line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{product.weight}</p>
                    </div>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="text-muted-foreground hover:text-destructive p-1 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-[#2d6a4f]">
                      ₹{product.price}
                    </span>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        toggleWishlist(product);
                      }}
                      className="flex items-center gap-1.5 bg-[#2d6a4f] hover:bg-[#1e4936] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
