import Bio from "@/components/Bio";
import PostList from "@/components/blog/PostList";

import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Home",
};
export default function HomePage() {
  const recentPosts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, 3);
  return (
    <>
      <section>
        <Bio />
      </section>
      <section>
        <h2>Recent posts</h2>
        <PostList posts={recentPosts} />
      </section>
    </>
  );
}
