import { Feed } from "feed";
import { getBaseUrl } from "./url";

export function generateRSS() {
  // Get the domain from environment variable or fallback to localhost

  const baseUrl = getBaseUrl();

  const feed = new Feed({
    title: "My Blog",
    description: "Latest blog posts and updates",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      rss: `${baseUrl}/rss`,
      atom: `${baseUrl}/atom`,
    },
    author: {
      name: "Omar White",
    },
  });

  return feed;
}
