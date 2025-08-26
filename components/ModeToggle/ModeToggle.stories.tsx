import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./ModeToggle";

const meta = {
  title: "Components/UI/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A theme toggle component that allows users to switch between light, dark, and system themes. Built with next-themes for seamless theme management and shadcn/ui components for consistent styling.

## Features
- Three theme options: Light, Dark, and System (follows OS preference)
- Smooth icon transitions between sun and moon icons
- Accessible dropdown menu with keyboard navigation
- Screen reader friendly with proper ARIA labels
- Integrates seamlessly with next-themes
- Responsive design that works on all screen sizes
- Built with shadcn/ui Button and DropdownMenu components
- Uses Lucide icons for consistent iconography

## Usage
The ModeToggle component is perfect for:
- Application headers and navigation bars
- User preference panels and settings pages
- Responsive design that adapts to user's system preferences
- Accessibility-compliant theme switching

The component automatically shows the appropriate icon (sun for light mode, moon for dark mode) with smooth transitions. The dropdown menu provides easy access to all theme options.

## Theme Integration
This component requires the ThemeProvider from next-themes to be set up in your app. It automatically detects and responds to:
- User's system theme preference
- Previously selected theme from localStorage
- Theme changes from other parts of the application`,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    // ModeToggle has no props, but we can document the context it uses
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default ModeToggle component showing the theme switcher with icon transitions and dropdown menu.",
      },
    },
  },
};

// In different layouts
export const InNavigation: Story = {
  render: () => (
    <nav className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg">My App</h1>
        <div className="hidden sm:flex gap-4">
          <a href="#" className="text-sm hover:text-foreground/80">
            Home
          </a>
          <a href="#" className="text-sm hover:text-foreground/80">
            About
          </a>
          <a href="#" className="text-sm hover:text-foreground/80">
            Blog
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Theme:</span>
        <ModeToggle />
      </div>
    </nav>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "ModeToggle positioned in a navigation bar, showing how it integrates with typical app layouts.",
      },
    },
  },
};

// Accessibility showcase
export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Try using Tab to focus the button, then Enter/Space to open the
          dropdown. Use arrow keys to navigate menu items.
        </p>
        <ModeToggle />
      </div>

      <div className="p-4 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-2">Screen Reader Support</h3>
        <p className="text-sm text-muted-foreground mb-3">
          The button includes "Toggle theme" label for screen readers, and the
          dropdown menu is properly labeled.
        </p>
        <ModeToggle />
      </div>

      <div className="p-4 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-2">Focus Management</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Focus is properly managed when opening/closing the dropdown and
          selecting options.
        </p>
        <ModeToggle />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of ModeToggle's accessibility features including keyboard navigation, screen reader support, and focus management.",
      },
    },
  },
};

// Real-world usage examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Blog Header */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-background border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-xl">My Blog</h2>
              <p className="text-sm text-muted-foreground">
                Thoughts on web development
              </p>
            </div>
            <ModeToggle />
          </div>
        </div>
        <div className="p-4 text-sm text-muted-foreground">
          Blog header with theme toggle
        </div>
      </div>

      {/* Settings Panel */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-background border-b p-4">
          <h3 className="font-semibold">User Preferences</h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium">Theme</label>
              <p className="text-sm text-muted-foreground">
                Choose your preferred theme
              </p>
            </div>
            <ModeToggle />
          </div>
          <div className="text-sm text-muted-foreground">
            Settings panel with theme preference
          </div>
        </div>
      </div>

      {/* Minimal Toolbar */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-background p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
        <div className="p-4 text-sm text-muted-foreground">
          Minimal toolbar with theme toggle
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world examples showing ModeToggle in different UI contexts like blog headers, settings panels, and toolbars.",
      },
    },
  },
};
