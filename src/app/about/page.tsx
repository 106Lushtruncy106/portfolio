import type { Metadata } from "next";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CountUp from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title: "关于",
  description: "了解我的独立站搭建故事和服务理念。",
};

const timeline = [
  { year: "2020", event: "开始接单做网站开发" },
  { year: "2021", event: "完成第一个大型企业站项目" },
  { year: "2022", event: "全面转向Next.js全栈开发" },
  { year: "2023", event: "为20+国内外客户完成网站搭建" },
  { year: "2024", event: "确立「不套模板、个性定制」的服务理念" },
  { year: "2025", event: "掌握Next.js + Three.js + Sanity CMS 现代技术栈" },
];

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Three.js / 3D效果", level: 75 },
  { name: "Sanity CMS / WordPress", level: 85 },
  { name: "UI/UX 设计", level: 80 },
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
                  关于我
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  把想法变成{" "}
                  <span className="gradient-text">能赚钱的网站</span>
                </h1>
                <p className="text-lg text-text-muted mb-6">
                  我是帮你搞网站的独立站搭建师。我的理念很简单：
                  不套模板、不敷衍，每个网站都是独一无二的。
                  没有千篇一律的页面，只有为你量身定制的代码。
                </p>
                <p className="text-text-muted mb-8">
                  5年来，我为30+客户搭建了他们的独立站，
                  涵盖企业展示、外贸SOHO、品牌官网等各种类型。
                  我深信，一个真正定制化的网站，比任何模板都能更好地
                  传递品牌价值。
                </p>
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "完成项目", value: 50 },
                  { label: "服务客户", value: 35 },
                  { label: "行业经验", value: 5 },
                  { label: "技术栈", value: 15 },
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
              我的成长历程
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
              技术能力
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
