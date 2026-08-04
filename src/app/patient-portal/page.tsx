'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function PatientPortalPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'results' | 'prescriptions'>('overview');

  const appointments = [
    { date: 'Aug 12, 2026', time: '10:30 AM', doctor: 'Dr. Sarah Bennett', specialty: 'Cardiology', status: 'Upcoming' },
    { date: 'Jul 28, 2026', time: '2:00 PM', doctor: 'Dr. James Okoye', specialty: 'General Practice', status: 'Completed' },
    { date: 'Jun 14, 2026', time: '9:00 AM', doctor: 'Dr. Priya Sharma', specialty: 'Dermatology', status: 'Completed' },
  ];
  const results = [
    { test: 'Complete Blood Count (CBC)', date: 'Jul 28, 2026', status: 'Normal', doctor: 'Dr. James Okoye' },
    { test: 'Lipid Panel', date: 'Jul 28, 2026', status: 'Borderline', doctor: 'Dr. James Okoye' },
    { test: 'Thyroid Function (TSH)', date: 'Jun 14, 2026', status: 'Normal', doctor: 'Dr. Priya Sharma' },
  ];
  const prescriptions = [
    { medication: 'Lisinopril 10mg', dose: '1 tablet daily', refills: 3, prescribedBy: 'Dr. James Okoye', expires: 'Dec 2026' },
    { medication: 'Atorvastatin 20mg', dose: '1 tablet nightly', refills: 5, prescribedBy: 'Dr. James Okoye', expires: 'Jan 2027' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 mb-8 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">JD</div>
          <div>
            <h1 className="text-2xl font-bold text-[#1a3a5c]">Welcome back, John Doe</h1>
            <p className="text-gray-500 text-sm">Patient ID: #CP-00487291 · Last visit: Jul 28, 2026</p>
            <div className="flex gap-3 mt-2">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Active Patient</span>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Premium Plan</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Visits', value: '14', icon: '🏥' },
            { label: 'Upcoming Appts', value: '1', icon: '📅' },
            { label: 'Active Prescriptions', value: '2', icon: '💊' },
            { label: 'Pending Results', value: '0', icon: '🧪' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-[#1a3a5c]">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="flex border-b border-blue-100">
            {(['overview', 'appointments', 'results', 'prescriptions'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-sm font-semibold capitalize transition-colors ${activeTab === tab ? 'bg-[#1a3a5c] text-white' : 'text-gray-500 hover:bg-blue-50'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h2 className="font-bold text-[#1a3a5c] text-lg">Health Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4"><p className="text-xs text-gray-500 mb-1">Blood Pressure</p><p className="text-xl font-bold text-[#1a3a5c]">118/76 mmHg</p><p className="text-xs text-green-600">Normal ✓</p></div>
                  <div className="bg-blue-50 rounded-xl p-4"><p className="text-xs text-gray-500 mb-1">Blood Glucose</p><p className="text-xl font-bold text-[#1a3a5c]">94 mg/dL</p><p className="text-xs text-green-600">Normal ✓</p></div>
                  <div className="bg-blue-50 rounded-xl p-4"><p className="text-xs text-gray-500 mb-1">BMI</p><p className="text-xl font-bold text-[#1a3a5c]">23.4</p><p className="text-xs text-green-600">Healthy Weight ✓</p></div>
                  <div className="bg-blue-50 rounded-xl p-4"><p className="text-xs text-gray-500 mb-1">LDL Cholesterol</p><p className="text-xl font-bold text-[#1a3a5c]">138 mg/dL</p><p className="text-xs text-amber-600">Borderline ⚠</p></div>
                </div>
              </div>
            )}
            {activeTab === 'appointments' && (
              <div className="space-y-3">
                {appointments.map((a, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div><p className="font-semibold text-[#1a3a5c]">{a.doctor}</p><p className="text-xs text-gray-500">{a.specialty} · {a.date} at {a.time}</p></div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${a.status === 'Upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>{a.status}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'results' && (
              <div className="space-y-3">
                {results.map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div><p className="font-semibold text-[#1a3a5c]">{r.test}</p><p className="text-xs text-gray-500">{r.date} · {r.doctor}</p></div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${r.status === 'Normal' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{r.status}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'prescriptions' && (
              <div className="space-y-3">
                {prescriptions.map((p, i) => (
                  <div key={i} className="p-4 bg-blue-50 rounded-xl flex items-start justify-between">
                    <div><p className="font-semibold text-[#1a3a5c]">{p.medication}</p><p className="text-xs text-gray-500">{p.dose} · {p.refills} refills remaining · Expires {p.expires}</p><p className="text-xs text-gray-400">Prescribed by {p.prescribedBy}</p></div>
                    <button className="bg-[#2e86de] text-white text-xs px-4 py-2 rounded-lg whitespace-nowrap">Refill Now</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
