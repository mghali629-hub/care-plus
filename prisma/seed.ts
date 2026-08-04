import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding CarePlus database...');

  await prisma.doctor.deleteMany();
  await prisma.department.deleteMany();
  await prisma.healthPackage.deleteMany();

  await prisma.department.createMany({
    data: [
      {
        name: 'Cardiology & Cardiovascular Surgery',
        slug: 'cardiology',
        head: 'Dr. Sarah Jenkins',
        description: 'State-of-the-art cardiac diagnostics, angioplasty, and heart valve replacement.',
      },
      {
        name: 'Neurology & Neurosurgery',
        slug: 'neurology',
        head: 'Dr. Marcus Vance',
        description: 'Advanced brain imaging, epilepsy management, and stroke rehabilitation.',
      },
    ],
  });

  await prisma.doctor.createMany({
    data: [
      {
        name: 'Dr. Sarah Jenkins',
        specialty: 'Interventional Cardiologist',
        experience: '15 Years',
        hospital: 'CarePlus Main Hospital',
        rating: 4.9,
        reviews: 142,
        bio: 'Over 15 years leading complex coronary interventions at Johns Hopkins Medicine.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
      },
      {
        name: 'Dr. Marcus Vance',
        specialty: 'Chief Neurosurgeon',
        experience: '12 Years',
        hospital: 'CarePlus Main Hospital',
        rating: 4.8,
        reviews: 98,
        bio: 'Pioneer in minimally invasive spinal surgery and brain tumor resection.',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
      },
    ],
  });

  await prisma.healthPackage.createMany({
    data: [
      {
        name: 'Executive Cardiac Wellness',
        price: '$850',
        testsCount: 14,
        description: 'Full ECG, Stress Echo, CT Calcium Scoring, Lipid Panel, Specialist Consultation',
      },
      {
        name: 'Comprehensive Brain & Spine Check',
        price: '$1200',
        testsCount: 18,
        description: 'Brain MRI, Carotid Doppler, EEG, Neuro-Vascular Assessment',
      },
    ],
  });

  console.log('CarePlus database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
