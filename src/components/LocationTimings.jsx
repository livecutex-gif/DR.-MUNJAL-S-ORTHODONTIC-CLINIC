import React from 'react';
import { Clock, MapPin, Navigation, Phone, ExternalLink, Car, Compass, Building } from 'lucide-react';

export default function LocationTimings({ settings }) {
  const address = settings?.clinic_address || '154-N, Model Town, Opposite Jindal Hospital, Hisar - 125005, Haryana';
  const phone = settings?.phone_number || '+919215666440';
  const morningTimings = settings?.opd_timing_morning || '10:00 AM – 1:30 PM';
  const eveningTimings = settings?.opd_timing_evening || '5:00 PM – 7:30 PM';
  const mapsUrl = settings?.google_maps_url || 'https://maps.app.goo.gl/bFVjxkqsaVNBuqzH6';

  const schedule = [
    { days: 'Monday – Friday', morning: morningTimings, evening: eveningTimings, status: 'Regular OPD' },
    { days: 'Saturday', morning: morningTimings, evening: eveningTimings, status: 'Regular OPD' },
    { days: 'Sunday', morning: '10:30 AM – 1:00 PM', evening: 'By Appointment', status: 'Restricted' },
  ];

  return (
    <section 
      id="location" 
      className="location-section"
      style={{ 
        position: 'relative',
        backgroundColor: '#F8FAFC',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        overflow: 'hidden'
      }}
    >
      <div className="content-wrap" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.75rem auto' }}>
          <div className="badge-pill badge-sky" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            <span>Clinic Timings & Location</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
            Visit Us in Model Town, Hisar
          </h2>

          <p style={{ fontSize: '1.02rem', color: '#64748B', lineHeight: 1.6 }}>
            Centrally located in Model Town, directly opposite Jindal Hospital with designated patient parking and easy accessibility.
          </p>
        </div>

        {/* 1. Primary Clinic Facility & Landmark Showcase Card */}
        <div 
          className="prime-card clinic-facility-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(1.25rem, 2.5vw, 2rem)',
            marginBottom: '2rem',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
          }}
        >
          <div className="facility-grid">
            
            {/* Left: Real Clinic Building Exterior Photo */}
            <div className="facility-image-col">
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 30px -8px rgba(15, 23, 42, 0.14)',
                  backgroundColor: '#E2E8F0',
                  height: '100%',
                  minHeight: '280px'
                }}
              >
                <img 
                  src="/clinic-exterior.jpg" 
                  alt="Dr. Munjal’s Dental Clinic Building Front View Model Town Hisar" 
                  className="facility-exterior-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '280px',
                    maxHeight: '380px',
                    objectFit: 'cover',
                    objectPosition: 'center 22%',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />

                {/* Top Overlay Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#0369A1',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)'
                  }}
                >
                  <Building size={13} style={{ color: '#0284C7' }} />
                  <span>Clinic Entrance</span>
                </div>

                {/* Bottom Overlay Pill: Clinic Exterior Landmark */}
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
                    <MapPin size={14} style={{ color: '#38BDF8' }} />
                    Dr. Munjal’s Dental Clinic
                  </span>
                  <span style={{ color: '#94A3B8', fontSize: '0.72rem' }}>
                    Model Town, Hisar
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Address Details & Landmark Access */}
            <div className="facility-content-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
              <div>
                <div 
                  className="badge-pill badge-sky" 
                  style={{ marginBottom: '0.75rem', display: 'inline-flex', padding: '3px 10px', fontSize: '0.75rem' }}
                >
                  <span>Easy Landmark & Accessibility</span>
                </div>

                <h3 
                  style={{ 
                    fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', 
                    fontWeight: 800, 
                    color: '#0F172A',
                    lineHeight: 1.25,
                    marginBottom: '0.5rem'
                  }}
                >
                  154-N, Model Town, Hisar
                </h3>

                <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {address}
                </p>

                {/* Landmark & Parking Pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.625rem 0.85rem',
                      borderRadius: '12px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.85rem',
                      color: '#334155'
                    }}
                  >
                    <Compass size={17} style={{ color: '#0284C7', flexShrink: 0 }} />
                    <span><strong style={{ color: '#0F172A' }}>Landmark:</strong> Directly opposite Jindal Hospital Main Gate.</span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.625rem 0.85rem',
                      borderRadius: '12px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.85rem',
                      color: '#334155'
                    }}
                  >
                    <Car size={17} style={{ color: '#059669', flexShrink: 0 }} />
                    <span><strong style={{ color: '#0F172A' }}>Parking:</strong> Dedicated patient parking space right in front of the clinic.</span>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary"
                  style={{
                    padding: '0.75rem 1.35rem',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Navigation size={16} />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href={`tel:${phone}`}
                  className="btn-pill btn-secondary"
                  style={{
                    padding: '0.75rem 1.35rem',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Phone size={16} style={{ color: '#0284C7' }} />
                  <span>Call Reception ({phone})</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 2. 2-Column Grid: Left OPD Timings, Right Google Maps */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'stretch' }} className="timing-map-grid">
          
          {/* Left Card: OPD Consultation Timings */}
          <div 
            className="prime-card"
            style={{
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              borderRadius: '24px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#E0F2FE',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    OPD Consultation Schedule
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Token priority for pre-booked appointments</span>
                </div>
              </div>

              {/* Day-by-day table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.5rem' }}>
                {schedule.map((row, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                        {row.days}
                      </span>
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          backgroundColor: row.status === 'Regular OPD' ? '#D1FAE5' : '#FEF3C7',
                          color: row.status === 'Regular OPD' ? '#065F46' : '#92400E'
                        }}
                      >
                        {row.status}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.85rem' }}>
                      <div style={{ color: '#475569' }}>
                        <strong style={{ color: '#0F172A', fontWeight: 600 }}>Morning:</strong> {row.morning}
                      </div>
                      <div style={{ color: '#475569' }}>
                        <strong style={{ color: '#0F172A', fontWeight: 600 }}>Evening:</strong> {row.evening}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom priority note */}
            <div 
              style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '14px',
                padding: '0.85rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16A34A', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: '#166534', fontWeight: 600 }}>
                Patients with online booking get zero-waiting token priority.
              </span>
            </div>

          </div>

          {/* Right Card: Google Maps Container */}
          <div 
            className="prime-card"
            style={{
              borderRadius: '24px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '420px',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
            }}
          >
            {/* Styled Map Container */}
            <div style={{ width: '100%', flex: '1 1 auto', minHeight: '340px', position: 'relative', backgroundColor: '#E2E8F0' }}>
              <iframe
                title="Dr. Munjal's Orthodontic Clinic Location Map Hisar"
                src="https://maps.google.com/maps?q=DR.+MUNJAL%E2%80%99S+ORTHODONTIC+CLINIC+Model+Town+Hisar&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0, filter: 'contrast(1.02) saturate(1.05)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Action Footer */}
            <div 
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', display: 'block', marginBottom: '2px' }}>
                  Dr. Munjal’s Orthodontic & Dental Clinic
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} style={{ color: '#0284C7', flexShrink: 0 }} />
                  154-N, Model Town (Opp. Jindal Hospital), Hisar
                </span>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary"
                style={{
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <Navigation size={15} />
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        /* Background with subtle opacity like the hero section */
        .location-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/clinic-exterior.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.10;
          pointer-events: none;
          z-index: 0;
        }

        .facility-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: center;
        }

        .facility-exterior-img:hover {
          transform: scale(1.02);
        }

        @media (min-width: 900px) {
          .facility-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
            gap: 2.25rem !important;
          }

          .timing-map-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
