import { contact } from '@/content/contact'
import Link from 'next/link'

interface ContactBlockProps {
  showMap?: boolean
  showForm?: boolean
  variant?: 'full' | 'compact'
}

export function ContactBlock({ showMap = false, showForm = false, variant = 'full' }: ContactBlockProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-serif text-xl font-semibold text-moss-800 mb-4">
          Kontakt
        </h3>
        <address className="not-italic space-y-3 text-moss-600">
          <p>
            {contact.address.street}<br />
            {contact.address.zip} {contact.address.city}
          </p>
          <p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="text-moss-700 hover:text-sun-600 font-medium transition-colors"
            >
              {contact.phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="text-moss-700 hover:text-sun-600 transition-colors"
            >
              {contact.email}
            </a>
          </p>
        </address>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-1 mt-4 text-sm text-moss-600 hover:text-moss-800 transition-colors"
        >
          Mehr erfahren
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div>
        <h3 className="font-serif text-2xl font-semibold text-moss-800 mb-6">
          So erreichen Sie uns
        </h3>
        
        <div className="space-y-6">
          {/* Address */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-moss-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-moss-800">Adresse</h4>
              <address className="not-italic text-moss-600">
                {contact.name}<br />
                {contact.address.street}<br />
                {contact.address.zip} {contact.address.city}
              </address>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-moss-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-moss-800">Telefon</h4>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="text-moss-600 hover:text-sun-600 transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-moss-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-moss-800">E-Mail</h4>
              <a
                href={`mailto:${contact.email}`}
                className="text-moss-600 hover:text-sun-600 transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="mt-8 p-4 bg-cream-100 rounded-lg">
          <h4 className="font-semibold text-moss-800 mb-2">Anfahrt</h4>
          <p className="text-moss-600 text-sm mb-2">
            <strong>Mit dem Auto:</strong> {contact.directions.bycar}
          </p>
          <p className="text-moss-600 text-sm mb-2">
            <strong>ÖV:</strong> {contact.directions.publicTransport}
          </p>
          <p className="text-moss-600 text-sm">
            <strong>Parkplätze:</strong> {contact.directions.parking}
          </p>
        </div>
      </div>

      {/* Map or Form */}
      <div>
        {showMap && (
          <div className="rounded-xl overflow-hidden shadow-sm h-64 lg:h-full min-h-[300px]">
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
          </div>
        )}

        {showForm && (
          <form
            action={`mailto:${contact.email}?subject=${encodeURIComponent(contact.contactFormSubject)}`}
            method="post"
            encType="text/plain"
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="font-serif text-xl font-semibold text-moss-800 mb-4">
              Nachricht senden
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-moss-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-moss-200 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-moss-700 mb-1">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-moss-200 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-moss-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-moss-200 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-moss-700 mb-1">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-moss-200 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
