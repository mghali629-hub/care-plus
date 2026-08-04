'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HealthPackage {
  id: number;
  name: string;
  price: string;
  testsCount: number;
  description: string;
}

export default function HealthPackagesPage() {
  const [packages, setPackages] = useState<HealthPackage[]>([]);

  useEffect(() => {
    fetch('/api/health-packages')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPackages(data.packages);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs text-sky-400 font-mono font-bold uppercase tracking-widest block">Preventative Care</span>
          <h1 className="text-4xl font-bold text-white">Executive Health Screening Packages</h1>
          <p className="text-slate-400 text-sm">Whole-body MRI, cardiac stress testing, and comprehensive biomarker diagnostics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <span className="text-3xl font-extrabold text-sky-400">{pkg.price}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono font-bold inline-block">
                  {pkg.testsCount} Comprehensive Biomarker Tests
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">{pkg.description}</p>
              </div>

              <Link href={`/appointment?package=${encodeURIComponent(pkg.name)}`} className="w-full py-4 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider text-center block font-mono">
                Book Executive Package ({pkg.price})
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
