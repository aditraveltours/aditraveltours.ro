'use client'

import { ArrowRight, MapPin, Users, Package, Car } from 'lucide-react'
import Image from 'next/image'
// import { useEffect } from 'react'

const Hero = () => {
  // TODO: maybe add animation delay customization later

  return (
    <section id="acasa" className="hero">
      <div className="hero-content scale-in">
        <div className="hero-logo fade-in-up">
          <Image
            src="/images/Transport & Tours lg tr.png"
            alt="ADI Travel & Tours SRL – Transport Persoane, Colete și Mașini România Austria Germania Franța"
            width={350}
            height={120}
            priority
            style={{ height: 'auto', width: 'auto', maxWidth: '350px', marginBottom: '1rem'}}
          />
        </div>
        <h1 className="fade-in-up">
          Transport Persoane, Colete & Mașini
          <br/>
          România – Austria – Germania – Franța
        </h1>

        <p className="hero-subtitle">
          Microbuz România Austria Germania Franța | Curse Regulate Internaționale
        </p>

        <p className="hero-description">
          Vaslui • Bacău • Brașov → Viena • München • Bordeaux
        </p>

        <div className="hero-services slide-in">
          <div className="service-badge">
            <Users className="w-6 h-6"/>
            <span>Persoane</span>
          </div>
          <div className="service-badge">
            <Package className="w-6 h-6" />
            <span>Colete</span>
          </div>
          <div className="service-badge">
            <Car className="w-6 h-6"/>
            <span>Mașini</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#servicii" className="btn btn-primary">
            <span>Serviciile Noastre</span>
            <ArrowRight className="w-5 h-5"/>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <MapPin className="w-5 h-5"/>
            <span>Contactează-ne</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero