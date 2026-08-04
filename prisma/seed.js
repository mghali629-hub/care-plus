const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding CarePlus DB...');

  await prisma.doctor.deleteMany();
  await prisma.department.deleteMany();
  await prisma.healthPackage.deleteMany();

  const doctors = [
    { name: 'Dr. Elena Rostova', specialty: 'Cardiology', experience: '16 Years Experience', hospital: 'CarePlus Heart Institute', rating: 4.9, reviews: 128, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop', bio: 'Board-certified cardiovascular surgeon specializing in minimally invasive valve repairs.' },
    { name: 'Dr. Marcus Vance', specialty: 'Neurology', experience: '20 Years Experience', hospital: 'CarePlus Brain Center', rating: 5.0, reviews: 94, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop', bio: 'Leading neuro-oncologist pioneer in robotic-assisted deep brain stimulation.' }
  ];

  for (const d of doctors) {
    await prisma.doctor.create({ data: d });
  }

  await prisma.department.createMany({
    data: [
      { name: 'Cardiology Institute', slug: 'cardiology', head: 'Dr. Elena Rostova', description: 'Advanced cardiac catheterization, arrhythmia treatment, and heart health diagnostics.' },
      { name: 'Neurology & Brain Center', slug: 'neurology', head: 'Dr. Marcus Vance', description: 'Comprehensive care for stroke, epilepsy, neuro-degenerative disorders, and spine surgery.' }
    ]
  });

  await prisma.healthPackage.createMany({
    data: [
      { name: 'Executive Whole-Body Screening', price: '$1,850', testsCount: 48, description: 'Complete MRI, cardiac stress test, full blood panel, and 1-on-1 specialist consult.' }
    ]
  });

  console.log('CarePlus DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
