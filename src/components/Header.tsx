'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartPulse } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/departments/cardiology', label: 'Cardiology' },
    { href: '/departments/neurology', label: 'Neurology' },
    { href: '/departments/pediatrics', label: 'Pediatrics' },
    { href: '/departments/orthopedics', label: 'Orthopedics' },
    { href: '/appointment', label: 'Appointment' },
    { href: '/patient-portal', label: 'Portal' },
    { href: '/services', label: 'Services' },
    { href: '/health-packages', label: 'Checkups' },
    { href: '/emergency', label: 'Emergency' },
    { href: '/insurance', label: 'Insurance' },
    { href: '/telemedicine', label: 'Virtual Care' },
    { href: '/pharmacy', label: 'Pharmacy' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/blog', label: 'Health Blog' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F172A]/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-sky-500/20">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">CarePlus</span>
            <span className="text-[9px] tracking-[0.2em] text-sky-400 font-semibold uppercase block -mt-1">Medical Center</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={	ransition-colors whitespace-nowrap py-1 \}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-72 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/appointment"
          className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow-lg transition-all shrink-0"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#090D16] border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <HeartPulse className="w-5 h-5 text-sky-400" /> CAREPLUS MEDICAL
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Board-certified healthcare excellence, state-of-the-art diagnostic imaging, and 24/7 patient support.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Departments</h4>
          <ul className="space-y-2">
            <li><Link href="/departments/cardiology" className="hover:text-sky-400">Cardiology Center</Link></li>
            <li><Link href="/departments/neurology" className="hover:text-sky-400">Neurology & Brain Institute</Link></li>
            <li><Link href="/departments/pediatrics" className="hover:text-sky-400">Pediatric Care</Link></li>
            <li><Link href="/departments/orthopedics" className="hover:text-sky-400">Sports & Orthopedics</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Patient Services</h4>
          <ul className="space-y-2">
            <li><Link href="/patient-portal" className="hover:text-sky-400">Patient Portal Login</Link></li>
            <li><Link href="/health-packages" className="hover:text-sky-400">Wellness Checkups</Link></li>
            <li><Link href="/telemedicine" className="hover:text-sky-400">Virtual Consultation</Link></li>
            <li><Link href="/insurance" className="hover:text-sky-400">Accepted Insurance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">24/7 Emergency Line</h4>
          <p className="text-slate-400">Immediate Trauma Response:</p>
          <p className="text-sky-400 font-bold mt-1 text-sm">+1 (800) 911-CARE</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-sky-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
