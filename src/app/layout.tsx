import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://operationalinference.com"),
  title: "Operational Inference | Implementamos IA en tu empresa",
  description:
    "Ayudamos a directores generales y equipos ejecutivos en corporativos y pymes de latinoamérica a mejorar eficiencia, ventas y operación con soluciones de IA que se integran al trabajo real de sus equipos.",
  keywords: [
    "inteligencia artificial",
    "IA empresarial",
    "automatización",
    "transformación digital",
    "latinoamérica",
    "consultoria IA",
    "implementación IA",
  ],
  authors: [{ name: "Operational Inference" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Operational Inference | Implementamos IA en tu empresa",
    description:
      "Ayudamos a directores generales y equipos ejecutivos a mejorar eficiencia, ventas y operación con soluciones de IA.",
    type: "website",
    locale: "es_MX",
    siteName: "Operational Inference",
    url: "https://operationalinference.com",
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
    title: "Operational Inference | Implementamos IA en tu empresa",
    description:
      "Ayudamos a directores generales y equipos ejecutivos a mejorar eficiencia, ventas y operación con soluciones de IA.",
    images: ["/ogsf.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
