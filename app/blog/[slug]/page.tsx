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
  searchParams: URLSearchParams;
}) {
  const { slug } = await params;

  // Try to import the file with .mdx extension first, then fallback to .md
  let Post: React.ComponentType;
  try {
    const mdxModule = await import(`@/content/posts/${slug}.mdx`);
    Post = mdxModule.default;
  } catch (mdxError) {
    console.error(
      `Failed to load MDX for slug "${slug}", trying MD. Error:`,
      mdxError,
    );
    const mdModule = await import(`@/content/posts/${slug}.md`);
    Post = mdModule.default;
  }

  return <Post />;
}

export const dynamicParams = false;
