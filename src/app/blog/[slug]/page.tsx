'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function CarePlusBlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <Link href="/blog" className="text-xs text-[#2e86de] font-bold hover:underline mb-4 block">← Back to Medical Blog</Link>
          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">PREVENTIVE CARE</span>
            <span className="text-xs text-gray-400">7 Min Read · Peer Reviewed</span>
          </div>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-2">Understanding Your Annual Health Screening Results</h1>
          <p className="text-gray-400 text-sm">Published: July 28, 2026 · By Dr. Sarah Bennett, MRCP</p>
        </div>

        <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 space-y-6 text-gray-600 text-sm leading-relaxed">
          <p>
            Your annual health screening is one of the most valuable investments you can make in your long-term wellbeing. Understanding the numbers that come back from laboratory diagnostics empowers you to make informed lifestyle choices alongside your physician.
          </p>

          <h2 className="text-xl font-bold text-[#1a3a5c]">1. Complete Blood Count (CBC)</h2>
          <p>
            Your CBC measures red cells, white cells, and platelets. Haemoglobin levels below 12 g/dL in women and 13.5 g/dL in men indicate anaemia, prompting further assessment of ferritin and B12 stores.
          </p>

          <h2 className="text-xl font-bold text-[#1a3a5c]">2. Lipid Panel & Cardiovascular Biomarkers</h2>
          <p>
            Total cholesterol above 5.2 mmol/L is a key cardiovascular indicator. However, evaluating HDL (&gt; 1.2 mmol/L) and LDL (&lt; 2.6 mmol/L) ratios gives a much clearer picture of arterial health than total cholesterol alone.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-xs text-blue-700 space-y-2">
            <strong className="block font-bold">💡 Important Clinical Disclaimer:</strong>
            <p>Always review screening results with your primary care physician. Individual context, family history, and existing medications heavily influence how clinical targets are set.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
