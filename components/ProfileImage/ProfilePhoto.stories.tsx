import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProfilePhoto } from "./ProfilePhoto";

const meta = {
  title: "Components/UI/ProfilePhoto",
  component: ProfilePhoto,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A circular profile photo component that displays user avatars with fallback support. Built with Next.js Image optimization and responsive design.

## Features
- Circular profile photo display
- Automatic fallback to profile-fallback.jpg when no image is provided or image fails to load
- Multiple size variants (sm, md, lg, xl, 2xl)
- Next.js Image optimization with proper sizing
- Smooth loading transitions
- TypeScript support with full type safety
- Accessible with proper alt text support

## Usage
The ProfilePhoto component is perfect for:
- User avatars in navigation bars
- Profile pages and user cards
- Comment sections and user lists
- Any place where you need to display user profile images

The component automatically handles image loading errors and falls back to the default profile image located at /images/profile-fallback.jpg.`,
      },
    },
  },
  argTypes: {
    src: {
      control: { type: "text" },
      description: "URL of the profile image to display",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    alt: {
      control: { type: "text" },
      description: "Alt text for accessibility",
      table: {
        type: { summary: "string" },
        category: "Accessibility",
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "2xl"],
      description: "Size variant of the profile photo",
      table: {
        type: { summary: '"sm" | "md" | "lg" | "xl" | "2xl"' },
        category: "Appearance",
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with fallback image
export const Default: Story = {
  args: {
    alt: "User profile photo",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default ProfilePhoto using the fallback image when no src is provided.",
      },
    },
  },
};

// Story with custom image URL
export const WithCustomImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    alt: "John Doe profile photo",
  },
  parameters: {
    docs: {
      description: {
        story: "ProfilePhoto with a custom image URL from Unsplash.",
      },
    },
  },
};

// Story showing different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <ProfilePhoto size="sm" alt="Small profile photo" />
        <p className="text-xs text-muted-foreground mt-2">Small</p>
      </div>
      <div className="text-center">
        <ProfilePhoto size="md" alt="Medium profile photo" />
        <p className="text-xs text-muted-foreground mt-2">Medium</p>
      </div>
      <div className="text-center">
        <ProfilePhoto size="lg" alt="Large profile photo" />
        <p className="text-xs text-muted-foreground mt-2">Large</p>
      </div>
      <div className="text-center">
        <ProfilePhoto size="xl" alt="Extra large profile photo" />
        <p className="text-xs text-muted-foreground mt-2">Extra Large</p>
      </div>
      <div className="text-center">
        <ProfilePhoto size="2xl" alt="2X large profile photo" />
        <p className="text-xs text-muted-foreground mt-2">2X Large</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available size variants of the ProfilePhoto component.",
      },
    },
  },
};

// Story with broken image URL to show fallback
export const FallbackImage: Story = {
  args: {
    src: "https://broken-image-url.com/nonexistent.jpg",
    alt: "Broken image fallback",
  },
  parameters: {
    docs: {
      description: {
        story:
          "ProfilePhoto with a broken image URL to demonstrate the fallback behavior.",
      },
    },
  },
};
