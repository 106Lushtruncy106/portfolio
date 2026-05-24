"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Reveal, { StaggerReveal, RevealItem } from "@/components/animations/Reveal";
import TiltCard from "@/components/animations/TiltCard";
import FancyCounter from "@/components/animations/FancyCounter";
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

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-foreground origin-left"
      style={{ scaleX }}
    />
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <ScrollAnimator animation="fadeIn" duration={0.8}>
            <Badge className="mb-8">独立站搭建 - 不套模板，个性定制</Badge>
          </ScrollAnimator>

          {/* Title: fully static, no mouse effects */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            让每个网站都
            <br />
            <span className="relative inline-block">
              与众不同
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-foreground/20" />
            </span>
          </h1>

          <ScrollAnimator animation="fadeIn" delay={0.2} duration={0.8}>
            <p className="mt-8 text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
              不套模板、不敷衍。每个网站都是手写代码、量身定制，
              让你的品牌在网上被记住。
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="fadeIn" delay={0.35} duration={0.8}>
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
  );
}

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <HeroSection />

      {/* Stats — animated counter */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} animation="blurIn" delay={i * 0.12}>
                <FancyCounter value={stat.value} label={stat.label} delay={i * 0.12} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — 3D perspective reveal + tilt cards */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Reveal animation="blurIn">
          <div className="mb-12">
            <Badge className="mb-3">服务项目</Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              我能做什么
            </h2>
          </div>
        </Reveal>

        <StaggerReveal animation="perspective" staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <RevealItem key={service.title}>
                <TiltCard>
                  <Card className="p-6 group cursor-default">
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
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </StaggerReveal>

        <Reveal animation="blurIn" delay={0.4}>
          <div className="mt-8">
            <Link href="/services">
              <Button variant="outline" size="sm">
                查看全部服务
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA — clip reveal */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
        <Reveal animation="clipUp" duration={1}>
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
        </Reveal>
      </section>
    </>
  );
}
