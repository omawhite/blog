import PostDate from "./PostDate";

type PostMetadata = {
  title: string;
  publishedAt: string;
  lastUpdatedAt?: string;
  summary: string;
  image?: string;
};

interface MDXContentProps {
  children: React.ReactNode;
  postMetadata: PostMetadata;
}

/**
 * A wrapper component for MDX content that provides consistent styling.
 * Use this component to wrap compiled MDX components for typography and layout.
 */
export default function MDXContent({
  children,
  postMetadata,
}: MDXContentProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>{postMetadata.title}</h1>
      <PostDate date={postMetadata.publishedAt} />
      {postMetadata.lastUpdatedAt && (
        <PostDate date={postMetadata.lastUpdatedAt} label="Last updated on:" />
      )}
      {children}
    </article>
  );
}
