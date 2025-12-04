import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import BlogPost from "./BlogPost";

const meta: Meta<typeof BlogPost> = {
  component: BlogPost,
  title: "Blog/BlogPost",
  args: {
    title: "How I Ended Up a Software Engineer",
    publishedAt: "2024-02-20",
    content:
      "A retrospective on my journey into software engineering and the unexpected path that led me here.",
  },
};

export default meta;
type Story = StoryObj<typeof BlogPost>;

export const Primary: Story = {};

export const WithLastUpdated: Story = {
  args: {
    title: "So I Broke My Website",
    publishedAt: "2024-03-05",
    lastUpdatedAt: "2024-03-10",
    content: "An honest account of a critical deployment error and the lessons I learned from it.",
  },
};

export const LongContent: Story = {
  args: {
    title: "Automating My Crate Digging with youtube-dl",
    publishedAt: "2024-01-15",
    content:
      "Learn how I automated my vinyl record collection discovery process using youtube-dl and custom scripts. This comprehensive guide covers everything from initial setup to advanced filtering techniques.",
  },
};
