import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Calendar,
  Clock,
  Rocket,
  Briefcase,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WHATSAPP_URL = "https://wa.me/525544702523";

const trustLogos = [
  { src: "/hero_logos_slider/anthropic.png", alt: "Anthropic" },
  { src: "/hero_logos_slider/bbva.png", alt: "BBVA" },
  { src: "/hero_logos_slider/davivienda.png", alt: "Davivienda" },
  { src: "/hero_logos_slider/itam.png", alt: "ITAM" },
  { src: "/hero_logos_slider/javeriana.png", alt: "Universidad Javeriana" },
  { src: "/hero_logos_slider/lovable.svg", alt: "Lovable" },
  { src: "/hero_logos_slider/supabase.png", alt: "Supabase" },
  { src: "/hero_logos_slider/stanford.webp", alt: "Stanford" },
  { src: "/Press/forbes.webp", alt: "Forbes" },
  { src: "/Press/bloomberg.png", alt: "Bloomberg" },
];

const pressLinks = [
  {
    name: "Bloomberg Línea",
    logo: "/Press/bloomberg.png",
    url: "https://www.bloomberglinea.com/latinoamerica/en-que-emprender-en-latam-en-2026-la-ia-seguira-liderando-pero-tenga-en-cuenta-estos-tips/",
  },
  {
    name: "Forbes México",
    logo: "/Press/forbes.webp",
    url: "https://forbes.com.mx/la-sequia-de-inversiones-amenaza-a-las-startups/",
  },
  {
    name: "Davivienda, Social Skin",
    logo: "/Press/davivienda.png",
    url: "https://open.spotify.com/episode/0OkBKUaO6d6XbQM1R8vJR7",
  },
];

const cityGallery = [
  { src: "/cities/san%20francisco.jpeg", label: "San Francisco" },
  { src: "/cities/napa.jpeg", label: "Napa Valley" },
  { src: "/cities/bogota.jpg", label: "Bogotá" },
  { src: "/cities/medellin.jpeg", label: "Medellín" },
  { src: "/cities/ciudad%20mexico.jpg", label: "Ciudad de México" },
  { src: "/cities/guadalajara.png", label: "Guadalajara" },
  { src: "/cities/lima.png", label: "Lima" },
];

const audience = [
  {
    title: "Emprendedores",
    description:
      "Quieres construir un producto o servicio digital y necesitas entender cómo la IA puede ayudarte sin depender de programación.",
    icon: Rocket,
  },
  {
    title: "Ejecutivos y managers",
    description:
      "Lideras equipos y buscas eficiencia real, con procesos adoptados y resultados que se puedan medir.",
    icon: Briefcase,
  },
  {
    title: "Freelancers",
    description:
      "Quieres ser más rápido, ofrecer mejor servicio y ganar tiempo con automatizaciones útiles.",
    icon: Sparkles,
  },
];

const takeaways = [
  "Comprensión clara de cómo funcionan los modelos y por qué generan valor.",
  "Criterios para decidir qué casos de uso sí valen la pena y cuáles no.",
  "Mapeo de procesos y diseño de instrucciones que se traduzcan en automatizaciones.",
  "Acompañamiento para resolver dudas puntuales en tu contexto profesional.",
];

const outcomes = [
  "Automatizar un proceso real de tu día a día y medir su impacto.",
  "Presentar un plan de adopción para tu equipo o clientes.",
];

const differentiators = [
  {
    title: "Enfoque técnico y operativo",
    description:
      "Nada de teoría desconectada: trabajamos desde procesos reales y decisiones de negocio.",
  },
  {
    title: "Experiencia con +200 compañías",
    description:
      "Casos reales en Latam que muestran qué funciona y qué solo se ve bien en demo.",
  },
  {
    title: "Puente directo con Silicon Valley",
    description:
      "Aprendizajes de ingenieros en OpenAI, xAI, Anthropic, Samsung y Adobe, aterrizados a tu realidad.",
  },
];

const curriculum = [
  {
    week: "Semana 1",
    title: "Fundamentos y mapa real de herramientas",
    items: [
      "Fundamentos conceptuales de inteligencia artificial",
      "Panorama de herramientas: cuáles existen y para qué sirven",
    ],
  },
  {
    week: "Semana 2",
    title: "Automatización aplicada a operación",
    items: [
      "Mapear procesos, dar instrucciones claras y elegir herramientas",
      "Casos de estudio en Ventas, Marketing, Diseño, Operaciones y Producto",
    ],
  },
  {
    week: "Semana 3",
    title: "Caso práctico y adopción",
    items: [
      "Diseña tu propia automatización con feedback guiado",
      "Implementa, prueba y presenta tu caso de uso real",
    ],
  },
];

const pricingOptions = [
  {
    title: "Pago único",
    price: "$385 USD",
    detail: "Un solo pago para asegurar tu lugar y acceder al grupo privado.",
  },
  {
    title: "Dos pagos",
    price: "$420 USD",
    detail: "Dos pagos de $210 USD para mantener flexibilidad de caja.",
  },
];

const includes = [
  "Programa intensivo de 3 semanas con sesiones en vivo.",
  "Acceso a grupo privado de soporte y seguimiento.",
  "2 sesiones personalizadas para resolver dudas.",
  "Certificado digital al finalizar el programa.",
];

const requirements = [
  "Has usado aplicaciones como ChatGPT.",
  "No necesitas programar, pero sí intención de automatizar procesos.",
  "Disponibilidad de 3 horas semanales (2 en sesión, 1 en práctica).",
];

const contextCards = [
  {
    title: "Interés sin claridad",
    description:
      "Hay curiosidad y pruebas, pero no una ruta clara para llevar IA a producción.",
  },
  {
    title: "Ejecución que no escala",
    description:
      "Los pilotos quedan aislados por falta de integración y cero adopción.",
  },
  {
    title: "Cursos demasiado teóricos",
    description:
      "Se quedan en prompts genéricos y casos simples sin datos reales.",
  },
  {
    title: "El curso que hacía falta",
    description:
      "Tres semanas, guía paso a paso y un caso real funcionando en tu contexto.",
  },
];

const faqs = [
  {
    question: "¿El curso es online o presencial?",
    answer:
      "Es 100% online en vivo, con sesiones semanales y práctica guiada. No hay encuentros presenciales.",
  },
  {
    question: "No sé programar, ¿puedo tomar este curso?",
    answer:
      "Sí. El programa está diseñado para personas sin conocimientos de programación.",
  },
  {
    question: "¿Qué diferencia tiene este programa de otros?",
    answer:
      "La experiencia es técnica y operativa. Trabajamos con casos reales y con un enfoque de adopción, no de marketing.",
  },
  {
    question: "¿Obtendré un certificado?",
    answer: "Sí, al finalizar recibirás un certificado digital.",
  },
  {
    question: "Soy una empresa, ¿hay descuentos por grupos?",
    answer:
      "Sí. Escríbenos a hola@alanarguello.me para coordinar un plan para tu equipo.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const title = "Curso de IA aplicada | Implementación real en 3 semanas";
  const description =
    "Aprende cómo funcionan los modelos de IA y crea automatizaciones con retorno real, sin programar. Curso intensivo con casos reales y acompañamiento.";

  return {
    metadataBase: new URL("https://operationalinference.com"),
    title,
    description,
    alternates: {
      canonical: "/curso",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://operationalinference.com/curso",
      images: [
        {
          url: "/ogsf.png",
          width: 2052,
          height: 1006,
          alt: "Curso de IA aplicada de Operational Inference",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ogsf.png"],
    },
  };
}

export default async function CoursePage() {
  const logoTrack = [...trustLogos, ...trustLogos];
  const cityTrack = [...cityGallery, ...cityGallery];
  const linkClassName = "underline-animation text-foreground";
  const instructorHighlights = [
    {
      key: "events",
      content:
        "Speaker y host de eventos en San Francisco, México, Colombia y Perú con empresas como Anthropic, Lovable, v0, ITAM y BBVA.",
    },
    {
      key: "oi",
      content:
        "Fundador de Operational Inference, acompañando adopción de IA en más de 200 compañías.",
    },
    {
      key: "signal",
      content: (
        <>
          Co-host de{" "}
          <a
            href="https://signalovernoise.day/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Signal Over Noise
          </a>
          , comunidad para engineers e investigadores en Silicon Valley.
        </>
      ),
    },
    {
      key: "alex",
      content: (
        <>
          Cofundó una empresa con{" "}
          <a
            href="https://www.linkedin.com/in/alextorrenegra/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Alex Torrenegra
          </a>{" "}
          y apoyó a 101 compañías desde idea hasta $50M USD en ventas anuales.
        </>
      ),
    },
    {
      key: "andres",
      content: (
        <>
          Trabajó con{" "}
          <a
            href="https://www.linkedin.com/in/ahbilbao/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Andrés Bilbao
          </a>{" "}
          (Rappi), apoyando a +50 emprendedores que hoy han levantado +$40M USD.
        </>
      ),
    },
    {
      key: "trendi",
      content: (
        <>
          Cofundó{" "}
          <a
            href="https://platan.us/startups/trendi"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Trendi
          </a>{" "}
          (Platanus Ventures) y fue Software Engineer en Beek (YC) y National
          Western Life Insurance.
        </>
      ),
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20 sm:pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute inset-0">
              <Image
                src="/sf-skyline.jpg"
                alt="San Francisco skyline"
                fill
                priority
                className="object-cover object-center opacity-35"
                sizes="100vw"
                style={{
                  filter: "grayscale(1) contrast(1.1) brightness(0.8)",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
              <div className="space-y-6">
                <span className="premium-chip">
                  Curso online intensivo · 3 semanas · Febrero 2026
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05]">
                  Comienza a implementar inteligencia artificial{" "}
                  <span className="text-elegant text-foreground">
                    de verdad
                  </span>
                  .
                </h1>
                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  Aprende cómo funcionan los modelos y conviértelo en
                  automatizaciones con retorno real, sin programar, en un curso
                  online con sesiones en vivo.
                </p>
                <ul className="space-y-3 text-sm sm:text-base text-muted-light">
                  {[
                    "Entiende el mapa real de herramientas y cuándo usar cada una.",
                    "Prioriza casos de uso con impacto y evita demos que nadie adopta.",
                    "Construye una automatización propia con guía y feedback.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-accent">
                        <Check size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group btn btn-primary"
                  >
                    Reservar por WhatsApp
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                  <a href="#temario" className="btn btn-secondary">
                    Ver temario
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="surface-card p-6 sm:p-8">
                  <div className="surface-card-glow" />
                  <div className="surface-card-shimmer" />
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-dark font-mono">
                    Detalles rápidos
                  </p>
                  <h2 className="mt-3 text-xl sm:text-2xl font-light">
                    Cohorte Febrero 2026
                  </h2>
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        label: "Duración",
                        value: "3 semanas",
                        icon: Calendar,
                      },
                      {
                        label: "Tiempo semanal",
                        value: "3 horas",
                        icon: Clock,
                      },
                      {
                        label: "Formato",
                        value: "Online en vivo + práctica",
                        icon: BadgeCheck,
                      },
                      {
                        label: "Precio desde",
                        value: "$385 USD",
                        icon: Check,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 text-sm text-muted-light"
                      >
                        <item.icon size={16} className="text-accent" />
                        <div>
                          <p className="text-muted-dark text-xs uppercase tracking-[0.2em]">
                            {item.label}
                          </p>
                          <p className="text-base text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-border-light bg-card-strong px-4 py-3 text-sm text-muted-light">
                    Incluye grupo privado + 2 sesiones personalizadas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-light leading-[1.1]">
                Desde{" "}
                <span className="text-elegant text-foreground">
                  Silicon Valley
                </span>{" "}
                hasta{" "}
                <span className="text-elegant text-muted">Latinoamérica</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted">
                Traemos lo que aprendimos de ingenieros en OpenAI, xAI,
                Anthropic, Samsung y Adobe y lo aterrizamos en operaciones
                reales de la región.
              </p>
            </div>

            <div className="mt-8 logo-marquee" aria-label="Logos de confianza">
              <div className="logo-track">
                {logoTrack.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="logo-item"
                    aria-hidden={index >= trustLogos.length}
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

            <div
              className="mt-10 city-carousel"
              aria-label="Fotos de ciudades y encuentros"
            >
              <div className="city-track">
                {cityTrack.map((city, index) => (
                  <div
                    key={`${city.label}-${index}`}
                    className="city-tile"
                    aria-hidden={index >= cityGallery.length}
                  >
                    <div className="city-image-frame">
                      <Image
                        src={city.src}
                        alt={city.label}
                        fill
                        className="city-image"
                        sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 320px"
                      />
                      <div className="city-overlay">
                        <span className="city-name">{city.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="para-quien"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 dot-pattern opacity-15" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
              Para quién es este curso
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl">
              Diseñado para personas que quieren resultados tangibles y no un
              curso más de teoría.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3 auto-rows-fr">
              {audience.map((item) => (
                <div
                  key={item.title}
                  className="surface-card p-6 flex h-full flex-col gap-4"
                >
                  <div className="surface-card-glow" />
                  <div className="surface-card-shimmer" />
                  <item.icon size={22} className="text-accent" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
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
          id="beneficios"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 grid-pattern opacity-10" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
                  Qué te vas a llevar del programa
                </h2>
                <ul className="mt-6 space-y-4 text-sm sm:text-base text-muted-light">
                  {takeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-accent">
                        <Check size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border-light bg-card-strong p-6 sm:p-7">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Al concluir podrás
                </h3>
                <ul className="mt-5 space-y-3 text-sm sm:text-base text-muted-light">
                  {outcomes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-accent">
                        <BadgeCheck size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-border-light bg-background/60 px-4 py-3 text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                  100% aplicado a tu contexto
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="diferencias"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 dot-pattern opacity-15" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
              Diferencias frente a otros programas
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3 auto-rows-fr">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className="surface-card p-6 h-full flex flex-col"
                >
                  <div className="surface-card-glow" />
                  <div className="surface-card-shimmer" />
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="temario"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
                Temario
              </h2>
              <p className="text-base sm:text-lg text-muted">
                Un recorrido de 3 semanas diseñado para pasar de claridad a
                ejecución.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3 auto-rows-fr">
              {curriculum.map((week) => (
                <div
                  key={week.week}
                  className="surface-card p-6 flex h-full flex-col gap-5"
                >
                  <div className="surface-card-glow" />
                  <div className="surface-card-shimmer" />
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                      {week.week}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{week.title}</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-light">
                    {week.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 text-accent">
                          <Check size={16} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="instructor"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 grid-pattern opacity-15" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
              <div className="space-y-5">
                <div className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-border-light bg-card-strong">
                  <Image
                    src="/alan.png"
                    alt="Alan Arguello"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 420px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 items-start">
                  <div className="relative h-[200px] sm:h-[230px] rounded-2xl overflow-hidden border border-border-light bg-card-strong">
                    <Image
                      src="/bilbaorappi.jpeg"
                      alt="Alan Arguello y Andrés Bilbao"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 92vw, 260px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-muted-light font-mono">
                      Makers con Rappi Cofounder
                    </p>
                  </div>

                  <div className="relative h-[200px] sm:h-[230px] rounded-2xl overflow-hidden border border-border-light bg-card-strong">
                    <Image
                      src="/sharktank.JPG"
                      alt="Shark Tank"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 92vw, 260px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-muted-light font-mono">
                      Shark Tank
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
                    Instructor principal
                  </h2>
                  <a
                    href="https://www.linkedin.com/in/alan-arguello/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-lg text-foreground underline-animation"
                  >
                    Alan Arguello
                  </a>
                  <p className="mt-2 text-base text-muted">
                    Ingeniero Eléctrico con MBA, 6 años de experiencia en
                    tecnología y Top Voice en LinkedIn desde 2023.
                  </p>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-muted-light">
                  {instructorHighlights.map((item) => (
                    <li key={item.key} className="flex gap-3">
                      <span className="mt-1 text-accent">
                        <Check size={16} />
                      </span>
                      <span>{item.content}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                    Apariciones en medios
                  </p>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
                    {pressLinks.map((press) => (
                      <a
                        key={press.name}
                        href={press.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press-logo-link"
                        aria-label={press.name}
                      >
                        <Image
                          src={press.logo}
                          alt={press.name}
                          width={160}
                          height={54}
                          className="press-logo-image"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="fechas"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 grid-pattern opacity-10" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
                Fechas de la cohorte
              </h2>
              <p className="mt-3 text-base sm:text-lg text-muted">
                Tres semanas de trabajo guiado con sesiones en vivo y práctica
                aplicada.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 auto-rows-fr">
              <div className="surface-card p-6 h-full flex flex-col">
                <div className="surface-card-glow" />
                <div className="surface-card-shimmer" />
                <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                  Inicio
                </p>
                <div className="mt-4 flex items-start gap-3 text-sm text-muted-light">
                  <Calendar size={16} className="text-accent mt-1" />
                  <div>
                    <p className="text-foreground text-lg">
                      6 de febrero de 2026
                    </p>
                    <p className="text-xs text-muted-dark">
                      Sesión de arranque y roadmap del programa
                    </p>
                  </div>
                </div>
              </div>

              <div className="surface-card p-6 h-full flex flex-col">
                <div className="surface-card-glow" />
                <div className="surface-card-shimmer" />
                <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                  Cierre
                </p>
                <div className="mt-4 flex items-start gap-3 text-sm text-muted-light">
                  <Calendar size={16} className="text-accent mt-1" />
                  <div>
                    <p className="text-foreground text-lg">
                      27 de febrero de 2026
                    </p>
                    <p className="text-xs text-muted-dark">
                      Presentación final y siguientes pasos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="precio"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
                Costo del programa
              </h2>
              <p className="mt-3 text-base sm:text-lg text-muted">
                Opciones claras y todo lo necesario para implementar con foco en
                resultados.
              </p>
            </div>

            <div className="mt-10 rounded-[28px] border border-border-light bg-border overflow-hidden">
              <div className="grid gap-px bg-border md:grid-cols-2 auto-rows-fr">
                {pricingOptions.map((option) => (
                  <div
                    key={option.title}
                    className="bg-card-strong p-6 sm:p-8 h-full flex flex-col"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                      {option.title}
                    </p>
                    <p className="mt-3 text-3xl font-semibold">
                      {option.price}
                    </p>
                    <p className="mt-2 text-sm text-muted-light">
                      {option.detail}
                    </p>
                  </div>
                ))}

                <div className="bg-card-strong p-6 sm:p-8 h-full flex flex-col">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-dark font-mono">
                    Qué incluye
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-light">
                    {includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 text-accent">
                          <Check size={16} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card-strong p-6 sm:p-8 h-full flex flex-col">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                    Requisitos
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-light">
                    {requirements.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 text-accent">
                          <Check size={16} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Reservar por WhatsApp
                <ArrowRight size={16} />
              </a>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-dark font-mono">
                Respuesta rápida · Cupo limitado
              </span>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background-alt">
            <div className="absolute inset-0 dot-pattern opacity-15" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-light leading-[1.15]">
              Preguntas frecuentes
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 auto-rows-fr">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="surface-card p-6 h-full flex flex-col"
                >
                  <div className="surface-card-glow" />
                  <div className="surface-card-shimmer" />
                  <h3 className="text-base font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm text-muted-light">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Hablar por WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="hablar"
          className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-15" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="surface-card p-8 sm:p-10 text-center">
              <div className="surface-card-glow" />
              <div className="surface-card-shimmer" />
              <p className="text-xs uppercase tracking-[0.25em] text-muted-dark font-mono">
                ¿Quieres hablar?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-light">
                Resolvamos si este curso es para ti
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-light max-w-2xl mx-auto">
                Escríbenos por WhatsApp para revisar tu contexto y confirmar si
                el programa es ideal para ti o para tu equipo.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn btn-primary"
              >
                Hablar por WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer showCta={false} />
    </>
  );
}
