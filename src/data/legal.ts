/**
 * The terms of service and the account-deletion page of the apps we operate for a client. They reuse the shape of
 * a privacy policy (`Policy`), so the same page component renders all three documents.
 *
 * Both pages are public URLs Google Play and the App Store ask for next to the privacy policy. What they say has to
 * stay true to what the app does: the in-app deletion request and its review are described from the e-partai
 * mobile app (`Akun > Hapus Akun`), and the retention wording follows the privacy policy of the same app.
 */
import { getPolicy } from './privacy';
import type { Policy } from './privacy';

const base = getPolicy('simpan');
if (base === undefined) {
  throw new Error('The simpan privacy policy is missing');
}

const shared = {
  slug: 'simpan',
  app: base.app,
  country: base.country,
  lang: base.lang,
  androidPackage: base.androidPackage,
  iosBundleId: base.iosBundleId,
  controller: base.controller,
  autoNumber: true,
} as const;

const terms: Policy = {
  ...shared,
  effective: '28 Oktober 2026',
  updated: '28 Oktober 2026',
  summary:
    'Syarat penggunaan aplikasi simPAN: keanggotaan, akun, perekrutan relawan, perilaku pengguna, serta batas tanggung jawab layanan.',

  highlights: [
    {
      label: 'Data yang benar, dari Anda sendiri',
      body: 'Keanggotaan dan Kartu Tanda Anggota diterbitkan berdasarkan data yang Anda isi. Data palsu, milik orang lain, atau menyesatkan dapat membuat pendaftaran ditolak dan akun dinonaktifkan.',
    },
    {
      label: 'Pengurus yang memverifikasi',
      body: 'Penerimaan, penolakan, dan permintaan perbaikan keanggotaan diputuskan oleh pengurus partai yang berwenang, bukan otomatis oleh aplikasi.',
    },
    {
      label: 'Akun Anda tanggung jawab Anda',
      body: 'Jaga kata sandi dan perangkat Anda. Aktivitas yang dilakukan dari akun Anda dianggap dilakukan oleh Anda.',
    },
    {
      label: 'Anda dapat keluar kapan saja',
      body: 'Anda dapat mengajukan penghapusan akun dari dalam aplikasi, yang ditinjau oleh pengurus. Keanggotaan berakhir bersama akunnya.',
    },
  ],

  sections: [
    {
      id: 'penerimaan',
      heading: 'Penerimaan ketentuan',
      body: [
        'Dengan mendaftar, masuk, atau menggunakan <strong>simPAN</strong>, aplikasi keanggotaan dan kaderisasi Partai Amanat Nasional (“Partai”), Anda menyatakan telah membaca dan menyetujui Ketentuan Layanan ini serta <a href="/privacy/simpan">Kebijakan Privasi</a> yang berlaku.',
        'Jika Anda tidak setuju, mohon tidak menggunakan Aplikasi. Aplikasi dikembangkan dan dioperasikan oleh PT Lamacca Kreatif Solusi atas nama Partai, yang bertindak sebagai pengendali data.',
      ],
    },
    {
      id: 'syarat',
      heading: 'Siapa yang dapat menggunakan Aplikasi',
      body: [
        'Keanggotaan partai politik hanya terbuka bagi Warga Negara Indonesia yang telah berusia 17 tahun atau sudah menikah, sesuai Undang-Undang Nomor 2 Tahun 2008 tentang Partai Politik. Dengan mendaftar, Anda menyatakan memenuhi syarat tersebut.',
        'Sebagian halaman — beranda, berita, profil partai, dan susunan pengurus — dapat dibuka tanpa akun. Kartu anggota, perekrutan relawan, dan fitur lain yang memerlukan identitas hanya tersedia setelah Anda masuk.',
      ],
    },
    {
      id: 'akun',
      heading: 'Akun pengguna',
      list: [
        'Anda wajib memberikan data yang benar, akurat, dan mutakhir, termasuk NIK, nama, dan foto yang sesuai dengan KTP Anda.',
        'Satu orang hanya boleh memiliki satu akun. Pendaftaran ganda, pendaftaran atas nama orang lain tanpa sepengetahuan dan persetujuannya, serta penyamaran sebagai pihak lain tidak diperbolehkan.',
        'Anda bertanggung jawab menjaga kerahasiaan kata sandi dan keamanan perangkat Anda. Segera hubungi kami jika Anda menduga akun Anda digunakan oleh orang lain.',
        'Anda dapat mengubah kata sandi kapan saja dari menu Akun.',
      ],
    },
    {
      id: 'keanggotaan',
      heading: 'Keanggotaan dan Kartu Tanda Anggota',
      list: [
        'Pendaftaran Anda ditinjau oleh pengurus partai yang berwenang sesuai wilayah Anda. Status keanggotaan dapat berupa menunggu, terverifikasi, atau ditolak, dan alasan penolakan ditampilkan di Aplikasi.',
        'Persetujuan, penolakan, dan permintaan perbaikan data berada pada kewenangan pengurus sesuai ketentuan organisasi Partai. Aplikasi tidak menjamin pendaftaran akan disetujui.',
        'Kartu Tanda Anggota digital dan kode QR-nya hanya sah selama Anda tercatat sebagai anggota, dan hanya untuk Anda. Dilarang memalsukan, memperjualbelikan, atau meminjamkannya kepada orang lain.',
        'Keanggotaan berakhir apabila akun dihapus, dinonaktifkan karena pelanggaran, atau diakhiri menurut ketentuan organisasi Partai.',
      ],
    },
    {
      id: 'relawan',
      heading: 'Perekrutan dan kerelawanan',
      body: [
        'Anggota yang berperan sebagai perekrut dapat mendaftarkan relawan melalui Aplikasi. Sebagai perekrut, Anda menyatakan bahwa:',
      ],
      list: [
        'orang yang Anda daftarkan telah mengetahui dan menyetujui data pribadinya dicatat serta memahami untuk apa data itu digunakan;',
        'data yang Anda masukkan adalah data yang benar milik orang tersebut;',
        'Anda hanya merekrut dan melihat data di wilayah kerja yang menjadi tanggung jawab Anda.',
      ],
      note: 'Orang yang didaftarkan oleh perekrut tetap memiliki seluruh hak atas data pribadinya, sebagaimana dijelaskan dalam Kebijakan Privasi.',
    },
    {
      id: 'penggunaan',
      heading: 'Penggunaan yang diperbolehkan',
      body: ['Anda setuju untuk tidak:'],
      list: [
        'mengirim data palsu, dokumen milik pihak lain, atau informasi yang menyesatkan;',
        'mengakses data anggota atau relawan di luar kewenangan Anda, atau menggunakan data tersebut di luar kepentingan Partai;',
        'mengambil, menyalin secara massal, atau menyebarkan data anggota yang dapat Anda lihat melalui Aplikasi;',
        'mengganggu, memindai, atau berupaya membobol sistem, atau menyalahgunakan fitur untuk keperluan yang melanggar hukum;',
        'menggunakan Aplikasi untuk menyebarkan ancaman, ujaran kebencian, penipuan, atau konten yang merugikan pihak lain;',
        'merekayasa balik, membongkar, atau memperbanyak Aplikasi di luar yang diizinkan hukum.',
      ],
    },
    {
      id: 'konten',
      heading: 'Konten dan kekayaan intelektual',
      body: [
        'Berita, banner, dan profil partai di Aplikasi bersumber dari kanal resmi Partai (pan.or.id) dan tetap menjadi milik Partai. Nama, lambang, dan tanda Partai adalah milik Partai.',
        'Aplikasi, kode sumber, dan desainnya adalah milik PT Lamacca Kreatif Solusi atau pemberi lisensinya, dan digunakan atas nama Partai. Anda mendapat hak terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk menggunakan Aplikasi selama menjadi pengguna.',
        'Foto dan data yang Anda unggah tetap milik Anda. Anda mengizinkan Partai dan pemrosesnya menggunakannya sebatas yang diperlukan untuk menjalankan keanggotaan, sebagaimana dijelaskan dalam Kebijakan Privasi.',
      ],
    },
    {
      id: 'ketersediaan',
      heading: 'Ketersediaan layanan',
      body: [
        'Kami berupaya menjaga Aplikasi tetap tersedia, namun fitur, tampilan, atau alur tertentu dapat berubah, dibatasi, atau dihentikan sewaktu-waktu untuk keperluan pemeliharaan, keamanan, perbaikan, atau kebijakan organisasi. Layanan dapat terganggu oleh hal di luar kendali kami, seperti gangguan jaringan atau penyedia infrastruktur.',
        'Fitur pembacaan KTP otomatis adalah bantuan pengisian formulir; hasilnya perlu Anda periksa sebelum disimpan dan dapat keliru.',
      ],
    },
    {
      id: 'pembatasan',
      heading: 'Pembatasan dan penangguhan',
      body: [
        'Akun dapat dibatasi, ditangguhkan, atau dinonaktifkan apabila ditemukan pelanggaran Ketentuan ini atau indikasi penyalahgunaan sistem. Pengurus dapat menolak akses ke fitur tertentu apabila data Anda belum lengkap, belum diverifikasi, atau tidak memenuhi persyaratan.',
        'Apabila akun Anda dibatasi, Anda dapat menghubungi kami untuk meminta penjelasan atau mengajukan keberatan.',
      ],
    },
    {
      id: 'tanggung-jawab',
      heading: 'Batas tanggung jawab',
      body: [
        'Aplikasi disediakan sebagaimana adanya. Sejauh diizinkan hukum, Partai dan PT Lamacca Kreatif Solusi tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan atau ketidakmampuan menggunakan Aplikasi, termasuk akibat data yang Anda berikan tidak benar atau kata sandi yang Anda bagikan kepada pihak lain.',
        'Tidak ada ketentuan di sini yang menghapus hak Anda berdasarkan Undang-Undang Pelindungan Data Pribadi, undang-undang pelindungan konsumen, atau peraturan lain yang tidak dapat dikesampingkan.',
      ],
    },
    {
      id: 'privasi',
      heading: 'Privasi dan data',
      body: [
        'Pemrosesan data pribadi Anda diatur dalam <a href="/privacy/simpan">Kebijakan Privasi simPAN</a>, yang merupakan bagian dari Ketentuan ini.',
      ],
    },
    {
      id: 'hapus-akun',
      heading: 'Mengakhiri keanggotaan dan menghapus akun',
      body: [
        'Anda dapat mengajukan penghapusan akun kapan saja dari dalam Aplikasi, melalui menu Akun. Permintaan ditinjau oleh pengurus, dan menghapus Aplikasi dari perangkat tidak menghapus akun. Tata cara lengkapnya ada di halaman <a href="/account-deletion/simpan">Penghapusan Akun simPAN</a>.',
      ],
    },
    {
      id: 'perubahan',
      heading: 'Perubahan ketentuan',
      body: [
        'Kami dapat memperbarui Ketentuan ini apabila terjadi perubahan pada Aplikasi atau diwajibkan oleh peraturan. Tanggal di bagian atas halaman selalu menunjukkan versi terkini. Apabila perubahannya berdampak besar, kami akan memberitahukannya melalui Aplikasi atau saluran resmi Partai sebelum berlaku. Dengan tetap menggunakan Aplikasi setelah itu, Anda dianggap menyetujui perubahan tersebut.',
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
      body: ['Untuk pertanyaan mengenai Ketentuan ini, hubungi Partai:'],
      groups: [
        {
          title: 'Partai Amanat Nasional (DPP PAN)',
          items: [
            'Jl. Senopati No. 113, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
            'dpp.partaiamanatnasional@gmail.com',
            '+62 21 7884 8469',
          ],
        },
        {
          title: 'PT Lamacca Kreatif Solusi',
          body: 'Pengembang Aplikasi — hanya untuk pertanyaan teknis',
          items: ['info@lamacca.co.id'],
        },
      ],
    },
  ],
};

const accountDeletion: Policy = {
  ...shared,
  effective: '28 Oktober 2026',
  updated: '28 Oktober 2026',
  summary:
    'Cara mengajukan penghapusan akun simPAN, data apa yang dihapus, apa yang tetap ada tanpa identitas Anda, serta bagaimana permintaan Anda ditinjau.',

  highlights: [
    {
      label: 'Diajukan dari dalam aplikasi',
      body: 'Buka Akun lalu pilih Hapus Akun. Anda membaca dampaknya, menulis alasan, dan mengirim permintaan. Tidak perlu surel.',
    },
    {
      label: 'Ditinjau oleh pengurus',
      body: 'Permintaan Anda disetujui atau ditolak oleh pengurus partai. Akun Anda tetap aktif sampai permintaan disetujui.',
    },
    {
      label: 'Keanggotaan ikut berakhir',
      body: 'Data Anda disimpan selama Anda menjadi anggota. Menghapus akun mengakhiri keanggotaan dan Kartu Tanda Anggota digital Anda, dan datanya dihapus. Tindakan ini tidak dapat dibatalkan setelah selesai.',
    },
    {
      label: 'Menghapus aplikasi tidak cukup',
      body: 'Menghapus simPAN dari perangkat tidak menghapus akun maupun data Anda. Ikuti langkah di halaman ini.',
    },
  ],

  sections: [
    {
      id: 'tentang',
      heading: 'Tentang halaman ini',
      body: [
        'Halaman ini menjelaskan bagaimana pengguna <strong>simPAN</strong> mengajukan penghapusan akun, data apa yang terdampak, dan apa yang tetap ada tanpa identitas Anda. Halaman ini dapat dibuka tanpa masuk ke Aplikasi.',
        'Partai Amanat Nasional adalah pengendali data, dan PT Lamacca Kreatif Solusi mengoperasikan Aplikasi sebagai pemroses data, sebagaimana dijelaskan dalam <a href="/privacy/simpan">Kebijakan Privasi</a>.',
      ],
    },
    {
      id: 'cara',
      heading: 'Cara mengajukan penghapusan akun',
      list: [
        'Buka aplikasi simPAN dan masuk ke akun Anda.',
        'Buka tab <strong>Akun</strong>, lalu pilih <strong>Hapus Akun</strong> pada kelompok Keamanan.',
        'Baca penjelasan dampak penghapusan, tulis alasan Anda, lalu kirim permintaan.',
        'Permintaan Anda diteruskan ke pengurus untuk ditinjau. Anda dapat melihat statusnya — menunggu persetujuan, disetujui, atau ditolak — di halaman yang sama.',
      ],
      note: 'Mengirim permintaan atau keluar dari Aplikasi belum berarti akun dan data Anda langsung terhapus. Akun terhapus setelah pengurus menyetujui permintaan dan prosesnya selesai.',
    },
    {
      id: 'tanpa-aplikasi',
      heading: 'Jika Anda tidak dapat membuka aplikasi',
      body: [
        'Jika Anda tidak bisa masuk, atau sudah menghapus Aplikasi dari perangkat, kirimkan permintaan melalui surel ke <strong>dpp.partaiamanatnasional@gmail.com</strong> dengan subjek “simPAN — permintaan penghapusan akun”. Sertakan nama lengkap dan alamat surel yang terdaftar pada akun Anda.',
        'Kami memverifikasi identitas Anda terlebih dahulu agar akun tidak dihapus oleh pihak yang tidak berhak.',
      ],
    },
    {
      id: 'peninjauan',
      heading: 'Bagaimana permintaan ditinjau',
      list: [
        'Pengurus memeriksa bahwa permintaan benar berasal dari pemilik akun.',
        'Kami menanggapi paling lambat <strong>3×24 jam</strong> sejak permintaan diterima, sesuai Pasal 21 UU PDP.',
        'Jika permintaan disetujui, penghapusan dijalankan dan Anda dikeluarkan dari Aplikasi.',
        'Jika permintaan ditolak, Anda menerima alasannya dan akun Anda tetap aktif. Anda dapat mengajukan kembali setelah masalahnya diselesaikan.',
      ],
    },
    {
      id: 'dihapus',
      heading: 'Data yang dihapus',
      body: ['Setelah permintaan disetujui, kami menghapus atau menganonimkan data berikut:'],
      list: [
        'akses masuk Anda: akun dinonaktifkan dan kata sandi serta sesi dicabut;',
        'foto diri dan foto KTP;',
        'nomor telepon dan alamat surel;',
        'alamat tempat tinggal dan data kependudukan lain;',
        'data pendidikan;',
        'data keanggotaan: Kartu Tanda Anggota digital, kode QR, dan catatan keanggotaan Anda.',
      ],
    },
    {
      id: 'disimpan',
      heading: 'Data yang tetap ada',
      body: [
        'Data keanggotaan Anda disimpan <strong>selama Anda menjadi anggota</strong>, dan tidak lebih lama. Karena penghapusan akun mengakhiri keanggotaan, data pribadi Anda dihapus atau dianonimkan pada saat itu. Yang dapat tetap ada hanyalah catatan yang tidak lagi mengidentifikasi Anda:',
      ],
      list: [
        'Jika Anda pernah menjadi saksi dan melaporkan hasil penghitungan suara, laporan itu tetap disimpan tanpa identitas Anda, agar hasil penghitungan tetap utuh.',
        'Jika Anda pernah merekrut relawan, data relawan tersebut tetap tercatat atas nama mereka sendiri; hanya keterkaitan Anda sebagai perekrut yang dilepas.',
        'Catatan teknis dan laporan galat yang tidak memuat identitas Anda disimpan dalam jangka pendek sesuai kebutuhan operasional.',
      ],
    },

    {
      id: 'dampak',
      heading: 'Dampak penghapusan akun',
      list: [
        'Keanggotaan Anda berakhir, dan Kartu Tanda Anggota digital beserta kode QR-nya tidak lagi berlaku.',
        'Anda tidak dapat lagi masuk ke Aplikasi dengan akun tersebut. Untuk menjadi anggota lagi, Anda perlu mendaftar ulang dan menunggu verifikasi.',
        'Penghapusan tidak dapat dibatalkan setelah selesai.',
      ],
      note: 'Akun pengurus, administrator, dan kandidat yang masih memiliki tim relawan tidak dapat dihapus dari Aplikasi. Hubungi kami agar kewenangan dan data tim dialihkan terlebih dahulu.',
    },
    {
      id: 'kontak',
      heading: 'Butuh bantuan',
      body: ['Untuk pertanyaan tentang penghapusan akun atau data Anda, hubungi Partai:'],
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
      ],
    },
  ],
};

export const termsOfService: Policy[] = [terms];
export const accountDeletions: Policy[] = [accountDeletion];
