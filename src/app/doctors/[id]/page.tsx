import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const doctors = await prisma.doctor.findMany({ select: { id: true } });
  return doctors.map((d) => ({ id: String(d.id) }));
}

export default async function DoctorDetailPage({ params }: { params: { id: string } }) {
  const doctor = await prisma.doctor.findUnique({ where: { id: Number(params.id) } });
  if (!doctor) notFound();

  const expertise = ['Diagnostic Excellence', 'Minimally Invasive Surgery', 'Patient-Centered Care', 'Research & Innovation', 'Multidisciplinary Collaboration'];
  const education = [
    { degree: 'MD — Medical Degree', school: 'Harvard Medical School', year: '2005' },
    { degree: 'Residency — ' + doctor.specialty, school: 'Johns Hopkins Hospital', year: '2009' },
    { degree: 'Fellowship — Advanced ' + doctor.specialty, school: 'Mayo Clinic', year: '2011' },
    { degree: 'Board Certification', school: 'American Board of Medical Specialties', year: '2012' },
  ];

  return (
    <main style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4f8 100%)', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #0d2137 100%)', padding: '40px 5% 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/doctors" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', letterSpacing: '1px' }}>← Our Doctors</Link>
        </div>
      </header>

      {/* Profile Card */}
      <div style={{ maxWidth: '1100px', margin: '-60px auto 0', padding: '0 5%' }}>
        <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start', marginBottom: '30px' }}>
          <div>
            <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a3a5c, #2e86de)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#fff', fontWeight: '700', border: '4px solid #e8f4f8' }}>
              {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          </div>
          <div>
            <span style={{ background: '#e8f4ff', color: '#1a3a5c', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{doctor.specialty}</span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '700', color: '#1a3a5c', margin: '12px 0 4px' }}>Dr. {doctor.name}</h1>
            <p style={{ color: '#666', margin: '0 0 20px' }}>{doctor.hospital}</p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { icon: '⭐', label: 'Rating', value: `${doctor.rating}/5` },
                { icon: '💬', label: 'Reviews', value: `${doctor.reviews}+` },
                { icon: '🎓', label: 'Experience', value: doctor.experience },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: 'center', background: '#f7fbff', borderRadius: '12px', padding: '14px 20px' }}>
                  <div style={{ fontSize: '1.4rem' }}>{s.icon}</div>
                  <div style={{ fontWeight: '700', color: '#1a3a5c', fontSize: '1.1rem' }}>{s.value}</div>
                  <div style={{ color: '#888', fontSize: '12px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '30px', paddingBottom: '60px' }}>
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Bio */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '1.3rem', fontWeight: '700', marginBottom: '16px' }}>About Dr. {doctor.name}</h2>
              <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem' }}>{doctor.bio}</p>
              <p style={{ color: '#555', lineHeight: '1.9', marginTop: '16px' }}>
                Dr. {doctor.name} is a distinguished specialist in {doctor.specialty} with {doctor.experience} of clinical experience. Known for combining cutting-edge medical techniques with compassionate patient care, delivering exceptional outcomes across thousands of cases.
              </p>
            </div>

            {/* Education */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Education & Training</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {education.map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px', background: '#f7fbff', borderRadius: '10px', borderLeft: '3px solid #2e86de' }}>
                    <span style={{ color: '#2e86de', fontSize: '1.3rem', marginTop: '2px' }}>🎓</span>
                    <div>
                      <div style={{ fontWeight: '700', color: '#1a3a5c', fontSize: '0.95rem' }}>{e.degree}</div>
                      <div style={{ color: '#666', fontSize: '14px' }}>{e.school}</div>
                      <div style={{ color: '#999', fontSize: '12px' }}>{e.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Areas of Expertise</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {expertise.map((e) => (
                  <div key={e} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#f0f9ff', borderRadius: '10px' }}>
                    <span style={{ color: '#2e86de', fontWeight: '700' }}>✓</span>
                    <span style={{ color: '#444', fontSize: '0.9rem' }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Appointment Card */}
          <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: '1px solid rgba(46,134,222,0.2)' }}>
              <h3 style={{ color: '#1a3a5c', fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px' }}>Book Appointment</h3>
              <p style={{ color: '#888', fontSize: '13px', marginBottom: '24px' }}>Available Mon–Fri, 9am–5pm</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input defaultValue={`Dr. ${doctor.name}`} readOnly style={{ background: '#f0f9ff', border: '1px solid #d0e8ff', borderRadius: '10px', padding: '14px 16px', color: '#1a3a5c', fontWeight: '600', fontSize: '14px', outline: 'none' }} />
                <input placeholder="Your Full Name" style={{ background: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '14px 16px', fontSize: '14px', outline: 'none', color: '#333' }} />
                <input placeholder="Phone Number" style={{ background: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '14px 16px', fontSize: '14px', outline: 'none', color: '#333' }} />
                <input type="date" style={{ background: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '14px 16px', fontSize: '14px', outline: 'none', color: '#333' }} />
                <select style={{ background: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '14px 16px', fontSize: '14px', outline: 'none', color: '#333' }}>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                </select>
                <Link href="/appointment" style={{ display: 'block', background: 'linear-gradient(135deg, #2e86de, #1a3a5c)', color: '#fff', textAlign: 'center', padding: '16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', letterSpacing: '0.5px' }}>
                  CONFIRM APPOINTMENT
                </Link>
              </form>
              <div style={{ marginTop: '20px', padding: '16px', background: '#f0f9ff', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ color: '#1a3a5c', fontWeight: '600', fontSize: '14px', margin: '0 0 4px' }}>📞 Emergency Line</p>
                <p style={{ color: '#2e86de', fontWeight: '700', margin: 0 }}>+1 (800) CARE-PLUS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
