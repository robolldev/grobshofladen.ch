export interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  location?: string
  image?: string
}

export const events: Event[] = [
  // Events können hier hinzugefügt werden
  // Beispiel:
  // {
  //   id: 'erntedankfest-2026',
  //   title: 'Erntedankfest',
  //   date: '2026-09-20',
  //   time: '10:00 - 18:00',
  //   description: 'Feiern Sie mit uns die Ernte! Mit Hofführungen, Kinderprogramm, Festwirtschaft und frischen Produkten.',
  //   location: 'Auf dem Hofgelände',
  //   image: '/images/event-erntedank.jpg',
  // },
]

export const emptyStateMessage = {
  title: 'Aktuell keine Termine',
  description: 'Momentan sind keine Veranstaltungen geplant. Schauen Sie bald wieder vorbei oder folgen Sie uns für Updates!',
}
