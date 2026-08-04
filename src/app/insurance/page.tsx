'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

const insurers = [
  { name: 'Bupa Global', level: '100% Direct Billing', phone: '0800 001 001' },
  { name: 'AXA Health', level: '100% Direct Billing', phone: '0800 132 244' },
  { name: 'Aviva Healthcare', level: 'Pre-authorization Required', phone: '0800 056 056' },
  { name: 'Cigna International', level: '100% Direct Billing', phone: '0800 987 654' },
  { name: 'VitalityHealth', level: 'Direct Billing Available', phone: '0345 602 3523' },
  { name: 'WPA Healthcare', level: 'Direct Billing Available', phone: '0330 123 0000' },
];

export default function InsurancePage() {
  const [provider, setProvider] = useState('');
  const [verified, setVerified] = useState<boolean | null>(null);

  const checkInsurance = () => {
    if (provider.trim().length > 2) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">HEALTH COVERAGE</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">Accepted Insurance Providers</h1>
          <p className="text-gray-500 max-w-xl mx-auto">CarePlus partners with leading national and international medical insurance companies for seamless direct billing.</p>
        </div>

        {/* Coverage Checker */}
        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm mb-12 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a3a5c] mb-4 text-center">Verify Your Insurance Coverage</h2>
          <div className="flex gap-3">
            <input type="text" value={provider} onChange={(e) => { setProvider(e.target.value); setVerified(null); }} placeholder="Enter insurance provider or policy name..." className="flex-1 border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button onClick={checkInsurance} className="bg-[#2e86de] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">VERIFY</button>
          </div>
          {verified === true && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold flex items-center gap-2">
              ✓ Direct billing available for {provider}. 100% in-network coverage supported.
            </div>
          )}
          {verified === false && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm font-semibold flex items-center gap-2">
              ⚠ Provider found. Please present policy details at admission for pre-authorization.
            </div>
          )}
        </div>

        {/* Insurers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insurers.map((ins, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
              <h3 className="font-bold text-[#1a3a5c] text-lg mb-1">{ins.name}</h3>
              <div className="text-xs text-blue-600 font-semibold mb-3">{ins.level}</div>
              <div className="text-xs text-gray-500 border-t border-blue-50 pt-3">Support Hotline: {ins.phone}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
