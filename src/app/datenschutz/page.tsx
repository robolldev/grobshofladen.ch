import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Grobs Hofladen.',
}

export default function Datenschutz() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-moss">
            <h1 className="font-serif text-4xl font-bold text-moss-800 mb-8">
              Datenschutzerklärung
            </h1>

            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: 
              Grobs Hofladen, Hofweg 12, 8000 Musterdorf, info@grobshofladen.ch
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
              Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Grobs Hofladen<br />
              Familie Grob<br />
              Hofweg 12<br />
              8000 Musterdorf<br />
              Schweiz<br /><br />
              Telefon: +41 44 123 45 67<br />
              E-Mail: info@grobshofladen.ch
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3>Anfrage per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller 
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung 
              Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2>5. Plugins und Tools</h2>
            <h3>Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, 
              Gordon House, Barrow Street, Dublin 4, Irland. Mehr Informationen zum Umgang mit 
              Nutzerdaten finden Sie in der Datenschutzerklärung von Google.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem 
              ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>

            <p className="text-sm text-moss-500 mt-8">
              Stand: Januar 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
