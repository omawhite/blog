import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BioSection } from "./BioSection";

const meta = {
  title: "Components/Content/BioSection",
  component: BioSection,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A bio section component that renders Payload CMS RichText content. Built to display personal bio information with proper formatting and styling.

## Features
- Renders Payload CMS RichText data structures
- Handles null/undefined bioData gracefully
- Configurable styling via className prop
- Built with TypeScript for type safety
- Semantic HTML structure for accessibility

## Usage
The BioSection component is perfect for:
- Personal bio sections on home pages
- Author information displays
- About page content
- Profile descriptions
- Any rich text content from Payload CMS

Pass the bioData from Payload CMS directly to the component and it will handle the rendering automatically.`,
      },
    },
  },
  argTypes: {
    bioData: {
      control: { type: "object" },
      description: "Payload CMS RichText data structure",
      table: {
        type: { summary: "unknown" },
        category: "Content",
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
} satisfies Meta<typeof BioSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock RichText data structure that matches Lexical editor state format
const mockBioData = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Hello! I'm a passionate web developer with over 5 years of experience building modern, scalable applications. I specialize in React, TypeScript, and Next.js, and I love sharing my knowledge through writing and teaching.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while reading about the latest developments in web development.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};

const shortBioData = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Software engineer and technical writer passionate about creating amazing web experiences.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};

const richBioData = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: "About Me",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        tag: "h3",
        type: "heading",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "I'm a ",
            type: "text",
            version: 1,
          },
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: "full-stack developer",
            type: "text",
            version: 1,
          },
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: " with a passion for creating ",
            type: "text",
            version: 1,
          },
          {
            detail: 0,
            format: 2,
            mode: "normal",
            style: "",
            text: "beautiful, functional web applications",
            type: "text",
            version: 1,
          },
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: ". My expertise includes:",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "• Frontend development with React, Next.js, and TypeScript",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "• Backend development with Node.js and PostgreSQL",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "I believe in writing clean, maintainable code and creating delightful user experiences.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};

// Default story with typical bio content
export const Default: Story = {
  args: {
    //@ts-expect-error because mock types aren't perfect
    bioData: mockBioData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default BioSection with typical bio content including multiple paragraphs.",
      },
    },
  },
};

// Story with short bio content
export const ShortBio: Story = {
  args: {
    //@ts-expect-error because mock types aren't perfect
    bioData: shortBioData,
  },
  parameters: {
    docs: {
      description: {
        story: "A short, concise bio perfect for brief introductions.",
      },
    },
  },
};

// Story with rich formatted content
export const RichContent: Story = {
  args: {
    //@ts-expect-error because mock types aren't perfect
    bioData: richBioData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Bio with rich formatting including headings, bold/italic text, lists, and links.",
      },
    },
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  args: {
    //@ts-expect-error because mock types aren't perfect
    bioData: mockBioData,
    className: "bg-muted/50 p-6 rounded-lg max-w-2xl",
  },
  parameters: {
    docs: {
      description: {
        story: "BioSection with custom styling applied via className prop.",
      },
    },
  },
};

// Interactive playground story
export const Playground: Story = {
  args: {
    //@ts-expect-error because mock types aren't perfect
    bioData: mockBioData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with BioSection props and see real-time changes.",
      },
    },
  },
};
