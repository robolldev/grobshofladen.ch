# Grobs Hofladen - Next.js Website

Eine moderne, produktionsreife Website für einen Schweizer Hofladen.

## 🌾 Features

- **Next.js 14** mit App Router
- **TypeScript** für Type Safety
- **Tailwind CSS** für modernes Styling
- **Static-first** Architektur (kein Backend nötig)
- **SEO-optimiert** mit Sitemap und Meta-Tags
- **Mobile-first** responsives Design
- **Barrierefreiheit** (ARIA Labels, Fokus-Stile, Kontraste)

## 📁 Projektstruktur

```
src/
├── app/                    # App Router Seiten
│   ├── layout.tsx         # Root Layout mit Navbar/Footer
│   ├── page.tsx           # Home
│   ├── unser-hof/         # Über uns
│   ├── hofprodukte/       # Produktübersicht
│   ├── baesebeiz-catering/# Gastronomie
│   ├── events/            # Veranstaltungen
│   ├── links/             # Partner & Social
│   ├── kontakt/           # Kontaktseite
│   ├── impressum/         # Rechtliches
│   ├── datenschutz/       # Datenschutz
│   └── not-found.tsx      # 404 Seite
├── components/            # React Komponenten
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   ├── Card.tsx
│   ├── ProductGrid.tsx
│   ├── EventList.tsx
│   ├── ContactBlock.tsx
│   ├── OpeningHours.tsx
│   └── Gallery.tsx
├── content/               # Statische Inhalte (CMS-Ersatz)
│   ├── farm.ts           # Hof-Informationen
│   ├── products.ts       # Produkte & Kategorien
│   ├── events.ts         # Veranstaltungen
│   ├── links.ts          # Partner-Links
│   ├── contact.ts        # Kontaktdaten
│   └── baesebeiz.ts      # Bäsebeiz-Infos
public/
└── images/               # Platzhalterbilder (SVG)
```

## 🚀 Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktion bauen
npm run build

# Produktion starten
npm start
```

## 🎨 Design System

### Farben
- **Cream** - Warme Off-White Töne (Hintergrund)
- **Moss** - Moosgrün (Primärfarbe)
- **Wood** - Holzbraun (Akzente)
- **Sun** - Sonnengelb (CTAs, Highlights)

### Typografie
- **Headline**: Playfair Display (Serif)
- **Body**: Source Sans 3 (Sans-Serif)

## 📝 Inhalte bearbeiten

Alle Inhalte befinden sich in `/src/content/`:

### Produkte hinzufügen
Bearbeite `products.ts` und füge Produkte zur jeweiligen Kategorie hinzu:

```typescript
{
  id: 'neu-produkt',
  name: 'Neues Produkt',
  description: 'Beschreibung',
  season: 'Sommer',
  price: 'CHF 10.–',
  available: true,
}
```

### Events hinzufügen
Bearbeite `events.ts`:

```typescript
{
  id: 'event-id',
  title: 'Event Name',
  date: '2026-09-20',
  time: '10:00 - 18:00',
  description: 'Beschreibung',
  location: 'Ort',
}
```

## 🖼️ Bilder

Die SVG-Platzhalter in `/public/images/` sollten durch echte Fotos ersetzt werden:
- Hero-Bilder: 1920x1080px (Home) oder 1920x800px (Unterseiten)
- Kategorie-Bilder: 600x400px
- Galerie-Bilder: 800x600px
- OG-Image: 1200x630px

## 📱 Responsiv

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Konfiguration

### Domain ändern
1. `src/app/sitemap.ts` - baseUrl anpassen
2. `src/app/layout.tsx` - OpenGraph URL anpassen

### Kontaktdaten
Bearbeite `src/content/contact.ts` für:
- Adresse
- Telefon
- E-Mail
- Öffnungszeiten
- Google Maps Embed URL

## 📦 Build & Deploy

```bash
# Statischen Export erstellen
npm run build
```

Der Build erstellt einen statischen Export im `/out` Ordner, der auf jedem Webserver gehostet werden kann.

## 📄 Lizenz

Alle Rechte vorbehalten. © Grobs Hofladen
