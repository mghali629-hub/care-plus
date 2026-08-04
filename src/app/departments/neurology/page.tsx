'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function NeurologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1">
        <div className="mb-10">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">MEDICAL DEPARTMENT</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">Department of Neurology</h1>
          <p className="text-gray-500 max-w-2xl">Expert diagnosis and treatment of brain, spinal cord, and nervous system disorders using the latest neuroimaging, EEG, and minimally invasive neurosurgery techniques.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Clinical Services</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Stroke & Cerebrovascular Management', 'Epilepsy Monitoring & Seizure Surgery', 'Parkinson\'s Disease & Movement Disorders', 'MS & Autoimmune Neurology', '24/7 Neurological Emergency Response', 'Advanced EEG & EMG Diagnostics'].map((s, i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> {s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Neurology Specialists</h2>
            {[{ name: 'Dr. Elena Petrov', role: 'Head of Neurology & Epileptology', exp: '16 Years', rating: '4.97' }, { name: 'Dr. James Okoye', role: 'Consultant Neurologist & Stroke Lead', exp: '12 Years', rating: '4.95' }].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl mb-3">
                <div>
                  <h3 className="font-bold text-[#1a3a5c] text-sm">{doc.name}</h3>
                  <p className="text-xs text-gray-500">{doc.role} · {doc.exp} Exp.</p>
                </div>
                <Link href={`/doctors/${i + 5}`} className="bg-[#2e86de] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">VIEW</Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
