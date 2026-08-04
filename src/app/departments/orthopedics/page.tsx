'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function OrthopedicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1">
        <div className="mb-10">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">BONE & JOINT</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">Department of Orthopedics</h1>
          <p className="text-gray-500 max-w-2xl">Internationally trained orthopedic surgeons delivering joint replacement, sports injury surgery, and minimally invasive spine interventions with rapid recovery programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Surgical Specialties</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Total Hip & Knee Replacement', 'Robotic-Assisted Joint Surgery', 'ACL & Meniscus Sports Injuries', 'Minimally Invasive Spine Surgery', 'Trauma & Fracture Management', 'Physiotherapy & Joint Rehab Program'].map((s, i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> {s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Key Outcomes</h2>
            {[{ label: 'Average Recovery Time', val: '6-8 Weeks' }, { label: 'Patient Success Rate', val: '97.4%' }, { label: 'Surgeries Per Year', val: '2,400+' }].map((m, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-blue-50/60 rounded-xl">
                <span className="text-sm text-gray-600">{m.label}</span>
                <strong className="text-[#2e86de] text-base">{m.val}</strong>
              </div>
            ))}
            <Link href="/appointment" className="mt-4 w-full block text-center bg-[#2e86de] hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
