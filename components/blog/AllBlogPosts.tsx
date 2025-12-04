import { getBlogPosts } from "@/lib/blog";
import BlogPostSnippet from "@/components/blog/BlogPostSnippet";

function AllBlogPosts() {
  const posts = getBlogPosts();

  return (
    <div>
      {posts.map(({ metadata, slug }) => (
        <BlogPostSnippet
          key={slug}
          slug={slug}
          title={metadata.title}
          publishedAt={metadata.publishedAt}
          lastUpdatedAt={metadata.lastUpdatedAt}
          summary={metadata.summary}
        />
      ))}
    </div>
  );
}

export default AllBlogPosts;