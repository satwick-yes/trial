"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Tag,
  Share2,
  CheckCircle2
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/gustosa-data";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = BLOG_POSTS.find((b) => b.slug === slug);
  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground">Article Not Found</h2>
        <Link
          href="/blogs"
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-xl text-xs font-bold"
        >
          Return to Blog Journal
        </Link>
      </div>
    );
  }

  const relatedBlogs = BLOG_POSTS.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <div className="bg-[#fdfbf7] dark:bg-[#111a16] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blogs" className="hover:text-primary transition-colors">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold truncate max-w-xs">{blog.title}</span>
        </div>

        {/* Blog Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2 border-b border-border pb-6">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>By {blog.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg border border-border">
          <Image src={blog.image} alt={blog.title} fill priority className="object-cover" />
        </div>

        {/* Blog Main Text Content */}
        <div className="bg-white dark:bg-[#182420] p-6 sm:p-12 rounded-3xl border border-border shadow-sm space-y-6 text-foreground text-sm sm:text-base leading-relaxed">
          {blog.content.map((paragraph, idx) => (
            <p key={idx} className="text-muted-foreground leading-loose">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-border flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-primary mr-1" />
            {blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-muted text-foreground text-xs font-semibold px-3 py-1 rounded-xl"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back and Related Links */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Blogs</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedBlogs.map((rel) => (
              <Link
                key={rel.id}
                href={`/blogs/${rel.slug}`}
                className="group bg-white dark:bg-[#182420] p-5 rounded-3xl border border-border card-hover-shadow block space-y-3"
              >
                <div className="text-[11px] font-bold text-primary uppercase">{rel.category}</div>
                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{rel.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
