import Link from "next/link";
import PostDate from "./PostDate";

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
    <article className="flex flex-col gap-2 py-4">
      <h2 className="text-2xl font-bold leading-tight tracking-tight">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <div className="text-sm text-muted-foreground">
        <PostDate date={publishedAt} />
        {lastUpdatedAt && <p>Last updated on: {lastUpdatedAt}</p>}
      </div>
      <p className="leading-relaxed text-muted-foreground">{summary}</p>
    </article>
  );
}
