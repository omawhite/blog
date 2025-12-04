import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import BlogPostSnippet from "./BlogPostSnippet";

const meta: Meta<typeof BlogPostSnippet> = {
  component: BlogPostSnippet,
  title: "Components/BlogPostSnippet",
  args: {
    title: "How I Ended Up a Software Engineer",
    publishedAt: "2024-02-20",
    summary:
      "A retrospective on my journey into software engineering and the unexpected path that led me here.",
  },
};

export default meta;
type Story = StoryObj<typeof BlogPostSnippet>;

export const Primary: Story = {};

export const WithLastUpdated: Story = {
  args: {
    title: "So I Broke My Website",
    publishedAt: "2024-03-05",
    lastUpdatedAt: "2024-03-10",
    summary: "An honest account of a critical deployment error and the lessons I learned from it.",
  },
};

export const LongSummary: Story = {
  args: {
    title: "Automating My Crate Digging with youtube-dl",
    publishedAt: "2024-01-15",
    summary:
      "Learn how I automated my vinyl record collection discovery process using youtube-dl and custom scripts. This comprehensive guide covers everything from initial setup to advanced filtering techniques, and includes real-world examples from my own music discovery workflow.",
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-8">
      <BlogPostSnippet
        title="Automating My Crate Digging with youtube-dl"
        slug="automating-crate-digging-youtube-dl"
        publishedAt="2024-01-15"
        summary="Learn how I automated my vinyl record collection discovery process using youtube-dl and custom scripts."
      />
      <BlogPostSnippet
        title="How I Ended Up a Software Engineer"
        slug="how-i-ended-up-a-software-engineer"
        publishedAt="2024-02-20"
        lastUpdatedAt="2024-03-10"
        summary="A retrospective on my journey into software engineering and the unexpected path that led me here."
      />
      <BlogPostSnippet
        title="So I Broke My Website"
        slug="so-i-broke-my-website"
        publishedAt="2024-03-05"
        summary="An honest account of a critical deployment error and the lessons I learned from it."
      />
    </div>
  ),
};
