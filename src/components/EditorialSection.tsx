import Image from "next/image";

const articles = [
  {
    image: "/images/ai-branding-article-cover.jpg",
    date: "February 5, 2023",
    readTime: "9 min read",
    title: "What We're Building, Thinking, Exploring, and Creating Next",
    tag: "Artificial intelligent",
    alt: "AI branding and digital innovation article cover image",
  },
  {
    image: "/images/studio-visual-experiments-cover.jpg",
    date: "August 17, 2024",
    readTime: "2 min read",
    title: "Studio Thoughts, Visual Experiments, and Brand Evolution Insights",
    tag: "Artificial intelligent",
    alt: "Studio visual experiments and brand evolution insights cover",
  },
  {
    image: "/images/digital-brand-experiences-cover.jpg",
    date: "January 7, 2025",
    readTime: "4 min read",
    title:
      "The Art of Building Beautiful, Purposeful Digital Brand Experiences",
    tag: "Artificial intelligent",
    alt: "Digital brand experiences and purposeful design article cover",
  },
];

export default function EditorialSection() {
  return (
    <section className="w-full bg-[var(--card)] py-16 px-4 md:px-0 relative">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl p-8">
        {/* Borders */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 border-t border-[var(--divider)]" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-[var(--divider)]" />
          <div className="absolute top-0 left-0 h-full w-0.5 border-l border-[var(--divider)]" />
          <div className="absolute top-0 right-0 h-full w-0.5 border-r border-[var(--divider)]" />
        </div>
        <div className="relative">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold mb-8">
            <span className="w-3 h-3 rounded-full bg-[#00FF57] inline-block" />
            LATEST ARTICLE
          </div>
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-[var(--background)]">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-xs text-[var(--divider)] mb-1">
                  {article.date} — {article.readTime}
                </div>
                <div className="text-lg font-semibold text-black mb-2 leading-snug">
                  {article.title}
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xs text-[var(--divider)]">
                    {article.tag}
                  </span>
                  <button
                    className={`flex items-center gap-1 px-4 py-1.5 rounded-full font-medium text-xs shadow border transition ${i === 1 ? "bg-[#00FF57] text-white border-[#00FF57]" : "bg-white text-black border-neutral-200 hover:bg-neutral-50"}`}
                  >
                    Read All
                    <span className="inline-block text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
