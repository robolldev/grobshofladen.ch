import Link from 'next/link'
import Image from 'next/image'
import { contact } from '@/content/contact'

const quickLinks = [
  { href: '/unser-hof', label: 'Unser Hof' },
  { href: '/hofprodukte', label: 'Hofprodukte' },
  { href: '/baesebeiz-catering', label: 'Hofschüre' },
  { href: '/links', label: 'Links' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-barn-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Branding */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.svg"
                alt="Grob's Hofladen Logo"
                width={70}
                height={42}
                className="h-10 w-auto brightness-110"
              />
              <div>
                <span className="font-serif text-lg font-bold text-cream-50 block">
                  Grob&apos;s Hofladen
                </span>
                <span className="text-xs text-cream-300">
                  Produkte direkt ab Hof
                </span>
              </div>
            </Link>
            <p className="text-cream-300 text-sm leading-relaxed">
              Frische Produkte direkt vom Bauernhof. 
              Regional, saisonal und mit Liebe produziert.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
              Quicklinks
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-sun-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
              Öffnungszeiten
            </h3>
            <ul className="space-y-1 text-sm">
              {contact.openingHours.regular.map((item, idx) => (
                <li key={idx} className="flex justify-between gap-4">
                  <span className="text-cream-300">{item.days}</span>
                  <span className="text-cream-100">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
              Kontakt
            </h3>
            <address className="not-italic text-sm space-y-2">
              <p className="text-cream-300">
                {contact.address.street}<br />
                {contact.address.zip} {contact.address.city}
              </p>
              <p>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-cream-100 hover:text-sun-400 transition-colors"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-cream-100 hover:text-sun-400 transition-colors"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-barn-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-cream-400 text-sm">
              © {currentYear} {contact.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-4">
              <Link
                href="/impressum"
                className="text-cream-400 hover:text-cream-100 text-sm transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-cream-400 hover:text-cream-100 text-sm transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
