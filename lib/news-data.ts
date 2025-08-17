export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  featured: boolean;
  image?: string;
  sourceUrl: string;
}

export const newsData: NewsArticle[] = [
  {
    id: "observasi-mahasiswa-desa-calungbungur",
    title:
      "Observasi Mahasiswa Universitas Bina Bangsa Kesekolah SD 1 Calung Bungur Kec. Sajira-Lebak, Banten",
    excerpt: "KEGIATAN PERIZINAN MENGAJARDESA CALUNGBUNGUR, LEBAK-BANTEN",
    content: `
      <p>Observasi Mahasiswa Universitas Bina Bangsa Kesekolah SD 1 Calung Bungur Kec. Sajira-Lebak, Banten.</p>

      <h3>Rangkaian Acara Observasi</h3>
      <ul>
        <li>Pengantar dan sambutan dari pihak sekolah</li>
        <li>Observasi kelas dan interaksi dengan siswa</li>
        <li>Diskusi kelompok tentang temuan observasi</li>
        <li>Penyusunan laporan hasil observasi</li>
      </ul>

    `,
    date: "2025-07-14",
    author: "Pemerintah Desa",
    category: "Acara",
    featured: true,
    image: "/images/acara1.png",
    sourceUrl:
      "https://www.kompasiana.com/kkm64calungbungur/687b6a7aed64156bb3602862/observasi-mahasiswa-universitas-bina-bangsa-kesekolah-sd-1-calung-bungur-kec-sajira-lebak-banten?utm_source=Whatsapp&utm_medium=Refferal&utm_campaign=Sharing_Desktop",
  },

  ///
  {
    id: "KKM-64-Uniba-Gelar-Lomba",
    title: "KKM 64 Uniba Gelar Lomba Kegiatan Keagamaan",
    excerpt:
      "Berlokasi di TPA Saung Hijaiyah, Desa Calung Bungur Kecamatan Sajira Kabupaten Lebak, Mahasiswa Universitas Bina Bangsa (Uniba) menggelar sejumlah lomba yang berkaitan dengan keagamaan.",
    content: `
      <p>Kegiatan yang digelar Kelompok Kuliah Kerja Mahasiswa (KKM) 64 Uniba itu bertemakan Pekan Ceria Anak Sholeh dan Sholehah.
Ketua KKM Uniba Kelompok 64, Rizki Rifaldi, mengatakan kegiatan tersebut dilaksanakan dalam rangka meningkatkan semangat syiar Islam dan menumbuhkan kecintaan anak-anak terhadap kegiatan keagamaan.</p>

    <p>"Setiap cabang lomba tidak hanya menguji kemampuan peserta, namun juga menjadi sarana pembentukan karakter dan penguatan nilai-nilai spiritual sejak dini," terangnya.

Lanjut Rizki, peserta kegiatan merupakan anak-anak dari TPA Saung Hijaiyah dan beberapa anak sekitar desa yang aktif mengikuti kegiatan keagamaan.

Dengan mengenakan pakaian muslim dan muslimah yang rapi dan penuh semangat, para peserta satu per satu menunjukkan kemampuan terbaik mereka di hadapan para juri dan penonton.</p>
    `,
    date: "2025-08-11",
    author: "Pemerintah Desa",
    category: "Komunitas",
    featured: false,
    image: "/images/acara2.png",
    sourceUrl:
      "https://www.bantenekspose.id/banten/amp/23415707362/tingkatkan-semangat-syiar-islam-kkm-64-uniba-gelar-lomba-kegiatan-keagamaan-di-desa-calung-bungur",
  },
  {
    id: "mahasiswa-kkm-64-universitas-bina-bangsa-gelar-penyuluhan-phbs-di-sdn-1-calung-bungur",
    title:
      "Mahasiswa KKM 64 Universitas Bina Bangsa Gelar Penyuluhan PHBS di SDN 1 Calung Bungur",
    excerpt:
      " Mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 64 Universitas Bina Bangsa (Uniba) menggelar kegiatan penyuluhan Perilaku Hidup Bersih dan Sehat (PHBS) di SDN 1 Calung Bungur, Kecamatan Sajira Kabupaten Lebak.",
    content: `
      <p>Kegiatan yang mengusung tema “Masa Pubertas Sehat, Masa Depan Cerah, dan Pentingnya Mencuci Tangan” kegiatan ini berlangsung pada Kamis 31 Juli 2025.


"Tujuannya adalah memberikan edukasi kesehatan kepada siswa-siswi sekolah dasar melalui pendekatan yang menyenangkan dan mudah dipahami," kata Ketua Kelompok KKM 64 Rizki Rifaldi.
Dalam kegiatan tersebut, mahasiswa KKM Uniba menyampaikan materi melalui berbagai metode interaktif, seperti games edukatif, simulasi cara mencuci tangan yang benar, dan sesi tanya jawab.

Menurut Rizki, pendekatan ini dipilih agar siswa lebih mudah memahami pentingnya menjaga kebersihan diri dan menjalani masa pubertas dengan sehat.</p>
    `,
    date: "2025-08-01",
    author: "Pemerintah Desa",
    category: "Komunitas",
    featured: false,
    image: "/images/acara3.png",
    sourceUrl:
      "https://www.bantenekspose.id/pendidikan/23415647710/mahasiswa-kkm-64-universitas-bina-bangsa-gelar-penyuluhan-phbs-di-sdn-1-calung-bungur",
  },
  {
    id: "mahasiswa-kkm-64-universitas-bina-bangsa-bantu-suplai-telur-untuk-umkm-di-desa-calung-bungur",
    title:
      "Mahasiswa KKM 64 Universitas Bina Bangsa Bantu Suplai Telur untuk UMKM di Desa Calung Bungur",
    excerpt:
      "Mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 64 Universitas Bina Bangsa (Uniba) tahun 2025 turut berkontribusi dalam mendukung pertumbuhan ekonomi lokal.",
    content: `
      <p>Ketua KKM Uniba Kelompok 64, Rizki Rifaldi, menyampaikan kegiatan ini dilaksanakan sebagai bentuk pengabdian kepada masyarakat oleh mahasiswa Uniba yang tengah menjalani program KKM pada tahun 2025, fokus di Calung Bugur.

"Tujuan dari kegiatan, tak lain untuk membantu mempermudah akses pasokan telur ayam yang menjadi salah satu bahan baku utama bagi pelaku UMKM, seperti pembuat kue tradisional, jajanan pasar, dan makanan siap saji," kata Rizki.

Lanjutnya, melalui inisiatif ini, mahasiswa menjalin kerja sama langsung dengan peternak ayam petelur dari wilayah sekitar untuk memasok telur secara langsung tanpa perantara.
Menurut Rizki, kendala utama yang selama ini dihadapi UMKM di desa tersebut adalah terbatasnya akses terhadap pasokan telur yang stabil dan terjangkau.

Melalui program KKM, mahasiswa berperan aktif menjembatani kebutuhan pelaku usaha dengan para peternak, sehingga pasokan dapat terjaga dengan kualitas yang baik dan harga yang lebih bersaing.

“Kami percaya bahwa pemberdayaan ekonomi masyarakat dapat dimulai dari langkah-langkah sederhana. Membantu memastikan ketersediaan bahan baku seperti telur ayam merupakan bentuk dukungan nyata terhadap kelangsungan usaha kecil di pedesaan,” sambung Rizki.</p>
    `,
    date: "2025-08-02",
    author: "Kepala Desa",
    category: "Komunitas",
    featured: false,
    image: "/images/acara4.png",
    sourceUrl:
      "https://www.bantenekspose.id/ekonomi/amp/23415655170/mahasiswa-kkm-64-universitas-bina-bangsa-bantu-suplai-telur-untuk-umkm-di-desa-calung-bungur",
  },
  {
    id: "mahasiswa-kkm-64-universitas-bina-bangsa-gelar-program-pahlawan-kecil-lingkungan-di-sd-desa-calung-bungur",
    title:
      "Mahasiswa KKM 64 UNIBA Gelar Program “Pahlawan Kecil Lingkungan” di SD Desa Calung Bungur",
    excerpt:
      "mahasiswa KKM 64 UNIBA menggelar program “Pahlawan Kecil Lingkungan” di SD Desa Calung Bungur",
    content: `
      <p>Mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Bina Bangsa (UNIBA) Kelompok 64 melaksanakan program bertema “Pahlawan Kecil Lingkungan” di salah satu sekolah dasar di Desa Calung Bungur.


Kegiatan ini bertujuan menanamkan kesadaran menjaga kelestarian lingkungan sekaligus melatih keterampilan menanam sejak usia dini.</p>
    `,
    date: "2025-08-14",
    author: "Kepala Desa",
    category: "Komunitas",
    featured: false,
    image: "/images/acara5.png",
    sourceUrl:
      "https://www.swarabanten.com/2025/08/mahasiswa-kkm-64-uniba-gelar-program.html",
  },
  {
    id: "kedepankan-agama-kelompok-64-mahasiswa-kkm-uniba-salurkan-bantuan-iqra-di-sajira",
    title:
      "Kedepankan Agama, Kelompok 64 Mahasiswa KKM Uniba Salurkan Bantuan Iqra di Sajira",
    excerpt:
      "Kelompok 64 Kuliah Kerja Mahasiswa (KKM) Universitas Bina Bangsa (Uniba), telah menunjukkan kepeduliannya terhadap pendidikan agama di masyarakat.",
    content: `
      <p>Kelompok 64 Kuliah Kerja Mahasiswa (KKM) Universitas Bina Bangsa (Uniba), telah menunjukkan kepeduliannya terhadap pendidikan agama di masyarakat.</p>
    `,
    date: "2025-08-14",
    author: "Kepala Desa",
    category: "Komunitas",
    featured: false,
    image: "/images/acara6.png",
    sourceUrl:
      "https://www.bantenraya.com/kampus/12715726908/kedepankan-agama-kelompok-64-mahasiswa-kkm-uniba-salurkan-bantuan-iqra-di-sajira",
  },
  {
    id: "penerimaan-mahasiswa-universitas-bina-bangsa-di-desa-calung-bungur-kec-sajira-lebak-banten",
    title:
      "Penerimaan Mahasiswa Universitas Bina Bangsa di Desa Calung Bungur Kec.Sajira-Lebak,Banten",
    excerpt:
      "Pada hari Senin, 07 Juli 2025, rombongan mahasiswa/i Universitas Bina Bangsa telah tiba dengan selamat di Desa Calung Bungur, Kecamatan Sajira, Kabupaten Lebak, Banten, untuk melaksanakan kegiatan Kuliah Kerja Mahasiswa (KKM).",
    content: `
      <p>Kami mengucapkan terima kasih yang sebesar-besarnya kepada Bapak Kepala Desa Calung Bungur beserta jajaran perangkat desa, serta seluruh masyarakat Desa Calung Bungur atas sambutan hangat dan dukungan yang luar biasa dalam penerimaan mahasiswa KKM kami.

Kegiatan KKM ini merupakan salah satu bentuk pengabdian kepada masyarakat yang diinisiasi oleh Universitas Bina Bangsa. Kami berharap, kehadiran mahasiswa/i kami dapat memberikan kontribusi positif, berbagi ilmu, serta bersama-sama bergotong royong dengan masyarakat untuk kemajuan Desa Calung Bungur.

Semoga kegiatan KKM ini berjalan lancar, memberikan manfaat nyata bagi kedua belah pihak, dan menjalin silaturahmi yang erat antara Universitas Bina Bangsa dan masyarakat Desa Calung Bungur.


Mohon doa dan restu dari semua pihak agar setiap program kerja yang akan kami jalankan dapat terlaksana dengan baik.</p>
    `,
    date: "2025-08-19",
    author: "Kepala Desa",
    category: "Komunitas",
    featured: false,
    image: "/images/news8.png",
    sourceUrl:
      "https://www.kompasiana.com/kkm64calungbungur/687b2fffc925c41d787470f2/penerimaan-mahasiswa-universitas-bina-bangsa-di-desa-calung-bungur-kec-sajira-lebak-banten?utm_source=Whatsapp&utm_medium=Refferal&utm_campaign=Sharing_Desktop",
  },
  // {
  //   id: "notulen-rapat-dewan-desa",
  //   title: "Notulen Rapat Dewan Desa",
  //   excerpt:
  //     "Ringkasan keputusan yang dibuat selama rapat dewan desa bulanan termasuk persetujuan anggaran.",
  //   content: `
  //     <p>Pada tanggal 5 Januari 2024, telah dilaksanakan Rapat Dewan Desa Calungbungur yang dihadiri oleh seluruh anggota BPD, perangkat desa, dan perwakilan masyarakat. Berikut adalah ringkasan keputusan penting yang dihasilkan:</p>

  //     <h3>Persetujuan Anggaran</h3>
  //     <p>Rapat menyetujui beberapa pos anggaran untuk tahun 2024:</p>
  //     <ul>
  //       <li>Anggaran pembangunan infrastruktur: Rp 1.2 miliar</li>
  //       <li>Anggaran program kesehatan masyarakat: Rp 300 juta</li>
  //       <li>Anggaran pendidikan dan pelatihan: Rp 200 juta</li>
  //       <li>Anggaran pemberdayaan ekonomi: Rp 400 juta</li>
  //       <li>Anggaran operasional pemerintahan: Rp 500 juta</li>
  //     </ul>

  //     <h3>Program Prioritas 2024</h3>
  //     <p>Dewan menetapkan program prioritas untuk tahun 2024:</p>
  //     <ul>
  //       <li>Pembangunan balai serbaguna di kampung Gubug</li>
  //       <li>Perbaikan sistem drainase di kampung Karian</li>
  //       <li>Program pelatihan keterampilan untuk pemuda</li>
  //       <li>Pengembangan wisata desa berbasis alam</li>
  //       <li>Peningkatan kualitas pendidikan PAUD</li>
  //     </ul>

  //     <h3>Kebijakan Baru</h3>
  //     <p>Beberapa kebijakan baru yang disepakati:</p>
  //     <ul>
  //       <li>Pembentukan Tim Pengawas Pembangunan Desa</li>
  //       <li>Penetapan hari kerja bakti setiap Jumat kedua dalam bulan</li>
  //       <li>Pemberlakuan sistem online untuk pelayanan administrasi</li>
  //       <li>Pembentukan kelompok tani muda untuk regenerasi petani</li>
  //     </ul>

  //     <h3>Evaluasi Program 2023</h3>
  //     <p>Rapat juga mengevaluasi pencapaian program tahun 2023:</p>
  //     <ul>
  //       <li>Tingkat realisasi anggaran mencapai 95%</li>
  //       <li>Program kesehatan mencapai target 100%</li>
  //       <li>Pembangunan infrastruktur selesai tepat waktu</li>
  //       <li>Peningkatan PADes sebesar 15% dari tahun sebelumnya</li>
  //     </ul>

  //     <h3>Tindak Lanjut</h3>
  //     <p>Sebagai tindak lanjut rapat, akan dibentuk tim pelaksana untuk masing-masing program prioritas dengan target penyelesaian sesuai jadwal yang telah ditetapkan. Laporan progress akan disampaikan dalam rapat bulanan berikutnya.</p>

  //     <p>Seluruh keputusan rapat ini akan disosialisasikan kepada masyarakat melalui berbagai media komunikasi desa dan papan pengumuman di setiap kampung.</p>
  //   `,
  //   date: "2024-01-05",
  //   author: "Sekretaris Desa",
  //   category: "Pemerintahan",
  //   featured: false,
  //   image: "/placeholder.svg?height=400&width=800&text=Rapat+Desa",
  // },
  // {
  //   id: "panduan-keselamatan-musim-hujan",
  //   title: "Panduan Keselamatan Musim Hujan",
  //   excerpt:
  //     "Tips dan panduan keselamatan penting bagi warga selama musim hujan.",
  //   content: `
  //     <p>Memasuki musim hujan, Komite Keselamatan Desa Calungbungur mengeluarkan panduan keselamatan untuk membantu warga menghadapi berbagai risiko yang mungkin timbul selama periode ini.</p>

  //     <h3>Antisipasi Banjir</h3>
  //     <p>Langkah-langkah pencegahan banjir yang dapat dilakukan:</p>
  //     <ul>
  //       <li>Membersihkan saluran air dan got di sekitar rumah</li>
  //       <li>Tidak membuang sampah ke sungai atau saluran air</li>
  //       <li>Menyiapkan tas siaga berisi dokumen penting</li>
  //       <li>Mengetahui lokasi pengungsian terdekat</li>
  //       <li>Menyimpan makanan dan air bersih secukupnya</li>
  //     </ul>

  //     <h3>Keselamatan Berkendara</h3>
  //     <p>Tips berkendara aman saat hujan:</p>
  //     <ul>
  //       <li>Mengurangi kecepatan dan menjaga jarak aman</li>
  //       <li>Menyalakan lampu kendaraan meski siang hari</li>
  //       <li>Menghindari genangan air yang dalam</li>
  //       <li>Memeriksa kondisi ban dan rem secara rutin</li>
  //       <li>Membawa jas hujan dan perlengkapan darurat</li>
  //     </ul>

  //     <h3>Kesehatan Selama Musim Hujan</h3>
  //     <p>Menjaga kesehatan dengan cara:</p>
  //     <ul>
  //       <li>Mengonsumsi makanan bergizi dan air bersih</li>
  //       <li>Menjaga kebersihan lingkungan rumah</li>
  //       <li>Menghindari genangan air untuk mencegah DBD</li>
  //       <li>Menggunakan pakaian hangat dan kering</li>
  //       <li>Segera berobat jika mengalami gejala penyakit</li>
  //     </ul>

  //     <h3>Nomor Darurat</h3>
  //     <p>Simpan nomor-nomor penting berikut:</p>
  //     <ul>
  //       <li>Kantor Desa: (0252) 123-4567</li>
  //       <li>Puskesmas: (0252) 234-5678</li>
  //       <li>Polsek Sajira: (0252) 345-6789</li>
  //       <li>PMI Lebak: (0252) 456-7890</li>
  //       <li>BPBD Lebak: (0252) 567-8901</li>
  //     </ul>

  //     <h3>Sistem Peringatan Dini</h3>
  //     <p>Desa telah menyiapkan sistem peringatan dini melalui:</p>
  //     <ul>
  //       <li>Sirine di balai desa dan masjid</li>
  //       <li>Grup WhatsApp warga di setiap kampung</li>
  //       <li>Pengumuman melalui pengeras suara masjid</li>
  //       <li>Koordinasi dengan petugas di setiap RT/RW</li>
  //     </ul>

  //     <p>Mari bersama-sama menjaga keselamatan dan kesiapsiagaan menghadapi musim hujan. Jika ada informasi darurat atau membutuhkan bantuan, segera hubungi petugas terdekat atau kantor desa.</p>
  //   `,
  //   date: "2024-01-03",
  //   author: "Komite Keselamatan",
  //   category: "Keamanan",
  //   featured: false,
  //   image: "/placeholder.svg?height=400&width=800&text=Keselamatan+Musim+Hujan",
  // },
];

export function getNewsById(id: string): NewsArticle | undefined {
  return newsData.find((article) => article.id === id);
}
//static araay code
// export function getAllNews(): NewsArticle[] {
//   return newsData;
// }

// export function getFeaturedNews(): NewsArticle | undefined {
//   return newsData.find((article) => article.featured);
// }

// export function getRegularNews(): NewsArticle[] {
//   return newsData.filter((article) => !article.featured);
// }
export function getAllNews(): NewsArticle[] {
  return [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getRegularNews(): NewsArticle[] {
  return newsData
    .filter((article) => !article.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedNews(): NewsArticle | undefined {
  // kalau mau featured paling baru, pakai sort juga
  return newsData
    .filter((article) => article.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
}
