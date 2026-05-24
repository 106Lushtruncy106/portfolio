"use client";

import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/types";

export default function CasesClient({ cases }: { cases: CaseStudy[] }) {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <ScrollAnimator>
          <Badge className="mb-4">作品集</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            我的案例
          </h1>
          <p className="text-text-muted max-w-lg">
            每个项目都是独一无二的。来看看我如何把想法变成真正的网站。
          </p>
        </ScrollAnimator>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {cases.length === 0 ? (
          <div className="py-20 text-center text-text-muted text-sm">
            暂无案例。可以联系我成为第一个案例的主人！
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cases.map((c, i) => (
              <ScrollAnimator key={c._id} delay={i * 0.05}>
                <Link href={`/cases/${c.slug.current}`} className="block group">
                  <Card className="overflow-hidden">
                    <div className="relative h-48 bg-surface">
                      {c.coverImage ? (
                        <SanityImage
                          image={c.coverImage}
                          alt={c.title}
                          fill
                          className="group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-text-dim text-xs">
                          {c.title}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        {c.industry && (
                          <span className="text-[10px] uppercase tracking-wider text-text-dim">
                            {c.industry}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 group-hover:opacity-60 transition-opacity">
                        {c.title}
                      </h3>
                      <p className="text-xs text-text-muted line-clamp-2">
                        {c.overview}
                      </p>
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
