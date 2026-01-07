import { Metadata } from 'next'
import { Hero, SectionTitle } from '@/components'
import { links, linkCategories, type Link as LinkType } from '@/content/links'
import { images, imageAlts } from '@/content/images'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Partner, regionale Verbindungen und Social Media – entdecken Sie unser Netzwerk.',
  openGraph: {
    title: 'Links | Grobs Hofladen',
    description: 'Partner, regionale Verbindungen und Social Media.',
  },
}

function LinkCard({ link }: { link: LinkType }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
    >
      <h3 className="font-serif text-lg font-semibold text-moss-800 group-hover:text-moss-600 transition-colors mb-2">
        {link.name}
      </h3>
      <p className="text-moss-600 text-sm mb-3">{link.description}</p>
      <span className="inline-flex items-center gap-1 text-sm text-moss-500 group-hover:text-sun-600 transition-colors">
        Besuchen
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </span>
    </a>
  )
}

export default function Links() {
  const labelLinks = links.filter((l) => l.category === 'label')
  const regionalLinks = links.filter((l) => l.category === 'regional')
  const partnerLinks = links.filter((l) => l.category === 'partner')

  return (
    <>
      {/* Hero */}
      <Hero
        title="Links & Partner"
        subtitle="Unser Netzwerk"
        description="Verbunden mit der Region und darüber hinaus."
        image={images.hero.links}
        imageAlt={imageAlts.hero.links}
        size="medium"
      />

      {/* Label Links */}
      {labelLinks.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              subtitle="Zertifizierungen"
              title={linkCategories.label.title}
              description={linkCategories.label.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labelLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regional Links */}
      {regionalLinks.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-custom">
            <SectionTitle
              subtitle="Entdecken"
              title={linkCategories.regional.title}
              description={linkCategories.regional.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partner Links */}
      {partnerLinks.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              subtitle="Zusammenarbeit"
              title={linkCategories.partner.title}
              description={linkCategories.partner.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
