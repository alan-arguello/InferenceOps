"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getBlogPosts } from "@/content/blogPosts";
import { Link } from "@/i18n/navigation";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const t = useTranslations("Blog");
  const locale = useLocale();
  const title = t.rich("title", {
    muted: (chunks) => <span className="text-elegant text-muted">{chunks}</span>,
  });
  const posts = getBlogPosts(locale);

  return (
    <section id="blog" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] text-center sm:text-left"
        >
          {title}
        </motion.h2>

        <div className="mt-10 sm:mt-14 space-y-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              id={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[28px] border border-border-light bg-card-strong backdrop-blur-sm px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
            >
              <header className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-dark">
                  <span>{t("tag")}</span>
                  <span className="h-px flex-1 min-w-[120px] bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-muted">
                    {post.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-dark">
                  <span className="uppercase tracking-[0.2em]">
                    {post.author}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="uppercase tracking-[0.2em]">{post.date}</span>
                </div>
              </header>

              <p className="mt-6 text-sm sm:text-base text-muted-light leading-relaxed">
                {post.summary}
              </p>

              <div className="mt-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground underline decoration-white/20 underline-offset-4 hover:decoration-white transition-colors"
                >
                  {t("readMore")}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
