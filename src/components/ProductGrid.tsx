import Image from 'next/image'
import Link from 'next/link'
import { categories, type ProductCategory, type Product, type Season } from '@/content/products'

interface ProductGridProps {
  showCategories?: boolean
  categoryId?: string
}

const seasonColors: Record<Season, string> = {
  'Frühling': 'bg-green-100 text-green-700',
  'Sommer': 'bg-yellow-100 text-yellow-700',
  'Herbst': 'bg-orange-100 text-orange-700',
  'Winter': 'bg-blue-100 text-blue-700',
  'Ganzjährig': 'bg-moss-100 text-moss-700',
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md ${!product.available ? 'opacity-60' : ''}`}>
      <div className="flex justify-between items-start gap-2 mb-2">
        <h4 className="font-serif text-lg font-semibold text-moss-800">
          {product.name}
        </h4>
        {product.season && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ${seasonColors[product.season]}`}>
            {product.season}
          </span>
        )}
      </div>
      <p className="text-moss-600 text-sm mb-3">{product.description}</p>
      <div className="flex justify-between items-center">
        {product.price && (
          <span className="text-moss-700 font-medium text-sm">{product.price}</span>
        )}
        {!product.available && (
          <span className="text-xs text-wood-600 italic">Aktuell nicht verfügbar</span>
        )}
        {product.available && (
          <span className="text-xs text-moss-500">Solange Vorrat</span>
        )}
      </div>
    </div>
  )
}

function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={`/hofprodukte#${category.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-3xl mb-1 block">{category.icon}</span>
          <h3 className="font-serif text-xl font-semibold text-cream-50">
            {category.name}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-moss-600 text-sm">{category.description}</p>
        <span className="text-moss-500 text-xs mt-2 block">
          {category.products.filter(p => p.available).length} Produkte verfügbar
        </span>
      </div>
    </Link>
  )
}

export function ProductGrid({ showCategories = true, categoryId }: ProductGridProps) {
  if (showCategories && !categoryId) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    )
  }

  const filteredCategories = categoryId
    ? categories.filter((c) => c.id === categoryId)
    : categories

  return (
    <div className="space-y-12">
      {filteredCategories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-moss-800">
                {category.name}
              </h3>
              <p className="text-moss-600 text-sm">{category.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
