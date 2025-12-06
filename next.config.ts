import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  //Allow both .md and .mdx files to be treated as pages/components
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
  options: {
    // Because i'm using turbopack plugins must be specified as strings see: https://nextjs.org/docs/app/guides/mdx#using-plugins-with-turbopack
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
    // rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
