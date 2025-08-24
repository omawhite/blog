# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with PostgreSQL database (uses docker-compose)
- `pnpm build` - Build the Next.js application with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter and formatter checks
- `pnpm format` - Format code with Biome
- `pnpm storybook` - Start Storybook development server on port 6006
- `pnpm build-storybook` - Build Storybook for production
- `pnpm chromatic` - Run visual regression tests with Chromatic

## Documentation Lookup

Use the `context7` MCP server to look up documentation for any technologies used in this project. This server provides access to comprehensive documentation for:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Storybook
- Vitest
- And other web development technologies

When working with unfamiliar APIs or need implementation guidance, use context7 to get accurate, up-to-date documentation.

## Project Architecture

This is a Next.js 15 blog application with the following key characteristics:

### Tech Stack
- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling with custom CSS variables
- **shadcn/ui** components (New York style) with Lucide icons
- **Storybook** for component documentation and testing
- **Vitest** with Playwright browser testing for Storybook integration
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **PostgreSQL 17** via Docker Compose for local development
- **pnpm** workspace setup

### File Structure
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn/ui components (configured for @/components/ui alias)
- `lib/utils.ts` - Utility functions (includes cn helper for Tailwind)
- `stories/` - Storybook stories and example components
- `.storybook/` - Storybook configuration with Next.js-Vite integration
- `docker-compose.yml` - PostgreSQL database for local development

### Key Configurations
- **Biome**: Handles both linting and formatting with Next.js and React rules
- **shadcn/ui**: Configured with CSS variables, New York style, and proper aliases
- **Storybook**: Integrated with Vitest for component testing and Chromatic for visual regression
- **Docker**: PostgreSQL 17 database accessible at `postgresql://postgres:password@localhost:5432/blog`

### Development Workflow
1. Run `pnpm dev` to start both PostgreSQL and Next.js dev server
2. Use Storybook for component development and documentation
3. Biome handles code quality and formatting automatically
4. Chromatic integration for visual regression testing in CI

### Package Management
- Uses pnpm workspace configuration
- Node.js >=20.11.1 and pnpm >=10.14.0 required
- Special handling for @tailwindcss/oxide and sharp packages

## Database Setup

PostgreSQL runs in Docker with:
- Database: `blog`
- User: `postgres` 
- Password: `password`
- Connection string: `postgresql://postgres:password@localhost:5432/blog`

The database starts automatically with `pnpm dev` and data persists in a Docker volume.