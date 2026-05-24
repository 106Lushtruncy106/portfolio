"use client";

import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SanityImage from "@/components/ui/SanityImage";
import type { Post } from "@/types";

export default function BlogClient({ posts }: { posts: Post[] }) {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <Badge variant="primary" className="mb-4">
                博客
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                建站笔记 & 技术分享
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                关于独立站搭建、Web开发、设计实践的经验总结和思考。
              </p>
            </div>
          </ScrollAnimator>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted">
                还没有文章，敬请期待！
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <Card hover3d className="h-full group">
                    <div className="relative h-48 overflow-hidden">
                      {post.coverImage ? (
                        <SanityImage
                          image={post.coverImage}
                          alt={post.title}
                          fill
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        {post.tags?.map((tag) => (
                          <Badge key={tag._id} variant="default">
                            {tag.name}
                          </Badge>
                        ))}
                        {post.readingTime && (
                          <span className="text-xs text-text-dim">
                            阅读 {post.readingTime} 分钟
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-muted line-clamp-2">
                        {post.excerpt}
                      </p>
                      {post.publishedAt && (
                        <p className="text-xs text-text-dim mt-3">
                          {new Date(post.publishedAt).toLocaleDateString(
                            "zh-CN",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
