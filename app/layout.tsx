import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LenisProvider } from "@/components/lenis-provider";
import ClickSpark from "@/components/click-spark";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { WishlistDrawer } from "@/components/wishlist-drawer";
import { SearchModal } from "@/components/search-modal";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gustosa Foods | Premium Hand-Harvested Bihar Makhana & Healthy Snacks",
  description: "Experience guilt-free snacking with Gustosa Foods. 100% slow-roasted Bihar fox nuts (makhana), zero cholesterol, high protein, and artisan spice blends. Free shipping above ₹499 across India.",
  keywords: [
    "Gustosa Foods",
    "makhana",
    "fox nuts",
    "lotus seeds",
    "roasted makhana",
    "healthy snacks India",
    "Bihar makhana",
    "Mithila fox nuts",
    "pudina makhana",
    "peri peri makhana",
    "diet snacks",
    "protein snacks"
  ],
  authors: [{ name: "Gustosa Foods Pvt. Ltd." }],
  openGraph: {
    title: "Gustosa Foods | Premium Fox Nuts & Gourmet Snacks",
    description: "Crunchy, hand-picked, slow-roasted Bihar Makhana snacks in irresistible gourmet flavors. Zero trans fat, 100% natural.",
    url: "https://gustosafoods.com",
    siteName: "Gustosa Foods",
    images: [
      {
        url: "/assets/banners/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Gustosa Foods Makhana Snacks"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#2d6a4f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <CartProvider>
          <ClickSpark
            sparkColor="#2d6a4f"
            sparkSize={10}
            sparkRadius={18}
            sparkCount={6}
            duration={350}
            easing="ease-out"
          >
            <LenisProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />

              {/* Global Interactive Overlays */}
              <CartDrawer />
              <WishlistDrawer />
              <SearchModal />
            </LenisProvider>
          </ClickSpark>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
