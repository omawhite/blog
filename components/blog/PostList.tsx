import BlogPostSnippet from "@/components/blog/BlogPostSnippet";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    lastUpdatedAt?: string;
    summary: string;
    image?: string;
  };
  content?: string;
};

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
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
