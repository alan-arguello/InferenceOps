import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blogPosts";
import BlogPostBody from "@/components/BlogPostBody";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post no encontrado | Operational Inference",
      description: "El post solicitado no existe.",
    };
  }

  return {
    title: `${post.title} | Operational Inference`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `https://operationalinference.com/blog/${post.slug}`,
      authors: [post.author],
      publishedTime: post.dateISO,
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
      title: post.title,
      description: post.summary,
      images: ["/ogsf.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.dateISO,
    author: {
      "@type": "Person",
      name: post.author,
    },
    image: "https://operationalinference.com/ogsf.png",
    inLanguage: "es-MX",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://operationalinference.com/blog/${post.slug}`,
    },
    url: `https://operationalinference.com/blog/${post.slug}`,
  };

  return (
    <>
      <Navigation />
      <section className="relative py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-muted-dark">
            <span>Blog</span>
            <Link
              href="/blog"
              className="text-foreground underline decoration-white/20 underline-offset-4 hover:decoration-white transition-colors"
            >
              Volver al blog
            </Link>
          </div>

          <header className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] text-foreground">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-muted">{post.subtitle}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-dark">
              <span className="uppercase tracking-[0.2em]">{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="uppercase tracking-[0.2em]">{post.date}</span>
            </div>
          </header>

          <div className="mt-10 rounded-[28px] border border-border-light bg-card-strong backdrop-blur-sm px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
            <BlogPostBody content={post.content} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
