export interface Service {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  capabilities: string[];
  accent: 'brand' | 'amber' | 'lilac' | 'mint';
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    summary:
      'Custom websites and web-based applications for businesses, institutions, and government agencies.',
    detail:
      'We design and build web platforms that hold up under real operational load — role-based dashboards, public-facing portals, and internal systems that replace spreadsheets and paper workflows.',
    capabilities: [
      'Information systems & admin dashboards',
      'Public portals and landing sites',
      'Role-based access control',
      'Reporting, export & audit trails',
    ],
    accent: 'brand',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    summary:
      'Android and iOS applications with modern UI/UX and robust functionality.',
    detail:
      'Field teams need software that works on a phone, often on a weak connection. We build mobile apps for attendance, inspection, data capture, and coordination — with offline tolerance and GPS validation where it matters.',
    capabilities: [
      'Native & cross-platform Android / iOS',
      'Offline-tolerant data capture',
      'GPS & geo-tagging validation',
      'QR scanning and field tooling',
    ],
    accent: 'amber',
  },
  {
    slug: 'iot-solutions',
    title: 'IoT Solutions',
    summary:
      'Smart systems using sensors, devices, and cloud platforms for real-time monitoring and automation.',
    detail:
      'When the data comes from the physical world, the system has to be built differently. We connect devices and sensors to cloud pipelines that stay reliable, observable, and cheap to run at scale.',
    capabilities: [
      'Sensor & device integration',
      'Real-time telemetry pipelines',
      'Monitoring dashboards & alerting',
      'Automation rules and triggers',
    ],
    accent: 'mint',
  },
  {
    slug: 'system-integration',
    title: 'System Integration',
    summary:
      'API and software integration ensuring interoperability between platforms and data sources.',
    detail:
      'Most organisations do not need another system — they need the ones they already have to talk to each other. We map the data, build the interfaces, and make migrations survivable.',
    capabilities: [
      'API design & implementation',
      'Legacy system bridging',
      'Data migration & reconciliation',
      'Single sign-on and identity',
    ],
    accent: 'lilac',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Listen & map',
    body: 'We start inside your process, not inside a codebase. Workshops, stakeholder interviews, and a written map of how work actually flows today.',
  },
  {
    number: '02',
    title: 'Design the system',
    body: 'Architecture, data model, and interface design in parallel — so the thing we scope is the thing that can actually be built and maintained.',
  },
  {
    number: '03',
    title: 'Build in the open',
    body: 'Short iterations with a staging environment you can log into from week one. No six-month black box, no surprise reveal.',
  },
  {
    number: '04',
    title: 'Deploy & stay',
    body: 'Rollout, training for your team, and ongoing support. We are still maintaining systems we shipped years ago.',
  },
];
