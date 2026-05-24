"use client";

import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SanityImage from "@/components/ui/SanityImage";
import type { Post } from "@/types";

export default function BlogClient({ posts }: { posts: Post[] }) {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <ScrollAnimator>
          <Badge className="mb-4">博客</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            建站笔记 &amp; 技术分享
          </h1>
          <p className="text-text-muted max-w-lg">
            关于独立站搭建、Web开发、设计的经验总结和思考。
          </p>
        </ScrollAnimator>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {posts.length === 0 ? (
          <div className="py-20 text-center text-text-muted text-sm">
            还没有文章，敬请期待！
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <ScrollAnimator key={post._id} delay={i * 0.05}>
                <Link href={`/blog/${post.slug.current}`} className="block group">
                  <Card className="overflow-hidden">
                    <div className="relative h-40 bg-surface">
                      {post.coverImage ? (
                        <SanityImage
                          image={post.coverImage}
                          alt={post.title}
                          fill
                          className="group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface" />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {post.tags?.map((tag) => (
                          <span key={tag._id} className="text-[10px] text-text-dim">{tag.name}</span>
                        ))}
                        {post.readingTime && (
                          <span className="text-[10px] text-text-dim">
                            {post.readingTime} 分钟
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold mb-1 group-hover:opacity-60 transition-opacity">
                        {post.title}
                      </h3>
                      <p className="text-xs text-text-muted line-clamp-2">{post.excerpt}</p>
                      {post.publishedAt && (
                        <p className="text-[10px] text-text-dim mt-2">
                          {new Date(post.publishedAt).toLocaleDateString("zh-CN", {
                            year: "numeric", month: "long", day: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                  </Card>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
