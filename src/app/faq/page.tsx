'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const faqs = [
  { q: 'How do I book an appointment online?', a: 'Visit our online Appointment booking portal, select your specialty, doctor, and preferred time slot. You will immediately receive a text message and email confirmation.' },
  { q: 'Does CarePlus accept international health insurance?', a: 'Yes — we accept over 30 international health insurance providers including Bupa Global, AXA Health, Cigna, and Allianz. Bring your membership card on your visit.' },
  { q: 'How can I access my test results and medical records?', a: 'All lab reports and imaging summaries are published to the CarePlus Patient Portal within 24 hours of your visit, where you can download PDFs or share them with your GP.' },
  { q: 'What should I bring to my first appointment?', a: 'Please bring a photo ID (passport or national ID), your insurance card if applicable, and any past medical records or imaging CDs relevant to your condition.' },
  { q: 'Is CarePlus telemedicine service available 24/7?', a: 'Telemedicine consultations with general practitioners are available 24 hours a day, 7 days a week. Specialist consultations can be booked during standard clinic hours.' },
  { q: 'What is the waiting time for emergency care?', a: 'Our Emergency Department operates 24/7 with an average triage time under 8 minutes for critical cases and direct admission pathways to surgery and intensive care.' },
];

export default function CarePlusFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
            PATIENT SUPPORT CENTER
          </span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Find quick answers to common questions about appointments, insurance, telemedicine, and emergency care.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-[#1a3a5c] flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-[#2e86de] text-2xl font-light ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-500 text-xs leading-relaxed border-t border-blue-50 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 p-6 text-center space-y-2">
          <h3 className="font-bold text-[#1a3a5c] text-base">Still Have Questions?</h3>
          <p className="text-gray-500 text-xs">Our patient care coordinators are available 24/7 to assist you.</p>
          <Link href="/contact" className="inline-block text-[#2e86de] font-bold text-xs hover:underline uppercase tracking-wider">
            Contact Support Team →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
