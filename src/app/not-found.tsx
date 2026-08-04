'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-20 h-20 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 text-3xl font-black mb-6">
          404
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 text-sm max-w-md mb-8">
          The medical resource, department, or patient record you requested could not be located on the CarePlus network.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/appointment"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-sky-400 font-bold rounded-xl text-xs border border-slate-700 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
