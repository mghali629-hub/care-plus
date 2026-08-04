import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { doctorName, patientName, phone, date, time } = body;

    const appointment = await prisma.appointment.create({
      data: {
        doctorName,
        patientName,
        phone,
        date,
        time,
      },
    });

    return NextResponse.json({ success: true, appointment });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
