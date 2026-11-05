/**
 * Terms of service for the apps Lamacca publishes for its clients, other than simPAN's (in `legal.ts`). Google Play
 * asks every trader for a terms link per app, next to the privacy policy.
 *
 * Each document is written in the language of the app's own privacy policy and names the same controller, so the
 * two pages read as one set. The claims follow what the apps do: ADV Live from `~/code/advlive`, SDS from
 * `~/code/sekaiichi` (`apps/mobile`). Pantau Relawan and WakafYuk keep their terms next to their privacy policies,
 * in their own files.
 */
import { processor } from './developer';
import { pantauRelawanTerms } from './pantau-relawan';
import { getPolicy } from './privacy';
import type { Policy } from './privacy';
import { wakafyukTerms } from './wakafyuk';

function policyOf(slug: string): Policy {
  const policy = getPolicy(slug);
  if (policy === undefined) {
    throw new Error(`The ${slug} privacy policy is missing`);
  }
  return policy;
}

/** The fields a terms page shares with the privacy policy of the same app. */
function sharedWith(policy: Policy) {
  return {
    slug: policy.slug,
    app: policy.app,
    country: policy.country,
    lang: policy.lang,
    androidPackage: policy.androidPackage,
    iosBundleId: policy.iosBundleId,
    controller: policy.controller,
    autoNumber: true,
  };
}

interface AdvLiveConfig {
  slug: string;
  /** Governing law and forum, as the closing clause states them. */
  governingLaw: string;
  /** Data-protection statute the liability clause preserves. */
  dataLaw: string;
}

function buildAdvLiveTerms({ slug, governingLaw, dataLaw }: AdvLiveConfig): Policy {
  const policy = policyOf(slug);
  const { app, controller } = policy;

  return {
    ...sharedWith(policy),
    effective: '5 November 2026',
    updated: '5 November 2026',
    summary: `The terms on which ${controller.name} staff and authorised partners use ${app}: accounts, honest records, confidentiality, and the limits of the service.`,

    highlights: [
      {
        label: 'For staff and authorised partners',
        body: `${app} is a workplace tool. Accounts are issued by ${controller.name}; there is no public sign-up.`,
      },
      {
        label: 'Records must be genuine',
        body: 'Attendance, location, photographs, and reports must reflect what actually happened, recorded by you, at the place you were.',
      },
      {
        label: 'Company data stays inside the company',
        body: 'Records you can see in the app belong to the company and are confidential. Use them only for your work.',
      },
      {
        label: 'Your employment terms still apply',
        body: 'These terms cover use of the app. They sit alongside your employment or partner agreement and do not replace it.',
      },
    ],

    sections: [
      {
        id: 'acceptance',
        heading: 'Accepting these terms',
        body: [
          `By signing in to or using <strong>${app}</strong>, the workforce and field-operations app of ${controller.name} (“the Company”), you agree to these Terms of Service and to the <a href="/privacy/${slug}">Privacy Policy</a>.`,
          `The app, together with its companion web dashboard, is referred to as “the app”. It is developed by ${processor.name}, which also publishes it on Google Play and the App Store on the Company’s behalf.`,
        ],
      },
      {
        id: 'who',
        heading: 'Who may use the app',
        body: [
          'The app is for employees, contractors, and authorised partners of the Company. Accounts are created by Company administrators and linked to a work email address. You may not create an account for yourself or for anyone else.',
          'Your access ends when your engagement with the Company ends, or earlier if the Company withdraws it.',
        ],
      },
      {
        id: 'account',
        heading: 'Your account',
        list: [
          'Keep your password and your device secure, and do not share your account. Activity carried out from your account is treated as yours.',
          'Use only the access your role grants. If you can see something your role should not reach, tell your administrator rather than using it.',
          'Tell your administrator promptly if you think someone else has used your account or your device has been lost.',
        ],
      },
      {
        id: 'records',
        heading: 'Attendance, location, and field records',
        body: [
          'Attendance and field activity are verified with your location and with photographs. You agree that:',
        ],
        list: [
          'you clock in and out yourself, for yourself, at the place you are actually working;',
          'you do not use location-spoofing apps, emulators, or any other means to make the app report a place you are not;',
          'photographs and documents you attach are genuine, recent, and of what the record says they are;',
          'visit reports, sales entries, orders, and stock movements reflect what actually took place.',
        ],
        note: 'Falsified records may lead to disciplinary action under your employment or partner agreement, in addition to the loss of access to the app.',
      },
      {
        id: 'contacts',
        heading: 'People you record',
        body: [
          `When you record farmers, retailers, dealers, family members, or emergency contacts, enter only accurate information they have given for that purpose, and make sure they know it is being recorded. The <a href="/privacy/${slug}">Privacy Policy</a> explains their rights.`,
        ],
      },
      {
        id: 'confidentiality',
        heading: 'Confidentiality and acceptable use',
        body: ['You agree not to:'],
        list: [
          'copy, export, photograph, or pass on Company records, customer data, or colleagues’ personal data except as your work requires;',
          'use data from the app for your own purposes, for a competitor, or after your engagement ends;',
          'interfere with, probe, or attempt to break into the app or its servers, or use automated tools against it;',
          'reverse engineer, decompile, or redistribute the app, except as the law expressly permits.',
        ],
      },
      {
        id: 'ownership',
        heading: 'Ownership',
        body: [
          'Records entered into the app belong to the Company, which is the data controller for the personal data among them.',
          `The app, its source code, and its design belong to ${processor.name} or its licensors. You receive a limited, non-exclusive, non-transferable right to use the app for your work for as long as you hold an account.`,
        ],
      },
      {
        id: 'availability',
        heading: 'Availability and changes to the app',
        body: [
          'We aim to keep the app available, but features may change, be limited, or be withdrawn for maintenance, security, or business reasons, and the service can be interrupted by causes outside our control such as network or infrastructure outages.',
          'If you cannot record attendance or an activity because the app is unavailable, follow your supervisor’s instructions for recording it another way.',
        ],
      },
      {
        id: 'suspension',
        heading: 'Suspension and termination',
        body: [
          'The Company may suspend or close your account if these terms are breached, if misuse is suspected, or when your engagement ends. Uninstalling the app does not close the account; see the Privacy Policy for how accounts are closed and data deleted.',
        ],
      },
      {
        id: 'employment',
        heading: 'Relationship to your employment',
        body: [
          'These terms govern your use of the app only. Your pay, working hours, leave entitlement, and conduct are governed by your employment or partner agreement and the Company’s policies. Where they differ from these terms, that agreement prevails.',
        ],
      },
      {
        id: 'liability',
        heading: 'Limitation of liability',
        body: [
          `The app is provided as is. To the extent the law allows, neither the Company nor ${processor.name} is liable for indirect loss arising from the use of, or the inability to use, the app, including loss caused by inaccurate information you entered or by credentials you shared.`,
          `Nothing in these terms limits your rights under ${dataLaw}, employment law, or any other law that cannot be excluded by agreement.`,
        ],
      },
      {
        id: 'privacy',
        heading: 'Privacy',
        body: [
          `How personal data is processed in the app is set out in the <a href="/privacy/${slug}">${app} Privacy Policy</a>, which forms part of these terms.`,
        ],
      },
      {
        id: 'changes',
        heading: 'Changes to these terms',
        body: [
          'We may update these terms when the app changes or the law requires it. The date at the top of the page always shows the current version. Where a change materially affects you, we will tell users through the app or the Company’s usual internal channels before it takes effect. Continuing to use the app afterwards means you accept the change.',
        ],
      },
      {
        id: 'law',
        heading: 'Governing law',
        body: [governingLaw],
      },
      {
        id: 'contact',
        heading: 'Contact us',
        body: [
          'Questions about these terms are best raised with your HR department or system administrator. For formal correspondence:',
        ],
        groups: [
          {
            title: controller.name,
            items: [controller.address, controller.email, controller.phone],
          },
          {
            title: processor.name,
            body: 'Developer — technical enquiries only',
            items: [processor.email],
          },
        ],
      },
    ],
  };
}

const advLiveIndonesia = buildAdvLiveTerms({
  slug: 'adv-live-id',
  governingLaw:
    'These terms are governed by the laws of the Republic of Indonesia. Disputes will first be settled by discussion in good faith; failing that, they will be resolved by the competent courts of Indonesia.',
  dataLaw: 'Law No. 27 of 2022 on Personal Data Protection (UU PDP)',
});

const advLiveMalaysia = buildAdvLiveTerms({
  slug: 'adv-live-my',
  governingLaw:
    'These terms are governed by the laws of Malaysia. Disputes will first be settled by discussion in good faith; failing that, they will be resolved by the competent courts of Malaysia.',
  dataLaw: 'the Personal Data Protection Act 2010',
});

const sdsPolicy = policyOf('sds');

/**
 * SDS serves three kinds of user: job applicants, who register themselves and apply to vacancies; employees, who
 * record attendance and work; and the Company's clients, who follow the work in their buildings and raise tickets.
 */
const sds: Policy = {
  ...sharedWith(sdsPolicy),
  effective: '5 November 2026',
  updated: '5 November 2026',
  summary:
    'Syarat penggunaan aplikasi SDS: akun, lamaran dan kontrak kerja, absensi dan laporan pekerjaan, kerahasiaan, serta batas tanggung jawab layanan.',

  highlights: [
    {
      label: 'Untuk pelamar, karyawan, dan klien',
      body: 'SDS adalah aplikasi layanan internal PT Sekaiichi Dwiputra Service bagi pelamar kerja, karyawan, dan klien perusahaan.',
    },
    {
      label: 'Absensi dan laporan harus asli',
      body: 'Absensi, swafoto, lokasi, dan foto bukti pekerjaan harus menunjukkan keadaan sebenarnya, dilakukan oleh Anda sendiri di tempat Anda bekerja.',
    },
    {
      label: 'Perjanjian kerja tetap yang utama',
      body: 'Kontrak, gaji, cuti, dan hak kerja Anda diatur oleh perjanjian kerja dan peraturan perusahaan. Aplikasi hanya sarana untuk menjalankannya.',
    },
    {
      label: 'Data gedung klien bersifat rahasia',
      body: 'Informasi tentang gedung, barang, dan pekerjaan di lokasi klien hanya boleh digunakan untuk pekerjaan Anda.',
    },
  ],

  sections: [
    {
      id: 'penerimaan',
      heading: 'Penerimaan ketentuan',
      body: [
        'Dengan mendaftar, masuk, atau menggunakan <strong>SDS</strong>, aplikasi layanan internal PT Sekaiichi Dwiputra Service (“Perusahaan”), Anda menyatakan telah membaca dan menyetujui Ketentuan Layanan ini serta <a href="/privacy/sds">Kebijakan Privasi</a> yang berlaku.',
        'Aplikasi beserta dasbor webnya selanjutnya disebut “Aplikasi”. Aplikasi dikembangkan oleh PT Lamacca Kreatif Solusi, yang juga menerbitkannya di Google Play dan App Store atas nama Perusahaan. Perusahaan bertindak sebagai pengendali data.',
        'Jika Anda tidak setuju, mohon tidak menggunakan Aplikasi.',
      ],
    },
    {
      id: 'pengguna',
      heading: 'Siapa yang dapat menggunakan Aplikasi',
      list: [
        '<strong>Pelamar kerja</strong> dapat mendaftar sendiri untuk melamar lowongan Perusahaan.',
        '<strong>Karyawan</strong> menggunakan Aplikasi untuk absensi, shift, tugas, pengajuan cuti, izin, dan lembur, kontrak kerja, slip gaji, serta layanan kantor lainnya.',
        '<strong>Klien Perusahaan</strong> yang diberi akses menggunakan Aplikasi untuk memantau pekerjaan di gedungnya dan menyampaikan tiket permintaan atau keluhan.',
      ],
      note: 'Anda harus berusia minimal 18 tahun, atau usia lain yang dibolehkan peraturan ketenagakerjaan, untuk mendaftar sebagai pelamar.',
    },
    {
      id: 'akun',
      heading: 'Akun pengguna',
      list: [
        'Berikan data yang benar, akurat, dan mutakhir, termasuk NIK, nomor telepon, dan dokumen yang sesuai dengan identitas Anda.',
        'Satu orang hanya boleh memiliki satu akun. Mendaftar atas nama orang lain atau menyamar sebagai pihak lain tidak diperbolehkan.',
        'Jaga kerahasiaan kata sandi dan keamanan perangkat Anda. Aktivitas yang dilakukan dari akun Anda dianggap dilakukan oleh Anda.',
        'Segera hubungi admin HRD jika Anda menduga akun Anda digunakan oleh orang lain.',
      ],
    },
    {
      id: 'lamaran',
      heading: 'Lamaran dan kontrak kerja',
      list: [
        'Mengirim lamaran melalui Aplikasi tidak menjamin Anda akan diterima. Keputusan penerimaan sepenuhnya berada pada Perusahaan.',
        'Dokumen yang Anda unggah, seperti KTP, KK, CV, ijazah, SKCK, dan paklaring, harus asli dan milik Anda sendiri. Dokumen palsu dapat membuat lamaran ditolak atau hubungan kerja diakhiri.',
        'Kontrak kerja yang Anda terima atau tolak di Aplikasi adalah perjanjian antara Anda dan Perusahaan. Bacalah isinya dengan saksama sebelum menyetujuinya.',
        'Slip gaji di Aplikasi bersifat informasi. Jika ada perbedaan, yang berlaku adalah catatan penggajian resmi Perusahaan; sampaikan kepada HRD.',
      ],
    },
    {
      id: 'absensi',
      heading: 'Absensi dan laporan pekerjaan',
      body: ['Absensi dan pekerjaan diverifikasi dengan lokasi dan foto. Anda setuju untuk:'],
      list: [
        'melakukan absensi masuk dan pulang sendiri, untuk diri sendiri, di lokasi tempat Anda benar-benar bekerja;',
        'tidak menggunakan aplikasi pemalsu lokasi, emulator, atau cara lain agar Aplikasi mencatat lokasi yang tidak sesuai;',
        'mengambil swafoto diri Anda sendiri, dan foto bukti tugas yang asli dari pekerjaan yang benar-benar dilakukan;',
        'mencatat perpindahan barang, tugas, dan laporan sesuai kenyataan.',
      ],
      note: 'Pemalsuan absensi atau laporan dapat dikenai sanksi sesuai perjanjian kerja dan peraturan perusahaan, selain dicabutnya akses ke Aplikasi.',
    },
    {
      id: 'kerahasiaan',
      heading: 'Kerahasiaan dan penggunaan yang diperbolehkan',
      body: ['Anda setuju untuk tidak:'],
      list: [
        'menyalin, memotret, atau menyebarkan data rekan kerja, data gedung dan barang klien, atau informasi Perusahaan lain di luar keperluan pekerjaan;',
        'menggunakan data dari Aplikasi untuk kepentingan pribadi atau pihak lain, termasuk setelah hubungan kerja berakhir;',
        'mengakses data di luar kewenangan peran Anda;',
        'mengganggu, memindai, atau berupaya membobol sistem, atau menyalahgunakan fitur untuk keperluan yang melanggar hukum;',
        'merekayasa balik, membongkar, atau memperbanyak Aplikasi di luar yang diizinkan hukum.',
      ],
    },
    {
      id: 'kepemilikan',
      heading: 'Kepemilikan',
      body: [
        'Data yang dicatat di Aplikasi dikelola oleh Perusahaan sebagai pengendali data. Dokumen pribadi yang Anda unggah tetap milik Anda, dan Anda mengizinkan Perusahaan menggunakannya sebatas yang diperlukan untuk administrasi kepegawaian, sebagaimana dijelaskan dalam Kebijakan Privasi.',
        'Aplikasi, kode sumber, dan desainnya adalah milik PT Lamacca Kreatif Solusi atau pemberi lisensinya. Anda mendapat hak terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk menggunakan Aplikasi selama memiliki akun.',
      ],
    },
    {
      id: 'ketersediaan',
      heading: 'Ketersediaan layanan',
      body: [
        'Kami berupaya menjaga Aplikasi tetap tersedia, namun fitur dapat berubah, dibatasi, atau dihentikan untuk keperluan pemeliharaan, keamanan, atau kebijakan Perusahaan. Layanan dapat terganggu oleh hal di luar kendali kami, seperti gangguan jaringan atau penyedia infrastruktur.',
        'Jika Anda tidak dapat melakukan absensi karena Aplikasi tidak tersedia, ikuti arahan atasan atau HRD untuk mencatatnya dengan cara lain.',
      ],
    },
    {
      id: 'pembatasan',
      heading: 'Pembatasan dan penutupan akun',
      body: [
        'Perusahaan dapat membatasi, menangguhkan, atau menutup akun apabila Ketentuan ini dilanggar, terdapat indikasi penyalahgunaan, atau hubungan kerja berakhir.',
        'Untuk menutup akun dan meminta penghapusan data, karyawan menghubungi admin HRD; pelamar dan klien dapat menghubungi Perusahaan melalui kontak di bawah. Menghapus Aplikasi dari perangkat tidak menutup akun Anda.',
      ],
    },
    {
      id: 'tanggung-jawab',
      heading: 'Batas tanggung jawab',
      body: [
        'Aplikasi disediakan sebagaimana adanya. Sejauh diizinkan hukum, Perusahaan dan PT Lamacca Kreatif Solusi tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan atau ketidakmampuan menggunakan Aplikasi, termasuk akibat data yang Anda berikan tidak benar atau kata sandi yang Anda bagikan kepada pihak lain.',
        'Tidak ada ketentuan di sini yang menghapus hak Anda berdasarkan Undang-Undang Pelindungan Data Pribadi, peraturan ketenagakerjaan, atau peraturan lain yang tidak dapat dikesampingkan.',
      ],
    },
    {
      id: 'privasi',
      heading: 'Privasi dan data',
      body: [
        'Pemrosesan data pribadi Anda diatur dalam <a href="/privacy/sds">Kebijakan Privasi SDS</a>, yang merupakan bagian dari Ketentuan ini.',
      ],
    },
    {
      id: 'perubahan',
      heading: 'Perubahan ketentuan',
      body: [
        'Kami dapat memperbarui Ketentuan ini apabila terjadi perubahan pada Aplikasi atau diwajibkan oleh peraturan. Tanggal di bagian atas halaman selalu menunjukkan versi terkini. Apabila perubahannya berdampak besar, kami akan memberitahukannya melalui Aplikasi sebelum berlaku. Dengan tetap menggunakan Aplikasi setelah itu, Anda dianggap menyetujui perubahan tersebut.',
      ],
    },
    {
      id: 'hukum',
      heading: 'Hukum yang berlaku',
      body: [
        'Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diupayakan diselesaikan terlebih dahulu secara musyawarah; apabila tidak tercapai, diselesaikan melalui pengadilan yang berwenang di Indonesia.',
      ],
    },
    {
      id: 'kontak',
      heading: 'Hubungi kami',
      body: ['Untuk pertanyaan mengenai Ketentuan ini, hubungi Perusahaan:'],
      groups: [
        {
          title: sdsPolicy.controller.name,
          items: [sdsPolicy.controller.address, sdsPolicy.controller.email, sdsPolicy.controller.phone],
        },
        {
          title: processor.name,
          body: 'Pengembang Aplikasi — hanya untuk pertanyaan teknis',
          items: [processor.email],
        },
      ],
    },
  ],
};

export const clientTerms: Policy[] = [sds, advLiveIndonesia, advLiveMalaysia, pantauRelawanTerms, wakafyukTerms];
