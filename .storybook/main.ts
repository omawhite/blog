import mdx from "@mdx-js/rollup";
import type { StorybookConfig } from "@storybook/nextjs-vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    //ensures .md and .mdx files can be imported in stories, mainly for rendering MDXContent stories
    config.plugins.push(
      mdx({
        mdExtensions: [".md"],
        mdxExtensions: [".mdx"],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    );
    return config;
  },
};
export default config;
