import type { MDXComponents } from "mdx/types";

// Here you can create custom mapping between MDX and HTML or JSX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
