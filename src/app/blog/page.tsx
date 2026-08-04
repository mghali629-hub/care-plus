'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'health-screening-guide', title: 'Understanding Your Annual Health Screening Results', date: 'July 28, 2026', author: 'Dr. Sarah Bennett, MRCP', category: 'PREVENTIVE CARE', excerpt: 'A comprehensive clinical guide to interpreting your CBC, lipid panel, HbA1c, thyroid panel, and liver enzyme test values.' },
  { slug: 'heart-health-habits', title: 'Heart Health: The 5 Daily Habits Cardiologists Swear By', date: 'July 14, 2026', author: 'Dr. Marcus Vance, FACC', category: 'CARDIOLOGY', excerpt: 'Evidence-based lifestyle interventions proven to reduce cardiovascular risk factors by over 40% in clinical trials.' },
  { slug: 'mri-scan-guide', title: 'What to Expect from Your First MRI Scan', date: 'June 30, 2026', author: 'Dr. Priya Sharma, MD', category: 'DIAGNOSTICS', excerpt: 'Step-by-step preparation tips, claustrophobia management strategies, and how to understand your diagnostic imaging report.' },
];

export default function CarePlusBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
            HEALTH JOURNAL & INSIGHTS
          </span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-2">CarePlus Medical Blog</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Evidence-based medical articles written and peer-reviewed by our clinical specialists.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map(p => (
            <div key={p.slug} className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 space-y-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{p.category}</span>
                <span className="text-xs text-gray-400">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1a3a5c]">{p.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="text-[#2e86de] font-bold text-xs hover:underline uppercase tracking-wider">
                  Read Full Clinical Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-blue-100 p-8 text-center space-y-3">
          <h3 className="text-xl font-bold text-[#1a3a5c]">Need Personal Medical Advice?</h3>
          <p className="text-gray-500 text-xs max-w-md mx-auto">Consult with our world-class specialists via 24/7 Telemedicine or in-clinic appointment.</p>
          <Link href="/appointment" className="inline-block bg-[#1a3a5c] hover:bg-[#2e86de] text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors">
            Book Appointment Now
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
