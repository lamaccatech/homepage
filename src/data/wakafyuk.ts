/**
 * WakafYuk — privacy policy and terms of service, written from the app itself (github.com/lamaccatech/wakafyuk_mobile
 * and the Firebase backend github.com/lamaccatech/wakafyuk, last changed 2021). The app had no legal text: its
 * "Syarat & Ketentuan" menu item does nothing, and the privacy URL on Google Play pointed at a page that never existed.
 *
 * Claims that carry weight, so check the code before trimming them:
 *   - Donating adds a required "Infaq Pengembangan Aplikasi" of at least 2% (`feePercent`, lib/constants).
 *   - Payment is a manual bank transfer with a unique code, confirmed by an admin; unpaid donations lapse after 24 hours.
 *   - Firebase Analytics is built in, and user and donation records are copied to Algolia for search.
 *   - There is no in-app account deletion, so requests go by email.
 *
 * The operator's own domain (wakafyuk.com) no longer resolves, so its email address is not given as a contact.
 * Requests go to Lamacca, which holds the system and can act on them.
 */
import { processor } from './developer';
import type { Policy } from './privacy';

const controller = {
  name: 'PT Waqaf Peduli Indonesia',
  address:
    'GKM Green Tower Lt. 7 Unit 703 B, Jl. TB Simatupang Kav. 89G, Jakarta Selatan 12520, Indonesia',
  email: processor.email,
  phone: '+62 822 7116 4838 (WhatsApp)',
};

const shared = {
  slug: 'wakafyuk',
  app: 'WakafYuk',
  country: 'Indonesia',
  lang: 'id',
  androidPackage: 'com.wakafyuk.wakafyuk',
  iosBundleId: 'com.wakafyuk.wakafyuk',
  controller,
  autoNumber: true,
} as const;

const contactGroups = [
  {
    title: controller.name,
    body: 'Pengelola WakafYuk dan pengendali data',
    items: [controller.address, controller.phone],
  },
  {
    title: processor.name,
    body: 'Pengembang dan pemroses data — menerima permintaan data pribadi dan penghapusan akun',
    items: [processor.address, processor.email],
  },
];

export const wakafyukPrivacy: Policy = {
  ...shared,
  effective: '5 November 2026',
  updated: '5 November 2026',
  summary:
    'Bagaimana PT Waqaf Peduli Indonesia mengumpulkan, menggunakan, membagikan, dan melindungi data pribadi Anda di aplikasi WakafYuk.',

  highlights: [
    {
      label: 'Hanya data yang dibutuhkan untuk berwakaf',
      body: 'Nama, surel, nomor telepon, dan catatan donasi Anda. Aplikasi tidak meminta NIK, alamat, tanggal lahir, maupun data rekening Anda.',
    },
    {
      label: 'Tidak ada data kartu',
      body: 'Pembayaran dilakukan dengan transfer bank. Aplikasi tidak menerima atau menyimpan nomor kartu maupun kata sandi perbankan Anda.',
    },
    {
      label: 'Bisa berwakaf secara anonim',
      body: 'Pilih opsi anonim agar nama Anda tidak ditampilkan pada program; donasi Anda tampil sebagai “Hamba Allah”.',
    },
    {
      label: 'Tanpa iklan, tanpa penjualan data',
      body: 'Kami tidak menjual atau menyewakan data pribadi Anda, dan aplikasi tidak memuat iklan.',
    },
  ],

  sections: [
    {
      id: 'tentang',
      heading: 'Tentang kebijakan ini',
      body: [
        'Kebijakan Privasi ini menjelaskan bagaimana data pribadi diperlakukan di <strong>WakafYuk</strong>, platform wakaf tunai berbasis komunitas tempat Anda dapat mengenal program wakaf, berwakaf, dan mengikuti laporan perkembangannya.',
        'Kebijakan ini berlaku untuk aplikasi seluler WakafYuk dan sistem pendukungnya, termasuk dasbor yang digunakan pengelola dan nazhir. Selanjutnya keduanya disebut “Aplikasi”.',
      ],
      groups: [
        {
          title: 'Aplikasi yang dicakup kebijakan ini',
          items: [
            'Nama aplikasi: WakafYuk',
            'Nama paket Google Play: com.wakafyuk.wakafyuk',
            'Pengendali data: PT Waqaf Peduli Indonesia',
            'Pengembang dan pemroses data: PT Lamacca Kreatif Solusi',
          ],
        },
      ],
    },
    {
      id: 'tanggung-jawab',
      heading: 'Siapa yang bertanggung jawab atas data Anda',
      body: [
        '<strong>PT Waqaf Peduli Indonesia</strong> mengelola WakafYuk dan merupakan pengendali data pribadi: perusahaan ini menentukan tujuan dan cara pemrosesan data di dalam Aplikasi.',
        '<strong>PT Lamacca Kreatif Solusi</strong> membangun dan memelihara Aplikasi, memprosesnya hanya untuk menjalankan layanan, dan menerbitkannya melalui akun pengembang Google Play miliknya. Hal itu tidak menjadikannya pengendali atas data di dalam Aplikasi.',
        'Setiap program wakaf dikelola oleh <strong>nazhir</strong> yang terdaftar di Aplikasi. Nazhir menerima informasi donasi untuk programnya sebagaimana dijelaskan di bawah.',
      ],
    },
    {
      id: 'data',
      heading: 'Data pribadi yang kami kumpulkan',
      groups: [
        {
          title: 'Akun',
          body: 'Anda dapat berwakaf tanpa akun. Jika Anda mendaftar, kami menyimpan:',
          items: [
            'Nama, alamat surel, dan nomor telepon',
            'Kata sandi, yang dikelola oleh Firebase Authentication dan tidak dapat kami baca',
            'Foto profil, jika Anda mengunggahnya',
            'Akun Google yang Anda tautkan untuk masuk, jika ada',
            'Pilihan notifikasi Anda serta jumlah dan total donasi Anda',
          ],
        },
        {
          title: 'Donasi',
          items: [
            'Nama, alamat surel, dan nomor telepon donatur',
            'Program yang dipilih, jumlah wakaf, infaq pengembangan aplikasi, dan kode unik transfer',
            'Pesan atau doa yang Anda tulis, serta pilihan untuk tampil anonim',
            'Status pembayaran dan waktunya, serta pengaturan pengingat berkala',
          ],
          body: 'Donasi tanpa akun yang memakai surel atau nomor telepon yang sama dengan sebuah akun akan dikaitkan dengan akun tersebut.',
        },
        {
          title: 'Forum',
          items: ['Pertanyaan dan balasan yang Anda kirim, beserta nama dan foto profil Anda'],
        },
        {
          title: 'Data perangkat dan penggunaan',
          items: [
            'Token notifikasi perangkat dan jenis platformnya, untuk mengirim notifikasi',
            'Data penggunaan Aplikasi yang dikumpulkan Firebase Analytics, seperti layar yang dibuka, jenis perangkat, versi sistem operasi, dan perkiraan wilayah',
          ],
        },
      ],
      note: 'Aplikasi tidak meminta akses lokasi, kamera, kontak, maupun mikrofon. Foto profil dipilih dari galeri perangkat Anda.',
    },
    {
      id: 'tujuan',
      heading: 'Untuk apa data digunakan',
      list: [
        'Membuat dan mengamankan akun Anda',
        'Mencatat donasi, mencocokkan transfer Anda, dan mengonfirmasi pembayaran',
        'Menyampaikan donasi dan laporan program antara Anda dan nazhir',
        'Mengirim notifikasi tentang status donasi, pengingat berkala yang Anda atur, dan kabar program',
        'Menampilkan nama dan doa donatur pada program, kecuali Anda memilih anonim',
        'Menjalankan forum tanya jawab',
        'Memahami penggunaan Aplikasi agar dapat diperbaiki, serta menjaga keamanan layanan',
        'Memenuhi kewajiban hukum, termasuk pencatatan dan pelaporan wakaf',
      ],
    },
    {
      id: 'dasar',
      heading: 'Dasar pemrosesan',
      body: [
        'Kami memproses data pribadi sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (“UU PDP”), atas dasar pelaksanaan layanan yang Anda minta saat mendaftar atau berwakaf, kewajiban hukum, kepentingan yang sah untuk menjaga keamanan dan memperbaiki layanan, serta persetujuan Anda untuk hal-hal di luar itu.',
      ],
    },
    {
      id: 'pembagian',
      heading: 'Dengan siapa data dibagikan',
      body: ['Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda. Data hanya dibagikan kepada:'],
      groups: [
        {
          title: 'Nazhir program',
          body: 'Nazhir dapat melihat donasi untuk programnya, termasuk nama dan kontak donatur, untuk mengelola dan melaporkan wakaf.',
        },
        {
          title: 'Penyedia layanan',
          body: 'Google (Firebase Authentication, Cloud Firestore, Cloud Functions, Cloud Storage, Cloud Messaging, Firebase Analytics, Google Sign-In, dan Google Maps untuk peta kantor di halaman kontak) serta Algolia (pencarian data di dasbor pengelola). Mereka memproses data sebagai penyedia infrastruktur kami.',
        },
        {
          title: 'Pengembang',
          body: 'PT Lamacca Kreatif Solusi mengakses data sebatas yang diperlukan untuk menjalankan, mendukung, dan memperbaiki layanan.',
        },
        {
          title: 'Otoritas',
          body: 'Instansi pemerintah atau penegak hukum apabila diwajibkan oleh peraturan perundang-undangan atau perintah yang sah.',
        },
      ],
    },
    {
      id: 'penyimpanan',
      heading: 'Lokasi penyimpanan',
      body: [
        'Data disimpan di infrastruktur Google Cloud dan Firebase. Sebagian layanan tersebut, termasuk Cloud Functions di wilayah Tokyo (asia-northeast1), berjalan di luar Indonesia, dan Algolia mengoperasikan servernya di luar negeri. Transfer ini dilindungi oleh komitmen pelindungan data dari masing-masing penyedia, sejalan dengan ketentuan transfer data pribadi ke luar wilayah hukum Indonesia dalam UU PDP.',
      ],
    },
    {
      id: 'retensi',
      heading: 'Berapa lama data disimpan',
      list: [
        'Data akun disimpan selama akun Anda aktif.',
        'Catatan donasi disimpan selama diperlukan untuk pertanggungjawaban wakaf dan untuk jangka waktu yang diwajibkan peraturan. Setelah akun dihapus, catatan donasi dapat tetap disimpan tanpa identitas Anda agar laporan program tetap utuh.',
        'Donasi yang tidak dibayar dalam 24 jam dibatalkan otomatis.',
      ],
    },
    {
      id: 'keamanan',
      heading: 'Keamanan',
      body: [
        'Lalu lintas antara Aplikasi dan server dienkripsi, dan kata sandi dikelola oleh Firebase Authentication. Tidak ada sistem yang sepenuhnya aman; apabila terjadi kebocoran data pribadi yang berisiko merugikan Anda, kami akan memberitahukannya kepada Anda dan otoritas yang berwenang sesuai ketentuan UU PDP.',
      ],
    },
    {
      id: 'hak',
      heading: 'Hak Anda',
      body: ['Sesuai UU PDP, Anda dapat meminta kami untuk:'],
      list: [
        'memberikan akses dan salinan data pribadi Anda;',
        'memperbaiki data yang tidak akurat — nama dan foto dapat Anda ubah sendiri di Aplikasi;',
        'menghapus data pribadi dan akun Anda;',
        'menghentikan atau membatasi pemrosesan tertentu, dan menarik persetujuan yang pernah Anda berikan.',
      ],
      note: 'Kirim permintaan ke <strong>info@lamacca.co.id</strong>. Kami menanggapi paling lambat 3×24 jam sejak permintaan diterima, sesuai UU PDP.',
    },
    {
      id: 'hapus-akun',
      heading: 'Menghapus akun',
      body: [
        'Kirim surel ke <strong>info@lamacca.co.id</strong> dengan subjek “WakafYuk — permintaan penghapusan akun”, dari alamat surel yang terdaftar, atau sertakan nomor telepon akun Anda. Setelah identitas Anda kami verifikasi, akun masuk, foto profil, nomor telepon, dan alamat surel Anda dihapus, dan nama Anda dilepas dari catatan donasi serta forum.',
        'Menghapus Aplikasi dari perangkat tidak menghapus akun Anda.',
      ],
    },
    {
      id: 'anak',
      heading: 'Anak-anak',
      body: [
        'Aplikasi tidak ditujukan untuk anak di bawah 17 tahun. Jika Anda mengetahui ada data anak yang tercatat tanpa persetujuan orang tua atau wali, hubungi kami agar kami menghapusnya.',
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

export const wakafyukTerms: Policy = {
  ...shared,
  effective: '5 November 2026',
  updated: '5 November 2026',
  summary:
    'Syarat penggunaan aplikasi WakafYuk: akun, cara berwakaf dan membayar, infaq pengembangan aplikasi, peran nazhir, forum, serta batas tanggung jawab layanan.',

  highlights: [
    {
      label: 'Infaq aplikasi minimal 2%',
      body: 'Setiap donasi disertai infaq pengembangan aplikasi minimal 2% dari jumlah wakaf, yang ditampilkan terpisah sebelum Anda membayar.',
    },
    {
      label: 'Transfer bank, dikonfirmasi manual',
      body: 'Transfer sesuai jumlah yang ditampilkan, termasuk kode uniknya. Donasi yang tidak dibayar dalam 24 jam dibatalkan.',
    },
    {
      label: 'Program dikelola nazhir',
      body: 'Dana wakaf dan laporan program menjadi tanggung jawab nazhir pengelola program.',
    },
    {
      label: 'Wakaf tidak dapat ditarik kembali',
      body: 'Wakaf yang telah diterima tidak dapat dibatalkan. Hubungi kami jika ada kesalahan transfer.',
    },
  ],

  sections: [
    {
      id: 'penerimaan',
      heading: 'Penerimaan ketentuan',
      body: [
        'Dengan menggunakan <strong>WakafYuk</strong>, platform wakaf tunai yang dikelola PT Waqaf Peduli Indonesia (“Kami”), Anda menyetujui Ketentuan Layanan ini serta <a href="/privacy/wakafyuk">Kebijakan Privasi</a> yang berlaku. Aplikasi dikembangkan oleh PT Lamacca Kreatif Solusi.',
        'Jika Anda tidak setuju, mohon tidak menggunakan Aplikasi.',
      ],
    },
    {
      id: 'layanan',
      heading: 'Tentang layanan',
      body: [
        'WakafYuk mempertemukan wakif dengan program wakaf yang dikelola oleh nazhir. Aplikasi juga memuat artikel Wakafpedia, informasi acara, dan forum tanya jawab.',
        'Kami menyediakan platform; pengelolaan harta wakaf, pelaksanaan program, dan laporannya menjadi tanggung jawab nazhir program sesuai Undang-Undang Nomor 41 Tahun 2004 tentang Wakaf.',
      ],
    },
    {
      id: 'akun',
      heading: 'Akun',
      list: [
        'Anda dapat berwakaf tanpa akun. Untuk mendaftar, gunakan nama, nomor telepon, dan alamat surel yang benar dan milik Anda sendiri.',
        'Jaga kerahasiaan kata sandi dan perangkat Anda. Aktivitas dari akun Anda dianggap dilakukan oleh Anda.',
        'Anda harus berusia minimal 17 tahun, atau mendapat izin orang tua atau wali.',
      ],
    },
    {
      id: 'wakaf',
      heading: 'Berwakaf dan membayar',
      list: [
        'Jumlah wakaf minimal Rp10.000.',
        'Setiap donasi wajib disertai <strong>Infaq Pengembangan Aplikasi</strong> minimal 2% dari jumlah wakaf. Infaq ini digunakan untuk mengembangkan dan menjalankan Aplikasi, terpisah dari dana wakaf, dan jumlahnya ditampilkan sebelum Anda membayar.',
        'Pembayaran dilakukan dengan transfer bank ke rekening yang ditampilkan. Jumlah yang harus ditransfer memuat kode unik untuk mencocokkan pembayaran Anda; nilai kode unik tersebut ikut didonasikan.',
        'Pembayaran dikonfirmasi oleh admin setelah dana diterima. Donasi yang tidak dibayar dalam 24 jam dibatalkan otomatis.',
        'Fitur donasi berkala hanya mengirim pengingat; Aplikasi tidak menarik dana dari rekening Anda secara otomatis.',
      ],
    },
    {
      id: 'pembatalan',
      heading: 'Pembatalan dan kesalahan transfer',
      body: [
        'Wakaf yang telah diterima tidak dapat ditarik kembali, sesuai sifat wakaf menurut Undang-Undang Nomor 41 Tahun 2004. Jika Anda mentransfer dengan jumlah keliru, mentransfer dua kali, atau mentransfer untuk donasi yang sudah dibatalkan, hubungi kami dengan bukti transfer agar kami dapat memeriksanya bersama nazhir.',
      ],
    },
    {
      id: 'program',
      heading: 'Program dan laporan',
      body: [
        'Informasi program, target dana, tenggat, dan laporan perkembangan disampaikan oleh nazhir. Kami berupaya memastikan informasi tersebut akurat, namun tidak menjamin hasil suatu program. Pertanyaan tentang penggunaan dana dapat Anda sampaikan kepada kami untuk diteruskan kepada nazhir.',
      ],
    },
    {
      id: 'forum',
      heading: 'Forum dan konten pengguna',
      body: ['Saat menulis di forum, Anda setuju untuk tidak:'],
      list: [
        'menyebarkan ujaran kebencian, fitnah, penipuan, atau konten yang melanggar hukum;',
        'membagikan data pribadi orang lain tanpa izin;',
        'mempromosikan penggalangan dana di luar Aplikasi atau menyamar sebagai nazhir maupun pengelola.',
      ],
      note: 'Kami dapat menghapus konten yang melanggar Ketentuan ini dan membatasi akun yang mengirimnya.',
    },
    {
      id: 'penggunaan',
      heading: 'Penggunaan yang dilarang',
      list: [
        'Menggunakan Aplikasi untuk pencucian uang, pendanaan kegiatan terlarang, atau transaksi atas nama orang lain tanpa izinnya.',
        'Mengganggu, memindai, atau berupaya membobol sistem.',
        'Merekayasa balik, membongkar, atau memperbanyak Aplikasi di luar yang diizinkan hukum.',
      ],
    },
    {
      id: 'kepemilikan',
      heading: 'Kekayaan intelektual',
      body: [
        'Nama dan logo WakafYuk milik PT Waqaf Peduli Indonesia. Konten program milik nazhir masing-masing. Aplikasi, kode sumber, dan desainnya milik PT Lamacca Kreatif Solusi atau pemberi lisensinya; Anda mendapat hak terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk menggunakannya.',
      ],
    },
    {
      id: 'ketersediaan',
      heading: 'Ketersediaan layanan',
      body: [
        'Fitur dapat berubah, dibatasi, atau dihentikan untuk pemeliharaan, keamanan, atau kebijakan pengelola, dan layanan dapat terganggu oleh hal di luar kendali kami. Jika layanan dihentikan, kami akan memberitahukannya melalui Aplikasi dan memastikan donasi yang sudah diterima tetap disalurkan kepada nazhirnya.',
      ],
    },
    {
      id: 'tanggung-jawab',
      heading: 'Batas tanggung jawab',
      body: [
        'Aplikasi disediakan sebagaimana adanya. Sejauh diizinkan hukum, Kami dan PT Lamacca Kreatif Solusi tidak bertanggung jawab atas kerugian tidak langsung dari penggunaan Aplikasi, termasuk akibat transfer ke rekening selain yang ditampilkan di Aplikasi.',
        'Tidak ada ketentuan di sini yang menghapus hak Anda berdasarkan Undang-Undang Pelindungan Konsumen, Undang-Undang Pelindungan Data Pribadi, atau peraturan lain yang tidak dapat dikesampingkan.',
      ],
    },
    {
      id: 'privasi',
      heading: 'Privasi dan penghapusan akun',
      body: [
        'Pemrosesan data pribadi Anda, termasuk cara menghapus akun, diatur dalam <a href="/privacy/wakafyuk">Kebijakan Privasi WakafYuk</a>, yang merupakan bagian dari Ketentuan ini.',
      ],
    },
    {
      id: 'perubahan',
      heading: 'Perubahan ketentuan',
      body: [
        'Kami dapat memperbarui Ketentuan ini. Tanggal di bagian atas halaman selalu menunjukkan versi terkini, dan perubahan yang berdampak besar diberitahukan melalui Aplikasi sebelum berlaku.',
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
