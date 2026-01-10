import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const detectPreferredLocale = (request: NextRequest) => {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale === "es" || cookieLocale === "en") {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const primary = acceptLanguage.split(",")[0]?.trim().toLowerCase();
  const base = primary?.split("-")[0];
  return base === "es" ? "es" : "en";
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const hasLocale = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!hasLocale) {
    const preferredLocale = detectPreferredLocale(request);
    if (preferredLocale === "en") {
      const url = request.nextUrl.clone();
      url.pathname = `/en${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
