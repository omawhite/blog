import PostDate from "./PostDate";

interface BlogPostProps {
  title: string;
  publishedAt: string;
  lastUpdatedAt?: string;
  content: string | React.ReactNode;
}

export default function BlogPost({
  title,
  publishedAt,
  lastUpdatedAt,
  content,
}: BlogPostProps) {
  return (
    <section>
      <h1>{title}</h1>
      <PostDate date={publishedAt} />
      {lastUpdatedAt && (
        <PostDate date={lastUpdatedAt} label={"Last updated on:"} />
      )}
      <article>{content}</article>
    </section>
  );
}
