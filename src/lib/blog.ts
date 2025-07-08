import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function getAllPosts() {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(BLOG_DIR, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(source);
        return {
          ...data,
          date: data.date || "",
          excerpt: content.slice(0, 180) + (content.length > 180 ? "..." : ""),
          slug: data.slug || file.replace(/\.(md|mdx)$/, ""),
        };
      }),
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);
    const processed = await remark()
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content);

    return {
      ...data,
      slug,
      contentHtml: processed.toString(),
    };
  } catch (err) {
    console.error(`[getPostBySlug] Error for slug=`, slug, "at", filePath, err);
    return null;
  }
}
