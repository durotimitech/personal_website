import { getAllPosts } from "@/lib/blog";
import BlogPostCard from "@/components/blog/BlogPostCard";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center text-[var(--text)]">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
            
          ))}
        </div>
      </div>
    </main>
  );
}
