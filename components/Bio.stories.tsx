import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Bio from "./Bio";

const meta: Meta<typeof Bio> = {
  component: Bio,
  title: "Components/Bio",
};

export default meta;
type Story = StoryObj<typeof Bio>;

export const Default: Story = {};
