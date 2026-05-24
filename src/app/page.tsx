"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CountUp from "@/components/ui/CountUp";

const Hero3D = dynamic(() => import("@/components/animations/Hero3D"), { ssr: false });

const services = [
  {
    title: "企业展示网站",
    description: "从零开始手写代码，打造专业的企业官网。不套模板、不敷衍，每个像素都为你的品牌服务。",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "外贸SOHO建站",
    description: "专为外贸SOHO打造的独立站，海外访问速度快、SEO优化到位，帮你把产品卖到全球。",
    tech: ["Next.js", "Sanity CMS", "Tailwind"],
  },
  {
    title: "品牌官网定制",
    description: "从品牌定位出发，设计+开发一体服务。独特的视觉风格，让你的品牌一眼被记住。",
    tech: ["Figma", "Next.js", "UI/UX"],
  },
  {
    title: "WordPress开发",
    description: "需要WordPress也没问题。手写前端+WP后端，灵活高效，满足复杂业务需求。",
    tech: ["WordPress", "PHP", "手写前端"],
  },
];

const stats = [
  { label: "完成项目", value: 50 },
  { label: "服务客户", value: 35 },
  { label: "行业经验", value: 5 },
  { label: "掌握技术", value: 15 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="primary" className="mb-6">
              独立站搭建 - 不套模板，个性定制
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            让每个网站都{" "}
            <span className="gradient-text animate-glow">与众不同</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
          >
            不套模板、不敷衍。每个网站都是手写代码、量身定制，
            让你的品牌在网上一眼被认出来。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link href="/cases">
              <Button size="lg">看案例</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                找我聊聊
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollAnimator key={stat.label}>
                <div className="text-center">
                  <CountUp
                    end={stat.value}
                    suffix="+"
                    className="text-4xl md:text-5xl font-bold gradient-text"
                  />
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <Badge variant="accent" className="mb-4">
                我能做什么
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                服务项目
              </h2>
              <p className="mt-4 text-text-muted max-w-xl mx-auto">
                从需求沟通到上线部署，提供全流程的独立站搭建服务。
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollAnimator key={service.title} delay={index * 0.1}>
                <Card hover3d className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </Card>
              </ScrollAnimator>
            ))}
          </div>

          <ScrollAnimator delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="outline" size="lg">
                  查看全部服务
                </Button>
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <ScrollAnimator>
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备好做一个{" "}
              <span className="gradient-text">不一样的网站</span>了吗？
            </h2>
            <p className="text-lg text-text-muted mb-8">
              不套模板、不敷衍。找我聊聊你的项目，让我帮你打造一个
              真正能拿得出手的独立站。
            </p>
            <Link href="/contact">
              <Button size="lg">联系我</Button>
            </Link>
          </div>
        </ScrollAnimator>
      </section>
    </>
  );
}
