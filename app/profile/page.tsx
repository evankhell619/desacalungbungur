import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrganizationalChart } from "@/components/organizational-chart";

export default function Profile() {
  const officials = [
    { no: "1", name: "AHYANI", position: "Kepala Desa" },
    { no: "2", name: "A C I P", position: "Sekretaris Desa" },
    { no: "3", name: "HERMAWAN", position: "Kasi Pemerintahan & Trantib" },
    { no: "4", name: "SAEPUL TURMUDI", position: "Kasi Ekbang & Kesra" },
    { no: "5", name: "MUHAMAD SUBANDI", position: "Kaur Umum" },
    { no: "6", name: "MADSUHI.S.Pd.I", position: "Kaur Keuangan" },
    { no: "7", name: "SAMHADI", position: "Staf Administrasi Keuangan" },
    { no: "8", name: "EMANG", position: "Staf Pengolah Data" },
    { no: "9", name: "PENTI", position: "Jaga Desa 1" },
    { no: "10", name: "ILYAS", position: "Jaga Desa 2" },
    { no: "11", name: "SARIP", position: "Jaga Desa 3" },
    { no: "12", name: "UPAH MASPUPAH", position: "MTD" },
    { no: "13", name: "MUHAMAD SUHARTONO", position: "Staf Sekertariat BPD" },
    { no: "14", name: "ROHANI", position: "Staf Kebersihan" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Profil Desa Calungbungur
        </h1>
        <p className="text-gray-600">
          Mengenal lebih dalam tentang sejarah dan perkembangan desa
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden mb-8">
        <Image
          src="/images/bg2.jpeg"
          alt="Desa Calungbungur"
          fill
          className="object-cover"
        />
      </div>

      {/* Gambaran Umum */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Gambaran Umum</CardTitle>
          <CardDescription>
            Informasi umum tentang Desa Calungbungur
          </CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="space-y-4 text-gray-700">
            <p>
              Desa Calungbungur adalah masuk wilayah Kecamatan Sajira dengan
              luas wilayah Desa Calungbungur 850 hektar. Kepadataan penduduk
              sudah mencapai 3,240 jiwa penduduk tetap, 968 Kepala Keluarga
              (KK). Namun dari keluasan wilayah yang begitu potensial saat ini
              masih banyak sumber daya alam yang berpotensi belum digali saat
              ini. Letak Geografis Desa Calungbungur berada di wilayah Kabupaten
              Lebak.
            </p>
            <p>
              Keseharian masyarakat Desa Calungbungur adalah bercocok tanam,
              bertani, buruh tani, dan berternak (Kambing, Ayam, Itik),
              Perikanan, Buruh bangunan, serta berdagang dan lainnya. Mengingat
              keadaan wilayah Desa Calungbungur ladang dan pesawahan. Masyarakat
              umumnya sudah aktif mengolah lahan pertanian dan dengan menanam
              padi dengan menggunakan cara yang sederhana dan konvensional dan
              hasil panen belum seutuhnya menemukan harga yang sebanding dengan
              pekerjaan tersebut.
            </p>
            <p>
              Kendalanya yang utama adalah Sulitnya membeli pupuk, naik turunnya
              harga perdagangan tanaman padi dan serangan hama wereng, tikus,
              banjir dll. Dan juga pada saat panen raya, sering turun drastis
              sementara harga tinggi kadang-kadang tidak mampu bertahan lama
              sehingga banyak yang belum sempat menjual sudah turun harga lagi.
            </p>
            <p>
              Jarak tempuh ke ibukota Kecamatan sejauh 6 Kilometer dengan lama
              tempuh sekitar 15 menit. Jalan Raya sebagian sudah bagus karena
              telah diperbaiki sedangkan jalan lingkungan Desa sebagian masih
              ada yang belum dibangun sehingga belum mampu untuk menjangkau dari
              seluruh wilayah Desa sehingga masih kesulitan untuk mengangkut
              hasil pertanian. Jarak tempuh ke Ibu kota Kabupaten Lebak sejauh
              23 kilo meter dengan lama tempuh 45 menit.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Batas Wilayah dan Luas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Batas-Batas Desa</CardTitle>
            <CardDescription>
              Wilayah yang berbatasan dengan Desa Calungbungur
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Utara</h4>
                  <p className="text-sm text-gray-600">
                    Desa Sajira, Sukarame, Sukajaya dan Calungbungur
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Timur</h4>
                  <p className="text-sm text-gray-600">Desa Sukasari</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sebelah Selatan
                  </h4>
                  <p className="text-sm text-gray-600">Desa Sukamarga</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Barat</h4>
                  <p className="text-sm text-gray-600">Desa Sanghiangjaya</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Luas Wilayah</CardTitle>
            <CardDescription>
              Pembagian luas wilayah berdasarkan penggunaan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Lahan Persawahan</span>
                <span className="text-blue-600 font-semibold">47 Ha</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Lahan Perkebunan</span>
                <span className="text-green-600 font-semibold">224 Ha</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Pekarangan</span>
                <span className="text-orange-600 font-semibold">214 Ha</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Lain-lain</span>
                <span className="text-purple-600 font-semibold">65 Ha</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                <span className="font-bold">Total Luas</span>
                <span className="text-blue-800 font-bold">850 Ha</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Wilayah Administrasi */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Wilayah Administrasi</CardTitle>
          <CardDescription>
            Kampung-kampung di Desa Calungbungur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">
                Kampung Karian Baru
              </h4>
              <p className="text-2xl font-bold text-blue-600">1,575 Jiwa</p>
              <p className="text-sm text-gray-600">48.6% dari total penduduk</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">
                Kampung Gubug Lama
              </h4>
              <p className="text-2xl font-bold text-green-600">675 Jiwa</p>
              <p className="text-sm text-gray-600">20.8% dari total penduduk</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">
                Kampung Pasir Angin
              </h4>
              <p className="text-2xl font-bold text-orange-600">560 Jiwa</p>
              <p className="text-sm text-gray-600">17.3% dari total penduduk</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">
                Kampung Nanggela Baru
              </h4>
              <p className="text-2xl font-bold text-purple-600">280 Jiwa</p>
              <p className="text-sm text-gray-600">8.6% dari total penduduk</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">
                Kampung Gubug PGRI
              </h4>
              <p className="text-2xl font-bold text-red-600">150 Jiwa</p>
              <p className="text-sm text-gray-600">4.6% dari total penduduk</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Jumlah Penduduk Detail */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Jumlah Penduduk</CardTitle>
          <CardDescription>
            Rincian data kependudukan Desa Calungbungur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Data Umum</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Jumlah Keseluruhan</span>
                  <span className="font-bold text-blue-600">3,240 Jiwa</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Jumlah KK</span>
                  <span className="font-bold text-green-600">968 KK</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Penduduk Laki-laki</span>
                  <span className="font-bold text-purple-600">1,620 Jiwa</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Penduduk Perempuan</span>
                  <span className="font-bold text-pink-600">1,620 Jiwa</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Berdasarkan Usia</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Usia 0-5 Tahun</span>
                  <span className="font-bold text-blue-600">243 Jiwa</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Usia 6-14 Tahun</span>
                  <span className="font-bold text-green-600">414 Jiwa</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Usia 15-64 Tahun</span>
                  <span className="font-bold text-orange-600">2,383 Jiwa</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Usia 65+ Tahun</span>
                  <span className="font-bold text-red-600">199 Jiwa</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mata Pencaharian */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Mata Pencaharian Penduduk</CardTitle>
          <CardDescription>
            Distribusi pekerjaan masyarakat Desa Calungbungur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">Buruh Tani/Kebun</h4>
              <p className="text-2xl font-bold text-green-600">586 Orang</p>
              <p className="text-sm text-gray-600">38.6% dari total pekerja</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">Lain-lain</h4>
              <p className="text-2xl font-bold text-purple-600">476 Orang</p>
              <p className="text-sm text-gray-600">31.4% dari total pekerja</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">Petani/Pekebun</h4>
              <p className="text-2xl font-bold text-orange-600">306 Orang</p>
              <p className="text-sm text-gray-600">20.2% dari total pekerja</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">Berdagang</h4>
              <p className="text-2xl font-bold text-blue-600">87 Orang</p>
              <p className="text-sm text-gray-600">5.7% dari total pekerja</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">Wiraswasta</h4>
              <p className="text-2xl font-bold text-red-600">78 Orang</p>
              <p className="text-sm text-gray-600">5.1% dari total pekerja</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900">
                Pegawai Negeri Sipil
              </h4>
              <p className="text-2xl font-bold text-indigo-600">10 Orang</p>
              <p className="text-sm text-gray-600">0.7% dari total pekerja</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tingkat Kesejahteraan */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Jumlah Penduduk Miskin</CardTitle>
          <CardDescription>
            Klasifikasi keluarga berdasarkan tingkat kesejahteraan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">
              <strong>711 KK (73.4%)</strong> dari total keluarga masih dalam
              kategori prasejahtera
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-red-50">
              <h4 className="font-semibold text-red-900">
                Keluarga Prasejahtera
              </h4>
              <p className="text-2xl font-bold text-red-600">711 KK</p>
              <p className="text-sm text-red-600">73.4% dari total KK</p>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50">
              <h4 className="font-semibold text-orange-900">
                Keluarga Sejahtera I
              </h4>
              <p className="text-2xl font-bold text-orange-600">154 KK</p>
              <p className="text-sm text-orange-600">15.9% dari total KK</p>
            </div>
            <div className="p-4 border rounded-lg bg-yellow-50">
              <h4 className="font-semibold text-yellow-900">
                Keluarga Sejahtera II
              </h4>
              <p className="text-2xl font-bold text-yellow-600">102 KK</p>
              <p className="text-sm text-yellow-600">10.5% dari total KK</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50">
              <h4 className="font-semibold text-green-900">
                Keluarga Sejahtera III
              </h4>
              <p className="text-2xl font-bold text-green-600">69 KK</p>
              <p className="text-sm text-green-600">7.1% dari total KK</p>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50">
              <h4 className="font-semibold text-blue-900">
                Keluarga Sejahtera Plus
              </h4>
              <p className="text-2xl font-bold text-blue-600">31 KK</p>
              <p className="text-sm text-blue-600">3.2% dari total KK</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Visi dan Misi */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Visi dan Misi Desa Calungbungur</CardTitle>
          <CardDescription>Arah dan tujuan pembangunan desa</CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="space-y-4 text-gray-700">
            <p>
              Sesuai dengan kaidah perundang-undangan bahwa RKP Desa harus
              selaras dengan RPJM Desa, maka RKP Desa Perubhan Calungbungur
              Tahun 2023 disusun dengan memperhatikan Visi dan Misi Desa
              Calungbungur yang tertuang dalam RPJM Tahun 2021, sebagai dasar
              dalam pelaksanaan pembangunan Desa Calungbungur, yaitu:
            </p>

            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-800">
                "Desa Calungbungur Menjadi Desa Berkembang"
              </h3>
              <p className="italic mt-2">
                Desa Berkembang yaitu Desa yang bisa menjalankan semua aspek
                pemerintahan desa dengan pelayanan prima dan terciptanya tertib
                administrasi di desa
              </p>
            </div>

            <h3 className="font-bold text-lg">MISI:</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Menciptakan kinerja perangkat desa sesuai aturan yang berlaku
              </li>
              <li>Transparansi dan akuntable dalam pengunaan anggaran</li>
              <li>Aspiratip</li>
              <li>
                Terbangunnya tata kelola pemerintah desa yang baik dan bersih
                guna mewujudkan desa parungsari yang adil, makmur dan sejahtera.
              </li>
              <li>
                Bekerjasama dengan pemerintah daerah tingkat kecamatan,
                kabupaten dan propinsi dalam mewujudkan pembangunan
                infrastruktur di desa Calungbungur
              </li>
              <li>Melestarikan budaya khas desa Calungbunngur</li>
              <li>
                Meningkatkan kerukunan antara warga nasyarakat serta membentuk
                masyarakat yang cerdas, mandiri dan berakhlakul karimah
              </li>
              <li>
                Memberikan rujukan terhadap kesejahtraan masyarakat dalam bidang
                pendidikan, kesejahtraan, keamanan dan kesejahtraan.
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Struktur Pemerintahan */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Struktur Pemerintahan Desa</CardTitle>
          <CardDescription>Perangkat Desa Calungbungur</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Jabatan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {officials.map((official) => (
                <TableRow key={official.no}>
                  <TableCell>{official.no}</TableCell>
                  <TableCell className="font-medium">{official.name}</TableCell>
                  <TableCell>{official.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Organizational Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Bagan Organisasi</CardTitle>
          <CardDescription>
            Struktur organisasi pemerintahan Desa Calungbungur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OrganizationalChart />
        </CardContent>
      </Card>

      {/* Historical Background */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Latar Belakang Sejarah</CardTitle>
            <CardDescription>
              Asal usul dan pembentukan Desa Calungbungur
            </CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-4 text-gray-700">
              <p>
                Residen Lebak pada masa kolonial yang pada masa itu dipimpin
                oleh seorang panglima Belanda yaitu{" "}
                <strong>Multatuli (Doewes Decker Multatuli)</strong> memiliki 5
                distrik yaitu:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Distrik Rangkasbitung yang meliputi wilayah Rangkasbitung,
                  Sajira dan Maja.
                </li>
                <li>
                  Distrik Sajira yang meliputi Wilayah Sajira, Cipanas dan
                  Muncang
                </li>
                <li>
                  Distrik Gunungkencana yang meliputi wilayah Gunungkencana,
                  Cileles dan Banjarsari.
                </li>
                <li>
                  Distrik Malingping yang meliputi Cimarga, Lewidamar dan
                  Bojongmanik
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Origin Story */}
        <Card>
          <CardHeader>
            <CardTitle>Asal Usul Nama Desa</CardTitle>
            <CardDescription>
              Makna dan filosofi di balik nama Calungbungur
            </CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-4 text-gray-700">
              <p>
                Desa Calungbungur berasal dari sebuah kampung yang bernama{" "}
                <strong>Saska</strong>, yang mana di kampung itu adanya sebuah
                mesjid peninggalan jaman dahulu yang dibangun pada masa para
                wali pejuang islam.
              </p>
              <p>
                <strong>Calungbungur</strong> diambil sebagai simbol nama desa
                dari <em>"calun"</em> sejenis tanaman yang merambat yang
                melambangkan para tokoh islam yang menyebarkan agama dengan cara
                yang lembut namun kuat, seperti tanaman merambat yang tumbuh
                dengan tekun.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
