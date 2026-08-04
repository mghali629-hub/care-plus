'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const services = [
  { icon: '❤️', name: 'Cardiology', desc: 'Comprehensive heart care including interventional cardiology, electrophysiology, and cardiac rehabilitation programs.', doctors: 8, wait: '2-3 days' },
  { icon: '🧠', name: 'Neurology', desc: 'Expert diagnosis and treatment of neurological conditions from stroke to epilepsy, Parkinson\'s, and multiple sclerosis.', doctors: 6, wait: '3-5 days' },
  { icon: '🦴', name: 'Orthopedics', desc: 'Advanced joint replacement, sports medicine, and minimally invasive spine surgery by internationally trained specialists.', doctors: 7, wait: '1-2 days' },
  { icon: '👶', name: 'Pediatrics', desc: 'Full-spectrum care for children from neonatal to adolescent — with dedicated child-friendly consultation suites.', doctors: 9, wait: 'Same day' },
  { icon: '👁️', name: 'Ophthalmology', desc: 'LASIK, cataract surgery, glaucoma, retinal diseases, and comprehensive vision correction with state-of-the-art laser systems.', doctors: 4, wait: '2-4 days' },
  { icon: '🦷', name: 'Dental & Maxillofacial', desc: 'Cosmetic dentistry, dental implants, orthodontics, and complex maxillofacial procedures under one roof.', doctors: 5, wait: 'Same day' },
  { icon: '🔬', name: 'Oncology', desc: 'Multidisciplinary cancer care with precision medicine, immunotherapy, targeted therapy, and a dedicated tumour board.', doctors: 6, wait: '1-3 days' },
  { icon: '🤱', name: 'Obstetrics & Gynecology', desc: 'Premium maternity care, fertility treatments (IVF/IUI), and full gynecological services in a private, comfortable environment.', doctors: 8, wait: '1-2 days' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">Our Specialties</span>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mt-3 mb-3">Medical Services & Departments</h1>
          <p className="text-gray-500 max-w-xl mx-auto">World-class specialists across 20+ medical disciplines — committed to delivering exceptional patient outcomes through advanced medicine and compassionate care.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[{ stat: '200+', label: 'Expert Physicians' }, { stat: '20+', label: 'Medical Specialties' }, { stat: '50K+', label: 'Patients Annually' }, { stat: '98%', label: 'Patient Satisfaction' }].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 text-center">
              <div className="text-2xl font-black text-[#2e86de]">{s.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-[#1a3a5c] mb-2 text-lg">{s.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>
              <div className="flex justify-between text-xs border-t border-blue-50 pt-3">
                <span className="text-blue-600 font-semibold">{s.doctors} Specialists</span>
                <span className="text-green-600 font-semibold">⏱ {s.wait}</span>
              </div>
              <a href="/appointment" className="mt-3 block text-center text-xs font-bold text-[#2e86de] hover:text-blue-800 transition-colors">Book Appointment →</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
