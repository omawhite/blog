import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SiteBanner } from "./SiteBanner";

const meta = {
  title: "Components/Layout/SiteBanner",
  component: SiteBanner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A site-wide banner component for displaying important messages at the top of pages. Perfect for announcements, warnings, maintenance notices, or promotional content.

## Features
- Multiple visual variants (info, warning, success, error, neutral)
- Optional dismissible functionality with close button
- Accessible design with proper ARIA labels and keyboard navigation
- Responsive design that works on all screen sizes
- Built with Tailwind CSS for consistent styling
- TypeScript support with proper prop types
- Customizable via className prop

## Usage
The SiteBanner component is perfect for:
- Site maintenance announcements
- Important notifications
- Cookie consent notices  
- Promotional messages
- System status updates
- Emergency alerts

The banner appears at the top of the page and can be dismissed by users if the dismissible prop is enabled.`,
      },
    },
  },
  argTypes: {
    message: {
      control: { type: "text" },
      description: "The message text to display in the banner",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["info", "warning", "success", "error", "neutral"],
      description: "Visual style variant of the banner",
      table: {
        type: { summary: "info | warning | success | error | neutral" },
        defaultValue: { summary: "info" },
        category: "Appearance",
      },
    },
    dismissible: {
      control: { type: "boolean" },
      description: "Whether the banner can be dismissed by the user",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    onDismiss: {
      control: false,
      description: "Callback function called when the banner is dismissed",
      table: {
        type: { summary: "() => void" },
        category: "Events",
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
  args: {
    message:
      "🚧 This site is currently under construction. Please check back soon!",
    variant: "info",
    dismissible: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SiteBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default SiteBanner with an informational message about site construction.",
      },
    },
  },
};

// Story showcasing all variants
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "All available banner variants demonstrating different message types and visual styles.",
      },
    },
  },
  render: () => (
    <div className="space-y-0">
      <SiteBanner
        variant="info"
        message="ℹ️ New features have been added! Check out our latest updates."
      />
      <SiteBanner
        variant="warning"
        message="⚠️ Scheduled maintenance will occur on Sunday from 2-4 AM EST."
      />
      <SiteBanner
        variant="success"
        message="✅ Your account has been successfully verified!"
      />
      <SiteBanner
        variant="error"
        message="❌ We're experiencing technical difficulties. Our team is working on a fix."
      />
      <SiteBanner
        variant="neutral"
        message="📢 Join our newsletter for the latest updates and exclusive content."
      />
    </div>
  ),
};

// Dismissible banner story
export const Dismissible: Story = {
  args: {
    message:
      "🍪 We use cookies to enhance your browsing experience. By continuing, you agree to our cookie policy.",
    variant: "neutral",
    dismissible: true,
    onDismiss: () => console.log("Banner dismissed!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "A dismissible banner with a close button. Click the X to dismiss the banner.",
      },
    },
  },
};

// Warning banner for maintenance
export const MaintenanceNotice: Story = {
  args: {
    message:
      "🔧 Scheduled maintenance: Our services will be unavailable tomorrow from 12-2 AM EST for system updates.",
    variant: "warning",
    dismissible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A warning banner for maintenance notices with dismissible functionality.",
      },
    },
  },
};

// Error banner for outages
export const ServiceOutage: Story = {
  args: {
    message:
      "🚨 We are currently experiencing service interruptions. Our team is working to resolve this issue.",
    variant: "error",
    dismissible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "An error banner for service outages that cannot be dismissed to ensure visibility.",
      },
    },
  },
};

// Success banner for announcements
export const LaunchAnnouncement: Story = {
  args: {
    message:
      "🎉 We're excited to announce the launch of our new blog platform! Explore the latest features.",
    variant: "success",
    dismissible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A success banner for positive announcements like feature launches or achievements.",
      },
    },
  },
};

// Long message banner
export const LongMessage: Story = {
  args: {
    message:
      "📚 Welcome to our comprehensive blog platform! Here you'll find in-depth articles, tutorials, and insights on web development, design systems, and modern programming practices. We're constantly updating our content with the latest industry trends and best practices to help you stay ahead in your development journey.",
    variant: "info",
    dismissible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A banner with a longer message to test text wrapping and layout.",
      },
    },
  },
};

// Custom styled banner
export const CustomStyling: Story = {
  args: {
    message:
      "✨ Custom styled banner with additional classes applied for unique branding.",
    variant: "neutral",
    dismissible: true,
    className:
      "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-900 border-purple-200",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A banner with custom styling applied via className to override default appearance.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with all SiteBanner props and see real-time changes.",
      },
    },
  },
};

// Real-world examples showcase
export const RealWorldExamples: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Collection of real-world banner examples for different use cases.",
      },
    },
  },
  render: () => (
    <div className="space-y-0">
      <SiteBanner
        variant="info"
        message="🎯 New to our platform? Check out our getting started guide!"
        dismissible={true}
      />
      <SiteBanner
        variant="warning"
        message="⏰ Limited time offer: 50% off premium features ends in 24 hours!"
        dismissible={true}
      />
      <SiteBanner
        variant="neutral"
        message="📱 Download our mobile app for the best experience on the go."
        dismissible={true}
      />
    </div>
  ),
};
