import { getBlogPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({
    metadata: post.metadata,
    slug: post.slug,
    content: post.content,
  });
}
