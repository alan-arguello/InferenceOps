import Blog from "@/components/Blog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPosts } from "@/content/blogPosts";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const canonical = locale === "es" ? "/blog" : `/${locale}/blog`;

  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    alternates: {
      canonical,
      languages: {
        es: "/blog",
        en: "/en/blog",
      },
    },
    openGraph: {
      title: t("blogTitle"),
      description: t("blogDescription"),
      type: "website",
      url: `https://operationalinference.com${canonical}`,
      images: [
        {
          url: "/ogsf.png",
          width: 2052,
          height: 1006,
          alt: t("blogOgAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("blogTitle"),
      description: t("blogDescription"),
      images: ["/ogsf.png"],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const canonical = locale === "es" ? "/blog" : `/${locale}/blog`;
  const inLanguage = locale === "en" ? "en-US" : "es-MX";
  const posts = getBlogPosts(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t("blogTitle"),
    url: `https://operationalinference.com${canonical}`,
    inLanguage,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.dateISO,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `https://operationalinference.com${canonical}/${post.slug}`,
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
