interface MDXContentProps {
  children: React.ReactNode;
}

/**
 * A wrapper component for MDX content that provides consistent styling.
 * Use this component to wrap compiled MDX components for typography and layout.
 */
export default function MDXContent({ children }: MDXContentProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      {children}
    </article>
  );
}
