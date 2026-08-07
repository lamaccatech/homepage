export interface Person {
  name: string;
  role: string;
  initials: string;
}

export const management: Person[] = [
  { name: 'Munawir Mukhtar Lutfi', role: 'Chief Executive Officer', initials: 'MM' },
  { name: 'Muhammad Dzul Arsyil', role: 'Chief Technology Officer', initials: 'DA' },
  { name: 'Maikal Azhar', role: 'HR & Operational Manager', initials: 'MA' },
  { name: 'Novi Rismanto', role: 'Business Development', initials: 'NR' },
  { name: 'Eric Fathurrahman', role: 'Finance Manager', initials: 'EF' },
];

export const engineers: Person[] = [
  { name: 'Nana Sukarna', role: 'Fullstack Developer', initials: 'NS' },
  { name: 'Bimo Eka Saputra', role: 'Mobile Engineer', initials: 'BS' },
  { name: 'Nadella Dwi S.', role: 'Fullstack Developer', initials: 'ND' },
  { name: 'Irfan Zafar', role: 'Fullstack Developer', initials: 'IZ' },
  { name: 'Rensi Meila', role: 'UI/UX Designer', initials: 'RM' },
];

export interface CoreValue {
  title: string;
  body: string;
}

export const coreValues: CoreValue[] = [
  {
    title: 'Innovation',
    body: 'We look for the solution that did not exist yet, rather than the one that is easiest to copy.',
  },
  {
    title: 'Integrity',
    body: 'Honest estimates, honest status, honest invoices. Especially when the news is inconvenient.',
  },
  {
    title: 'Growth',
    body: 'Every project should leave both our client and our team more capable than it found them.',
  },
  {
    title: 'Collaboration',
    body: 'We work inside your team, not across a wall from it. Access, context, and shared decisions.',
  },
  {
    title: 'Excellence',
    body: 'Quality is not a final phase. It is the standard applied to each commit along the way.',
  },
];

export const mission: string[] = [
  'To provide professional IT services that meet client needs.',
  'To build sustainable partnerships based on trust and results.',
  'To create value and measurable impact for every stakeholder.',
  'To support digital transformation across sectors through scalable technology.',
  'To develop high-quality and innovative digital products.',
];

export const vision =
  'To become a leading technology company that delivers innovative, reliable, and impactful digital solutions for a smarter future.';

/** Client organisations, grouped for the trust marquee. */
export const clients: string[] = [
  'Mabes Polri',
  'Korlantas Polri',
  'Pertamina Patra Logistik',
  'BPKH RI',
  'Partai Amanat Nasional',
  'Partai Golkar',
  'PKB',
  'PKS',
  'Partai Demokrat',
  'LSI Denny JA',
  'Patra Badak Arun Solusi',
  'Pemprov Kalimantan Utara',
  'BKAD Kalimantan Utara',
  'Dishub Samarinda',
  'Dishub Paser',
  'MN KAHMI',
  'Perdatin Jaya',
  'PT Advansia Indotani',
  'Advansia Sdn Bhd',
  'PT Sekaiichi Dwiputra Service',
  'PT Prima Nusantara Services',
  'Kemenpora RI',
  'Bhakti Husada',
  'UIN Alauddin Makassar',
  'Pariwisata Aceh',
  'Puspoll Indonesia',
  'Badan Penghubung Kaltara',
  'BSNP Law Firm',
  'Apotek Wahdah',
  'Multi Logistics',
  'Institut Peradaban',
  'Wakafyuk.id',
  'Bantusesama.id',
  'Journaltime.co',
];

export const techStack: string[] = [
  'TypeScript',
  'Vue.js',
  'Laravel',
  'PHP',
  'Node.js',
  'Flutter',
  'Tailwind CSS',
  'MySQL',
  'Elasticsearch',
  'Firebase',
  'Cloud Firestore',
  'Google Cloud',
  'AWS',
  'GitHub',
  'Algolia',
  'Midtrans',
  'Agora',
];
