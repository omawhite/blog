import { NextResponse } from "next/server";
import { getPosts } from "@/lib/posts";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { generateRSS } from "@/lib/rss";
import { getBaseUrl } from "@/lib/url";

export async function GET() {
  try {
    const baseUrl = getBaseUrl();

    // Fetch published posts
    const posts = await getPosts();

    // Create feed instance
    const feed = generateRSS();

    // Add posts to feed
    posts.docs.forEach((post) => {
      const html = convertLexicalToHTML({ data: post.content });
      feed.addItem({
        title: post.title,
        id: post.id.toString(),
        link: `${baseUrl}/posts/${post.slug}`,
        description: post.description || "",
        content: post.content ? html : "",
        author: [
          {
            name: "Omar White",
          },
        ],
        date: new Date(post.publishedAt),
        image:
          post.featuredImage &&
          typeof post.featuredImage === "object" &&
          "url" in post.featuredImage
            ? {
                url: post.featuredImage.url || "",
                title: post.title,
              }
            : undefined,
      });
    });

    // Return RSS feed
    return new NextResponse(feed.rss2(), {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to generate RSS feed" },
      { status: 500 },
    );
  }
}
