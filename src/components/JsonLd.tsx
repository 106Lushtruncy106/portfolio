export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "帮你搞网站",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    jobTitle: "独立站搭建师",
    knowsAbout: [
      "独立站搭建",
      "Next.js开发",
      "WordPress开发",
      "企业官网定制",
      "外贸建站",
    ],
    description:
      "专业独立站搭建服务，不套模板、个性定制，手写代码打造与众不同",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
