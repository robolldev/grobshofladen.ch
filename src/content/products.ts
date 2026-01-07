import { images } from './images'

export type Season = 'Frühling' | 'Sommer' | 'Herbst' | 'Winter' | 'Ganzjährig'

export interface Product {
  id: string
  name: string
  description: string
  season?: Season
  price?: string
  available: boolean
  image?: string
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  icon: string
  image: string
  products: Product[]
}

export const categories: ProductCategory[] = [
  {
    id: 'hausgemacht',
    name: 'Hausgemachtes',
    description: 'Diverse hausgemachte Köstlichkeiten aus unserer Küche.',
    icon: '🫙',
    image: images.categories.eingemachtes,
    products: [
      { id: 'konfituere', name: 'Konfitüre', description: 'Verschiedene hausgemachte Konfitüren', season: 'Ganzjährig', available: true },
      { id: 'pesto', name: 'Pesto', description: 'Frisches Pesto aus eigener Herstellung', season: 'Ganzjährig', available: true },
      { id: 'tomatensugo', name: 'Tomatensugo', description: 'Aromatischer Tomatensugo', season: 'Ganzjährig', available: true },
      { id: 'guetzli', name: 'Guetzli', description: 'Hausgemachte Guetzli', season: 'Ganzjährig', available: true },
      { id: 'teigwaren', name: 'Teigwaren', description: 'Frische hausgemachte Teigwaren', season: 'Ganzjährig', available: true },
    ],
  },
  {
    id: 'backwaren',
    name: 'Backwaren',
    description: 'Frisches Brot und Gebäck – nur an bestimmten Tagen.',
    icon: '🍞',
    image: images.categories.saisonal,
    products: [
      { id: 'brot', name: 'Brot (6 Sorten)', description: '6 verschiedene Brotsorten – nur freitags', season: 'Ganzjährig', available: true },
      { id: 'butterzoepfe', name: 'Butterzöpfe', description: 'Frische Butterzöpfe – nur samstags', season: 'Ganzjährig', available: true },
    ],
  },
  {
    id: 'eier',
    name: 'Freilandeier',
    description: 'Frische Eier von unseren 2100 Freiland-Legehennen.',
    icon: '🥚',
    image: images.categories.eier,
    products: [
      { id: 'freilandeier', name: 'Freilandeier', description: 'Von unseren 2100 freilaufenden Hühnern', season: 'Ganzjährig', available: true },
    ],
  },
  {
    id: 'gemuese',
    name: 'Frisches Gemüse',
    description: 'Saisonales Gemüse direkt vom Feld.',
    icon: '🥕',
    image: images.categories.gemuese,
    products: [
      { id: 'kartoffeln', name: 'Kartoffeln', description: 'Frische Kartoffeln aus eigenem Anbau', season: 'Ganzjährig', available: true },
      { id: 'kuerbisse', name: 'Kürbisse', description: 'Verschiedene Kürbissorten', season: 'Herbst', available: true },
      { id: 'saisongemuese', name: 'Saisonales Gemüse', description: 'Wechselndes Angebot je nach Saison', season: 'Ganzjährig', available: true },
    ],
  },
  {
    id: 'geschenke',
    name: 'Geschenke',
    description: 'Geschenkkörbe und Blumengestecke.',
    icon: '🎁',
    image: images.categories.saisonal,
    products: [
      { id: 'geschenkkoerbe', name: 'Geschenkkörbe', description: 'Individuelle Geschenkkörbe mit Hofprodukten', season: 'Ganzjährig', available: true },
      { id: 'blumengestecke', name: 'Blumengestecke', description: 'Blumengestecke von Blumenfrisch', season: 'Ganzjährig', available: true },
    ],
  },
]

export const productsDisclaimer = 'Im Hofladen werden viele selber hergestellte Produkte verkauft. Zur Abrundung des Angebots werden zusätzlich verschiedene Produkte von Partnern angeboten. Das aktuelle Angebot variiert je nach Saison und Verfügbarkeit.'
