"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 499;
  const progressToFreeShipping = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const amountNeeded = freeShippingThreshold - cartTotal;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#112019] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#d8e6df] dark:border-[#1f3d30]">
        {/* Header */}
        <div className="p-5 border-b border-[#d8e6df] dark:border-[#1f3d30] flex items-center justify-between bg-[#fbfdfc] dark:bg-[#0b1410]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h2 className="text-base font-extrabold text-foreground">
              Your Cart ({cartCount})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="p-4 bg-[#e8f5e9]/60 dark:bg-[#183126]/60 border-b border-[#d8e6df] dark:border-[#1f3d30]">
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span>
              {amountNeeded <= 0 ? (
                <span className="text-[#1b4332] dark:text-[#52b788] flex items-center gap-1 font-extrabold">
                  🎉 FREE Shipping Unlocked!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#1b4332] dark:text-[#52b788]">₹{amountNeeded}</strong> more for <strong>FREE Delivery</strong>
                </span>
              )}
            </span>
            <span className="text-muted-foreground text-[11px] font-bold">{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full bg-[#d8e6df] dark:bg-[#1f3d30] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#1b4332] dark:bg-[#52b788] h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#e8f5e9] dark:bg-[#183126] flex items-center justify-center text-[#1b4332] dark:text-[#52b788]">
                <ShoppingBag className="w-9 h-9 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-foreground">Your cart is empty</h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs leading-relaxed">
                  Discover our freshly roasted, olive-oil tossed Bihar fox nut packs and build your healthy basket!
                </p>
              </div>
              <Link
                href="/shop"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center gap-2 bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
              >
                Explore Shop
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3.5 p-3.5 rounded-2xl border border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] hover:border-[#1b4332]/40 transition-all shadow-xs"
              >
                {/* Product Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#e8f5e9]/30 dark:bg-[#183126]/30 flex-shrink-0 flex items-center justify-center p-2 border border-[#d8e6df]/50 dark:border-[#1f3d30]/50">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-snug line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-medium">{item.product.weight}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-red-500 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#d8e6df] dark:border-[#1f3d30] rounded-lg overflow-hidden bg-[#fbfdfc] dark:bg-[#0b1410]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="text-sm font-extrabold text-[#1b4332] dark:text-[#52b788]">
                        ₹{item.product.price * item.quantity}
                      </span>
                      {item.product.originalPrice > item.product.price && (
                        <span className="block text-[10px] text-muted-foreground line-through">
                          ₹{item.product.originalPrice * item.quantity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#d8e6df] dark:border-[#1f3d30] bg-[#fbfdfc] dark:bg-[#0b1410] space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-bold text-foreground">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>
                  {amountNeeded <= 0 ? (
                    <span className="text-[#1b4332] dark:text-[#52b788] font-black">FREE</span>
                  ) : (
                    "Calculated at checkout"
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-foreground pt-2 border-t border-[#d8e6df] dark:border-[#1f3d30]">
                <span>Estimated Total</span>
                <span className="text-base font-extrabold text-[#1b4332] dark:text-[#52b788]">₹{cartTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  alert(
                    "Order request received! In demo mode, our team will process your order with contact: hello@gustosafoods.com or WhatsApp +91-81000 03505."
                  );
                }}
                className="w-full bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1 pt-1">
                <span>🔒 100% Secure Checkout</span>
                <button
                  onClick={clearCart}
                  className="hover:text-red-500 underline transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
