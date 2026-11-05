/**
 * Pantau Relawan (basic) — privacy policy and terms of service, written from the app itself
 * (github.com/lamaccatech/pantau-relawan-monorepo, `apps/basic` and `libs/mobile`). Neither repo had legal text.
 *
 * Pantau Relawan is Lamacca's own product, sold to candidates: each candidate's campaign is a separate tenant whose
 * team recruits relawan and records supporters. The campaign decides why that data is collected, so it is the
 * controller; Lamacca runs the platform for it as processor and is the contact anyone can actually reach.
 *
 * Claims that carry weight, so check the code before trimming them:
 *   - There is no sign-up; accounts are made by a recruiter or the campaign admin.
 *   - The NIK typed in is looked up in the DPT through Lamacca's own service (`dpt_service.dart`).
 *   - Support status is political-preference data, set per campaign.
 *   - Firebase Analytics and Crashlytics are built in; there is no location, contacts, push, or ads.
 *   - There is no in-app deletion; the campaign admin deletes from the dashboard, or Lamacca on request.
 */
import { processor } from './developer';
import type { Policy } from './privacy';

const controller = {
  name: 'Kandidat pengguna Pantau Relawan, melalui tim pemenangannya',
  address: processor.address,
  email: processor.email,
  phone: '+62 813 4233 7729 (WhatsApp)',
};

const shared = {
  slug: 'pantau-relawan',
  app: 'Pantau Relawan',
  country: 'Indonesia',
  lang: 'id',
  androidPackage: 'com.pantaurelawan.basic',
  iosBundleId: 'com.pantaurelawan.basic',
  controller,
  autoNumber: true,
} as const;

const contactGroups = [
  {
    title: 'Tim pemenangan Anda',
    body: 'Pengendali data — hubungi koordinator atau admin tim yang mendaftarkan Anda',
  },
  {
    title: processor.name,
    body: 'Penyedia platform dan pemroses data — menerima permintaan jika Anda tidak dapat menghubungi tim',
    items: [processor.address, processor.email, controller.phone],
  },
];

export const pantauRelawanPrivacy: Policy = {
  ...shared,
  effective: '5 November 2026',
  updated: '5 November 2026',
  summary:
    'Bagaimana data pribadi relawan dan pendukung dikumpulkan, digunakan, dibagikan, dan dilindungi di aplikasi Pantau Relawan.',

  highlights: [
    {
      label: 'Data dukungan politik ditangani secara khusus',
      body: 'Status dukungan Anda menunjukkan pilihan politik. Data ini hanya dapat dilihat tim pemenangan kandidat yang mencatatnya, dan tidak pernah dijual atau dibagikan untuk tujuan komersial.',
    },
    {
      label: 'Tidak ada pendaftaran sendiri',
      body: 'Akun dan data Anda dicatat oleh perekrut atau admin tim pemenangan, yang wajib memberi tahu Anda dan mendapat persetujuan Anda lebih dulu.',
    },
    {
      label: 'Aplikasi tidak melacak lokasi',
      body: 'Pantau Relawan tidak meminta izin lokasi, kontak, maupun mikrofon. Wilayah dipilih dari daftar, bukan dari GPS.',
    },
    {
      label: 'Tanpa iklan',
      body: 'Aplikasi tidak memuat iklan dan tidak menggunakan pengenal iklan perangkat.',
    },
  ],

  sections: [
    {
      id: 'tentang',
      heading: 'Tentang kebijakan ini',
      body: [
        'Kebijakan Privasi ini menjelaskan bagaimana data pribadi diperlakukan di <strong>Pantau Relawan</strong>, aplikasi yang digunakan tim pemenangan kandidat untuk merekrut dan mengoordinasikan relawan, mencatat pendukung, melaporkan kegiatan, dan melaporkan hasil penghitungan suara.',
        'Kebijakan ini berlaku untuk aplikasi seluler Pantau Relawan dan dasbor web yang digunakan admin tim pemenangan. Selanjutnya keduanya disebut “Aplikasi”. Kebijakan ini berlaku bagi pengguna Aplikasi maupun orang yang datanya dicatat di dalamnya.',
      ],
      groups: [
        {
          title: 'Aplikasi yang dicakup kebijakan ini',
          items: [
            'Nama aplikasi: Pantau Relawan',
            'Nama paket Google Play: com.pantaurelawan.basic',
            'Pengendali data: kandidat yang menggunakan Pantau Relawan, melalui tim pemenangannya',
            'Penyedia platform dan pemroses data: PT Lamacca Kreatif Solusi',
          ],
        },
      ],
    },
    {
      id: 'tanggung-jawab',
      heading: 'Siapa yang bertanggung jawab atas data Anda',
      body: [
        'Setiap kandidat yang menggunakan Pantau Relawan memiliki ruang data sendiri. <strong>Kandidat tersebut, melalui tim pemenangannya</strong>, adalah pengendali data: tim menentukan data apa yang dicatat, untuk apa, dan siapa di timnya yang dapat melihatnya.',
        '<strong>PT Lamacca Kreatif Solusi</strong> menyediakan, menjalankan, dan memelihara platform serta menerbitkan Aplikasi di Google Play. Lamacca memproses data hanya untuk menjalankan layanan bagi kandidat dan tidak menggunakannya untuk kepentingan sendiri maupun kandidat lain.',
      ],
    },
    {
      id: 'data',
      heading: 'Data pribadi yang dicatat',
      body: [
        'Tim pemenangan menentukan kolom mana yang ditampilkan dan diwajibkan, sehingga tidak semua data di bawah dicatat untuk setiap orang.',
      ],
      groups: [
        {
          title: 'Identitas',
          items: [
            'Nomor Induk Kependudukan (NIK) dan nomor Kartu Keluarga',
            'Nama lengkap, tempat dan tanggal lahir, jenis kelamin, status perkawinan, agama, dan pekerjaan',
            'Foto diri, foto KTP, dan foto bukti perekrutan',
          ],
        },
        {
          title: 'Kontak dan alamat',
          items: [
            'Nomor telepon, nomor WhatsApp, dan alamat surel (opsional)',
            'Alamat, RT/RW, wilayah hingga desa/kelurahan, dan TPS',
          ],
        },
        {
          title: 'Data kampanye',
          items: [
            'Peran Anda (misalnya relawan, koordinator, saksi, atau pendukung)',
            'Status dukungan terhadap kandidat',
            'Siapa yang merekrut Anda, struktur tim di atas Anda, dan catatan dari perekrut',
            'Kolom tambahan yang ditetapkan tim pemenangan',
          ],
        },
        {
          title: 'Akun relawan',
          items: ['Nama pengguna dan kata sandi, yang disimpan dalam bentuk tersandi (hash) dan tidak dapat dibaca'],
        },
        {
          title: 'Laporan yang dikirim relawan',
          items: [
            'Laporan kegiatan: uraian, wilayah, perkiraan biaya, penilaian suasana, dan foto',
            'Hasil penghitungan suara per TPS dan foto formulir C1',
            'Jawaban survei dan usulan, beserta nama pengirimnya',
          ],
        },
        {
          title: 'Data teknis',
          items: [
            'Data penggunaan dan laporan galat yang dikumpulkan Firebase Analytics dan Firebase Crashlytics, seperti jenis perangkat, versi sistem operasi, layar yang dibuka, dan penyebab galat',
          ],
        },
      ],
    },
    {
      id: 'dpt',
      heading: 'Pencocokan dengan Daftar Pemilih Tetap',
      body: [
        'Saat perekrut memasukkan NIK, Aplikasi mencocokkannya dengan data Daftar Pemilih Tetap (DPT) yang diumumkan KPU, melalui layanan pencarian yang dijalankan PT Lamacca Kreatif Solusi, agar nama, alamat, dan TPS terisi otomatis. NIK hanya digunakan untuk pencarian ini dan tidak dikirim ke pihak lain.',
      ],
    },
    {
      id: 'izin',
      heading: 'Izin perangkat',
      list: [
        '<strong>Kamera dan galeri</strong> — untuk memotret atau memilih foto diri, KTP, bukti perekrutan, kegiatan, dan formulir C1. Foto hanya diunggah saat Anda menyimpan datanya.',
        '<strong>Internet</strong> — untuk menyinkronkan data. Data yang belum terkirim disimpan sementara di perangkat dan dikirim saat koneksi tersedia.',
      ],
      note: 'Aplikasi tidak meminta izin lokasi, kontak, mikrofon, maupun notifikasi.',
    },
    {
      id: 'tujuan',
      heading: 'Untuk apa data digunakan',
      list: [
        'Mengelola relawan, struktur tim, dan pendukung kandidat',
        'Memastikan data pendukung sesuai DPT dan mencegah pencatatan ganda',
        'Mengoordinasikan kegiatan, survei, pengumuman, dan papan peringkat relawan',
        'Mengumpulkan dan merekap hasil penghitungan suara dari saksi',
        'Menjaga keamanan layanan dan memperbaiki galat',
      ],
    },
    {
      id: 'dasar',
      heading: 'Dasar pemrosesan',
      body: [
        'Pemrosesan dilakukan sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (“UU PDP”), terutama atas dasar <strong>persetujuan</strong> Anda yang diminta oleh perekrut saat mencatat data Anda. Anda dapat menarik persetujuan itu kapan saja. Data teknis diproses atas dasar kepentingan yang sah untuk menjaga keamanan dan keandalan layanan.',
      ],
    },
    {
      id: 'pembagian',
      heading: 'Siapa yang dapat melihat data',
      groups: [
        {
          title: 'Tim pemenangan kandidat',
          body: 'Admin dan koordinator tim sesuai hak aksesnya. Perekrut melihat orang yang ia rekrut dan struktur di bawahnya. Admin tim dapat mengekspor data dari dasbor untuk keperluan kampanye.',
        },
        {
          title: 'PT Lamacca Kreatif Solusi',
          body: 'Sebatas yang diperlukan untuk menjalankan, mendukung, dan memperbaiki layanan.',
        },
        {
          title: 'Penyedia infrastruktur',
          body: 'Google, melalui Firebase Authentication, Cloud Firestore, Cloud Storage, Cloud Functions, Firebase Analytics, dan Firebase Crashlytics, sebagai penyedia infrastruktur dan bukan untuk kepentingannya sendiri.',
        },
        {
          title: 'Otoritas',
          body: 'Instansi pemerintah atau penegak hukum apabila diwajibkan peraturan perundang-undangan atau perintah yang sah.',
        },
      ],
      note: 'Data tidak dijual, disewakan, atau dibagikan kepada kandidat lain, pialang data, maupun pengiklan.',
    },
    {
      id: 'penyimpanan',
      heading: 'Lokasi penyimpanan',
      body: [
        'Data disimpan di infrastruktur Google Cloud dan Firebase; fungsi server berjalan di wilayah Jakarta (asia-southeast2). Sebagian layanan pendukung Google, seperti Analytics dan Crashlytics, beroperasi secara global dan dapat memproses data di luar Indonesia, dengan perlindungan sesuai komitmen pelindungan data Google dan ketentuan UU PDP.',
      ],
    },
    {
      id: 'retensi',
      heading: 'Berapa lama data disimpan',
      body: [
        'Data disimpan selama kandidat menggunakan layanan untuk kampanyenya. Setelah layanan untuk kandidat berakhir, data relawan dan pendukung kandidat tersebut dihapus, kecuali kandidat meminta kami mengembalikannya atau hukum mewajibkan penyimpanan lebih lama. Data seseorang juga dihapus lebih awal jika ia memintanya.',
      ],
    },
    {
      id: 'keamanan',
      heading: 'Keamanan',
      body: [
        'Lalu lintas antara Aplikasi dan server dienkripsi, kata sandi disimpan tersandi, dan data setiap kandidat dipisahkan. Tidak ada sistem yang sepenuhnya aman; apabila terjadi kebocoran data pribadi yang berisiko merugikan Anda, kami akan memberitahukannya kepada Anda dan otoritas yang berwenang sesuai UU PDP.',
      ],
    },
    {
      id: 'hak',
      heading: 'Hak Anda',
      body: ['Sesuai UU PDP, Anda berhak meminta:'],
      list: [
        'akses dan salinan data pribadi Anda;',
        'perbaikan data yang tidak akurat;',
        'penghapusan data Anda, termasuk status dukungan dan foto Anda;',
        'penghentian pemrosesan dan penarikan persetujuan yang pernah Anda berikan.',
      ],
      note: 'Sampaikan permintaan kepada koordinator atau admin tim pemenangan yang mencatat data Anda. Jika Anda tidak dapat menghubungi mereka, kirim surel ke <strong>info@lamacca.co.id</strong> dengan menyebutkan nama kandidat; kami meneruskannya kepada tim dan memastikan permintaan Anda ditanggapi paling lambat 3×24 jam, sesuai UU PDP.',
    },
    {
      id: 'hapus-akun',
      heading: 'Menghapus akun dan data',
      body: [
        'Akun Pantau Relawan dibuat oleh tim pemenangan, sehingga dihapus oleh admin tim melalui dasbor, atau oleh kami atas permintaan Anda melalui jalur di atas. Penghapusan mencakup akun masuk, data identitas dan kontak, foto, serta status dukungan Anda.',
        'Laporan penghitungan suara yang pernah Anda kirim sebagai saksi dapat tetap disimpan tanpa identitas Anda agar rekap tetap utuh. Menghapus Aplikasi dari perangkat tidak menghapus akun Anda.',
      ],
    },
    {
      id: 'anak',
      heading: 'Anak-anak',
      body: [
        'Aplikasi ditujukan untuk pemilih dan relawan dewasa, yaitu berusia 17 tahun atau sudah/pernah menikah. Data anak di bawah usia tersebut tidak boleh dicatat; jika ditemukan, data tersebut akan dihapus.',
      ],
    },
    {
      id: 'perubahan',
      heading: 'Perubahan kebijakan ini',
      body: [
        'Kebijakan ini kami perbarui apabila Aplikasi berubah atau peraturan mewajibkannya. Tanggal di bagian atas halaman selalu menunjukkan versi terkini.',
      ],
    },
    {
      id: 'kontak',
      heading: 'Hubungi kami',
      groups: contactGroups,
    },
  ],
};

export const pantauRelawanTerms: Policy = {
  ...shared,
  effective: '5 November 2026',
  updated: '5 November 2026',
  summary:
    'Syarat penggunaan aplikasi Pantau Relawan: akun, perekrutan relawan dan pendukung, laporan kegiatan dan penghitungan suara, kerahasiaan data, serta batas tanggung jawab layanan.',

  highlights: [
    {
      label: 'Rekrut hanya dengan persetujuan',
      body: 'Setiap orang yang Anda catat harus tahu dan setuju datanya dicatat, serta memahami untuk apa data itu digunakan.',
    },
    {
      label: 'Data pendukung bersifat rahasia',
      body: 'Data relawan dan pendukung hanya untuk keperluan kampanye kandidat Anda, tidak untuk dibagikan atau dijual.',
    },
    {
      label: 'Laporan harus sesuai kenyataan',
      body: 'Kegiatan, foto, dan hasil penghitungan suara yang Anda laporkan harus benar dan asli.',
    },
    {
      label: 'Patuhi aturan pemilu',
      body: 'Aplikasi tidak boleh digunakan untuk politik uang, intimidasi, atau pelanggaran pemilu lainnya.',
    },
  ],

  sections: [
    {
      id: 'penerimaan',
      heading: 'Penerimaan ketentuan',
      body: [
        'Dengan masuk ke atau menggunakan <strong>Pantau Relawan</strong>, Anda menyetujui Ketentuan Layanan ini serta <a href="/privacy/pantau-relawan">Kebijakan Privasi</a> yang berlaku.',
        'Pantau Relawan disediakan oleh PT Lamacca Kreatif Solusi (“Kami”) bagi kandidat dan tim pemenangannya (“Tim”). Ketentuan ini berlaku bagi setiap pengguna Aplikasi, termasuk admin, koordinator, relawan, dan saksi.',
      ],
    },
    {
      id: 'akun',
      heading: 'Akun',
      list: [
        'Tidak ada pendaftaran mandiri. Akun Anda dibuat oleh perekrut atau admin Tim, dan hak akses Anda ditentukan oleh Tim.',
        'Jaga kerahasiaan nama pengguna, kata sandi, dan perangkat Anda. Aktivitas dari akun Anda dianggap dilakukan oleh Anda.',
        'Jika lupa kata sandi atau menduga akun Anda digunakan orang lain, hubungi koordinator Tim Anda.',
      ],
    },
    {
      id: 'perekrutan',
      heading: 'Perekrutan relawan dan pendukung',
      body: ['Saat mencatat seseorang, Anda menyatakan bahwa:'],
      list: [
        'orang tersebut telah mengetahui dan menyetujui data pribadinya, termasuk foto KTP dan status dukungannya, dicatat di Aplikasi, serta memahami untuk apa data itu digunakan;',
        'data dan foto yang Anda masukkan benar milik orang tersebut, dan diambil dengan sepengetahuannya;',
        'orang tersebut berusia 17 tahun atau sudah/pernah menikah;',
        'Anda tidak menjanjikan atau memberi uang maupun materi lain sebagai imbalan atas dukungan.',
      ],
      note: 'Orang yang Anda catat tetap memiliki seluruh hak atas data pribadinya, sebagaimana dijelaskan dalam Kebijakan Privasi.',
    },
    {
      id: 'laporan',
      heading: 'Laporan kegiatan dan penghitungan suara',
      list: [
        'Laporan kegiatan, foto, dan jawaban survei harus menggambarkan apa yang benar-benar terjadi.',
        'Hasil penghitungan suara harus sesuai dengan formulir C1 di TPS, dan foto C1 harus asli tanpa suntingan.',
        'Rekap di Aplikasi adalah alat pemantauan internal Tim, bukan hasil resmi. Hasil resmi pemilu adalah yang ditetapkan KPU.',
      ],
    },
    {
      id: 'penggunaan',
      heading: 'Penggunaan yang dilarang',
      body: ['Anda setuju untuk tidak:'],
      list: [
        'menyalin, mengekspor, memotret, atau menyebarkan data relawan dan pendukung di luar keperluan kampanye Tim Anda;',
        'menggunakan data tersebut untuk kandidat lain, untuk dijual, atau setelah Anda tidak lagi menjadi bagian dari Tim;',
        'menggunakan Aplikasi untuk politik uang, intimidasi, penyebaran hoaks, ujaran kebencian, atau pelanggaran peraturan pemilu lainnya;',
        'mengakses data di luar hak akses Anda, atau berupaya membobol, memindai, atau mengganggu sistem;',
        'merekayasa balik, membongkar, atau memperbanyak Aplikasi di luar yang diizinkan hukum.',
      ],
    },
    {
      id: 'tim',
      heading: 'Tanggung jawab Tim',
      body: [
        'Tim, sebagai pengendali data, bertanggung jawab atas data yang dicatat anggotanya, atas pemberian hak akses kepada anggotanya, dan atas penggunaan data yang diekspor dari dasbor. Tim wajib menanggapi permintaan hak subjek data yang kami teruskan.',
      ],
    },
    {
      id: 'kepemilikan',
      heading: 'Kepemilikan',
      body: [
        'Data yang dicatat di Aplikasi dikelola oleh Tim sebagai pengendali data. Aplikasi, kode sumber, dan desainnya adalah milik PT Lamacca Kreatif Solusi; Anda mendapat hak terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk menggunakannya selama memiliki akun.',
      ],
    },
    {
      id: 'ketersediaan',
      heading: 'Ketersediaan layanan',
      body: [
        'Kami berupaya menjaga Aplikasi tetap tersedia, terutama pada hari pemungutan suara, namun layanan dapat terganggu oleh pemeliharaan, gangguan jaringan, atau hal lain di luar kendali kami. Data yang belum terkirim disimpan di perangkat dan dikirim saat koneksi tersedia; jangan menghapus Aplikasi sebelum semua data terkirim.',
        'Pencocokan DPT adalah bantuan pengisian; periksa hasilnya sebelum menyimpan.',
      ],
    },
    {
      id: 'pembatasan',
      heading: 'Pembatasan dan penonaktifan',
      body: [
        'Tim atau Kami dapat membatasi, menangguhkan, atau menonaktifkan akun apabila Ketentuan ini dilanggar atau terdapat indikasi penyalahgunaan. Akun juga berakhir ketika Tim menghapusnya atau layanan untuk kandidat berakhir.',
      ],
    },
    {
      id: 'tanggung-jawab',
      heading: 'Batas tanggung jawab',
      body: [
        'Aplikasi disediakan sebagaimana adanya. Sejauh diizinkan hukum, Kami tidak bertanggung jawab atas kerugian tidak langsung dari penggunaan atau ketidakmampuan menggunakan Aplikasi, atas data yang dicatat tidak benar oleh pengguna, maupun atas hasil pemilu.',
        'Tidak ada ketentuan di sini yang menghapus hak Anda berdasarkan Undang-Undang Pelindungan Data Pribadi atau peraturan lain yang tidak dapat dikesampingkan.',
      ],
    },
    {
      id: 'privasi',
      heading: 'Privasi dan penghapusan data',
      body: [
        'Pemrosesan data pribadi, termasuk cara meminta penghapusan, diatur dalam <a href="/privacy/pantau-relawan">Kebijakan Privasi Pantau Relawan</a>, yang merupakan bagian dari Ketentuan ini.',
      ],
    },
    {
      id: 'perubahan',
      heading: 'Perubahan ketentuan',
      body: [
        'Kami dapat memperbarui Ketentuan ini. Tanggal di bagian atas halaman selalu menunjukkan versi terkini, dan perubahan yang berdampak besar diberitahukan melalui Aplikasi atau Tim sebelum berlaku.',
      ],
    },
    {
      id: 'hukum',
      heading: 'Hukum yang berlaku',
      body: [
        'Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diupayakan diselesaikan secara musyawarah; apabila tidak tercapai, melalui pengadilan yang berwenang di Indonesia.',
      ],
    },
    {
      id: 'kontak',
      heading: 'Hubungi kami',
      groups: contactGroups,
    },
  ],
};
