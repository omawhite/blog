import AllBlogPosts from "@/components/blog/AllBlogPosts";

export const metadata = {
  title: "Blog",
};

export default function HomePage() {
  return (
    <main>
      <AllBlogPosts />
    </main>
  );
}
