interface BlogPostSnippetProps {
  title: string;
  publishedAt: string;
  lastUpdatedAt?: string;
  summary: string;
}

export default function BlogPostSnippet({
  title,
  publishedAt,
  lastUpdatedAt,
  summary,
}: BlogPostSnippetProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Published on: {publishedAt}</p>
      {lastUpdatedAt && <p>Last updated on: {lastUpdatedAt}</p>}
      <p>{summary}</p>
    </div>
  );
}
