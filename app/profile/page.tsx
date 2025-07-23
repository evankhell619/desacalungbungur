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
          src="/images/2.png"
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
              luas wilayah Desa Calungbungur 920 hektar. Kepadataan penduduk
              sudah mencapai 2691 jiwa penduduk tetap, 804 Kepala Keluarga (KK)
              di Tahun 2021. Namun dari keluasan wilaayah yang begitu potensial
              saat ini masih banyak sumber daya alam yang berpotensi belum
              digali saat ini. Letak Geografis Desa Calungbungur berada di
              wilayah Kabupaten Lebak.
            </p>
            <p>
              Keseharian masyarakat Desa Calungbungur adalah bercocok tanam,
              bertani, buruuh tani, dan berternak (Kambing, Ayam, Itik),
              Perikanan, Buruh bangunan, serta berdagang dan lainnya. Mengingat
              keadaan wilayah Desa Calungbungur ladang dan pesawahan. Masyarakat
              umumnya sudah aktif mengolah lahan pertanian dan dengan menanam
              padi dengan menggunakan cara yang sederhana dan konvensional dan
              hasil panen belum seutuhnya menemukan harga yang sebanding dengan
              pekerjaan tersebut.
            </p>
            <p>
              Kendalanya yang utama adalah Sulitnya meembeli pupuk, naik
              turunnya harga perdagangan tanamaan padi dan serangan haama
              wereng, tikus, banjir dll. Dan juga pada saat panen raya, sering
              turun drastis sementara harga tinggi kadang-kadang tidak mampu
              bertahan lama sehingga banyak yang belum sempat menjual sudah
              turun harga lagi.
            </p>
            <p>
              Jarak tempuhh ke ibukota Kecamatan sejaauh 6 Kilometer dengan lama
              tempuh sekitar 15 menit. Jalan Raya sebagian sudah bagus karena
              telah diperbaiki sedangkan jalan lingkungan Desa sebagian masih
              ada yang belum dibangun sehingga belum mampu unttuk menjangkau
              dari seluruh wilayah Desa sehingga masih kesulitan unttuk
              mengangkut hasil pertanian. Jarak tempuh ke Ibu kota Kabupaaten
              Lebak sejauh 23 kilo meter dengaan lamaa tempuh 45 menit.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Village History Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Sejarah Desa</CardTitle>
          <CardDescription>
            Sejarah dan latar belakang Desa Calungbungur
          </CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="space-y-4 text-gray-700">
            <p>
              Residen Lebak pada masa kolonial yang pada masa itu dipimpin oleh
              seorang panglima Belanda yaitu Multatuli (Doewes Decker Multatuli)
              memiliki 5 distrik yaitu:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Distrik Rangkasbitung yang meliputi wilayah Rangkasbitung,
                Sajira dan Maja.
              </li>
              <li>
                Distrik Sajira yang meliputi Wilayah Sajira, Cipanas dan Muncang
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
            <p>
              Setelah melihat sejarah Lebak, maka Distrik Sajira memiliki
              beberapa wilayah yaitu Sajira, Maraya, Sukarame, Calungbungur dan
              Parungsari. Desa Calungbungur berasal dari sebuah kampung yang
              bernama Saska, yang mana di kampung itu adanya sebuah mesjid
              peninggalan jaman dahulu yang dibangun pada masa para wali pejuang
              islam. Calungbungur diambil sebagai simbol nama desa dari "calun"
              sejenis tanaman yang merambat yang melambangkan para tokoh islam.
            </p>
            <p>
              Desa Calungbungur merupakan salah satu desa dengan jumlah penduduk
              3,236 yang terdiri dari laki-laki 1,591 dan perempuan 1,645. Desa
              Calungbungur memiliki 5 kampung diantaranya ialah:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Kampung Panunggangan</li>
              <li>Kampung Karian</li>
              <li>Kampung Nanggela</li>
              <li>Kampung Gubug</li>
              <li>Kampung Cimenteng</li>
            </ul>
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
