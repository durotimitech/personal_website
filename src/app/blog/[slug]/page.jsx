// page.jsx (pure JS for debugging)
import { getPostBySlug } from "@/lib/blog";
import SeoHead from "@/components/SeoHead";
import Image from "next/image";

export default async function Page({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div>Not found</div>;
  return (
    <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-0 flex flex-col items-center">
      <SeoHead {...post} />
      <article className="w-full max-w-3xl mx-auto bg-[var(--card)] rounded-2xl shadow-lg p-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-[var(--text)]">
            {post.title}
          </h1>
          <p className="text-sm text-[var(--divider)] mb-4">
            {new Date(post.date).toLocaleDateString()}
          </p>
          {post.coverImage && (
            <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>
        <section
          className="prose prose-lg max-w-none text-[var(--text)]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
