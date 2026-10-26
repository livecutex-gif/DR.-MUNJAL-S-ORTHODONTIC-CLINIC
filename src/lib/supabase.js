import { createClient } from '@supabase/supabase-js';

const DEFAULT_CLINIC_SETTINGS = {
  id: 'primary',
  clinic_name: 'Dr. Munjal’s Orthodontic & Dental Clinic',
  doctor_name: 'Dr. Puneet Munjal',
  doctor_degree: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)',
  doctor_reg_no: 'HN-D-3841',
  is_doctor_available: true,
  opd_timing_morning: '10:00 AM – 1:30 PM',
  opd_timing_evening: '5:00 PM – 7:30 PM',
  emergency_notice: 'Doctor is attending an emergency orthodontic procedure. Clinic OPD will resume shortly.',
  phone_number: '+919215666440',
  whatsapp_number: '919215666440',
  clinic_address: '154-N, Model Town, Opposite Jindal Hospital, Hisar - 125005, Haryana',
  google_maps_url: 'https://maps.app.goo.gl/bFVjxkqsaVNBuqzH6'
};

// No dummy demo appointments - empty clean list
const INITIAL_DEMO_APPOINTMENTS = [];
export const DEMO_REFS = ['PC-8401', 'PC-8402', 'PC-8403', 'PC-8404', 'PC-8405'];
export const DEMO_NAMES = ['Sunita Devi', 'Rajesh Verma', 'Aarav Choudhary', 'Pooja Rani', 'Kuldeep Singh'];

// Helper to get active Supabase credentials
export const getStoredCredentials = () => {
  const url = localStorage.getItem('primecare_supabase_url') 
    || import.meta.env.VITE_SUPABASE_URL 
    || import.meta.env.NEXT_PUBLIC_SUPABASE_URL 
    || import.meta.env.SUPABASE_URL 
    || '';
  const key = localStorage.getItem('primecare_supabase_key') 
    || import.meta.env.VITE_SUPABASE_ANON_KEY 
    || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
    || import.meta.env.SUPABASE_ANON_KEY 
    || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY 
    || import.meta.env.SUPABASE_PUBLISHABLE_KEY 
    || '';
  const isValid = url.startsWith('http') && key.length > 20 && !url.includes('your-project');
  return { url, key, isValid };
};

// Initialize Supabase client if valid credentials exist
const creds = getStoredCredentials();
export const supabase = creds.isValid ? createClient(creds.url, creds.key) : null;

// Local fallback store initialization
const getLocalSettings = () => {
  try {
    const raw = localStorage.getItem('primecare_local_settings');
    if (raw) {
      const parsed = JSON.parse(raw);
      // If legacy PrimeCare settings detected, auto-update to Dr. Munjal
      if (parsed.clinic_name?.includes('PrimeCare') || parsed.doctor_name?.includes('Sharma')) {
        setLocalSettings(DEFAULT_CLINIC_SETTINGS);
        return DEFAULT_CLINIC_SETTINGS;
      }
      return parsed;
    }
  } catch (e) {
    console.error('Error reading local settings', e);
  }
  return DEFAULT_CLINIC_SETTINGS;
};

const setLocalSettings = (settings) => {
  localStorage.setItem('primecare_local_settings', JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent('primecare_settings_updated', { detail: settings }));
};

const getLocalAppointments = () => {
  try {
    const raw = localStorage.getItem('primecare_local_appointments');
    if (raw) {
      const parsed = JSON.parse(raw);
      // Filter out any dummy demo appointments
      const clean = parsed.filter(item => 
        !DEMO_REFS.includes(item.booking_reference) && 
        !DEMO_NAMES.includes(item.patient_name) &&
        !['appt-1', 'appt-2', 'appt-3', 'appt-4', 'appt-5'].includes(item.id)
      );
      if (clean.length !== parsed.length) {
        localStorage.setItem('primecare_local_appointments', JSON.stringify(clean));
      }
      return clean;
    }
  } catch (e) {
    console.error('Error reading local appointments', e);
  }
  localStorage.setItem('primecare_local_appointments', JSON.stringify([]));
  return [];
};

const setLocalAppointments = (appointments) => {
  localStorage.setItem('primecare_local_appointments', JSON.stringify(appointments));
  window.dispatchEvent(new CustomEvent('primecare_appointments_updated', { detail: appointments }));
};

// Ensure initial local state is seeded (clean with 0 demo appointments)
if (!localStorage.getItem('primecare_local_settings')) {
  setLocalSettings(DEFAULT_CLINIC_SETTINGS);
}
// Clean up any legacy demo appointments from localStorage immediately
try {
  const existingLocal = localStorage.getItem('primecare_local_appointments');
  if (existingLocal) {
    const parsed = JSON.parse(existingLocal);
    const clean = parsed.filter(item => 
      !DEMO_REFS.includes(item.booking_reference) && 
      !DEMO_NAMES.includes(item.patient_name) &&
      !['appt-1', 'appt-2', 'appt-3', 'appt-4', 'appt-5'].includes(item.id)
    );
    localStorage.setItem('primecare_local_appointments', JSON.stringify(clean));
  } else {
    localStorage.setItem('primecare_local_appointments', JSON.stringify([]));
  }
} catch (e) {}

// -----------------------------------------------------------------------------
// PUBLIC & ADMIN API METHODS
// -----------------------------------------------------------------------------

export async function fetchClinicSettings() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('clinic_settings')
        .select('*')
        .eq('id', 'primary')
        .single();
      if (!error && data) return data;
    } catch (err) {
      console.warn('Supabase fetchClinicSettings error, using local fallback:', err);
    }
  }
  return getLocalSettings();
}

export async function updateClinicSettings(newSettings) {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('clinic_settings')
        .upsert({ ...newSettings, id: 'primary', updated_at: new Date().toISOString() })
        .select()
        .single();
      if (!error && data) {
        setLocalSettings(data);
        return data;
      }
    } catch (err) {
      console.warn('Supabase updateClinicSettings error, updating local:', err);
    }
  }
  const merged = { ...getLocalSettings(), ...newSettings, updated_at: new Date().toISOString() };
  setLocalSettings(merged);
  return merged;
}

export async function fetchAppointments() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        // Filter out any dummy demo appointments from database
        const clean = data.filter(item => 
          !DEMO_REFS.includes(item.booking_reference) && 
          !DEMO_NAMES.includes(item.patient_name)
        );
        return clean;
      }
    } catch (err) {
      console.warn('Supabase fetchAppointments error, using local fallback:', err);
    }
  }
  return getLocalAppointments();
}

export async function purgeDemoAppointments() {
  if (supabase) {
    try {
      await supabase
        .from('appointments')
        .delete()
        .in('booking_reference', DEMO_REFS);
      await supabase
        .from('appointments')
        .delete()
        .in('patient_name', DEMO_NAMES);
    } catch (e) {
      console.warn('Error purging demo appointments from Supabase:', e);
    }
  }
  const current = getLocalAppointments();
  const clean = current.filter(item => 
    !DEMO_REFS.includes(item.booking_reference) && 
    !DEMO_NAMES.includes(item.patient_name)
  );
  setLocalAppointments(clean);
  return clean;
}

export async function createAppointment(appointmentData) {
  const reference = 'PC-' + Math.floor(1000 + Math.random() * 9000);
  const newRecord = {
    ...appointmentData,
    booking_reference: reference,
    status: 'pending',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([newRecord])
        .select()
        .single();
      if (!error && data) {
        // Also sync local
        const current = getLocalAppointments();
        setLocalAppointments([data, ...current]);
        return data;
      }
    } catch (err) {
      console.warn('Supabase createAppointment error, saving to local fallback:', err);
    }
  }

  // Local fallback
  const fallbackRecord = { ...newRecord, id: 'appt-' + Date.now() };
  const current = getLocalAppointments();
  setLocalAppointments([fallbackRecord, ...current]);
  return fallbackRecord;
}

export async function updateAppointmentStatus(id, newStatus) {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (!error && data) {
        const current = getLocalAppointments();
        const updated = current.map(item => item.id === id ? data : item);
        setLocalAppointments(updated);
        return data;
      }
    } catch (err) {
      console.warn('Supabase updateAppointmentStatus error, updating local:', err);
    }
  }

  const current = getLocalAppointments();
  const updated = current.map(item => 
    item.id === id ? { ...item, status: newStatus, updated_at: new Date().toISOString() } : item
  );
  setLocalAppointments(updated);
  return updated.find(i => i.id === id);
}

export async function deleteAppointment(id) {
  if (supabase) {
    try {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);
      if (error) console.warn('Supabase delete error:', error);
    } catch (err) {
      console.warn('Supabase delete error:', err);
    }
  }

  const current = getLocalAppointments();
  const filtered = current.filter(item => item.id !== id);
  setLocalAppointments(filtered);
  return true;
}

// Subscribe to real-time events across tabs/Supabase
export function subscribeToRealtime(onSettingsChange, onAppointmentsChange) {
  let supabaseChannel = null;

  if (supabase) {
    try {
      supabaseChannel = supabase
        .channel('primecare_realtime')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'clinic_settings' },
          (payload) => {
            if (payload.new) onSettingsChange(payload.new);
          }
        )
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'appointments' },
          async () => {
            const all = await fetchAppointments();
            onAppointmentsChange(all);
          }
        )
        .subscribe();
    } catch (e) {
      console.warn('Supabase realtime subscribe error:', e);
    }
  }

  // Cross-tab & local custom event listeners
  const handleCustomSettings = (e) => onSettingsChange(e.detail);
  const handleCustomAppointments = (e) => onAppointmentsChange(e.detail);
  const handleStorage = (e) => {
    if (e.key === 'primecare_local_settings') {
      onSettingsChange(getLocalSettings());
    } else if (e.key === 'primecare_local_appointments') {
      onAppointmentsChange(getLocalAppointments());
    }
  };

  window.addEventListener('primecare_settings_updated', handleCustomSettings);
  window.addEventListener('primecare_appointments_updated', handleCustomAppointments);
  window.addEventListener('storage', handleStorage);

  return () => {
    if (supabase && supabaseChannel) {
      supabase.removeChannel(supabaseChannel);
    }
    window.removeEventListener('primecare_settings_updated', handleCustomSettings);
    window.removeEventListener('primecare_appointments_updated', handleCustomAppointments);
    window.removeEventListener('storage', handleStorage);
  };
}

// -----------------------------------------------------------------------------
// AUTHENTICATION UTILITIES
// -----------------------------------------------------------------------------

export async function adminLogin(email, password) {
  // If real Supabase auth is configured and client active
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });
      if (error) throw error;
      if (data?.session) {
        localStorage.setItem('primecare_admin_logged_in', 'true');
        localStorage.setItem('primecare_admin_email', data.user.email);
        return { success: true, user: data.user };
      }
    } catch (err) {
      console.warn('Supabase signInWithPassword failed:', err.message);
      // Fall through to check local credentials for demo
    }
  }

  // Standard Demo Portal credentials for instant review
  const isMunjalAdmin = (email.trim().toLowerCase() === 'admin@munjalortho.clinic' && password === 'munjal123')
    || (email.trim().toLowerCase() === 'admin@primecare.clinic' && password === 'primecare123');

  if (isMunjalAdmin) {
    const mockUser = {
      id: 'admin-munjal-demo',
      email: email.trim().toLowerCase(),
      role: 'Dr. Puneet Munjal / Clinic Administrator'
    };
    localStorage.setItem('primecare_admin_logged_in', 'true');
    localStorage.setItem('primecare_admin_email', mockUser.email);
    return { success: true, user: mockUser };
  }

  throw new Error('Invalid clinic administrator credentials. Use admin@munjalortho.clinic and password munjal123 for staff access.');
}

export async function adminLogout() {
  if (supabase) {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn('Supabase sign out error:', e);
    }
  }
  localStorage.removeItem('primecare_admin_logged_in');
  localStorage.removeItem('primecare_admin_email');
  return true;
}

export function isUserAdminLoggedIn() {
  return localStorage.getItem('primecare_admin_logged_in') === 'true';
}

export function saveSupabaseConfig(url, key) {
  localStorage.setItem('primecare_supabase_url', url.trim());
  localStorage.setItem('primecare_supabase_key', key.trim());
  window.location.reload();
}

export function clearSupabaseConfig() {
  localStorage.removeItem('primecare_supabase_url');
  localStorage.removeItem('primecare_supabase_key');
  window.location.reload();
}
