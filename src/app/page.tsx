import Link from 'next/link'
import Image from 'next/image'
import { Hero, SectionTitle, ContactBlock, OpeningHours } from '@/components'
import { farm } from '@/content/farm'
import { categories } from '@/content/products'
import { contact } from '@/content/contact'
import { images, imageAlts } from '@/content/images'

const iconMap: Record<string, React.ReactNode> = {
  leaf: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={farm.slogan}
        subtitle="Willkommen bei Grob's Hofladen"
        description={farm.heroSubtitle}
        image={images.hero.home}
        imageAlt={imageAlts.hero.home}
        cta={{ label: 'Zu unseren Produkten', href: '/hofprodukte' }}
        size="full"
      />

      {/* USPs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Warum Grob's Hofladen"
            title="Das zeichnet uns aus"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farm.usps.map((usp, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-cream-50 hover:bg-cream-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-moss-100 text-moss-600 mb-4">
                  {iconMap[usp.icon]}
                </div>
                <h3 className="font-serif text-xl font-semibold text-moss-800 mb-2">
                  {usp.title}
                </h3>
                <p className="text-moss-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            subtitle="Aus dem Hofladen"
            title="Unsere Produktkategorien"
            description="Entdecken Sie unser vielfältiges Angebot an frischen, regionalen Produkten."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category.id}
                href={`/hofprodukte#${category.id}`}
                className="group bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <span className="text-4xl block mb-3">{category.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-moss-800 group-hover:text-moss-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/hofprodukte"
              className="btn-primary"
            >
              Alle Produkte entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Hofschüre Teaser */}
      <section className="section-padding bg-moss-700 text-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Raum für Anlässe"
                title="Unsere Hofschüre"
                description="Die Hofschüre steht für kleinere Anlässe zur Verfügung."
                centered={false}
                light
              />
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sun-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Geeignet für bis ca. 30 Personen</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sun-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Verpflegung nach Absprache möglich</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sun-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Kontaktaufnahme telefonisch oder per E-Mail</span>
                </li>
              </ul>
              <Link href="/baesebeiz-catering" className="btn-secondary">
                Mehr erfahren
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={images.gallery.baesebeiz}
                alt="Hofschüre"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Opening Hours */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            subtitle="Besuchen Sie uns"
            title="Kontakt & Öffnungszeiten"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactBlock variant="compact" />
            <OpeningHours variant="compact" />
          </div>
          <div className="text-center mt-10">
            <Link href="/kontakt" className="btn-primary">
              Zur Kontaktseite
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
