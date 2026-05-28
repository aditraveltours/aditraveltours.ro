'use client'

import { Shield, Clock, Star, Users, MapPin, Award } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8"/>,
      title: "Siguranță Garantată",
      description: "Transport sigur și asigurat pentru toate serviciile noastre"
    },
    {
      icon: <Clock className="w-8 h-8"/>,
      title: "Punctualitate",
      description: "Respectăm programul și ajungem întotdeauna la timp"
    },
    {
      icon: <Star className="w-8 h-8"/>,
      title: "Experiență",
      description: "Ani de experiență în transportul internațional"
    },
    {
      icon: <Users className="w-8 h-8"/>,
      title: "Echipă Profesională",
      description: "Șoferi experimentați și personal calificat"
    },
    {
      icon: <MapPin className="w-8 h-8"/>,
      title: "Rețea Extinsă",
      description: "Acoperim multiple orașe din 4 țări europene"
    },
    {
      icon: <Award className="w-8 h-8"/>,
      title: "Calitate Premium",
      description: "Servicii de înaltă calitate la prețuri competitive"
    }
  ]

  const stats = [
    { number: "1000+", label: "Clienți Mulțumiți"},
    { number: "50+", label: "Orașe Acoperite"},
    { number: "4", label: "Țări Deservite"},
    { number: "24/7", label: "Suport Clienți"}
  ]

  return (
    <section id="despre" className="section">
      <div className="container">
        <h2 className="section-title">Companie Transport Internațional România – Europa</h2>

        <div className="about-grid">
          <div className="about-content">
            <h3>
              Experții tăi în <span className="gradient-text">transport persoane și colete România Austria Germania Franța</span>
            </h3>
            <p>
              ADI Travel & Tours SRL este o companie de transport internațional specializată în
              transport persoane România Austria, transport persoane România Germania și transport
              colete România Franța. Conectăm orașe din România cu principalele destinații din
              Europa de Vest prin microbuze moderne Mercedes-Benz.
            </p>
            <p>
              Oferim curse regulate microbuz România Austria, microbuz România Germania și
              microbuz România Franța, cu plecări din Vaslui, Bacău, Brașov, Sibiu, Arad și
              alte orașe. Transportăm persoane, colete și mașini pe platformă în siguranță
              deplină, cu șoferi profesioniști autorizați.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlight floating">
            <h4>De ce să alegi transport internațional cu ADI Travel?</h4>
            <ul>
              <li>Curse regulate săptămânale România – Austria – Germania – Franța</li>
              <li>Prețuri avantajoase transport persoane și colete</li>
              <li>Microbuze Mercedes-Benz moderne și confortabile</li>
              <li>Asigurare completă transport persoane și colete internațional</li>
              <li>Suport clienți 24/7 în română și franceză</li>
              <li>Transport autorizat și licențiat internațional</li>
            </ul>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About