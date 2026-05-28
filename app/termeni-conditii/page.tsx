import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Adi Travel & Tours SRL | Transport International',
  description: 'Termeni și condiții de utilizare pentru serviciile de transport international ADI Travel & Tours SRL. Informații despre drepturi, obligații și politici de transport.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aditraveltours.ro/termeni-conditii',
  },
}

export default function TermeniConditii() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link href="/" className="back-link">
          <ArrowLeft className="w-5 h-5" />
          <span>Înapoi la site</span>
        </Link>

        <div className="legal-header">
          <FileText className="w-12 h-12" />
          <h1>Termeni și Condiții</h1>
          <p className="legal-updated">Ultima actualizare: 25 Octombrie 2025</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Informații Generale</h2>
            <p>
              Bine ați venit pe site-ul ADI TRAVEL&TOURS SRL (CUI: 52606779, Nr. înreg: J2025074755001).
              Prin accesarea și utilizarea acestui site web și a serviciilor noastre de transport,
              sunteți de acord cu termenii și condițiile prezentate mai jos.
            </p>
          </section>

          <section>
            <h2>2. Servicii Oferite</h2>
            <p>
              ADI TRAVEL&TOURS SRL oferă servicii de transport internațional de persoane, colete
              și mașini pe platformă între România și țările: Austria, Germania și Franța.
            </p>
            <h3>2.1 Transport Persoane</h3>
            <ul>
              <li>Servicii de transport regulat cu autocare moderne și climatizate</li>
              <li>Șoferi profesioniști cu experiență și licențe valabile</li>
              <li>Asigurare pentru pasageri conform legislației în vigoare</li>
              <li>Opriri regulate pentru odihnă conform normelor UE</li>
            </ul>
            <h3>2.2 Transport Colete</h3>
            <ul>
              <li>Livrare rapidă și sigură de colete și pachete</li>
              <li>Ambalare profesională disponibilă la cerere</li>
              <li>Livrare la domiciliu în condițiile agreate</li>
            </ul>
            <h3>2.3 Transport Mașini pe Platformă</h3>
            <ul>
              <li>Transport specializat pentru vehicule pe platforme dedicate</li>
              <li>Fixare profesională și protecție completă</li>
              <li>Inspecție la plecare și sosire</li>
            </ul>
          </section>

          <section>
            <h2>3. Rezervări și Plăți</h2>
            <p>
              Rezervările se pot efectua telefonic sau prin email. Pentru confirmarea rezervării
              poate fi necesar un avans conform politicii companiei.
            </p>
            <ul>
              <li>Rezervările telefonice: +40 756 667 263 (România), +33 753 484 575 (Franța)</li>
              <li>Email: adicohai@gmail.com</li>
              <li>Plățile se pot efectua în numerar sau prin transfer bancar</li>
              <li>Factura fiscală se eliberează la cerere</li>
            </ul>
          </section>

          <section>
            <h2>4. Anulări și Modificări</h2>
            <p>
              Condițiile de anulare și modificare a rezervărilor variază în funcție de serviciul
              rezervat și momentul în care se face anularea:
            </p>
            <ul>
              <li>Anulări cu mai mult de 48h înaintea plecării: rambursare integrală minus taxe administrative</li>
              <li>Anulări cu 24-48h înaintea plecării: rambursare 50%</li>
              <li>Anulări cu mai puțin de 24h: fără rambursare</li>
              <li>Modificările de rezervare se pot face în limita locurilor disponibile</li>
            </ul>
          </section>

          <section>
            <h2>5. Responsabilități</h2>
            <h3>5.1 Responsabilitățile Companiei</h3>
            <ul>
              <li>Asigurarea transportului în condiții de siguranță</li>
              <li>Respectarea programului de călătorie comunicat</li>
              <li>Menținerea vehiculelor în stare tehnică corespunzătoare</li>
              <li>Asigurare pentru pasageri și bunuri conform legislației</li>
            </ul>
            <h3>5.2 Responsabilitățile Clientului</h3>
            <ul>
              <li>Prezentarea la timp la locul de îmbarcare</li>
              <li>Posesia documentelor de călătorie valabile</li>
              <li>Respectarea regulilor de conduită în mijloacele de transport</li>
              <li>Declararea corectă a bagajelor și coletelor</li>
            </ul>
          </section>

          <section>
            <h2>6. Limitări de Răspundere</h2>
            <p>
              Compania nu este responsabilă pentru:
            </p>
            <ul>
              <li>Întârzierea sau anularea călătoriilor din cauze de forță majoră</li>
              <li>Pierderea sau deteriorarea bunurilor personale nedelarate</li>
              <li>Daune indirecte sau consecințiale</li>
              <li>Restricții de călătorie impuse de autoritățile vamale sau de frontieră</li>
            </ul>
          </section>

          <section>
            <h2>7. Protecția Datelor</h2>
            <p>
              Datele personale sunt prelucrate conform Regulamentului GDPR. Pentru detalii,
              consultați <Link href="/politica-confidentialitate">Politica de Confidențialitate</Link>.
            </p>
          </section>

          <section>
            <h2>8. Reclamații</h2>
            <p>
              Clienții au dreptul de a depune reclamații privind serviciile oferite:
            </p>
            <ul>
              <li>Prin email la: adicohai@gmail.com</li>
              <li>Telefonic la numerele de contact afișate pe site</li>
              <li>ANPC SAL: <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer">reclamatiisal.anpc.ro</a></li>
              <li>SOL UE: <a href="https://consumer-redress.ec.europa.eu" target="_blank" rel="noopener noreferrer">consumer-redress.ec.europa.eu</a></li>
            </ul>
          </section>

          <section>
            <h2>9. Modificări ale Termenilor</h2>
            <p>
              ADI TRAVEL&TOURS SRL își rezervă dreptul de a modifica acești termeni și condiții.
              Modificările vor fi publicate pe acest site, iar data ultimei actualizări va fi
              modificată corespunzător.
            </p>
          </section>

          <section>
            <h2>10. Legislație Aplicabilă</h2>
            <p>
              Acești termeni și condiții sunt guvernați de legislația română. Orice dispută va fi
              soluționată de instanțele competente din România.
            </p>
          </section>

          <section>
            <h2>11. Date de Contact</h2>
            <p><strong>ADI TRAVEL&TOURS SRL</strong></p>
            <p>CUI: 52606779</p>
            <p>Nr. înregistrare: J2025074755001</p>
            <p>Email: adicohai@gmail.com</p>
            <p>Telefon România: +40 756 667 263</p>
            <p>Telefon Franța: +33 753 484 575 / +33 753 772 796</p>
          </section>
        </div>
      </div>
    </div>
  )
}
