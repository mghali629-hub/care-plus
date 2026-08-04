'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        {/* Emergency Banner */}
        <div className="bg-red-600 rounded-3xl p-8 text-white text-center mb-10 shadow-lg">
          <div className="text-5xl mb-3">🚨</div>
          <h1 className="text-4xl font-bold mb-2">Emergency Services</h1>
          <p className="text-red-100 mb-6">For life-threatening emergencies, call <strong>911</strong> immediately.<br />Our ER is open 24/7 — 365 days a year.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18002773927" className="bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors text-lg">
              📞 Call ER: 1-800-277-3927
            </a>
            <a href="/appointment" className="bg-red-700 text-white border border-red-400 font-bold px-8 py-3 rounded-xl hover:bg-red-800 transition-colors text-lg">
              Book Urgent Care
            </a>
          </div>
        </div>

        {/* Wait Time */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-red-100 mb-8">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6 text-center">Current ER Wait Time</h2>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-black text-green-600">12</div>
              <div className="text-gray-500 font-semibold">Minutes</div>
              <div className="text-xs text-green-600 mt-1">✓ Low Wait</div>
            </div>
            <div className="text-gray-200 text-4xl">|</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1a3a5c]">3 / 12</div>
              <div className="text-gray-500 text-sm">Rooms Occupied</div>
            </div>
            <div className="text-gray-200 text-4xl">|</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1a3a5c]">5</div>
              <div className="text-gray-500 text-sm">Physicians On Duty</div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { icon: '❤️', title: 'Cardiac Emergency', desc: 'Advanced cardiac life support, ECG monitoring, cath lab on standby 24/7.' },
            { icon: '🧠', title: 'Stroke Response', desc: 'Code Stroke protocol — door-to-needle time under 45 minutes guaranteed.' },
            { icon: '🦴', title: 'Trauma Center', desc: 'Level II Trauma Center — ortho, neuro, and vascular surgeons on call.' },
            { icon: '👶', title: 'Pediatric ER', desc: 'Dedicated pediatric emergency team with child-friendly environment.' },
            { icon: '🫁', title: 'Respiratory Crisis', desc: 'Ventilator support, nebulization, bronchoscopy available immediately.' },
            { icon: '🩸', title: 'Toxicology Unit', desc: 'Poison control partnership — 24hr toxicologist consultation.' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-red-100 flex gap-4">
              <span className="text-3xl">{s.icon}</span>
              <div><h3 className="font-bold text-[#1a3a5c] mb-1">{s.title}</h3><p className="text-gray-500 text-sm">{s.desc}</p></div>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-red-100 text-center">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">Emergency Entrance</h2>
          <p className="text-gray-500 mb-4">1200 CarePlus Medical Drive, North Tower — Ground Floor, East Wing</p>
          <div className="bg-red-50 rounded-2xl p-6 text-gray-600 text-sm">📍 Free valet parking available at the Emergency entrance 24 hours a day.</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
