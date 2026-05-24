"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/cases", label: "案例" },
  { href: "/services", label: "服务" },
  { href: "/blog", label: "博客" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          帮你搞网站
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-6 h-6 flex flex-col items-center justify-center gap-1"
          aria-label="菜单"
        >
          <span className={`block w-5 h-px bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
