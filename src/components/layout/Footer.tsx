import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-base font-semibold tracking-tight">
              帮你搞网站
            </Link>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              独立站搭建，不套模板、不敷衍。<br />
              每个网站都是手写代码、个性定制。
            </p>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-text-dim mb-3">
              导航
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "首页" },
                { href: "/about", label: "关于" },
                { href: "/cases", label: "案例" },
                { href: "/services", label: "服务" },
                { href: "/blog", label: "博客" },
                { href: "/contact", label: "联系" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-text-dim mb-3">
              联系
            </h3>
            <div className="flex flex-col gap-2 text-sm text-text-muted">
              <span>抖音</span>
              <span>小红书</span>
              <span>闲鱼</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} 帮你搞网站
          </p>
        </div>
      </div>
    </footer>
  );
}
