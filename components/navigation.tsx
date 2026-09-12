"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, Heart, Search, User } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== "undefined") {
    if (scrolled) {
      window.addEventListener("scroll", () => {
        setScrolled(window.scrollY > 20)
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="relative"
            >
              <img
                src="/old-assets/logo.png"
                alt="Gustosa Foods Logo"
                className="h-10 w-auto rounded-lg shadow-sm"
              />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-foreground hidden sm:block">
              Gustosa <span className="text-[#FF6B35]">Foods</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#shop", label: "Shop" },
              { href: "#categories", label: "Categories" },
              { href: "#combos", label: "Combos" },
              { href: "#about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground/70 hover:text-[#FF6B35] transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF6B35] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 rounded-xl hover:bg-cream transition-colors">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button className="hidden sm:flex p-2 rounded-xl hover:bg-cream transition-colors relative">
              <Heart className="w-5 h-5 text-foreground/60" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B35] rounded-full" />
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 bg-[#FF6B35] text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-[#FF6B35]/20"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-cream transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t"
          >
            <div className="px-6 py-4 space-y-3">
              {[
                { href: "#shop", label: "Shop" },
                { href: "#categories", label: "Categories" },
                { href: "#combos", label: "Combos" },
                { href: "#about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-medium text-foreground/80 hover:text-[#FF6B35] transition-colors border-b border-cream"
                >
                  {link.label}
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FF6B35] text-white py-3 rounded-xl font-semibold mt-2"
              >
                View Cart
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}