"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { getPathname, usePathname, useRouter } from "@/i18n/navigation";
import { SCHEDULE_CALL_URL } from "@/lib/links";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = locale === "en" ? "en" : "es";
  const homeHref = currentLocale === "es" ? "/" : `/${currentLocale}`;
  const navLinks = [
    { href: `${homeHref}#servicios`, label: t("links.services") },
    { href: `${homeHref}#casos`, label: t("links.cases") },
    { href: `${homeHref}#equipo`, label: t("links.team") },
    {
      href: currentLocale === "es" ? "/blog" : `/${currentLocale}/blog`,
      label: t("links.blog"),
    },
    { href: `${homeHref}#faq`, label: t("links.faq") },
  ];
  const localeOptions = [
    { value: "es", label: t("locale.es") },
    { value: "en", label: t("locale.en") },
  ];

  const handleLocaleChange = (nextLocale: string) => {
    const nextPath = getPathname({
      locale: nextLocale,
      href: pathname ?? "/",
    });
    router.push(nextPath);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href={homeHref} className="flex items-center gap-3 group">
              <div className="w-7 h-7 relative">
                <div className="absolute inset-0 bg-white rounded-[2px] transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 ease-out" />
                <div className="absolute inset-[3px] bg-background rounded-[1px] transform rotate-45" />
              </div>
              <span className="text-sm sm:text-base font-medium tracking-tight">
                <span className="text-foreground">Operational</span>
                <span className="text-muted"> Inference</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-white transition-colors duration-300 underline-animation"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={SCHEDULE_CALL_URL}
                className="group btn btn-primary btn-small"
              >
                {t("cta")}
              </a>
              <div className="flex items-center gap-2">
                {localeOptions.map((option, index) => (
                  <div key={option.value} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleLocaleChange(option.value)}
                      aria-label={`${t("toggleLabel")} ${option.label}`}
                      className={cn(
                        "text-xs uppercase tracking-[0.2em] transition-colors",
                        option.value === currentLocale
                          ? "text-foreground"
                          : "text-muted-dark hover:text-muted-light"
                      )}
                    >
                      {option.label}
                    </button>
                    {index < localeOptions.length - 1 && (
                      <span className="text-xs text-muted-dark">/</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-muted-light transition-colors"
              aria-label={t("menuToggle")}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative pt-28 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-xl text-muted-light hover:text-white transition-colors border-b border-border"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href={SCHEDULE_CALL_URL}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  {t("mobileCta")}
                </a>
              </motion.div>
              <div className="mt-8 flex items-center justify-center gap-3">
                {localeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleLocaleChange(option.value)}
                    aria-label={`${t("toggleLabel")} ${option.label}`}
                    className={cn(
                      "text-xs uppercase tracking-[0.3em] transition-colors",
                      option.value === currentLocale
                        ? "text-foreground"
                        : "text-muted-dark hover:text-muted-light"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
