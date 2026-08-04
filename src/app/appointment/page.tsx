'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function AppointmentPage() {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-08-25');
  const [time, setTime] = useState('10:00 AM');
  const [booked, setBooked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctorName: 'Dr. Elena Rostova', patientName, phone, date, time }),
      });
      const data = await res.json();
      if (data.success) setBooked(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Patient Appointment Scheduler</h1>
          <p className="text-slate-400 text-sm">Select dates and confirm your appointment saved to clinic database.</p>
        </div>

        {!booked ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Patient Full Name</label>
              <input type="text" required value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Jane Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Phone Number</label>
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 019-2834" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
              Confirm Booking via API
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-sky-500 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-sky-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Appointment Confirmed</h3>
            <p className="text-slate-300 text-sm">Thank you, {patientName}. Confirmed for {date} at {time}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
