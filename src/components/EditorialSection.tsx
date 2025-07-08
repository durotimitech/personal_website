import { getAllPosts } from "@/lib/blog";
import BlogPostCard from "@/components/blog/BlogPostCard";

export default async function EditorialSection() {
  const posts = await getAllPosts();
  if (!posts || posts.length === 0) return null;
  const latest = posts.slice(0, 3);

  return (
    <section
      className="w-full bg-[var(--card)] py-16 px-2 md:px-0 relative"
      aria-labelledby="latest-article-label"
    >
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl p-8 bg-[var(--background)] border border-[var(--divider)] shadow-sm">
        {/* Label */}
        <div className="flex items-center gap-2 text-base md:text-lg font-bold mb-10 pl-2" id="latest-article-label">
          <span className="w-3 h-3 rounded-full bg-black inline-block" aria-hidden="true" />
          LATEST ARTICLES
        </div>
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
