import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben zu Grobs Hofladen.',
}

export default function Impressum() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-moss">
            <h1 className="font-serif text-4xl font-bold text-moss-800 mb-8">
              Impressum
            </h1>

            <h2>Kontaktadresse</h2>
            <p>
              Grobs Hofladen<br />
              Familie Grob<br />
              Hofweg 12<br />
              8000 Musterdorf<br />
              Schweiz
            </p>

            <p>
              Telefon: +41 44 123 45 67<br />
              E-Mail: info@grobshofladen.ch
            </p>

            <h2>Vertretungsberechtigte Personen</h2>
            <p>Familie Grob</p>

            <h2>Handelsregistereintrag</h2>
            <p>
              Eingetragener Firmenname: Grobs Hofladen<br />
              Handelsregister-Nr.: CHE-XXX.XXX.XXX
            </p>

            <h2>Mehrwertsteuernummer</h2>
            <p>CHE-XXX.XXX.XXX MWST</p>

            <h2>Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, 
              Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p>
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
              die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, 
              durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>

            <h2>Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien 
              auf dieser Website gehören ausschliesslich Grobs Hofladen oder den speziell genannten 
              Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung 
              des Urheberrechtsträgers im Voraus einzuholen.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
