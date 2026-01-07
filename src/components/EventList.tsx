import { events, emptyStateMessage, type Event } from '@/content/events'

function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date)
  const day = eventDate.getDate()
  const month = eventDate.toLocaleDateString('de-CH', { month: 'short' })

  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex">
      {/* Date Badge */}
      <div className="bg-moss-600 text-cream-50 p-4 flex flex-col items-center justify-center min-w-[80px]">
        <span className="text-2xl font-bold">{day}</span>
        <span className="text-sm uppercase">{month}</span>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-1">
        <h3 className="font-serif text-xl font-semibold text-moss-800 mb-2">
          {event.title}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-moss-600 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}
          </span>
          {event.location && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </span>
          )}
        </div>
        <p className="text-moss-600 text-sm">{event.description}</p>
      </div>
    </article>
  )
}

function EmptyState() {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cream-200 mb-6">
        <svg className="w-10 h-10 text-moss-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl font-semibold text-moss-800 mb-3">
        {emptyStateMessage.title}
      </h3>
      <p className="text-moss-600 max-w-md mx-auto">
        {emptyStateMessage.description}
      </p>
    </div>
  )
}

interface EventListProps {
  limit?: number
  showEmpty?: boolean
}

export function EventList({ limit, showEmpty = true }: EventListProps) {
  // Filter future events and sort by date
  const now = new Date()
  const futureEvents = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  
  const displayEvents = limit ? futureEvents.slice(0, limit) : futureEvents

  if (displayEvents.length === 0) {
    return showEmpty ? <EmptyState /> : null
  }

  return (
    <div className="space-y-4">
      {displayEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
