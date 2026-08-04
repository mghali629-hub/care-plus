import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://careplus.clinic'),
  title: {
    default: 'CarePlus Medical Center | World-Class Healthcare & Diagnostics',
    template: '%s | CarePlus Clinic',
  },
  description: 'CarePlus is a premier medical center delivering board-certified cardiology, neurology, pediatrics, and orthopedic care with telehealth integration.',
  keywords: ['Healthcare', 'Medical Clinic', 'Cardiology', 'Neurology', 'Telehealth', 'Doctors Appointment', 'Health Checkup'],
  authors: [{ name: 'CarePlus Health Network' }],
  openGraph: {
    title: 'CarePlus Medical Center | Advanced Patient Care',
    description: 'Book online consultations with leading medical specialists and access comprehensive executive health packages.',
    url: 'https://careplus.clinic',
    siteName: 'CarePlus Health Network',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'CarePlus Medical Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarePlus Medical Center',
    description: 'Premier medical care and online doctor consultations.',
    creator: '@careplus_health',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0F172A] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
