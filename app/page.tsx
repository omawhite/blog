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
        <p>
          Hi my name is Omar, I’m a software engineer that specializes in
          creating great front end experiences, primarily using react. When I’m
          not engineering I like to game and make music. Interested in talking
          to me about tech or working with me on a project? Reach out to me
          here.
        </p>
      </section>
      <section>
        <h2>Recent posts</h2>
        <PostList posts={recentPosts} />
      </section>
    </>
  );
}
