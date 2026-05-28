import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adi Travel & Tours SRL",
    "alternateName": "ADI Travel Tours",
    "url": "https://aditraveltours.ro",
    "logo": "https://aditraveltours.ro/icon-512.png",
    "image": "https://aditraveltours.ro/icon-512.png",
    "description": "Companie de transport internațional specializată în transport persoane, colete și mașini pe platformă între România, Austria, Germania și Franța.",
    "email": "adicohai@gmail.com",
    "telephone": [
      "+40-756-667-263",
      "+33-753-484-575",
      "+33-753-772-796"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RO",
      "addressLocality": "România"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+40-756-667-263",
        "contactType": "customer service",
        "areaServed": "RO",
        "availableLanguage": ["Romanian", "French"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+33-753-484-575",
        "contactType": "customer service",
        "areaServed": ["FR", "AT", "DE"],
        "availableLanguage": ["French", "Romanian"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/aditraveltours",
      "https://www.instagram.com/aditraveltours"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aditraveltours.ro/#business",
    "name": "Adi Travel & Tours SRL",
    "image": "https://aditraveltours.ro/icon-512.png",
    "url": "https://aditraveltours.ro",
    "telephone": "+40-756-667-263",
    "email": "adicohai@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RO",
      "addressLocality": "România"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.6333",
      "longitude": "27.7333"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const transportPersoaneSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transport International Persoane",
    "provider": {
      "@type": "Organization",
      "name": "Adi Travel & Tours SRL",
      "url": "https://aditraveltours.ro"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "România"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Germania"
      },
      {
        "@type": "Country",
        "name": "Franța"
      }
    ],
    "description": "Transport international de persoane cu microbuze Mercedes-Benz moderne între România (Vaslui, Bacău, Brașov, Sibiu, Arad) și Austria (Viena, Salzburg, Linz), Germania (München, Stuttgart) și Franța (Bordeaux, Limoges, Mulhouse).",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  }

  const transportColeteSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transport International Colete",
    "provider": {
      "@type": "Organization",
      "name": "Adi Travel & Tours SRL",
      "url": "https://aditraveltours.ro"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "România"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Germania"
      },
      {
        "@type": "Country",
        "name": "Franța"
      }
    ],
    "description": "Livrare rapidă și sigură de colete și pachete către destinații europene cu tracking în timp real și livrare la domiciliu.",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  }

  const transportMasiniSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transport Mașini pe Platformă",
    "provider": {
      "@type": "Organization",
      "name": "Adi Travel & Tours SRL",
      "url": "https://aditraveltours.ro"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "România"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Germania"
      },
      {
        "@type": "Country",
        "name": "Franța"
      }
    ],
    "description": "Transport specializat pentru vehicule pe platforme dedicate cu fixare profesională și protecție completă.",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Acasă",
        "item": "https://aditraveltours.ro"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicii",
        "item": "https://aditraveltours.ro#servicii"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://aditraveltours.ro#contact"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ce servicii de transport oferă ADI Travel & Tours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferim transport international de persoane cu microbuze Mercedes-Benz, transport colete cu livrare la domiciliu și transport mașini pe platformă între România, Austria, Germania și Franța. Avem plecări regulate din Vaslui, Bacău, Brașov, Sibiu și Arad."
        }
      },
      {
        "@type": "Question",
        "name": "Care sunt destinațiile pe care le deserviți?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deserim 34+ orașe în 4 țări: România (9 orașe: Vaslui, Bacău, Onești, Brașov, Făgăraș, Sibiu, Deva, Arad, Nădlac), Austria (7 orașe: Viena, Salzburg, Linz, Sankt-Pölten, Melk, Pandorf, Nickelsdorf), Germania (6 orașe: München, Augsburg, Ulm, Stuttgart, Karlsruhe, Freiburg) și Franța (12 orașe: Bordeaux, Limoges, Angoulême, Montluçon, Mulhouse, Belfort și altele)."
        }
      },
      {
        "@type": "Question",
        "name": "Cât costă transportul de persoane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prețurile variază în funcție de destinație și distanță. Pentru oferte personalizate, contactați-ne la +40 756 667 263 (România) sau +33 753 484 575 (Franța). Oferim prețuri avantajoase și transparente."
        }
      },
      {
        "@type": "Question",
        "name": "Cât durează transportul de la România în Franța?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Durata variază în funcție de destinație: până în Austria (Viena) aproximativ 12-14 ore, până în Germania (München) 16-18 ore, până în Franța (Bordeaux) 24-28 ore. Facem opriri regulate pentru odihnă și confort."
        }
      },
      {
        "@type": "Question",
        "name": "Ce tip de microbuze utilizați?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Folosim exclusiv microbuze Mercedes-Benz Sprinter moderne (8+1 locuri) dotate cu aer condiționat, scaune ergonomice, climatizare performantă, sistem audio modern, spațiu generos pentru bagaje și toate dotările pentru călătorii confortabile și sigure."
        }
      },
      {
        "@type": "Question",
        "name": "Cum pot trimite colete în Europa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pentru transport colete, contactați-ne la adicohai@gmail.com sau +40 756 667 263. Oferim ambalare profesională și livrare la domiciliu în Austria, Germania și Franța. Coletele sunt asigurate și pot fi urmărite."
        }
      },
      {
        "@type": "Question",
        "name": "Transportați și mașini?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, oferim transport specializat pentru vehicule pe platforme dedicate. Mașinile sunt fixate profesional, protejate complet și inspectate la plecare și sosire. Contactați-ne pentru detalii și tarife."
        }
      },
      {
        "@type": "Question",
        "name": "Care este programul de lucru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luni-Vineri: 08:00-20:00, Sâmbătă: 09:00-18:00, Duminică: 10:00-16:00. Pentru urgențe suntem disponibili 24/7 telefonic."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="transport-persoane-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transportPersoaneSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="transport-colete-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transportColeteSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="transport-masini-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transportMasiniSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
    </>
  )
}
