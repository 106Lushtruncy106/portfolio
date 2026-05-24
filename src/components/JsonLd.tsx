export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Portfolio Owner",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    jobTitle: "Independent Web Developer",
    knowsAbout: ["Web Development", "Next.js", "React", "TypeScript", "UI/UX Design"],
    description:
      "Independent web developer specializing in custom-built websites.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
