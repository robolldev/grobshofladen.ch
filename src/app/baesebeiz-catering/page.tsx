import { Metadata } from 'next'
import Image from 'next/image'
import { Hero, SectionTitle } from '@/components'
import { baesebeiz } from '@/content/baesebeiz'
import { contact } from '@/content/contact'
import { images, imageAlts } from '@/content/images'

export const metadata: Metadata = {
  title: 'Hofschüre',
  description: 'Unsere Hofschüre steht für kleinere Anlässe bis ca. 30 Personen zur Verfügung. Verpflegung nach Absprache möglich.',
  openGraph: {
    title: "Hofschüre | Grob's Hofladen",
    description: 'Raum für Ihre Anlässe bis ca. 30 Personen.',
  },
}

export default function Hofschuere() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={baesebeiz.title}
        subtitle={baesebeiz.subtitle}
        description="Raum für Ihre Feier in ländlicher Atmosphäre."
        image={images.hero.baesebeiz}
        imageAlt={imageAlts.hero.baesebeiz}
        size="medium"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Für Ihren Anlass"
                title={baesebeiz.intro.title}
                centered={false}
              />
              <p className="text-moss-600 text-lg leading-relaxed">
                {baesebeiz.intro.description}
              </p>
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

      {/* Features */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            subtitle="Möglichkeiten"
            title={baesebeiz.concept.title}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {baesebeiz.concept.points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <svg
                  className="w-6 h-6 text-moss-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-moss-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionTitle
              subtitle="Interesse?"
              title={baesebeiz.reservation.title}
              description={baesebeiz.reservation.description}
            />
            <div className="bg-cream-50 rounded-xl p-8 text-center">
              <div className="space-y-4">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 text-moss-700 hover:text-sun-600 transition-colors text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-center gap-3 text-moss-700 hover:text-sun-600 transition-colors text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
