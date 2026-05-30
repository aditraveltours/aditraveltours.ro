import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import './logo-styles.css'
import StructuredData from '@/components/StructuredData'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export const metadata: Metadata = {
  metadataBase: new URL('https://aditraveltours.ro'),
  title: 'Adi Travel & Tours SRL - Transport International România - Austria - Germania - Franța',
  description: 'Transport international persoane, colete și mașini pe platformă între România, Austria, Germania și Franța. Plecări regulate Vaslui, Bacău, Brașov către Viena, München, Bordeaux. Prețuri avantajoase, microbuze Mercedes.',
  keywords: [
    'transport international romania',
    'transport persoane romania austria',
    'transport colete romania germania',
    'transport masini pe platforma',
    'transport romania franta',
    'microbuz romania austria',
    'transport vaslui austria',
    'transport bacau germania',
    'transport brasov franta',
    'curse internationale romania',
    'transport persoane viena',
    'transport persoane munchen',
    'transport persoane bordeaux',
    'adi travel tours',
    'transport colete europa',
    'expedieri internationale',
    'transport auto romania austria',
    'curse regulate romania europa'
  ],
  authors: [{ name: 'Adi Travel & Tours SRL' }],
  creator: 'Adi Travel & Tours SRL',
  publisher: 'Adi Travel & Tours SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Transport & Logistics',
  classification: 'Transport International',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aditraveltours.ro',
    languages: {
      'ro-RO': 'https://aditraveltours.ro',
    },
  },
  verification: {
    google: 'c3897d55cfd90bfa',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Adi Travel & Tours SRL - Transport International România - Austria - Germania - Franța',
    description: 'Transport international persoane, colete și mașini pe platformă. Plecări regulate: Vaslui, Bacău, Brașov → Viena, München, Bordeaux. Microbuze Mercedes, prețuri avantajoase.',
    url: 'https://aditraveltours.ro',
    siteName: 'Adi Travel & Tours SRL',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Adi Travel & Tours SRL - Logo Transport International',
      },
    ],
    emails: ['adicohai@gmail.com'],
    phoneNumbers: ['+40756667263', '+33753484575'],
    countryName: 'România',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adi Travel & Tours SRL - Transport International',
    description: 'Transport persoane, colete & mașini România ↔ Austria, Germania, Franța. Plecări regulate, microbuze Mercedes, prețuri avantajoase.',
    images: ['/icon-512.png'],
    creator: '@aditraveltours',
    site: '@aditraveltours',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17793739082"
          strategy="afterInteractive"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17793739082');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden'}}
          />
        </noscript>

        <StructuredData />
        {children}
      </body>
    </html>
  )
}
