import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Check,
  Globe,
  Mail,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SCHEDULE_CALL_URL } from "@/lib/links";

type OverviewPageProps = {
  params: Promise<{ locale: string }>;
};

type NavItem = {
  id: string;
  label: string;
};

type Metric = {
  value: string;
  label: string;
};

type ServiceItem = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

type ComplementaryItem = {
  title: string;
  description: string;
};

type ProofStat = {
  value: string;
  label: string;
};

type ProofCase = {
  title: string;
  description: string;
  tag: string;
};

type TeamMember = {
  name: string;
  role: string;
  bullets: string[];
  tags: string[];
  experience: string[];
};

export async function generateMetadata({
  params,
}: OverviewPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Overview" });
  const title = t("meta.title");
  const description = t("meta.description");
  const canonical = locale === "es" ? "/overview" : `/${locale}/overview`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://operationalinference.com${canonical}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function OverviewPage({ params }: OverviewPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Overview" });
  const navItems = t.raw("nav") as NavItem[];
  const heroHighlights = t.raw("hero.highlights") as string[];
  const heroMetrics = t.raw("hero.metrics") as Metric[];
  const aboutParagraphs = t.raw("about.paragraphs") as string[];
  const serviceItems = t.raw("services.items") as ServiceItem[];
  const complementaryItems = t.raw("services.complementary") as ComplementaryItem[];
  const proofStats = t.raw("proof.stats") as ProofStat[];
  const proofCases = t.raw("proof.cases") as ProofCase[];
  const teamMembers = t.raw("team.members") as TeamMember[];
  const cityLabels = t.raw("latam.cities") as string[];
  const homeHref = locale === "es" ? "/" : `/${locale}`;

  const heroTitle = t.rich("hero.title", {
    accent: (chunks) => (
      <span className="text-elegant text-foreground">{chunks}</span>
    ),
  });

  const logos = [
    { src: "/hero_logos_slider/anthropic.png", alt: "Anthropic" },
    { src: "/hero_logos_slider/bbva.png", alt: "BBVA" },
    { src: "/hero_logos_slider/davivienda.png", alt: "Davivienda" },
    { src: "/hero_logos_slider/itam.png", alt: "ITAM" },
    { src: "/hero_logos_slider/javeriana.png", alt: "Javeriana" },
    { src: "/hero_logos_slider/lovable.svg", alt: "Lovable" },
    { src: "/hero_logos_slider/stanford.webp", alt: "Stanford" },
    { src: "/Press/forbes.webp", alt: "Forbes" },
    { src: "/Press/bloomberg.png", alt: "Bloomberg" },
    { src: "/Press/davivienda.png", alt: "Davivienda Social Skin" },
  ];

  const galleryImages = [
    "/cities/bogota.jpg",
    "/cities/medellin.jpeg",
    "/cities/guadalajara.png",
    "/cities/ciudad%20mexico.jpg",
    "/cities/lima.png",
    "/cities/san%20francisco.jpeg",
  ];
  const galleryItems = galleryImages.map((src, index) => ({
    src,
    label: cityLabels[index] ?? "",
  }));

  const contactItems = [
    {
      icon: Calendar,
      label: t("contact.calendarLabel"),
      value: t("contact.calendarValue"),
      href: SCHEDULE_CALL_URL,
    },
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      value: t("contact.email"),
      href: `mailto:${t("contact.email")}`,
    },
    {
      icon: Globe,
      label: t("contact.siteLabel"),
      value: t("contact.site"),
      href: `https://${t("contact.site")}`,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href={homeHref} className="flex items-center gap-3 group">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 bg-white rounded-[2px] transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 ease-out" />
                <div className="absolute inset-[2px] bg-background rounded-[1px] transform rotate-45" />
              </div>
              <span className="text-sm font-medium tracking-tight">
                <span className="text-foreground">Operational</span>
                <span className="text-muted"> Inference</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.28em] text-muted-dark">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden sm:flex">
              <a href={SCHEDULE_CALL_URL} className="btn btn-primary btn-small">
                {t("hero.cta.primary")}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative pt-20 sm:pt-24 snap-y snap-mandatory">
        <section
          id="intro"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0">
              <Image
                src="/sf-skyline.jpg"
                alt={t("hero.imageAlt")}
                fill
                priority
                className="object-cover object-center opacity-40"
                sizes="100vw"
                style={{
                  filter: "grayscale(1) contrast(1.1) brightness(0.8)",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-4xl">
              <span className="premium-chip">{t("hero.eyebrow")}</span>
              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
                {heroTitle}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl">
                {t("hero.subtitle")}
              </p>

              <ul className="mt-6 space-y-3">
                {heroHighlights.map((highlight, index) => (
                  <li
                    key={`${highlight}-${index}`}
                    className="flex items-start gap-3 text-sm sm:text-base text-muted-light"
                  >
                    <span className="mt-1 text-accent">
                      <Check size={16} />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={SCHEDULE_CALL_URL} className="btn btn-primary">
                  {t("hero.cta.primary")}
                  <ArrowRight size={18} />
                </a>
                <a href="#oportunidad" className="btn btn-secondary">
                  {t("hero.cta.secondary")}
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-border-light/60 pt-6">
                {heroMetrics.map((metric, index) => (
                  <div key={`${metric.value}-${index}`}>
                    <div className="text-sm font-mono text-accent">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-xs text-muted-light">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:hidden">
              <div className="flex items-center gap-4 overflow-x-auto pb-2 text-[11px] uppercase tracking-[0.28em] text-muted-dark">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="whitespace-nowrap hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="oportunidad"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <div>
                <span className="premium-chip">{t("about.eyebrow")}</span>
                <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15]">
                  {t("about.title")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted">
                  {t("about.subtitle")}
                </p>

                <div className="mt-6 space-y-5 text-sm sm:text-base text-muted-light">
                  {aboutParagraphs.map((paragraph, index) => (
                    <p key={`${paragraph}-${index}`}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 surface-card p-5 text-sm text-muted-light">
                  <span className="text-foreground">{t("about.callout")}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-border-light">
                  <Image
                    src="/retro-computer.jpg"
                    alt={t("about.imageAlt")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    style={{
                      filter: "saturate(0.95) contrast(1.05)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 premium-chip">
                    {t("about.imageLabel")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="oferta"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="premium-chip">{t("services.eyebrow")}</span>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15]">
                {t("services.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted">
                {t("services.subtitle")}
              </p>
            </div>

            <div className="mt-12 divide-y divide-border-light border-y border-border-light/60">
              {serviceItems.map((item) => (
                <div
                  key={item.number}
                  className="py-8 flex flex-col lg:flex-row gap-6"
                >
                  <div className="text-xs font-mono text-muted-dark tracking-[0.3em]">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-light max-w-2xl">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet, index) => (
                        <li
                          key={`${item.number}-${index}`}
                          className="flex items-start gap-3 text-sm text-muted-light"
                        >
                          <span className="mt-1 text-accent">
                            <Check size={14} />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs text-muted-dark uppercase tracking-[0.35em]">
                {t("services.complementaryLabel")}
              </p>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                {complementaryItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border-light/70 p-5 hover-lift"
                  >
                    <h4 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="validacion"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="premium-chip">{t("proof.eyebrow")}</span>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15]">
                {t("proof.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted">
                {t("proof.subtitle")}
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 border-y border-border-light/60 py-6">
              {proofStats.map((stat, index) => (
                <div key={`${stat.value}-${index}`}>
                  <div className="text-sm font-mono text-accent">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm text-muted-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs text-muted-dark uppercase tracking-[0.35em]">
                {t("proof.logosLabel")}
              </p>
              <div
                className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center"
                aria-label={t("proof.logosLabel")}
              >
                {logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex items-center justify-center rounded-full border border-transparent"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={64}
                      className="logo-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid lg:grid-cols-3 gap-6">
              {proofCases.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-light/70 p-5 flex flex-col"
                >
                  <div className="relative aspect-[16/9] rounded-[18px] overflow-hidden border border-border-light">
                    <Image
                      src="/overview/mockup-dashboard.svg"
                      alt={t("proof.caseMockupAlt", { index: index + 1 })}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="premium-chip">{item.tag}</span>
                    <h3 className="mt-3 text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="equipo"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="premium-chip">{t("team.eyebrow")}</span>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15]">
                {t("team.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted">
                {t("team.subtitle")}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-border-light/70 p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-border-light bg-card-strong">
                      <Image
                        src={
                          index === 0
                            ? "/alan.png"
                            : index === 1
                              ? "/michelle.jpeg"
                              : "/overview/mockup-dashboard.svg"
                        }
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted font-mono">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-muted-light">
                    {member.bullets.map((bullet, index) => (
                      <li key={`${member.name}-bullet-${index}`} className="flex gap-3">
                        <span className="mt-1 text-accent">
                          <Check size={14} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <p className="text-[10px] text-muted-dark uppercase tracking-[0.35em] font-mono">
                      {t("team.experienceLabel")}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.experience.map((item, index) => (
                        <span
                          key={`${member.name}-experience-${index}`}
                          className="profile-logo text-[10px] uppercase tracking-[0.18em] text-muted-light"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="latam"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="premium-chip">{t("latam.eyebrow")}</span>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15]">
                {t("latam.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted">
                {t("latam.subtitle")}
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((city, index) => (
                <div
                  key={`${city.src}-${index}`}
                  className="group relative aspect-[4/3] rounded-[22px] overflow-hidden border border-border-light"
                >
                  <Image
                    src={city.src}
                    alt={city.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-sm text-foreground">
                    {city.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="relative min-h-screen snap-start scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0">
              <Image
                src="/retro-computer.jpg"
                alt={t("contact.imageAlt")}
                fill
                className="object-cover object-center opacity-55"
                sizes="100vw"
                style={{
                  filter: "grayscale(0.15) contrast(1.1) brightness(0.85)",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
            <div className="absolute inset-0 dot-pattern opacity-25" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
            <span className="premium-chip">{t("contact.eyebrow")}</span>
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15]">
              {t("contact.title")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>

            <div className="mt-8">
              <a href={SCHEDULE_CALL_URL} className="btn btn-primary">
                {t("contact.cta")}
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-4 text-left">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-border-light/70 p-5 flex items-start gap-4 hover-lift"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-muted-dark">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
