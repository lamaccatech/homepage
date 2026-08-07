/**
 * Privacy policies for the ADV Live apps we build and operate for the Advansia
 * group. These pages are the privacy-policy URL on the Google Play and App
 * Store listings, so the text has to stay true to what the app actually does —
 * see `~/code/advlive` for the schema, permissions, and infrastructure each
 * claim below is drawn from.
 *
 * The two policies are ~90% identical, so the shared body lives in
 * `buildPolicy()` and only the genuinely country-divergent parts (statutory
 * identifiers, data residency, applicable law, regulator) are passed in.
 */

export interface PolicyGroup {
  title: string;
  body?: string;
  items?: string[];
}

export interface PolicySection {
  id: string;
  heading: string;
  body?: string[];
  list?: string[];
  groups?: PolicyGroup[];
  /** Callout rendered as a highlighted aside under the section. */
  note?: string;
}

export type PolicyLang = 'en' | 'id';

export interface Policy {
  slug: string;
  app: string;
  country: string;
  /**
   * Language the policy body is written in. A policy that also exists inside
   * its own app is published here in the same language it appears there — a
   * fallback that says something different is not a fallback.
   */
  lang: PolicyLang;
  androidPackage: string;
  iosBundleId: string;
  controller: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  effective: string;
  updated: string;
  /** Meta description + hero lead. */
  summary: string;
  highlights: { label: string; body: string }[];
  sections: PolicySection[];
  /** Slug of a sibling policy to cross-link, for apps shipped per market. */
  related?: string;
  /**
   * Number the sections in the heading and contents rail. Off for policies
   * whose headings already carry the source document's own numbering, which
   * must not be renumbered here.
   */
  autoNumber?: boolean;
}

/** UI chrome around the policy body, so a page reads in one language throughout. */
export const labels: Record<
  PolicyLang,
  {
    eyebrow: string;
    contents: string;
    effective: string;
    updated: string;
    relatedEyebrow: string;
    relatedHeading: (country: string) => string;
    relatedCta: (app: string) => string;
  }
> = {
  en: {
    eyebrow: 'Privacy policy',
    contents: 'Contents',
    effective: 'Effective',
    updated: 'Last updated',
    relatedEyebrow: 'Other markets',
    relatedHeading: (country) => `Looking for the ${country} app?`,
    relatedCta: (app) => `Read the ${app} policy`,
  },
  id: {
    eyebrow: 'Kebijakan privasi',
    contents: 'Daftar Isi',
    effective: 'Berlaku sejak',
    updated: 'Terakhir diperbarui',
    relatedEyebrow: 'Aplikasi lain',
    relatedHeading: (country) => `Mencari aplikasi ${country}?`,
    relatedCta: (app) => `Baca kebijakan ${app}`,
  },
};

/** The developer that operates the app on the controller's behalf. */
const processor = {
  name: 'PT Lamacca Kreatif Solusi',
  address:
    'Jl. SMA 14 No. 32, RT/RW 05/04, Cililitan, Kramat Jati, Jakarta Timur, DKI Jakarta 13640, Indonesia',
  email: 'info@lamacca.co.id',
};

interface PolicyConfig {
  slug: string;
  app: string;
  country: string;
  countryAdjective: string;
  androidPackage: string;
  iosBundleId: string;
  controller: Policy['controller'];
  effective: string;
  updated: string;
  /** Statutory identifiers collected in this country, as a sentence fragment. */
  statutoryIdentifiers: string;
  /** Bullet describing the national identity number used here. */
  nationalIdItem: string;
  /** Where the production database, files, and API run. */
  hosting: string;
  /** Cross-border transfer paragraph, tailored to the country's rules. */
  transfer: string[];
  /** Governing data-protection statute, spelled out in full on first use. */
  law: string;
  lawShort: string;
  /** Lawful bases, phrased in the statute's own language. */
  bases: string[];
  /** Supervisory authority a complaint can be escalated to. */
  regulator: string;
  /** Unit that field-visit land area is recorded in. */
  landUnit: string;
}

function buildPolicy(config: PolicyConfig): Policy {
  const {
    slug,
    app,
    country,
    countryAdjective,
    androidPackage,
    iosBundleId,
    controller,
    effective,
    updated,
    statutoryIdentifiers,
    nationalIdItem,
    hosting,
    transfer,
    law,
    lawShort,
    bases,
    regulator,
    landUnit,
  } = config;

  return {
    slug,
    app,
    country,
    lang: 'en',
    androidPackage,
    iosBundleId,
    controller,
    effective,
    updated,
    summary: `How ${controller.name} collects, uses, stores, and protects personal data in the ${app} mobile app and its companion web dashboard.`,

    highlights: [
      {
        label: 'A workplace app, not a public one',
        body: `${app} is an internal tool for ${controller.name} staff and authorised partners. Accounts are issued by the company — you cannot sign up from the app.`,
      },
      {
        label: 'No advertising, no data sale',
        body: 'We do not sell or rent personal data, we do not share it with data brokers, and the app contains no advertising or ad-tracking technology.',
      },
      {
        label: 'No third-party analytics',
        body: 'The app carries no analytics, attribution, or crash-reporting SDK. Nothing about your usage is sent to a third-party measurement service.',
      },
      {
        label: 'Location only when you act',
        body: 'The app reads your location only while it is open and you are recording attendance or a field activity. It never tracks you in the background.',
      },
    ],

    sections: [
      {
        id: 'scope',
        heading: 'What this policy covers',
        body: [
          `This policy explains how personal data is handled in <strong>${app}</strong>, the ${countryAdjective} workforce and field-operations application operated by ${controller.name}.`,
          'It applies to the mobile app and to the companion web dashboard used by administrators, supervisors, and back-office staff. Together these are referred to below as “the app”.',
        ],
        groups: [
          {
            title: 'The app this policy applies to',
            items: [
              `App name: ${app}`,
              `Google Play package name: ${androidPackage}`,
              `Apple bundle identifier: ${iosBundleId}`,
              `Store publisher: ${processor.name}, which publishes the app to Google Play and the App Store on behalf of ${controller.name}`,
              `Data controller: ${controller.name}`,
            ],
          },
        ],
        note: `Other Advansia group applications, and the public ${controller.name} website, are covered by their own notices. This policy speaks only for ${app}.`,
      },

      {
        id: 'roles',
        heading: 'Who is responsible for your data',
        body: [
          `<strong>${controller.name}</strong> is the data controller. It decides why and how personal data in the app is processed, and it is the organisation you should contact about your data.`,
          `<strong>${processor.name}</strong> is the appointed developer and data processor. It builds, hosts, and maintains the app under contract, and processes personal data only on documented instructions from ${controller.name}. It does not use the data for its own purposes.`,
          `${processor.name} also distributes the app under its own Google Play and App Store developer accounts on ${controller.name}’s behalf, which is why this policy is published on the lamacca.com domain. Distributing the app does not make ${processor.name} the controller of the data inside it.`,
          `Google LLC and its affiliates provide the underlying cloud infrastructure (Firebase and Google Cloud Platform) as a sub-processor.`,
        ],
        note: `If you are a member of staff, the quickest route for anything about your own data is your HR department or system administrator. The contact details at the end of this policy are for people outside those internal channels, and for formal correspondence with ${controller.name} as the controller.`,
      },

      {
        id: 'accounts',
        heading: 'How accounts are created',
        body: [
          `${app} has no public registration. Accounts are created and assigned by ${controller.name} administrators for employees, contractors, and authorised partners, and each account is linked to a work email address.`,
          'Because accounts are issued as part of your working relationship with the company, most of the personal data in the app is entered or verified by the company’s HR and operations teams rather than by you.',
        ],
      },

      {
        id: 'collect',
        heading: 'Personal data we process',
        body: [
          'The categories below reflect the fields the app actually stores. Not every field applies to every user — what is recorded depends on your role and on what your employer requires.',
        ],
        groups: [
          {
            title: 'Account and identity',
            items: [
              'Account identifier issued by Firebase Authentication',
              'Work email address and password credential',
              'Full name and profile photograph',
              'Mobile telephone number',
              'Assigned roles, permissions, department, position, organisational unit, and work area',
            ],
          },
          {
            title: 'Employment record',
            items: [
              'Employment status, start date, end date, and resignation date',
              'Department, job title, and reporting line',
              'Previous employment history: employer, position, department, and dates',
              'Education history: level, institution, field of study, and dates',
              'Uploaded employment documents such as contracts, certificates, and identity documents',
            ],
          },
          {
            title: 'Personal details and statutory identifiers',
            body: `Collected so that ${controller.name} can meet its obligations as your employer.`,
            items: [
              'Place and date of birth, gender, and religion',
              nationalIdItem,
              ...statutoryIdentifiers
                .split('|')
                .map((s) => s.trim())
                .filter(Boolean),
              'Residential and identity-document addresses',
            ],
          },
          {
            title: 'Payroll and financial details',
            items: [
              'Bank name, account number, and account holder name, used for salary and reimbursement payments',
            ],
          },
          {
            title: 'Family and emergency contacts',
            body: 'Where you provide details of another person, please make sure they know their information is being recorded and why.',
            items: [
              'Dependants and family members: name, relationship, date of birth, national identity number, gender, religion, and occupation',
              'Emergency contact: name, relationship, telephone number, and address',
            ],
          },
          {
            title: 'Attendance, working time, and location',
            items: [
              'Clock-in and clock-out records with date and time',
              'GPS coordinates and the resolved street address at the moment you clock in or out',
              'Photographs and files you attach to an attendance record',
              'Work sessions, including work duration, lateness, and early departure',
              'Overtime requests and time-off requests, with reasons and supporting attachments',
            ],
          },
          {
            title: 'Field activity and sales records',
            items: [
              'Visit and activity reports, including category, date, notes, and outcome',
              'GPS coordinates and street address of the place where an activity is recorded',
              `Details captured during a visit, such as crop, land area in ${landUnit}, attendance numbers, and training or meeting particulars`,
              'Photographs and documents attached to an activity report',
              'Sales entries, orders, stock movements, and transaction records',
            ],
          },
          {
            title: 'Business contacts you record',
            body: 'Staff use the app to maintain the company’s distribution network. Records about these people are business-contact data held by the company.',
            items: [
              `Farmers: name, nickname, gender, date of birth, telephone number, photograph, crops grown, and land area in ${landUnit}`,
              'Retailers and dealers: business name, owner name, telephone number, address, and banking details used for settlement',
              'Notes and feedback recorded about a visit or a relationship',
            ],
          },
          {
            title: 'Device and technical data',
            items: [
              'Device model, operating system version, and app version',
              'Network connectivity status, used to decide whether the app can submit a record',
              'Server logs containing the request time, the account making the request, and errors encountered',
            ],
          },
        ],
      },

      {
        id: 'permissions',
        heading: 'Device permissions the app requests',
        body: [
          'The app asks for a permission at the point it is needed, and explains why. You may decline or later revoke any of them in your device settings — the feature that depends on it will stop working, but the rest of the app will continue to function.',
        ],
        groups: [
          {
            title: 'Camera',
            body: 'To photograph attendance evidence, field activities, products, and documents, and to scan codes. Photographs are uploaded only when you submit the record they belong to.',
          },
          {
            title: 'Microphone',
            body: 'Requested together with the camera because video capture records audio. The app does not record audio on its own.',
          },
          {
            title: 'Photos and media',
            body: 'To let you attach an existing photograph or file to a report, and to save a photograph you have taken. The app reads only the items you select.',
          },
          {
            title: 'Location (while using the app)',
            body: 'To verify that attendance and field activities are recorded at the expected place. See the next section.',
          },
          {
            title: 'Files and documents',
            body: 'To attach documents such as contracts, certificates, and receipts to a record.',
          },
          {
            title: 'Network state',
            body: 'To detect whether you are online, so the app can warn you before you lose an unsaved report.',
          },
        ],
      },

      {
        id: 'location',
        heading: 'How the app uses location',
        body: [
          'Location is central to attendance verification, so we want to be precise about it.',
        ],
        list: [
          'The app requests <strong>foreground location only</strong>. It does not request background location and cannot read your position when it is closed or in the background.',
          'While an attendance or activity screen is open, the app reads your position so it can show your distance from the assigned work location and confirm you are inside the permitted radius.',
          'What is <strong>stored</strong> is a single latitude, longitude, and resolved address attached to the record you submit — a point in time, not a continuous trail.',
          'Location data is visible to your supervisors, your HR administrators, and other staff whose role grants them visibility over your organisational unit.',
          'If you decline the location permission, you will not be able to submit location-verified attendance or activity records, and may need to ask an administrator to record them manually.',
        ],
        note: 'The app performs no continuous, background, or after-hours location tracking, and location is never used for advertising or shared with advertising networks.',
      },

      {
        id: 'purposes',
        heading: 'Why we process personal data',
        list: [
          'To authenticate you and enforce the access rights attached to your role',
          'To administer the employment relationship, including HR records, payroll preparation, and statutory reporting',
          'To record and verify attendance, working hours, overtime, and leave',
          'To plan, assign, and review field work, sales activity, and distribution coverage',
          'To maintain the company’s records of farmers, retailers, and dealers',
          'To produce management reports, dashboards, and performance measures',
          'To keep the service secure, investigate misuse, and diagnose faults',
          'To meet legal, tax, employment, and regulatory obligations, and to establish or defend legal claims',
        ],
      },

      {
        id: 'basis',
        heading: 'Our lawful basis',
        body: [
          `We process personal data in accordance with ${law} (“${lawShort}”) and other applicable ${countryAdjective} law. Depending on the data, we rely on one or more of the following.`,
        ],
        list: bases,
      },

      {
        id: 'thirdparty',
        heading: 'If your data was entered by someone else',
        body: [
          'Farmers, retailers, dealers, family members, and emergency contacts do not have app accounts, but their details may be recorded in the app by a member of staff.',
          `If your personal data is held in ${app} and you are not a user, you have the same rights described below. Contact ${controller.name} using the details at the end of this policy and we will locate, correct, or delete your record subject to any legal obligation to keep it.`,
        ],
      },

      {
        id: 'sharing',
        heading: 'Who we share personal data with',
        body: [
          'We do not sell, rent, or trade personal data. We do not share it for advertising, profiling, or any purpose unrelated to running the app. Data is disclosed only as follows.',
        ],
        groups: [
          {
            title: 'Inside the company',
            body: 'Your records are visible to colleagues whose role grants access — typically your supervisors, your organisational unit’s management chain, HR, finance, and system administrators. Access is enforced by role-based permissions.',
          },
          {
            title: 'Our developer',
            body: `${processor.name} accesses personal data only as needed to operate, support, and repair the service, under a contract that limits it to our instructions and binds it to confidentiality.`,
          },
          {
            title: 'Cloud providers',
            body: 'Google, through Firebase Authentication, Firebase Cloud Storage, Firebase Data Connect, Cloud SQL, Cloud Run, and Google Maps Platform. Google processes this data as our infrastructure provider and not for its own purposes.',
          },
          {
            title: 'Professional advisers and authorities',
            body: 'Auditors, legal advisers, and government bodies where disclosure is required by law, ordered by a competent authority, or necessary to establish or defend a legal claim.',
          },
          {
            title: 'Corporate transactions',
            body: 'A successor entity, in the event of a reorganisation, merger, or transfer of the business, subject to this policy continuing to apply.',
          },
        ],
      },

      {
        id: 'storage',
        heading: 'Where personal data is stored',
        body: [hosting, ...transfer],
      },

      {
        id: 'retention',
        heading: 'How long we keep personal data',
        body: [
          'We keep personal data only for as long as the purpose it was collected for requires, and for as long as the law obliges us to.',
        ],
        list: [
          'Employment and HR records are kept for the duration of your engagement and afterwards for as long as employment, tax, and social-security law requires.',
          'Attendance, overtime, and leave records are kept for the periods required by employment and payroll law.',
          'Field activity, sales, and transaction records are kept as company business records while they remain commercially relevant.',
          'Business-contact records for farmers, retailers, and dealers are kept while the commercial relationship is active, and removed once it ends and no legal obligation requires their retention.',
          'Server logs are kept for a short operational period and then discarded.',
        ],
        note: 'When a retention period ends, data is deleted or irreversibly anonymised. Records marked as deleted in the app are removed from active use immediately and purged from backups on the ordinary backup cycle.',
      },

      {
        id: 'security',
        heading: 'How we protect personal data',
        list: [
          'All traffic between the app and our servers is encrypted in transit using TLS.',
          'Data is encrypted at rest by the underlying Google Cloud storage and database services.',
          'Authentication is handled by Firebase Authentication; the app never stores your password.',
          'Access is governed by role-based permissions and by organisational-unit visibility rules, so staff see only the records their role requires.',
          'Administrative access to production systems is restricted, logged, and limited to named personnel.',
          'We keep the app and its dependencies patched, and we review changes before they are released.',
        ],
        note: 'No system can be guaranteed perfectly secure. If a personal-data breach occurs that is likely to cause harm, we will notify the affected individuals and the supervisory authority within the period the law requires.',
      },

      {
        id: 'rights',
        heading: 'Your rights',
        body: [
          `Subject to the conditions and exceptions in ${lawShort}, you may ask us to:`,
        ],
        list: [
          'Confirm whether we hold personal data about you, and give you access to it',
          'Correct data that is inaccurate, out of date, or incomplete',
          'Delete data we no longer have a lawful reason to keep',
          'Provide your data in a structured, commonly used format, or transfer it to another controller where that is technically feasible',
          'Restrict or object to a particular use of your data',
          'Withdraw a consent you previously gave, without affecting processing already carried out',
        ],
        note: `Staff should raise these requests with their HR department or system administrator, who handles them internally. If you are no longer with the company, or your data was recorded in the app by a member of staff, write to ${controller.name} at ${controller.email} instead. We will respond within the period required by law. If you are not satisfied with our response, you may lodge a complaint with ${regulator}.`,
      },

      {
        id: 'deletion',
        heading: 'Account and data deletion',
        body: [
          `${app} accounts are issued by the company, not self-registered, so they are closed by ${controller.name} rather than from inside the app. Accounts are normally closed automatically when your engagement ends.`,
          '<strong>If you are a member of staff, speak to your HR department or your system administrator.</strong> They can close your account and action a deletion request directly — you do not need to write to anyone outside the company.',
          'Whichever route you use, this is what happens:',
        ],
        list: [
          'Your identity is verified against the company’s own records.',
          'The account is disabled and its access to the app is revoked.',
          'Personal data that we are not required to retain — including your profile, photographs, contact details, and attachments — is deleted or anonymised.',
          'Records we are legally obliged to keep, such as payroll, tax, and statutory employment records, are retained for the period the law prescribes and then deleted.',
          'The outcome is confirmed back to you.',
        ],
        groups: [
          {
            title: 'If you cannot reach HR or an administrator',
            body: `Former staff who have lost access to internal channels, and people whose data was entered by staff — farmers, retailers, dealers, family members, and emergency contacts — can write to ${controller.name} at <strong>${controller.email}</strong>. State your full name and, if you had one, the email address on the account. This route exists so that everyone whose data is in the app has a way to reach us, not as the normal path for current employees.`,
          },
        ],
        note: 'Uninstalling the app does not close your account or delete data already recorded. Use one of the routes above.',
      },

      {
        id: 'children',
        heading: 'Children',
        body: [
          'The app is a workplace tool intended for adults in an employment or contractual relationship with the company. It is not directed at children, and we do not knowingly create accounts for them.',
          'Where a dependant under the age of majority is recorded as a family member for benefits or statutory purposes, that data is provided by the employee and is limited to what the purpose requires. If you believe a child’s data has been recorded without a proper basis, contact us and we will remove it.',
        ],
      },

      {
        id: 'changes',
        heading: 'Changes to this policy',
        body: [
          'We update this policy when the app changes or when the law requires it. The effective date at the top of the page always reflects the current version.',
          'Where a change materially affects how your personal data is used, we will notify users through the app, by email, or through the company’s usual internal channels before it takes effect.',
        ],
      },

      {
        id: 'contact',
        heading: 'Contact us',
        body: [
          'Staff should raise day-to-day questions about their own data with their HR department or system administrator, who can act on them directly. For formal correspondence, or if you have no internal contact, use the details below.',
        ],
        groups: [
          {
            title: controller.name,
            body: 'Data controller',
            items: [controller.address, controller.email, controller.phone],
          },
          {
            title: processor.name,
            body: 'Appointed developer and data processor — technical enquiries only',
            items: [processor.address, processor.email],
          },
        ],
      },
    ],
  };
}

const indonesia = buildPolicy({
  slug: 'adv-live-id',
  app: 'ADV Live',
  country: 'Indonesia',
  countryAdjective: 'Indonesian',
  androidPackage: 'id.co.advansia.mobile',
  iosBundleId: 'id.co.advansia.mobile',
  controller: {
    name: 'PT Advansia Indotani',
    address:
      'Foresta Business Loft 3 Unit 17, Jl. BSD Boulevard Utara, Lengkong Kulon, Kec. Pagedangan, Tangerang, Banten, Indonesia',
    email: 'indo@advansia.com',
    phone: '+62 21 505 602 60',
  },
  effective: '7 August 2026',
  updated: '7 August 2026',
  nationalIdItem:
    'Nomor Induk Kependudukan (NIK), the national identity number shown on your KTP',
  statutoryIdentifiers: [
    'Nomor Kartu Keluarga (KK), your family card number',
    'Nomor Pokok Wajib Pajak (NPWP), your taxpayer identification number',
    'BPJS Kesehatan and BPJS Ketenagakerjaan membership numbers',
    'Marital status, dependant status (PTKP), and blood type',
  ].join(' | '),
  hosting:
    'Personal data in the production system is stored on Google Cloud Platform and Firebase infrastructure located in the <strong>Jakarta region (asia-southeast2), Indonesia</strong>. This covers the application database, uploaded files and photographs, and the application servers.',
  transfer: [
    'Some supporting services — including authentication and administrative tooling — are operated by Google as global services and may involve processing outside Indonesia. Where that happens, the transfer is protected by Google’s contractual data-protection commitments and by our processing agreements, consistent with the cross-border transfer requirements of the UU PDP.',
  ],
  law: 'Law No. 27 of 2022 on Personal Data Protection',
  lawShort: 'UU PDP',
  bases: [
    '<strong>Performance of a contract</strong> — your employment or service agreement, and the administration of it',
    '<strong>Compliance with a legal obligation</strong> — employment, tax, and social-security law, including BPJS and PPh 21 reporting',
    '<strong>Legitimate interests</strong> — securing the service, preventing misuse, managing field operations, and reporting on business performance',
    '<strong>Consent</strong> — for anything that falls outside the above; where we rely on consent, you may withdraw it at any time',
  ],
  regulator:
    'the Indonesian personal data protection supervisory authority under the Ministry of Communication and Digital Affairs (Kementerian Komunikasi dan Digital)',
  landUnit: 'hectares',
});

const malaysia = buildPolicy({
  slug: 'adv-live-my',
  app: 'ADV Live MY',
  country: 'Malaysia',
  countryAdjective: 'Malaysian',
  androidPackage: 'com.advansia.advlive.my',
  iosBundleId: 'com.advansia.advlive.my',
  controller: {
    name: 'Advansia Sdn Bhd',
    address:
      'No. 210, Jalan Sungai Pinang 5/7, Taman Perindustrian Pulau Indah Fasa II, 42920 Port Klang, Selangor, Malaysia',
    email: 'info@advansia.com',
    phone: '+603 3101 5993',
  },
  effective: '7 August 2026',
  updated: '7 August 2026',
  nationalIdItem:
    'NRIC number as shown on your MyKad, or passport number for non-Malaysian staff',
  statutoryIdentifiers: '',
  hosting:
    'Personal data in the production system is stored on Google Cloud Platform and Firebase infrastructure located in the <strong>Singapore region (asia-southeast1)</strong>. This covers the application database, uploaded files and photographs, and the application servers.',
  transfer: [
    'This means personal data collected in Malaysia is <strong>transferred to and stored in Singapore</strong>. We rely on this transfer being necessary for the performance of your contract with us and for our legitimate business operations, and we require our processors to apply protection at least equivalent to that required by the PDPA. Google’s cloud services are covered by its contractual data-protection commitments, and our developer is bound by a written processing agreement.',
    'Some supporting services — including authentication and administrative tooling — are operated by Google as global services and may involve processing in other jurisdictions on the same contractual basis.',
    'Our developer, PT Lamacca Kreatif Solusi, is established in Indonesia, so support and maintenance access to the system takes place from Indonesia under that same agreement.',
  ],
  law: 'the Personal Data Protection Act 2010 (Act 709), as amended',
  lawShort: 'PDPA',
  bases: [
    '<strong>Performance of a contract</strong> — your employment or service agreement, and the administration of it',
    '<strong>Compliance with a legal obligation</strong> — employment, tax, and statutory reporting requirements in Malaysia, including EPF, SOCSO, and EIS where applicable',
    '<strong>Legitimate interests</strong> — securing the service, preventing misuse, managing field operations, and reporting on business performance',
    '<strong>Consent</strong> — for anything that falls outside the above, including sensitive personal data; where we rely on consent, you may withdraw it at any time',
  ],
  regulator:
    'the Personal Data Protection Commissioner, Jabatan Perlindungan Data Peribadi (JPDP) Malaysia',
  landUnit: 'acres',
});

indonesia.related = malaysia.slug;
malaysia.related = indonesia.slug;

/**
 * SDS — reproduced from the policy already published inside the app at
 * app.sds.co.id (`apps/sekaiichi/admin/layers/landing/pages/privacy-policy`
 * in the lamaccatech monorepo). This copy exists so the store listings keep a
 * reachable policy URL if that domain is unavailable, so it stays in Indonesian
 * and keeps the original effective date: a fallback that differs in language or
 * substance from the policy it stands in for is not a fallback.
 *
 * Only the presentation is ours. Do not add or reword claims here without
 * making the same change at the source.
 */
const sds: Policy = {
  slug: 'sds',
  app: 'SDS',
  country: 'Indonesia',
  lang: 'id',
  androidPackage: 'com.sekaiichiservice.mobile',
  iosBundleId: 'com.sekaiichiservice.mobile',
  controller: {
    name: 'PT Sekaiichi Dwiputra Service',
    address:
      'Jl. Mampang Prapatan XIV No. 33a, RT.11/RW.4, Tegal Parang, Kec. Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12790, Indonesia',
    email: 'sekaiichi@sds.co.id',
    phone: '+62 821 2316 2600 (WhatsApp)',
  },
  effective: '1 Januari 2025',
  updated: '1 Januari 2025',
  summary:
    'Bagaimana PT Sekaiichi Dwiputra Service mengumpulkan, menggunakan, mengungkapkan, dan melindungi data pribadi Anda di aplikasi SDS.',
  // Headings keep the published document's own 1–9 numbering.
  autoNumber: false,

  highlights: [
    {
      label: 'Aplikasi internal, bukan aplikasi publik',
      body: 'SDS dibangun sebagai aplikasi layanan internal yang ditujukan khusus untuk karyawan aktif dan calon karyawan di lingkungan PT Sekaiichi Dwiputra Service.',
    },
    {
      label: 'Tidak dijual, tidak disewakan',
      body: 'Kami tidak akan pernah menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran atau komersial lainnya.',
    },
    {
      label: 'Akses terbatas',
      body: 'Data dan dokumen Anda hanya dapat diakses oleh Anda sebagai pemilik data dan oleh personel administrasi/HRD yang berwenang.',
    },
    {
      label: 'Izin sesuai kebutuhan fitur',
      body: 'Izin lokasi, kamera, dan penyimpanan diminta hanya untuk fitur absensi, verifikasi foto, dan pengunggahan dokumen kepegawaian.',
    },
  ],

  sections: [
    {
      id: 'tentang',
      heading: 'Tentang kebijakan ini',
      body: [
        'PT Sekaiichi Dwiputra Service (“kami”, “milik kami”, atau “kita”) membangun aplikasi SDS sebagai aplikasi layanan internal yang ditujukan khusus untuk karyawan aktif dan calon karyawan (“Anda” atau “Pengguna”) di lingkungan PT Sekaiichi Dwiputra Service.',
        'Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler kami, SDS. Harap baca kebijakan privasi ini dengan saksama. Jika Anda tidak setuju dengan ketentuan kebijakan privasi ini, mohon untuk tidak mengakses aplikasi ini.',
        'Kami berkomitmen untuk melindungi privasi data Anda sebagai prioritas utama.',
      ],
      groups: [
        {
          title: 'Aplikasi yang dicakup kebijakan ini',
          items: [
            'Nama aplikasi: SDS',
            'Nama paket Google Play: com.sekaiichiservice.mobile',
            'Pengidentifikasi bundel Apple: com.sekaiichiservice.mobile',
            'Pengendali data: PT Sekaiichi Dwiputra Service',
            'Pengembang dan pemroses data: PT Lamacca Kreatif Solusi',
          ],
        },
      ],
      note: 'Halaman ini memuat kebijakan yang sama dengan yang diterbitkan di dalam aplikasi pada app.sds.co.id. Kebijakan tersebut diterbitkan di dua tempat agar tetap dapat diakses apabila salah satu alamat sedang tidak tersedia.',
    },

    {
      id: 'informasi',
      heading: '1. Informasi yang Kami Kumpulkan',
      body: [
        'Kami dapat mengumpulkan informasi tentang Anda dalam berbagai cara. Informasi yang kami kumpulkan melalui Aplikasi bergantung pada konten dan materi yang Anda gunakan, dan mencakup:',
      ],
      groups: [
        {
          title: 'A. Data Pribadi yang Anda Berikan Secara Langsung',
          body: 'Kami mengumpulkan informasi identitas pribadi yang Anda berikan secara sukarela saat Anda melengkapi profil, mendaftar, atau menggunakan fitur-fitur tertentu dalam Aplikasi. Informasi ini krusial untuk keperluan administrasi kepegawaian dan kepatuhan hukum. Informasi tersebut meliputi:',
          items: [
            'Data identitas diri (Nama Lengkap, dll.)',
            'Pindaian atau foto Kartu Tanda Penduduk (KTP)',
            'Pindaian atau foto Kartu Keluarga (KK)',
            'Curriculum Vitae (CV)',
            'Pindaian atau foto Nomor Pokok Wajib Pajak (NPWP)',
            'Pindaian atau foto Ijazah terakhir',
            'Pindaian atau foto Surat Keterangan Catatan Kepolisian (SKCK)',
            'Pindaian atau foto Surat Pengalaman Kerja (Paklaring)',
            'Informasi lain yang relevan dengan proses kepegawaian.',
          ],
        },
        {
          title: 'B. Data yang Dikumpulkan Secara Otomatis Saat Menggunakan Aplikasi',
          items: [
            '<strong>Informasi Lokasi:</strong> Untuk menggunakan fitur absensi, kami akan meminta izin untuk mengakses informasi berbasis lokasi dari perangkat seluler Anda saat Anda menggunakan Aplikasi, untuk mencatat lokasi kehadiran Anda.',
            '<strong>Akses Kamera:</strong> Kami akan meminta izin untuk mengakses kamera perangkat Anda untuk memungkinkan Anda mengambil foto selfie saat melakukan absensi dan mengambil foto untuk laporan progres kerja.',
            '<strong>Akses Galeri/Penyimpanan (Storage):</strong> Kami akan meminta izin untuk mengakses foto dari galeri/penyimpanan perangkat Anda untuk memungkinkan Anda mengunggah dokumen pendukung dan foto progres kerja yang sudah ada di perangkat Anda.',
          ],
        },
      ],
    },

    {
      id: 'penggunaan',
      heading: '2. Bagaimana Kami Menggunakan Informasi Anda',
      body: [
        'Memiliki informasi yang akurat tentang Anda memungkinkan kami untuk memberikan pengalaman yang lancar, efisien, dan disesuaikan. Secara khusus, kami menggunakan informasi yang dikumpulkan tentang Anda melalui Aplikasi untuk:',
      ],
      list: [
        '<strong>Verifikasi Identitas:</strong> Memastikan identitas karyawan dan calon karyawan untuk keperluan administrasi Sumber Daya Manusia (SDM).',
        '<strong>Manajemen Absensi:</strong> Mengelola dan mencatat kehadiran karyawan secara akurat menggunakan data lokasi dan verifikasi foto selfie.',
        '<strong>Pelaporan Progres Kerja:</strong> Memfasilitasi karyawan (khususnya CSO atau SPV) untuk mengunggah bukti hasil pekerjaan mereka.',
        '<strong>Administrasi Kepegawaian:</strong> Mengelola data karyawan, memproses pengajuan cuti, izin, atau laporan ketidakhadiran lainnya.',
        '<strong>Penyimpanan Dokumen:</strong> Menyimpan dokumen kepegawaian Anda secara aman di server kami, yang dapat Anda akses kembali melalui profil Anda di aplikasi.',
        '<strong>Komunikasi Internal:</strong> Menghubungi Anda mengenai urusan pekerjaan, pembaruan aplikasi, atau pengumuman perusahaan.',
      ],
    },

    {
      id: 'pembagian',
      heading: '3. Pembagian dan Pengungkapan Informasi',
      body: [
        'Informasi Anda dijaga kerahasiaannya dan hanya akan dibagikan dalam lingkup berikut:',
      ],
      list: [
        '<strong>Pihak Internal Perusahaan:</strong> Informasi pribadi dan dokumen Anda hanya dapat diakses oleh Anda sebagai pemilik data dan personel administrasi/HRD PT Sekaiichi Dwiputra Service yang berwenang untuk tujuan manajemen kepegawaian.',
        '<strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum, panggilan pengadilan, atau proses hukum lainnya, kami dapat membagikan informasi Anda sebagai tanggapan terhadap permintaan dari otoritas publik.',
      ],
      note: 'Kami <strong>tidak akan pernah</strong> menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran atau komersial lainnya.',
    },

    {
      id: 'keamanan',
      heading: '4. Keamanan Data',
      body: [
        'Kami menggunakan langkah-langkah keamanan administratif, teknis, dan fisik yang wajar untuk membantu melindungi informasi pribadi Anda. Semua data yang Anda unggah disimpan di server yang aman.',
        'Meskipun kami telah mengambil langkah-langkah yang wajar untuk mengamankan informasi pribadi yang Anda berikan kepada kami, perlu diketahui bahwa terlepas dari upaya kami, tidak ada langkah-langkah keamanan yang sempurna atau tidak dapat ditembus, dan tidak ada metode transmisi data yang dapat dijamin terhadap penyadapan atau penyalahgunaan lainnya.',
      ],
    },

    {
      id: 'penyimpanan',
      heading: '5. Penyimpanan Data',
      body: [
        'Kami akan menyimpan informasi pribadi Anda selama masa kerja Anda di PT Sekaiichi Dwiputra Service dan untuk periode setelahnya sesuai dengan yang diwajibkan oleh peraturan perundang-undangan yang berlaku di Indonesia mengenai ketenagakerjaan dan pengarsipan data.',
      ],
    },

    {
      id: 'hak',
      heading: '6. Hak Anda sebagai Pengguna',
      body: ['Anda memiliki hak-hak berikut terkait data pribadi Anda:'],
      list: [
        '<strong>Hak Akses:</strong> Anda berhak untuk melihat data pribadi dan dokumen yang telah Anda unggah melalui profil Anda di dalam aplikasi.',
        '<strong>Hak Koreksi:</strong> Anda dapat meminta untuk memperbarui atau mengoreksi data Anda yang tidak akurat dengan menghubungi admin HRD.',
      ],
      note: 'Untuk permintaan penutupan akun dan penghapusan data, hubungi admin HRD Anda. Akun SDS dibuat oleh perusahaan, bukan didaftarkan sendiri, sehingga penutupan akun dilakukan melalui HRD. Menghapus aplikasi dari perangkat tidak menutup akun Anda atau menghapus data yang sudah tercatat.',
    },

    {
      id: 'izin',
      heading: '7. Penjelasan Izin Akses Aplikasi (Permissions)',
      body: [
        'Untuk memastikan semua fitur berfungsi dengan baik, aplikasi SDS akan meminta izin akses berikut:',
      ],
      groups: [
        {
          title: 'Lokasi (android.permission.ACCESS_FINE_LOCATION)',
          body: 'Tujuan: Dibutuhkan untuk fitur absensi guna mencatat lokasi akurat saat Anda melakukan absensi masuk dan pulang kerja.',
        },
        {
          title: 'Kamera (android.permission.CAMERA)',
          body: 'Tujuan: Dibutuhkan untuk (1) mengambil foto selfie sebagai bukti verifikasi saat absensi dan (2) mengambil foto progres pekerjaan untuk diunggah.',
        },
        {
          title: 'Penyimpanan/Galeri (android.permission.READ_EXTERNAL_STORAGE)',
          body: 'Tujuan: Dibutuhkan untuk memungkinkan Anda memilih dan mengunggah dokumen-dokumen pendukung (KTP, KK, CV, dll.) dan foto progres kerja dari galeri ponsel Anda.',
        },
      ],
      note: 'Aplikasi hanya mengakses lokasi saat Aplikasi sedang digunakan. Aplikasi tidak meminta izin lokasi latar belakang (ACCESS_BACKGROUND_LOCATION) dan tidak melacak posisi Anda ketika Aplikasi ditutup.',
    },

    {
      id: 'perubahan',
      heading: '8. Perubahan pada Kebijakan Privasi Ini',
      body: [
        'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi yang diperbarui akan ditandai dengan “Tanggal Efektif” yang diperbarui dan akan berlaku segera setelah dapat diakses. Kami menganjurkan Anda untuk meninjau kebijakan privasi ini secara berkala agar tetap mendapat informasi tentang bagaimana kami melindungi informasi Anda.',
      ],
    },

    {
      id: 'kontak',
      heading: '9. Hubungi Kami',
      body: [
        'Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Privasi ini, silakan hubungi kami di:',
      ],
      groups: [
        {
          title: 'PT Sekaiichi Dwiputra Service',
          body: 'Pengendali data',
          items: [
            'Jl. Mampang Prapatan XIV No. 33a, RT.11/RW.4, Tegal Parang, Kec. Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12790',
            'sekaiichi@sds.co.id',
            '082123162600 (WhatsApp)',
          ],
        },
        {
          title: processor.name,
          body: 'Pengembang dan pemroses data — hanya untuk pertanyaan teknis',
          items: [processor.address, processor.email],
        },
      ],
    },
  ],
};

/**
 * simPAN — written from the app itself (`~/code/e-partai`, `apps/mobile`), not
 * adapted from an existing document. In Indonesian because the audience is PAN
 * members nationwide, many of whom the codebase itself describes as "relawan
 * yang masih gagap teknologi"; UU PDP transparency is not served by an English
 * notice here.
 *
 * Two disclosures below are unusual and load-bearing, so do not trim them
 * without checking the code first:
 *   - KTP photographs are sent to Google Gemini (`gemini-2.5-flash`) for OCR
 *     — libs/api/identity/src/lib/identity.service.ts.
 *   - NIKs are matched against the DPT via an external lookup service
 *     — apps/mobile/src/api/dpt.ts.
 *
 * CONFIRM BEFORE PUBLISHING: the DPP PAN contact block is taken from KPU party
 * registration data and PAN's public listings, not from the client. Verify it
 * with the party — this is the address members are told to send rights and
 * deletion requests to, so it has to be one that is actually monitored.
 */
const simpan: Policy = {
  slug: 'simpan',
  app: 'simPAN',
  country: 'Indonesia',
  lang: 'id',
  androidPackage: 'or.id.pan.simpan.simpan',
  iosBundleId: 'or.id.pan.simpan',
  controller: {
    name: 'Partai Amanat Nasional (DPP PAN)',
    address: 'Jl. Senopati No. 113, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190, Indonesia',
    email: 'dpp.partaiamanatnasional@gmail.com',
    phone: '+62 21 7884 8469',
  },
  effective: '7 Agustus 2026',
  updated: '7 Agustus 2026',
  summary:
    'Bagaimana Partai Amanat Nasional mengumpulkan, menggunakan, membagikan, dan melindungi data pribadi Anda di aplikasi simPAN.',

  highlights: [
    {
      label: 'Data keanggotaan partai ditangani secara khusus',
      body: 'Keanggotaan Anda di simPAN menunjukkan afiliasi politik Anda. Data ini hanya dapat diakses oleh pengurus partai yang berwenang sesuai tingkat wilayahnya, dan tidak pernah dibagikan untuk tujuan komersial.',
    },
    {
      label: 'Aplikasi tidak meminta akses lokasi',
      body: 'simPAN tidak meminta izin lokasi sama sekali. Aplikasi tidak dapat membaca posisi Anda, baik saat digunakan maupun saat ditutup.',
    },
    {
      label: 'Foto KTP diproses oleh layanan AI Google',
      body: 'Untuk mempercepat pengisian formulir, foto KTP Anda dikirim ke layanan Google Gemini agar datanya terbaca otomatis. Anda dapat memilih mengisi formulir secara manual.',
    },
    {
      label: 'Tanpa iklan, tanpa penjualan data',
      body: 'Kami tidak menjual atau menyewakan data pribadi Anda, tidak membagikannya kepada pialang data, dan aplikasi ini tidak memuat iklan maupun teknologi pelacakan iklan.',
    },
  ],

  sections: [
    {
      id: 'tentang',
      heading: 'Tentang kebijakan ini',
      body: [
        'Kebijakan Privasi ini menjelaskan bagaimana data pribadi diperlakukan di dalam <strong>simPAN</strong>, aplikasi keanggotaan dan kaderisasi Partai Amanat Nasional.',
        'Kebijakan ini berlaku untuk aplikasi seluler simPAN serta sistem pendukungnya, termasuk dasbor administrasi yang digunakan pengurus partai untuk memverifikasi dan mengelola data keanggotaan. Selanjutnya keduanya disebut “Aplikasi”.',
      ],
      groups: [
        {
          title: 'Aplikasi yang dicakup kebijakan ini',
          items: [
            'Nama aplikasi: simPAN',
            'Nama paket Google Play: or.id.pan.simpan.simpan',
            'Pengidentifikasi bundel Apple: or.id.pan.simpan',
            'Pengendali data: Partai Amanat Nasional (DPP PAN)',
            'Pengembang dan pemroses data: PT Lamacca Kreatif Solusi',
          ],
        },
      ],
    },

    {
      id: 'tanggung-jawab',
      heading: 'Siapa yang bertanggung jawab atas data Anda',
      body: [
        '<strong>Partai Amanat Nasional</strong> adalah pengendali data pribadi. Partai menentukan tujuan dan cara pemrosesan data di dalam Aplikasi, dan merupakan pihak yang Anda hubungi terkait data Anda.',
        '<strong>PT Lamacca Kreatif Solusi</strong> adalah pengembang sekaligus pemroses data pribadi. Perusahaan ini membangun, mengoperasikan, dan memelihara Aplikasi berdasarkan perjanjian dengan partai, serta memproses data pribadi hanya sesuai instruksi tertulis partai. Data tidak digunakan untuk kepentingan perusahaan sendiri.',
        'PT Lamacca Kreatif Solusi juga mendistribusikan Aplikasi melalui akun pengembang Google Play dan App Store miliknya atas nama partai. Hal itu tidak menjadikannya pengendali atas data di dalam Aplikasi.',
      ],
    },

    {
      id: 'data',
      heading: 'Data pribadi yang kami kumpulkan',
      body: [
        'Kategori berikut mencerminkan data yang benar-benar disimpan Aplikasi. Tidak semua data berlaku untuk setiap pengguna — bergantung pada peran Anda di partai dan fitur yang Anda gunakan.',
      ],
      groups: [
        {
          title: 'Akun dan identitas',
          items: [
            'Nama lengkap',
            'Alamat surel dan kata sandi',
            'Nomor telepon',
            'Foto diri (swafoto) untuk Kartu Tanda Anggota',
            'Peran dan hak akses Anda di dalam struktur partai',
          ],
        },
        {
          title: 'Data kependudukan',
          body: 'Dibutuhkan untuk memverifikasi keanggotaan dan mencegah pendaftaran ganda.',
          items: [
            'Nomor Induk Kependudukan (NIK) 16 digit',
            'Foto Kartu Tanda Penduduk (KTP)',
            'Tempat dan tanggal lahir',
            'Jenis kelamin',
            'Agama',
            'Golongan darah',
            'Status pernikahan',
            'Pekerjaan',
            'Alamat lengkap, RT, RW, dan wilayah administratif hingga tingkat desa/kelurahan',
          ],
        },
        {
          title: 'Data pendidikan',
          items: ['Pendidikan terakhir dan nama institusi pendidikan'],
        },
        {
          title: 'Data keanggotaan partai',
          items: [
            'Nomor Kartu Tanda Anggota (KTA) dan nomor urut registrasi di wilayah Anda',
            'Status keanggotaan serta status verifikasi (menunggu, terverifikasi, atau ditolak)',
            'Catatan siapa yang memverifikasi atau menolak, kapan, dan alasan penolakan',
            'Wilayah keanggotaan dan penempatan Anda dalam struktur kepengurusan',
            'Isi Kartu Tanda Anggota digital beserta kode QR-nya',
          ],
        },
        {
          title: 'Data kerelawanan dan perekrutan',
          body: 'Berlaku jika Anda merekrut relawan atau direkrut sebagai relawan.',
          items: [
            'Data relawan yang Anda rekrut, termasuk nama, NIK, kontak, dan wilayah',
            'Foto bukti perekrutan',
            'Struktur jaringan perekrutan (downline) dan posisi Anda di dalamnya',
            'Data cakupan TPS serta statistik kinerja per wilayah dan per peran',
          ],
        },
        {
          title: 'Data teknis',
          items: [
            'Jenis perangkat, versi sistem operasi, dan versi aplikasi',
            'Catatan sesi masuk dan keluar',
            'Laporan galat (crash) sebagaimana dijelaskan pada bagian pembagian data',
          ],
        },
      ],
    },

    {
      id: 'spesifik',
      heading: 'Data pribadi yang bersifat spesifik',
      body: [
        'Sebagian data yang kami kumpulkan tergolong <strong>data pribadi yang bersifat spesifik</strong> menurut Pasal 4 ayat (2) Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, sehingga memerlukan perlindungan lebih tinggi.',
      ],
      list: [
        '<strong>Golongan darah</strong> merupakan data kesehatan. Data ini dikumpulkan karena tercantum pada KTP dan digunakan untuk kelengkapan administrasi keanggotaan.',
        '<strong>Keanggotaan partai politik</strong> pada dirinya sendiri mengungkapkan pandangan politik Anda. Walaupun tidak disebut secara eksplisit dalam Pasal 4 ayat (2), kami memperlakukannya dengan kehati-hatian yang setara.',
        '<strong>Agama</strong> dikumpulkan karena tercantum pada KTP dan pada Kartu Tanda Anggota. Data ini tidak digunakan untuk penyaringan, penilaian, maupun penargetan apa pun.',
        '<strong>NIK dan foto KTP</strong> adalah pengidentifikasi kependudukan yang bersifat unik dan permanen, sehingga penyalahgunaannya berisiko tinggi.',
      ],
      note: 'Kami tidak menggunakan pengenalan wajah, pencocokan biometrik, maupun pembuatan profil otomatis atas data ini. Foto diri hanya dipakai sebagai pas foto pada Kartu Tanda Anggota.',
    },

    {
      id: 'pemindaian-ktp',
      heading: 'Pemindaian KTP menggunakan layanan AI',
      body: [
        'Agar Anda tidak perlu mengetik ulang seluruh isi KTP, Aplikasi menawarkan fitur pemindaian otomatis. Karena fitur ini melibatkan pihak ketiga, kami menjelaskannya secara terpisah.',
      ],
      list: [
        'Ketika Anda memotret atau memilih foto KTP, gambar tersebut dikirim ke server kami, lalu diteruskan ke <strong>layanan kecerdasan buatan Google Gemini</strong> untuk dibaca secara otomatis.',
        'Google membaca gambar tersebut dan mengembalikan datanya dalam bentuk teks: NIK, nama, tempat dan tanggal lahir, jenis kelamin, alamat, RT/RW, kelurahan, kecamatan, kabupaten, provinsi, agama, status perkawinan, pekerjaan, kewarganegaraan, dan golongan darah.',
        'Hasil pembacaan ditampilkan kepada Anda untuk <strong>diperiksa dan diperbaiki</strong> sebelum disimpan. Hasil pemindaian tidak pernah langsung menjadi data akhir tanpa persetujuan Anda.',
        'Pemrosesan oleh Google berlangsung di luar wilayah Indonesia dan tunduk pada ketentuan layanan Google atas antarmuka pemrogramannya.',
        '<strong>Fitur ini opsional.</strong> Anda dapat melewati pemindaian dan mengisi seluruh formulir secara manual; foto KTP Anda tetap disimpan sebagai lampiran verifikasi, tetapi tidak dikirim ke layanan AI.',
      ],
      note: 'Foto KTP yang Anda unggah tetap disimpan pada penyimpanan berkas kami sebagai bukti verifikasi keanggotaan, terpisah dari proses pemindaian di atas.',
    },

    {
      id: 'dpt',
      heading: 'Pencocokan dengan data DPT',
      body: [
        'Pada fitur perekrutan relawan, Aplikasi dapat mencocokkan NIK calon relawan dengan Daftar Pemilih Tetap (DPT) melalui layanan pencarian yang dioperasikan PT Lamacca Kreatif Solusi.',
        'Pencocokan ini dilakukan agar data relawan sesuai dengan wilayah pemilihannya dan agar formulir dapat terisi otomatis. Layanan tersebut mengembalikan nama, jenis kelamin, tanggal lahir, status perkawinan, wilayah, serta NIK yang sebagian digitnya disamarkan.',
        'Pencarian hanya dapat dilakukan oleh pengguna yang sudah masuk dan memiliki peran perekrut, serta dibatasi pada wilayah kerja yang menjadi tanggung jawabnya.',
      ],
    },

    {
      id: 'izin',
      heading: 'Izin akses perangkat',
      body: [
        'Aplikasi meminta izin hanya pada saat izin tersebut dibutuhkan, disertai penjelasan tujuannya. Anda dapat menolak atau mencabutnya kembali melalui pengaturan perangkat; fitur yang bergantung padanya akan berhenti bekerja, sedangkan fitur lain tetap berjalan.',
      ],
      groups: [
        {
          title: 'Kamera',
          body: 'Untuk memotret KTP, mengambil foto diri (swafoto), dan mengambil foto bukti perekrutan relawan.',
        },
        {
          title: 'Galeri foto',
          body: 'Untuk memilih foto KTP atau foto diri yang sudah ada di perangkat Anda. Aplikasi hanya membaca berkas yang Anda pilih sendiri.',
        },
      ],
      note: 'simPAN <strong>tidak</strong> meminta izin lokasi dalam bentuk apa pun, tidak meminta izin kontak, dan tidak mengirimkan notifikasi dorong (push notification). Aplikasi tidak dapat mengetahui posisi Anda.',
    },

    {
      id: 'penggunaan',
      heading: 'Untuk apa data Anda digunakan',
      list: [
        'Memproses pendaftaran keanggotaan serta memverifikasi identitas dan kelayakan Anda sebagai anggota',
        'Menerbitkan dan menampilkan Kartu Tanda Anggota digital beserta kode QR-nya',
        'Mencegah pendaftaran ganda melalui pemeriksaan NIK, surel, dan nomor telepon',
        'Mengelola struktur kepengurusan partai dari tingkat pusat hingga tingkat ranting',
        'Mengelola perekrutan, penempatan, dan pemantauan relawan',
        'Menyusun statistik, laporan, dan pemantauan cakupan wilayah serta TPS',
        'Menyampaikan berita, pengumuman, dan informasi kegiatan partai kepada Anda',
        'Menjaga keamanan sistem, mencegah penyalahgunaan, dan memperbaiki gangguan teknis',
        'Memenuhi kewajiban hukum partai, termasuk pelaporan keanggotaan kepada instansi yang berwenang sesuai peraturan perundang-undangan kepartaian dan kepemiluan',
      ],
    },

    {
      id: 'dasar',
      heading: 'Dasar pemrosesan data',
      body: [
        'Kami memproses data pribadi berdasarkan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (“UU PDP”). Bergantung pada jenis datanya, kami bersandar pada satu atau lebih dasar berikut.',
      ],
      list: [
        '<strong>Persetujuan yang sah</strong> — Anda memberikannya secara sadar saat mendaftar menjadi anggota. Persetujuan atas data yang bersifat spesifik diminta secara terpisah dan dapat Anda tarik kembali sewaktu-waktu.',
        '<strong>Pemenuhan kewajiban perjanjian</strong> — pelaksanaan hubungan keanggotaan antara Anda dan partai.',
        '<strong>Pemenuhan kewajiban hukum</strong> — ketentuan peraturan perundang-undangan mengenai partai politik dan pemilihan umum.',
        '<strong>Kepentingan yang sah</strong> — menjaga keamanan sistem, mencegah pendaftaran ganda dan penyalahgunaan, serta menyusun pelaporan internal partai.',
      ],
      note: 'Penarikan persetujuan tidak memengaruhi keabsahan pemrosesan yang telah dilakukan sebelumnya, dan dapat berakibat pada berakhirnya keanggotaan Anda apabila data tersebut merupakan syarat keanggotaan.',
    },

    {
      id: 'didaftarkan-orang-lain',
      heading: 'Jika data Anda dimasukkan oleh orang lain',
      body: [
        'Relawan dapat didaftarkan oleh anggota lain yang berperan sebagai perekrut. Artinya, data pribadi Anda mungkin berada di dalam Aplikasi meskipun Anda tidak pernah memasangnya sendiri.',
        'Apabila hal itu terjadi, Anda tetap memiliki seluruh hak yang dijelaskan pada bagian “Hak Anda” di bawah ini. Hubungi kami melalui kontak di akhir halaman ini, dan kami akan menelusuri, memperbaiki, atau menghapus data Anda sepanjang tidak ada kewajiban hukum yang mengharuskan penyimpanannya.',
      ],
      note: 'Jika Anda merekrut orang lain melalui Aplikasi, pastikan yang bersangkutan mengetahui dan menyetujui bahwa datanya dicatat, serta memahami untuk apa data itu digunakan. Tanggung jawab tersebut ada pada Anda sebagai perekrut.',
    },

    {
      id: 'pembagian',
      heading: 'Dengan siapa data Anda dibagikan',
      body: [
        'Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi. Kami tidak membagikannya untuk kepentingan periklanan maupun tujuan komersial lain. Pengungkapan hanya dilakukan sebagai berikut.',
      ],
      groups: [
        {
          title: 'Di lingkungan internal partai',
          body: 'Data Anda dapat diakses oleh pengurus dan administrator yang berwenang sesuai tingkat wilayahnya — misalnya pengurus ranting hanya melihat anggota di wilayahnya. Pembatasan ini diterapkan melalui sistem hak akses berbasis peran.',
        },
        {
          title: 'PT Lamacca Kreatif Solusi',
          body: 'Mengakses data pribadi sebatas yang diperlukan untuk mengoperasikan, mendukung, dan memperbaiki sistem, berdasarkan perjanjian yang membatasinya pada instruksi partai dan mengikatnya pada kewajiban kerahasiaan.',
        },
        {
          title: 'Google (Gemini API)',
          body: 'Menerima foto KTP untuk dibaca secara otomatis, sebagaimana dijelaskan pada bagian pemindaian KTP di atas. Google tidak menerima data keanggotaan Anda yang lain.',
        },
        {
          title: 'Sentry',
          body: 'Layanan pemantauan galat. Saat aplikasi mengalami gangguan, laporan teknis dikirim ke Sentry disertai pengenal akun berupa UUID acak. Nama, surel, nomor telepon, NIK, alamat, alamat IP, dan isi permintaan tidak ikut terkirim.',
        },
        {
          title: 'Penyedia infrastruktur',
          body: 'Google Cloud Platform sebagai penyedia server, basis data, dan penyimpanan berkas, serta SuperTokens sebagai komponen autentikasi yang kami operasikan sendiri.',
        },
        {
          title: 'Instansi berwenang',
          body: 'Apabila diwajibkan oleh peraturan perundang-undangan, putusan pengadilan, atau permintaan resmi instansi yang berwenang — termasuk kewajiban pelaporan keanggotaan partai politik.',
        },
      ],
    },

    {
      id: 'penyimpanan',
      heading: 'Di mana data Anda disimpan',
      body: [
        'Basis data, berkas unggahan, dan server aplikasi ditempatkan pada infrastruktur Google Cloud Platform di <strong>wilayah Jakarta (asia-southeast2), Indonesia</strong>. Data keanggotaan Anda disimpan di dalam negeri.',
        'Pengecualiannya adalah dua layanan yang dijelaskan di atas: foto KTP yang dipindai diproses oleh Google di luar Indonesia, dan laporan galat teknis dikirim ke Sentry yang servernya berada di Uni Eropa. Keduanya tunduk pada komitmen pelindungan data masing-masing penyedia dan pada perjanjian pemrosesan data kami.',
      ],
    },

    {
      id: 'retensi',
      heading: 'Berapa lama data disimpan',
      body: [
        'Kami menyimpan data pribadi hanya selama tujuan pengumpulannya masih berlaku dan selama diwajibkan oleh peraturan perundang-undangan.',
      ],
      list: [
        'Data keanggotaan disimpan selama Anda tercatat sebagai anggota partai.',
        'Setelah keanggotaan berakhir, data disimpan selama jangka waktu yang diwajibkan peraturan perundang-undangan mengenai partai politik dan kepemiluan, kemudian dihapus atau dianonimkan.',
        'Foto KTP disimpan sebagai bukti verifikasi selama keanggotaan berlangsung.',
        'Gambar yang dikirim untuk pemindaian tidak kami simpan sebagai salinan tersendiri setelah datanya terbaca.',
        'Catatan teknis dan laporan galat disimpan dalam jangka pendek sesuai kebutuhan operasional.',
      ],
    },

    {
      id: 'keamanan',
      heading: 'Bagaimana kami melindungi data Anda',
      list: [
        'Seluruh lalu lintas antara aplikasi dan server kami dienkripsi menggunakan TLS.',
        'Data dienkripsi saat tersimpan oleh layanan basis data dan penyimpanan Google Cloud.',
        'Autentikasi ditangani SuperTokens; aplikasi tidak pernah menyimpan kata sandi Anda dalam bentuk aslinya.',
        'Akses diatur melalui sistem peran dan pembatasan wilayah, sehingga pengurus hanya melihat data yang menjadi kewenangannya.',
        'Berkas unggahan hanya dapat diakses melalui tautan bertanda tangan yang berlaku sementara, bukan melalui alamat publik yang permanen.',
        'Akses administratif ke sistem produksi dibatasi, dicatat, dan hanya diberikan kepada personel tertentu.',
      ],
      note: 'Tidak ada sistem yang sepenuhnya aman. Apabila terjadi kegagalan pelindungan data pribadi yang berpotensi merugikan, kami akan memberitahukannya kepada Anda dan kepada lembaga yang berwenang dalam waktu paling lama 3×24 jam sebagaimana diatur Pasal 46 UU PDP.',
    },

    {
      id: 'hak',
      heading: 'Hak Anda',
      body: [
        'Sesuai Pasal 5 sampai Pasal 13 UU PDP, Anda berhak untuk:',
      ],
      list: [
        'Mendapatkan informasi mengenai identitas kami, dasar hukum, dan tujuan pemrosesan data Anda',
        'Melihat dan memperoleh salinan data pribadi Anda',
        'Memperbaiki data yang tidak akurat atau tidak lengkap',
        'Mengakhiri pemrosesan, menghapus, atau memusnahkan data pribadi Anda',
        'Menarik kembali persetujuan yang pernah Anda berikan',
        'Menolak tindakan pengambilan keputusan yang semata-mata dilakukan secara otomatis',
        'Menunda atau membatasi pemrosesan data pribadi Anda',
        'Menggugat dan menerima ganti rugi atas pelanggaran pelindungan data pribadi Anda',
        'Memperoleh dan menggunakan data pribadi Anda dalam format yang dapat dibaca sistem elektronik',
      ],
      note: 'Ajukan permintaan melalui kontak pada bagian akhir halaman ini. Kami akan menanggapi paling lambat 3×24 jam sejak permintaan diterima, sesuai Pasal 21 UU PDP. Apabila Anda tidak puas dengan tanggapan kami, Anda dapat mengadu kepada lembaga pelindungan data pribadi di bawah Kementerian Komunikasi dan Digital.',
    },

    {
      id: 'hapus-akun',
      heading: 'Menghapus akun dan data Anda',
      body: [
        'Anda berhak meminta penghapusan akun simPAN beserta data pribadi Anda kapan saja. Permintaan ini tidak dikenakan biaya.',
        'Kirimkan permintaan melalui surel ke <strong>dpp.partaiamanatnasional@gmail.com</strong> dengan subjek “simPAN — permintaan penghapusan akun”, sertakan nama lengkap dan alamat surel yang terdaftar pada akun Anda.',
      ],
      list: [
        'Kami memverifikasi identitas Anda terlebih dahulu agar akun tidak dihapus oleh pihak yang tidak berhak.',
        'Akun dinonaktifkan dan aksesnya dicabut.',
        'Data pribadi yang tidak wajib kami simpan — termasuk foto diri, foto KTP, nomor telepon, alamat surel, alamat tempat tinggal, dan data pendidikan — dihapus atau dianonimkan.',
        'Data yang wajib disimpan berdasarkan peraturan perundang-undangan mengenai partai politik dan kepemiluan disimpan sampai jangka waktunya berakhir, lalu dihapus.',
        'Kami mengonfirmasikan hasilnya kepada Anda secara tertulis.',
      ],
      note: 'Menghapus aplikasi dari perangkat tidak menghapus akun maupun data yang sudah tercatat. Gunakan tata cara di atas. Penghapusan akun juga berarti berakhirnya keanggotaan Anda beserta Kartu Tanda Anggota digitalnya.',
    },

    {
      id: 'anak',
      heading: 'Anak dan batas usia',
      body: [
        'Keanggotaan partai politik hanya terbuka bagi Warga Negara Indonesia yang telah berusia 17 tahun atau sudah menikah, sesuai Undang-Undang Nomor 2 Tahun 2008 tentang Partai Politik. simPAN tidak ditujukan bagi anak-anak dan kami tidak dengan sengaja membuat akun untuk mereka.',
        'Apabila Anda mengetahui adanya akun yang dibuat oleh anak di bawah batas usia tersebut, hubungi kami dan akun beserta datanya akan kami hapus.',
      ],
    },

    {
      id: 'perubahan',
      heading: 'Perubahan kebijakan ini',
      body: [
        'Kebijakan ini kami perbarui apabila terjadi perubahan pada Aplikasi atau apabila diwajibkan oleh peraturan perundang-undangan. Tanggal berlaku di bagian atas halaman selalu mencerminkan versi terkini.',
        'Apabila perubahan berdampak besar terhadap cara data pribadi Anda digunakan, kami akan memberitahukannya melalui Aplikasi atau melalui saluran resmi partai sebelum perubahan tersebut berlaku.',
      ],
    },

    {
      id: 'kontak',
      heading: 'Hubungi kami',
      body: [
        'Untuk pertanyaan mengenai kebijakan ini, atau untuk menggunakan hak-hak Anda di atas, hubungi pengendali data:',
      ],
      groups: [
        {
          title: 'Partai Amanat Nasional (DPP PAN)',
          body: 'Pengendali data',
          items: [
            'Jl. Senopati No. 113, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
            'dpp.partaiamanatnasional@gmail.com',
            '+62 21 7884 8469',
          ],
        },
        {
          title: processor.name,
          body: 'Pengembang dan pemroses data — hanya untuk pertanyaan teknis',
          items: [processor.address, processor.email],
        },
      ],
    },
  ],
};

export const policies: Policy[] = [indonesia, malaysia, sds, simpan];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
