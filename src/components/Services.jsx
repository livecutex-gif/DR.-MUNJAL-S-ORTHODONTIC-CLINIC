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
  IndianRupee 
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
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0'
      }}
    >
      <div className="content-wrap">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
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
    </section>
  );
}
