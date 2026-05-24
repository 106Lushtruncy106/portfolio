import { getClient } from "@/lib/sanity";
import { featuredCasesQuery } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  let posts: any[] = [];
  try {
    // Try to fetch posts from Sanity for the RSS feed
    // posts = await getClient().fetch(postsQuery);
  } catch {
    // Ignore errors during RSS generation
  }

  const items = posts
    .map(
      (post: any) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug?.current}</link>
      <description>${escapeXml(post.excerpt || "")}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Portfolio Blog</title>
      <link>${baseUrl}</link>
      <description>Thoughts on web development, design, and technology.</description>
      <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
