import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function Hero({ settings, onBookClick, t }) {
  const doctorName = settings?.doctor_name || 'Dr. Puneet Munjal';
  const doctorDegree = settings?.doctor_degree || 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)';
  const phone = settings?.phone_number || '+919215666440';

  return (
    <section className="hero-section hero-ambient-wrapper" style={{ position: 'relative' }}>
      <div className="content-wrap">
        <div className="hero-grid">
          
          {/* Hero Visual Column - First on mobile (order: 1), Right on desktop (order: 2) */}
          <div className="hero-doctor-col">
            <div className="hero-visual-card">
              <img 
                src="/hero-bg.jpg" 
                alt="Dr. Munjal’s Orthodontic Clinic"
                className="hero-main-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Text & CTAs Column - Second on mobile (order: 2), Left on desktop (order: 1) */}
          <div className="hero-text-col">
            
            {/* Main Headline */}
            <h1 className="hero-headline">
              {t?.heroHeadline1 || 'Crafting Confident Smiles,'} <br />
              <span className="hero-headline-accent">
                {t?.heroHeadline2 || 'With Advanced Orthodontics.'}
              </span>
            </h1>

            {/* Clean Subheadline with Doctor Intro */}
            <p className="hero-subheadline">
              <strong style={{ color: '#0F172A', fontWeight: 700 }}>{doctorName}</strong> ({doctorDegree}) &bull; Hisar’s premier orthodontic and dental care center opposite Jindal Hospital, Model Town. Specialized in Clear Aligners, Ceramic Braces, and Painless Single-Sitting Treatments.
            </p>

            {/* Dual CTA Buttons */}
            <div className="hero-cta-row">
              <button
                onClick={onBookClick}
                className="btn-pill btn-primary hero-btn-main"
              >
                <Calendar size={18} />
                <span>{t?.bookOpdNow || 'Book Consultation Now'}</span>
              </button>

              <a
                href={`tel:${phone}`}
                className="btn-pill btn-secondary hero-btn-sub"
              >
                <Phone size={18} style={{ color: '#0284C7' }} />
                <span>{t?.callReception || 'Call Reception'}</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: clamp(2rem, 4vw, 3.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 4.5rem);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        /* Mobile First: Visual on Top, Text Below */
        .hero-doctor-col {
          order: 1;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .hero-text-col {
          order: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .hero-visual-card {
          width: 100%;
          max-width: 360px;
          aspect-ratio: 1 / 1.1;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px -12px rgba(2, 132, 199, 0.2), 0 8px 16px -4px rgba(15, 23, 42, 0.06);
          border: 1px solid rgba(226, 232, 240, 0.8);
          background-color: #F0F9FF;
        }

        .hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .hero-visual-card:hover .hero-main-img {
          transform: scale(1.02);
        }

        .hero-headline {
          font-size: clamp(2.1rem, 4.8vw, 3.6rem);
          font-weight: 800;
          line-height: 1.15;
          color: #0F172A;
          letter-spacing: -0.03em;
        }

        .hero-headline-accent {
          background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subheadline {
          font-size: clamp(0.98rem, 1.35vw, 1.15rem);
          line-height: 1.7;
          color: #475569;
          max-width: 620px;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          padding-top: 0.5rem;
        }

        .hero-btn-main {
          padding: 0.95rem 1.85rem;
          font-size: 0.95rem;
          box-shadow: 0 12px 25px -4px rgba(2, 132, 199, 0.35);
          flex: 1 1 200px;
        }

        .hero-btn-sub {
          padding: 0.95rem 1.65rem;
          font-size: 0.95rem;
          flex: 1 1 170px;
        }

        @media (max-width: 480px) {
          .hero-cta-row {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-main, .hero-btn-sub {
            width: 100% !important;
            flex: 1 1 100% !important;
            justify-content: center !important;
          }
        }

        /* Desktop Viewport (>= 900px): Text Left, Visual Right */
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3.5rem !important;
            align-items: center !important;
          }

          .hero-text-col {
            order: 1 !important;
            gap: 1.5rem !important;
          }

          .hero-doctor-col {
            order: 2 !important;
            justify-content: flex-end !important;
          }

          .hero-visual-card {
            max-width: 440px !important;
            aspect-ratio: 4 / 4.8 !important;
            border-radius: 28px !important;
          }

          .hero-btn-main {
            flex: 0 0 auto !important;
            padding: 1rem 2rem !important;
          }

          .hero-btn-sub {
            flex: 0 0 auto !important;
            padding: 1rem 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
