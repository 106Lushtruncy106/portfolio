"use client";

import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/types";

export default function CaseDetailClient({
  caseStudy,
}: {
  caseStudy: CaseStudy | null;
}) {
  if (!caseStudy) {
    return (
      <div className="max-w-5xl mx-auto px-6 pt-32 text-center">
        <h1 className="text-2xl font-bold mb-4">案例未找到</h1>
        <Link href="/cases"><Button variant="outline">返回案例</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <ScrollAnimator>
          <Link href="/cases" className="text-xs text-text-dim hover:text-foreground transition-colors mb-6 block">
            &larr; 返回案例
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {caseStudy.industry && <Badge>{caseStudy.industry}</Badge>}
            {caseStudy.duration && <span className="text-xs text-text-dim">{caseStudy.duration}</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {caseStudy.title}
          </h1>
          {caseStudy.client && (
            <p className="text-sm text-text-muted">客户：{caseStudy.client}</p>
          )}
        </ScrollAnimator>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {caseStudy.coverImage && (
          <ScrollAnimator>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12 bg-surface">
              <SanityImage image={caseStudy.coverImage} alt={caseStudy.title} fill priority />
            </div>
          </ScrollAnimator>
        )}

        <ScrollAnimator>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-3">项目概览</h2>
            <p className="text-sm text-text-muted leading-relaxed">{caseStudy.overview}</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {caseStudy.challenge && (
            <ScrollAnimator>
              <Card className="p-5">
                <h3 className="text-sm font-semibold mb-2">挑战</h3>
                <p className="text-sm text-text-muted">{caseStudy.challenge}</p>
              </Card>
            </ScrollAnimator>
          )}
          {caseStudy.solution && (
            <ScrollAnimator delay={0.1}>
              <Card className="p-5">
                <h3 className="text-sm font-semibold mb-2">解决方案</h3>
                <p className="text-sm text-text-muted">{caseStudy.solution}</p>
              </Card>
            </ScrollAnimator>
          )}
        </div>

        {caseStudy.techStack && caseStudy.techStack.length > 0 && (
          <ScrollAnimator>
            <div className="mb-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-dim mb-3">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-surface text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        )}

        {caseStudy.images && caseStudy.images.length > 0 && (
          <ScrollAnimator>
            <div className="mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.images.map((image, i) => (
                  <div key={i} className="relative h-48 rounded-lg overflow-hidden bg-surface">
                    <SanityImage image={image} alt={`${caseStudy.title} ${i + 1}`} fill />
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        )}

        {caseStudy.testimonial && (
          <ScrollAnimator>
            <Card className="p-6 mb-10">
              <p className="text-sm italic text-text-muted mb-3">&ldquo;{caseStudy.testimonial.quote}&rdquo;</p>
              <div className="text-xs">
                <span className="font-medium">{caseStudy.testimonial.author}</span>
                <span className="text-text-dim"> — {caseStudy.testimonial.role}</span>
              </div>
            </Card>
          </ScrollAnimator>
        )}

        <ScrollAnimator>
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <Link href="/cases"><Button variant="ghost" size="sm">&larr; 返回案例</Button></Link>
            <Link href="/contact"><Button size="sm">开始你的项目</Button></Link>
          </div>
        </ScrollAnimator>
      </section>
    </div>
  );
}
