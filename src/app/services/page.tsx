import type { Metadata } from "next";
import ScrollAnimator from "@/components/animations/ScrollAnimator";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务",
  description:
    "独立站搭建服务：企业展示站、外贸SOHO站、品牌官网定制、WordPress开发。不套模板，个性定制。",
};

const servicesData = [
  {
    title: "企业展示网站",
    subtitle: "从零手写，专业定制",
    description:
      "每个企业站都是手写代码、量身定制。不用Page Builder、不用模板，从设计到开发全部原创。让你的企业在网上展现出最专业的一面。",
    features: [
      "原创设计 + 手写前端代码",
      "响应式适配（PC/平板/手机）",
      "SEO搜索引擎优化",
      "性能优化（Lighthouse 90+）",
      "CMS内容管理系统",
      "上线后技术支持",
    ],
    price: "¥3,800起",
  },
  {
    title: "外贸SOHO建站",
    subtitle: "面向全球，转化优先",
    description:
      "专为外贸SOHO打造的独立站。海外CDN加速、多语言支持、搜索引擎友好，帮你把产品展示给全球买家，获得更多询盘。",
    features: [
      "海外访问速度优化",
      "多语言支持",
      "产品展示系统",
      "询盘表单 + WhatsApp集成",
      "Google Analytics接入",
      "SEO基础优化",
    ],
    price: "¥5,800起",
  },
  {
    title: "品牌官网定制",
    subtitle: "一眼记住，与众不同",
    description:
      "从品牌定位出发，定制独特的视觉风格和交互体验。适合想要打造品牌形象的公司和个人品牌。",
    features: [
      "品牌视觉设计",
      "定制交互动效",
      "多页面结构",
      "博客/新闻系统",
      "联系表单集成",
      "品牌色系统 + 规范",
    ],
    price: "¥6,800起",
  },
  {
    title: "WordPress建站",
    subtitle: "灵活高效，业务为王",
    description:
      "如果你需要WordPress，我也能搞定。手写前端 + WP后台，既有定制化的前端体验，又有灵活的内容管理。",
    features: [
      "手写前端主题开发",
      "WP后台定制",
      "WooCommerce电商",
      "插件集成",
      "速度优化",
      "安全加固",
    ],
    price: "¥2,800起",
  },
];

const process = [
  {
    step: "01",
    title: "需求沟通",
    description: "了解你的业务、目标客户和设计偏好。",
  },
  {
    step: "02",
    title: "方案设计",
    description: "出设计稿和页面结构，确认后再开发。",
  },
  {
    step: "03",
    title: "开发搭建",
    description: "手写代码搭建网站，随时沟通进度。",
  },
  {
    step: "04",
    title: "上线交付",
    description: "测试无误后上线部署，交付使用。",
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
              服务
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              我能帮你做什么
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              从企业展示到外贸SOHO，从品牌官网到WordPress，
              每个项目都是定制开发——不套模板、没有 shortcuts。
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
                      <Button size="sm">立即咨询</Button>
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
              <Badge className="mb-4">合作流程</Badge>
              <h2 className="text-3xl font-bold">我的工作方式</h2>
              <p className="mt-4 text-text-muted max-w-xl mx-auto">
                简单四步，从想法到上线。
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
