"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/types";

const industries = ["All", "E-commerce", "Tech", "Business", "Creative"];

export default function CasesClient({ cases }: { cases: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases =
    activeFilter === "All"
      ? cases
      : cases.filter((c) => c.industry === activeFilter);

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <Badge variant="primary" className="mb-4">
                Portfolio
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My Work
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Every project is a unique story. Browse through my case studies
                to see how I bring ideas to life.
              </p>
            </div>
          </ScrollAnimator>

          {/* Filter */}
          <ScrollAnimator delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === industry
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "bg-surface-light text-text-muted hover:text-white border border-border"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </ScrollAnimator>

          {/* Cases Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCases.map((c, index) => (
                <Link key={c._id} href={`/cases/${c.slug.current}`}>
                  <Card hover3d className="h-full group">
                    <div className="relative h-48 overflow-hidden">
                      {c.coverImage ? (
                        <SanityImage
                          image={c.coverImage}
                          alt={c.title}
                          fill
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-light flex items-center justify-center">
                          <span className="text-text-dim text-sm">
                            {c.title}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {c.featured && (
                        <Badge
                          variant="accent"
                          className="absolute top-3 right-3"
                        >
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">{c.industry}</Badge>
                        {c.duration && (
                          <span className="text-xs text-text-dim">
                            {c.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all">
                        {c.title}
                      </h3>
                      <p className="text-sm text-text-muted line-clamp-2">
                        {c.overview}
                      </p>
                      {c.techStack && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {c.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-text-dim"
                            >
                              {tech}
                            </span>
                          ))}
                          {c.techStack.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 text-text-dim">
                              +{c.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted">
                No cases found. Check back soon or{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  get in touch
                </Link>{" "}
                to be the first!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
