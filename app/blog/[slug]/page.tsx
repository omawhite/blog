import MDXContent from "@/components/blog/MDXContent";
import { getBlogPosts } from "@/lib/blog";
import { baseUrl } from "../../sitemap";
import { notFound } from "next/navigation";

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
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    //TODO: start using this
    // lastUpdatedAt,
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
  const post = getBlogPosts().find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const { extension } = post.fileMetadata;

  console.log("Loading blog post:", slug);
  console.log("Using extension:", extension);

  const { default: Post } = await import(`@/content/posts/${slug}${extension}`);

  return (
    <MDXContent>
      <Post />
    </MDXContent>
  );
}

export const dynamicParams = false;
