import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    user: {
      id: 'usr_careplus_9921',
      name: 'Dr. Sarah Jenkins',
      email: 's.jenkins@careplus.clinic',
      role: 'DOCTOR',
      department: 'Cardiology',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body || {};

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Authentication successful',
      token: 'cp_jwt_sec_884920194821',
      user: {
        id: 'usr_careplus_1029',
        email,
        name: email.split('@')[0],
        role: 'PATIENT',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
