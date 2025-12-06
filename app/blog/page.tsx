import PostList from "@/components/blog/PostList";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
};

export default function HomePage() {
  const posts = getBlogPosts();
  return (
    <section>
      <PostList posts={posts} />
    </section>
  );
}
