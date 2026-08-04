'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';

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

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  useEffect(() => {
    fetch('/api/doctors')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setDoctors(data.doctors);
      });
  }, []);

  const filtered = doctors.filter((d) => selectedSpecialty === 'All' || d.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">Board-Certified Medical Leadership</h1>
          <p className="text-slate-400 text-sm">Select a department specialty to view clinic leaders.</p>

          <div className="flex justify-center gap-2 pt-4">
            {['All', 'Cardiology', 'Neurology'].map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${selectedSpecialty === spec ? 'bg-sky-500 text-slate-950' : 'bg-slate-900 text-slate-300'}`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((doc) => (
            <div key={doc.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 text-center">
              <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-sky-500" />
              <div>
                <span className="text-xs text-sky-400 font-semibold">{doc.specialty}</span>
                <h3 className="text-lg font-bold text-white mt-1">{doc.name}</h3>
                <p className="text-slate-400 text-xs mt-2">{doc.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
