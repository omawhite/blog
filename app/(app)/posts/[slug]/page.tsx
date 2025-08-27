import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPost } from "@/lib/posts";

// TODO: Add this back in later
// export const revalidate = 3600 // Revalidate every hour

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();

    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const metadata: Metadata = {
    title: post.title,
    description: post.description || `Read "${post.title}" on my blog.`,
  };

  if (post.featuredImage && typeof post.featuredImage === "object") {
    const imageUrl = `/api/media/file/${post.featuredImage.filename}`;
    metadata.openGraph = {
      title: post.title,
      description: metadata.description as string,
      images: [
        {
          url: imageUrl,
          alt: post.featuredImage.alt || post.title,
        },
      ],
    };
    metadata.twitter = {
      card: "summary_large_image",
      title: post.title,
      description: metadata.description as string,
      images: [imageUrl],
    };
  }

  return metadata;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="post-detail">
      <div className="content">
        <article className="post">
          <header className="post-header">
            <h1>{post.title}</h1>
            {post.description && (
              <p className="post-description">{post.description}</p>
            )}
            {post.publishedAt && (
              <time className="post-date">
                Published on {new Date(post.publishedAt).toLocaleDateString()}
              </time>
            )}
            {post.lastUpdated && (
              <time className="post-updated">
                Last updated {new Date(post.lastUpdated).toLocaleDateString()}
              </time>
            )}
          </header>

          {post.featuredImage && typeof post.featuredImage === "object" && (
            <div className="featured-image">
              <Image
                src={`/api/media/file/${post.featuredImage.filename}`}
                alt={post.featuredImage.alt || post.title}
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="post-content">
            <RichText data={post.content} />
          </div>
        </article>

        <nav className="post-navigation">
          <Link href="/posts">← Back to Posts</Link>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </div>
  );
}
