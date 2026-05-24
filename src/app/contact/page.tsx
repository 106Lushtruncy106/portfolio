"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@example.com",
    description: "hello@example.com",
  },
  {
    name: "GitHub",
    href: "#",
    description: "See my open source contributions",
  },
  {
    name: "LinkedIn",
    href: "#",
    description: "Connect professionally",
  },
  {
    name: "Twitter",
    href: "#",
    description: "Follow for dev insights",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to an API endpoint
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <ScrollAnimator>
              <div>
                <Badge variant="accent" className="mb-4">
                  Get in Touch
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let&apos;s Work{" "}
                  <span className="gradient-text">Together</span>
                </h1>
                <p className="text-lg text-text-muted mb-8">
                  Have a project in mind? I&apos;d love to hear about it. Fill
                  out the form or reach out directly — I typically respond
                  within 24 hours.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="p-4 group cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium group-hover:gradient-text transition-all">
                              {link.name}
                            </h3>
                            <p className="text-sm text-text-muted">
                              {link.description}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            {/* Right: Form */}
            <ScrollAnimator direction="right">
              <Card className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-white"
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
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-muted">
                      Thank you for reaching out. I&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-white placeholder-text-dim focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-white placeholder-text-dim focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-white placeholder-text-dim focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollAnimator>
          </div>
        </div>
      </section>
    </div>
  );
}
