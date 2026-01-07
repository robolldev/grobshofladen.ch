interface SectionTitleProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span
          className={`inline-block text-sm uppercase tracking-wider font-medium mb-2 ${
            light ? 'text-sun-400' : 'text-moss-600'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold ${
          light ? 'text-cream-50' : 'text-moss-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-cream-200' : 'text-moss-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
