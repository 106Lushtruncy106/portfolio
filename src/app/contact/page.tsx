"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimator>
            <div>
              <Badge className="mb-4">联系我</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                聊聊你的项目
              </h1>
              <p className="text-sm text-text-muted leading-relaxed mb-8">
                有建站需求？不管是企业站、外贸站还是个人品牌，
                都欢迎找我聊聊。
              </p>

              <div className="space-y-3">
                {[
                  { name: "抖音", desc: "关注我的抖音，看建站日常" },
                  { name: "小红书", desc: "在小红书上找我，私信咨询" },
                  { name: "闲鱼", desc: "闲鱼下单，安全有保障" },
                  { name: "微信", desc: "添加微信，一对一沟通" },
                ].map((link) => (
                  <Card key={link.name} className="p-3">
                    <div className="text-sm font-medium">{link.name}</div>
                    <div className="text-xs text-text-muted">{link.desc}</div>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={0.15}>
            <Card className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-lg font-semibold mb-2">消息已发送！</div>
                  <p className="text-sm text-text-muted mb-6">我会在24小时内回复你。</p>
                  <Button variant="outline" size="sm" onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}>
                    再发一条
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1.5">称呼</label>
                    <input
                      id="name" type="text" required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3 py-2 bg-surface border border-border rounded text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="你的名字"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1.5">邮箱</label>
                    <input
                      id="email" type="email" required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 py-2 bg-surface border border-border rounded text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium mb-1.5">需求描述</label>
                    <textarea
                      id="message" required rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3 py-2 bg-surface border border-border rounded text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="告诉我你的项目想法..."
                    />
                  </div>
                  <Button type="submit" className="w-full">发送消息</Button>
                </form>
              )}
            </Card>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
