"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Briefcase,
  MessageCircle,
} from "lucide-react";

export default function Enterprise() {
  const enterprises = [
    {
      name: "Keripik Ruhay",
      type: "Makanan",
      description:
        "Keripik Ruhay adalah produk makanan ringan yang terbuat dari bahan-bahan berkualitas tinggi dan diproses secara tradisional.",
      image: "/images/food2.jpeg",
      employees: 5,
      revenue: "Rp 5 Jt",
      established: "2018",
      contact: {
        phone: "Suti : 0858-8279-2091",
        email: "info@keripikruhay-calungbungur.id",
        address: "Jl. Makanan No. 456, Desa Calungbungur",
      },
      status: "Aktif",
    },
    {
      name: "Keripik Pisang dan Singkong",
      type: "Makanan",
      description:
        "Produk Makanan tangan tradisional yang dibuat oleh pengrajin lokal, dijual secara lokal dan online.",
        image: "/images/food2.jpeg",
      employees: 10,
      revenue: "Rp 4 Jt",
      established: "2020",
      contact: {
        phone: "Suti : 0858-8279-2091",
        email: "order@Makanan-calungbungur.id",
        address: "Jl.Muncang-Sabagi Rangkas Bitung Kp.Karian Baru Desa Calung Bungur, kec.sajira-lebak, 42371",
      },
      status: "Aktif",
    },

  ];
// count total revenue and format it
  const parseRevenue = (revenue: string): number => {
  const cleaned = revenue.replace(/[^\d]/g, ""); // hanya angka
  const isJt = revenue.toLowerCase().includes("jt");

  const numeric = parseInt(cleaned, 10);
  return isNaN(numeric) ? 0 : numeric * (isJt ? 1_000_000 : 1);
};

const formatCurrencyShort = (value: number): string => {
  if (value >= 1_000_000_000) return `Rp ${Math.round(value / 1_000_000_000)} M`;
  if (value >= 1_000_000) return `Rp ${Math.round(value / 1_000_000)} Jt`;
  return `Rp ${value.toLocaleString("id-ID")}`;
};
//count end


const totalRevenueValue = enterprises.reduce(
  (sum, enterprise) => sum + parseRevenue(enterprise.revenue),
  0
);
  // Update stats calculation for Indonesian currency
  const totalStats = {
    totalEmployees: enterprises.reduce(
      (sum, enterprise) => sum + enterprise.employees,
      0
    ),
    // totalRevenue: "Rp 4.87M",
    totalRevenue: formatCurrencyShort(totalRevenueValue),
    totalEnterprises: enterprises.length,
    avgEmployees: Math.round(
      enterprises.reduce((sum, enterprise) => sum + enterprise.employees, 0) /
        enterprises.length
    ),
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Pertanian: "bg-green-100 text-green-800",
      Kerajinan: "bg-blue-100 text-blue-800",
      Pariwisata: "bg-purple-100 text-purple-800",
      Energi: "bg-yellow-100 text-yellow-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      Aktif: "bg-green-100 text-green-800",
      Berkembang: "bg-blue-100 text-blue-800",
      Perencanaan: "bg-yellow-100 text-yellow-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/623232", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Usaha Milik Desa
        </h1>
        <p className="text-gray-600">
          Usaha masyarakat yang mendorong pertumbuhan ekonomi dan keberlanjutan
        </p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Usaha
            </CardTitle>
            <Building2 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {totalStats.totalEnterprises}
            </div>
            <p className="text-xs text-gray-500">Usaha aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Pekerja
            </CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {totalStats.totalEmployees}
            </div>
            <p className="text-xs text-gray-500">Lapangan kerja</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Pendapatan
            </CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {totalStats.totalRevenue}
            </div>
            <p className="text-xs text-gray-500">Pendapatan tahunan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Rata-rata Pekerja
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {totalStats.avgEmployees}
            </div>
            <p className="text-xs text-gray-500">Per usaha</p>
          </CardContent>
        </Card>
      </div>

      {/* Enterprise Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {enterprises.map((enterprise, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    {enterprise.name}
                  </CardTitle>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge
                      variant="outline"
                      className={getTypeColor(enterprise.type)}
                    >
                      {enterprise.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getStatusColor(enterprise.status)}
                    >
                      {enterprise.status}
                    </Badge>
                  </div>
                </div>
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
              <CardDescription className="text-base">
                {enterprise.description}
              </CardDescription>
              {enterprise.image && (
    <img
      src={enterprise.image}
      alt={enterprise.name}
      className="mt-3 w-full h-48 object-cover rounded-lg"
    />
  )}
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {enterprise.employees}
                  </div>
                  <div className="text-xs text-gray-600">Pekerja</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {enterprise.revenue}
                  </div>
                  <div className="text-xs text-gray-600">Pendapatan</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Briefcase className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {enterprise.established}
                  </div>
                  <div className="text-xs text-gray-600">Didirikan</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{enterprise.contact.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{enterprise.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{enterprise.contact.email}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <img
                    src="https://cdn.simpleicons.org/whatsapp/ffffff"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Hubungi Saya
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
