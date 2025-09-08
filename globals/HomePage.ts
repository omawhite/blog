import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Home Page",
  admin: {
    description: "Configure the home page content and SEO settings",
  },
  fields: [
    {
      name: "pageTitle",
      type: "text",
      label: "Page Title",
      required: true,
      defaultValue: "Home",
      admin: {
        description: "The main heading displayed on the home page",
      },
    },
    {
      name: "bio",
      type: "richText",
      label: "Bio",
      required: true,
    },
    {
      name: "profilePicture",
      type: "upload",
      relationTo: "media",
      label: "Profile Picture",
      admin: {
        description: "Your profile picture displayed on the home page",
      },
    },
    {
      type: "collapsible",
      label: "SEO",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Page Title",
          required: true,
          defaultValue: "Home Page",
          admin: {
            description:
              "The title that appears in browser tabs and search results",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Meta Description",
          maxLength: 160,
          admin: {
            description:
              "Brief description for search engines (max 160 characters)",
          },
        },
        {
          name: "keywords",
          type: "text",
          label: "Keywords",
          admin: {
            description: "Comma-separated keywords for SEO",
          },
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
          label: "Open Graph Image",
          admin: {
            description: "Image that appears when sharing on social media",
          },
        },
        {
          name: "canonicalUrl",
          type: "text",
          label: "Canonical URL",
          admin: {
            description: "Preferred URL for this page (optional)",
          },
        },
      ],
    },
  ],
};
