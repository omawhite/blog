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
    <MDXContent>
      <HowIEndedUpASoftwareEngineer />
    </MDXContent>
  ),
};

export const BrokeMyWebsite: Story = {
  render: () => (
    <MDXContent>
      <SoIBrokeMyWebsite />
    </MDXContent>
  ),
};
