'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { HeartPulse, Brain, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Department {
  id: number;
  name: string;
  slug: string;
  head: string;
  description: string;
}

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    fetch('/api/departments')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setDepartments(data.departments);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs text-sky-400 font-mono font-bold uppercase tracking-widest block">Clinical Excellence Centers</span>
          <h1 className="text-4xl font-bold text-white">Specialized Medical Institutes</h1>
          <p className="text-slate-400 text-sm">Robotic surgery, cardiovascular catheterization, and multi-specialty trauma centers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div key={dept.id} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono font-bold">
                  Chief: {dept.head}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{dept.description}</p>
              <Link href={`/appointment?department=${dept.slug}`} className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:underline uppercase">
                Schedule Consult in {dept.name} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
