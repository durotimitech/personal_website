import fs from "fs";
import path from "path";

function getBlogSlugs() {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

const config = {
  siteUrl: "https://yourwebsite.com", // TODO: Replace with your real domain
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://yourwebsite.com/sitemap.xml"],
  },
  transform: async (_config, path) => {
    // Default transformation
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async () => {
    const slugs = getBlogSlugs();
    return slugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};

export default config;
