export const dynamic = "force-static";

import { getBlogPosts } from "@/lib/blog";

export const baseUrl = "https://omar.louiswhite.me";

export default function sitemap() {
  const routes = ["/", "/blog"];

  const blogPosts = getBlogPosts().map((post) => `/blog/${post.slug}`);

  return [...routes, ...blogPosts].map((route) => {
    return `${baseUrl}${route}`;
  });
}
