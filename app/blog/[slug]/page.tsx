import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import { getBlogPosts } from "@/lib/blog";
import { baseUrl } from "../../sitemap";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPosts().find((p) => p.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    lastUpdatedAt,
    summary: description,
  } = post.metadata;
  //TODO: implement ogImage stuff
  // let ogImage = image
  //   ? image
  //   : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  console.log(post.content);

  return (
    <BlogPost
      title={post.metadata.title}
      publishedAt={post.metadata.publishedAt}
      lastUpdatedAt={post.metadata.lastUpdatedAt}
      content={post.content}
    />
  );
}
