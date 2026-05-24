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
    title: "Custom Web Development",
    description: "Tailor-made websites built from scratch with modern frameworks like Next.js and React.",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payments, inventory management, and beautiful UX.",
    tech: ["Shopify", "Next.js", "Stripe"],
  },
  {
    title: "Business Websites",
    description: "Professional corporate sites, landing pages, and brand showcases that convert visitors.",
    tech: ["Next.js", "Sanity CMS", "Tailwind"],
  },
  {
    title: "Brand Identity",
    description: "Complete brand packages including logo design, color systems, typography, and style guides.",
    tech: ["Figma", "Design Systems", "UI/UX"],
  },
];

const stats = [
  { label: "Projects Delivered", value: 50 },
  { label: "Happy Clients", value: 35 },
  { label: "Years Experience", value: 5 },
  { label: "Tech Stack Mastered", value: 15 },
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
              Independent Web Developer
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            I Build{" "}
            <span className="gradient-text animate-glow">Exceptional</span>
            <br />
            Websites That Stand Out
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
          >
            No templates. No shortcuts. Just unique, hand-crafted websites
            that tell your story and drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link href="/cases">
              <Button size="lg">View My Work</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Let&apos;s Talk
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
                What I Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Services I Offer
              </h2>
              <p className="mt-4 text-text-muted max-w-xl mx-auto">
                From concept to launch, I provide end-to-end web development
                services tailored to your needs.
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
                  View All Services
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
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Let&apos;s discuss your project and create a website that sets
              you apart from the competition.
            </p>
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </ScrollAnimator>
      </section>
    </>
  );
}
