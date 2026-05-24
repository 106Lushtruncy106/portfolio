import type { Metadata } from "next";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "关于",
  description: "了解我的独立站搭建故事和服务理念。",
};

const timeline = [
  { year: "2020", event: "开始接单做网站开发" },
  { year: "2021", event: "完成第一个大型企业站项目" },
  { year: "2022", event: "全面转向全栈开发" },
  { year: "2023", event: "为20+国内外客户完成网站搭建" },
  { year: "2024", event: "确立不套模板、个性定制的服务理念" },
  { year: "2025", event: "持续精进，探索更好的建站方式" },
];

const skills = [
  { name: "Next.js / React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "WordPress", level: 85 },
  { name: "UI/UX 设计", level: 80 },
  { name: "Node.js", level: 75 },
];

export default function AboutPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <ScrollAnimator>
          <Badge className="mb-4">关于我</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            把想法变成能赚钱的网站
          </h1>
          <div className="max-w-xl">
            <p className="text-text-muted leading-relaxed mb-4">
              我是帮你搞网站的独立站搭建师。5 年来，我为 30+ 客户搭建了他们的独立站，
              涵盖企业展示、外贸SOHO、品牌官网等各种类型。
            </p>
            <p className="text-text-muted leading-relaxed">
              我的理念很简单：不套模板、不敷衍。每个网站都是独一无二的。
              没有千篇一律的页面，只有为你量身定制的代码。
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "完成项目", value: "50+" },
            { label: "服务客户", value: "35+" },
            { label: "行业经验", value: "5年" },
            { label: "技术栈", value: "15+" },
          ].map((stat, i) => (
            <ScrollAnimator key={stat.label} delay={i * 0.1}>
              <Card className="p-5 text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </Card>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <ScrollAnimator>
            <h2 className="text-2xl font-bold tracking-tight mb-12">
              成长历程
            </h2>
          </ScrollAnimator>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <ScrollAnimator key={item.year} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-medium text-text-dim mb-1">
                      {item.year}
                    </div>
                    <div className="text-sm">{item.event}</div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <ScrollAnimator>
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              技术能力
            </h2>
          </ScrollAnimator>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <ScrollAnimator key={skill.name} delay={i * 0.05}>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-text-dim">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-all duration-700"
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
