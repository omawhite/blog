import { getBlogPosts } from "@/lib/blog";
import { baseUrl } from "@/app/sitemap";
import { NextResponse } from "next/server";

export function GET() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .map((post) => ({
      title: post.metadata.title,
      publishedAt: post.metadata.publishedAt,
      summary: post.metadata.summary,
      slug: post.slug,
      url: `${baseUrl}/blog/${post.slug}`,
    }));

  return NextResponse.json(posts);
}
