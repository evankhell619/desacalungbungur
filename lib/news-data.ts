export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  featured: boolean
  image?: string
}

export const newsData: NewsArticle[] = [
  {
    id: "festival-tahunan-desa-calungbungur",
    title: "Festival Tahunan Desa Calungbungur Diumumkan",
    excerpt:
      "Bergabunglah dengan perayaan terbesar tahun ini dengan makanan, musik, dan kegiatan masyarakat untuk segala usia.",
    content: `
      <p>Pemerintah Desa Calungbungur dengan bangga mengumumkan penyelenggaraan Festival Tahunan Desa Calungbungur yang akan berlangsung pada tanggal 15-17 Maret 2024. Festival ini merupakan perayaan terbesar dalam setahun yang menampilkan kekayaan budaya, kuliner, dan tradisi masyarakat desa.</p>
      
      <h3>Rangkaian Acara Festival</h3>
      <p>Festival tahun ini akan menampilkan berbagai kegiatan menarik, antara lain:</p>
      <ul>
        <li>Pameran produk unggulan desa dan UMKM lokal</li>
        <li>Pertunjukan seni tradisional dan musik daerah</li>
        <li>Lomba-lomba tradisional untuk semua usia</li>
        <li>Bazar kuliner khas Lebak dan Banten</li>
        <li>Pameran foto sejarah dan perkembangan desa</li>
        <li>Seminar pembangunan desa dan diskusi publik</li>
      </ul>
      
      <h3>Lokasi dan Waktu</h3>
      <p>Festival akan diselenggarakan di lapangan desa dan balai desa Calungbungur, mulai pukul 08.00 WIB hingga 22.00 WIB setiap harinya. Seluruh warga desa dan masyarakat umum diundang untuk berpartisipasi dalam acara ini.</p>
      
      <h3>Dukungan dan Sponsorship</h3>
      <p>Festival ini didukung penuh oleh Pemerintah Kabupaten Lebak, Kecamatan Sajira, serta berbagai pihak swasta dan UMKM lokal. Panitia juga membuka kesempatan bagi pihak yang ingin berpartisipasi sebagai sponsor atau peserta pameran.</p>
      
      <p>Untuk informasi lebih lanjut, masyarakat dapat menghubungi sekretariat desa atau mengunjungi kantor desa pada jam kerja.</p>
    `,
    date: "2024-01-15",
    author: "Pemerintah Desa",
    category: "Acara",
    featured: true,
    image: "/placeholder.svg?height=400&width=800&text=Festival+Desa",
  },
  {
    id: "layanan-kesehatan-baru",
    title: "Layanan Kesehatan Baru Tersedia",
    excerpt:
      "Puskesmas desa kini menawarkan jam operasional yang diperpanjang dan layanan medis tambahan untuk melayani masyarakat dengan lebih baik.",
    content: `
      <p>Dalam upaya meningkatkan pelayanan kesehatan bagi masyarakat Desa Calungbungur, Puskesmas Pembantu (Pustu) desa telah meluncurkan program layanan kesehatan baru yang lebih komprehensif dan mudah diakses.</p>
      
      <h3>Layanan Baru yang Tersedia</h3>
      <p>Mulai tanggal 12 Januari 2024, masyarakat dapat menikmati layanan kesehatan baru berupa:</p>
      <ul>
        <li>Pemeriksaan kesehatan umum dengan dokter umum</li>
        <li>Layanan kesehatan ibu dan anak (KIA)</li>
        <li>Imunisasi lengkap untuk bayi dan balita</li>
        <li>Pemeriksaan kesehatan lansia</li>
        <li>Konsultasi gizi dan kesehatan keluarga</li>
        <li>Layanan rujukan ke rumah sakit kabupaten</li>
      </ul>
      
      <h3>Jam Operasional Diperpanjang</h3>
      <p>Untuk memberikan kemudahan akses, jam operasional Pustu kini diperpanjang menjadi:</p>
      <ul>
        <li>Senin - Jumat: 07.00 - 19.00 WIB</li>
        <li>Sabtu: 07.00 - 15.00 WIB</li>
        <li>Minggu: 08.00 - 12.00 WIB (layanan darurat)</li>
      </ul>
      
      <h3>Tenaga Medis Profesional</h3>
      <p>Layanan kesehatan baru ini didukung oleh tenaga medis profesional yang terdiri dari 1 dokter umum, 2 bidan, dan 3 perawat yang telah berpengalaman dalam pelayanan kesehatan masyarakat.</p>
      
      <p>Seluruh layanan kesehatan ini dapat diakses dengan menggunakan BPJS Kesehatan atau pembayaran mandiri dengan tarif yang terjangkau sesuai dengan peraturan yang berlaku.</p>
    `,
    date: "2024-01-12",
    author: "dr. Sari Wulandari",
    category: "Kesehatan",
    featured: false,
    image: "/placeholder.svg?height=400&width=800&text=Layanan+Kesehatan",
  },
  {
    id: "proyek-pemeliharaan-jalan",
    title: "Proyek Pemeliharaan Jalan Selesai",
    excerpt: "Proyek renovasi jalan utama telah berhasil diselesaikan lebih cepat dari jadwal.",
    content: `
      <p>Alhamdulillah, proyek pemeliharaan dan perbaikan jalan utama Desa Calungbungur telah selesai dilaksanakan pada tanggal 10 Januari 2024, lebih cepat 2 minggu dari jadwal yang direncanakan.</p>
      
      <h3>Rincian Proyek</h3>
      <p>Proyek yang dimulai pada bulan November 2023 ini meliputi:</p>
      <ul>
        <li>Perbaikan jalan utama sepanjang 2,5 kilometer</li>
        <li>Pemasangan drainase di sepanjang jalan</li>
        <li>Perbaikan jembatan kecil di 3 titik</li>
        <li>Pemasangan rambu-rambu lalu lintas</li>
        <li>Perbaikan bahu jalan dan trotoar</li>
      </ul>
      
      <h3>Anggaran dan Sumber Dana</h3>
      <p>Total anggaran proyek ini sebesar Rp 850 juta yang bersumber dari:</p>
      <ul>
        <li>Dana Desa (DD): Rp 400 juta</li>
        <li>Alokasi Dana Desa (ADD): Rp 300 juta</li>
        <li>Bantuan Keuangan Kabupaten: Rp 150 juta</li>
      </ul>
      
      <h3>Manfaat bagi Masyarakat</h3>
      <p>Dengan selesainya proyek ini, diharapkan dapat memberikan manfaat berupa:</p>
      <ul>
        <li>Kemudahan akses transportasi warga</li>
        <li>Peningkatan keselamatan berkendara</li>
        <li>Kemudahan distribusi hasil pertanian</li>
        <li>Peningkatan nilai ekonomi desa</li>
        <li>Pengurangan biaya perawatan kendaraan</li>
      </ul>
      
      <p>Kepala Desa Calungbungur, Bapak Ahyani, mengucapkan terima kasih kepada seluruh pihak yang telah mendukung terlaksananya proyek ini, terutama kepada masyarakat yang telah bersabar selama proses pembangunan berlangsung.</p>
    `,
    date: "2024-01-10",
    author: "Dinas Pekerjaan Umum",
    category: "Infrastruktur",
    featured: false,
    image: "/placeholder.svg?height=400&width=800&text=Perbaikan+Jalan",
  },
  {
    id: "kebun-komunitas-baru",
    title: "Peluncuran Inisiatif Kebun Komunitas",
    excerpt:
      "Warga sekarang dapat mengajukan permohonan untuk mendapatkan lahan di kebun komunitas baru kami yang terletak di dekat taman pusat.",
    content: `
      <p>Komite Lingkungan Desa Calungbungur dengan dukungan penuh dari pemerintah desa meluncurkan program Kebun Komunitas yang bertujuan untuk meningkatkan ketahanan pangan dan mempererat hubungan sosial antar warga.</p>
      
      <h3>Lokasi dan Fasilitas</h3>
      <p>Kebun komunitas seluas 2 hektar ini terletak di area dekat taman pusat desa dan dilengkapi dengan:</p>
      <ul>
        <li>100 petak lahan berukuran 3x4 meter</li>
        <li>Sistem irigasi tetes modern</li>
        <li>Gudang penyimpanan alat dan pupuk</li>
        <li>Area kompos komunal</li>
        <li>Gazebo untuk pertemuan dan edukasi</li>
        <li>Akses jalan yang mudah dijangkau</li>
      </ul>
      
      <h3>Syarat dan Ketentuan</h3>
      <p>Warga yang ingin berpartisipasi dapat mengajukan permohonan dengan syarat:</p>
      <ul>
        <li>Warga Desa Calungbungur yang terdaftar dalam KTP</li>
        <li>Berkomitmen merawat lahan minimal 1 tahun</li>
        <li>Mengikuti aturan dan jadwal yang ditetapkan</li>
        <li>Berpartisipasi dalam kegiatan gotong royong</li>
        <li>Membayar iuran pemeliharaan Rp 25.000/bulan</li>
      </ul>
      
      <h3>Program Pendampingan</h3>
      <p>Setiap peserta akan mendapatkan:</p>
      <ul>
        <li>Pelatihan teknik bercocok tanam organik</li>
        <li>Bantuan bibit dan pupuk organik tahap awal</li>
        <li>Pendampingan dari penyuluh pertanian</li>
        <li>Akses ke pasar hasil panen melalui koperasi desa</li>
      </ul>
      
      <h3>Cara Pendaftaran</h3>
      <p>Pendaftaran dibuka mulai tanggal 8 Januari 2024 dan dapat dilakukan di kantor desa dengan membawa:</p>
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy Kartu Keluarga</li>
        <li>Surat pernyataan kesediaan bermaterai</li>
      </ul>
      
      <p>Untuk informasi lebih lanjut, hubungi Komite Lingkungan melalui kantor desa atau datang langsung pada jam kerja.</p>
    `,
    date: "2024-01-08",
    author: "Komite Lingkungan",
    category: "Komunitas",
    featured: false,
    image: "/placeholder.svg?height=400&width=800&text=Kebun+Komunitas",
  },
  {
    id: "notulen-rapat-dewan-desa",
    title: "Notulen Rapat Dewan Desa",
    excerpt: "Ringkasan keputusan yang dibuat selama rapat dewan desa bulanan termasuk persetujuan anggaran.",
    content: `
      <p>Pada tanggal 5 Januari 2024, telah dilaksanakan Rapat Dewan Desa Calungbungur yang dihadiri oleh seluruh anggota BPD, perangkat desa, dan perwakilan masyarakat. Berikut adalah ringkasan keputusan penting yang dihasilkan:</p>
      
      <h3>Persetujuan Anggaran</h3>
      <p>Rapat menyetujui beberapa pos anggaran untuk tahun 2024:</p>
      <ul>
        <li>Anggaran pembangunan infrastruktur: Rp 1.2 miliar</li>
        <li>Anggaran program kesehatan masyarakat: Rp 300 juta</li>
        <li>Anggaran pendidikan dan pelatihan: Rp 200 juta</li>
        <li>Anggaran pemberdayaan ekonomi: Rp 400 juta</li>
        <li>Anggaran operasional pemerintahan: Rp 500 juta</li>
      </ul>
      
      <h3>Program Prioritas 2024</h3>
      <p>Dewan menetapkan program prioritas untuk tahun 2024:</p>
      <ul>
        <li>Pembangunan balai serbaguna di kampung Gubug</li>
        <li>Perbaikan sistem drainase di kampung Karian</li>
        <li>Program pelatihan keterampilan untuk pemuda</li>
        <li>Pengembangan wisata desa berbasis alam</li>
        <li>Peningkatan kualitas pendidikan PAUD</li>
      </ul>
      
      <h3>Kebijakan Baru</h3>
      <p>Beberapa kebijakan baru yang disepakati:</p>
      <ul>
        <li>Pembentukan Tim Pengawas Pembangunan Desa</li>
        <li>Penetapan hari kerja bakti setiap Jumat kedua dalam bulan</li>
        <li>Pemberlakuan sistem online untuk pelayanan administrasi</li>
        <li>Pembentukan kelompok tani muda untuk regenerasi petani</li>
      </ul>
      
      <h3>Evaluasi Program 2023</h3>
      <p>Rapat juga mengevaluasi pencapaian program tahun 2023:</p>
      <ul>
        <li>Tingkat realisasi anggaran mencapai 95%</li>
        <li>Program kesehatan mencapai target 100%</li>
        <li>Pembangunan infrastruktur selesai tepat waktu</li>
        <li>Peningkatan PADes sebesar 15% dari tahun sebelumnya</li>
      </ul>
      
      <h3>Tindak Lanjut</h3>
      <p>Sebagai tindak lanjut rapat, akan dibentuk tim pelaksana untuk masing-masing program prioritas dengan target penyelesaian sesuai jadwal yang telah ditetapkan. Laporan progress akan disampaikan dalam rapat bulanan berikutnya.</p>
      
      <p>Seluruh keputusan rapat ini akan disosialisasikan kepada masyarakat melalui berbagai media komunikasi desa dan papan pengumuman di setiap kampung.</p>
    `,
    date: "2024-01-05",
    author: "Sekretaris Desa",
    category: "Pemerintahan",
    featured: false,
    image: "/placeholder.svg?height=400&width=800&text=Rapat+Desa",
  },
  {
    id: "panduan-keselamatan-musim-hujan",
    title: "Panduan Keselamatan Musim Hujan",
    excerpt: "Tips dan panduan keselamatan penting bagi warga selama musim hujan.",
    content: `
      <p>Memasuki musim hujan, Komite Keselamatan Desa Calungbungur mengeluarkan panduan keselamatan untuk membantu warga menghadapi berbagai risiko yang mungkin timbul selama periode ini.</p>
      
      <h3>Antisipasi Banjir</h3>
      <p>Langkah-langkah pencegahan banjir yang dapat dilakukan:</p>
      <ul>
        <li>Membersihkan saluran air dan got di sekitar rumah</li>
        <li>Tidak membuang sampah ke sungai atau saluran air</li>
        <li>Menyiapkan tas siaga berisi dokumen penting</li>
        <li>Mengetahui lokasi pengungsian terdekat</li>
        <li>Menyimpan makanan dan air bersih secukupnya</li>
      </ul>
      
      <h3>Keselamatan Berkendara</h3>
      <p>Tips berkendara aman saat hujan:</p>
      <ul>
        <li>Mengurangi kecepatan dan menjaga jarak aman</li>
        <li>Menyalakan lampu kendaraan meski siang hari</li>
        <li>Menghindari genangan air yang dalam</li>
        <li>Memeriksa kondisi ban dan rem secara rutin</li>
        <li>Membawa jas hujan dan perlengkapan darurat</li>
      </ul>
      
      <h3>Kesehatan Selama Musim Hujan</h3>
      <p>Menjaga kesehatan dengan cara:</p>
      <ul>
        <li>Mengonsumsi makanan bergizi dan air bersih</li>
        <li>Menjaga kebersihan lingkungan rumah</li>
        <li>Menghindari genangan air untuk mencegah DBD</li>
        <li>Menggunakan pakaian hangat dan kering</li>
        <li>Segera berobat jika mengalami gejala penyakit</li>
      </ul>
      
      <h3>Nomor Darurat</h3>
      <p>Simpan nomor-nomor penting berikut:</p>
      <ul>
        <li>Kantor Desa: (0252) 123-4567</li>
        <li>Puskesmas: (0252) 234-5678</li>
        <li>Polsek Sajira: (0252) 345-6789</li>
        <li>PMI Lebak: (0252) 456-7890</li>
        <li>BPBD Lebak: (0252) 567-8901</li>
      </ul>
      
      <h3>Sistem Peringatan Dini</h3>
      <p>Desa telah menyiapkan sistem peringatan dini melalui:</p>
      <ul>
        <li>Sirine di balai desa dan masjid</li>
        <li>Grup WhatsApp warga di setiap kampung</li>
        <li>Pengumuman melalui pengeras suara masjid</li>
        <li>Koordinasi dengan petugas di setiap RT/RW</li>
      </ul>
      
      <p>Mari bersama-sama menjaga keselamatan dan kesiapsiagaan menghadapi musim hujan. Jika ada informasi darurat atau membutuhkan bantuan, segera hubungi petugas terdekat atau kantor desa.</p>
    `,
    date: "2024-01-03",
    author: "Komite Keselamatan",
    category: "Keamanan",
    featured: false,
    image: "/placeholder.svg?height=400&width=800&text=Keselamatan+Musim+Hujan",
  },
]

export function getNewsById(id: string): NewsArticle | undefined {
  return newsData.find((article) => article.id === id)
}

export function getAllNews(): NewsArticle[] {
  return newsData
}

export function getFeaturedNews(): NewsArticle | undefined {
  return newsData.find((article) => article.featured)
}

export function getRegularNews(): NewsArticle[] {
  return newsData.filter((article) => !article.featured)
}
