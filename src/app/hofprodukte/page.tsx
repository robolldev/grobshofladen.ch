import { Metadata } from 'next'
import Link from 'next/link'
import { Hero, SectionTitle, ProductGrid } from '@/components'
import { productsDisclaimer } from '@/content/products'
import { contact } from '@/content/contact'
import { images, imageAlts } from '@/content/images'

export const metadata: Metadata = {
  title: 'Hofprodukte',
  description: 'Entdecken Sie unser Sortiment: Hausgemachte Köstlichkeiten, Freilandeier, frisches Brot, Gemüse und Geschenkkörbe. Alles regional und saisonal.',
  openGraph: {
    title: "Hofprodukte | Grob's Hofladen",
    description: 'Hausgemachte Köstlichkeiten, Freilandeier, Brot und mehr. Regional und saisonal aus Urdorf.',
  },
}

export default function Hofprodukte() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Unsere Hofprodukte"
        subtitle="Frisch & Regional"
        description="Hausgemachte Köstlichkeiten und frische Produkte direkt ab Hof."
        image={images.hero.produkte}
        imageAlt={imageAlts.hero.produkte}
        size="medium"
      />

      {/* Special Notes */}
      <section className="py-8 bg-sun-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 justify-center text-center">
            <div className="flex items-center justify-center gap-2 text-moss-700">
              <span className="text-2xl">🍞</span>
              <span className="font-medium">6 Brotsorten – nur freitags</span>
            </div>
            <div className="hidden md:block text-moss-400">|</div>
            <div className="flex items-center justify-center gap-2 text-moss-700">
              <span className="text-2xl">🥐</span>
              <span className="font-medium">Butterzöpfe – nur samstags</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            subtitle="Unser Sortiment"
            title="Produktkategorien"
            description="Wählen Sie eine Kategorie oder scrollen Sie durch unser gesamtes Angebot."
          />
          <ProductGrid showCategories />
        </div>
      </section>

      {/* All Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Detailübersicht"
            title="Alle Produkte"
          />
          <ProductGrid showCategories={false} />
          
          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-cream-100 rounded-xl">
            <p className="text-moss-600 text-sm">{productsDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-moss-600">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold text-cream-50 mb-4">
            Interesse an unseren Produkten?
          </h2>
          <p className="text-cream-200 mb-8 max-w-xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie gerne persönlich und informieren über die aktuelle Verfügbarkeit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="btn-secondary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Jetzt anrufen
            </a>
            <Link href="/kontakt" className="btn bg-cream-50 hover:bg-cream-100 text-moss-800">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
