import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Plus, Shield } from 'lucide-react';

export default function Navbar({ settings, onBookClick, onNavigateAdmin, lang = 'en', onToggleLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clinicName = settings?.clinic_name || 'Dr. Munjal’s Orthodontic Clinic';
  const phone = settings?.phone_number || '+919215666440';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t?.navServices || 'Services', href: '#services' },
    { name: t?.navAbout || 'About Doctor', href: '#about-doctor' },
    { name: t?.navTimings || 'OPD Timings', href: '#timings' },
    { name: t?.navReviews || 'Patient Reviews', href: '#reviews' },
    { name: t?.navLocation || 'Clinic Location', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        width: '100%', 
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.25s ease'
      }}
    >
      <nav 
        aria-label="Main Navigation"
        className="content-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.85rem',
          paddingBottom: '0.85rem'
        }}
      >
        {/* Left: Clinic Brand / Logo (Exact match with reference) */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', flexShrink: 0 }}
        >
          <div 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '12px', 
              backgroundColor: '#0284C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.28)',
              flexShrink: 0
            }}
          >
            <Plus size={22} strokeWidth={3} />
          </div>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', display: 'block', lineHeight: 1.15 }}>
              Dr. Munjal’s
            </span>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginTop: '1px' }}>
              ORTHODONTIC & DENTAL CLINIC
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links (Visible >= 900px) */}
        <div className="nav-desktop-links" style={{ gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ 
                fontSize: '0.95rem', 
                fontWeight: 600, 
                color: '#475569',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '0.35rem 0'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#0284C7')}
              onMouseLeave={(e) => (e.target.style.color = '#475569')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA: Pill Booking Button (Visible >= 640px, mobile uses sticky bottom bar & menu) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onBookClick}
            className="btn-pill btn-primary sm:flex"
            style={{
              padding: '0.7rem 1.6rem',
              fontSize: '0.92rem',
              gap: '0.55rem',
              alignItems: 'center',
              flexShrink: 0,
              borderRadius: '9999px',
              boxShadow: '0 4px 16px rgba(2, 132, 199, 0.32)'
            }}
          >
            <Calendar size={17} />
            <span>{t?.bookAppointment || 'Book Appointment'}</span>
          </button>

          {/* Mobile Menu Button (Completely Hidden on PC >= 900px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              color: '#475569',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              flexShrink: 0
            }}
            className="nav-mobile-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1150px',
            margin: '0.5rem auto 0 auto',
            borderRadius: '24px',
            padding: '1.25rem',
            boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#1E293B',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '0.25rem 0' }} />

          <button
            onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
            className="btn-pill btn-primary"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '0.9rem',
              gap: '0.5rem',
              justifyContent: 'center'
            }}
          >
            <Calendar size={16} />
            <span>{t?.bookOpdNow || 'Book OPD Slot Now'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
