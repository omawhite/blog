export const dynamic = "force-static";

import { getBlogPosts } from "@/lib/blog";
import { baseUrl } from "@/app/sitemap";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const items = posts
    .map((post) => {
      const pubDate = new Date(post.metadata.publishedAt).toUTCString();
      const link = `${baseUrl}/blog/${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${escapeXml(post.metadata.summary)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Omar Louis White</title>
    <link>${baseUrl}</link>
    <description>Omar's personal website</description>
    <language>en</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
