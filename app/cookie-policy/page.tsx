import React from "react";
import Link from "next/link";
import { Cookie, ChevronRight } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Cookie Policy</span>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
            <Cookie className="w-3.5 h-3.5" />
            <span>Browser Technologies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">Cookie Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="bg-white dark:bg-[#182420] p-6 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you browse websites. They help us remember your shopping cart contents, active login sessions, and browsing preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for the fundamental functionality of our e-commerce store, such as keeping track of items in your cart and checkout authentication.</li>
              <li><strong>Analytics Cookies:</strong> Help us anonymously evaluate how visitors navigate through our website so we can continuously improve page loading speed and navigation flow.</li>
              <li><strong>Functional Preferences:</strong> Store your theme choice (light or dark mode) and regional settings.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. Managing Cookie Preferences</h2>
            <p>
              You can choose to disable or block cookies through your individual browser settings at any time. Note that blocking essential cookies may impact your shopping experience, including cart persistence.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
