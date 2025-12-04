import Link from "next/link";
import PublishedDate from "./PublishedDate";

interface BlogPostSnippetProps {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdatedAt?: string;
  summary: string;
}

export default function BlogPostSnippet({
  slug,
  title,
  publishedAt,
  lastUpdatedAt,
  summary,
}: BlogPostSnippetProps) {
  return (
    <article>
      <h2>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <PublishedDate date={publishedAt} />
      {lastUpdatedAt && <p>Last updated on: {lastUpdatedAt}</p>}
      <p>{summary}</p>
    </article>
  );
}
