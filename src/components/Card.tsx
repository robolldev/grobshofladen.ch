import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  icon?: string
  href?: string
  badge?: string
  variant?: 'default' | 'horizontal' | 'compact'
  className?: string
  children?: React.ReactNode
}

export function Card({
  title,
  description,
  image,
  imageAlt = '',
  icon,
  href,
  badge,
  variant = 'default',
  className = '',
  children,
}: CardProps) {
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { href } : {}

  if (variant === 'horizontal') {
    return (
      <Wrapper
        {...(wrapperProps as any)}
        className={`group flex flex-col sm:flex-row bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
          href ? 'cursor-pointer' : ''
        } ${className}`}
      >
        {image && (
          <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 192px"
            />
            {badge && (
              <span className="absolute top-3 left-3 bg-sun-500 text-moss-900 text-xs font-semibold px-2 py-1 rounded">
                {badge}
              </span>
            )}
          </div>
        )}
        <div className="p-5 flex flex-col justify-center">
          {icon && <span className="text-3xl mb-2">{icon}</span>}
          <h3 className="font-serif text-xl font-semibold text-moss-800 group-hover:text-moss-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-moss-600 text-sm mt-2 line-clamp-2">{description}</p>
          )}
          {children}
        </div>
      </Wrapper>
    )
  }

  if (variant === 'compact') {
    return (
      <Wrapper
        {...(wrapperProps as any)}
        className={`group p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${
          href ? 'cursor-pointer' : ''
        } ${className}`}
      >
        {icon && <span className="text-3xl mb-3 block">{icon}</span>}
        <h3 className="font-serif text-lg font-semibold text-moss-800 group-hover:text-moss-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-moss-600 text-sm mt-2">{description}</p>
        )}
        {children}
      </Wrapper>
    )
  }

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
        href ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <span className="absolute top-3 left-3 bg-sun-500 text-moss-900 text-xs font-semibold px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        {icon && !image && <span className="text-3xl mb-3 block">{icon}</span>}
        <h3 className="font-serif text-xl font-semibold text-moss-800 group-hover:text-moss-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-moss-600 text-sm mt-2 line-clamp-3">{description}</p>
        )}
        {children}
      </div>
    </Wrapper>
  )
}
