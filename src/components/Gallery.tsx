import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

export function Gallery({ images, columns = 3 }: GalleryProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {images.map((image, idx) => (
        <div
          key={idx}
          className="relative aspect-[4/3] rounded-xl overflow-hidden group"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / columns}vw`}
          />
          <div className="absolute inset-0 bg-moss-900/0 group-hover:bg-moss-900/20 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-moss-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-cream-50 text-sm">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
