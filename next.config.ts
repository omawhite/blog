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
});

export default withMDX(nextConfig);
