import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PostDate from "./PostDate";

const meta: Meta<typeof PostDate> = {
  component: PostDate,
  title: "Blog/PostDate",
  args: {
    date: "2024-02-20",
  },
};

export default meta;
type Story = StoryObj<typeof PostDate>;

export const Primary: Story = {};

export const WithLabel: Story = {
  args: {
    date: "2024-03-05",
    label: "Published",
  },
};

export const DifferentDates: Story = {
  render: () => (
    <div className="space-y-2">
      <PostDate date="2024-01-15" />
      <PostDate date="2024-02-20" label="Released:" />
      <PostDate date="2024-03-05" label="Published on:" />
    </div>
  ),
};
