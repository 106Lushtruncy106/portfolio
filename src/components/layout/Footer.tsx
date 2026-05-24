import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/cases", label: "Cases" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
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
              Portfolio
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs">
              Independent web developer specializing in custom-built websites
              that stand out from the crowd.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navigation
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
              Social
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
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted">
                Custom Web Development
              </li>
              <li className="text-sm text-text-muted">E-commerce Solutions</li>
              <li className="text-sm text-text-muted">Business Websites</li>
              <li className="text-sm text-text-muted">Brand Identity</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-text-dim">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            Built with Next.js & Sanity CMS.
          </p>
        </div>
      </div>
    </footer>
  );
}
