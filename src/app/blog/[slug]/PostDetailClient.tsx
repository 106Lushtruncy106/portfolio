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
      <div className="relative my-8 h-96 rounded-xl overflow-hidden">
        <SanityImage image={value} alt={value.alt || ""} fill />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-text-muted leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-text-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }: any) => (
      <code className="bg-surface-light px-2 py-0.5 rounded text-sm font-mono text-primary-light">
        {children}
      </code>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-light hover:underline"
      >
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
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
        <p className="text-text-muted mb-8">
          你要查看的文章不存在。
        </p>
        <Link href="/blog">
          <Button>返回博客</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollAnimator>
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="text-sm text-text-muted hover:text-white transition-colors mb-4 inline-block"
                >
                  &larr; 返回博客
                </Link>
              </div>

              <div className="flex items-center gap-3 mb-4">
                {post.tags?.map((tag) => (
                  <Badge key={tag._id}>{tag.name}</Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-text-muted">
                {post.publishedAt && (
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
                {post.readingTime && <span>阅读 {post.readingTime} 分钟</span>}
              </div>
            </ScrollAnimator>

            {post.coverImage && (
              <ScrollAnimator delay={0.2}>
                <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden mt-8">
                  <SanityImage
                    image={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                  />
                </div>
              </ScrollAnimator>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollAnimator>
              <article className="prose-custom">
                <PortableText
                  value={post.body}
                  components={portableComponents}
                />
              </article>
            </ScrollAnimator>

            <ScrollAnimator delay={0.3}>
              <div className="mt-12 pt-8 border-t border-white/5">
                <Link href="/blog">
                  <Button variant="ghost">&larr; 返回博客</Button>
                </Link>
              </div>
            </ScrollAnimator>
          </div>
        </section>
      </div>
    </>
  );
}
