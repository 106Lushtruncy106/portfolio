"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const socialLinks = [
  {
    name: "抖音",
    href: "#",
    description: "关注我的抖音，看建站日常和技术分享",
  },
  {
    name: "小红书",
    href: "#",
    description: "在小红书上找我，私信咨询",
  },
  {
    name: "闲鱼",
    href: "#",
    description: "闲鱼下单，安全有保障",
  },
  {
    name: "微信",
    href: "#",
    description: "添加微信，一对一沟通需求",
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
                  联系我
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  聊聊你的{" "}
                  <span className="gradient-text">项目</span>
                </h1>
                <p className="text-lg text-text-muted mb-8">
                  有建站需求？不管是企业站、外贸站还是个人品牌，
                  都欢迎找我聊聊。通常在24小时内回复。
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
                      消息已发送！
                    </h3>
                    <p className="text-text-muted">
                      感谢你的联系，我会在24小时内回复你。
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", message: "" });
                      }}
                    >
                      再发一条
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        称呼
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
                        placeholder="你的名字"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        邮箱
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
                        需求描述
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
                        placeholder="告诉我你的项目想法..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      发送消息
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
