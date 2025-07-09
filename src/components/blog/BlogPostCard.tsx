import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  slug: string;
}

export default function BlogPostCard({
  title,
  date,
  coverImage,
  excerpt,
  slug,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--divider)] shadow hover:shadow-lg transition"
    >
      {coverImage && (
        <div className="relative w-full h-56">
          <Image src={coverImage} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-[var(--text)]">{title}</h2>
        <p className="text-sm text-[var(--divider)] mb-2">
          {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-base text-[var(--text)] line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
}
