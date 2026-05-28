'use client'

import { Phone, Mail, MapPin, Users, Star } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      type: "Franța",
      flag: "🇫🇷",
      contacts: [
        { phone: "+33 753 484 575", label: "Principală"},
        { phone: "+33 753 772 796", label: "Alternativă"}
      ]
    },
    {
      type: "România",
      flag: "🇷🇴",
      contacts: [
        { phone: "+40 756 667 263", label: "Adrian"}
      ]
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-intro">
          <h3>
            Contactează-ne <span className="gradient-text">astăzi</span>
          </h3>
          <p>
            Suntem aici să răspundem la toate întrebările tale și să îți oferim cea mai bună
            soluție de transport. Echipa noastră este disponibilă 24/7 pentru urgențe.
          </p>
        </div>

        <div className="contact-hero-card">
          <div className="contact-hero-grid">
            <div className="contact-hero-item">
              <div className="contact-hero-icon whatsapp-icon">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h4>WhatsApp</h4>
              <p className="contact-hero-label">Contactează-ne rapid</p>
              <a href="https://wa.me/33753484575" className="contact-hero-link" target="_blank" rel="noopener noreferrer">+33 753 484 575</a>
              <a href="https://wa.me/40756667263" className="contact-hero-link secondary" target="_blank" rel="noopener noreferrer">+40 756 667 263</a>
            </div>

            <div className="contact-hero-item">
              <div className="contact-hero-icon phone-icon">
                <Phone className="w-8 h-8"/>
              </div>
              <h4>🇫🇷 Franța</h4>
              <p className="contact-hero-label">Telefon / WhatsApp</p>
              <div className="contact-phone-group">
                <a href="tel:+33753484575" className="contact-hero-link">+33 753 484 575</a>
                <span className="contact-name-label">Adrian</span>
              </div>
              <div className="contact-phone-group">
                <a href="tel:+33753772796" className="contact-hero-link secondary">+33 753 772 796</a>
                <span className="contact-name-label">Gabriela</span>
              </div>
            </div>

            <div className="contact-hero-item">
              <div className="contact-hero-icon phone-icon">
                <Phone className="w-8 h-8"/>
              </div>
              <h4>🇷🇴 România</h4>
              <p className="contact-hero-label">Telefon / WhatsApp</p>
              <a href="tel:+40756667263" className="contact-hero-link">+40 756 667 263</a>
              <div className="contact-hero-badge">Adrian</div>
            </div>
          </div>

          <div className="contact-hero-banner">
            <Users className="w-6 h-6"/>
            <span>Răspuns în maximum 24h • Apeluri urgente disponibile 24/7</span>
          </div>
        </div>

        <div className="contact-secondary-grid">
          <div className="contact-card-modern">
            <div className="contact-card-header">
              <div className="contact-card-icon">
                <MapPin className="w-6 h-6"/>
              </div>
              <h4>Zone de serviciu</h4>
            </div>
            <div className="contact-card-content">
              <div className="service-areas-modern">
                <div className="area-item-modern">
                  <div className="area-flag">🇷🇴</div>
                  <div className="area-info">
                    <div className="area-name">România</div>
                    <div className="area-count">9 orașe</div>
                  </div>
                </div>
                <div className="area-item-modern">
                  <div className="area-flag">🇦🇹</div>
                  <div className="area-info">
                    <div className="area-name">Austria</div>
                    <div className="area-count">7 orașe</div>
                  </div>
                </div>
                <div className="area-item-modern">
                  <div className="area-flag">🇩🇪</div>
                  <div className="area-info">
                    <div className="area-name">Germania</div>
                    <div className="area-count">6 orașe</div>
                  </div>
                </div>
                <div className="area-item-modern">
                  <div className="area-flag">🇫🇷</div>
                  <div className="area-info">
                    <div className="area-name">Franța</div>
                    <div className="area-count">12 orașe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card-modern">
            <div className="contact-card-header">
              <div className="contact-card-icon">
                <Star className="w-6 h-6"/>
              </div>
              <h4>De ce ADI Travel?</h4>
            </div>
            <div className="contact-card-content">
              <ul className="why-list-modern">
                <li>Experiență de peste 10 ani în transport internațional</li>
                <li>Flotă modernă și bine întreținută</li>
                <li>Asigurare completă pentru toate serviciile</li>
                <li>Prețuri competitive și transparente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact