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
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">案例未找到</h1>
        <p className="text-text-muted mb-8">
          你要查看的案例不存在。
        </p>
        <Link href="/cases">
          <Button>返回案例</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {caseStudy.coverImage ? (
          <SanityImage
            image={caseStudy.coverImage}
            alt={caseStudy.title}
            fill
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-5xl mx-auto">
          <ScrollAnimator>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="primary">{caseStudy.industry}</Badge>
              {caseStudy.duration && (
                <span className="text-sm text-text-muted">
                  {caseStudy.duration}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {caseStudy.title}
            </h1>
            {caseStudy.client && (
              <p className="mt-2 text-lg text-text-muted">
                客户：{caseStudy.client}
              </p>
            )}
          </ScrollAnimator>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollAnimator>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">项目概览</h2>
              <p className="text-text-muted leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseStudy.challenge && (
              <ScrollAnimator>
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-semibold mb-3 text-primary-light">
                    挑战
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </Card>
              </ScrollAnimator>
            )}
            {caseStudy.solution && (
              <ScrollAnimator delay={0.1}>
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-semibold mb-3 text-accent-light">
                    解决方案
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </Card>
              </ScrollAnimator>
            )}
          </div>

          {/* Tech Stack & Services */}
          <ScrollAnimator>
            <div className="flex flex-wrap gap-8 mb-12">
              {caseStudy.techStack && caseStudy.techStack.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
                    技术栈
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {caseStudy.services && caseStudy.services.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
                    服务内容
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.services.map((service) => (
                      <Badge key={service} variant="accent">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollAnimator>

          {/* Results */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <ScrollAnimator>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">成果</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {caseStudy.results.map((result) => (
                    <Card key={result.metric} className="p-5 text-center">
                      <div className="text-2xl font-bold gradient-text">
                        {result.value}
                      </div>
                      <p className="text-sm text-text-muted mt-1">
                        {result.metric}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollAnimator>
          )}

          {/* Gallery */}
          {caseStudy.images && caseStudy.images.length > 0 && (
            <ScrollAnimator>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">项目展示</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.images.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-64 rounded-xl overflow-hidden"
                    >
                      <SanityImage
                        image={image}
                        alt={`${caseStudy.title} 截图 ${i + 1}`}
                        fill
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <ScrollAnimator>
              <Card className="p-8 mb-12 relative">
                <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">
                  &ldquo;
                </div>
                <blockquote className="relative z-10">
                  <p className="text-lg italic text-text-muted mb-4">
                    {caseStudy.testimonial.quote}
                  </p>
                  <footer>
                    <strong className="text-white">
                      {caseStudy.testimonial.author}
                    </strong>
                    <span className="text-text-dim text-sm ml-2">
                      — {caseStudy.testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              </Card>
            </ScrollAnimator>
          )}

          {/* CTA */}
          <ScrollAnimator>
            <div className="flex items-center justify-between pt-8 border-t border-white/5">
              <Link href="/cases">
                <Button variant="ghost">&larr; 返回案例</Button>
              </Link>
              <div className="flex gap-3">
                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">访问网站</Button>
                  </a>
                )}
                <Link href="/contact">
                  <Button>开始你的项目</Button>
                </Link>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
