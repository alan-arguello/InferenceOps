import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const normalizedLocale =
    typeof locale === "string" ? locale.toLowerCase().split(/[-_]/)[0] : "";
  const resolvedLocale = routing.locales.includes(normalizedLocale as never)
    ? normalizedLocale
    : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
