import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Components/Navbar",
  args: {
    links: [{ label: "Home", href: "/", key: "home" }],
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {};

export const MultipleLinks: Story = {
  args: {
    links: [
      { label: "Home", href: "/", key: "home" },
      { label: "Blog", href: "/blog", key: "blog" },
      { label: "Contact", href: "/contact", key: "contact" },
    ],
  },
};
