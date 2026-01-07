import { contact } from '@/content/contact'

interface OpeningHoursProps {
  variant?: 'default' | 'compact' | 'inline'
  showNote?: boolean
}

export function OpeningHours({ variant = 'default', showNote = true }: OpeningHoursProps) {
  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {contact.openingHours.regular
          .filter((item) => item.hours !== 'geschlossen')
          .map((item, idx) => (
            <span key={idx} className="text-moss-600">
              <strong className="text-moss-700">{item.days}:</strong> {item.hours}
            </span>
          ))}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-serif text-xl font-semibold text-moss-800 mb-4">
          Öffnungszeiten
        </h3>
        <ul className="space-y-2">
          {contact.openingHours.regular.map((item, idx) => (
            <li key={idx} className="flex justify-between text-sm">
              <span className="text-moss-600">{item.days}</span>
              <span className={item.hours === 'geschlossen' ? 'text-moss-400' : 'text-moss-800 font-medium'}>
                {item.hours}
              </span>
            </li>
          ))}
        </ul>
        {showNote && (
          <p className="mt-4 text-xs text-moss-500 border-t border-moss-100 pt-4">
            {contact.openingHours.note}
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-moss-800 mb-6">
        Öffnungszeiten Hofladen
      </h3>
      <div className="bg-cream-100 rounded-xl p-6">
        <ul className="space-y-3">
          {contact.openingHours.regular.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span className="text-moss-700">{item.days}</span>
              <span className={`font-medium ${item.hours === 'geschlossen' ? 'text-moss-400' : 'text-moss-800'}`}>
                {item.hours}
              </span>
            </li>
          ))}
        </ul>
        {showNote && (
          <p className="mt-6 text-sm text-moss-600 border-t border-moss-200 pt-4">
            {contact.openingHours.note}
          </p>
        )}
      </div>
    </div>
  )
}
