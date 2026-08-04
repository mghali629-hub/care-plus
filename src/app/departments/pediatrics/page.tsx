'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function PediatricsPage() {
  const services = ['Neonatal Intensive Care Unit (NICU) — Level III','Developmental Pediatrics & Autism Assessments','Pediatric Oncology & Haematology','Childhood Immunization & Vaccination Clinics','Adolescent Medicine & Mental Health','Pediatric Surgery & ENT'];
  const doctors = [
    { name: 'Dr. Priya Sharma', role: 'Head of Pediatrics & Neonatology', exp: '18 Years', rating: '4.98' },
    { name: 'Dr. Samuel Osei', role: 'Pediatric Surgeon & ENT Specialist', exp: '14 Years', rating: '4.96' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">CHILDREN&apos;S HEALTH</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-2">Department of Pediatrics & Child Health</h1>
          <p className="text-gray-500 max-w-2xl text-sm">Compassionate, evidence-based medical care from newborn screening through adolescence, delivered in a warm, child-friendly environment by internationally trained specialists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-5">Clinical Services</h2>
            <ul className="space-y-3">
              {services.map((s, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-blue-500 font-bold mt-0.5">✓</span>{s}</li>)}
            </ul>
          </div>
          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-5">Pediatric Specialists</h2>
            {doctors.map((d, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-blue-50/60 rounded-2xl">
                <div>
                  <h3 className="font-bold text-[#1a3a5c] text-sm">{d.name}</h3>
                  <p className="text-xs text-gray-500">{d.role} · {d.exp} Exp · ⭐ {d.rating}</p>
                </div>
                <Link href={`/doctors/${i + 8}`} className="bg-[#2e86de] text-white text-xs font-bold px-4 py-2 rounded-xl">VIEW</Link>
              </div>
            ))}
            <Link href="/appointment" className="block w-full text-center bg-[#1a3a5c] hover:bg-[#2e86de] text-white font-bold py-3 rounded-xl text-sm transition-colors mt-4">
              Book Pediatric Appointment
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
