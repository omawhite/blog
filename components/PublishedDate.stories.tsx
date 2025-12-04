import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PublishedDate from "./PublishedDate";

const meta: Meta<typeof PublishedDate> = {
  component: PublishedDate,
  title: "Components/PublishedDate",
  args: {
    date: "2024-02-20",
  },
};

export default meta;
type Story = StoryObj<typeof PublishedDate>;

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
      <PublishedDate date="2024-01-15" />
      <PublishedDate date="2024-02-20" label="Released:" />
      <PublishedDate date="2024-03-05" label="Published on:" />
    </div>
  ),
};
