'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('CarePlus Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 text-2xl font-bold mb-4">
        ⚠️
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">CarePlus System Exception</h2>
      <p className="text-slate-400 text-xs max-w-md mb-6">
        An unexpected network or application state error occurred while processing your request. Patient data integrity remains fully protected.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
      >
        Retry Operation
      </button>
    </div>
  );
}
