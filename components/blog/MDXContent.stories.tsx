import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MDXContent from "./MDXContent";
// Import actual MDX files as React components
import HowIEndedUpASoftwareEngineer from "@/content/posts/how-i-ended-up-a-software-engineer.md";
import SoIBrokeMyWebsite from "@/content/posts/so-i-broke-my-website.md";

const meta: Meta<typeof MDXContent> = {
  component: MDXContent,
  title: "Blog/MDXContent",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof MDXContent>;

export const HowIEndedUp: Story = {
  render: () => (
    <MDXContent
      postMetadata={{
        title: "How I Ended Up a Software Engineer",
        publishedAt: "2024-01-15",
        summary: "A journey into software engineering",
      }}
    >
      <HowIEndedUpASoftwareEngineer />
    </MDXContent>
  ),
};

export const BrokeMyWebsite: Story = {
  render: () => (
    <MDXContent
      postMetadata={{
        title: "So I Broke My Website",
        publishedAt: "2024-02-20",
        summary: "What happens when things go wrong",
      }}
    >
      <SoIBrokeMyWebsite />
    </MDXContent>
  ),
};
