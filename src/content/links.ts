export interface Link {
  id: string
  name: string
  url: string
  description: string
  category: 'partner' | 'regional' | 'label'
}

export const links: Link[] = [
  // Labels & Verbände
  {
    id: 'ipsuisse',
    name: 'IP Suisse',
    url: 'https://www.ipsuisse.ch/',
    description: 'Label für nachhaltige Schweizer Landwirtschaft',
    category: 'label',
  },
  // Rund um Urdorf
  {
    id: 'gemeinde',
    name: 'Gemeinde Urdorf',
    url: 'https://www.urdorf.ch/',
    description: 'Offizielle Website der Gemeinde Urdorf',
    category: 'regional',
  },
  // Partner
  {
    id: 'blumenfrisch',
    name: 'Blumenfrisch',
    url: '#',
    description: 'Blumengestecke von Blumenfrisch – erhältlich in unserem Hofladen',
    category: 'partner',
  },
]

export const linkCategories = {
  label: {
    title: 'Labels & Verbände',
    description: 'Zertifizierungen und Organisationen.',
  },
  regional: {
    title: 'Rund um Urdorf',
    description: 'Entdecken Sie unsere Gemeinde.',
  },
  partner: {
    title: 'Partner',
    description: 'Produkte von Partnern in unserem Hofladen.',
  },
}
