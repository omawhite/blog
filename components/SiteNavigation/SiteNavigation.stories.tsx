import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SiteNavigation, type NavigationLink } from './SiteNavigation'

const meta = {
  title: 'Components/Navigation/SiteNavigation',
  component: SiteNavigation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A horizontal site navigation component built on top of shadcn/ui NavigationMenu. Supports both internal and external links with proper accessibility and responsive design.

## Features
- Built with Radix UI NavigationMenu primitives for full accessibility
- Supports both internal Next.js routes and external links
- Configurable links via props
- Consistent styling with navigationMenuTriggerStyle
- External links open in new tabs with proper security attributes
- TypeScript support with NavigationLink interface
- Responsive design that works on all screen sizes

## Usage
The SiteNavigation component is perfect for:
- Main site navigation headers
- Application menu bars  
- Category navigation
- Secondary navigation areas

Pass an array of NavigationLink objects to configure the navigation items. Each link can be marked as external to open in a new tab.`,
      },
    },
  },
  argTypes: {
    links: {
      control: { type: 'object' },
      description: 'Array of navigation links to display',
      table: {
        type: { summary: 'NavigationLink[]' },
        category: 'Content',
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
  },
  args: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SiteNavigation>

export default meta
type Story = StoryObj<typeof meta>

// Default story showing typical site navigation
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default SiteNavigation with common site links including Home, Blog, About, and Contact.',
      },
    },
  },
}

// Story with external links
export const WithExternalLinks: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation including external links that open in new tabs with proper security attributes.',
      },
    },
  },
  args: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About' },
      { href: 'https://github.com', label: 'GitHub', external: true },
      { href: 'https://twitter.com', label: 'Twitter', external: true },
    ],
  },
}

// Story with minimal links
export const MinimalNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Simple navigation with just a few essential links.',
      },
    },
  },
  args: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/blog', label: 'Blog' },
    ],
  },
}

// Story with many navigation items
export const ExtensiveNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation with many items to demonstrate how it handles larger menus.',
      },
    },
  },
  args: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/blog', label: 'Blog' },
      { href: '/projects', label: 'Projects' },
      { href: '/tutorials', label: 'Tutorials' },
      { href: '/resources', label: 'Resources' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: 'https://github.com', label: 'GitHub', external: true },
    ],
  },
}

// Story demonstrating custom styling
export const CustomStyling: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation with custom styling applied via className prop.',
      },
    },
  },
  args: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
    className: 'bg-muted/50 rounded-lg p-2',
  },
}

// Story showing different navigation categories
export const CategoryNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation focused on content categories, useful for blogs or documentation sites.',
      },
    },
  },
  args: {
    links: [
      { href: '/web-development', label: 'Web Development' },
      { href: '/design-systems', label: 'Design Systems' },
      { href: '/typescript', label: 'TypeScript' },
      { href: '/react', label: 'React' },
      { href: '/css', label: 'CSS' },
    ],
  },
}

// Interactive playground story
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with SiteNavigation props and see real-time changes.',
      },
    },
  },
}