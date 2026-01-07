import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  imageAlt: string
  cta?: {
    label: string
    href: string
  }
  overlay?: boolean
  size?: 'full' | 'large' | 'medium'
}

export function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  cta,
  overlay = true,
  size = 'full',
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[50vh]',
  }

  return (
    <section className={`relative ${heightClasses[size]} flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-moss-900/70 via-moss-900/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          {subtitle && (
            <span className="inline-block text-sun-400 font-medium text-sm uppercase tracking-wider mb-4 animate-fade-in">
              {subtitle}
            </span>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 mb-6 animate-slide-up">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-cream-200 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          )}
          {cta && (
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 bg-sun-500 hover:bg-sun-600 text-moss-900 font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                {cta.label}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {size === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cream-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  )
}
