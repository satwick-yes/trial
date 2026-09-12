"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ankita S.",
      avatar: "/old-assets/logo.png",
      rating: "5",
      text: "The premium makhana tastes so fresh! Never knew snacking could be this healthy and delicious. Delivery was incredibly fast too.",
      location: "Mumbai",
    },
    {
      name: "Rahul K.",
      avatar: "/old-assets/logo.png",
      rating: "5",
      text: "Perfect for gifting! Ordered the wellness pack for my parents' anniversary. They loved the variety and quality. Will order again!",
      location: "Delhi",
    },
    {
      name: "Priya R.",
      avatar: "/old-assets/logo.png",
      rating: "4.5",
      text: "Excellent quality and packaging. The garlic makhana is my favorite. Great for movie nights and movie nights with friends.",
      location: "Bangalore",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-cream to-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 border border-foreground/10 hover:border-[#FF6B35]/20 transition-all duration-500 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.span
                    key={i}
                    className="w-3 h-3 bg-[#FFB000] rounded-full"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  />
                ))}
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <p className="text-foreground font-semibold">{testimonial.name}</p>
                  <p className="text-foreground/60 text-sm">{testimonial.location}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/70 text-base leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>

              {/* CTA */}
              <Link
                href="/"
                className="mt-4 inline-flex items-center gap-2 text-[#FF6B35] text-sm font-medium hover:underline transition-colors"
              >
                Read More Testimonials
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}