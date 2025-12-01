import type { MDXComponents } from "mdx/types";

//This is where I would override what gets rendered for different markdown elements
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
