import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate GDPR - Adi Travel & Tours SRL',
  description: 'Politica de confidențialitate și protecția datelor personale conform GDPR. Aflați cum ADI Travel & Tours SRL protejează și procesează informațiile dumneavoastră.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aditraveltours.ro/politica-confidentialitate',
  },
}

export default function PoliticaConfidentialitate() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link href="/" className="back-link">
          <ArrowLeft className="w-5 h-5" />
          <span>Înapoi la site</span>
        </Link>

        <div className="legal-header">
          <Shield className="w-12 h-12" />
          <h1>Politica de Confidențialitate</h1>
          <p className="legal-updated">Ultima actualizare: 25 Octombrie 2025</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Introducere</h2>
            <p>
              ADI TRAVEL&TOURS SRL (CUI: 52606779, Nr. înreg: J2025074755001) respectă
              confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze
              conform Regulamentului General privind Protecția Datelor (GDPR - UE 2016/679).
            </p>
            <p>
              Această politică explică ce date colectăm, cum le folosim, și care sunt drepturile
              dumneavoastră.
            </p>
          </section>

          <section>
            <h2>2. Operatorul de Date</h2>
            <p><strong>ADI TRAVEL&TOURS SRL</strong></p>
            <p>CUI: 52606779</p>
            <p>Nr. înregistrare: J2025074755001</p>
            <p>Email contact: adicohai@gmail.com</p>
            <p>Telefon: +40 756 667 263 (România), +33 753 484 575 (Franța)</p>
          </section>

          <section>
            <h2>3. Date Personale Colectate</h2>
            <h3>3.1 Date de Identificare</h3>
            <ul>
              <li>Nume și prenume</li>
              <li>Date de contact (telefon, email)</li>
              <li>Adresă (pentru livrarea coletelor)</li>
              <li>Copie act identitate (pentru călătorii internaționale)</li>
            </ul>

            <h3>3.2 Date de Rezervare</h3>
            <ul>
              <li>Detalii despre călătorie (destinație, dată, traseu)</li>
              <li>Informații despre bagaje și colete</li>
              <li>Preferințe de călătorie</li>
            </ul>

            <h3>3.3 Date Financiare</h3>
            <ul>
              <li>Informații necesare pentru facturare</li>
              <li>Date referitoare la plăți efectuate</li>
            </ul>
          </section>

          <section>
            <h2>4. Scopul Prelucrării Datelor</h2>
            <p>Datele personale sunt prelucrate pentru următoarele scopuri:</p>
            <ul>
              <li><strong>Executarea contractului:</strong> Rezervări, emitere bilete, organizare transport</li>
              <li><strong>Obligații legale:</strong> Facturare, evidență contabilă, raportări legale</li>
              <li><strong>Interes legitim:</strong> Îmbunătățirea serviciilor, comunicări comerciale, siguranța călătoriilor</li>
              <li><strong>Consimțământ:</strong> Marketing, newsletter (doar cu acordul dumneavoastră explicit)</li>
            </ul>
          </section>

          <section>
            <h2>5. Baza Legală a Prelucrării</h2>
            <p>Prelucrarea datelor se face pe baza:</p>
            <ul>
              <li>Executării contractului încheiat cu dumneavoastră</li>
              <li>Respectării obligațiilor legale ale companiei</li>
              <li>Interesului legitim al companiei</li>
              <li>Consimțământului dumneavoastră explicit (pentru anumite prelucrări)</li>
            </ul>
          </section>

          <section>
            <h2>6. Destinatarii Datelor</h2>
            <p>Datele personale pot fi comunicate către:</p>
            <ul>
              <li>Autoritățile vamale și de frontieră (pentru călătorii internaționale)</li>
              <li>Autorități fiscale și de control (ANAF, ANPC)</li>
              <li>Furnizori de servicii IT și hosting</li>
              <li>Companii de asigurări</li>
              <li>Parteneri de transport (în cazul serviciilor combinate)</li>
            </ul>
            <p>
              Nu vindem și nu înch iriem datele personale către terți în scopuri de marketing.
            </p>
          </section>

          <section>
            <h2>7. Transfer Internațional</h2>
            <p>
              În contextul serviciilor noastre de transport internațional, datele pot fi transferate
              în Austria, Germania și Franța - țări membre UE cu protecție echivalentă GDPR.
            </p>
          </section>

          <section>
            <h2>8. Perioada de Stocare</h2>
            <ul>
              <li><strong>Date de rezervare:</strong> 5 ani (obligații fiscale)</li>
              <li><strong>Date de facturare:</strong> 10 ani (legislație contabilă)</li>
              <li><strong>Date de marketing:</strong> Până la retragerea consimțământului</li>
            </ul>
          </section>

          <section>
            <h2>9. Drepturile Dumneavoastră</h2>
            <p>Conform GDPR, aveți următoarele drepturi:</p>
            <ul>
              <li><strong>Dreptul de acces:</strong> Să solicitați o copie a datelor personale</li>
              <li><strong>Dreptul la rectificare:</strong> Să corectați datele inexacte</li>
              <li><strong>Dreptul la ștergere:</strong> Să solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
              <li><strong>Dreptul la restricționare:</strong> Să limitați prelucrarea datelor</li>
              <li><strong>Dreptul la portabilitate:</strong> Să primiți datele într-un format structurat</li>
              <li><strong>Dreptul la opoziție:</strong> Să vă opuneți prelucrării bazate pe interes legitim</li>
              <li><strong>Dreptul de a retrage consimțământul:</strong> Pentru prelucrările bazate pe consimțământ</li>
            </ul>
            <p>
              Pentru exercitarea drepturilor, contactați-ne la: <strong>adicohai@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2>10. Securitatea Datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice pentru protecția datelor:
            </p>
            <ul>
              <li>Criptare SSL pentru transmiterea datelor</li>
              <li>Acces restricționat la date (doar personal autorizat)</li>
              <li>Backup-uri regulate</li>
              <li>Actualizări de securitate</li>
              <li>Politici interne de protecție a datelor</li>
            </ul>
          </section>

          <section>
            <h2>11. Dreptul de Plângere</h2>
            <p>
              Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a
              Prelucrării Datelor cu Caracter Personal (ANSPDCP):
            </p>
            <p>
              <strong>Website:</strong> <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a><br />
              <strong>Email:</strong> anspdcp@dataprotection.ro<br />
              <strong>Adresă:</strong> B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București
            </p>
          </section>

          <section>
            <h2>12. Modificări ale Politicii</h2>
            <p>
              Ne rezervăm dreptul de a modifica această politică de confidențialitate.
              Modificările vor fi publicate pe această pagină, iar data ultimei actualizări
              va fi modificată corespunzător.
            </p>
            <p>
              Vă recomandăm să verificați periodic această pagină pentru a fi la curent cu
              orice modificări.
            </p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>
              Pentru orice întrebări referitoare la protecția datelor personale, ne puteți
              contacta la:
            </p>
            <p>
              <strong>Email:</strong> adicohai@gmail.com<br />
              <strong>Telefon:</strong> +40 756 667 263 (România)<br />
              <strong>Telefon:</strong> +33 753 484 575 / +33 753 772 796 (Franța)
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
