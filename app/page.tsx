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
      <Bio />

      <section className="flex flex-col items-center mt-12">
        <h2 className="text-3xl font-bold tracking-tight">Recent posts</h2>
        <PostList posts={recentPosts} />
      </section>
    </>
  );
}
