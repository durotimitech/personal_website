import { getPostBySlug } from "@/lib/blog";
import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  // Handle missing post with SEO-friendly 404 metadata
  if (!post) {
    return {
      title: "Blog Post Not Found | Created By Timmy",
      description: "The requested blog post could not be found. Explore our latest photography, videography, and event planning insights from Limerick, Ireland.",
      robots: {
        index: false,
        follow: true,
      },
      openGraph: {
        title: "Blog Post Not Found | Created By Timmy",
        description: "The requested blog post could not be found. Explore our latest photography, videography, and event planning insights from Limerick, Ireland.",
        type: "website",
        url: `https://mejabidurotimi.com/blog/${slug}`,
        siteName: "Created By Timmy",
        locale: "en_IE",
      },
      twitter: {
        card: "summary",
        title: "Blog Post Not Found | Created By Timmy",
        description: "The requested blog post could not be found. Explore our latest photography, videography, and event planning insights.",
      },
    };
  }

  // Extract reading time estimation (rough calculation: 200 words per minute)
  const wordCount = post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Generate SEO-optimized title
  const seoTitle = `${post.title} | Created By Timmy Blog`;
  
  // Generate enhanced description with fallback
  const seoDescription = post.description || 
    `Discover insights about ${post.tags?.join(', ') || 'photography and videography'} from Created By Timmy, professional photographer and videographer in Limerick, Ireland.`;

  // Canonical URL
  const canonicalUrl = `https://mejabidurotimi.com/blog/${slug}`;

  // Cover image with fallback
  const coverImageUrl = post.coverImage 
    ? `https://mejabidurotimi.com${post.coverImage}`
    : "https://mejabidurotimi.com/logo.png";

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      ...(post.tags || []),
      'photography blog',
      'videography tips',
      'Limerick photography',
      'Irish photographer',
      'Created By Timmy',
      'wedding photography blog',
      'event planning Ireland'
    ],
    authors: [{ name: 'Mejabi Durotimi (Timmy)', url: 'https://mejabidurotimi.com' }],
    creator: 'Mejabi Durotimi',
    publisher: 'Created By Timmy Photography',
    category: 'Photography & Videography',
    classification: `${post.tags?.join(', ') || 'Photography'}, Blog, Limerick, Ireland`,
    
    // Canonical URL to prevent duplicate content
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Article-specific metadata
    other: {
      'article:author': 'Mejabi Durotimi',
      'article:published_time': new Date(post.date).toISOString(),
      'article:modified_time': new Date().toISOString(),
      'article:section': 'Photography & Videography',
      'article:tag': post.tags?.join(',') || '',
      'reading-time': `${readingTime} min read`,
      'word-count': wordCount.toString(),
    },

    // Enhanced Open Graph metadata
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: "article",
      url: canonicalUrl,
      siteName: "Created By Timmy",
      locale: "en_IE",
      images: [
        {
          url: coverImageUrl,
          width: 1200,
          height: 630,
          alt: `${post.title} - Created By Timmy Blog`,
          type: 'image/jpeg',
        },
        // Fallback image
        {
          url: "https://mejabidurotimi.com/logo.png",
          width: 500,
          height: 500,
          alt: "Created By Timmy - Photography & Videography Limerick",
        }
      ],
      // Article-specific Open Graph tags
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: ['Mejabi Durotimi'],
      section: 'Photography & Videography',
      tags: post.tags || [],
    },

    // Enhanced Twitter metadata
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [coverImageUrl],
      creator: '@mejabidurotimi',
      site: '@createdBytimmy',
    },

    // Robots configuration for articles
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // App-specific metadata
    appleWebApp: {
      title: post.title,
      statusBarStyle: 'default',
    },

    // Structured data will be added via JSON-LD in the component
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return <div>Not found</div>;

  // Calculate reading time and word count for structured data
  const wordCount = post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://mejabidurotimi.com/blog/${slug}`,
    "headline": post.title,
    "description": post.description,
    "url": `https://mejabidurotimi.com/blog/${slug}`,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "Mejabi Durotimi",
      "alternateName": "Timmy",
      "url": "https://mejabidurotimi.com",
      "image": "https://mejabidurotimi.com/images/timmy-mejabi-portrait-limerick.jpg",
      "sameAs": [
        "https://www.instagram.com/mejabidurotimi/",
        "https://www.linkedin.com/in/oluwadurotimi-mejabi-86046117a/"
      ],
      "jobTitle": "Wedding & Lifestyle Photographer & Videographer",
      "worksFor": {
        "@type": "Organization",
        "name": "Created By Timmy"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Created By Timmy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mejabidurotimi.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mejabidurotimi.com/blog/${slug}`
    },
    "image": post.coverImage ? {
      "@type": "ImageObject",
      "url": `https://mejabidurotimi.com${post.coverImage}`,
      "width": 1200,
      "height": 630,
      "caption": post.title
    } : {
      "@type": "ImageObject",
      "url": "https://mejabidurotimi.com/logo.png",
      "width": 500,
      "height": 500,
      "caption": "Created By Timmy Photography & Films"
    },
    "articleSection": "Photography & Videography",
    "keywords": [
      ...(post.tags || []),
      "photography blog",
      "videography tips",
      "Limerick photography",
      "Irish photographer"
    ].join(", "),
    "wordCount": wordCount,
    "timeRequired": `PT${readingTime}M`,
    "inLanguage": "en-IE",
    "isAccessibleForFree": true,
    "about": {
      "@type": "Thing",
      "name": post.tags?.join(", ") || "Photography & Videography"
    },
    "mentions": post.tags?.map(tag => ({
      "@type": "Thing",
      "name": tag
    })) || []
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mejabidurotimi.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Blog",
        "item": "https://mejabidurotimi.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://mejabidurotimi.com/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />
            <main className="min-h-screen w-full bg-[var(--background)] py-16 px-4 md:px-0 flex flex-col items-center">
        {/* Breadcrumb Navigation */}
        <nav className="w-full max-w-3xl mx-auto mb-8 px-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-[var(--divider)]">
            <li>
              <Link href="/" className="hover:text-[var(--text)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-[var(--text)] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--text)] font-medium" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <article className="w-full max-w-3xl mx-auto bg-[var(--card)] rounded-2xl shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--divider)] mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-IE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span aria-hidden="true">•</span>
              <span>{readingTime} min read</span>
              <span aria-hidden="true">•</span>
              <span>{wordCount} words</span>
              {post.tags && post.tags.length > 0 && (
                <>
                  <span aria-hidden="true">•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[var(--divider)] bg-opacity-10 text-[var(--text)] px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
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
    </>
  );
}
