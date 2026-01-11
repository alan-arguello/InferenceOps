import { getTranslations } from "next-intl/server";
import { getBlogPosts } from "@/content/blogPosts";
import { Link } from "@/i18n/navigation";

type LatestBlogPostsProps = {
  locale: string;
};

const MAX_POSTS = 2;

export default async function LatestBlogPosts({
  locale,
}: LatestBlogPostsProps) {
  const t = await getTranslations({ locale, namespace: "LatestBlog" });
  const blogT = await getTranslations({ locale, namespace: "Blog" });
  const title = t.rich("title", {
    muted: (chunks) => <span className="text-elegant text-muted">{chunks}</span>,
  });
  const posts = getBlogPosts(locale)
    .slice()
    .sort((a, b) => Date.parse(b.dateISO) - Date.parse(a.dateISO))
    .slice(0, MAX_POSTS);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] text-center sm:text-left">
          {title}
        </h2>

        <div className="mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`flex h-full flex-col rounded-[24px] border border-border-light bg-card-strong backdrop-blur-sm p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] animate-card-enter card-stagger-${index + 1}`}
            >
              <header className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-dark">
                  <span>{blogT("tag")}</span>
                  <span className="h-px flex-1 min-w-[120px] bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-light leading-[1.2] text-foreground">
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

              <p className="mt-5 text-sm sm:text-base text-muted-light leading-relaxed flex-1">
                {post.summary}
              </p>

              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground underline decoration-white/20 underline-offset-4 hover:decoration-white transition-colors"
                >
                  {blogT("readMore")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
