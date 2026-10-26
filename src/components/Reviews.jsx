import React from 'react';
import { Star, CheckCircle, ExternalLink, MapPin } from 'lucide-react';

const PATIENT_REVIEWS = [
  {
    id: 1,
    name: 'Rohit Aggarwal',
    location: 'Sector 14, Hisar',
    rating: 5,
    date: '4 days ago',
    comment: 'Got my ceramic braces done by Dr. Puneet Munjal. Within 12 months, my severely crowded front teeth and bite are completely aligned. He explains every monthly wire adjustment clearly. Best orthodontist in Hisar without doubt!',
    verified: true,
    treatment: 'Ceramic Braces'
  },
  {
    id: 2,
    name: 'Pooja Verma',
    location: 'Model Town, Hisar',
    rating: 5,
    date: '1 week ago',
    comment: 'I opted for Clear Aligners (invisible trays) as I am a working professional. Nobody at office could even notice I was wearing them. Clinic is opposite Jindal Hospital, super clean and sanitized. Very gentle doctor.',
    verified: true,
    treatment: 'Invisible Clear Aligners'
  },
  {
    id: 3,
    name: 'Vikas Bishnoi',
    location: 'Urban Estate II, Hisar',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Had severe molar pain and visited Dr. Munjal’s clinic. His rotary single-sitting root canal was 100% painless! The zirconia crown fits perfectly. The WhatsApp appointment token made our visit hassle-free.',
    verified: true,
    treatment: 'Painless Root Canal & Crown'
  },
  {
    id: 4,
    name: 'Simran Kaur',
    location: 'PLA Community Center, Hisar',
    rating: 5,
    date: '3 weeks ago',
    comment: 'I had an open bite and gaps in my upper front teeth. Dr. Puneet Munjal diagnosed with 3D scanning and started fixed orthodontic braces. Within 8 months I saw dramatic improvement. Courteous staff and peaceful clinic.',
    verified: true,
    treatment: 'Deep Bite & Gap Closure'
  },
  {
    id: 5,
    name: 'Dr. Amit Sihag',
    location: 'Medical Enclave, Hisar',
    rating: 5,
    date: '1 month ago',
    comment: 'As a doctor myself, I am very particular about medical hygiene. Dr. Munjal’s clinic follows strict Class-B vacuum autoclaving. Got two posterior titanium dental implants done smoothly without any swelling.',
    verified: true,
    treatment: 'Titanium Dental Implants'
  },
  {
    id: 6,
    name: 'Neha Singhal',
    location: 'Red Square Market, Hisar',
    rating: 5,
    date: '1 month ago',
    comment: 'Visited before my wedding for laser teeth whitening and minor enamel reshaping. The results were immediate, brilliant and totally natural. Zero tooth sensitivity afterwards. Truly 5-star cosmetic dental care in Hisar!',
    verified: true,
    treatment: 'Teeth Whitening & Smile Design'
  },
  {
    id: 7,
    name: 'Harshdeep Gill',
    location: 'Dabra Road, Hisar',
    rating: 5,
    date: '2 months ago',
    comment: 'Started adult braces at age 27. Was worried about pain and looks, but Dr. Munjal recommended aesthetic self-ligating ceramic brackets. It was surprisingly comfortable and my smile alignment is now 100% perfect.',
    verified: true,
    treatment: 'Self-Ligating Braces'
  },
  {
    id: 8,
    name: 'Sunita Rani',
    location: 'Auto Market, Hisar',
    rating: 5,
    date: '2 months ago',
    comment: 'My mother had severe chewing problems. Dr. Munjal gave her fixed zirconia bridges and completed 2 root canals in a single visit without pain. She can eat comfortably now. Highly trusted doctor with reasonable fees.',
    verified: true,
    treatment: 'Full Mouth RCT & Zirconia'
  },
  {
    id: 9,
    name: 'Rajesh Jangra',
    location: 'Barwala Road, Hisar',
    rating: 5,
    date: '3 months ago',
    comment: 'Brought my 10-year-old son who had a thumb-sucking habit and forward teeth. Doctor gave an interceptive habit-breaking appliance. Within 5 months the habit stopped and his jaw alignment corrected naturally.',
    verified: true,
    treatment: 'Kids Preventive Orthodontics'
  },
  {
    id: 10,
    name: 'Priya Saini',
    location: 'Sector 13, Hisar',
    rating: 5,
    date: '3 months ago',
    comment: 'Smooth clear aligner treatment from day one. Loved the 3D video simulation Dr. Munjal showed me before starting, which predicted the exact week-by-week smile movement. Exceeded all my expectations!',
    verified: true,
    treatment: '3D Clear Aligners'
  },
  {
    id: 11,
    name: 'Deepak Chawla',
    location: 'Camp Area, Hisar',
    rating: 5,
    date: '4 months ago',
    comment: 'Had an impacted wisdom tooth with severe infection. The painless surgical extraction was completed in under 15 minutes. Received prompt post-procedure care guidance and follow-up on WhatsApp.',
    verified: true,
    treatment: 'Painless Wisdom Tooth Surgery'
  },
  {
    id: 12,
    name: 'Meena Jindal',
    location: 'Model Town, Hisar',
    rating: 5,
    date: '5 months ago',
    comment: 'Dr. Munjal crafted cosmetic veneers to close a wide gap between my front teeth. My smile looks so natural and balanced now. Living right in Model Town, it is by far the finest dental clinic near Jindal Hospital.',
    verified: true,
    treatment: 'Cosmetic Veneers'
  }
];

export default function Reviews() {
  // Show 6 curated patient reviews across key treatments
  const displayedReviews = PATIENT_REVIEWS.slice(0, 6);

  return (
    <section 
      id="reviews" 
      style={{ 
        backgroundColor: '#F8FAFC',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
        position: 'relative'
      }}
    >
      <div className="content-wrap">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill badge-sky" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            <span>Verified Patient Feedback</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
            Trusted by Thousands of Families Across Hisar
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
              ))}
            </div>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>4.9 out of 5</span>
            <span style={{ color: '#94A3B8' }}>&bull;</span>
            <span style={{ fontSize: '0.9rem', color: '#64748B' }}>150+ Google Reviews Verified</span>
          </div>
        </div>

        {/* 3-Column Review Cards Grid */}
        <div className="grid-3">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="prime-card"
              style={{
                padding: '1.75rem',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{review.date}</span>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{review.comment}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      {review.name}
                    </h4>
                    {review.verified && <CheckCircle size={14} fill="#10B981" stroke="#FFFFFF" />}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                    {review.location}
                  </div>
                </div>

                <span 
                  style={{
                    fontSize: '0.72rem',
                    backgroundColor: '#E0F2FE',
                    color: '#0369A1',
                    padding: '4px 9px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {review.treatment}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Centered Direct Google Reviews Showcase CTA */}
        <div 
          style={{ 
            marginTop: '3.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center',
            gap: '0.875rem'
          }}
        >
          <a
            href="https://maps.app.goo.gl/bFVjxkqsaVNBuqzH6"
            target="_blank"
            rel="noopener noreferrer"
            className="google-map-review-cta"
            title="Read all patient reviews on Google Maps"
          >
            {/* Google Multicolor Logo */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                backgroundColor: '#FFFFFF', 
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: '1px solid #E2E8F0',
                flexShrink: 0 
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.07.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.39 7.31 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.61 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"/>
              </svg>
            </div>

            {/* CTA Content */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A' }}>
                  Read All Verified Reviews on Google Maps
                </span>
                <ExternalLink size={16} style={{ color: '#0284C7', flexShrink: 0 }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '3px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>
                  4.9 Rating
                </span>
                <span style={{ color: '#CBD5E1' }}>&bull;</span>
                <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  150+ Happy Patients in Hisar
                </span>
              </div>
            </div>
          </a>

          {/* Subtext info for trust & visual balance */}
          <p style={{ fontSize: '0.82rem', color: '#94A3B8', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={13} />
            <span>Official Google Business Profile &bull; 154-N Model Town, Opp. Jindal Hospital, Hisar</span>
          </p>
        </div>

      </div>
    </section>
  );
}

