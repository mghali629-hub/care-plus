'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function TelemedicinePage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const doctors = [
    { name: 'Dr. Sarah Bennett', specialty: 'Cardiology', rating: '4.97', sessions: 1240, available: true },
    { name: 'Dr. James Okoye', specialty: 'General Practice', rating: '4.95', sessions: 2100, available: true },
    { name: 'Dr. Priya Sharma', specialty: 'Dermatology', rating: '4.92', sessions: 890, available: true },
    { name: 'Dr. Michael Chen', specialty: 'Psychiatry', rating: '4.98', sessions: 760, available: false },
  ];

  const times = ['9:00 AM', '10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">Virtual Consultations</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">Telemedicine</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Consult with CarePlus specialists from anywhere via HD video. Prescriptions, referrals, and follow-ups — all from your device.</p>
        </div>

        {/* How it Works */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { step: '1', title: 'Choose Doctor', desc: 'Select a specialist by category and availability' },
            { step: '2', title: 'Book a Slot', desc: 'Pick your preferred date and time' },
            { step: '3', title: 'Join Video Call', desc: 'Connect via our secure, HIPAA-compliant platform' },
            { step: '4', title: 'Receive Care', desc: 'Get prescription, referral, or follow-up plan' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 text-center">
              <div className="w-10 h-10 bg-[#2e86de] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{s.step}</div>
              <h3 className="font-bold text-[#1a3a5c] mb-1 text-sm">{s.title}</h3>
              <p className="text-gray-400 text-xs">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doctor Selection */}
          <div>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">Available Specialists</h2>
            <div className="space-y-3">
              {doctors.map((doc, i) => (
                <button key={i} onClick={() => doc.available && setSelectedDoctor(doc.name)}
                  className={`w-full text-left p-4 bg-white rounded-2xl border transition-all shadow-sm ${!doc.available ? 'opacity-50 cursor-not-allowed' : selectedDoctor === doc.name ? 'border-[#2e86de] bg-blue-50' : 'border-blue-100 hover:border-blue-300'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">{doc.name.split(' ')[1][0]}</div>
                      <div>
                        <div className="font-bold text-[#1a3a5c] text-sm">{doc.name}</div>
                        <div className="text-xs text-gray-500">{doc.specialty}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-yellow-500">⭐ {doc.rating}</div>
                      <div className={`text-xs mt-0.5 ${doc.available ? 'text-green-600' : 'text-gray-400'}`}>{doc.available ? '● Available' : '○ Unavailable'}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">Book Your Session</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Selected Doctor</label>
                <div className="border border-blue-200 rounded-xl px-4 py-3 text-sm text-[#1a3a5c] font-semibold min-h-[44px]">{selectedDoctor || <span className="text-gray-400 font-normal">Select a doctor from the list</span>}</div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Date</label>
                <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Preferred Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {times.map(t => (
                    <button key={t} onClick={() => setSelectedTime(t)}
                      className={`py-2.5 rounded-xl text-xs font-semibold border transition-colors ${selectedTime === t ? 'bg-[#2e86de] text-white border-[#2e86de]' : 'border-blue-200 text-gray-600 hover:border-blue-400'}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Reason for Visit</label>
                <textarea rows={3} placeholder="Briefly describe your symptoms or concerns..." className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
              </div>
              <button className="w-full bg-[#1a3a5c] hover:bg-[#2e86de] text-white font-bold py-4 rounded-xl transition-colors">
                📹 Book Video Consultation
              </button>
              <p className="text-xs text-gray-400 text-center">Consultations from £85 · Covered by most private insurers</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
