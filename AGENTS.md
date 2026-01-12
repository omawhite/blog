# AGENTS.md

This document provides guidelines for AI coding agents working in this Next.js blog codebase.

## Project Overview

A personal blog built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and MDX content.

**Tech Stack:**

- Framework: Next.js 16 with App Router
- UI: React 19, Radix UI primitives, Tailwind CSS 4
- Content: MDX/Markdown with frontmatter
- Testing: Vitest + Storybook + Playwright
- Linting/Formatting: Biome (primary), ESLint (storybook)
- Package Manager: pnpm

## Build/Lint/Test Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm start            # Start production server

# Linting & Formatting
pnpm lint             # Run Biome linter (biome check)
pnpm format           # Format with Biome (biome format --write)

# Testing
pnpm vitest                          # Run all tests
pnpm vitest run                      # Run tests once (no watch)
pnpm vitest ComponentName            # Run tests matching pattern
pnpm vitest Bio.stories              # Run single story file
pnpm vitest --coverage               # Run with coverage

# Storybook
pnpm storybook        # Start Storybook dev server (port 6006)
pnpm build-storybook  # Build Storybook for deployment
pnpm chromatic        # Visual regression tests
```

## Project Structure

```
app/                    # Next.js App Router pages
  blog/[slug]/          # Dynamic blog post routes
  layout.tsx            # Root layout with ThemeProvider
components/             # React components
  blog/                 # Blog-specific components
  ui/                   # shadcn/ui style base components
  *.stories.tsx         # Storybook stories (co-located)
content/posts/          # MDX/Markdown blog posts
lib/                    # Utility functions
public/                 # Static assets
.storybook/             # Storybook configuration
```

## Code Style Guidelines

### Formatting (Biome)

- **Indentation:** Spaces (not tabs)
- **Quotes:** Double quotes for strings
- **Imports:** Auto-organized by Biome
- Run `pnpm format` before committing

### TypeScript

- Strict mode enabled
- Use path alias `@/*` for imports from project root
- Prefer `interface` for component props, `type` for data shapes
- Always type function parameters and return values

```typescript
// Good - use path aliases
import { cn } from "@/lib/utils";

// Bad - relative paths for distant files
import { cn } from "../../lib/utils";
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `BlogPost.tsx` |
| Stories | `*.stories.tsx` | `BlogPost.stories.tsx` |
| Utilities | camelCase | `blog.ts`, `utils.ts` |
| Types | PascalCase | `PostMetadata` |
| Functions | camelCase | `getBlogPosts()` |
| Constants | SCREAMING_SNAKE | `MAX_POSTS_PER_PAGE` |

### Component Patterns

- **Default exports** for page/route components: `export default function Page() {}`
- **Named exports** for reusable UI components: `export { Button, buttonVariants };`
- **Client components** require `"use client";` directive at top of file
- **CVA** for component variants (see `components/ui/button.tsx` for example)
- **cn()** for className merging: `cn("base", conditional && "extra", className)`

### Storybook Stories

Stories are co-located with components (`Component.stories.tsx`). Follow this pattern:

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ComponentName from "./ComponentName";

const meta: Meta<typeof ComponentName> = {
  component: ComponentName,
  title: "Category/ComponentName",
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {};
export const WithProps: Story = { args: { propName: "value" } };
```

### JSDoc Comments

Add JSDoc to utility functions: `@param`, `@returns`, clear descriptions.

### Error Handling

- Use `throw new Error("descriptive message")` for errors
- Validate inputs early and fail fast
- Type narrowing with optional chaining: `match?.[1]`

### Blog Post Frontmatter

MDX/Markdown posts require this frontmatter:

```yaml
---
title: "Post Title"
publishedAt: "2024-01-15"
summary: "Brief description"
lastUpdatedAt: "2024-01-20"  # optional
image: "/images/post.jpg"     # optional
---
```

## Testing Guidelines

- Tests run via Vitest with Storybook integration
- Stories serve as component tests
- Browser tests use Playwright (headless Chromium)
- Add a11y testing via `@storybook/addon-a11y`

## Pre-commit Checklist

1. Run `pnpm lint` - fix any linting errors
2. Run `pnpm format` - format code
3. Run `pnpm build` - ensure production build succeeds
4. Run `pnpm vitest run` - ensure tests pass
