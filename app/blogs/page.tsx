"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Tag
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/gustosa-data";

export default function BlogsPage() {
  const featuredBlog = BLOG_POSTS[0];
  const regularBlogs = BLOG_POSTS.slice(1);

  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Health &amp; Snacking Blogs</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Wellness, Diet &amp; Fox Nut Science</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            The Makhana Wellness Journal
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Discover expert dietary guides, ayurvedic insights, recipes, and scientific benefits of including Bihar roasted fox nuts in your daily lifestyle.
          </p>
        </div>

        {/* Featured Blog Hero Card */}
        {featuredBlog && (
          <div className="bg-white dark:bg-[#182420] rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 w-full">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow">
                  Featured Article
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-bold">{featuredBlog.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>

                <Link href={`/blogs/${featuredBlog.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground hover:text-primary transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {featuredBlog.summary}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>{featuredBlog.author}</span>
                  </div>

                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-[#182420] rounded-3xl border border-border overflow-hidden card-hover-shadow flex flex-col justify-between"
            >
              <Link href={`/blogs/${blog.slug}`} className="relative aspect-[16/10] w-full block overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                  {blog.category}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="font-extrabold text-foreground hover:text-primary transition-colors text-base line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-medium">
                    By {blog.author}
                  </span>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
