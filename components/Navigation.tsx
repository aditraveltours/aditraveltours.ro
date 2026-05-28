'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // navigation menu items
  const navItems = [
    { href: '#acasa', label: 'Acasă' },
    { href: '#despre', label: 'Despre Noi'},
    { href: '#servicii', label: 'Servicii' },
    { href: '#contact', label: 'Contact'}
  ]

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="nav-logo">
          <Image
            src="/images/Transport & Tours lg tr.png"
            alt="Adi Travel & Tours Logo"
            width={500}
            height={180}
            priority
            style={{ height: 'auto', width: 'auto', maxHeight: '120px', marginRight: '15px'}}
          />
          <span className="nav-logo-text">ADI TRAVEL & TOURS</span>
        </div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle"
        >
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation