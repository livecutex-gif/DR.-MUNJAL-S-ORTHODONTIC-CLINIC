import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function Hero({ settings, onBookClick, t }) {
  const doctorName = settings?.doctor_name || 'Dr. Puneet Munjal';
  const doctorDegree = settings?.doctor_degree || 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)';
  const phone = settings?.phone_number || '+919215666440';

  return (
    <section className="hero-section" style={{ position: 'relative' }}>
      <div className="content-wrap">
        <div className="hero-grid">
          
          {/* Doctor Portrait Visual - Clean & Frameless, No Box */}
          <div className="hero-doctor-col">
            <div className="hero-clean-doctor-box">
              <img 
                src="/doctor-portrait.jpg" 
                alt={doctorName}
                className="hero-clean-doctor-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Text & CTAs Column */}
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
              <strong style={{ color: '#0F172A', fontWeight: 700 }}>{doctorName}</strong> ({doctorDegree}) &bull; Hisar’s premier orthodontic and dental care practice opposite Jindal Hospital, Model Town. Specialized in Invisible Clear Aligners, Braces, and Painless Dental Treatments.
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
          position: relative;
          min-height: calc(100vh - 75px);
          display: flex;
          align-items: center;
          padding-top: clamp(2rem, 4vw, 3.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 4.5rem);
          overflow: hidden;
          background-color: #F8FAFC;
        }

        /* 100vh Hero Background with Soft Opacity */
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.32;
          pointer-events: none;
          z-index: 0;
        }

        .hero-section > .content-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
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

        /* Clean Frameless Doctor Portrait - No Box */
        .hero-clean-doctor-box {
          width: 100%;
          max-width: 360px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 45px -15px rgba(15, 23, 42, 0.22);
          background: transparent;
          border: none;
        }

        .hero-clean-doctor-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 4.9;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.4s ease;
        }

        .hero-clean-doctor-box:hover .hero-clean-doctor-img {
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
          color: #334155;
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

        /* Desktop Viewport (>= 900px): Text Left, Doctor Right */
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

          .hero-clean-doctor-box {
            max-width: 440px !important;
            border-radius: 32px !important;
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
