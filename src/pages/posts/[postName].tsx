import { GetServerSidePropsContext } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { readFile } from "fs/promises";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function Post({ mdxSource }: Props) {
  const title = mdxSource.frontmatter.title as string;
  return (
    <article className="prose prose-xl">
      <h1>Title: {title}</h1>
      {/* Get the mdx remotely from the content directory */}
      {/* The dynamic url id matches the mdx filename */}
      <MDXRemote {...mdxSource} />
    </article>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const mdxFileName = `src/content/${context.params?.postName}.mdx`;
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const mdxText = await readFile(mdxFileName, "utf8");
  const mdxSource = await serialize(mdxText, { parseFrontmatter: true });
  return { props: { mdxSource } };
}
