import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center px-4">
        <span className="text-8xl mb-6 block">🌾</span>
        <h1 className="font-serif text-5xl font-bold text-moss-800 mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl text-moss-700 mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-moss-600 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder Sie haben sich vertippt.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
