import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  UserCheck,
  UserX,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function Dashboard() {
  const stats = [
    {
      title: "Total Penduduk",
      value: "3,236",
      description: "Warga aktif desa",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Penduduk Laki-laki",
      value: "1,591",
      description: "49.2% dari populasi",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Penduduk Perempuan",
      value: "1,645",
      description: "50.8% dari populasi",
      icon: UserX,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];

  const additionalStats = [
    {
      title: "Kepala Keluarga",
      value: "804",
      icon: Home,
      color: "text-orange-600",
    },
    {
      title: "Bekerja",
      value: "1,890",
      icon: Briefcase,
      color: "text-indigo-600",
    },
    {
      title: "Pelajar",
      value: "456",
      icon: GraduationCap,
      color: "text-yellow-600",
    },
    {
      title: "Fasilitas Kesehatan",
      value: "3 Posyandu",
      icon: Heart,
      color: "text-red-600",
    },
  ];

  const villageOfficials = [
  {
    name: "AHYANI",
    position: "Kepala Desa",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "A C I P",
    position: "Sekretaris Desa",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "HERMAWAN",
    position: "Kasi Pemerintahan & Trantib",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "SAEPUL TURMUDI",
    position: "Kasi Ekbang & Kesra",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "MUHAMAD SUBANDI",
    position: "Kaur Umum",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "MADSUHI.S.Pd.I",
    position: "Kaur Keuangan",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "SAMHADI",
    position: "Staf Administrasi Keuangan",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "EMANG",
    position: "Staf Pengolah Data",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "PENTI",
    position: "Jaga Desa 1",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "ILYAS",
    position: "Jaga Desa 2",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "SARIP",
    position: "Jaga Desa 3",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "UPAH MASPUPAH",
    position: "MTD",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "MUHAMAD SUHARTONO",
    position: "Staf Sekertariat BPD",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "ROHANI",
    position: "Staf Kebersihan",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Selamat Datang di Desa Calungbungur
        </h1>

        {/* Full-width Hero Image */}
        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/1.png"
            alt="Pemandangan Desa Calungbungur"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-600 text-lg">
          Gambaran statistik desa dan informasi penting
        </p>
      </div>

      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Demographic Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Gambaran Umum Demografi</CardTitle>
          <CardDescription>Data kependudukan Desa Calungbungur</CardDescription>
        </CardHeader>
        <CardContent>
  <Carousel className="w-full">
    <CarouselContent>
      {villageOfficials.map((official, index) => (
        <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
          <div className="text-center">
            <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-3">
              <Image
                src={official.image || "/placeholder.svg"}
                alt={official.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">
              {official.name}
            </h3>
            <p className="text-xs text-gray-600">{official.position}</p>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
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

      {/* Village Officials Carousel */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Struktur Pemerintahan Desa</CardTitle>
          <CardDescription>Perangkat Desa Calungbungur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {villageOfficials.map((official, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src={official.image || "/placeholder.svg"}
                      alt={official.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {official.name}
                  </h3>
                  <p className="text-xs text-gray-600">{official.position}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Gambaran Desa</CardTitle>
            <CardDescription>
              Metrik dan informasi penting tentang Desa Calungbungur
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="text-center p-4 rounded-lg bg-gray-50"
                  >
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Pembaruan Terkini</CardTitle>
            <CardDescription>Berita dan pengumuman terbaru</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">
                Baru
              </Badge>
              <div>
                <p className="text-sm font-medium">Perencanaan Festival Desa</p>
                <p className="text-xs text-gray-500">2 hari yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="outline" className="mt-1">
                Update
              </Badge>
              <div>
                <p className="text-sm font-medium">Perbaikan Jalan Selesai</p>
                <p className="text-xs text-gray-500">1 minggu yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">
                Info
              </Badge>
              <div>
                <p className="text-sm font-medium">Layanan Kesehatan Baru</p>
                <p className="text-xs text-gray-500">2 minggu yang lalu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
