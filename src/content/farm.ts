import { images, imageAlts } from './images'

export const farm = {
  name: "Grob's Hofladen",
  slogan: 'Produkte direkt ab Hof',
  heroSubtitle: 'Ein Familienbetrieb mit Tradition – Die Familie Grob begrüsst Sie ganz herzlich.',
  
  story: {
    title: 'Willkommen auf unserem Hof',
    intro: 'Die Familie Grob begrüsst Sie ganz herzlich. Unser Hof mit einer bewirtschafteten Fläche von 27 Hektaren liegt am Rande von Urdorf.',
    paragraphs: [
      'Im Hofladen werden viele selber hergestellte Produkte verkauft. Zur Abrundung des Angebots werden zusätzlich verschiedene Produkte von Partnern angeboten.',
      'Im Herbst 2011 wurde ein neuer Hühnerstall in Betrieb genommen. Der Stall bietet Platz für 2100 Freiland-Legehennen. Zusätzlich werden einige Schafe und Lämmer gehalten.',
      'Wir setzen auf Regionalität, Saisonalität, handwerkliche Herstellung und Nähe zur Kundschaft.',
    ],
  },

  stats: [
    { value: '27', unit: 'Hektaren', description: 'bewirtschaftete Fläche' },
    { value: '2100', unit: 'Legehennen', description: 'Freilandhaltung' },
    { value: '100%', unit: 'Regional', description: 'aus Urdorf' },
  ],

  usps: [
    {
      icon: 'leaf',
      title: 'Regional & Saisonal',
      description: 'Frische Produkte direkt von unserem Hof am Rande von Urdorf.',
    },
    {
      icon: 'heart',
      title: 'Familienbetrieb',
      description: 'Die Familie Grob bewirtschaftet den Hof mit Leidenschaft und persönlichem Engagement.',
    },
    {
      icon: 'shield',
      title: 'Handwerkliche Qualität',
      description: 'Viele Produkte werden von uns selbst hergestellt – von Konfitüre bis Teigwaren.',
    },
  ],

  cultivation: {
    title: 'Ackerbau & Tierhaltung',
    items: [
      { name: 'Getreide', description: 'Mais, Weizen, Raps und Eiweisserbsen' },
      { name: 'Gemüse', description: 'Kartoffeln, Kürbisse und verschiedene saisonale Gemüse' },
      { name: 'Legehennen', description: '2100 Freiland-Legehennen seit 2011' },
      { name: 'Schafe & Lämmer', description: 'Kleine Herde auf unserem Hof' },
    ],
  },

  label: {
    title: 'Unsere Philosophie',
    subtitle: 'Regional – Saisonal – Handwerklich',
    points: [
      'Regionalität und kurze Transportwege',
      'Saisonale Produkte direkt vom Hof',
      'Handwerkliche Herstellung hausgemachter Köstlichkeiten',
      'Direkter Kontakt und Nähe zur Kundschaft',
      'Partnerprodukte zur Ergänzung unseres Angebots',
    ],
  },

  gallery: [
    { src: images.gallery.hofAussen, alt: imageAlts.gallery.hofAussen },
    { src: images.gallery.felder, alt: imageAlts.gallery.felder },
    { src: images.gallery.hofladenInnen, alt: imageAlts.gallery.hofladenInnen },
    { src: images.gallery.ernte, alt: imageAlts.gallery.ernte },
    { src: images.gallery.tiere, alt: imageAlts.gallery.tiere },
    { src: images.gallery.team, alt: imageAlts.gallery.team },
  ],
}
