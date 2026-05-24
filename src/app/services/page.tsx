import type { Metadata } from "next";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务",
  description: "独立站搭建服务，不套模板，个性定制。",
};

const servicesData = [
  {
    title: "企业展示网站",
    subtitle: "从零手写，专业定制",
    description:
      "每个企业站都是手写代码、量身定制。不用模板，从设计到开发全部原创。",
    features: [
      "原创设计 + 手写前端",
      "响应式适配",
      "SEO优化",
      "CMS内容管理",
      "性能优化",
      "上线技术支持",
    ],
    price: "3,800 起",
  },
  {
    title: "外贸SOHO建站",
    subtitle: "面向全球，转化优先",
    description:
      "专为外贸SOHO打造的独立站。海外加速、多语言、SEO友好。",
    features: [
      "海外访问优化",
      "多语言支持",
      "产品展示系统",
      "询盘 + WhatsApp",
      "Google Analytics",
      "SEO基础优化",
    ],
    price: "5,800 起",
  },
  {
    title: "品牌官网定制",
    subtitle: "一眼记住，与众不同",
    description:
      "从品牌定位出发，定制独特的视觉风格和交互体验。",
    features: [
      "品牌视觉设计",
      "定制交互动效",
      "多页面结构",
      "博客/新闻系统",
      "联系表单",
      "品牌规范",
    ],
    price: "6,800 起",
  },
  {
    title: "WordPress建站",
    subtitle: "灵活高效，业务为王",
    description:
      "手写前端 + WP后台，既有定制化的前端体验，又有灵活的内容管理。",
    features: [
      "手写前端主题",
      "WP后台定制",
      "WooCommerce",
      "插件集成",
      "速度优化",
      "安全加固",
    ],
    price: "2,800 起",
  },
];

const process = [
  { step: "01", title: "需求沟通", description: "了解你的业务和设计偏好。" },
  { step: "02", title: "方案设计", description: "出设计稿，确认后再开发。" },
  { step: "03", title: "开发搭建", description: "手写代码，随时沟通进度。" },
  { step: "04", title: "上线交付", description: "测试无误后上线，交付使用。" },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <ScrollAnimator>
          <Badge className="mb-4">服务</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            我能帮你做什么
          </h1>
          <p className="text-text-muted max-w-lg">
            从企业展示到外贸SOHO，从品牌官网到WordPress，
            每个项目都是定制开发。
          </p>
        </ScrollAnimator>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-4">
          {servicesData.map((service, i) => (
            <ScrollAnimator key={service.title} delay={i * 0.1}>
              <Card className="p-6 h-full flex flex-col">
                <Badge className="mb-3 w-fit">{service.subtitle}</Badge>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-text-muted mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-foreground mt-0.5">-</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-text-dim">&yen;{service.price}</span>
                  <Link href="/contact">
                    <Button size="sm" variant="outline">
                      立即咨询
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollAnimator>
            <Badge className="mb-3">合作流程</Badge>
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              我的工作方式
            </h2>
          </ScrollAnimator>

          <div className="grid md:grid-cols-4 gap-4">
            {process.map((item, i) => (
              <ScrollAnimator key={item.step} delay={i * 0.1}>
                <Card className="p-5">
                  <div className="text-lg font-bold text-text-dim mb-1">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-text-muted">{item.description}</p>
                </Card>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
