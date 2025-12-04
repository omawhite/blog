import { getBlogPosts } from "@/lib/blog";
import { baseUrl } from "../../sitemap";
// import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params} : {params: {slug: string}}) {
const post = getBlogPosts().find((p) => p.slug === params.slug);

 if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    lastUpdatedAt,
    summary: description
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
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images: [ogImage],
    },
  }
}

export default async function BlogPost({params}: {params: {slug: string}}) {
//  const post = getBlogPosts().find((post) => post.slug === params.slug)
//   if (!post) {
//      notFound()
//   }


//   return (
//     <div>Post goes here</div>
//   )

const {slug } = await params

// biome-ignore lint/suspicious/noImplicitAnyLet: I don't feel like typing this right now
let Post;
// Try to import .mdx first, if it fails, try .md, that way posts can be written in either format
try {
  const mdxModule = await import(`@/content/posts/${slug}.mdx`)
  Post = mdxModule.default
} catch {
  const mdModule = await import(`@/content/posts/${slug}.md`)
  Post = mdModule.default
}

return <Post />
}