import type { Metadata } from "next";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CountUp from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about my journey as an independent web developer.",
};

const timeline = [
  { year: "2020", event: "Started freelancing as a web developer" },
  { year: "2021", event: "First major client project launched" },
  { year: "2022", event: "Expanded to full-stack development with Next.js" },
  { year: "2023", event: "Delivered 20+ websites for global clients" },
  { year: "2024", event: "Specialized in custom, template-free builds" },
  { year: "2025", event: "Mastered modern stack: Next.js, Three.js, Sanity CMS" },
];

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Three.js / 3D", level: 75 },
  { name: "Sanity CMS", level: 85 },
  { name: "UI/UX Design", level: 80 },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimator>
              <div>
                <Badge variant="accent" className="mb-4">
                  About Me
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Turning Ideas Into{" "}
                  <span className="gradient-text">Digital Reality</span>
                </h1>
                <p className="text-lg text-text-muted mb-6">
                  I&apos;m an independent web developer with a passion for
                  creating unique, custom-built websites that help businesses
                  stand out. My philosophy is simple: no templates, no
                  shortcuts — just exceptional craftsmanship.
                </p>
                <p className="text-text-muted mb-8">
                  Over the past 5 years, I&apos;ve helped 35+ clients across
                  various industries establish their online presence with
                  websites that are as functional as they are beautiful.
                </p>
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: 50 },
                  { label: "Clients", value: 35 },
                  { label: "Years", value: 5 },
                  { label: "Countries", value: 8 },
                ].map((stat) => (
                  <Card key={stat.label} className="p-6 text-center">
                    <CountUp
                      end={stat.value}
                      suffix="+"
                      className="text-3xl font-bold gradient-text"
                    />
                    <p className="mt-1 text-sm text-text-muted">
                      {stat.label}
                    </p>
                  </Card>
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimator>
            <h2 className="text-3xl font-bold text-center mb-16">
              My Journey
            </h2>
          </ScrollAnimator>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {timeline.map((item, index) => (
              <ScrollAnimator
                key={item.year}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:flex flex-1 justify-end">
                    {index % 2 === 0 && (
                      <div className="text-right">
                        <span className="text-2xl font-bold gradient-text">
                          {item.year}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="relative flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <span className="text-2xl font-bold gradient-text block mb-2 md:hidden">
                        {item.year}
                      </span>
                    )}
                    <div className="md:hidden">
                      <span className="text-lg font-bold gradient-text">
                        {item.year}
                      </span>
                    </div>
                    <Card className="p-5">
                      <p>{item.event}</p>
                    </Card>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimator>
            <h2 className="text-3xl font-bold text-center mb-16">
              Technical Skills
            </h2>
          </ScrollAnimator>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <ScrollAnimator key={skill.name} delay={index * 0.05}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-text-muted">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
