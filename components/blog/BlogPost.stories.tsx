import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import BlogPost from "./BlogPost";
// Import actual MDX files as React components
import HowIEndedUpASoftwareEngineer from "@/content/posts/how-i-ended-up-a-software-engineer.md";
import SoIBrokeMyWebsite from "@/content/posts/so-i-broke-my-website.md";

const meta: Meta<typeof BlogPost> = {
  component: BlogPost,
  title: "Blog/BlogPost",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof BlogPost>;

export const HowIEndedUp: Story = {
  render: () => (
    <BlogPost
      postMetadata={{
        title: "How I Ended Up a Software Engineer",
        publishedAt: "2024-01-15",
        summary: "A journey into software engineering",
      }}
    >
      <HowIEndedUpASoftwareEngineer />
    </BlogPost>
  ),
};

export const BrokeMyWebsite: Story = {
  render: () => (
    <BlogPost
      postMetadata={{
        title: "So I Broke My Website",
        publishedAt: "2024-02-20",
        summary: "What happens when things go wrong",
      }}
    >
      <SoIBrokeMyWebsite />
    </BlogPost>
  ),
};
