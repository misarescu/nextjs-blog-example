This is a Blog example project starting with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) selecting tailwind, typescript and pages router.

Install extra dependencies with\
`npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx next-mdx-remote` for MDX and MDX Remote\
`npm install -D @tailwind/typography` for tailwind typography plugin

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The posts routes are **posts/[postName]** where the dynamic slug _postName_ is used to map the _postName.mdx_ file from **content** directory.\
In this example _first-post.mdx_ and _second-post.mdx_ will be mapped to **posts/first-post** and **posts/second-post** routes.

Inside the _mdx-components.tsx_ file is defined the mapping from mdx to html. For this project no custom components are defined.\
If custom components are required they can be defined there like this:

```
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
    ),
    ...components,
  }
}
```
