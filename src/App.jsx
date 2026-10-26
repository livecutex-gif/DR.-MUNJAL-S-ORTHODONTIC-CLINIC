import React, { useState, useEffect, useMemo } from 'react';
import { 
  fetchClinicSettings, 
  fetchAppointments,
  subscribeToRealtime, 
  isUserAdminLoggedIn 
} from './lib/supabase';
import { translations } from './lib/translations';

// Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingSection from './components/BookingSection';
import AboutDoctor from './components/AboutDoctor';
import Reviews from './components/Reviews';
import LocationTimings from './components/LocationTimings';
import StickyMobileBar from './components/StickyMobileBar';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path === '/admin/login' || hash === '#/admin/login') return '/admin/login';
    if (path === '/admin' || hash === '#/admin') return '/admin';
    return '/';
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(isUserAdminLoggedIn);
  const [clinicSettings, setClinicSettings] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Bilingual Language State ('en' or 'hi')
  const [lang, setLang] = useState(() => localStorage.getItem('primecare_lang') || 'en');
  const t = translations[lang] || translations.en;

  const handleToggleLang = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
    localStorage.setItem('primecare_lang', nextLang);
    addToast(nextLang === 'hi' ? 'भाषा: हिंदी चुनी गई' : 'Language switched to English', 'info');
  };

  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);

  // Toast Notification helper
  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Sync route changes with browser history
  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/admin/login' || hash === '#/admin/login') setCurrentRoute('/admin/login');
      else if (path === '/admin' || hash === '#/admin') setCurrentRoute('/admin');
      else setCurrentRoute('/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fetch initial clinic settings & appointments and setup real-time listener
  useEffect(() => {
    let isMounted = true;
    
    Promise.all([fetchClinicSettings(), fetchAppointments()]).then(([settingsData, apptsData]) => {
      if (isMounted) {
        if (settingsData) setClinicSettings(settingsData);
        if (apptsData) setAppointments(apptsData);
      }
    });

    const unsubscribe = subscribeToRealtime(
      (newSettings) => {
        if (isMounted && newSettings) setClinicSettings(newSettings);
      },
      (newAppts) => {
        if (isMounted && newAppts) setAppointments(newAppts);
      }
    );

    return () => {
      isMounted = false;
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Active Live Queue Calculation for today
  const activeServing = useMemo(() => {
    return appointments.find(a => a.preferred_date === todayStr && a.status === 'confirmed');
  }, [appointments, todayStr]);

  const waitingAheadCount = useMemo(() => {
    return appointments.filter(a => a.preferred_date === todayStr && a.status === 'pending').length;
  }, [appointments, todayStr]);

  // Scroll smoothly to the booking section
  const scrollToBooking = () => {
    const el = document.getElementById('book-appointment');
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Select service from Bento card and scroll to form
  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    scrollToBooking();
    addToast(`Selected "${serviceTitle}" for your appointment`, 'info');
  };

  // When a patient books an appointment
  const handleAppointmentCreated = (appointment) => {
    addToast(`Slot reserved! Token #${appointment.booking_reference} is ready.`, 'success');
  };

  // ---------------------------------------------------------------------------
  // RENDER ROUTE: ADMIN LOGIN
  // ---------------------------------------------------------------------------
  if (currentRoute === '/admin/login') {
    return (
      <AdminLogin 
        onLoginSuccess={() => {
          setIsAdminLoggedIn(true);
          navigateTo('/admin');
        }}
        onBackToSite={() => navigateTo('/')}
      />
    );
  }

  // ---------------------------------------------------------------------------
  // RENDER ROUTE: ADMIN DASHBOARD (Protected)
  // ---------------------------------------------------------------------------
  if (currentRoute === '/admin') {
    if (!isAdminLoggedIn) {
      return (
        <AdminLogin 
          onLoginSuccess={() => {
            setIsAdminLoggedIn(true);
            navigateTo('/admin');
          }}
          onBackToSite={() => navigateTo('/')}
        />
      );
    }
    return (
      <>
        <AdminDashboard 
          onLogout={() => {
            setIsAdminLoggedIn(false);
            navigateTo('/admin/login');
          }}
          onGoToSite={() => navigateTo('/')}
          addToast={addToast}
        />
        {/* Toast notifications */}
        <div className="toast-container">
          {toasts.map(toast => (
            <div key={toast.id} className="toast-item">
              <span>{toast.message}</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  // ---------------------------------------------------------------------------
  // RENDER ROUTE: PUBLIC CLINIC PORTAL (/)
  // ---------------------------------------------------------------------------
  return (
    <div className="app-container">
      
      {/* A. Live Status Top Bar with Queue Tracker & Language Switcher */}
      <TopBar 
        settings={clinicSettings}
        onNavigateAdmin={() => navigateTo('/admin')}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
        activeServing={activeServing}
      />

      {/* B. Floating Glass Pill Navbar */}
      <Navbar 
        settings={clinicSettings}
        onBookClick={scrollToBooking}
        onNavigateAdmin={() => navigateTo('/admin')}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
      />

      {/* Main Page Layout */}
      <main>
        {/* C. Hero Section (2-Column Asymmetric Split) */}
        <Hero 
          settings={clinicSettings}
          onBookClick={scrollToBooking}
          t={t}
        />

        {/* D. Services Bento Grid Section */}
        <Services 
          onSelectService={handleSelectService}
        />

        {/* E. Interactive Split Booking Section with Printable Token Slip & Queue */}
        <BookingSection 
          settings={clinicSettings}
          preselectedService={selectedService}
          onAppointmentCreated={handleAppointmentCreated}
          lang={lang}
          t={t}
          activeServing={activeServing}
          waitingAheadCount={waitingAheadCount}
        />

        {/* F. About Doctor & Credentials */}
        <AboutDoctor 
          settings={clinicSettings}
        />

        {/* G. Patient Testimonials & Google Reviews */}
        <Reviews />

        {/* H. Clinic Timings & Google Maps Section */}
        <LocationTimings 
          settings={clinicSettings}
        />
      </main>

      {/* I. High-Trust Slate 900 Footer */}
      <Footer 
        settings={clinicSettings}
        onNavigateAdmin={() => navigateTo('/admin')}
      />

      {/* J. Sticky Mobile Bottom Bar (Call / WhatsApp) */}
      <StickyMobileBar 
        settings={clinicSettings}
        onBookClick={scrollToBooking}
      />

      {/* Floating Toast Notification Stack */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast-item">
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
