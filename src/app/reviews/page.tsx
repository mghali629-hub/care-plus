'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Margaret H.', specialty: 'Cardiology', rating: 5, comment: 'Dr. Bennett is exceptional. Meticulous, caring, and explained everything clearly. Best cardiology experience I have had.' },
    { id: 2, name: 'Ibrahim K.', specialty: 'Orthopedics', rating: 5, comment: 'My knee replacement surgery and recovery program at CarePlus were flawless. Back to running within 8 weeks!' },
    { id: 3, name: 'Sophia L.', specialty: 'Telemedicine', rating: 5, comment: 'Booking was instant, the video consultation with Dr. Okoye was professional, and my prescription was emailed within minutes.' },
  ]);
  useEffect(() => { fetch('/api/reviews').then(r => r.json()).then(d => Array.isArray(d) && d.length && setReviews(d)).catch(() => {}); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">PATIENT STORIES</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-2">Patient Reviews</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Authentic feedback from patients who trusted CarePlus with their healthcare journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[{ stat: '4.96/5', label: 'Average Rating', sub: 'Based on 3,200+ reviews' }, { stat: '98%', label: 'Would Recommend', sub: 'To family and friends' }, { stat: '< 48h', label: 'Average Response', sub: 'For non-urgent concerns' }].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5 text-center">
              <div className="text-2xl font-black text-[#2e86de]">{s.stat}</div>
              <div className="text-sm font-bold text-[#1a3a5c] mt-1">{s.label}</div>
              <div className="text-xs text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          {reviews.map(r => (
            <div key={r.id} className="bg-white rounded-3xl border border-blue-100 shadow-sm p-7">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-bold text-[#1a3a5c] text-base">{r.name}</h3>
                  <span className="text-xs text-blue-600 font-semibold">{r.specialty}</span>
                </div>
                <div className="text-yellow-400">{'★'.repeat(r.rating)}</div>
              </div>
              <p className="text-gray-500 text-sm italic leading-relaxed">"{r.comment}"</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
