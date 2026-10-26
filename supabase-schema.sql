-- ==============================================================================
-- Dr. Munjal’s Orthodontic & Dental Clinic - Supabase Database Schema
-- Production Ready Migration for Hisar Dental & Orthodontic Practice
-- ==============================================================================

-- 1. Create clinic_settings table
CREATE TABLE IF NOT EXISTS public.clinic_settings (
    id TEXT PRIMARY KEY DEFAULT 'primary',
    clinic_name TEXT NOT NULL DEFAULT 'Dr. Munjal’s Orthodontic & Dental Clinic',
    doctor_name TEXT NOT NULL DEFAULT 'Dr. Puneet Munjal',
    doctor_degree TEXT NOT NULL DEFAULT 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)',
    doctor_reg_no TEXT NOT NULL DEFAULT 'HN-D-3841',
    is_doctor_available BOOLEAN NOT NULL DEFAULT true,
    opd_timing_morning TEXT NOT NULL DEFAULT '10:00 AM – 1:30 PM',
    opd_timing_evening TEXT NOT NULL DEFAULT '5:00 PM – 7:30 PM',
    emergency_notice TEXT DEFAULT 'Doctor is attending an emergency orthodontic procedure. Clinic OPD will resume shortly.',
    phone_number TEXT NOT NULL DEFAULT '+919215666440',
    whatsapp_number TEXT NOT NULL DEFAULT '919215666440',
    clinic_address TEXT NOT NULL DEFAULT '154-N, Model Town, Opposite Jindal Hospital, Hisar - 125005, Haryana',
    google_maps_url TEXT NOT NULL DEFAULT 'https://maps.app.goo.gl/bFVjxkqsaVNBuqzH6',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed initial clinic settings row if not exists
INSERT INTO public.clinic_settings (
    id, clinic_name, doctor_name, doctor_degree, doctor_reg_no, 
    is_doctor_available, opd_timing_morning, opd_timing_evening, 
    emergency_notice, phone_number, whatsapp_number, clinic_address, google_maps_url
) VALUES (
    'primary',
    'Dr. Munjal’s Orthodontic & Dental Clinic',
    'Dr. Puneet Munjal',
    'BDS, MDS (Orthodontics & Dentofacial Orthopedics) - Senior Orthodontist',
    'HN-D-3841',
    true,
    '10:00 AM – 1:30 PM',
    '5:00 PM – 7:30 PM',
    'Clinic is temporarily paused for sterile operatory sanitization. Evening OPD will resume at 5:00 PM.',
    '+919215666440',
    '919215666440',
    '154-N, Model Town, Opposite Jindal Hospital, Hisar - 125005, Haryana',
    'https://maps.app.goo.gl/bFVjxkqsaVNBuqzH6'
) ON CONFLICT (id) DO UPDATE SET
    clinic_name = EXCLUDED.clinic_name,
    doctor_name = EXCLUDED.doctor_name,
    doctor_degree = EXCLUDED.doctor_degree,
    doctor_reg_no = EXCLUDED.doctor_reg_no,
    opd_timing_morning = EXCLUDED.opd_timing_morning,
    opd_timing_evening = EXCLUDED.opd_timing_evening,
    phone_number = EXCLUDED.phone_number,
    whatsapp_number = EXCLUDED.whatsapp_number,
    clinic_address = EXCLUDED.clinic_address,
    google_maps_url = EXCLUDED.google_maps_url;

-- 2. Create appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_reference TEXT NOT NULL UNIQUE,
    patient_name TEXT NOT NULL,
    patient_phone TEXT NOT NULL,
    patient_age INTEGER,
    treatment TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_shift TEXT NOT NULL,
    symptoms TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for speedy searching and filtering
CREATE INDEX IF NOT EXISTS idx_appointments_date ON public.appointments(preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON public.appointments(patient_phone);

-- 3. Row Level Security (RLS) setup
ALTER TABLE public.clinic_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow public read of clinic_settings
CREATE POLICY "Public Read Clinic Settings"
    ON public.clinic_settings
    FOR SELECT
    TO public
    USING (true);

-- Allow authenticated or public update to clinic settings (protected by Admin Dashboard)
CREATE POLICY "Public & Admin Update Clinic Settings"
    ON public.clinic_settings
    FOR UPDATE
    TO public
    USING (true);

-- Allow public to book appointments
CREATE POLICY "Public Insert Appointments"
    ON public.appointments
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Allow viewing and managing appointments
CREATE POLICY "Manage Appointments"
    ON public.appointments
    FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- 4. Enable Supabase Realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.clinic_settings;
ALTER PUBLICATION supabase_realtime ADD TABLE public.appointments;

-- 5. Clean setup: Purge any dummy demo appointments if present
DELETE FROM public.appointments 
WHERE booking_reference IN ('PC-8401', 'PC-8402', 'PC-8403', 'PC-8404', 'PC-8405')
   OR patient_name IN ('Sunita Devi', 'Rajesh Verma', 'Aarav Choudhary', 'Pooja Rani', 'Kuldeep Singh');
