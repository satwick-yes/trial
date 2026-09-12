"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Leaf
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { BRAND_INFO, CATEGORIES } from "@/lib/gustosa-data";

export function Header() {
  const pathname = usePathname();
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop", hasDropdown: true },
    { name: "Combo Packs", href: "/combo-products", badge: "Value" },
    { name: "Bulk Order", href: "/bulk-order" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Dynamic Top Announcement Marquee Bar */}
      <div className="bg-[#1b4332] text-white text-xs py-2 px-4 border-b border-[#2d6a4f]/40 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium overflow-hidden whitespace-nowrap">
            <span className="bg-white text-[#1b4332] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
              FREE SHIPPING
            </span>
            <span className="hidden sm:inline text-white/90">
              On all orders above ₹499 &amp; Combo Packs across India!
            </span>
            <span className="sm:hidden text-white/90 truncate">
              Free Delivery above ₹499!
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-white/85">
            <a
              href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#52b788]" />
              <span>{BRAND_INFO.contact.phone}</span>
            </a>
            <a
              href={`mailto:${BRAND_INFO.contact.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#52b788]" />
              <span>{BRAND_INFO.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#112019]/90 backdrop-blur-xl border-b border-[#d8e6df] dark:border-[#1f3d30] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-2xl bg-[#1b4332]/5 dark:bg-[#52b788]/10 p-1.5 flex items-center justify-center transition-all group-hover:scale-105 border border-[#1b4332]/10 dark:border-[#52b788]/20 shadow-sm">
                <Image
                  src="/assets/brand/logo.png"
                  alt="Gustosa Foods Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#1b4332] dark:text-[#52b788] leading-tight flex items-center gap-0.5">
                  Gustosa<span className="w-2 h-2 rounded-full bg-[#52b788] inline-block ml-0.5 animate-pulse" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#406356] dark:text-[#749c8c]">
                  Bihar Roasted Fox Nuts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setShopDropdown(true)}
                      onMouseLeave={() => setShopDropdown(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? "text-white bg-[#1b4332] shadow-sm"
                            : "text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332] dark:hover:text-[#52b788] hover:bg-[#e8f5e9]/70 dark:hover:bg-[#183126]"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </Link>

                      {/* Dropdown Menu */}
                      {shopDropdown && (
                        <div className="absolute top-full left-0 w-72 pt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="bg-white dark:bg-[#112019] rounded-2xl border border-[#d8e6df] dark:border-[#1f3d30] p-3 shadow-xl space-y-1">
                            <div className="text-[10px] font-bold text-[#406356] uppercase px-3 py-1 tracking-wider">
                              Product Categories
                            </div>
                            {CATEGORIES.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/shop?category=${cat.slug}`}
                                className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-colors group/item"
                              >
                                <span className="text-xs font-bold text-[#0f241d] dark:text-[#e8f5e9] group-hover/item:text-[#1b4332] dark:group-hover/item:text-[#52b788]">
                                  {cat.name}
                                </span>
                                <span className="text-[11px] text-[#406356] dark:text-[#749c8c] truncate mt-0.5">
                                  {cat.description}
                                </span>
                              </Link>
                            ))}
                            <div className="pt-2 border-t border-[#d8e6df] dark:border-[#1f3d30]">
                              <Link
                                href="/shop"
                                className="block px-3 py-1.5 text-xs font-bold text-[#1b4332] dark:text-[#52b788] hover:underline"
                              >
                                Browse Full Catalog →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "text-white bg-[#1b4332] shadow-sm"
                        : "text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332] dark:hover:text-[#52b788] hover:bg-[#e8f5e9]/70 dark:hover:bg-[#183126]"
                    }`}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="bg-[#52b788] text-[#081c15] text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-xl text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332] dark:hover:text-[#52b788] hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-all"
                aria-label="Search snacks"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 rounded-xl text-[#0f241d] dark:text-[#e8f5e9] hover:text-[#1b4332] dark:hover:text-[#52b788] hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-all"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-[#1b4332] dark:bg-[#52b788] text-white dark:text-[#081c15] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 bg-[#1b4332] hover:bg-[#2d6a4f] dark:bg-[#52b788] dark:hover:bg-[#40916c] text-white dark:text-[#081c15] px-4 sm:px-5 py-2.5 rounded-2xl font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-white text-[#1b4332] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs tracking-wide">
                  Cart {cartCount > 0 ? `(${cartCount})` : ""}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#0f241d] dark:text-[#e8f5e9] hover:bg-[#e8f5e9] dark:hover:bg-[#183126] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#d8e6df] dark:border-[#1f3d30] bg-white dark:bg-[#112019] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    pathname === link.href
                      ? "bg-[#1b4332] text-white"
                      : "text-[#0f241d] dark:text-[#e8f5e9] hover:bg-[#e8f5e9] dark:hover:bg-[#183126]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-[#52b788] text-[#081c15] text-[10px] font-black px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-[#d8e6df] dark:border-[#1f3d30] flex flex-col gap-2.5 text-xs text-[#406356]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1b4332] dark:text-[#52b788]" />
                  <span>{BRAND_INFO.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1b4332] dark:text-[#52b788]" />
                  <span>{BRAND_INFO.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
