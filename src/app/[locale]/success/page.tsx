import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WHATSAPP_URL = "https://wa.me/525544702523";

export default function SuccessPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 sm:pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 dot-pattern opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="surface-card p-8 sm:p-10 text-center">
              <div className="surface-card-glow" />
              <div className="surface-card-shimmer" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-dark font-mono">
                Inscripción confirmada
              </p>
              <h1 className="mt-4 text-2xl sm:text-4xl font-light leading-tight">
                Gracias por tu inscripción.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted">
                Nos pondremos en contacto contigo.
              </p>
              <p className="mt-6 text-sm sm:text-base text-muted-light">
                Cualquier duda, por favor contáctanos por WhatsApp.
              </p>
              <div className="mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn btn-primary"
                >
                  Escribir por WhatsApp
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer showCta={false} />
    </>
  );
}
