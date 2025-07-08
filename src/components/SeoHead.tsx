import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  type?: string;
}

// TODO: Update this to use the new domain
export default function SeoHead({
  title,
  description,
  slug,
  image,
  type = "article",
}: SeoHeadProps) {
  const url = `https://yourdomain.com${slug.startsWith("/") ? slug : "/blog/" + slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image ? `https://yourdomain.com${image}` : undefined,
    url,
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Timmy Mejabi",
    },
    publisher: {
      "@type": "Organization",
      name: "Timmy Mejabi Photography",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/images/logo.png",
      },
    },
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && (
        <meta property="og:image" content={`https://yourdomain.com${image}`} />
      )}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && (
        <meta name="twitter:image" content={`https://yourdomain.com${image}`} />
      )}
      <link rel="canonical" href={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
