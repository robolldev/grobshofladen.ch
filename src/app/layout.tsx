import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Navbar, Footer } from '@/components'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grobshofladen.ch'),
  title: {
    default: "Grob's Hofladen Urdorf – Produkte direkt ab Hof",
    template: "%s | Grob's Hofladen",
  },
  description:
    "Grob's Hofladen in Urdorf – Freilandeier, hausgemachte Köstlichkeiten, frisches Gemüse und Backwaren. Familienbetrieb mit 27 Hektaren.",
  keywords: [
    'Hofladen',
    'Urdorf',
    'Freilandeier',
    'Bauernhof',
    'Regional',
    'Schweiz',
    'Hausgemacht',
    'Konfitüre',
    'Brot',
    'Gemüse',
  ],
  authors: [{ name: "Grob's Hofladen" }],
  creator: "Grob's Hofladen",
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://www.grobshofladen.ch',
    siteName: "Grob's Hofladen",
    title: "Grob's Hofladen Urdorf – Produkte direkt ab Hof",
    description:
      "Grob's Hofladen in Urdorf – Freilandeier, hausgemachte Köstlichkeiten und mehr. Ein Familienbetrieb mit Tradition.",
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Grobs Hofladen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grobs Hofladen – Frisch vom Feld auf Ihren Tisch',
    description:
      'Hofladen mit frischen, regionalen Produkten direkt vom Bauernhof.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
