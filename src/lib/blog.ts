import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const BLOG_DIR = path.join(process.cwd(), "content");

export interface BlogPostPreview {
  title: string;
  description: string;
  date: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  excerpt: string;
}

export async function getAllPosts(): Promise<BlogPostPreview[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(BLOG_DIR, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(source);
        return {
          title: data.title || "",
          description: data.description || "",
          date: data.date || "",
          slug: data.slug || file.replace(/\.(md|mdx)$/, ""),
          coverImage: data.coverImage,
          tags: data.tags,
          excerpt: content.slice(0, 180) + (content.length > 180 ? "..." : ""),
        };
      }),
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  contentHtml: string;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
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
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      slug,
      coverImage: data.coverImage,
      tags: data.tags,
      contentHtml: processed.toString(),
    };
  } catch (err) {
    console.error(`[getPostBySlug] Error for slug=`, slug, "at", filePath, err);
    return null;
  }
}
