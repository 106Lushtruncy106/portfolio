"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SanityImage from "@/components/ui/SanityImage";
import type { Post } from "@/types";

const portableComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="relative my-8 h-72 rounded-lg overflow-hidden bg-surface">
        <SanityImage image={value} alt={value.alt || ""} fill />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg font-semibold mt-5 mb-2">{children}</h3>,
    normal: ({ children }: any) => <p className="text-sm text-text-muted leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-foreground pl-4 my-6 text-sm text-text-muted italic">{children}</blockquote>
    ),
    code: ({ children }: any) => (
      <code className="bg-surface px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
        {children}
      </a>
    ),
  },
};

export default function PostDetailClient({ post }: { post: Post | null }) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-6 pt-32 text-center">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <Link href="/blog"><Button variant="outline">返回博客</Button></Link>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-surface">
        <div className="h-full bg-foreground transition-all duration-150" style={{ width: `${readingProgress}%` }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-20 pb-20">
        <ScrollAnimator>
          <Link href="/blog" className="text-xs text-text-dim hover:text-foreground transition-colors mb-6 block">
            &larr; 返回博客
          </Link>
          <div className="flex items-center gap-2 mb-3">
            {post.tags?.map((tag) => <Badge key={tag._id}>{tag.name}</Badge>)}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-xs text-text-dim">
            {post.publishedAt && (
              <time>{new Date(post.publishedAt).toLocaleDateString("zh-CN", {
                year: "numeric", month: "long", day: "numeric",
              })}</time>
            )}
            {post.readingTime && <span>阅读 {post.readingTime} 分钟</span>}
          </div>
        </ScrollAnimator>

        {post.coverImage && (
          <ScrollAnimator delay={0.1}>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mt-8 mb-12 bg-surface">
              <SanityImage image={post.coverImage} alt={post.title} fill priority />
            </div>
          </ScrollAnimator>
        )}

        <ScrollAnimator>
          <article>
            <PortableText value={post.body} components={portableComponents} />
          </article>
          <div className="mt-12 pt-6 border-t border-border">
            <Link href="/blog"><Button variant="ghost" size="sm">&larr; 返回博客</Button></Link>
          </div>
        </ScrollAnimator>
      </div>
    </>
  );
}
