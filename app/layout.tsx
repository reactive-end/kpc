import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  title: {
    default: "KPC Legal | Abogadas Especializadas - Experiencia Legal Sin Fronteras",
    template: "%s | KPC Legal",
  },
  description:
    "KPC Legal LLC - Tres abogadas especializadas en derecho corporativo internacional, litigación comercial y propiedad intelectual. Consulta legal gratuita.",
  keywords: [
    "abogadas",
    "derecho corporativo",
    "litigación comercial",
    "propiedad intelectual",
    "abogados internacionales",
    "fusiones y adquisiciones",
    "consulta legal",
  ],
  authors: [{ name: "KPC Legal LLC" }],
  creator: "KPC Legal LLC",
  publisher: "KPC Legal LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://kpclegal.com",
    siteName: "KPC Legal",
    title: "KPC Legal | Experiencia Legal Sin Fronteras",
    description:
      "Tres abogadas especializadas con alcance global. Protegemos sus intereses comerciales con excelencia, integridad y resultados comprobados.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KPC Legal | Experiencia Legal Sin Fronteras",
    description:
      "Tres abogadas especializadas con alcance global. Protegemos sus intereses comerciales con excelencia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
