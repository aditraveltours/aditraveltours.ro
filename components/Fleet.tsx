'use client'

import { Car, Users, Shield, Gauge, Wind, MapPin } from 'lucide-react'
import Image from 'next/image'

const Fleet = () => {
  const vehicleImages = [
    "/images/micro3.png",
    "/images/micro2.jpg"
  ]

  const features = [
    "Aer condiționat",
    "Scaune ergonomice",
    "Spațiu bagaje generos",
    "Sistem audio modern",
    "Climatizare performantă",
    "Suspensie confortabilă",
    "Iluminare LED",
    "Geamuri securizate"
  ]

  return (
    <section id="flota" className="section fleet-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Microbuze Transport Internațional <span className="gradient-text">România – Europa</span>
          </h2>
          <p className="section-subtitle">
            Microbuz Mercedes-Benz Sprinter pentru transport persoane România Austria, Germania și Franța – confort premium pe curse lungi internaționale
          </p>
        </div>

        <div className="fleet-showcase">
          <div className="fleet-images-gallery">
            {vehicleImages.map((image, index) => (
              <div key={index} className="fleet-gallery-item">
                <Image
                  src={image}
                  alt={index === 0 ? "Microbuz Mercedes-Benz Sprinter transport persoane România Austria Germania Franța – ADI Travel Tours" : "Microbuz transport internațional persoane și colete România Europa – ADI Travel & Tours SRL"}
                  width={600}
                  height={400}
                  className="fleet-image"
                  style={{ objectFit: 'cover'}}
                />
                <div className="fleet-badge">
                  <Car className="w-5 h-5"/>
                  <span>Mercedes-Benz</span>
                </div>
              </div>
            ))}
          </div>

          <div className="fleet-info-card">
            <h3>Mercedes-Benz Sprinter</h3>

            <div className="fleet-capacity">
              <Users className="w-5 h-5"/>
              <span>8+1 locuri</span>
            </div>

            <h4 className="features-title">Dotări și Caracteristici:</h4>
            <ul className="fleet-features">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <div className="feature-check">✓</div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fleet-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <Shield className="w-8 h-8"/>
            </div>
            <h4>Siguranță Maximă</h4>
            <p>Toate vehiculele sunt echipate cu sisteme de siguranță moderne și sunt verificate regulat</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <Gauge className="w-8 h-8"/>
            </div>
            <h4>Performanță</h4>
            <p>Motorizări Euro 6 pentru eficiență maximă și confort pe drumurile lungi</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <Wind className="w-8 h-8"/>
            </div>
            <h4>Confort Premium</h4>
            <p>Climatizare, scaune confortabile și mult spațiu pentru bagaje</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <MapPin className="w-8 h-8"/>
            </div>
            <h4>Întreținere Regulată</h4>
            <p>Service complet la intervale regulate pentru fiabilitate maximă</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet
