import { Metadata } from 'next'
import { Hero, SectionTitle, ContactBlock, OpeningHours } from '@/components'
import { contact } from '@/content/contact'
import { images, imageAlts } from '@/content/images'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: `Kontaktieren Sie Grobs Hofladen: ${contact.address.street}, ${contact.address.zip} ${contact.address.city}. Telefon: ${contact.phone}`,
  openGraph: {
    title: 'Kontakt | Grobs Hofladen',
    description: 'Kontakt, Öffnungszeiten und Anfahrt zu Grobs Hofladen.',
  },
}

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Kontakt"
        subtitle="Wir freuen uns auf Sie"
        description="Haben Sie Fragen? Möchten Sie bestellen? Wir sind für Sie da!"
        image={images.hero.kontakt}
        imageAlt={imageAlts.hero.kontakt}
        size="medium"
      />

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ContactBlock showMap showForm />
        </div>
      </section>

      {/* Opening Hours */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <OpeningHours />
          </div>
        </div>
      </section>

      {/* Map Full Width */}
      <section className="h-96">
        <iframe
          src={contact.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Grobs Hofladen"
        />
      </section>

      {/* Mobile Call Button - Fixed */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <a
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          className="flex items-center justify-center w-14 h-14 bg-sun-500 hover:bg-sun-600 text-moss-900 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Jetzt anrufen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  )
}
