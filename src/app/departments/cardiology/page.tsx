'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function CardiologyDepartmentPage() {
  const doctors = [
    { id: 1, name: 'Dr. Sarah Bennett', role: 'Head of Cardiovascular Surgery', experience: '18 Years Exp.', rating: '4.98' },
    { id: 2, name: 'Dr. Marcus Vance', role: 'Interventional Cardiologist', experience: '14 Years Exp.', rating: '4.95' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1">
        <div className="mb-10">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">MEDICAL DEPARTMENT</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">Department of Cardiology</h1>
          <p className="text-gray-500 max-w-2xl">World-class cardiovascular care utilizing 3D cardiac mapping, minimally invasive catheter interventions, and dedicated coronary intensive care units.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#1a3a5c]">Clinical Services</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Coronary Angioplasty & Stenting</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Electrophysiology & Pacemaker Implantation</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Heart Valve Repair & TAVR Procedures</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> 24/7 Cardiac Emergency & Cath Lab</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#1a3a5c]">Cardiology Specialists</h2>
            <div className="space-y-4">
              {doctors.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl">
                  <div>
                    <h3 className="font-bold text-[#1a3a5c]">{doc.name}</h3>
                    <p className="text-xs text-gray-500">{doc.role} · {doc.experience}</p>
                  </div>
                  <Link href={`/doctors/${doc.id}`} className="bg-[#2e86de] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                    PROFILE
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
