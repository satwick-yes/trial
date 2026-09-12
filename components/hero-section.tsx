"use client"

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
}

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  },
}

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useSpring(rawY, springConfig)

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textX1 = useSpring(rawTextX1, springConfig)

  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const textX2 = useSpring(rawTextX2, springConfig)

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const scale = useSpring(rawScale, springConfig)

  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const opacity = useSpring(rawOpacity, springConfig)

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#FF6B35]/3 to-background" />

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FF6B35]/15 blur-4xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-36 h-36 rounded-full bg-[#FF6B35]/10 blur-5xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div style={{ opacity }} className="space-y-6">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-4 py-2 rounded-full text-xs font-mono tracking-wider letter-spacing-wider"
            >
              <motion.span
                className="w-2.5 h-2.5 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              FRESH & PREMIUM FOOD DELIVERY
            </motion.div>

            <div className="space-y-2 overflow-hidden">
              <motion.h1
                style={{ x: textX1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FFB000]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-block"
                >
                  PREMIUM
                </motion.span>
              </motion.h1>
              <motion.h1
                style={{ x: textX2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FFB000]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block"
                >
                  SNACKS
                </motion.span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-base md:text-lg font-medium text-foreground/70 tracking-tight pt-3 max-w-md leading-relaxed"
              >
                Handcrafted makhana and gourmet snacks from our farm to your doorstep. Premium quality, healthy snacking solutions for conscious consumers who demand excellence.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-bold text-base tracking-wide flex items-center gap-3 group relative overflow-hidden shadow-lg shadow-[#FF6B35]/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  target.style.setProperty('--mouse-x', `${x}px`);
                  target.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  style={{ transition: "all 0.6s ease" }}
                  onMouseMove={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    const rect = target.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    target.style.setProperty('--mouse-x', `${x}px`);
                    target.style.setProperty('--mouse-y', `${y}px`);
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.setProperty('--mouse-x', '50%');
                    target.style.setProperty('--mouse-y', '50%');
                  }}
                ></div>
                <span className="relative z-10">Shop Premium Snacks</span>
                <motion.svg
                  className="w-5 h-5 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
              <motion.button
                className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-2xl font-bold text-base tracking-wide relative overflow-hidden"
                whileHover={{ scale: 1.03, backgroundColor: "oklch(0.95 0.01 90 / 0.08)", color: "#FF6B35" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                Learn About Our Story
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-5 pt-4 text-sm font-medium"
            >
              {["Farm Fresh", "30 Min Delivery", "Zero Preservatives", "Gluten Free Options"].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <motion.span
                      className="w-1.5 h-1.5 bg-white rounded-full"
                      animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 0.8] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="relative z-10">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y, scale }} className="relative flex justify-center">
            <motion.div variants={scaleInVariants} initial="hidden" animate="visible" className="relative">
              <motion.div
                className="absolute inset-0 bg-[#FF6B35]/25 blur-[90px] rounded-full scale-80"
                animate={{
                  scale: [0.8, 0.9, 0.8],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/old-assets/makhana-2.jpg"
                  alt="Premium Makhana Lotus Seeds"
                  width={500}
                  height={500}
                  className="relative z-10 drop-shadow-3xl object-cover rounded-full aspect-square border-4 border-white/20 shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-3 bg-foreground/20 rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
