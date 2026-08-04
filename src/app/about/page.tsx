'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function CarePlusAboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">OUR HERITAGE</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">World-Class Care, Personal Touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Founded in 2008, CarePlus has grown into a leading private healthcare network trusted by over 50,000 patients annually across 20+ medical specialties.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[{ stat: '200+', label: 'Expert Physicians' }, { stat: '50K+', label: 'Patients Per Year' }, { stat: '20+', label: 'Medical Specialties' }, { stat: '98%', label: 'Patient Satisfaction' }].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 text-center">
              <div className="text-3xl font-black text-[#2e86de]">{s.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'JCI International Accreditation', desc: 'Certified by Joint Commission International — the gold standard in global hospital quality and patient safety.' },
            { title: 'State-of-the-Art Technology', desc: 'We invest in the latest diagnostic imaging, robotic surgery systems, and AI-assisted clinical decision tools.' },
            { title: 'Patient-First Philosophy', desc: 'Every care plan is individualized. Your dedicated care coordinator manages your journey from first visit to recovery.' },
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6">
              <h3 className="font-bold text-[#1a3a5c] text-lg mb-2">{m.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/appointment" className="bg-[#1a3a5c] hover:bg-[#2e86de] text-white font-bold px-10 py-4 rounded-2xl text-sm transition-colors inline-block">
            Book an Appointment
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
