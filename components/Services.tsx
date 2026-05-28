'use client'

import { Users, Package, Car, MapPin, Clock, Shield, ArrowRight } from 'lucide-react'
// import { useState } from 'react'

const Services = () => {
  // TODO: add filtering by destination later?

  const services = [
    {
      icon: <Users className="w-12 h-12"/>,
      title: "Transport Persoane România Austria Germania Franța",
      description: "Curse regulate microbuz România Austria, România Germania și România Franța. Transport persoane Vaslui, Bacău, Brașov către Viena, München, Bordeaux cu microbuze Mercedes-Benz.",
      features: [
        "Microbuz România Austria – plecări regulate săptămânale",
        "Transport persoane România Germania (München, Stuttgart, Freiburg)",
        "Curse România Franța (Bordeaux, Limoges, Angoulême)",
        "Scaune confortabile și aer condiționat",
        "Șoferi profesioniști autorizați transport internațional",
        "Opriri regulate pentru odihnă pe traseu",
        "Asigurare completă pentru toți pasagerii"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Package className="w-12 h-12"/>,
      title: "Transport Colete România Europa",
      description: "Transport colete România Germania, România Austria și România Franța. Expedieri internaționale rapide și sigure cu livrare la domiciliu.",
      features: [
        "Transport colete România Germania – livrare rapidă",
        "Expedieri colete România Austria și România Franța",
        "Ambalare profesională pentru colete fragile",
        "Livrare la domiciliu în toate orașele deservite",
        "Tracking și confirmare livrare",
        "Asigurare colete pe tot traseul"
      ],
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <Car className="w-12 h-12"/>,
      title: "Transport Mașini pe Platformă România – Europa",
      description: "Transport auto pe platformă România Austria, România Germania și România Franța. Vehicule transportate în siguranță deplină pe platforme dedicate.",
      features: [
        "Transport mașini pe platformă România Austria",
        "Transport auto România Germania și Franța",
        "Platforme moderne certificate pentru transport vehicule",
        "Fixare profesională și protecție completă",
        "Inspecție video la plecare și la sosire",
        "Asigurare transport auto internațional inclusă"
      ],
      gradient: "from-purple-500 to-purple-700"
    }
  ]

  const destinations = [
    {
      country: "România",
      flag: "🇷🇴",
      cities: ["Vaslui", "Bacău", "Onești", "Brașov", "Făgăraș", "Sibiu", "Deva", "Arad", "Nădlac"]
    },
    {
      country: "Austria",
      flag: "🇦🇹",
      cities: ["Nickelsdorf", "Pandorf", "Viena", "Sankt-Pölten", "Melk", "Linz", "Salzburg"]
    },
    {
      country: "Germania",
      flag: "🇩🇪",
      cities: ["München", "Augsburg", "Ulm", "Stuttgart", "Karlsruhe", "Freiburg"]
    },
    {
      country: "Franța",
      flag: "🇫🇷",
      cities: ["Mulhouse", "Belfort", "Montbéliard", "Besançon", "Dole", "Chalon-sur-Saône", "Moulins", "Montluçon", "Guéret", "Limoges", "Angoulême", "Bordeaux"]
    }
  ]

  return (
    <section id="servicii" className="section">
      <div className="container">
        <h2 className="section-title">Transport Internațional Persoane, Colete și Mașini pe Platformă</h2>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className={`service-icon ${index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}`}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Destinations Section */}
        <div className="destinations-section">
          <h3>
            Rute Transport Internațional <span className="gradient-text">România – Europa</span>
          </h3>
          <p>
            Curse regulate microbuz România Austria, Germania și Franța – 34+ orașe conectate direct. Transport persoane Vaslui, Bacău, Brașov, Sibiu, Arad și alte orașe românești.
          </p>
          {/* Route Map Visual */}
          <div className="route-map">
            <div className="route-line"></div>
            <div className="route-countries">
              {destinations.map((dest, index) => (
                <div key={index} className={`route-country route-${index + 1}`}>
                  <div className="country-node">
                    <div className="node-pulse"></div>
                    <div className="country-flag-large">{dest.flag}</div>
                  </div>
                  <div className="country-info">
                    <h4>{dest.country}</h4>
                    <div className="city-counter">
                      <span className="city-count">{dest.cities.length}</span>
                      <span className="city-label">orașe</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Country Cards */}
          <div className="destinations-interactive">
            {destinations.map((dest, index) => (
              <div key={index} className={`destination-card-modern card-${index + 1}`}>
                <div className="card-header">
                  <div className="country-flag-circle">{dest.flag}</div>
                  <div className="country-details">
                    <h4>{dest.country}</h4>
                    <div className="route-info">
                      <span className="route-distance">
                        {index === 0 ? 'Plecare' : index === 1 ? '~850km' : index === 2 ? '~1200km' : '~1500km'}
                      </span>
                    </div>
                  </div>
                  <div className="cities-badge">
                    <span>{dest.cities.length}</span>
                  </div>
                </div>

                <div className="progress-bar">
                  <div className={`progress-fill progress-${index + 1}`}></div>
                  <span className="progress-label">Acoperire completă</span>
                </div>

                <div className="cities-grid">
                  {dest.cities.map((city, idx) => (
                    <div key={idx} className="city-tag">
                      <MapPin className="w-3 h-3"/>
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h3>Rezervă transport persoane sau colete România – Europa</h3>
          <p>Contactează-ne pentru o ofertă personalizată – microbuz România Austria, Germania sau Franța</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>Solicită Ofertă</span>
              <ArrowRight className="w-5 h-5"/>
            </a>
            <div className="cta-info">
              <Clock className="w-5 h-5"/>
              <span>Răspuns în 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services