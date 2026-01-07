import { Metadata } from 'next'
import { Hero, SectionTitle, Gallery } from '@/components'
import { farm } from '@/content/farm'
import { images, imageAlts } from '@/content/images'

export const metadata: Metadata = {
  title: 'Unser Hof',
  description: 'Erfahren Sie mehr über unseren Familienbetrieb, unsere Geschichte und wie wir arbeiten. Seit über 70 Jahren bewirtschaften wir 27 Hektaren Land.',
  openGraph: {
    title: 'Unser Hof | Grobs Hofladen',
    description: 'Erfahren Sie mehr über unseren Familienbetrieb, unsere Geschichte und wie wir arbeiten.',
  },
}

export default function UnserHof() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Unser Hof"
        subtitle="Tradition seit 1952"
        description="Drei Generationen Leidenschaft für Landwirtschaft und Qualität."
        image={images.hero.hof}
        imageAlt={imageAlts.hero.hof}
        size="medium"
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              subtitle="Unsere Wurzeln"
              title={farm.story.title}
              centered={false}
            />
            <p className="text-lg text-moss-700 font-medium mb-6">
              {farm.story.intro}
            </p>
            {farm.story.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-moss-600 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-moss-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {farm.stats.map((stat, idx) => (
              <div key={idx} className="text-cream-50">
                <span className="block text-5xl lg:text-6xl font-serif font-bold text-sun-400 mb-2">
                  {stat.value}
                </span>
                <span className="block text-xl font-semibold mb-1">
                  {stat.unit}
                </span>
                <span className="text-cream-200">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultivation */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            subtitle="Was wir anbauen"
            title={farm.cultivation.title}
            description="Vielfalt aus eigenem Anbau und artgerechter Tierhaltung."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farm.cultivation.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl font-semibold text-moss-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-moss-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Impressionen"
            title="Bilder vom Hof"
          />
          <Gallery images={farm.gallery} columns={3} />
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-moss-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              subtitle={farm.label.subtitle}
              title={farm.label.title}
              light
            />
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {farm.label.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-sun-400 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-cream-100">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
