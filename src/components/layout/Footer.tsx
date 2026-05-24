import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于" },
    { href: "/cases", label: "案例" },
    { href: "/services", label: "服务" },
    { href: "/blog", label: "博客" },
    { href: "/contact", label: "联系" },
  ],
  social: [
    { label: "抖音", href: "#" },
    { label: "小红书", href: "#" },
    { label: "闲鱼", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold gradient-text">
              帮你搞网站
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs">
              专注独立站搭建，不套模板、不敷衍。每个网站都是手写代码、个性定制，
              让你的品牌在网上脱颖而出。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              导航
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              联系我
            </h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              服务范围
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted">企业展示网站</li>
              <li className="text-sm text-text-muted">外贸SOHO建站</li>
              <li className="text-sm text-text-muted">品牌官网定制</li>
              <li className="text-sm text-text-muted">WordPress开发</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-text-dim">
            &copy; {new Date().getFullYear()} 帮你搞网站. All rights reserved.
            Built with Next.js &amp; Sanity CMS.
          </p>
        </div>
      </div>
    </footer>
  );
}
