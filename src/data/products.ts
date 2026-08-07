import simpanShot from '../assets/projects/simpan.png';
import pantauRelawanShot from '../assets/projects/pantau-relawan.png';
import brainplusShot from '../assets/projects/brainplus.png';
import wakafyukShot from '../assets/projects/wakafyuk.png';

export interface Product {
  slug: string;
  name: string;
  category: string;
  platforms: ('Web App' | 'Mobile App')[];
  summary: string;
  features: string[];
  accent: 'brand' | 'amber' | 'lilac' | 'mint';
  /** Interface collage, where we have one to show. */
  image?: ImageMetadata;
}

/** In-house platforms Lamacca has built and continues to develop. */
export const products: Product[] = [
  {
    slug: 'e-partai',
    name: 'e-Partai',
    category: 'Political organisation',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'A centralised, secure party management system that digitalises membership, streamlines internal administration, and raises electoral readiness — with real-time data from national down to local levels. Deployed as SIMPAN for Partai Amanat Nasional.',
    features: [
      'Member registration & management',
      'e-KTA digital membership card',
      'Legislative candidate registration',
      'Party structure management',
      'Witness (saksi) management',
      'Activity & campaign coordination',
      'Data dashboard & reporting',
      'Role-based access control',
    ],
    accent: 'brand',
    image: simpanShot,
  },
  {
    slug: 'pantau-relawan',
    name: 'Pantau Relawan',
    category: 'Campaign operations',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'Campaign management for legislative and regional candidates — organising, monitoring, and maximising a volunteer network in real time, from central command to grassroots field operatives. Deployed with PAN, Golkar, PKB, PKS, Demokrat, and LSI Denny JA.',
    features: [
      'Volunteer management',
      'Witness (saksi) management',
      'Campaign activity monitoring',
      'Real count submission',
      'Voter survey & aspirations collection',
      'Live dashboard',
      'Task assignment & reminders',
      'Internal communication tools',
    ],
    accent: 'amber',
    image: pantauRelawanShot,
  },
  {
    slug: 'brainplus',
    name: 'Brainplus',
    category: 'Education technology',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'An edtech platform helping high school students explore their interests, talents, and potential — combining psychometric testing with predictive modelling to guide academic and career decisions.',
    features: [
      'Interest & aptitude tests',
      'Major & university recommendation',
      'Student profile dashboard',
      'Educational content & career articles',
      'University & program database',
      'Career path planning',
      'Online counselling & community forum',
    ],
    accent: 'lilac',
    image: brainplusShot,
  },
  {
    slug: 'crowdfunding',
    name: 'Crowdfunding',
    category: 'Fundraising',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'A digital fundraising platform for foundations, communities, and individuals to organise, manage, and promote donation campaigns with transparency and ease. Live with Wakafyuk.id and Bantusesama.id.',
    features: [
      'Campaign management',
      'Donor management',
      'Foundation / admin dashboard',
      'Online payments integration',
      'Donation progress tracking',
      'Digital receipts & reports',
      'News & campaign updates',
      'Donor forum & comments',
    ],
    accent: 'mint',
    image: wakafyukShot,
  },
  {
    slug: 'cleaning-service-management',
    name: 'Cleaning Service Management',
    category: 'Facility operations',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'A platform to manage and monitor cleaning operations — scheduling, task assignment, attendance, and quality control backed by real-time data and mobile integration. Deployed with PT Sekaiichi Dwiputra Service.',
    features: [
      'Cleaning task scheduler',
      'Staff management',
      'QR code attendance & area check-in',
      'Work order management',
      'Inspection & quality control',
      'Complaint & feedback handling',
      'Inventory management',
      'Real-time dashboard & analytics',
    ],
    accent: 'brand',
  },
  {
    slug: 'media-online',
    name: 'Media Online',
    category: 'Publishing',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'A publishing platform for news outlets — articles, video, audio, and images delivered across web and Android, with push notifications and social distribution built in. Live with Journaltime.co.',
    features: [
      'News content management',
      'Video news',
      'Push notifications',
      'Social media integration',
      'Search',
      'Category & tag taxonomy',
      'Reader analytics',
    ],
    accent: 'lilac',
  },
  {
    slug: 'simpel',
    name: 'SIMPEL',
    category: 'Public infrastructure',
    platforms: ['Web App', 'Mobile App'],
    summary:
      'Sistem Informasi Perlengkapan Jalan — manage, monitor, and optimise the inventory, condition, and maintenance of road equipment: traffic signs, markings, APILL signals, and safety barriers.',
    features: [
      'Road equipment database',
      'GIS mapping integration',
      'QR code labelling & scanning',
      'Condition monitoring & inspection log',
      'Maintenance & repair scheduling',
      'Complaint & feedback handling',
      'Inventory management',
      'Real-time dashboard & analytics',
    ],
    accent: 'amber',
  },
];
