"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const services = [
  {
    title: "企业展示网站",
    description: "从零手写代码，打造专业的企业官网。",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "外贸SOHO建站",
    description: "面向全球的独立站，速度快、SEO到位。",
    tech: ["Next.js", "Sanity CMS", "Tailwind"],
  },
  {
    title: "品牌官网定制",
    description: "从品牌定位出发，设计+开发一体服务。",
    tech: ["Figma", "Next.js", "UI/UX"],
  },
  {
    title: "WordPress开发",
    description: "手写前端 + WP后台，灵活高效。",
    tech: ["WordPress", "PHP", "手写前端"],
  },
];

const stats = [
  { label: "完成项目", value: "50+" },
  { label: "服务客户", value: "35+" },
  { label: "行业经验", value: "5年" },
  { label: "技术栈", value: "15+" },
];

function useMousePosition() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [x, y]);

  return { x, y };
}

function MouseGradient() {
  const { x, y } = useMousePosition();
  const smoothX = useSpring(x, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(y, { damping: 50, stiffness: 300 });

  const bg = useTransform([smoothX, smoothY], ([vx, vy]: number[]) => {
    return `radial-gradient(600px at ${vx * 100}% ${vy * 100}%, rgba(0,0,0,0.04) 0%, transparent 70%)`;
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: bg }}
    />
  );
}

function MouseTextParallax({ children }: { children: React.ReactNode }) {
  const { x, y } = useMousePosition();
  const smoothX = useSpring(x, { damping: 30, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 150 });

  const offsetX = useTransform(smoothX, [0, 1], [-12, 12]);
  const offsetY = useTransform(smoothY, [0, 1], [-8, 8]);

  return (
    <motion.div
      style={{ x: offsetX, y: offsetY }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <MouseGradient />

      {/* Hero - Full screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center">
            <ScrollAnimator>
              <Badge className="mb-8">独立站搭建 - 不套模板，个性定制</Badge>
            </ScrollAnimator>

            <MouseTextParallax>
              <ScrollAnimator delay={0.15}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                  让每个网站都<br />
                  <span className="relative inline-block">
                    与众不同
                    <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-foreground/20" />
                  </span>
                </h1>
              </ScrollAnimator>
            </MouseTextParallax>

            <ScrollAnimator delay={0.3}>
              <p className="mt-8 text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
                不套模板、不敷衍。每个网站都是手写代码、量身定制，
                让你的品牌在网上被记住。
              </p>
            </ScrollAnimator>

            <ScrollAnimator delay={0.45}>
              <div className="mt-10 flex items-center gap-4">
                <Link href="/cases">
                  <Button size="lg">看案例</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">找我聊聊</Button>
                </Link>
              </div>
            </ScrollAnimator>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-text-dim uppercase tracking-widest">
              向下滚动
            </span>
            <div className="w-px h-6 bg-border" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollAnimator key={stat.label} delay={i * 0.1}>
                <div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-text-muted">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <ScrollAnimator>
          <div className="mb-12">
            <Badge className="mb-3">服务项目</Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              我能做什么
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ScrollAnimator key={service.title} delay={i * 0.1}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-text-muted mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-surface text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator delay={0.3}>
          <div className="mt-8">
            <Link href="/services">
              <Button variant="outline" size="sm">
                查看全部服务
              </Button>
            </Link>
          </div>
        </ScrollAnimator>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
        <ScrollAnimator>
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              准备好做一个不一样的网站了吗？
            </h2>
            <p className="text-text-muted mb-6">
              找我聊聊你的项目，帮你打造一个真正能拿得出手的独立站。
            </p>
            <Link href="/contact">
              <Button>联系我</Button>
            </Link>
          </div>
        </ScrollAnimator>
      </section>
    </>
  );
}
