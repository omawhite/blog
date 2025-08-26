import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const postSnippetVariants = cva(
  "border rounded-lg p-6 space-y-3 transition-colors hover:bg-muted/50",
  {
    variants: {
      variant: {
        default: "border-border",
        ghost: "border-transparent",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const postSnippetTitleVariants = cva(
  "font-semibold tracking-tight hover:underline transition-all duration-200",
  {
    variants: {
      size: {
        default: "text-xl",
        sm: "text-lg",
        lg: "text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const postSnippetDescriptionVariants = cva(
  "text-muted-foreground leading-relaxed",
  {
    variants: {
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const postSnippetDateVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      default: "text-sm",
      sm: "text-xs",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PostSnippetProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof postSnippetVariants> {
  title: string;
  description?: string;
  publishedAt?: string;
  href: string;
  renderLink?: (props: {
    href: string;
    children: React.ReactNode;
  }) => React.ReactNode;
}

function PostSnippet({
  className,
  variant,
  size,
  title,
  description,
  publishedAt,
  href,
  renderLink,
  ...props
}: PostSnippetProps) {
  const LinkComponent =
    renderLink || (({ href, children }) => <a href={href}>{children}</a>);

  return (
    <article
      className={cn(postSnippetVariants({ variant, size, className }))}
      {...props}
    >
      <h2 className={cn(postSnippetTitleVariants({ size }))}>
        <LinkComponent href={href}>{title}</LinkComponent>
      </h2>
      {publishedAt && (
        <time className={cn(postSnippetDateVariants({ size }))}>
          {new Date(publishedAt).toLocaleDateString()}
        </time>
      )}
      {description && (
        <p className={cn(postSnippetDescriptionVariants({ size }))}>
          {description}
        </p>
      )}
    </article>
  );
}

export { PostSnippet, postSnippetVariants };
