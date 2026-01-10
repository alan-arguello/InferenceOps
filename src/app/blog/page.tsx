import type { Metadata } from "next";
import Blog from "@/components/Blog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/content/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Operational Inference",
  description:
    "Notas y ensayos sobre IA, infraestructura y operación en Latinoamérica.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Operational Inference",
    description:
      "Notas y ensayos sobre IA, infraestructura y operación en Latinoamérica.",
    type: "website",
    url: "https://operationalinference.com/blog",
    images: [
      {
        url: "/ogsf.png",
        width: 2052,
        height: 1006,
        alt: "Operational Inference en San Francisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Operational Inference",
    description:
      "Notas y ensayos sobre IA, infraestructura y operación en Latinoamérica.",
    images: ["/ogsf.png"],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Operational Inference",
    url: "https://operationalinference.com/blog",
    inLanguage: "es-MX",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.dateISO,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `https://operationalinference.com/blog/${post.slug}`,
      image: "https://operationalinference.com/ogsf.png",
    })),
  };

  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Blog />
      <Footer />
    </>
  );
}
