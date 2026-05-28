'use client'

// import { useState } from 'react'
import { Phone, Mail, MapPin, Award, Shield } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  // const [showTooltip, setShowTooltip] = useState(false)
  // TODO: maybe reactivate tooltip later

  return (
    <footer className="compact-footer">
      <div className="footer-background">
        <div className="footer-gradient"></div>
        <div className="footer-pattern"></div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-section">
              <Image
                src="/images/Transport & Tours lg tr.png"
                alt="Adi Travel & Tours Logo"
                width={200}
                height={80}
                style={{ height: 'auto', width: 'auto', maxWidth: '200px', marginBottom: '0.5rem'}}
              />
              <h2 className="footer-logo">
                ADI TRAVEL <span className="logo-accent">& TOURS</span>
              </h2>
            </div>
            <p className="footer-description">
              Transport internațional de persoane, colete și mașini pe platformă între România, Austria, Germania și Franța.
            </p>
            <div className="footer-email">
              <Mail className="w-4 h-4"/>
              <a href="mailto:adicohai@gmail.com">adicohai@gmail.com</a>
            </div>
            <div className="footer-anpc-links">
              <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/anpc-sal.png"
                  alt="ANPC SAL - Soluționarea Alternativă a Litigiilor"
                  width={180}
                  height={90}
                  className="anpc-image"
                />
              </a>
              <a href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home2.show&lng=RO" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/anpc-sol.png"
                  alt="ANPC SOL - Soluționarea Online a Litigiilor"
                  width={180}
                  height={90}
                  className="anpc-image"
                />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-flag">🇫🇷</span>
                <div className="contact-info">
                  <span className="contact-label">Franța</span>
                  <a href="tel:+33753484575" className="contact-number">+33 753 484 575</a>
                  <a href="tel:+33753772796" className="contact-number">+33 753 772 796</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-flag">🇷🇴</span>
                <div className="contact-info">
                  <span className="contact-label">România</span>
                  <a href="tel:+40756667263" className="contact-number">+40 756 667 263</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-nav">
            <h3>Date Firmă</h3>
            <div className="footer-company-info-section">
              <div className="company-info-item">
                <span className="company-name-section">ADI TRAVEL&TOURS SRL</span>
              </div>
              <div className="company-info-item">
                <span className="company-label">CUI:</span>
                <span className="company-value">52606779</span>
              </div>
              <div className="company-info-item">
                <span className="company-label">Nr. înreg:</span>
                <span className="company-value">J2025074755001</span>
              </div>
              <div className="footer-legal-links-section">
                <a href="/termeni-conditii">Termeni și Condiții</a>
                <a href="/politica-confidentialitate">Politica de Confidențialitate</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-route-section">
          <div className="route-line-container">
            <div className="route-line-gradient"></div>
          </div>
          <div className="footer-countries-new">
            <div className="country-node-item">
              <div className="country-circle">
                <span className="country-flag-new">🇷🇴</span>
              </div>
              <h4>România</h4>
              <span className="city-count-new">9 orașe</span>
            </div>
            <div className="country-node-item">
              <div className="country-circle">
                <span className="country-flag-new">🇦🇹</span>
              </div>
              <h4>Austria</h4>
              <span className="city-count-new">7 orașe</span>
            </div>
            <div className="country-node-item">
              <div className="country-circle">
                <span className="country-flag-new">🇩🇪</span>
              </div>
              <h4>Germania</h4>
              <span className="city-count-new">6 orașe</span>
            </div>
            <div className="country-node-item">
              <div className="country-circle">
                <span className="country-flag-new">🇫🇷</span>
              </div>
              <h4>Franța</h4>
              <span className="city-count-new">12 orașe</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2025 Blue IT. Toate drepturile rezervate. Powered by <a href="https://blueit.ro" target="_blank" rel="noopener noreferrer" className="blueit-link">blueit.ro</a></p>
          </div>
          <div className="footer-logo-center">
              <a href="https://blueit.ro" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/blueit.png"
                  alt="Blue IT"
                  width={100}
                  height={50}
                  className="blueit-logo"
                />
              </a>
          </div>
          <div className="footer-badges">
            <div className="badge">
              <Award className="w-4 h-4"/>
              <span>Transport Autorizat</span>
            </div>
            <div className="badge">
              <Shield className="w-4 h-4"/>
              <span>Asigurat Complet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer