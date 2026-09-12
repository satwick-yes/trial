"use client"

import Link from "next/link"
import { Image } from "next/image"
import { motion } from "framer-motion"

export function CategoriesSection() {
  const categories = [
    { id: "makhana", label: "Makhana", count: "15+" },
    { id: "snacks", label: "Gourmet Snacks", count: "25+" },
    { id: "sweets", label: "Premium Sweets", count: "12+" },
    { id: "drinks", label: "Fresh Drinks", count: "8+" },
  ]

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-cream to-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight"
          >
            Explore Our Categories
          </motion.h2>
          <p className="text-foreground/70 mt-4 text-lg leading-relaxed">
            Discover our curated selection of premium snack options, crafted with care from farm to table.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="group bg-white rounded-2xl p-6 text-center transition-all duration-500 hover:bg-[#FF6B35]/10 group-hover:bg-white hover:shadow-2xl"
            >
              <motion.div
                className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5"
                style={{ backgroundColor: "oklch(0.95 0.01 90 / 0.5)" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.div>

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-xl font-bold text-foreground transition-colors hover:text-[#FF6B35] duration-300"
              >
                {category.label}
              </motion.h3>
              <p className="text-foreground/60 text-sm mt-1">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}