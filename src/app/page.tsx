'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { HeartPulse, Stethoscope, Calendar, Award, CheckCircle2, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  hospital: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
}

export default function CarePlusHomePage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [doctorName, setDoctorName] = useState('Dr. Elena Rostova');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-09-12');
  const [time, setTime] = useState('10:30');
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    fetch('/api/doctors')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setDoctors(data.doctors);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctorName, patientName, phone, date, time }),
      });
      const data = await res.json();
      if (data.success) setBooked(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1120] text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] via-[#0A1120]/60 to-black/40" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-400 text-xs font-mono font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-sky-400" /> Board-Certified Multi-Specialty Hospital
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold uppercase text-white tracking-tight leading-none">
              Precision Medicine & <span className="text-sky-400 block mt-2">Compassionate Care</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Leading cardiovascular surgery, robotic neurosurgery, whole-body MRI diagnostics, and 24/7 emergency trauma.
            </p>

            <div className="pt-6 font-sans flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#consult"
                className="px-8 py-4 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-all text-center"
              >
                Schedule Specialist Consult
              </a>
              <Link
                href="/doctors"
                className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center"
              >
                Browse Physician Directory
              </Link>
            </div>
          </div>
        </section>

        {/* Doctor Leadership Showcase */}
        <section className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2 font-sans">
            <span className="text-sky-400 text-xs font-mono font-bold uppercase tracking-widest block">Medical Leadership</span>
            <h2 className="text-4xl font-bold text-white">Board-Certified Specialists</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {doctors.map((doc) => (
              <div key={doc.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center">
                <img src={doc.image} alt={doc.name} className="w-32 h-32 rounded-2xl object-cover border-2 border-sky-500/40" />
                <div className="space-y-2 text-center sm:text-left">
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold font-mono uppercase inline-block">
                    {doc.specialty} Specialist
                  </span>
                  <h3 className="text-2xl font-bold text-white">{doc.name}</h3>
                  <span className="text-slate-400 text-xs block font-mono">{doc.hospital} • {doc.experience}</span>
                  <p className="text-slate-300 text-xs leading-relaxed">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment Form */}
        <section id="consult" className="max-w-3xl mx-auto px-4 font-sans">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-sky-500/30 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <span className="text-xs text-sky-400 font-mono font-bold uppercase tracking-widest block">Direct Clinical Scheduling</span>
              <h2 className="text-3xl font-bold text-white">Book Patient Appointment</h2>
            </div>

            {!booked ? (
              <form onSubmit={handleAppointment} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Select Attending Physician</label>
                  <select
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none"
                  >
                    {doctors.map((d) => (
                      <option key={d.id} value={d.name}>{d.name} ({d.specialty})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Patient Full Name</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Time</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-sky-400 transition-all"
                >
                  Save Clinical Appointment in Database
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950 border border-sky-500 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-sky-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Appointment Confirmed</h3>
                <p className="text-slate-300 text-xs">Thank you, {patientName}. Appointment saved with {doctorName} for {date} at {time}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
