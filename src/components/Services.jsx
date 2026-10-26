import React from 'react';
import { 
  Sparkles, 
  Baby, 
  ShieldCheck, 
  Smile, 
  CheckCircle2, 
  Award,
  ArrowRight, 
  Clock, 
  IndianRupee,
  Stethoscope,
  Activity,
  Calendar
} from 'lucide-react';

export const CLINIC_SERVICES = [
  {
    id: 'metal-ceramic-braces',
    title: 'Metal & Ceramic Braces',
    category: 'Orthodontics',
    description: 'Advanced self-ligating and tooth-colored ceramic braces for correcting crowding, gaps, overlapping teeth, and bite alignment.',
    fee: '400',
    duration: '30 mins',
    icon: Smile,
    popular: true
  },
  {
    id: 'invisible-aligners',
    title: 'Invisible Clear Aligners',
    category: 'Discreet Smile Design',
    description: 'Custom 3D-planned transparent dental aligners. Wire-free, removable, comfortable, and virtually invisible smile correction.',
    fee: '400',
    duration: '30 mins',
    icon: Sparkles,
    popular: true
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover & Teeth Whitening',
    category: 'Cosmetic Dentistry',
    description: 'Laser teeth whitening, composite veneering, aesthetic diastema gap closure, and personalized smile makeover sculpting.',
    fee: '800',
    duration: '30 mins',
    icon: Award,
    popular: false
  },
  {
    id: 'root-canal',
    title: 'Painless Root Canal (RCT)',
    category: 'Endodontics',
    description: 'Single-sitting rotary root canal treatment with electronic apex locator precision, followed by high-strength zirconia crown capping.',
    fee: '1500',
    duration: '40 mins',
    icon: ShieldCheck,
    popular: false
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Fixed Teeth',
    category: 'Restorative Dentistry',
    description: 'Permanent tooth replacement using biocompatible titanium implants, fixed porcelain bridges, and comprehensive oral rehabilitation.',
    fee: '500',
    duration: '30 mins',
    icon: CheckCircle2,
    popular: false
  },
  {
    id: 'kids-orthodontics',
    title: 'Kids Orthodontics & Preventive Care',
    category: 'Pediatric Dentistry',
    description: 'Early interceptive jaw expansion, thumb-sucking habit breakers, space maintainers, fluoride therapy, and preventive child dental care.',
    fee: '350',
    duration: '25 mins',
    icon: Baby,
    popular: false
  }
];

export default function Services({ onSelectService }) {
  return (
    <section 
      id="services" 
      className="services-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        position: 'relative'
      }}
    >
      <div className="content-wrap" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
          <div 
            className="badge-pill badge-sky"
            style={{ marginBottom: '1rem', display: 'inline-flex' }}
          >
            <span>Orthodontic & Dental Specializations</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', 
              fontWeight: 800, 
              color: '#0F172A',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}
          >
            Expert Smile Correction & Advanced Dental Solutions
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
            Every smile transformation is guided by certified orthodontic expertise, digital 3D intraoral planning, and painless modern clinical techniques.
          </p>
        </div>

        {/* Featured Clinical Operatory & Technology Showcase Banner */}
        <div 
          className="prime-card operatory-showcase-card"
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '28px',
            padding: 'clamp(1.25rem, 3vw, 2.25rem)',
            marginBottom: '3rem',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
          }}
        >
          <div className="operatory-grid">
            
            {/* Left: Real Clinic Interior Photo */}
            <div className="operatory-image-container">
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 30px -8px rgba(15, 23, 42, 0.15)',
                  backgroundColor: '#E2E8F0'
                }}
              >
                <img 
                  src="/clinic-interior.jpg" 
                  alt="Dr. Munjal's Orthodontic Clinic Modern Dental Operatory Setup Model Town Hisar" 
                  className="operatory-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '340px',
                    maxHeight: '420px',
                    objectFit: 'cover',
                    objectPosition: 'center 40%',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />

                {/* Top Badge: Certified Clinic */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#0369A1',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)'
                  }}
                >
                  <Sparkles size={13} style={{ color: '#0284C7' }} />
                  <span>100% Sterile Setup</span>
                </div>

                {/* Bottom Overlay Pill: Operatory Info */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '4px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Activity size={14} style={{ color: '#38BDF8' }} />
                    Modern Dental Operatory
                  </span>
                  <span style={{ color: '#94A3B8', fontSize: '0.72rem' }}>
                    Model Town, Hisar
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Infrastructure & Clinical Care Details */}
            <div className="operatory-content">
              <div 
                className="badge-pill badge-sky" 
                style={{ marginBottom: '0.75rem', display: 'inline-flex', padding: '3px 10px', fontSize: '0.75rem' }}
              >
                <span>State-of-the-Art Clinical Infrastructure</span>
              </div>

              <h3 
                style={{ 
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', 
                  fontWeight: 800, 
                  color: '#0F172A',
                  lineHeight: 1.25,
                  marginBottom: '0.75rem'
                }}
              >
                Modern Dental Operatory & Painless Patient Care
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Equipped with fully automated ergonomic dental chairs, digital diagnostic units, and hospital-grade sterilization to ensure gentle, comfortable, and infection-free treatments for all age groups.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.85rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ color: '#0284C7', backgroundColor: '#E0F2FE', padding: '6px', borderRadius: '10px' }}>
                    <Stethoscope size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      Ergonomic Patient Chair
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0 0', lineHeight: 1.4 }}>
                      Relaxed positioning with smooth motorized control
                    </p>
                  </div>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ color: '#059669', backgroundColor: '#D1FAE5', padding: '6px', borderRadius: '10px' }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      Class-B Autoclave
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0 0', lineHeight: 1.4 }}>
                      100% sterile instruments sealed per patient
                    </p>
                  </div>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ color: '#7C3AED', backgroundColor: '#EDE9FE', padding: '6px', borderRadius: '10px' }}>
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      Digital Diagnostics
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0 0', lineHeight: 1.4 }}>
                      Precise alignment & rotary apex treatment
                    </p>
                  </div>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ color: '#D97706', backgroundColor: '#FEF3C7', padding: '6px', borderRadius: '10px' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      MDS Specialist Care
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0 0', lineHeight: 1.4 }}>
                      Every case personally treated by Dr. Puneet Munjal
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectService('Orthodontic Consultation')}
                  className="btn-pill btn-primary"
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Calendar size={16} />
                  <span>Schedule Consultation in Operatory</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Specialized Procedures Heading */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 800, 
              color: '#0F172A',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>Specialized Clinical Procedures & Transparent Fees</span>
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '4px 0 0 0' }}>
            Select any treatment below to reserve your priority OPD consultation slot.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid-3">
          {CLINIC_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="prime-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s'
                }}
                onClick={() => onSelectService(service.title)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#7DD3FC';
                  e.currentTarget.style.boxShadow = '0 16px 35px -8px rgba(2, 132, 199, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = 'var(--shadow-diffused)';
                }}
              >
                {service.popular && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      backgroundColor: '#E0F2FE',
                      color: '#0369A1',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      border: '1px solid #BAE6FD'
                    }}
                  >
                    High Demand
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#F0F9FF',
                      color: '#0284C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>

                  {/* Title & Description */}
                  <h3 
                    style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 700, 
                      color: '#0F172A',
                      marginBottom: '0.625rem',
                      lineHeight: 1.3
                    }}
                  >
                    {service.title}
                  </h3>

                  <p 
                    style={{ 
                      fontSize: '0.92rem', 
                      color: '#64748B', 
                      lineHeight: 1.55,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Footer Tag & CTA */}
                <div>
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid #F1F5F9'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.82rem', 
                        fontWeight: 700, 
                        color: '#0F172A', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '2px',
                        backgroundColor: '#F8FAFC',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0'
                      }}
                    >
                      <IndianRupee size={12} />
                      {service.fee}
                    </span>

                    <span 
                      style={{ 
                        fontSize: '0.8rem', 
                        color: '#64748B', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px' 
                      }}
                    >
                      <Clock size={13} style={{ color: '#94A3B8' }} />
                      {service.duration}
                    </span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#0284C7',
                      transition: 'gap 0.2s'
                    }}
                  >
                    <span>Book for this</span>
                    <ArrowRight size={15} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .operatory-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        .operatory-img:hover {
          transform: scale(1.02);
        }

        @media (min-width: 900px) {
          .operatory-grid {
            grid-template-columns: 0.88fr 1.12fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
