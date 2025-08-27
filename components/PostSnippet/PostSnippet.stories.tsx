import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostSnippet } from "./PostSnippet";

const meta = {
  title: "Components/Content/PostSnippet",
  component: PostSnippet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A post snippet component designed to display article/blog post previews with customizable variants. Built with shadcn/ui patterns and supports different sizes and visual styles.

## Features
- Multiple size variants (sm, default, lg) affecting typography and spacing
- Visual variants (default with border, ghost without border)
- Flexible content display with title, description, and publication date
- Custom link rendering support for framework integration
- Hover effects and smooth transitions
- Semantic HTML with proper article structure
- Full TypeScript support with proper prop types

## Usage
The PostSnippet component is perfect for:
- Blog post listings
- Article previews
- Content cards
- Feed items
- Search results

The component handles date formatting automatically and supports custom link components for framework integration (Next.js Link, React Router Link, etc.).`,
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the post (required)",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    description: {
      control: { type: "text" },
      description: "Optional description or excerpt of the post",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    publishedAt: {
      control: { type: "text" },
      description: "ISO date string for the publication date",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    href: {
      control: { type: "text" },
      description: "URL the post snippet should link to (required)",
      table: {
        type: { summary: "string" },
        category: "Navigation",
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
      description: "Controls the typography size and padding",
      table: {
        type: { summary: "sm | default | lg" },
        defaultValue: { summary: "default" },
        category: "Appearance",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "ghost"],
      description:
        "Visual style variant - default shows border, ghost is borderless",
      table: {
        type: { summary: "default | ghost" },
        defaultValue: { summary: "default" },
        category: "Appearance",
      },
    },
    renderLink: {
      control: false,
      description: "Custom link component renderer for framework integration",
      table: {
        type: {
          summary:
            "(props: { href: string; children: React.ReactNode }) => React.ReactNode",
        },
        category: "Advanced",
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
  },
  args: {
    title: "Getting Started with React Components",
    description:
      "Learn how to build reusable and maintainable React components using modern best practices and TypeScript.",
    publishedAt: "2024-01-15T10:30:00Z",
    href: "/blog/getting-started-react-components",
    size: "default",
    variant: "default",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostSnippet>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing most common usage
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default PostSnippet with all common props including title, description, and publication date.",
      },
    },
  },
};

// Story showcasing all size variants
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of all available size variants: small, default, and large with consistent content.",
      },
    },
  },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">
          Small
        </h4>
        <PostSnippet
          size="sm"
          variant="default"
          title="Understanding TypeScript Generics"
          description="A comprehensive guide to using TypeScript generics for type-safe and reusable code."
          publishedAt="2024-02-01T14:20:00Z"
          href="/blog/typescript-generics"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">
          Default
        </h4>
        <PostSnippet
          size="default"
          variant="default"
          title="Understanding TypeScript Generics"
          description="A comprehensive guide to using TypeScript generics for type-safe and reusable code."
          publishedAt="2024-02-01T14:20:00Z"
          href="/blog/typescript-generics"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">
          Large
        </h4>
        <PostSnippet
          size="lg"
          variant="default"
          title="Understanding TypeScript Generics"
          description="A comprehensive guide to using TypeScript generics for type-safe and reusable code."
          publishedAt="2024-02-01T14:20:00Z"
          href="/blog/typescript-generics"
        />
      </div>
    </div>
  ),
};

// Story showcasing visual variants
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of default variant (with border) and ghost variant (borderless).",
      },
    },
  },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">
          Default (with border)
        </h4>
        <PostSnippet
          variant="default"
          title="Building Scalable Design Systems"
          description="Learn how to create and maintain design systems that grow with your product and team."
          publishedAt="2024-01-28T09:15:00Z"
          href="/blog/scalable-design-systems"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">
          Ghost (borderless)
        </h4>
        <PostSnippet
          variant="ghost"
          title="Building Scalable Design Systems"
          description="Learn how to create and maintain design systems that grow with your product and team."
          publishedAt="2024-01-28T09:15:00Z"
          href="/blog/scalable-design-systems"
        />
      </div>
    </div>
  ),
};

// Story with minimal content (title only)
export const MinimalContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "PostSnippet with only required props (title and href) demonstrating minimal usage.",
      },
    },
  },
  args: {
    title: "Quick Tips for Better Code Reviews",
    href: "/blog/code-review-tips",
    description: undefined,
    publishedAt: undefined,
  },
  render: (args) => (
    <div className="max-w-lg">
      <PostSnippet {...args} />
    </div>
  ),
};

// Story with long content
export const LongContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "PostSnippet with longer title and description to test text wrapping and layout.",
      },
    },
  },
  args: {
    title:
      "The Complete Guide to Modern Frontend Development: From Vanilla JavaScript to Advanced React Patterns",
    description:
      "Dive deep into the evolution of frontend development, exploring everything from fundamental JavaScript concepts to advanced React patterns, state management solutions, performance optimization techniques, and modern tooling that powers today's web applications.",
    publishedAt: "2024-01-20T16:45:00Z",
    href: "/blog/complete-frontend-guide",
  },
  render: (args) => (
    <div className="max-w-2xl">
      <PostSnippet {...args} />
    </div>
  ),
};

// Story with custom link renderer
export const CustomLinkRenderer: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Example using custom link renderer (useful for Next.js Link, React Router, etc.).",
      },
    },
  },
  args: {
    title: "Advanced React Patterns for Scalable Applications",
    description:
      "Explore compound components, render props, and custom hooks for building maintainable React applications.",
    publishedAt: "2024-01-25T11:30:00Z",
    href: "/blog/advanced-react-patterns",
    renderLink: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          alert(`Custom link clicked: ${href}`);
        }}
      >
        {children}
      </a>
    ),
  },
  render: (args) => (
    <div className="max-w-xl">
      <PostSnippet {...args} />
    </div>
  ),
};
