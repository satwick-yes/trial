"use client"

import Link from "next/link"
import { Image } from "next/image"
import { motion } from "framer-motion"
import { Card } from "./ui-card"

export function ComboSection() {
  const combos = [
    {
      id: "combo1",
      name: "The Wellness Pack",
      subtitle: "Healthy Makhana Variety",
      price: "₹499",
      badge: "Most Popular",
      items: ["Classic Makhana", "Chilli Makhana", "Kesar Makhana"],
      image: "/old-assets/makhana-2.jpg",
      description: "A curated selection of our premium makhana flavors for the health-conscious snacker.",
      cta: "Order Now",
      bgGradient: "from-[#FF6B35] via-[#FF8C42] to-[#FFB000]",
    },
    {
      id: "combo2",
      name: "The Spice Lover",
      subtitle: "Makhana Flavors Pack",
      price: "₹399",
      badge: "Best Value",
      items: ["Classic Makhana", "Chilli Makhana", "Garlic Makhana"],
      image: "/old-assets/makhana-2.jpg",
      description: "Three spicy makhana varieties to satisfy your cravings with premium taste.",
      cta: "View Details",
      bgGradient: "from-[#E74C3C] via-[#F39C12] to-[#F1C40F]",
    },
  ]

  return (
    <section id="combos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6"
            >
              Premium Combo Packs
            </motion.h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Hand-selected bundles of our finest makhana and gourmet snacks. Perfect for gifting or treating yourself.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FF6B35] text-white px-6 py-3 rounded-2xl font-bold text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#FF6B35]/20"
            >
              Browse All Combos
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {combos.map((combo) => (
              <motion.div
                key={combo.id}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-3xl hover:transform hover:translate-y-[-5] border border-foreground/5 hover:border-[#FF6B35]/20"
              >
                {/* Image */}
                <motion.div
                  className="relative h-64 w-full overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${combo.bgGradient}, transparent)`,
                  }}
                >
                  <Image
                    src={combo.image}
                    alt={combo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                <div className="p-5">
                  <span className="absolute top-3 right-3 bg-[#FF6B35] text-xs font-bold text-white px-2 rounded-full">
                    {combo.badge}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black text-foreground mt-3 mb-1 line-clamp-1">
                    {combo.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {combo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl md:text-2xl font-bold text-[#FF6B35]">
                      {combo.price}
                    </span>
                    <Link
                      href={`/combo-products/index.html?combo=${combo.id}`}
                      className="text-[#FF6B35] text-sm font-medium hover:underline transition-colors"
                    >
                      {combo.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}