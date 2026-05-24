import type { Metadata } from "next";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development services including custom builds, e-commerce, and brand identity.",
};

const servicesData = [
  {
    title: "Custom Web Development",
    subtitle: "From Scratch, Built to Last",
    description:
      "Every website I build is hand-crafted from the ground up using modern technologies like Next.js, React, and TypeScript. No page builders, no pre-made templates — just clean, performant code tailored to your specific needs.",
    features: [
      "Custom design and development",
      "Responsive & mobile-first",
      "SEO-optimized architecture",
      "Performance optimized (90+ Lighthouse)",
      "CMS integration (Sanity, WordPress)",
      "Ongoing support & maintenance",
    ],
    price: "Starts from $1,500",
  },
  {
    title: "E-Commerce Solutions",
    subtitle: "Sell Smarter, Not Harder",
    description:
      "Launch a professional online store with seamless shopping experiences. I build e-commerce platforms that are fast, secure, and conversion-optimized.",
    features: [
      "Custom storefront design",
      "Secure payment integration",
      "Inventory management",
      "Mobile optimized checkout",
      "SEO for product pages",
      "Analytics & reporting",
    ],
    price: "Starts from $3,000",
  },
  {
    title: "Business & Corporate Sites",
    subtitle: "Professional Presence, Made Simple",
    description:
      "Showcase your business with a website that reflects your brand values. Perfect for startups, SMBs, and established companies looking to upgrade their online presence.",
    features: [
      "Brand-aligned design",
      "Multi-page structure",
      "Contact forms & integrations",
      "Blog / news section",
      "Google Maps & business info",
      "Fast loading & reliable hosting",
    ],
    price: "Starts from $1,000",
  },
  {
    title: "Brand Identity & Design",
    subtitle: "Look the Part",
    description:
      "A great website deserves great branding. I help you define or refine your visual identity with cohesive design systems that work across all platforms.",
    features: [
      "Logo design & variations",
      "Color palette & typography",
      "Style guide documentation",
      "Social media assets",
      "Business card & stationery",
      "Brand guidelines",
    ],
    price: "Starts from $800",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, target audience, and vision for the project.",
  },
  {
    step: "02",
    title: "Design",
    description: "I create wireframes and visual designs for your approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "I build your website with clean code and modern technologies.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We test, deploy, and make your site live for the world to see.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimator>
            <Badge variant="accent" className="mb-4">
              Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What I Can Do For You
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From concept to launch, I provide end-to-end web development
              services. Every project is custom-built — no templates, no
              shortcuts.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <ScrollAnimator key={service.title} delay={index * 0.1}>
                <Card glow className="p-8 h-full flex flex-col">
                  <Badge variant="primary" className="mb-4 w-fit">
                    {service.subtitle}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-text-muted mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <svg
                          className="w-5 h-5 text-primary shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm text-text-muted">{service.price}</span>
                    <Link href="/contact">
                      <Button size="sm">Get Started</Button>
                    </Link>
                  </div>
                </Card>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <Badge className="mb-4">How It Works</Badge>
              <h2 className="text-3xl font-bold">My Process</h2>
              <p className="mt-4 text-text-muted max-w-xl mx-auto">
                A streamlined approach to bringing your project from idea to
                launch.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <ScrollAnimator key={item.step} delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </Card>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
