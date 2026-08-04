'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

const drugs = [
  { name: 'Amoxicillin 500mg', category: 'Antibiotic', price: '$12.50', stock: 'In Stock', description: 'Broad-spectrum penicillin antibiotic for bacterial infections.' },
  { name: 'Lisinopril 10mg', category: 'ACE Inhibitor', price: '$8.99', stock: 'In Stock', description: 'Used for high blood pressure and heart failure treatment.' },
  { name: 'Metformin 850mg', category: 'Antidiabetic', price: '$6.75', stock: 'In Stock', description: 'First-line medication for type 2 diabetes management.' },
  { name: 'Atorvastatin 20mg', category: 'Statin', price: '$15.00', stock: 'In Stock', description: 'Cholesterol-lowering drug for cardiovascular protection.' },
  { name: 'Omeprazole 20mg', category: 'PPI', price: '$9.20', stock: 'In Stock', description: 'Proton pump inhibitor for acid reflux and ulcers.' },
  { name: 'Paracetamol 500mg', category: 'Analgesic', price: '$4.50', stock: 'In Stock', description: 'Common pain reliever and fever reducer.' },
  { name: 'Salbutamol Inhaler', category: 'Bronchodilator', price: '$22.00', stock: 'Limited', description: 'Relieves bronchospasm in asthma and COPD.' },
  { name: 'Amlodipine 5mg', category: 'Calcium Blocker', price: '$11.00', stock: 'In Stock', description: 'Calcium channel blocker for hypertension and angina.' },
];

export default function PharmacyPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Antibiotic', 'ACE Inhibitor', 'Antidiabetic', 'Statin', 'PPI', 'Analgesic', 'Bronchodilator', 'Calcium Blocker'];

  const filtered = drugs.filter(d =>
    (category === 'All' || d.category === category) &&
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">In-House Pharmacy</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">CarePlus Pharmacy</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Prescription medications, OTC drugs, and specialty compounding — dispensed by certified clinical pharmacists.</p>
        </div>

        {/* Hours & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: '🕗', title: 'Opening Hours', detail: 'Mon–Fri: 8AM–9PM\nSat–Sun: 9AM–6PM' },
            { icon: '📞', title: 'Pharmacy Helpline', detail: '+1 (800) 277-3927\nPrescription Refills: Ext. 2' },
            { icon: '💊', title: 'Services', detail: 'Compounding · Vaccinations\nMedication Reviews · Delivery' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 flex gap-4 items-start">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-[#1a3a5c] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm whitespace-pre-line">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text" placeholder="Search medications..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
          <select value={category} onChange={e => setCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* Drug Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((drug, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-lg">{drug.category}</span>
                <span className={`text-xs font-semibold ${drug.stock === 'In Stock' ? 'text-green-600' : 'text-amber-500'}`}>{drug.stock}</span>
              </div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">{drug.name}</h3>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">{drug.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-700 font-bold text-lg">{drug.price}</span>
                <button className="bg-[#1a3a5c] text-white text-xs px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors">Request</button>
              </div>
            </div>
          ))}
        </div>

        {/* Prescription Upload */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-blue-100 text-center">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">Upload Your Prescription</h2>
          <p className="text-gray-500 mb-6">Our pharmacists will verify and prepare your medication within 2 hours.</p>
          <label className="inline-flex items-center gap-2 bg-[#2e86de] hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl cursor-pointer transition-colors">
            <span>📎</span> Upload Prescription
            <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
          </label>
        </div>
      </main>
      <Footer />
    </div>
  );
}
