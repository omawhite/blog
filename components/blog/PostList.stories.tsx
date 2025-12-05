import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PostList from "./PostList";

const meta: Meta<typeof PostList> = {
  component: PostList,
  title: "Blog/PostList",
};

export default meta;
type Story = StoryObj<typeof PostList>;

const samplePosts = [
  {
    slug: "automating-my-crate-digging-with-youtube-dl",
    metadata: {
      title: "Automating My Crate Digging with youtube-dl",
      publishedAt: "2024-01-15",
      summary:
        "Learn how I automated my vinyl record collection discovery process using youtube-dl and custom scripts.",
    },
  },
  {
    slug: "how-i-ended-up-a-software-engineer",
    metadata: {
      title: "How I Ended Up a Software Engineer",
      publishedAt: "2024-02-20",
      lastUpdatedAt: "2024-03-10",
      summary:
        "A retrospective on my journey into software engineering and the unexpected path that led me here.",
    },
  },
  {
    slug: "so-i-broke-my-website",
    metadata: {
      title: "So I Broke My Website",
      publishedAt: "2024-03-05",
      summary:
        "An honest account of a critical deployment error and the lessons I learned from it.",
    },
  },
];

export const Primary: Story = {
  render: () => <PostList posts={samplePosts} />,
};

export const Empty: Story = {
  render: () => <PostList posts={[]} />,
};
