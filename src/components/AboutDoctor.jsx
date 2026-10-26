import React from 'react';
import { Award, CheckCircle2, ShieldCheck, HeartPulse, GraduationCap, Building2 } from 'lucide-react';

export default function AboutDoctor({ settings }) {
  const doctorName = settings?.doctor_name || 'Dr. Puneet Munjal';
  const doctorDegree = settings?.doctor_degree || 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)';
  const doctorReg = settings?.doctor_reg_no || 'HN-D-3841';

  const highlights = [
    {
      icon: GraduationCap,
      title: 'MDS in Orthodontics & Dentofacial Orthopedics',
      desc: 'Specialized postgraduate training in correcting complex teeth irregularities, jaw deformities, and facial aesthetics.'
    },
    {
      icon: Award,
      title: '15+ Years Clinical Excellence',
      desc: 'Transformed over 5,000+ smiles across Hisar, Haryana with advanced fixed braces and modern transparent aligners.'
    },
    {
      icon: ShieldCheck,
      title: 'Hospital-Grade Sterilization Protocols',
      desc: 'Class-B vacuum autoclaving, individual sealed dental pouches, and sanitized operatory following strict IDA guidelines.'
    },
    {
      icon: HeartPulse,
      title: 'Digital 3D Smile Simulation',
      desc: 'Predictable results before starting treatment with computer-guided orthodontic planning and painless clinical procedures.'
    }
  ];

  return (
    <section 
      id="about-doctor" 
      style={{ 
        backgroundColor: '#FFFFFF', 
        borderTop: '1px solid #E2E8F0', 
        borderBottom: '1px solid #E2E8F0',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0'
      }}
    >
      <div className="content-wrap">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="about-grid">
          
          {/* Left: Doctor Credentials & Story */}
          <div>
            <h2 style={{ fontSize: 'clamp(2.1rem, 3.6vw, 2.85rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.18, marginBottom: '0.45rem' }}>
              {doctorName}
            </h2>

            <div style={{ fontSize: '1.2rem', color: '#0284C7', fontWeight: 700, marginBottom: '0.65rem' }}>
              Senior Orthodontist & Smile Specialist
            </div>

            <p style={{ fontSize: '0.98rem', color: '#64748B', fontWeight: 600, marginBottom: '1.25rem' }}>
              {doctorDegree} &bull; Reg. #{doctorReg}
            </p>

            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              "A confident smile changes everything. At Dr. Munjal’s Orthodontic Clinic in Model Town, Hisar, our mission is to deliver world-class orthodontic and dental care in a comfortable, gentle environment. Every patient receives a tailored treatment roadmap with genuine transparent guidance and zero waiting-room stress."
            </p>

            {/* Registration Verification Strip */}
            <div 
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>
                  State Dental Council Registered
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  Verified License #{doctorReg} &bull; Senior Orthodontic Practice
                </div>
              </div>
            </div>

          </div>

          {/* Right: 4 Pillar Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="prime-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '20px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FFFFFF',
                      color: '#0284C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      boxShadow: '0 4px 12px rgba(2, 132, 199, 0.08)'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
