'use client'

import { useState, useEffect } from 'react'
import { Cookie, X, Shield } from 'lucide-react'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-banner">
        <button
          onClick={rejectCookies}
          className="cookie-close"
          aria-label="Close"
        >
          <X className="w-5 h-5"/>
        </button>

        <div className="cookie-icon">
          <Cookie className="w-10 h-10"/>
        </div>

        <div className="cookie-content">
          <h3>🍪 Utilizăm Cookie-uri</h3>
          <p>
            Folosim cookie-uri pentru a îmbunătăți experiența ta pe site-ul nostru,
            a analiza traficul și a personaliza conținutul. Cookie-urile ne ajută
            să oferim servicii mai bune pentru călătoriile tale.
          </p>
          <div className="cookie-details">
            <Shield className="w-4 h-4"/>
            <span>Datele tale sunt protejate conform GDPR</span>
          </div>
        </div>

        <div className="cookie-actions">
          <button onClick={acceptCookies} className="cookie-btn cookie-accept">
            Acceptă toate
          </button>
          <button onClick={rejectCookies} className="cookie-btn cookie-reject">
            Doar necesare
          </button>
        </div>

        <div className="cookie-links">
          <a href="/termeni-conditii">Termeni și Condiții</a>
          <span>•</span>
          <a href="/politica-confidentialitate">Politica de Confidențialitate</a>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
